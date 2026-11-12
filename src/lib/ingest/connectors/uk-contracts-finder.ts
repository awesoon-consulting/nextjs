import { pullOcds } from '../ocds'
import type { Connector } from '../types'

const daysAgo = (n: number) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10)

export const ukContractsFinder: Connector = {
  id: 'uk-contracts-finder',
  name: 'Contracts Finder (UK)',
  url: 'https://www.contractsfinder.service.gov.uk/',
  licence: 'Open Government Licence v3.0',
  attribution: 'Contains public sector information licensed under the Open Government Licence v3.0 (Crown Service, Contracts Finder).',
  group: 'procurement',
  run: (ctx) =>
    pullOcds(ctx, {
      sourceId: 'uk-contracts-finder',
      country: 'GB',
      scheme: 'CPV',
      firstPage: `https://www.contractsfinder.service.gov.uk/Published/Notices/OCDS/Search?publishedFrom=${daysAgo(ctx.sinceDays ?? 2)}&limit=100`,
      noticeUrl: (r) => {
        const guid = String(r.ocid ?? '').replace(/^ocds-[a-z0-9]+-/, '')
        return guid ? `https://www.contractsfinder.service.gov.uk/Notice/${guid}` : null
      },
      minGapMs: 1000,
    }),
}
