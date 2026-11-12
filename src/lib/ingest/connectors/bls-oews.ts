import { createWriteStream } from 'node:fs'
import { createGzip } from 'node:zlib'
import { getRecorder, politeFetch } from '../http'
import { toNum } from '../parse'
import type { Connector, Output } from '../types'

// The OEWS bulk time-series file (all areas, current year) is streamed and
// only state rows for our four occupations are kept. The keyless v1 API
// answered 503 to every request on 2026-11-12, so the bulk file is the path.
export const OCCUPATIONS: Record<string, string> = {
  '439021': 'Data entry keyers',
  '434151': 'Order clerks',
  '433021': 'Billing and posting clerks',
  '433031': 'Bookkeeping, accounting, and auditing clerks',
}

const STATES: Record<string, string> = {
  '01': 'Alabama', '02': 'Alaska', '04': 'Arizona', '05': 'Arkansas', '06': 'California', '08': 'Colorado',
  '09': 'Connecticut', '10': 'Delaware', '11': 'District of Columbia', '12': 'Florida', '13': 'Georgia',
  '15': 'Hawaii', '16': 'Idaho', '17': 'Illinois', '18': 'Indiana', '19': 'Iowa', '20': 'Kansas',
  '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine', '24': 'Maryland', '25': 'Massachusetts',
  '26': 'Michigan', '27': 'Minnesota', '28': 'Mississippi', '29': 'Missouri', '30': 'Montana',
  '31': 'Nebraska', '32': 'Nevada', '33': 'New Hampshire', '34': 'New Jersey', '35': 'New Mexico',
  '36': 'New York', '37': 'North Carolina', '38': 'North Dakota', '39': 'Ohio', '40': 'Oklahoma',
  '41': 'Oregon', '42': 'Pennsylvania', '44': 'Rhode Island', '45': 'South Carolina', '46': 'South Dakota',
  '47': 'Tennessee', '48': 'Texas', '49': 'Utah', '50': 'Vermont', '51': 'Virginia', '53': 'Washington',
  '54': 'West Virginia', '55': 'Wisconsin', '56': 'Wyoming',
}

const MEAN = '04'
const MEDIAN = '13'
const seriesId = (fips: string, occ: string, dt: string) => `OEUS${fips}00000000000${occ}${dt}`

export const blsOews: Connector = {
  id: 'bls-oews',
  name: 'BLS Occupational Employment and Wage Statistics',
  url: 'https://www.bls.gov/oes/',
  licence: 'U.S. Government work, public domain',
  attribution: 'Source: U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics.',
  group: 'wages',
  async run() {
    const wanted = new Set(Object.keys(STATES).flatMap((f) => Object.keys(OCCUPATIONS).flatMap((o) => [seriesId(f, o, MEAN), seriesId(f, o, MEDIAN)])))
    const values = new Map<string, { value: string | null; year: string }>()
    const url = 'https://download.bls.gov/pub/time.series/oe/oe.data.0.Current'
    const res = await politeFetch(url, { timeoutMs: 280_000 })
    const rec = getRecorder()
    const gzip = rec ? createGzip() : null
    const done = gzip ? new Promise((r) => gzip.pipe(createWriteStream(rec!.streamPath(url))).on('finish', () => r(null))) : null
    const decoder = new TextDecoder()
    let rest = ''
    const take = (line: string) => {
      if (!line.startsWith('OEUS')) return
      const [id, year, , value] = line.split('\t').map((x) => x.trim())
      if (wanted.has(id)) values.set(id, { value: toNum(value), year })
    }
    for await (const chunk of res.body as unknown as AsyncIterable<Uint8Array>) {
      if (gzip && !gzip.write(chunk)) await new Promise((r) => gzip.once('drain', () => r(null)))
      const lines = (rest + decoder.decode(chunk, { stream: true })).split('\n')
      rest = lines.pop() ?? ''
      for (const l of lines) take(l)
    }
    take(rest)
    gzip?.end()
    await done
    const out: Output = { wages: [] }
    for (const [fips, state] of Object.entries(STATES)) {
      for (const [occ, name] of Object.entries(OCCUPATIONS)) {
        const mean = values.get(seriesId(fips, occ, MEAN))
        const median = values.get(seriesId(fips, occ, MEDIAN))
        if (!mean && !median) continue
        out.wages!.push({
          sourceId: 'bls-oews',
          country: 'US',
          region: state,
          occupationCode: `${occ.slice(0, 2)}-${occ.slice(2)}`,
          occupationName: name,
          median: median?.value ?? null,
          mean: mean?.value ?? null,
          unit: 'annual',
          currency: 'USD',
          period: (mean ?? median)!.year,
        })
      }
    }
    return out
  },
}
