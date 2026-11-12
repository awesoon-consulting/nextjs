import { matchCategories } from '../category-map'
import { getText } from '../http'
import { parseCsv, toDate, toNum } from '../parse'
import type { Connector, Output } from '../types'

const BASE = 'https://canadabuys.canada.ca/opendata/pub/'

const col = (row: Record<string, string>, prefix: string) => {
  const key = Object.keys(row).find((k) => k.startsWith(prefix))
  return key ? row[key].trim() : ''
}

const codeList = (v: string) =>
  v
    .split(/[\n,;]+/)
    .map((c) => c.replace(/^\*/, '').trim())
    .filter(Boolean)

function fiscalYear(d = new Date()) {
  const y = d.getUTCMonth() >= 3 ? d.getUTCFullYear() : d.getUTCFullYear() - 1
  return `${y}-${y + 1}`
}

function categorize(row: Record<string, string>) {
  const unspsc = codeList(col(row, 'unspsc'))
  const gsin = codeList(col(row, 'gsin-nibs'))
  const categories = [...new Set([...matchCategories('UNSPSC', unspsc), ...matchCategories('GSIN', gsin)])]
  return { categoryCodes: { UNSPSC: unspsc, GSIN: gsin }, categories }
}

export const canadabuys: Connector = {
  id: 'canadabuys',
  name: 'CanadaBuys open data',
  url: 'https://canadabuys.canada.ca/en/tender-opportunities/open-data',
  licence: 'Open Government Licence - Canada',
  attribution: 'Contains information licensed under the Open Government Licence - Canada (Public Services and Procurement Canada, CanadaBuys).',
  group: 'procurement',
  async run(ctx) {
    const out: Output = { tenders: [], awards: [], buyers: [] }
    const buyers = new Map<string, string>()

    const open = parseCsv(await getText(BASE + 'openTenderNotice-ouvertAvisAppelOffres.csv', { timeoutMs: 120_000 }))
    for (const row of open) {
      const { categoryCodes, categories } = categorize(row)
      if (!categories.length) continue
      const buyer = col(row, 'contractingEntityName') || null
      if (buyer) buyers.set(buyer, buyer)
      out.tenders!.push({
        sourceId: 'canadabuys',
        externalId: `${col(row, 'referenceNumber')}:${col(row, 'amendmentNumber')}`,
        country: 'CA',
        title: col(row, 'title-titre-eng') || '(untitled)',
        buyer,
        categoryCodes,
        categories,
        value: null,
        currency: 'CAD',
        status: col(row, 'tenderStatus-appelOffresStatut-eng') || null,
        published: toDate(col(row, 'publicationDate')),
        closes: toDate(col(row, 'tenderClosingDate')),
        url: col(row, 'noticeURL') || null,
      })
    }

    // A look-back past the current fiscal year also reads the previous year's file.
    const years = [fiscalYear()]
    if ((ctx.sinceDays ?? 0) > 180) years.push(fiscalYear(new Date(Date.now() - 365 * 864e5)))
    const awardsCsv = []
    for (const y of [...new Set(years)]) awardsCsv.push(...parseCsv(await getText(`${BASE}${y}-awardNotice-avisAttribution.csv`, { timeoutMs: 180_000 })))
    for (const row of awardsCsv) {
      const { categoryCodes, categories } = categorize(row)
      if (!categories.length) continue
      const buyer = col(row, 'contractingEntityName') || null
      if (buyer) buyers.set(buyer, buyer)
      out.awards!.push({
        sourceId: 'canadabuys',
        externalId: `${col(row, 'referenceNumber')}:${col(row, 'contractNumber')}:${col(row, 'amendmentNumber')}`,
        country: 'CA',
        title: col(row, 'title-titre-eng') || '(untitled)',
        buyer,
        categoryCodes,
        categories,
        value: toNum(col(row, 'totalContractValue') || col(row, 'contractAmount')),
        currency: col(row, 'contractCurrency') || 'CAD',
        status: col(row, 'awardStatus-attributionStatut-eng') || null,
        supplier: col(row, 'supplierLegalName') || null,
        awarded: toDate(col(row, 'contractAwardDate')),
        url: col(row, 'noticeURL') || null,
      })
    }
    out.buyers = [...buyers.keys()].map((name) => ({ country: 'CA', name, sourceId: 'canadabuys' }))
    ctx.log(`canadabuys: scanned ${open.length} open tenders and ${awardsCsv.length} award rows`)
    return out
  },
}
