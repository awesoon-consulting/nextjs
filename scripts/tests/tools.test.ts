import { test } from 'node:test'
import assert from 'node:assert/strict'
import { computeCost, hourlyWage, WAGES } from '../../src/lib/tools/cost'
import { buildSearcher, type CodeIndex } from '../../src/lib/tools/codeSearch'
import index from '../../src/data/procurement-codes.json'

const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 0.01, `${a} != ${b}`)

test('US hourly is the BLS annual median over 2,080 hours', () => {
  near(hourlyWage('US', 'Alabama', 'dataEntry')!, WAGES.US.regions.Alabama.dataEntry / 2080)
})

test('Canada uses the StatCan hourly median as published', () => {
  near(hourlyWage('CA', 'Ontario', 'bookkeeping')!, WAGES.CA.regions.Ontario)
})

test('Australia turns weekly earnings into hourly at 38 hours', () => {
  near(hourlyWage('AU', 'Victoria', 'orderClerk')!, WAGES.AU.regions.Victoria / 38)
})

test('cost is hours x people x 52 weeks x wage, split across roles', () => {
  const r = computeCost({ country: 'CA', region: 'Ontario', roles: ['dataEntry'], hoursPerWeek: 10, people: 2 })
  near(r.yearlyHours, 10 * 2 * 52)
  near(r.yearlyCost, 10 * 2 * 52 * WAGES.CA.regions.Ontario)
  near(r.fullTimePeople, 0.5)
  const a = WAGES.US.regions.Texas
  const m = computeCost({ country: 'US', region: 'Texas', roles: ['dataEntry', 'bookkeeping'], hoursPerWeek: 20, people: 3 })
  const hours = 20 * 3 * 52
  near(m.yearlyCost, (hours / 2) * (a.dataEntry / 2080) + (hours / 2) * (a.bookkeeping / 2080))
  near(m.averageHourly, m.yearlyCost / hours)
})

test('no roles means no cost', () => {
  const r = computeCost({ country: 'AU', region: 'Queensland', roles: [], hoursPerWeek: 10, people: 1 })
  assert.equal(r.yearlyCost, 0)
  assert.equal(r.yearlyHours, 0)
})

const s = buildSearcher(index as unknown as CodeIndex)
const show = (q: string) => {
  const r = s.search(q)
  console.log(q, JSON.stringify(Object.fromEntries(Object.entries(r).map(([k, v]) => [k, v.map((h) => `${h.code} ${h.title}`)])), null, 1))
  return r
}

test('database design finds database codes', () => {
  const r = show('database design')
  assert.ok(r.UNSPSC.some((h) => /database/i.test(h.title)))
  assert.ok(r.CPV.some((h) => /database/i.test(h.title)))
  assert.ok(r.GSIN.some((h) => /database/i.test(h.title)))
  assert.ok(r.PSC.some((h) => /database/i.test(h.title)))
})

test('graphic design finds graphic design codes', () => {
  const r = show('graphic design')
  assert.ok(r.UNSPSC.some((h) => /graphic/i.test(h.title)))
  assert.ok(r.CPV.some((h) => /graphic design/i.test(h.title)))
  assert.ok(r.GSIN.some((h) => /graphic design/i.test(h.title)))
  assert.ok(r.PSC.some((h) => /graphic/i.test(h.title)))
})

test('software maintenance finds maintenance codes', () => {
  const r = show('software maintenance')
  for (const k of ['UNSPSC', 'CPV', 'GSIN', 'PSC'] as const) assert.ok(r[k].some((h) => /software/i.test(h.title) && /maint/i.test(h.title)), k)
})
