import { getDb } from '@/src/lib/ingest/db/client'
import { platformsApi } from '@/src/lib/ingest/db/schema'
import { solutionPlatforms, supportPlatforms, flagshipPlatforms, type Platform } from '@/src/data/platforms'
import { getSourceInfo, safe, slugify, type SourceInfo } from './shared'

export type PlatformCategory = 'ai' | 'automation' | 'spreadsheet' | 'workManagement'

// Our side of the facts: which APIs.guru spec is genuinely this product, and what kind
// of tool it is. A platforms_api row whose apisGuruId does not match is a wrong spec
// (for example Dynamics 365 mapped to a Cognitive Services API) and is left out.
const OURS: Record<string, { spec: string; category: PlatformCategory }> = {
  OpenAI: { spec: 'openai.com', category: 'ai' },
  Zapier: { spec: 'zapier.com', category: 'automation' },
  'Google Sheets': { spec: 'googleapis.com:sheets', category: 'spreadsheet' },
  Jira: { spec: 'atlassian.com:jira', category: 'workManagement' },
  Asana: { spec: 'asana.com', category: 'workManagement' },
}

export interface PlatformFacts {
  name: string
  slug: string
  url: string
  category: PlatformCategory
  auth: string[]
  webhooks: boolean
  specUrl: string
  version: string | null
}

export interface Pair {
  slug: string
  a: PlatformFacts
  b: PlatformFacts
}

const ourPlatforms = () => {
  const all: Platform[] = [...Object.values(solutionPlatforms).flat(), ...Object.values(supportPlatforms).flat(), ...flagshipPlatforms]
  return new Map(all.map((p) => [p.name, p]))
}

export const pairSlug = (a: PlatformFacts, b: PlatformFacts) => `${slugify(a.name)}-and-${slugify(b.name)}`

async function loadPlatforms(): Promise<PlatformFacts[]> {
  const db = getDb()!
  const rows = await db.select().from(platformsApi)
  const mine = ourPlatforms()
  return rows
    .filter((r) => OURS[r.name] && OURS[r.name].spec === r.apisGuruId && mine.has(r.name))
    .map((r) => {
      const p = mine.get(r.name)!
      return {
        name: r.name,
        slug: p.slug,
        url: p.url,
        category: OURS[r.name].category,
        auth: r.auth,
        webhooks: r.webhooks,
        specUrl: r.specUrl,
        version: r.version,
      }
    })
    .sort((x, y) => x.name.localeCompare(y.name))
}

export interface IntegrationsIndex {
  platforms: PlatformFacts[]
  pairs: Pair[]
  totalSpecs: number
  source: SourceInfo | null
}

export async function getIntegrationsIndex(): Promise<IntegrationsIndex | null> {
  return safe(async () => {
    const platforms = await loadPlatforms()
    const pairs: Pair[] = []
    for (let i = 0; i < platforms.length; i++)
      for (let j = i + 1; j < platforms.length; j++) pairs.push({ slug: pairSlug(platforms[i], platforms[j]), a: platforms[i], b: platforms[j] })
    const totalSpecs = (await getDb()!.select({ n: platformsApi.name }).from(platformsApi)).length
    return { platforms, pairs, totalSpecs, source: await getSourceInfo('apis-guru') }
  })
}

export type PairResult = { state: 'soon' } | { state: 'missing' } | { state: 'ok'; pair: Pair; source: SourceInfo | null; related: Pair[] }

export async function getPair(slug: string): Promise<PairResult> {
  const idx = await getIntegrationsIndex()
  if (!idx) return getDb() ? { state: 'missing' } : { state: 'soon' }
  const pair = idx.pairs.find((p) => p.slug === slug)
  if (!pair) return { state: 'missing' }
  const related = idx.pairs.filter((p) => p !== pair && [p.a.slug, p.b.slug].some((s) => s === pair.a.slug || s === pair.b.slug)).slice(0, 6)
  return { state: 'ok', pair, source: idx.source, related }
}
