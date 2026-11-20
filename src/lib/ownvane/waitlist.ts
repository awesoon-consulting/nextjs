import en from '../../../messages/en.json'
import es from '../../../messages/es.json'
import fr from '../../../messages/fr.json'
import { maskEmail, normalizeEmail } from '../tapbody/waitlist'
import { CONSENT_WORDINGS } from './consent'
import { isRegion, type Region } from './regions'

export { maskEmail, normalizeEmail }

export type Signup = {
  email: string
  region: Region
  firstName: string | null
  source: string | null
  locale: string | null
  consentVersion: string
}
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
// Same rule as the first_name check in the migration. No @, / or angle brackets, so a name cannot carry a link.
const FIRST_NAME_BAD = /[\u0000-\u001f\u007f<>@/]/

export function parseSignup(body: unknown): ParseResult {
  if (!body || typeof body !== 'object') return { kind: 'invalid', error: 'invalid body' }
  const b = body as Record<string, unknown>
  if (typeof b.website === 'string' && b.website.trim() !== '') return { kind: 'bot' }

  const email = typeof b.email === 'string' ? normalizeEmail(b.email) : ''
  if (!email || email.length > 254 || !EMAIL.test(email)) return { kind: 'invalid', error: 'email is invalid' }
  if (!isRegion(b.region)) return { kind: 'invalid', error: 'region is invalid' }
  if (b.consent !== true) return { kind: 'invalid', error: 'consent is required' }
  if (typeof b.consentVersion !== 'string' || !(b.consentVersion in CONSENT_WORDINGS)) {
    return { kind: 'invalid', error: 'consent version is unknown' }
  }

  let firstName: string | null = null
  if (b.firstName !== undefined && b.firstName !== null) {
    if (typeof b.firstName !== 'string') return { kind: 'invalid', error: 'first name is invalid' }
    const trimmed = b.firstName.trim().normalize('NFC')
    if (trimmed.length > 80 || FIRST_NAME_BAD.test(trimmed)) return { kind: 'invalid', error: 'first name is invalid' }
    firstName = trimmed || null
  }

  const source = typeof b.source === 'string' && SOURCE.test(b.source) ? b.source : null
  const locale = typeof b.locale === 'string' && LOCALE.test(b.locale) ? b.locale : null
  return { kind: 'ok', signup: { email, region: b.region, firstName, source, locale, consentVersion: b.consentVersion } }
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
    'ownvane_waitlist_signup',
    {
      p_email: signup.email,
      p_region: signup.region,
      p_first_name: signup.firstName,
      p_source: signup.source,
      p_locale: signup.locale,
      p_consent_version: signup.consentVersion,
    },
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
  const rows = await rpc<{ waitlist_id: string; newly_confirmed: boolean }>(env, 'ownvane_waitlist_confirm', { p_token: token }, fetchImpl)
  if (rows.length === 0) return { found: false, newlyConfirmed: false }
  return { found: true, newlyConfirmed: rows[0].newly_confirmed, waitlistId: rows[0].waitlist_id }
}

export async function unsubscribe(
  token: string,
  env: Env,
  fetchImpl: typeof fetch = fetch,
): Promise<{ found: boolean; newlyUnsubscribed: boolean }> {
  const rows = await rpc<{ waitlist_id: string; newly_unsubscribed: boolean }>(env, 'ownvane_waitlist_unsubscribe', { p_token: token }, fetchImpl)
  if (rows.length === 0) return { found: false, newlyUnsubscribed: false }
  return { found: true, newlyUnsubscribed: rows[0].newly_unsubscribed }
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

const EMAIL_COPY = { en: en.ownvane.email, fr: fr.ownvane.email, es: es.ownvane.email }
type LinkLocale = keyof typeof EMAIL_COPY

export function linkLocale(locale: string | null): LinkLocale {
  const base = (locale ?? 'en').slice(0, 2).toLowerCase()
  return base === 'fr' || base === 'es' ? base : 'en'
}

// The first name is never echoed into this email: the address is not confirmed yet, so a stranger could have typed it.
export function confirmEmail(env: Env, result: SignupResult, locale: LinkLocale = 'en'): { subject: string; text: string } {
  const c = EMAIL_COPY[locale]
  return {
    subject: c.subject,
    text: [
      c.intro,
      `${env.siteUrl}/${locale}/ownvane/confirm?token=${result.confirmToken}`,
      '',
      c.ignore,
      `${env.siteUrl}/${locale}/ownvane/unsubscribe?token=${result.unsubscribeToken}`,
      '',
      c.footer.replace('{address}', env.senderAddress).replace('{contact}', env.contactEmail),
    ].join('\n'),
  }
}

// One-click unsubscribe (RFC 8058) so mail apps can show their own unsubscribe button.
export function unsubscribeHeaders(env: Env, result: SignupResult): Record<string, string> {
  return {
    'List-Unsubscribe': `<${env.siteUrl}/api/ownvane-waitlist/unsubscribe?token=${result.unsubscribeToken}>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  }
}

export function sendConfirmation(env: Env, email: string, result: SignupResult, fetchImpl: typeof fetch = fetch, locale: string | null = 'en') {
  const day = new Date().toISOString().slice(0, 10)
  const { subject, text } = confirmEmail(env, result, linkLocale(locale))
  return sendEmail(
    env,
    { to: email, subject, text, idempotencyKey: `ownvane-confirm-${result.waitlistId}-${day}`, headers: unsubscribeHeaders(env, result) },
    fetchImpl,
  )
}

// The notice never carries the full address or the name, so the inbox does not become a second copy of the list.
export function sendNotice(env: Env, signup: Signup, result: SignupResult, fetchImpl: typeof fetch = fetch) {
  return sendEmail(
    env,
    {
      to: env.notifyTo,
      subject: 'New Ownvane waitlist signup',
      text: [
        `New signup: ${maskEmail(signup.email)}`,
        `Licensed in: ${signup.region}`,
        `Source: ${signup.source ?? 'none'}`,
        `Locale: ${signup.locale ?? 'none'}`,
        `Consent version: ${signup.consentVersion}`,
        'Status: waiting for the person to confirm their email.',
      ].join('\n'),
      idempotencyKey: `ownvane-notice-${result.waitlistId}`,
    },
    fetchImpl,
  )
}
