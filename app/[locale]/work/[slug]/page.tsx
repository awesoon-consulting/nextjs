import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import ClosingBand from '@/src/components/sections/ClosingBand'
import FounderBand from '@/src/components/sections/FounderBand'
import { siteConfig } from '@/src/config/site'
import { getLocalizedGames } from '@/src/data/games'
import { getAllCaseStudies, getCaseStudy, projects, tr, workCopy as c } from '@/src/data/work'
import FlowDiagram from '../_components/FlowDiagram'
import { Assistant, MethodStrip, PrimaryCta, baseUrl } from '../_components/shared'

type Params = Promise<{ locale: string; slug: string }>

export function generateStaticParams() {
  return siteConfig.locales.flatMap((locale) => getAllCaseStudies().map((cs) => ({ locale, slug: cs.slug })))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  const title = tr(cs.name, locale)
  const description = tr(cs.summary, locale)
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/work/${slug}`,
      languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/work/${slug}`])),
    },
    openGraph: { title, description, type: 'article', url: `${baseUrl}/${locale}/work/${slug}`, images: ['/images/og-image.png'] },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  const name = tr(cs.name, locale)
  const games = cs.slug === 'games-factory' ? getLocalizedGames(locale) : []
  const more = projects.filter((p) => !p.href.startsWith(`/work/${cs.slug}`)).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    headline: name,
    description: tr(cs.summary, locale),
    url: `${baseUrl}/${locale}/work/${cs.slug}`,
    inLanguage: locale,
    keywords: cs.stack.join(', '),
    creator: { '@type': 'Organization', name: siteConfig.name, url: baseUrl, founder: { '@type': 'Person', name: 'Ray Rasouli' } },
    ...(games.length ? { hasPart: games.map((g) => ({ '@type': 'VideoGame', name: g.name, url: `${baseUrl}/${locale}/games/${g.slug}` })) } : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative w-full overflow-hidden bg-[#0A0A0A] pt-28 pb-14 sm:pt-36" aria-labelledby="cs-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_10%,rgba(0,174,239,0.14),transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb">
            <Link href={`/${locale}/work`} className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#7D9CCB] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M13 8H3M7 4 3 8l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tr(c.backToWork, locale)}
            </Link>
          </nav>
          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-semibold text-neutral-400">{tr(cs.kind === 'own' ? c.ownWork : c.clientWork, locale)}</p>
              <h1 id="cs-title" className="mt-2 font-heading text-[2.4rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                {name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">{tr(cs.summary, locale)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryCta locale={locale} />
                {cs.links.map((l) => (
                  <Link key={l.href} href={`/${locale}${l.href === '/' ? '' : l.href}`} className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white transition-colors hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]">
                    {tr(l.label, locale)}
                  </Link>
                ))}
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-3">
              {cs.facts.map((f) => (
                <div key={f.label.en} className="flex flex-col-reverse rounded-2xl border border-white/[0.08] bg-[#111827] p-4 sm:p-5">
                  <dt className="mt-1 text-sm leading-snug text-neutral-300">{tr(f.label, locale)}</dt>
                  <dd className="font-heading text-4xl font-bold text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0A0A0A] pt-2 pb-16" aria-labelledby="cs-problem">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] p-6 sm:p-8">
            <h2 id="cs-problem" className="text-sm font-semibold text-neutral-400">{tr(c.problemTitle, locale)}</h2>
            <p className="mt-3 text-lg leading-relaxed text-neutral-100">{tr(cs.problem, locale)}</p>
          </div>
          <div className="rounded-2xl border border-[#00AEEF]/30 bg-[#0F1D33]/50 p-6 sm:p-8">
            <h2 className="text-sm font-semibold text-[#7FD6F7]">{tr(c.systemTitle, locale)}</h2>
            <p className="mt-3 text-lg leading-relaxed text-white">{tr(cs.system, locale)}</p>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
          <FlowDiagram title={tr(cs.flowTitle, locale)} steps={cs.flow.map((f) => ({ label: tr(f.label, locale), note: tr(f.note, locale) }))} />
        </div>
      </section>

      {games.length > 0 && (
        <section className="w-full bg-[#0A0A0A] pb-16" aria-labelledby="cs-games">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 id="cs-games" className="font-heading text-3xl font-bold tracking-tight text-white">{tr(c.gamesTitle, locale)}</h2>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {games.map((g) => (
                <li key={g.slug}>
                  <Link href={`/${locale}/games/${g.slug}`} className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827] transition-colors hover:border-white/[0.2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
                    <div className="aspect-[4/5] overflow-hidden">
                      <Image src={g.screenshots[0].src} alt={g.screenshots[0].alt} width={880} height={1912} sizes="(min-width: 1024px) 220px, 45vw" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" />
                    </div>
                    <div className="flex items-center gap-3 p-3">
                      <Image src={g.icon} alt="" width={36} height={36} className="h-9 w-9 rounded-[10px]" />
                      <div className="min-w-0">
                        <p className="truncate font-heading text-sm font-semibold text-white">{g.name}</p>
                        <p className="truncate text-xs text-neutral-400">{g.category}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="w-full bg-[#0A0A0A] pb-20" aria-labelledby="cs-what">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 id="cs-what" className="font-heading text-3xl font-bold tracking-tight text-white">{tr(c.whatTitle, locale)}</h2>
            <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {cs.sections.map((sec) => (
                <article key={sec.id} id={sec.id} className="scroll-mt-24 py-8">
                  <h3 className="font-heading text-xl font-semibold text-white">{tr(sec.title, locale)}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-300">{tr(sec.body, locale)}</p>
                  {sec.points && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {sec.points.map((p) => (
                        <li key={p.en} className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm leading-snug text-neutral-200">
                          {tr(p, locale)}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
              <h2 className="text-sm font-semibold text-neutral-400">{tr(c.stackTitle, locale)}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cs.stack.map((t) => (
                  <li key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-100">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Assistant locale={locale} />
          </aside>
        </div>
      </section>

      <section className="w-full bg-[#0A0A0A] pb-20" aria-labelledby="cs-more">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="cs-more" className="font-heading text-2xl font-bold text-white">{tr(c.moreTitle, locale)}</h2>
          <ul className={`mt-6 grid gap-4 ${more.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {more.map((p) => (
              <li key={p.id}>
                <Link href={`/${locale}${p.href}`} className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#111827] p-5 transition-colors hover:border-white/[0.2] hover:bg-[#151C2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
                  <span className="font-heading text-lg font-semibold text-white">{tr(p.name, locale)}</span>
                  <span className="mt-1.5 text-sm leading-relaxed text-neutral-300">{tr(p.line, locale)}</span>
                  <span className="mt-4 text-sm font-semibold text-[#7D9CCB] transition-colors group-hover:text-white">{tr(c.open, locale)} <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MethodStrip locale={locale} />
      <FounderBand />
      <ClosingBand />
    </>
  )
}
