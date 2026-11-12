import { getText } from '../http'
import { parseCsv } from '../parse'
import type { Connector, Output } from '../types'

const BASE = 'https://donnees-data.tpsgc-pwgsc.gc.ca/ba2/aev-bas/'

// GSIN list, the GSIN to UNSPSC crosswalk (2021) and the UNSPSC v10 list
// Canada still publishes beside it.
export const codesGsin: Connector = {
  id: 'codes-gsin',
  name: 'GSIN, UNSPSC and GSIN-UNSPSC crosswalk (PSPC)',
  url: 'https://open.canada.ca/data/en/dataset/a1acb126-9ce8-40a9-b889-5da2b1dd20cb',
  licence: 'Open Government Licence - Canada',
  attribution: 'Contains information licensed under the Open Government Licence - Canada (Public Services and Procurement Canada).',
  group: 'codes',
  async run() {
    const out: Output = { codes: [], codeCrosswalk: [] }
    for (const r of parseCsv(await getText(BASE + 'nibs-gsin.csv', { timeoutMs: 120_000 }))) {
      if (r['gsin-code-status_en'] && r['gsin-code-status_en'] !== 'Active') continue
      out.codes!.push({ scheme: 'GSIN', code: r['nibs-gsin'], title: r['gsin-description_en'], parent: null })
    }
    for (const r of parseCsv(await getText(BASE + 'nibsunspsc-gsinunspsc-2021.csv', { timeoutMs: 120_000 }))) {
      if (!r.gsin || !r.unspsc_code) continue
      out.codeCrosswalk!.push({ fromScheme: 'GSIN', fromCode: r.gsin, toScheme: 'UNSPSC', toCode: r.unspsc_code, sourceId: 'codes-gsin' })
    }
    const unspsc = new Map<string, { title: string; parent: string | null }>()
    for (const r of parseCsv(await getText(BASE + 'unspsc-10-0501-2007.csv', { timeoutMs: 120_000 }))) {
      unspsc.set(r.segment, { title: r['segment-title_en'], parent: null })
      unspsc.set(r.family, { title: r['family-title_en'], parent: r.segment })
      unspsc.set(r.class, { title: r['class-title_en'], parent: r.family })
      if (r.commodity) unspsc.set(r.commodity, { title: r['commodity-title_en'], parent: r.class })
    }
    for (const [code, v] of unspsc) if (code) out.codes!.push({ scheme: 'UNSPSC', code, ...v })
    return out
  },
}
