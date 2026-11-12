import { getJson } from '../http'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const codesPsc: Connector = {
  id: 'codes-psc',
  name: 'Product and Service Codes (via USAspending references)',
  url: 'https://www.acquisition.gov/psc-manual',
  licence: 'U.S. Government work, public domain',
  attribution: 'Source: GSA Product and Service Codes, served by USAspending.gov.',
  group: 'codes',
  async run() {
    const out: Output = { codes: [] }
    const walk = (n: any, parent: string | null) => {
      out.codes!.push({ scheme: 'PSC', code: n.id, title: n.description || n.id, parent })
      for (const c of n.children ?? []) walk(c, n.id)
    }
    for (const tier of ['Service', 'Product', 'Research and Development']) {
      const res: any = await getJson(`https://api.usaspending.gov/api/v2/references/filter_tree/psc/${encodeURIComponent(tier)}/?depth=-1`, {
        minGapMs: 1000,
        timeoutMs: 120_000,
      })
      for (const n of res.results ?? []) walk(n, null)
    }
    return out
  },
}
