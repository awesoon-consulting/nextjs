import { pullOcds } from '../ocds'
import type { Connector } from '../types'

export const ukFindATender: Connector = {
  id: 'uk-find-a-tender',
  name: 'Find a Tender (UK)',
  url: 'https://www.find-tender.service.gov.uk/',
  licence: 'Open Government Licence v3.0',
  attribution: 'Contains public sector information licensed under the Open Government Licence v3.0 (Cabinet Office, Find a Tender).',
  group: 'procurement',
  run: (ctx) => {
    const since = new Date(Date.now() - (ctx.sinceDays ?? 2) * 864e5).toISOString().slice(0, 19)
    return pullOcds(ctx, {
      sourceId: 'uk-find-a-tender',
      country: 'GB',
      scheme: 'CPV',
      firstPage: `https://www.find-tender.service.gov.uk/api/1.0/ocdsReleasePackages?limit=100&updatedFrom=${since}`,
      noticeUrl: (r) => (r.id ? `https://www.find-tender.service.gov.uk/Notice/${r.id}` : null),
      minGapMs: 1000,
    })
  },
}
