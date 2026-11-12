import { codesFor, matchCategories } from '../category-map'
import { getJson } from '../http'
import { toDate, toNum } from '../parse'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

const FIELDS = ['Award ID', 'Recipient Name', 'Award Amount', 'Awarding Agency', 'Awarding Sub Agency', 'Start Date', 'NAICS', 'PSC', 'Description', 'generated_internal_id']

export const usaspending: Connector = {
  id: 'usaspending',
  name: 'USAspending.gov API',
  url: 'https://api.usaspending.gov/',
  licence: 'U.S. Government work, public domain',
  attribution: 'Source: USAspending.gov, U.S. Department of the Treasury.',
  group: 'procurement',
  async run(ctx) {
    const out: Output = { awards: [], buyers: [] }
    const buyers = new Set<string>()
    const end = new Date().toISOString().slice(0, 10)
    const start = new Date(Date.now() - (ctx.sinceDays ?? 30) * 864e5).toISOString().slice(0, 10)
    const naics = codesFor('NAICS')
    let scanned = 0
    for (let page = 1; page <= ctx.maxPages; page++) {
      const body = {
        filters: {
          award_type_codes: ['A', 'B', 'C', 'D'],
          naics_codes: { require: naics },
          time_period: [{ start_date: start, end_date: end }],
        },
        fields: FIELDS,
        sort: 'Award Amount',
        order: 'desc',
        limit: 100,
        page,
      }
      const res: any = await getJson('https://api.usaspending.gov/api/v2/search/spending_by_award/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        minGapMs: 1000,
      })
      for (const a of res.results ?? []) {
        scanned++
        const naicsCode = a.NAICS?.code ? [String(a.NAICS.code)] : []
        const psc = a.PSC?.code ? [String(a.PSC.code)] : []
        const categories = [...new Set([...matchCategories('NAICS', naicsCode), ...matchCategories('PSC', psc)])]
        if (!categories.length) continue
        const buyer = a['Awarding Sub Agency'] || a['Awarding Agency'] || null
        if (buyer) buyers.add(buyer)
        out.awards!.push({
          sourceId: 'usaspending',
          externalId: a.generated_internal_id,
          country: 'US',
          title: a.Description || a['Award ID'],
          buyer,
          categoryCodes: { NAICS: naicsCode, PSC: psc },
          categories,
          value: toNum(a['Award Amount']),
          currency: 'USD',
          status: null,
          supplier: a['Recipient Name'] ?? null,
          awarded: toDate(a['Start Date']),
          url: `https://www.usaspending.gov/award/${a.generated_internal_id}`,
        })
      }
      if (!res.page_metadata?.hasNext) break
    }
    out.buyers = [...buyers].map((name) => ({ country: 'US', name, sourceId: 'usaspending' }))
    ctx.log(`usaspending: scanned ${scanned} awards`)
    return out
  },
}
