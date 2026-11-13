import Link from 'next/link'
import { card, primaryBtn } from './ui'

export function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="rounded underline underline-offset-4 transition-colors hover:text-white">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {c.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm text-neutral-300">
      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" aria-hidden="true" />
      {children}
    </span>
  )
}

export function Hero({ crumbs, pill, title, lede, actions, meta, aside }: {
  crumbs: React.ReactNode
  pill: React.ReactNode
  title: string
  lede: string
  actions: React.ReactNode
  meta?: React.ReactNode
  aside: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-28 pb-16 sm:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(37,64,110,0.45),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_440px] lg:px-8">
        <div className="ps-rise">
          {crumbs}
          <Pill>{pill}</Pill>
          <h1 className="mt-5 font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">{lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          {meta && <p className="mt-6 text-sm text-neutral-400">{meta}</p>}
        </div>
        <div className="lg:pt-10">{aside}</div>
      </div>
    </section>
  )
}

export function SideCta({ title, body, cta, note, href, toc, tocLabel }: {
  title: string
  body: string
  cta: string
  note: string
  href: string
  toc: { id: string; label: string }[]
  tocLabel: string
}) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-4">
        <div className="rounded-3xl bg-gradient-to-b from-[#15284A] to-[#0F1D33] p-6">
          <p className="font-heading text-xl font-bold text-white">{title}</p>
          <p className="mt-3 text-base leading-relaxed text-neutral-200">{body}</p>
          <Link href={href} className={`${primaryBtn} mt-5 min-h-11 w-full px-4 text-sm`}>
            {cta}
          </Link>
          <p className="mt-3 text-center text-xs text-neutral-300">{note}</p>
        </div>
        <nav aria-label={tocLabel} className={`${card} bg-transparent p-5`}>
          <p className="text-sm font-semibold text-white">{tocLabel}</p>
          <ul className="mt-3 space-y-1">
            {toc.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="block rounded-lg px-2 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-white">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export function Closing({ title, body, cta, note, href }: { title: string; body: string; cta: string; note: string; href: string }) {
  return (
    <section className="bg-[#0A0A0A] px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] bg-gradient-to-br from-[#15284A] via-[#0F1D33] to-[#0B1526] p-8 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl leading-tight font-bold tracking-tight text-balance text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-neutral-200">{body}</p>
        </div>
        <div className="flex flex-col items-start gap-2 lg:items-center">
          <Link href={href} className={primaryBtn}>
            {cta}
          </Link>
          <p className="text-sm text-neutral-300">{note}</p>
        </div>
      </div>
    </section>
  )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <details key={i} className="group rounded-2xl border border-white/[0.08] bg-[#111827] transition-colors hover:border-white/20 open:border-white/20">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden="true" className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-neutral-300 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="px-5 pb-5 text-base leading-relaxed text-neutral-300">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
