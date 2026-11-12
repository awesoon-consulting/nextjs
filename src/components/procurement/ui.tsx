import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Source } from '@/src/lib/procurement/data'
import { date, getCopy } from '@/src/lib/procurement/copy'
import { siteConfig } from '@/src/config/site'

export const primaryBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]'
export const ghostBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.08]'
export const card = 'min-w-0 rounded-2xl border border-white/10 bg-[#111111]'
export const textLink = 'underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#9DB6DC] hover:decoration-[#9DB6DC]'

export function SourceLine({ sources, locale }: { sources: Source[]; locale: string }) {
  const t = getCopy(locale).source
  return (
    <div className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-[13px] leading-relaxed text-neutral-400">
      {sources.map((s) => (
        <p key={s.id}>
          <span className="text-neutral-300">{t.source}:</span>{' '}
          <a href={s.url} className={textLink} rel="noopener" target="_blank">
            {s.name}
          </a>
          {' · '}
          <span className="text-neutral-300">{t.licence}:</span>{' '}
          <a href={s.licenceUrl} className={textLink} rel="noopener license" target="_blank">
            {s.licence}
          </a>
          {' · '}
          <span className="text-neutral-300">{t.updated}:</span> {date(locale, s.updated) ?? t.notRecorded}
        </p>
      ))}
    </div>
  )
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-400">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {it.href ? (
              <Link href={it.href} className="transition-colors hover:text-white">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-neutral-200">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className={`${card} p-5`}>
      <p className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">{label}</p>
      <p className="mt-2 font-heading text-2xl font-bold break-words sm:text-3xl text-white tabular-nums">{value}</p>
      {note && <p className="mt-1 text-sm text-neutral-400">{note}</p>}
    </div>
  )
}

export function Section({ id, title, children, className = '' }: { id: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section aria-labelledby={id} className={className}>
      <h2 id={id} className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function Framing({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section aria-labelledby="framing-title" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id="framing-title" className="font-heading text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="mt-4 text-base leading-relaxed text-neutral-300">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}

export function DataSoon({ locale }: { locale: string }) {
  const t = getCopy(locale).soon
  return (
    <div className={`${card} p-8`} role="status">
      <p className="flex items-center gap-2 font-heading text-xl font-semibold text-white">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#7D9CCB] motion-reduce:animate-none" aria-hidden="true" />
        {t.title}
      </p>
      <p className="mt-3 max-w-xl text-neutral-300">{t.text}</p>
      <a href={`mailto:${siteConfig.contact.email}`} className={`${ghostBtn} mt-6`}>
        {t.cta}
      </a>
    </div>
  )
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}

export function Hero({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
      <div
        className="pointer-events-none absolute top-16 right-[-10%] h-[520px] w-[820px] max-w-[160vw] opacity-[0.14]"
        style={{ background: 'radial-gradient(closest-side, #0F1D33, #7D9CCB 55%, transparent)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
