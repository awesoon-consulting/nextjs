import { pullOcds } from '../ocds'
import type { Connector } from '../types'

export const austender: Connector = {
  id: 'austender',
  name: 'AusTender OCDS API',
  url: 'https://api.tenders.gov.au/',
  licence: 'Creative Commons Attribution 4.0 International',
  attribution: 'Source: AusTender, Department of Finance, Commonwealth of Australia, licensed under CC BY 4.0.',
  group: 'procurement',
  run: (ctx) => {
    const iso = (d: Date) => d.toISOString().slice(0, 19) + 'Z'
    const to = new Date()
    const from = new Date(to.getTime() - (ctx.sinceDays ?? 3) * 864e5)
    return pullOcds(ctx, {
      sourceId: 'austender',
      country: 'AU',
      scheme: 'UNSPSC',
      firstPage: `https://api.tenders.gov.au/ocds/findByDates/contractPublished/${iso(from)}/${iso(to)}`,
      noticeUrl: (r) => (r.ocid ? `https://api.tenders.gov.au/ocds/findById/${r.ocid}` : null),
      minGapMs: 1000,
    })
  },
}
