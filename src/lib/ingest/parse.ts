export function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let quoted = false
  const src = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text
  for (let i = 0; i < src.length; i++) {
    const c = src[i]
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') {
          field += '"'
          i++
        } else quoted = false
      } else field += c
    } else if (c === '"') quoted = true
    else if (c === ',') {
      row.push(field)
      field = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && src[i + 1] === '\n') i++
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else field += c
  }
  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }
  const [header, ...body] = rows
  return body
    .filter((r) => r.length > 1 || r[0])
    .map((r) => Object.fromEntries(header.map((h, i) => [h, r[i] ?? ''])))
}

export interface FeedItem {
  id: string
  title: string
  link: string | null
  published: Date | null
}

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .trim()

const tag = (block: string, name: string) => {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`))
  return m ? decode(m[1]) : null
}

// RSS 2.0 and Atom; enough for vendor status and changelog feeds.
export function parseFeed(xml: string): FeedItem[] {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>|<entry[\s>][\s\S]*?<\/entry>/g) ?? []
  return blocks.map((b) => {
    const atomLink = b.match(/<link[^>]*href="([^"]+)"/)
    const link = tag(b, 'link') || (atomLink ? decode(atomLink[1]) : null)
    const date = tag(b, 'pubDate') ?? tag(b, 'published') ?? tag(b, 'updated')
    const d = date ? new Date(date) : null
    return {
      id: tag(b, 'guid') ?? tag(b, 'id') ?? link ?? tag(b, 'title') ?? '',
      title: tag(b, 'title') ?? '',
      link,
      published: d && !isNaN(d.getTime()) ? d : null,
    }
  })
}

export const toDate = (v: string | null | undefined): Date | null => {
  if (!v) return null
  const d = new Date(v)
  return isNaN(d.getTime()) ? null : d
}

export const toNum = (v: unknown): string | null => {
  if (v === null || v === undefined || v === '') return null
  const n = Number(String(v).replace(/[^0-9.\-]/g, ''))
  return Number.isFinite(n) ? String(n) : null
}
