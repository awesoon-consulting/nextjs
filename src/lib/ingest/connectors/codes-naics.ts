import { getJson } from '../http'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

const API = 'https://api.usaspending.gov/api/v2/references/naics/'

export const codesNaics: Connector = {
  id: 'codes-naics',
  name: 'NAICS 2022 (via USAspending references)',
  url: 'https://www.census.gov/naics/',
  licence: 'U.S. Government work, public domain',
  attribution: 'Source: U.S. Census Bureau, North American Industry Classification System, served by USAspending.gov.',
  group: 'codes',
  async run(ctx) {
    const out: Output = { codes: [] }
    const add = (code: string, title: string, parent: string | null) => out.codes!.push({ scheme: 'NAICS', code, title, parent })
    const top: any = await getJson(API, { minGapMs: 300 })
    const sectors = (top.results as any[]).filter((s) => !s.year_retired)
    for (const s of sectors) add(s.naics, s.naics_description, null)
    let calls = 0
    for (const s of sectors) {
      if (calls++ >= ctx.maxPages) break
      const groups: any = await getJson(`${API}${s.naics}/`, { minGapMs: 300 })
      for (const g of groups.results?.[0]?.children ?? []) {
        if (g.year_retired) continue
        add(g.naics, g.naics_description, s.naics)
        if (ctx.dry) continue
        const inds: any = await getJson(`${API}${g.naics}/`, { minGapMs: 300 })
        for (const i of inds.results?.[0]?.children ?? []) if (!i.year_retired) add(i.naics, i.naics_description, g.naics)
      }
    }
    return out
  },
}
