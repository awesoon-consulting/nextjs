import { desc, eq, and } from 'drizzle-orm'
import { getDb } from '@/src/lib/ingest/db/client'
import { ingestRuns, sources } from '@/src/lib/ingest/db/schema'
import { CONNECTORS } from '@/src/lib/ingest/registry'

export const REVALIDATE_SECONDS = 86400

export function slugify(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export interface SourceInfo {
  id: string
  name: string
  url: string
  licence: string
  attribution: string
  lastUpdated: string | null
}

// The DB being unreachable is a real runtime state (Supabase paused, network); pages
// fall back to the "data loading soon" view instead of failing the render.
export async function safe<T>(fn: () => Promise<T>): Promise<T | null> {
  if (!getDb()) return null
  try {
    return await fn()
  } catch (e) {
    console.error('[cost-platform] query failed', e)
    return null
  }
}

export async function getSourceInfo(id: string): Promise<SourceInfo | null> {
  const db = getDb()
  if (!db) return null
  const [row] = await db.select().from(sources).where(eq(sources.id, id))
  const c = CONNECTORS.find((x) => x.id === id)
  const base = row ?? (c ? { id, name: c.name, url: c.url, licence: c.licence, attribution: c.attribution } : null)
  if (!base) return null
  const [run] = await db
    .select({ finishedAt: ingestRuns.finishedAt })
    .from(ingestRuns)
    .where(and(eq(ingestRuns.sourceId, id), eq(ingestRuns.status, 'ok')))
    .orderBy(desc(ingestRuns.finishedAt))
    .limit(1)
  return {
    id,
    name: base.name,
    url: base.url,
    licence: base.licence,
    attribution: base.attribution,
    lastUpdated: run?.finishedAt ? run.finishedAt.toISOString() : null,
  }
}

export function baseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://awesoon.com'
}

export { formatDate } from './format'
