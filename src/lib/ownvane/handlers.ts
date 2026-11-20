import { confirmSignup, parseSignup, saveSignup, sendConfirmation, sendNotice, unsubscribe, type Env } from './waitlist'

export type Deps = { env: Env; fetch: typeof fetch; limited: (key: string) => boolean }

const ACCEPTED = { ok: true, message: 'Check your email to confirm your spot.' }
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function clientIp(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? request.headers.get('x-real-ip') ?? 'unknown'
}

export async function handleSignup(request: Request, deps: Deps): Promise<Response> {
  if (deps.limited(clientIp(request))) {
    return Response.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: 'invalid body' }, { status: 400 })
  }

  const parsed = parseSignup(body)
  if (parsed.kind === 'bot') return Response.json(ACCEPTED)
  if (parsed.kind === 'invalid') return Response.json({ ok: false, error: parsed.error }, { status: 400 })

  let result
  try {
    result = await saveSignup(parsed.signup, deps.env, deps.fetch)
  } catch (err) {
    console.error('ownvane waitlist save failed:', err instanceof Error ? err.message : 'unknown error')
    return Response.json({ ok: false, error: 'Could not save. Please try again.' }, { status: 500 })
  }

  const sends: Promise<boolean>[] = []
  if (result.sendConfirm) sends.push(sendConfirmation(deps.env, parsed.signup.email, result, deps.fetch, parsed.signup.locale))
  if (result.created) sends.push(sendNotice(deps.env, parsed.signup, result, deps.fetch))
  const outcomes = await Promise.allSettled(sends)
  if (outcomes.some((o) => o.status === 'rejected' || o.value === false)) {
    console.error('ownvane waitlist email failed for signup', result.waitlistId)
  }

  // Same reply for new and repeat addresses, so the form never reveals who is on the list.
  return Response.json(ACCEPTED)
}

export async function handleConfirm(request: Request, deps: Deps): Promise<Response> {
  if (deps.limited(clientIp(request))) {
    return Response.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let token: unknown
  try {
    token = ((await request.json()) as { token?: unknown }).token
  } catch {
    return Response.json({ ok: false, error: 'invalid body' }, { status: 400 })
  }
  if (typeof token !== 'string' || !UUID.test(token)) {
    return Response.json({ ok: false, error: 'This link is not valid.' }, { status: 400 })
  }

  try {
    const result = await confirmSignup(token, deps.env, deps.fetch)
    if (!result.found) return Response.json({ ok: false, error: 'This link is not valid.' }, { status: 404 })
    return Response.json({ ok: true, message: 'You are on the Ownvane waitlist.' })
  } catch (err) {
    console.error('ownvane waitlist confirm failed:', err instanceof Error ? err.message : 'unknown error')
    return Response.json({ ok: false, error: 'Could not confirm. Please try again.' }, { status: 500 })
  }
}

// Accepts the token from the query (one-click from a mail app) or a JSON body (the unsubscribe page).
export async function handleUnsubscribe(request: Request, deps: Deps): Promise<Response> {
  if (deps.limited(clientIp(request))) {
    return Response.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  let token: unknown = new URL(request.url).searchParams.get('token')
  if (!token && request.headers.get('content-type')?.includes('application/json')) {
    try {
      token = ((await request.json()) as { token?: unknown }).token
    } catch {
      return Response.json({ ok: false, error: 'invalid body' }, { status: 400 })
    }
  }
  if (typeof token !== 'string' || !UUID.test(token)) {
    return Response.json({ ok: false, error: 'This link is not valid.' }, { status: 400 })
  }

  try {
    const result = await unsubscribe(token, deps.env, deps.fetch)
    if (!result.found) return Response.json({ ok: false, error: 'This link is not valid.' }, { status: 404 })
    return Response.json({ ok: true, message: 'You are unsubscribed. We will not email you again.' })
  } catch (err) {
    console.error('ownvane waitlist unsubscribe failed:', err instanceof Error ? err.message : 'unknown error')
    return Response.json({ ok: false, error: 'Could not unsubscribe. Please try again.' }, { status: 500 })
  }
}
