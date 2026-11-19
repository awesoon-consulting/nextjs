import { CONSENT_WORDINGS } from './consent'

export type Signup = { email: string; source: string | null; locale: string | null; consentVersion: string }
export type ParseResult = { kind: 'ok'; signup: Signup } | { kind: 'invalid'; error: string } | { kind: 'bot' }

export type Env = {
  supabaseUrl: string
  supabaseKey: string
  resendKey: string
  from: string
  notifyTo: string
  siteUrl: string
  senderAddress: string
  contactEmail: string
  // When set, database functions run through this instead of the REST API (the site's own Postgres connection).
  call?: (fn: string, args: Record<string, unknown>) => Promise<unknown[]>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SOURCE = /^[a-z0-9][a-z0-9._-]{0,99}$/
const LOCALE = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})?$/

export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase().normalize('NFC')
}

export function parseSignup(body: unknown): ParseResult {
  if (!body || typeof body !== 'object') return { kind: 'invalid', error: 'invalid body' }
  const b = body as Record<string, unknown>
  if (typeof b.website === 'string' && b.website.trim() !== '') return { kind: 'bot' }

  const email = typeof b.email === 'string' ? normalizeEmail(b.email) : ''
  if (!email || email.length > 254 || !EMAIL.test(email)) return { kind: 'invalid', error: 'email is invalid' }
  if (b.consent !== true) return { kind: 'invalid', error: 'consent is required' }
  if (typeof b.consentVersion !== 'string' || !(b.consentVersion in CONSENT_WORDINGS)) {
    return { kind: 'invalid', error: 'consent version is unknown' }
  }

  const source = typeof b.source === 'string' && SOURCE.test(b.source) ? b.source : null
  const locale = typeof b.locale === 'string' && LOCALE.test(b.locale) ? b.locale : null
  return { kind: 'ok', signup: { email, source, locale, consentVersion: b.consentVersion } }
}

export type SignupResult = {
  waitlistId: string
  created: boolean
  sendConfirm: boolean
  confirmToken: string
  unsubscribeToken: string
}

async function rpc<T>(env: Env, fn: string, args: Record<string, unknown>, fetchImpl: typeof fetch): Promise<T[]> {
  if (env.call) return (await env.call(fn, args)) as T[]
  const res = await fetchImpl(`${env.supabaseUrl}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: { apikey: env.supabaseKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
  })
  if (!res.ok) throw new Error(`${fn} failed with ${res.status}`)
  return (await res.json()) as T[]
}

export async function saveSignup(signup: Signup, env: Env, fetchImpl: typeof fetch = fetch): Promise<SignupResult> {
  const [row] = await rpc<{
    waitlist_id: string
    created: boolean
    send_confirm: boolean
    confirm_token: string
    unsubscribe_token: string
  }>(
    env,
    'tapbody_waitlist_signup',
    { p_email: signup.email, p_source: signup.source, p_locale: signup.locale, p_consent_version: signup.consentVersion },
    fetchImpl,
  )
  return {
    waitlistId: row.waitlist_id,
    created: row.created,
    sendConfirm: row.send_confirm,
    confirmToken: row.confirm_token,
    unsubscribeToken: row.unsubscribe_token,
  }
}

export async function confirmSignup(
  token: string,
  env: Env,
  fetchImpl: typeof fetch = fetch,
): Promise<{ found: boolean; newlyConfirmed: boolean; waitlistId?: string }> {
  const rows = await rpc<{ waitlist_id: string; newly_confirmed: boolean }>(
    env,
    'tapbody_waitlist_confirm',
    { p_token: token },
    fetchImpl,
  )
  if (rows.length === 0) return { found: false, newlyConfirmed: false }
  return { found: true, newlyConfirmed: rows[0].newly_confirmed, waitlistId: rows[0].waitlist_id }
}

export async function unsubscribe(
  token: string,
  env: Env,
  fetchImpl: typeof fetch = fetch,
): Promise<{ found: boolean; newlyUnsubscribed: boolean }> {
  const rows = await rpc<{ waitlist_id: string; newly_unsubscribed: boolean }>(
    env,
    'tapbody_waitlist_unsubscribe',
    { p_token: token },
    fetchImpl,
  )
  if (rows.length === 0) return { found: false, newlyUnsubscribed: false }
  return { found: true, newlyUnsubscribed: rows[0].newly_unsubscribed }
}

export function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  return `${local.slice(0, 1)}***@${domain}`
}

async function sendEmail(
  env: Env,
  message: { to: string; subject: string; text: string; idempotencyKey: string; headers?: Record<string, string> },
  fetchImpl: typeof fetch,
): Promise<boolean> {
  const res = await fetchImpl('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.resendKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': message.idempotencyKey,
    },
    body: JSON.stringify({
      from: env.from,
      to: [message.to],
      subject: message.subject,
      text: message.text,
      ...(message.headers ? { headers: message.headers } : {}),
    }),
  })
  return res.ok
}

export function confirmEmailText(env: Env, result: SignupResult, locale = 'en'): string {
  return [
    'Thanks for joining the TapBody waitlist. Please confirm your email here:',
    `${env.siteUrl}/${locale}/tapbody/confirm?token=${result.confirmToken}`,
    '',
    'If you did not sign up, you can ignore this email and we will not write again. You can also unsubscribe here:',
    `${env.siteUrl}/${locale}/tapbody/unsubscribe?token=${result.unsubscribeToken}`,
    '',
    `TapBody is made by Awesoon Technologies Inc., ${env.senderAddress}. Questions: ${env.contactEmail}`,
  ].join('\n')
}

// One-click unsubscribe (RFC 8058) so mail apps can show their own unsubscribe button.
export function unsubscribeHeaders(env: Env, result: SignupResult): Record<string, string> {
  return {
    'List-Unsubscribe': `<${env.siteUrl}/api/tapbody-waitlist/unsubscribe?token=${result.unsubscribeToken}>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  }
}

const LINK_LOCALES = ['en', 'fr', 'es']
function linkLocale(locale: string | null): string {
  const base = (locale ?? 'en').slice(0, 2).toLowerCase()
  return LINK_LOCALES.includes(base) ? base : 'en'
}

export function sendConfirmation(
  env: Env,
  email: string,
  result: SignupResult,
  fetchImpl: typeof fetch = fetch,
  locale: string | null = 'en',
) {
  const day = new Date().toISOString().slice(0, 10)
  return sendEmail(
    env,
    {
      to: email,
      subject: 'Confirm your spot on the TapBody waitlist',
      text: confirmEmailText(env, result, linkLocale(locale)),
      idempotencyKey: `tapbody-confirm-${result.waitlistId}-${day}`,
      headers: unsubscribeHeaders(env, result),
    },
    fetchImpl,
  )
}

// The notice never carries the full address, so the inbox does not become a second copy of the list.
export function sendNotice(env: Env, signup: Signup, result: SignupResult, fetchImpl: typeof fetch = fetch) {
  return sendEmail(
    env,
    {
      to: env.notifyTo,
      subject: 'New TapBody waitlist signup',
      text: [
        `New signup: ${maskEmail(signup.email)}`,
        `Source: ${signup.source ?? 'none'}`,
        `Locale: ${signup.locale ?? 'none'}`,
        `Consent version: ${signup.consentVersion}`,
        'Status: waiting for the person to confirm their email.',
      ].join('\n'),
      idempotencyKey: `tapbody-notice-${result.waitlistId}`,
    },
    fetchImpl,
  )
}
