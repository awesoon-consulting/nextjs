import { cache } from 'react'
import { sql } from 'drizzle-orm'
import { getDb } from '@/src/lib/ingest/db/client'
import { austender } from '@/src/lib/ingest/connectors/austender'
import { canadabuys } from '@/src/lib/ingest/connectors/canadabuys'
import { ukContractsFinder } from '@/src/lib/ingest/connectors/uk-contracts-finder'
import { ukFindATender } from '@/src/lib/ingest/connectors/uk-find-a-tender'
import { usaspending } from '@/src/lib/ingest/connectors/usaspending'
import { BID_CATEGORIES } from '@/src/data/public-sector'

/* eslint-disable @typescript-eslint/no-explicit-any */

export type CountrySlug = 'ca' | 'us' | 'uk' | 'au'
export const COUNTRY_SLUGS: CountrySlug[] = ['ca', 'us', 'uk', 'au']
export const ISO: Record<CountrySlug, string> = { ca: 'CA', us: 'US', uk: 'GB', au: 'AU' }
export const CURRENCY: Record<CountrySlug, string> = { ca: 'CAD', us: 'USD', uk: 'GBP', au: 'AUD' }
export const CATEGORY_SLUGS = BID_CATEGORIES.map((c) => c.slug)

export const GATES = { categoryOpen: 1, categoryAwards12: 3, buyerAwards: 5 } as const

const CONNECTORS = [canadabuys, usaspending, ukContractsFinder, ukFindATender, austender]
const COUNTRY_SOURCES: Record<CountrySlug, string[]> = {
  ca: ['canadabuys'],
  us: ['usaspending'],
  uk: ['uk-find-a-tender', 'uk-contracts-finder'],
  au: ['austender'],
}

export interface Source {
  id: string
  name: string
  url: string
  licence: string
  licenceUrl: string
  attribution: string
  updated: string | null
}

export interface Tender {
  title: string
  buyer: string | null
  buyerSlug: string | null
  value: number | null
  currency: string | null
  published: string | null
  closes: string | null
  url: string | null
  categories: string[]
}

export interface Award {
  title: string
  buyer: string | null
  buyerSlug: string | null
  supplier: string | null
  value: number | null
  currency: string | null
  awarded: string | null
  url: string | null
  categories: string[]
}

export interface BuyerStat {
  name: string
  slug: string
  awards: number
  total: number
}

export function isCountry(v: string): v is CountrySlug {
  return (COUNTRY_SLUGS as string[]).includes(v)
}

export function slugify(s: string) {
  return s
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90)
}

export const buyerSlug = (country: CountrySlug, name: string) => `${country}-${slugify(name)}`

function licenceUrl(licence: string) {
  const l = licence.toLowerCase()
  if (l.includes('canada')) return 'https://open.canada.ca/en/open-government-licence-canada'
  if (l.includes('open government licence')) return 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
  if (l.includes('creative commons')) return 'https://creativecommons.org/licenses/by/4.0/'
  return 'https://www.usa.gov/government-works'
}

// A DB that is missing or unreachable renders the "data loading soon" state, never a failed build.
async function run<T>(fn: (db: NonNullable<ReturnType<typeof getDb>>) => Promise<T>): Promise<T | null> {
  const db = getDb()
  if (!db) return null
  try {
    return await fn(db)
  } catch (e) {
    console.error('procurement data unavailable:', (e as Error).message)
    return null
  }
}

async function rows(db: NonNullable<ReturnType<typeof getDb>>, q: ReturnType<typeof sql>): Promise<any[]> {
  return (await db.execute(q)) as unknown as any[]
}

const iso = (d: unknown) => (d ? new Date(d as string).toISOString() : null)
const num = (v: unknown) => (v === null || v === undefined ? null : Number(v))

async function sourcesFor(db: NonNullable<ReturnType<typeof getDb>>, ids: string[]): Promise<Source[]> {
  const idList = sql.join(ids.map((i) => sql`${i}`), sql`, `)
  const recorded = await rows(db, sql`select id, name, url, licence, attribution from sources where id in (${idList})`)
  const runs = await rows(
    db,
    sql`select source_id, max(coalesce(finished_at, started_at)) as at from ingest_runs where source_id in (${idList}) and status = 'ok' group by source_id`,
  )
  return ids.map((id) => {
    const r = recorded.find((x) => x.id === id) ?? CONNECTORS.find((c) => c.id === id)!
    return {
      id,
      name: r.name,
      url: r.url,
      licence: r.licence,
      licenceUrl: licenceUrl(r.licence),
      attribution: r.attribution,
      updated: iso(runs.find((x) => x.source_id === id)?.at),
    }
  })
}

const OPEN = sql`closes > now()`
const LAST12 = sql`awarded > now() - interval '12 months' and awarded <= now()`

function mapTender(c: CountrySlug, r: any): Tender {
  return {
    title: r.title,
    buyer: r.buyer,
    buyerSlug: r.buyer ? buyerSlug(c, r.buyer) : null,
    value: Number(r.value) > 0 ? Number(r.value) : null,
    currency: r.currency,
    published: iso(r.published),
    closes: iso(r.closes),
    url: r.url,
    categories: r.categories ?? [],
  }
}

function mapAward(c: CountrySlug, r: any): Award {
  return {
    title: r.title,
    buyer: r.buyer,
    buyerSlug: r.buyer ? buyerSlug(c, r.buyer) : null,
    supplier: r.supplier,
    value: Number(r.value) > 0 ? Number(r.value) : null,
    currency: r.currency,
    awarded: iso(r.awarded),
    url: r.url,
    categories: r.categories ?? [],
  }
}

export interface CategoryCount {
  slug: string
  open: number
  awards12: number
}

export interface HubData {
  countries: Record<CountrySlug, { categories: CategoryCount[]; newest: Tender[]; sources: Source[] }>
}

export const getHubData = cache(() =>
  run(async (db) => {
    const counts = await rows(
      db,
      sql`select country, c as slug, 'open' as kind, count(*)::int as n from tenders, jsonb_array_elements_text(categories) c where ${OPEN} group by 1, 2
          union all
          select country, c, 'awards', count(*)::int from awards, jsonb_array_elements_text(categories) c where ${LAST12} group by 1, 2`,
    )
    const out = {} as HubData['countries']
    for (const c of COUNTRY_SLUGS) {
      const get = (slug: string, kind: string) => counts.find((r) => r.country === ISO[c] && r.slug === slug && r.kind === kind)?.n ?? 0
      const newest = await rows(
        db,
        sql`select * from tenders where country = ${ISO[c]} and ${OPEN} order by published desc nulls last limit 6`,
      )
      out[c] = {
        categories: CATEGORY_SLUGS.map((slug) => ({ slug, open: get(slug, 'open'), awards12: get(slug, 'awards') })),
        newest: newest.map((r) => mapTender(c, r)),
        sources: await sourcesFor(db, COUNTRY_SOURCES[c]),
      }
    }
    return { countries: out } satisfies HubData
  }),
)

export interface CategoryData {
  open: Tender[]
  openCount: number
  soon: number
  awards12: number
  median: number | null
  total: number | null
  months: { month: string; count: number; value: number }[]
  topBuyers: BuyerStat[]
  sources: Source[]
  indexable: boolean
}

export const getCategoryData = cache((c: CountrySlug, category: string) =>
  run(async (db) => {
    const inCat = sql`categories ? ${category}`
    const open = await rows(db, sql`select * from tenders where country = ${ISO[c]} and ${inCat} and ${OPEN} order by closes asc limit 200`)
    const [agg] = await rows(
      db,
      sql`select count(*)::int as n,
                 percentile_cont(0.5) within group (order by value) filter (where value > 0) as median,
                 sum(value) filter (where value > 0) as total
          from awards where country = ${ISO[c]} and ${inCat} and ${LAST12}`,
    )
    const months = await rows(
      db,
      sql`select to_char(m, 'YYYY-MM') as month, count(a.id)::int as count, coalesce(sum(a.value) filter (where a.value > 0), 0) as value
          from generate_series(date_trunc('month', now()) - interval '11 months', date_trunc('month', now()), interval '1 month') m
          left join awards a on date_trunc('month', a.awarded) = m and a.country = ${ISO[c]} and a.categories ? ${category} and a.awarded <= now()
          group by m order by m`,
    )
    const top = await rows(
      db,
      sql`select buyer, count(*)::int as n, coalesce(sum(value) filter (where value > 0), 0) as total
          from awards where country = ${ISO[c]} and ${inCat} and ${LAST12} and buyer is not null
          group by buyer order by n desc, total desc limit 6`,
    )
    const week = Date.now() + 7 * 864e5
    const tenders = open.map((r) => mapTender(c, r))
    return {
      open: tenders,
      openCount: tenders.length,
      soon: tenders.filter((t) => t.closes && new Date(t.closes).getTime() < week).length,
      awards12: agg.n,
      median: num(agg.median),
      total: num(agg.total),
      months: months.map((m) => ({ month: m.month, count: m.count, value: Number(m.value) })),
      topBuyers: top.map((b) => ({ name: b.buyer, slug: buyerSlug(c, b.buyer), awards: b.n, total: Number(b.total) })),
      sources: await sourcesFor(db, COUNTRY_SOURCES[c]),
      indexable: tenders.length >= GATES.categoryOpen || agg.n >= GATES.categoryAwards12,
    } satisfies CategoryData
  }),
)

export interface BuyerData {
  name: string
  country: CountrySlug
  awards: number
  awards12: number
  median: number | null
  total: number | null
  categories: { slug: string; count: number }[]
  recent: Award[]
  open: Tender[]
  sources: Source[]
  indexable: boolean
}

async function resolveBuyer(db: NonNullable<ReturnType<typeof getDb>>, slug: string) {
  const c = slug.slice(0, 2)
  if (!isCountry(c) || slug[2] !== '-') return null
  const names = await rows(
    db,
    sql`select buyer from awards where country = ${ISO[c]} and buyer is not null union select buyer from tenders where country = ${ISO[c]} and buyer is not null`,
  )
  const name = names.map((r) => r.buyer as string).find((n) => buyerSlug(c, n) === slug)
  return name ? { c, name } : null
}

export const getBuyerData = cache((slug: string) =>
  run(async (db) => {
    const found = await resolveBuyer(db, slug)
    if (!found) return { missing: true as const }
    const { c, name } = found
    const where = sql`country = ${ISO[c]} and buyer = ${name}`
    const [agg] = await rows(
      db,
      sql`select count(*) filter (where awarded <= now() or awarded is null)::int as n,
                 count(*) filter (where ${LAST12})::int as n12,
                 percentile_cont(0.5) within group (order by value) filter (where value > 0) as median,
                 sum(value) filter (where value > 0) as total
          from awards where ${where}`,
    )
    const cats = await rows(
      db,
      sql`select c as slug, count(*)::int as count from awards, jsonb_array_elements_text(categories) c where ${where} group by c order by count desc`,
    )
    const recent = await rows(db, sql`select * from awards where ${where} and awarded <= now() order by awarded desc nulls last limit 15`)
    const open = await rows(db, sql`select * from tenders where ${where} and ${OPEN} order by closes asc limit 20`)
    return {
      missing: false as const,
      name,
      country: c,
      awards: agg.n,
      awards12: agg.n12,
      median: num(agg.median),
      total: num(agg.total),
      categories: cats.filter((x) => CATEGORY_SLUGS.includes(x.slug)),
      recent: recent.map((r) => mapAward(c, r)),
      open: open.map((r) => mapTender(c, r)),
      sources: await sourcesFor(db, COUNTRY_SOURCES[c]),
      indexable: agg.n >= GATES.buyerAwards,
    } satisfies BuyerData & { missing: false }
  }),
)

export interface DigestData {
  tenders: Tender[]
  awards: Award[]
  from: string
  to: string
  sources: Source[]
  indexable: boolean
}

export const getDigestData = cache((c: CountrySlug) =>
  run(async (db) => {
    const t = await rows(
      db,
      sql`select * from tenders where country = ${ISO[c]} and published > now() - interval '7 days' order by published desc limit 60`,
    )
    const a = await rows(
      db,
      sql`select * from awards where country = ${ISO[c]} and awarded > now() - interval '7 days' and awarded <= now() order by awarded desc limit 30`,
    )
    const to = new Date()
    return {
      tenders: t.map((r) => mapTender(c, r)),
      awards: a.map((r) => mapAward(c, r)),
      from: new Date(to.getTime() - 7 * 864e5).toISOString(),
      to: to.toISOString(),
      sources: await sourcesFor(db, COUNTRY_SOURCES[c]),
      indexable: t.length + a.length > 0,
    } satisfies DigestData
  }),
)

export interface ReportData {
  quarters: string[]
  rows: { country: CountrySlug; quarter: string; awards: number; median: number | null }[]
  sources: Source[]
}

// The report exists only once ingestion has run in two calendar quarters.
export const getReportData = cache(() =>
  run(async (db) => {
    const q = await rows(
      db,
      sql`select distinct to_char(started_at, 'YYYY-"Q"Q') as q from ingest_runs where status = 'ok' order by q desc limit 2`,
    )
    const quarters = q.map((r) => r.q as string).reverse()
    if (quarters.length < 2) return { quarters, rows: [], sources: [] } satisfies ReportData
    const data = await rows(
      db,
      sql`select country, to_char(awarded, 'YYYY-"Q"Q') as quarter, count(*)::int as n,
                 percentile_cont(0.5) within group (order by value) filter (where value > 0) as median
          from awards where to_char(awarded, 'YYYY-"Q"Q') in (${sql.join(quarters.map((x) => sql`${x}`), sql`, `)})
          group by 1, 2`,
    )
    const out: ReportData['rows'] = []
    for (const c of COUNTRY_SLUGS)
      for (const quarter of quarters) {
        const r = data.find((d) => d.country === ISO[c] && d.quarter === quarter)
        out.push({ country: c, quarter, awards: r?.n ?? 0, median: num(r?.median) })
      }
    return { quarters, rows: out, sources: await sourcesFor(db, Object.values(COUNTRY_SOURCES).flat()) } satisfies ReportData
  }),
)

export interface IndexablePages {
  hub: boolean
  categories: { country: CountrySlug; category: string }[]
  buyers: string[]
  digests: CountrySlug[]
}

export const getIndexablePages = cache(() =>
  run(async (db) => {
    const cats = await rows(
      db,
      sql`select country, slug from (
            select country, c as slug, count(*) filter (where kind = 'open') as o, count(*) filter (where kind = 'award') as a from (
              select country, c, 'open' as kind from tenders, jsonb_array_elements_text(categories) c where ${OPEN}
              union all
              select country, c, 'award' from awards, jsonb_array_elements_text(categories) c where ${LAST12}
            ) x group by 1, 2
          ) y where o >= ${GATES.categoryOpen} or a >= ${GATES.categoryAwards12}`,
    )
    const buyers = await rows(
      db,
      sql`select country, buyer from awards where buyer is not null and (awarded <= now() or awarded is null) group by 1, 2 having count(*) >= ${GATES.buyerAwards}`,
    )
    const digests = await rows(
      db,
      sql`select distinct country from tenders where published > now() - interval '7 days'
          union select distinct country from awards where awarded > now() - interval '7 days' and awarded <= now()`,
    )
    const bySlug = (iso2: string) => COUNTRY_SLUGS.find((c) => ISO[c] === iso2)!
    const categories = cats
      .filter((r) => CATEGORY_SLUGS.includes(r.slug))
      .map((r) => ({ country: bySlug(r.country), category: r.slug as string }))
    return {
      hub: categories.length > 0,
      categories,
      buyers: [...new Set(buyers.map((r) => buyerSlug(bySlug(r.country), r.buyer)))],
      digests: digests.map((r) => bySlug(r.country)),
    } satisfies IndexablePages
  }),
)
