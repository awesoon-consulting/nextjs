import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import FounderBand from '@/src/components/sections/FounderBand'
import ClosingBand from '@/src/components/sections/ClosingBand'
import { siteConfig } from '@/src/config/site'
import { categories, projects, tr, workCopy as c } from '@/src/data/work'
import WorkGrid from './_components/WorkGrid'
import WorkVisual from './_components/WorkVisual'
import { Assistant, MethodStrip, PrimaryCta, baseUrl } from './_components/shared'

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const title = tr(c.title, locale)
  const description = tr(c.subtitle, locale)
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/work`,
      languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/work`])),
    },
    openGraph: { title, description, type: 'website', url: `${baseUrl}/${locale}/work`, images: ['/images/og-image.png'] },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const items = projects.map((p) => ({
    id: p.id,
    categories: p.categories,
    href: `/${locale}${p.href}`,
    name: tr(p.name, locale),
    line: tr(p.line, locale),
    system: tr(p.system, locale),
    tags: p.tags,
    featured: p.id === 'website' || p.id === 'factory',
    visual: <WorkVisual visual={p.visual} locale={locale} />,
  }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: tr(c.title, locale),
    description: tr(c.subtitle, locale),
    url: `${baseUrl}/${locale}/work`,
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: siteConfig.name, url: baseUrl },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'CreativeWork', name: tr(p.name, locale), description: tr(p.line, locale), url: `${baseUrl}/${locale}${p.href}`, creator: { '@type': 'Organization', name: siteConfig.name } },
      })),
    },
  }

  const stats = [
    { v: '10', l: { en: 'games shipped', fr: 'jeux livrés', es: 'juegos publicados' } },
    { v: '3', l: { en: 'languages', fr: 'langues', es: 'idiomas' } },
    { v: '13', l: { en: 'public data sources', fr: 'sources publiques', es: 'fuentes públicas' } },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative w-full overflow-hidden bg-[#0A0A0A] pt-28 pb-16 sm:pt-36 sm:pb-20" aria-labelledby="work-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_10%,rgba(0,174,239,0.14),transparent_70%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-[#7D9CCB]">{tr(c.eyebrow, locale)}</p>
            <h1 id="work-title" className="mt-3 font-heading text-[2.4rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
              {tr(c.title, locale)}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-300">{tr(c.subtitle, locale)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta locale={locale} />
              <a href="#projects" className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-base font-semibold text-white transition-colors hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]">
                {tr(c.seeWork, locale)}
              </a>
            </div>
            <dl className="mt-10 flex gap-6 sm:gap-10 border-t border-white/10 pt-6">
              {stats.map((s) => (
                <div key={s.v + s.l.en} className="flex flex-col-reverse">
                  <dt className="whitespace-nowrap text-sm text-neutral-400">{tr(s.l, locale)}</dt>
                  <dd className="font-heading text-3xl font-bold text-white">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Assistant locale={locale} />
        </div>
      </section>

      <section id="projects" className="w-full scroll-mt-20 bg-[#0A0A0A] pb-20" aria-label={tr(c.seeWork, locale)}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <WorkGrid
            items={items}
            tabs={categories.map((t) => ({ id: t.id, label: tr(t.label, locale) }))}
            filterLabel={tr(c.filterLabel, locale)}
            systemLabel={tr(c.systemLabel, locale)}
            openLabel={tr(c.open, locale)}
            shownLabel={tr(c.shown, locale)}
          />

          <div className="mt-5 flex flex-col gap-6 rounded-2xl border border-dashed border-white/15 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-heading text-xl font-bold text-white">{tr(c.clientsTitle, locale)}</h2>
              <p className="mt-1.5 text-base text-neutral-200">{tr(c.clientsText, locale)}</p>
              <p className="mt-1 text-sm text-neutral-400">{tr(c.clientsHint, locale)}</p>
            </div>
            <PrimaryCta locale={locale} className="shrink-0" />
          </div>
        </div>
      </section>

      <MethodStrip locale={locale} />
      <FounderBand />
      <ClosingBand />
    </>
  )
}
