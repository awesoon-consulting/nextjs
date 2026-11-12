import { getJson } from '../http'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

// Table 14-10-0417-01, Employee wages by occupation, annual. The finest
// NOC level in this table is two digits; NOC 13 holds data entry clerks
// (14111), order and shipping clerks and accounting clerks.
const PID = 14100417
const NOC_NAME = 'Administrative and financial support and supply chain logistics occupations'
const WDS = 'https://www150.statcan.gc.ca/t1/wds/rest/'

export const statcanWages: Connector = {
  id: 'statcan-wages',
  name: 'Statistics Canada, table 14-10-0417-01',
  url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410041701',
  licence: 'Statistics Canada Open Licence',
  attribution: 'Source: Statistics Canada, Table 14-10-0417-01 Employee wages by occupation, annual. Reproduced and distributed on an "as is" basis with the permission of Statistics Canada.',
  group: 'wages',
  async run() {
    const post = (path: string, body: unknown) =>
      getJson<any[]>(WDS + path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), minGapMs: 500 })
    const meta = (await post('getCubeMetadata', [{ productId: PID }]))[0].object
    const dim = (n: number) => meta.dimension[n - 1].member as any[]
    const id = (n: number, name: string) => {
      const m = dim(n).find((x) => x.memberNameEn === name)
      if (!m) throw new Error(`StatCan: member "${name}" missing in dimension ${n}`)
      return m.memberId as number
    }
    const mean = id(2, 'Average hourly wage rate')
    const median = id(2, 'Median hourly wage rate')
    const noc = id(4, NOC_NAME)
    const both = id(3, 'Both full- and part-time employees')
    const gender = id(5, 'Total - Gender')
    const age = id(6, '15 years and over')
    const geos = dim(1)
    const coord = (g: number, w: number) => [g, w, both, noc, gender, age, 0, 0, 0, 0].join('.')
    const req = geos.flatMap((g) => [mean, median].map((w) => ({ productId: PID, coordinate: coord(g.memberId, w), latestN: 1 })))
    const res = await post('getDataFromCubePidCoordAndLatestNPeriods', req)
    const val = (g: number, w: number) => {
      const hit = res.find((r) => r.object?.coordinate === coord(g, w))?.object?.vectorDataPoint?.[0]
      return hit ? { value: String(hit.value), period: String(hit.refPer).slice(0, 4) } : null
    }
    const out: Output = { wages: [] }
    for (const g of geos) {
      const a = val(g.memberId, mean)
      const m = val(g.memberId, median)
      if (!a && !m) continue
      out.wages!.push({
        sourceId: 'statcan-wages',
        country: 'CA',
        region: g.memberNameEn,
        occupationCode: 'NOC 13',
        occupationName: NOC_NAME,
        median: m?.value ?? null,
        mean: a?.value ?? null,
        unit: 'hourly',
        currency: 'CAD',
        period: (a ?? m)!.period,
      })
    }
    return out
  },
}
