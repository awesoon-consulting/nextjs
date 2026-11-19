import assert from 'node:assert/strict'
import { test } from 'node:test'
import { CONSENT_WORDINGS, CURRENT_CONSENT_VERSION, consentText } from '../../src/lib/tapbody/consent'
import { handleConfirm, handleSignup, handleUnsubscribe, type Deps } from '../../src/lib/tapbody/handlers'
import { maskEmail, parseSignup, type Env } from '../../src/lib/tapbody/waitlist'

const env: Env = {
  supabaseUrl: 'https://db.test',
  supabaseKey: 'secret',
  resendKey: 'resend',
  from: 'TapBody <hello@tapbody.test>',
  notifyTo: 'awesoonmarketing@gmail.com',
  siteUrl: 'https://tapbody.test',
  senderAddress: '1 Test St, Vancouver BC',
  contactEmail: 'hello@tapbody.test',
}

type Call = { url: string; init: RequestInit; body: any }

function fakeFetch(rpcRows: Record<string, unknown[]>, resendOk = true) {
  const calls: Call[] = []
  const impl = (async (url: string, init: RequestInit) => {
    const body = JSON.parse(String(init.body))
    calls.push({ url, init, body })
    if (url.startsWith(env.supabaseUrl)) {
      const fn = url.split('/rpc/')[1]
      return Response.json(rpcRows[fn] ?? [])
    }
    return new Response('{}', { status: resendOk ? 200 : 500 })
  }) as unknown as typeof fetch
  return { impl, calls }
}

function deps(fetchImpl: typeof fetch, limited = () => false): Deps {
  return { env, fetch: fetchImpl, limited }
}

function post(body: unknown, path = '/api/waitlist') {
  return new Request(`https://tapbody.test${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '1.2.3.4' },
    body: JSON.stringify(body),
  })
}

const good = { email: '  Jane.Doe@Example.COM ', consent: true, consentVersion: CURRENT_CONSENT_VERSION, source: 'landing', locale: 'en-CA' }
const frSignup = { ...good, locale: 'fr' }
const signupRow = (created: boolean, send: boolean) => ({
  tapbody_waitlist_signup: [
    {
      waitlist_id: 'w1',
      created,
      send_confirm: send,
      confirm_token: '11111111-2222-3333-4444-555555555555',
      unsubscribe_token: '99999999-8888-7777-6666-555555555555',
    },
  ],
})

test('current consent version has wording', () => {
  assert.ok(CONSENT_WORDINGS[CURRENT_CONSENT_VERSION])
})

test('parseSignup normalizes email and keeps clean fields', () => {
  const r = parseSignup(good)
  assert.equal(r.kind, 'ok')
  if (r.kind === 'ok') {
    assert.equal(r.signup.email, 'jane.doe@example.com')
    assert.equal(r.signup.source, 'landing')
    assert.equal(r.signup.locale, 'en-CA')
  }
})

test('parseSignup keeps plus tags and dots', () => {
  const r = parseSignup({ ...good, email: 'a.b+tap@gmail.com' })
  assert.equal(r.kind === 'ok' && r.signup.email, 'a.b+tap@gmail.com')
})

test('parseSignup rejects bad input', () => {
  assert.equal(parseSignup({ ...good, email: 'nope' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, email: `${'a'.repeat(250)}@x.co` }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, consent: 'yes' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, consentVersion: '1999-01-01' }).kind, 'invalid')
  assert.equal(parseSignup(null).kind, 'invalid')
})

test('parseSignup drops sources that could carry personal data', () => {
  const r = parseSignup({ ...good, source: 'jane@example.com' })
  assert.equal(r.kind === 'ok' && r.signup.source, null)
  const s = parseSignup({ ...good, source: 'has space' })
  assert.equal(s.kind === 'ok' && s.signup.source, null)
})

test('honeypot is accepted silently and saves nothing', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post({ ...good, website: 'spam.example' }), deps(impl))
  assert.equal(res.status, 200)
  assert.equal(calls.length, 0)
})

test('new signup saves once, sends confirmation and one masked notice', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post(good), deps(impl))
  assert.equal(res.status, 200)

  const rpc = calls.filter((c) => c.url.includes('/rpc/'))
  assert.equal(rpc.length, 1)
  assert.deepEqual(rpc[0].body, {
    p_email: 'jane.doe@example.com',
    p_source: 'landing',
    p_locale: 'en-CA',
    p_consent_version: CURRENT_CONSENT_VERSION,
  })
  assert.equal((rpc[0].init.headers as Record<string, string>).apikey, 'secret')

  const emails = calls.filter((c) => c.url === 'https://api.resend.com/emails')
  assert.equal(emails.length, 2)
  const confirm = emails.find((e) => e.body.to[0] === 'jane.doe@example.com')!
  assert.match(confirm.body.text, /https:\/\/tapbody\.test\/en\/tapbody\/confirm\?token=11111111-2222-3333-4444-555555555555/)
  assert.match(confirm.body.text, /Awesoon Technologies Inc\., 1 Test St/)
  assert.match(confirm.body.text, /unsubscribe\?token=99999999-8888-7777-6666-555555555555/)
  assert.match(confirm.body.text, /Questions: hello@tapbody\.test/)
  assert.equal(confirm.body.headers['List-Unsubscribe'], '<https://tapbody.test/api/tapbody-waitlist/unsubscribe?token=99999999-8888-7777-6666-555555555555>')
  assert.equal(confirm.body.headers['List-Unsubscribe-Post'], 'List-Unsubscribe=One-Click')
  const notice = emails.find((e) => e.body.to[0] === 'awesoonmarketing@gmail.com')!
  assert.ok(!notice.body.text.includes('jane.doe@example.com'))
  assert.match(notice.body.text, /j\*\*\*@example\.com/)
  assert.equal((notice.init.headers as Record<string, string>)['Idempotency-Key'], 'tapbody-notice-w1')
})

test('repeat signup replies the same and sends no notice', async () => {
  const first = fakeFetch(signupRow(true, true))
  const repeat = fakeFetch(signupRow(false, false))
  const a = await (await handleSignup(post(good), deps(first.impl))).json()
  const b = await (await handleSignup(post(good), deps(repeat.impl))).json()
  assert.deepEqual(a, b)
  assert.equal(repeat.calls.filter((c) => c.url.includes('resend')).length, 0)
})

test('email failure still keeps the signup and replies ok', async () => {
  const { impl } = fakeFetch(signupRow(true, true), false)
  const res = await handleSignup(post(good), deps(impl))
  assert.equal(res.status, 200)
})

test('database failure returns 500', async () => {
  const impl = (async () => new Response('no', { status: 503 })) as unknown as typeof fetch
  const res = await handleSignup(post(good), deps(impl))
  assert.equal(res.status, 500)
})

test('rate limited requests get 429', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post(good), deps(impl, () => true))
  assert.equal(res.status, 429)
  assert.equal(calls.length, 0)
})

test('confirm accepts a valid token', async () => {
  const { impl } = fakeFetch({ tapbody_waitlist_confirm: [{ waitlist_id: 'w1', newly_confirmed: true }] })
  const res = await handleConfirm(post({ token: '11111111-2222-3333-4444-555555555555' }, '/api/waitlist/confirm'), deps(impl))
  assert.equal(res.status, 200)
})

test('confirm rejects malformed and unknown tokens', async () => {
  const { impl, calls } = fakeFetch({ tapbody_waitlist_confirm: [] })
  const bad = await handleConfirm(post({ token: "x' or 1=1" }, '/api/waitlist/confirm'), deps(impl))
  assert.equal(bad.status, 400)
  assert.equal(calls.length, 0)
  const unknown = await handleConfirm(post({ token: '11111111-2222-3333-4444-555555555555' }, '/api/waitlist/confirm'), deps(impl))
  assert.equal(unknown.status, 404)
})

test('maskEmail hides the local part', () => {
  assert.equal(maskEmail('jane@example.com'), 'j***@example.com')
})

test('earlier consent versions stay accepted and current wording fills address and contact', () => {
  assert.equal(parseSignup({ ...good, consentVersion: '2026-11-17' }).kind, 'ok')
  const text = consentText('2026-11-18', '1 Test St', 'hello@tapbody.test')
  assert.match(text, /1 Test St, hello@tapbody\.test/)
  assert.match(text, /United States/)
  assert.ok(!text.includes('['))
})

test('one-click unsubscribe reads the token from the query', async () => {
  const { impl, calls } = fakeFetch({ tapbody_waitlist_unsubscribe: [{ waitlist_id: 'w1', newly_unsubscribed: true }] })
  const req = new Request('https://tapbody.test/api/waitlist/unsubscribe?token=99999999-8888-7777-6666-555555555555', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'List-Unsubscribe=One-Click',
  })
  const res = await handleUnsubscribe(req, deps(impl))
  assert.equal(res.status, 200)
  assert.deepEqual(calls[0].body, { p_token: '99999999-8888-7777-6666-555555555555' })
})

test('unsubscribe page posts the token as JSON; bad tokens are refused', async () => {
  const { impl } = fakeFetch({ tapbody_waitlist_unsubscribe: [{ waitlist_id: 'w1', newly_unsubscribed: false }] })
  const ok = await handleUnsubscribe(post({ token: '99999999-8888-7777-6666-555555555555' }, '/api/waitlist/unsubscribe'), deps(impl))
  assert.equal(ok.status, 200)
  const bad = await handleUnsubscribe(post({ token: 'nope' }, '/api/waitlist/unsubscribe'), deps(impl))
  assert.equal(bad.status, 400)
})

test('confirmation links follow the signup language', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  await handleSignup(post(frSignup), deps(impl))
  const confirm = calls.find((c) => c.url === 'https://api.resend.com/emails' && c.body.to[0] === 'jane.doe@example.com')!
  assert.match(confirm.body.text, /tapbody\.test\/fr\/tapbody\/confirm/)
  assert.match(confirm.body.text, /tapbody\.test\/fr\/tapbody\/unsubscribe/)
})
