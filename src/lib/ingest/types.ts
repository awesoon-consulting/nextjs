import type * as s from './db/schema'

export type Rows = {
  tenders: (typeof s.tenders.$inferInsert)[]
  awards: (typeof s.awards.$inferInsert)[]
  buyers: (typeof s.buyers.$inferInsert)[]
  wages: (typeof s.wages.$inferInsert)[]
  codes: (typeof s.codes.$inferInsert)[]
  codeCrosswalk: (typeof s.codeCrosswalk.$inferInsert)[]
  platformsApi: (typeof s.platformsApi.$inferInsert)[]
  platformChanges: (typeof s.platformChanges.$inferInsert)[]
}

export type Output = Partial<Rows>

export type Group = 'procurement' | 'wages' | 'codes' | 'platforms'

export interface Ctx {
  dry: boolean
  // Page cap per source; dry runs use a small sample.
  maxPages: number
  // Look-back window for dated sources; unset means the source's daily default.
  sinceDays?: number
  log: (msg: string) => void
}

export interface Connector {
  id: string
  name: string
  url: string
  licence: string
  attribution: string
  group: Group
  // Env var a keyed source needs; the connector no-ops without it.
  envKey?: string
  run(ctx: Ctx): Promise<Output>
}
