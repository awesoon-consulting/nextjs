import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const DATA = process.env.AWESOON_DATA ?? '/Users/rayrasouli/Desktop/Awesoon/data'
const OUT = join(__dirname, '..', 'src', 'data')

function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ''
  let quoted = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++ }
      else if (ch === '"') quoted = false
      else cell += ch
    } else if (ch === '"') quoted = true
    else if (ch === ',') { row.push(cell); cell = '' }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++
      row.push(cell); rows.push(row); row = []; cell = ''
    } else cell += ch
  }
  if (cell || row.length) { row.push(cell); rows.push(row) }
  const [head, ...body] = rows.filter((r) => r.length > 1)
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])))
}

const read = (source: string, file: string) => parseCsv(readFileSync(join(DATA, source, 'latest', file), 'utf8'))
const run = (source: string) => readFileSync(join(DATA, source, 'latest', 'RUN.txt'), 'utf8').trim()

// Wages. BLS roles map to the four tool roles; StatCan and ABS publish no figure at that level,
// so their single broad figure is reused for every role and the page says so.
const BLS_ROLES: Record<string, string> = { '43-9021': 'dataEntry', '43-4151': 'orderClerk', '43-3021': 'billingClerk', '43-3031': 'bookkeeping' }

const bls = read('bls-oews', 'wages.csv')
const statcan = read('statcan-wages', 'wages.csv')
const abs = read('abs-earnings', 'wages.csv')

const us: Record<string, Record<string, number>> = {}
for (const r of bls) {
  const role = BLS_ROLES[r.occupationCode]
  if (!role || !r.median) continue
  ;(us[r.region] ??= {})[role] = Number(r.median)
}
const ca: Record<string, number> = {}
for (const r of statcan) if (r.median) ca[r.region] = Number(r.median)
const au: Record<string, number> = {}
for (const r of abs) if (r.mean) au[r.region] = Number(r.mean)

const sortKeys = <T,>(o: Record<string, T>) => Object.fromEntries(Object.entries(o).sort(([a], [b]) => a.localeCompare(b)))

const wages = {
  US: {
    currency: 'USD', unit: 'annual', stat: 'median', period: bls[0].period, run: run('bls-oews'),
    byRole: true,
    source: 'U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics',
    url: 'https://www.bls.gov/oes/',
    licence: 'U.S. Government work, public domain.',
    occupations: { dataEntry: '43-9021', orderClerk: '43-4151', billingClerk: '43-3021', bookkeeping: '43-3031' },
    regions: sortKeys(us),
  },
  CA: {
    currency: 'CAD', unit: 'hourly', stat: 'median', period: statcan[0].period, run: run('statcan-wages'),
    byRole: false,
    occupation: statcan[0].occupationName,
    occupationCode: statcan[0].occupationCode,
    source: 'Statistics Canada, Table 14-10-0417-01 Employee wages by occupation, annual',
    url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1410041701',
    licence: 'Statistics Canada Open Licence. Reproduced and distributed on an "as is" basis with the permission of Statistics Canada.',
    regions: sortKeys(ca),
  },
  AU: {
    currency: 'AUD', unit: 'weekly', stat: 'mean', period: abs[0].period, run: run('abs-earnings'),
    byRole: false,
    occupation: 'All employees average weekly total earnings, all industries, original series',
    source: 'Australian Bureau of Statistics, Average Weekly Earnings, Australia',
    url: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia',
    licence: 'Creative Commons Attribution 4.0 International.',
    regions: sortKeys(au),
  },
}
writeFileSync(join(OUT, 'wages-snapshot.json'), JSON.stringify(wages) + '\n')

// Code index, limited to IT, software, data, design and advertising families.
const keep = (code: string, prefixes: string[]) => prefixes.some((p) => code.startsWith(p))
const PSC = ['D', 'R701', 'R702', 'R708', 'T001', 'T016']
const CPV = ['72', '48', '7934', '79822', '7993', '79413', '79416']
const GSIN = ['D3', 'T002', 'T003', 'T004A', 'T005', 'JX7030', 'N7030']
const UNSPSC = ['4323', '8111', '8112', '8116', '8210', '8211', '8214']

const tidy = (s: string) => {
  const t = s.trim().replace(/\s+/g, ' ')
  if (t !== t.toUpperCase()) return t
  return t.toLowerCase().replace(/\bit\b/g, 'IT').replace(/\br and d\b/g, 'R and D').replace(/^./, (c) => c.toUpperCase())
}

const psc = read('codes-psc', 'codes.csv').filter((r) => keep(r.code, PSC)).map((r) => [r.code, tidy(r.title)])
const cpv = read('codes-cpv', 'codes.csv').filter((r) => keep(r.code, CPV)).map((r) => [r.code, tidy(r.title)])
const gsinAll = read('codes-gsin', 'codes.csv')
const gsin = gsinAll.filter((r) => r.scheme === 'GSIN' && keep(r.code, GSIN)).map((r) => [r.code, tidy(r.title)])
const unspsc = gsinAll.filter((r) => r.scheme === 'UNSPSC' && keep(r.code, UNSPSC)).map((r) => [r.code, tidy(r.title)])
const gsinSet = new Set(gsin.map(([c]) => c))
const unSet = new Set(unspsc.map(([c]) => c))
const crosswalk = read('codes-gsin', 'code_crosswalk.csv')
  .filter((r) => gsinSet.has(r.fromCode) && unSet.has(r.toCode))
  .map((r) => [r.fromCode, r.toCode])

const byCode = (a: string[], b: string[]) => a[0].localeCompare(b[0])
const index = {
  runs: { PSC: run('codes-psc'), CPV: run('codes-cpv'), GSIN: run('codes-gsin') },
  PSC: psc.sort(byCode), CPV: cpv.sort(byCode), GSIN: gsin.sort(byCode), UNSPSC: unspsc.sort(byCode),
  crosswalk,
}
writeFileSync(join(OUT, 'procurement-codes.json'), JSON.stringify(index) + '\n')
console.log(`wages: US ${Object.keys(us).length} regions, CA ${Object.keys(ca).length}, AU ${Object.keys(au).length}`)
console.log(`codes: PSC ${psc.length}, CPV ${cpv.length}, GSIN ${gsin.length}, UNSPSC ${unspsc.length}, crosswalk ${crosswalk.length}`)
