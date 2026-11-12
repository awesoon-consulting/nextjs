import { matchCategories, type Scheme } from './category-map'
import { getJson } from './http'
import { toDate, toNum } from './parse'
import type { Ctx, Output, Rows } from './types'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Release = any

interface OcdsOptions {
  sourceId: string
  country: string
  scheme: Scheme
  firstPage: string
  noticeUrl: (r: Release) => string | null
  minGapMs: number
}

function classifications(r: Release, scheme: Scheme): string[] {
  const out = new Set<string>()
  const add = (c: any) => {
    if (c?.id && String(c.scheme ?? '').toUpperCase() === scheme) out.add(String(c.id))
  }
  add(r.tender?.classification)
  for (const i of r.tender?.items ?? []) {
    add(i.classification)
    for (const a of i.additionalClassifications ?? []) add(a)
  }
  for (const c of r.contracts ?? []) for (const i of c.items ?? []) add(i.classification)
  for (const a of r.awards ?? []) for (const i of a.items ?? []) add(i.classification)
  return [...out]
}

function buyerName(r: Release): string | null {
  if (r.buyer?.name) return r.buyer.name
  const p = (r.parties ?? []).find((x: any) => (x.roles ?? []).includes('buyer') || (x.roles ?? []).includes('procuringEntity'))
  return p?.name ?? null
}

export function normalizeRelease(r: Release, o: OcdsOptions): Partial<Rows> {
  const codes = classifications(r, o.scheme)
  const categories = matchCategories(o.scheme, codes)
  if (!categories.length) return {}
  const buyer = buyerName(r)
  const base = {
    sourceId: o.sourceId,
    country: o.country,
    buyer,
    categoryCodes: { [o.scheme]: codes },
    categories,
    url: o.noticeUrl(r),
  }
  const out: Partial<Rows> = {}
  if (buyer) out.buyers = [{ country: o.country, name: buyer, externalId: r.buyer?.id ?? null, sourceId: o.sourceId }]
  const tags: string[] = r.tag ?? []
  if (tags.some((t) => t.startsWith('tender') || t === 'planning') && r.tender) {
    out.tenders = [
      {
        ...base,
        externalId: String(r.ocid),
        title: r.tender.title ?? r.tender.description?.slice(0, 200) ?? '(untitled)',
        value: toNum(r.tender.value?.amount),
        currency: r.tender.value?.currency ?? null,
        status: r.tender.status ?? null,
        published: toDate(r.tender.tenderPeriod?.startDate ?? r.date),
        closes: toDate(r.tender.tenderPeriod?.endDate),
      },
    ]
  }
  const awardsSrc: any[] = r.contracts?.length ? r.contracts : r.awards ?? []
  if (tags.some((t) => t === 'award' || t === 'contract' || t.startsWith('contract'))) {
    out.awards = awardsSrc.map((a: any) => {
      const award = (r.awards ?? []).find((x: any) => x.id === a.awardID) ?? a
      return {
        ...base,
        externalId: `${r.ocid}:${a.id}`,
        title: a.title && a.title.length > 12 ? a.title : a.description ?? r.tender?.title ?? '(untitled)',
        value: toNum(a.value?.amount ?? award.value?.amount),
        currency: a.value?.currency ?? award.value?.currency ?? null,
        status: a.status ?? null,
        supplier: (award.suppliers ?? []).map((s: any) => s.name).join('; ') || null,
        awarded: toDate(a.dateSigned ?? award.date ?? r.date),
      }
    })
  }
  return out
}

export function merge(into: Output, add: Partial<Rows>) {
  for (const [k, v] of Object.entries(add) as [keyof Rows, any[]][]) {
    ;(into[k] as any[]) = [...((into[k] as any[]) ?? []), ...v]
  }
}

export async function pullOcds(ctx: Ctx, o: OcdsOptions): Promise<Output> {
  const out: Output = {}
  let next: string | null = o.firstPage
  let seen = 0
  for (let page = 0; next && page < ctx.maxPages; page++) {
    const pkg: any = await getJson(next, { minGapMs: o.minGapMs })
    for (const r of pkg.releases ?? []) merge(out, normalizeRelease(r, o))
    seen += (pkg.releases ?? []).length
    next = pkg.links?.next ?? null
  }
  ctx.log(`${o.sourceId}: ${seen} releases scanned, kept those in our categories`)
  return out
}
