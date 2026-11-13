import { desc, gte } from 'drizzle-orm'
import { getDb } from '@/src/lib/ingest/db/client'
import { platformChanges } from '@/src/lib/ingest/db/schema'
import { getSourceInfo, safe, type SourceInfo } from './shared'

export const RECENT_DAYS = 90

export interface ChangeItem {
  id: number
  vendor: string
  kind: 'status' | 'changelog'
  title: string
  url: string | null
  published: string
  sourceId: string
}

export interface Calendar {
  upcoming: ChangeItem[]
  recent: ChangeItem[]
  vendors: string[]
  sources: SourceInfo[]
}

export async function getCalendar(): Promise<Calendar | null> {
  return safe(async () => {
    const now = Date.now()
    const since = new Date(now - RECENT_DAYS * 86400000)
    const rows = await getDb()!
      .select()
      .from(platformChanges)
      .where(gte(platformChanges.published, since))
      .orderBy(desc(platformChanges.published))
      .limit(400)
    const items: ChangeItem[] = rows.map((r) => ({
      id: r.id,
      vendor: r.vendor,
      kind: r.kind as ChangeItem['kind'],
      title: r.title,
      url: r.url,
      published: r.published!.toISOString(),
      sourceId: r.sourceId,
    }))
    const sourceIds = [...new Set(items.map((i) => i.sourceId))].sort()
    const sources = (await Promise.all(sourceIds.map(getSourceInfo))).filter((s): s is SourceInfo => !!s)
    return {
      upcoming: items.filter((i) => Date.parse(i.published) > now).reverse(),
      recent: items.filter((i) => Date.parse(i.published) <= now),
      vendors: [...new Set(items.map((i) => i.vendor))].sort(),
      sources,
    }
  })
}
