export const SCHEMES = ['UNSPSC', 'GSIN', 'PSC', 'CPV'] as const
export type Scheme = (typeof SCHEMES)[number]

export interface CodeIndex {
  runs: Record<string, string>
  PSC: [string, string][]
  CPV: [string, string][]
  GSIN: [string, string][]
  UNSPSC: [string, string][]
  crosswalk: [string, string][]
}

export interface CodeHit {
  code: string
  title: string
  linked?: string[]
}

const STOP = new Set(['and', 'or', 'the', 'of', 'for', 'a', 'an', 'to', 'in', 'on', 'with', 'services', 'service', 'n.e.s', 'nes', 'other', 'it'])
const SYNONYMS: Record<string, string[]> = {
  website: ['web', 'internet'],
  web: ['internet'],
  app: ['application'],
  apps: ['application'],
  ads: ['advertising'],
  ad: ['advertising'],
  logo: ['graphic'],
  branding: ['graphic', 'advertising'],
  marketing: ['advertising'],
  coding: ['programming'],
  developer: ['development', 'programming'],
  cloud: ['cloud'],
  crm: ['customer', 'relationship'],
  erp: ['enterprise', 'resource', 'planning'],
  data: ['data'],
  analytics: ['analysis', 'data'],
}

function stem(w: string) {
  if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3)
  if (w.length > 4 && w.endsWith('ies')) return w.slice(0, -3) + 'y'
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1)
  return w
}

export function tokens(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w && !STOP.has(w)).map(stem)
}

export interface Searcher {
  search(query: string, perScheme?: number): Record<Scheme, CodeHit[]>
}

export function buildSearcher(index: CodeIndex): Searcher {
  const docs = SCHEMES.flatMap((scheme) => index[scheme].map(([code, title]) => ({ scheme, code, title, words: new Set(tokens(title)) })))
  const df = new Map<string, number>()
  for (const d of docs) for (const w of d.words) df.set(w, (df.get(w) ?? 0) + 1)
  const idf = (w: string) => Math.log((docs.length + 1) / ((df.get(w) ?? 0) + 1))
  const links = new Map<string, string[]>()
  for (const [g, u] of index.crosswalk) {
    links.set(`GSIN:${g}`, [...(links.get(`GSIN:${g}`) ?? []), u])
    links.set(`UNSPSC:${u}`, [...(links.get(`UNSPSC:${u}`) ?? []), g])
  }

  return {
    search(query, perScheme = 3) {
      const q = [...new Set(tokens(query))]
      const out = Object.fromEntries(SCHEMES.map((s) => [s, [] as CodeHit[]])) as Record<Scheme, CodeHit[]>
      if (!q.length) return out
      const total = q.reduce((s, w) => s + idf(w), 0)
      const scored = docs.flatMap((d) => {
        let score = 0
        let hits = 0
        for (const w of q) {
          const alts = [w, ...(SYNONYMS[w] ?? []).map(stem)]
          const hit = alts.find((a) => d.words.has(a))
          if (hit) {
            score += idf(w) * (hit === w ? 1 : 0.7)
            hits++
          }
        }
        if (!hits) return []
        const coverage = score / total
        if (q.length > 1 && hits < q.length && coverage < 0.5) return []
        // Prefer titles that are mostly about the query, then broader codes.
        const focus = hits / d.words.size
        return [{ d, rank: coverage * 10 + focus * 2 + (hits === q.length ? 3 : 0) - d.code.length * 0.01 }]
      })
      scored.sort((a, b) => b.rank - a.rank)
      for (const { d } of scored) {
        const list = out[d.scheme]
        if (list.length >= perScheme) continue
        list.push({ code: d.code, title: d.title, linked: links.get(`${d.scheme}:${d.code}`) })
      }
      return out
    },
  }
}
