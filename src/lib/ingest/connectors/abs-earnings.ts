import { getText } from '../http'
import { parseCsv } from '../parse'
import type { Connector, Output } from '../types'

// Average Weekly Earnings (6302.0) by state. ABS publishes earnings by
// occupation only in the biennial Employee Earnings tables, not in the
// Data API, so this is all-occupation earnings per state.
const STATES: Record<string, string> = {
  AUS: 'Australia', '1': 'New South Wales', '2': 'Victoria', '3': 'Queensland', '4': 'South Australia',
  '5': 'Western Australia', '6': 'Tasmania', '7': 'Northern Territory', '8': 'Australian Capital Territory',
}

export const absEarnings: Connector = {
  id: 'abs-earnings',
  name: 'ABS Average Weekly Earnings',
  url: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia',
  licence: 'Creative Commons Attribution 4.0 International',
  attribution: 'Source: Australian Bureau of Statistics, Average Weekly Earnings, Australia, licensed under CC BY 4.0.',
  group: 'wages',
  async run() {
    // MEASURE 1 all employees total, ESTIMATE 1 earnings, SEX 3 persons,
    // SECTOR 7 private and public, INDUSTRY TOT, TSEST 10 original.
    const year = new Date().getUTCFullYear() - 1
    const csv = await getText(`https://data.api.abs.gov.au/rest/data/ABS,AWE,1.0.0/1.1.3.7.TOT.10..?startPeriod=${year}`, {
      headers: { Accept: 'application/vnd.sdmx.data+csv' },
    })
    const latest = new Map<string, { value: string; period: string }>()
    for (const r of parseCsv(csv)) {
      const prev = latest.get(r.REGION)
      if (!prev || r.TIME_PERIOD > prev.period) latest.set(r.REGION, { value: r.OBS_VALUE, period: r.TIME_PERIOD })
    }
    const out: Output = { wages: [] }
    for (const [code, v] of latest) {
      if (!STATES[code]) continue
      out.wages!.push({
        sourceId: 'abs-earnings',
        country: 'AU',
        region: STATES[code],
        occupationCode: 'ALL',
        occupationName: 'All occupations',
        median: null,
        mean: v.value,
        unit: 'weekly',
        currency: 'AUD',
        period: v.period,
      })
    }
    return out
  },
}
