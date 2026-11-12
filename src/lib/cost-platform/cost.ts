import { eq } from 'drizzle-orm'
import { getDb } from '@/src/lib/ingest/db/client'
import { wages } from '@/src/lib/ingest/db/schema'
import { COUNTRIES, COUNTRY_SLUGS, NATIONAL_ROWS, UK_REGIONS, neighbours, type CountrySlug } from './regions'
import { getSourceInfo, safe, slugify, type SourceInfo } from './shared'

export const MIN_OCCUPATIONS = 2

export interface WageRow {
  code: string
  name: string
  median: number | null
  mean: number | null
  unit: 'hourly' | 'weekly' | 'annual'
  currency: string
  period: string
}

export interface RegionSummary {
  slug: string
  name: string
  occupations: number
  indexable: boolean
}

export interface CountryGroup {
  slug: CountrySlug
  regions: RegionSummary[]
}

const num = (v: string | null) => (v == null ? null : Number(v))

async function loadCountry(country: CountrySlug) {
  const db = getDb()!
  const rows = await db.select().from(wages).where(eq(wages.country, COUNTRIES[country].code))
  const byRegion = new Map<string, { name: string; rows: WageRow[] }>()
  for (const r of rows) {
    if (NATIONAL_ROWS.has(r.region)) continue
    if (r.median == null && r.mean == null) continue
    const slug = slugify(r.region)
    if (!byRegion.has(slug)) byRegion.set(slug, { name: r.region, rows: [] })
    byRegion.get(slug)!.rows.push({
      code: r.occupationCode,
      name: r.occupationName,
      median: num(r.median),
      mean: num(r.mean),
      unit: r.unit as WageRow['unit'],
      currency: r.currency,
      period: r.period,
    })
  }
  for (const v of byRegion.values()) v.rows.sort((a, b) => a.name.localeCompare(b.name))
  return byRegion
}

const isIndexable = (country: CountrySlug, rows: WageRow[]) =>
  country !== 'gb' && new Set(rows.map((r) => r.code)).size >= MIN_OCCUPATIONS

export async function getCostIndex(): Promise<CountryGroup[] | null> {
  return safe(async () => {
    const groups: CountryGroup[] = []
    for (const slug of COUNTRY_SLUGS) {
      const byRegion = await loadCountry(slug)
      const regions: RegionSummary[] = [...byRegion.entries()].map(([s, v]) => ({
        slug: s,
        name: v.name,
        occupations: new Set(v.rows.map((r) => r.code)).size,
        indexable: isIndexable(slug, v.rows),
      }))
      if (slug === 'gb') {
        for (const name of UK_REGIONS) {
          if (!byRegion.has(slugify(name))) regions.push({ slug: slugify(name), name, occupations: 0, indexable: false })
        }
      }
      regions.sort((a, b) => a.name.localeCompare(b.name))
      groups.push({ slug, regions })
    }
    return groups
  })
}

export interface RegionPage {
  country: CountrySlug
  slug: string
  name: string
  rows: WageRow[]
  indexable: boolean
  comingSoon: boolean
  neighbours: { slug: string; name: string; rows: WageRow[] }[]
  source: SourceInfo | null
}

export type RegionResult = { state: 'soon' } | { state: 'missing' } | { state: 'ok'; page: RegionPage }

export async function getRegionPage(country: string, region: string): Promise<RegionResult> {
  if (!(country in COUNTRIES)) return { state: 'missing' }
  const c = country as CountrySlug
  const res = await safe(async () => {
    const byRegion = await loadCountry(c)
    const hit = byRegion.get(region)
    const ukName = c === 'gb' ? UK_REGIONS.find((n) => slugify(n) === region) : undefined
    if (!hit && !ukName) return null
    const rows = hit?.rows ?? []
    return {
      country: c,
      slug: region,
      name: hit?.name ?? ukName!,
      rows,
      indexable: isIndexable(c, rows),
      comingSoon: rows.length === 0,
      neighbours: neighbours(c, region)
        .map((s) => ({ slug: s, ...byRegion.get(s)! }))
        .filter((n) => n.name)
        .sort((a, b) => a.name.localeCompare(b.name)),
      source: await getSourceInfo(COUNTRIES[c].sourceId),
    } satisfies RegionPage
  })
  if (res === null) return getDb() ? { state: 'missing' } : { state: 'soon' }
  return { state: 'ok', page: res }
}

export async function getIndexableRegionPaths(): Promise<{ country: CountrySlug; region: string }[]> {
  const groups = await getCostIndex()
  return (groups ?? []).flatMap((g) => g.regions.filter((r) => r.indexable).map((r) => ({ country: g.slug, region: r.slug })))
}

export async function getAllRegionPaths(): Promise<{ country: CountrySlug; region: string }[]> {
  const groups = await getCostIndex()
  return (groups ?? []).flatMap((g) => g.regions.map((r) => ({ country: g.slug, region: r.slug })))
}

