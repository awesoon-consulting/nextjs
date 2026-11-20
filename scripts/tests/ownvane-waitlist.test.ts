import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import en from '../../messages/en.json'
import es from '../../messages/es.json'
import fr from '../../messages/fr.json'
import { CONSENT_WORDINGS, CURRENT_CONSENT_VERSION } from '../../src/lib/ownvane/consent'
import { handleConfirm, handleSignup, handleUnsubscribe, type Deps } from '../../src/lib/ownvane/handlers'
import { CANADA_REGIONS, US_REGIONS, isRegion } from '../../src/lib/ownvane/regions'
import { parseSignup, type Env } from '../../src/lib/ownvane/waitlist'

const env: Env = {
  supabaseUrl: 'https://db.test',
  supabaseKey: 'secret',
  resendKey: 'resend',
  from: 'Ownvane <waitlist@ownvane.test>',
  notifyTo: 'awesoonmarketing@gmail.com',
  siteUrl: 'https://site.test',
  senderAddress: '1 Test St, Vancouver BC',
  contactEmail: 'hello@site.test',
}

type Body = { to: string[]; from: string; subject: string; text: string; headers: Record<string, string> } & Record<string, unknown>
type Call = { url: string; init: RequestInit; body: Body }

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

function post(body: unknown, path = '/api/ownvane-waitlist') {
  return new Request(`https://site.test${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '1.2.3.4' },
    body: JSON.stringify(body),
  })
}

const good = {
  email: '  Jane.Doe@Example.COM ',
  region: 'CA-BC',
  firstName: ' Jane ',
  consent: true,
  consentVersion: CURRENT_CONSENT_VERSION,
  source: 'awesoon-site',
  locale: 'en',
}
const TOKEN = '11111111-2222-3333-4444-555555555555'
const UNSUB = '99999999-8888-7777-6666-555555555555'
const signupRow = (created: boolean, send: boolean) => ({
  ownvane_waitlist_signup: [{ waitlist_id: 'w1', created, send_confirm: send, confirm_token: TOKEN, unsubscribe_token: UNSUB }],
})

test('current consent version has the wording the English form shows', () => {
  assert.equal(CONSENT_WORDINGS[CURRENT_CONSENT_VERSION], en.ownvane.form.consent)
})

test('every locale names every region and carries the same message keys', () => {
  for (const m of [en, fr, es]) {
    for (const r of [...CANADA_REGIONS, ...US_REGIONS]) assert.ok((m.ownvane.regions as Record<string, string>)[r], r)
  }
  const keys = (o: unknown, p = ''): string[] =>
    o && typeof o === 'object' && !Array.isArray(o) ? Object.entries(o).flatMap(([k, v]) => keys(v, `${p}.${k}`)) : [p]
  assert.deepEqual(keys(fr.ownvane), keys(en.ownvane))
  assert.deepEqual(keys(es.ownvane), keys(en.ownvane))
})

test('copy follows the Ownvane rules in every locale', () => {
  for (const m of [en, fr, es]) {
    const text = JSON.stringify(m.ownvane)
    assert.ok(!text.includes('\u2014'), 'no em dashes')
    assert.ok(!/shopify/i.test(text), 'never name Shopify')
    assert.ok(!/realtor/i.test(text), 'never REALTOR')
  }
  assert.match(en.ownvane.hero.when, /early 2027 in Canada and the US/)
})

test('region list matches the migration check exactly', () => {
  const sql = readFileSync(new URL('../../supabase/migrations/20261119000000_ownvane_waitlist.sql', import.meta.url), 'utf8')
  const block = sql.slice(sql.indexOf('region text not null'), sql.indexOf('first_name text'))
  const inSql = [...block.matchAll(/'((?:CA|US)-[A-Z]{2})'/g)].map((x) => x[1]).sort()
  assert.deepEqual(inSql, [...CANADA_REGIONS, ...US_REGIONS].sort())
  assert.equal(inSql.length, 13 + 51)
})

test('parseSignup normalizes email, trims name and keeps clean fields', () => {
  const r = parseSignup(good)
  assert.equal(r.kind, 'ok')
  if (r.kind === 'ok') {
    assert.equal(r.signup.email, 'jane.doe@example.com')
    assert.equal(r.signup.region, 'CA-BC')
    assert.equal(r.signup.firstName, 'Jane')
    assert.equal(r.signup.source, 'awesoon-site')
  }
})

test('first name is optional', () => {
  const a = parseSignup({ ...good, firstName: undefined })
  assert.equal(a.kind === 'ok' && a.signup.firstName, null)
  const b = parseSignup({ ...good, firstName: '   ' })
  assert.equal(b.kind === 'ok' && b.signup.firstName, null)
  const c = parseSignup({ ...good, firstName: 'Zoë-Anne' })
  assert.equal(c.kind === 'ok' && c.signup.firstName, 'Zoë-Anne')
})

test('parseSignup rejects bad input', () => {
  assert.equal(parseSignup({ ...good, email: 'nope' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, email: `${'a'.repeat(250)}@x.co` }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, region: 'CA-XX' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, region: 'British Columbia' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, region: undefined }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, consent: 'yes' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, consentVersion: '1999-01-01' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, firstName: 'x'.repeat(81) }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, firstName: 'visit http://spam.example' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, firstName: 'a@b.co' }).kind, 'invalid')
  assert.equal(parseSignup({ ...good, firstName: 42 }).kind, 'invalid')
  assert.equal(parseSignup(null).kind, 'invalid')
})

test('isRegion covers DC and every province and territory', () => {
  assert.ok(isRegion('US-DC'))
  assert.ok(isRegion('CA-NU'))
  assert.ok(!isRegion('US-PR'))
})

test('honeypot is accepted silently and saves nothing', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post({ ...good, website: 'spam.example' }), deps(impl))
  assert.equal(res.status, 200)
  assert.equal(calls.length, 0)
})

test('new signup saves once to the Ownvane function, sends confirmation and one masked notice', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post(good), deps(impl))
  assert.equal(res.status, 200)

  const rpc = calls.filter((c) => c.url.includes('/rpc/'))
  assert.equal(rpc.length, 1)
  assert.equal(rpc[0].url, 'https://db.test/rest/v1/rpc/ownvane_waitlist_signup')
  assert.deepEqual(rpc[0].body, {
    p_email: 'jane.doe@example.com',
    p_region: 'CA-BC',
    p_first_name: 'Jane',
    p_source: 'awesoon-site',
    p_locale: 'en',
    p_consent_version: CURRENT_CONSENT_VERSION,
  })
  assert.ok(!calls.some((c) => c.url.includes('tapbody')), 'never touches the TapBody list')

  const emails = calls.filter((c) => c.url === 'https://api.resend.com/emails')
  assert.equal(emails.length, 2)
  const confirm = emails.find((e) => e.body.to[0] === 'jane.doe@example.com')!
  assert.equal(confirm.body.from, 'Ownvane <waitlist@ownvane.test>')
  assert.equal(confirm.body.subject, en.ownvane.email.subject)
  assert.match(confirm.body.text, new RegExp(`https://site\\.test/en/ownvane/confirm\\?token=${TOKEN}`))
  assert.match(confirm.body.text, new RegExp(`/en/ownvane/unsubscribe\\?token=${UNSUB}`))
  assert.match(confirm.body.text, /Awesoon Technologies Inc\., 1 Test St, Vancouver BC\. Questions: hello@site\.test/)
  assert.ok(!confirm.body.text.includes('Jane'), 'the unconfirmed name is never echoed')
  assert.equal(confirm.body.headers['List-Unsubscribe'], `<https://site.test/api/ownvane-waitlist/unsubscribe?token=${UNSUB}>`)
  assert.equal(confirm.body.headers['List-Unsubscribe-Post'], 'List-Unsubscribe=One-Click')

  const notice = emails.find((e) => e.body.to[0] === 'awesoonmarketing@gmail.com')!
  assert.ok(!notice.body.text.includes('jane.doe@example.com'))
  assert.ok(!notice.body.text.includes('Jane'))
  assert.match(notice.body.text, /j\*\*\*@example\.com/)
  assert.match(notice.body.text, /Licensed in: CA-BC/)
  assert.equal((notice.init.headers as Record<string, string>)['Idempotency-Key'], 'ownvane-notice-w1')
})

test('confirmation email follows the signup language', async () => {
  for (const [locale, m] of [['fr-CA', fr], ['es', es]] as const) {
    const { impl, calls } = fakeFetch(signupRow(true, true))
    await handleSignup(post({ ...good, locale }), deps(impl))
    const confirm = calls.find((c) => c.url === 'https://api.resend.com/emails' && c.body.to[0] === 'jane.doe@example.com')!
    const base = locale.slice(0, 2)
    assert.equal(confirm.body.subject, m.ownvane.email.subject)
    assert.match(confirm.body.text, new RegExp(`site\\.test/${base}/ownvane/confirm`))
    assert.match(confirm.body.text, new RegExp(`site\\.test/${base}/ownvane/unsubscribe`))
    assert.ok(!confirm.body.text.includes('{'))
  }
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

test('invalid signup returns 400 and saves nothing', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post({ ...good, region: 'ZZ' }), deps(impl))
  assert.equal(res.status, 400)
  assert.equal(calls.length, 0)
})

test('rate limited requests get 429', async () => {
  const { impl, calls } = fakeFetch(signupRow(true, true))
  const res = await handleSignup(post(good), deps(impl, () => true))
  assert.equal(res.status, 429)
  assert.equal(calls.length, 0)
})

test('confirm accepts a valid token and calls the Ownvane function', async () => {
  const { impl, calls } = fakeFetch({ ownvane_waitlist_confirm: [{ waitlist_id: 'w1', newly_confirmed: true }] })
  const res = await handleConfirm(post({ token: TOKEN }, '/api/ownvane-waitlist/confirm'), deps(impl))
  assert.equal(res.status, 200)
  assert.equal(calls[0].url, 'https://db.test/rest/v1/rpc/ownvane_waitlist_confirm')
})

test('confirm rejects malformed and unknown tokens', async () => {
  const { impl, calls } = fakeFetch({ ownvane_waitlist_confirm: [] })
  const bad = await handleConfirm(post({ token: "x' or 1=1" }, '/api/ownvane-waitlist/confirm'), deps(impl))
  assert.equal(bad.status, 400)
  assert.equal(calls.length, 0)
  const unknown = await handleConfirm(post({ token: TOKEN }, '/api/ownvane-waitlist/confirm'), deps(impl))
  assert.equal(unknown.status, 404)
})

test('one-click unsubscribe reads the token from the query', async () => {
  const { impl, calls } = fakeFetch({ ownvane_waitlist_unsubscribe: [{ waitlist_id: 'w1', newly_unsubscribed: true }] })
  const req = new Request(`https://site.test/api/ownvane-waitlist/unsubscribe?token=${UNSUB}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'List-Unsubscribe=One-Click',
  })
  const res = await handleUnsubscribe(req, deps(impl))
  assert.equal(res.status, 200)
  assert.equal(calls[0].url, 'https://db.test/rest/v1/rpc/ownvane_waitlist_unsubscribe')
  assert.deepEqual(calls[0].body, { p_token: UNSUB })
})

test('unsubscribe page posts the token as JSON; bad tokens are refused', async () => {
  const { impl } = fakeFetch({ ownvane_waitlist_unsubscribe: [{ waitlist_id: 'w1', newly_unsubscribed: false }] })
  const ok = await handleUnsubscribe(post({ token: UNSUB }, '/api/ownvane-waitlist/unsubscribe'), deps(impl))
  assert.equal(ok.status, 200)
  const bad = await handleUnsubscribe(post({ token: 'nope' }, '/api/ownvane-waitlist/unsubscribe'), deps(impl))
  assert.equal(bad.status, 400)
})
