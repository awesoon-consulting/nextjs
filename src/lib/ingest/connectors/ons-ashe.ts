import { getJson } from '../http'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

// ASHE Table 3: region by two-digit SOC. SOC 41 (administrative
// occupations) holds data entry, order and bookkeeping clerks.
const DATASET = 'https://api.beta.ons.gov.uk/v1/datasets/ashe-tables-3'
const SOC = '41'
const SOC_NAME = 'Administrative occupations'

export const onsAshe: Connector = {
  id: 'ons-ashe',
  name: 'ONS Annual Survey of Hours and Earnings, Table 3',
  url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours',
  licence: 'Open Government Licence v3.0',
  attribution: 'Source: Office for National Statistics licensed under the Open Government Licence v3.0.',
  group: 'wages',
  async run(ctx) {
    const ds: any = await getJson(DATASET)
    const version: string = ds.links.latest_version.href
    const times: any = await getJson(`${version}/dimensions/time/options?limit=100`)
    const year = times.items.map((o: any) => o.option).sort().at(-1)
    const geos: any = await getJson(`${version}/dimensions/geography/options?limit=100`)
    const regions: any[] = geos.items.slice(0, ctx.dry ? 3 : undefined)
    const out: Output = { wages: [] }
    for (const g of regions) {
      const get = async (avg: string) => {
        const q = `time=${year}&geography=${g.option}&averagesandpercentiles=${avg}&sex=all&workingpattern=full-time&hoursandearnings=annual-pay-gross&standardoccupationalclassification=${SOC}`
        const r: any = await getJson(`${version}/observations?${q}`, { timeoutMs: 90_000, minGapMs: 1000 })
        return r.observations?.[0]?.observation ?? null
      }
      const median = await get('median')
      const mean = await get('mean')
      if (median === null && mean === null) continue
      out.wages!.push({
        sourceId: 'ons-ashe',
        country: 'GB',
        region: g.label,
        occupationCode: `SOC ${SOC}`,
        occupationName: SOC_NAME,
        median,
        mean,
        unit: 'annual',
        currency: 'GBP',
        period: year,
      })
    }
    return out
  },
}
