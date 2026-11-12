import { getJson } from '../http'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

const QUERY = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?code ?label ?parentCode WHERE {
  ?c skos:inScheme <http://data.europa.eu/cpv/cpv> ; skos:notation ?code ; skos:prefLabel ?label .
  FILTER(lang(?label) = "en")
  OPTIONAL { ?c skos:broader ?p . ?p skos:notation ?parentCode }
}`

export const codesCpv: Connector = {
  id: 'codes-cpv',
  name: 'Common Procurement Vocabulary (EU Vocabularies)',
  url: 'https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http://publications.europa.eu/resource/dataset/cpv',
  licence: 'Creative Commons Attribution 4.0 International',
  attribution: 'Source: Publications Office of the European Union, Common Procurement Vocabulary, licensed under CC BY 4.0.',
  group: 'codes',
  async run(ctx) {
    const q = ctx.dry ? `${QUERY} LIMIT 500` : QUERY
    const url = `https://publications.europa.eu/webapi/rdf/sparql?query=${encodeURIComponent(q)}`
    const res: any = await getJson(url, { headers: { Accept: 'application/sparql-results+json' }, timeoutMs: 120_000 })
    const seen = new Map<string, { title: string; parent: string | null }>()
    for (const b of res.results.bindings) {
      if (!seen.has(b.code.value)) seen.set(b.code.value, { title: b.label.value, parent: b.parentCode?.value ?? null })
    }
    const out: Output = { codes: [...seen].map(([code, v]) => ({ scheme: 'CPV', code, ...v })) }
    return out
  },
}
