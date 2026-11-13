import Link from 'next/link'
import type { ReactNode } from 'react'
import type { SourceInfo } from '@/src/lib/cost-platform/shared'
import { formatDate } from '@/src/lib/cost-platform/format'

export const primaryBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]'
export const ghostBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.08]'
export const card = 'rounded-3xl border border-white/10 bg-[#111827]'
export const chip =
  'inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-neutral-200 transition-[background-color,border-color,transform] duration-150 hover:-translate-y-px hover:border-white/30 hover:bg-white/[0.08] motion-reduce:hover:translate-y-0'
export const linkCls = 'underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#9DB6DC] hover:decoration-[#9DB6DC]'

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export interface Crumb {
  name: string
  href: string
}

export function breadcrumbLd(base: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${base}${c.href}` })),
  }
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-400">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-neutral-300">
                {c.name}
              </span>
            ) : (
              <Link href={c.href} className="rounded transition-colors hover:text-white">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Hero({ crumbs, eyebrow, title, children, aside }: { crumbs: Crumb[]; eyebrow?: string; title: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20" style={{ background: 'radial-gradient(1200px 600px at 50% 0%, #0F1D33 0%, #0A0A0A 70%)' }}>
      <div className={`relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:px-8 ${aside ? 'lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-14' : ''}`}>
        <div className="min-w-0">
          <Breadcrumbs crumbs={crumbs} />
          {eyebrow && <p className="mt-6 text-sm font-semibold text-[#9DB6DC]">{eyebrow}</p>}
          <h1 className={`${eyebrow ? 'mt-3' : 'mt-6'} font-heading text-[2.25rem] leading-[1.06] font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.25rem]`}>{title}</h1>
          {children}
        </div>
        {aside}
      </div>
    </section>
  )
}

export function SourceLine({ source, period, labels, locale }: { source: SourceInfo; period?: string; locale: string; labels: { source: string; licence: string; lastUpdated: string; period: string; notYet: string } }) {
  return (
    <dl className="mt-5 grid gap-x-6 gap-y-1 text-sm text-neutral-400 sm:grid-cols-[auto_1fr]">
      <dt className="font-semibold text-neutral-300">{labels.source}</dt>
      <dd>
        <a href={source.url} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {source.attribution.replace(/^Source:\s*/, '')}
        </a>
      </dd>
      <dt className="font-semibold text-neutral-300">{labels.licence}</dt>
      <dd>{source.licence}</dd>
      {period && (
        <>
          <dt className="font-semibold text-neutral-300">{labels.period}</dt>
          <dd>{period}</dd>
        </>
      )}
      <dt className="font-semibold text-neutral-300">{labels.lastUpdated}</dt>
      <dd>{source.lastUpdated ? formatDate(source.lastUpdated, locale) : labels.notYet}</dd>
    </dl>
  )
}

export function DataSoon({ title, text, cta, href }: { title: string; text: string; cta: string; href: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className={`${card} flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9`} role="status">
        <div className="flex items-start gap-4">
          <span className="mt-2 inline-block h-2.5 w-2.5 flex-shrink-0 animate-pulse rounded-full bg-[#9DB6DC] motion-reduce:animate-none" aria-hidden="true" />
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-300">{text}</p>
          </div>
        </div>
        <Link href={href} className={`${primaryBtn} flex-shrink-0`}>
          {cta}
        </Link>
      </div>
    </section>
  )
}

export function CtaBand({ title, text, cta, href, note }: { title: string; text: string; cta: string; href: string; note: string }) {
  return (
    <section className="border-t border-white/10 bg-[#0D1420] py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-neutral-300">{text}</p>
          <p className="mt-3 text-sm text-neutral-400">{note}</p>
        </div>
        <Link href={href} className={`${primaryBtn} flex-shrink-0`}>
          {cta}
        </Link>
      </div>
    </section>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-neutral-300">{children}</div>
}
