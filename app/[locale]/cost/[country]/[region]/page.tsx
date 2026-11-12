import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { getAllRegionPaths, getRegionPage } from '@/src/lib/cost-platform/cost'
import { COUNTRIES, type CountrySlug } from '@/src/lib/cost-platform/regions'
import { baseUrl } from '@/src/lib/cost-platform/shared'
import CostExplorer from '@/src/components/cost-platform/CostExplorer'
import { CtaBand, DataSoon, Hero, JsonLd, Prose, SourceLine, breadcrumbLd, card, chip, ghostBtn, primaryBtn } from '@/src/components/cost-platform/ui'

export const revalidate = 86400

type Params = { locale: string; country: string; region: string }

export async function generateStaticParams() {
  const paths = await getAllRegionPaths()
  return siteConfig.locales.flatMap((locale) => paths.map((p) => ({ locale, country: p.country, region: p.region })))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, country, region } = await params
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const res = await getRegionPage(country, region)
  const path = `/cost/${country}/${region}`
  const alternates = { canonical: `/${locale}${path}`, languages: { en: `/en${path}`, fr: `/fr${path}`, es: `/es${path}`, 'x-default': `/en${path}` } }
  if (res.state !== 'ok') return { title: t('common.soonTitle'), robots: { index: false, follow: true }, alternates }
  const p = res.page
  const title = t('cost.metaTitle', { region: p.name })
  const description = t('cost.metaDescription', { region: p.name, source: p.source?.name ?? COUNTRIES[p.country].sourceId })
  return {
    title,
    description,
    alternates,
    robots: p.indexable ? undefined : { index: false, follow: true },
    openGraph: { type: 'article', title, description, url: `/${locale}${path}`, siteName: siteConfig.name, locale },
  }
}

export default async function CostRegionPage({ params }: { params: Promise<Params> }) {
  const { locale, country, region } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const res = await getRegionPage(country, region)
  if (res.state === 'missing') notFound()

  const countryName = country in COUNTRIES ? t(`costIndex.countries.${country as CountrySlug}`) : country
  const base = baseUrl()
  const contact = `/${locale}/contact`

  if (res.state === 'soon') {
    const crumbs = [
      { name: t('common.home'), href: `/${locale}` },
      { name: t('costIndex.breadcrumb'), href: `/${locale}/cost` },
      { name: countryName, href: `/${locale}/cost#${country}` },
    ]
    return (
      <div className="bg-primary text-white">
        <Hero crumbs={crumbs} title={t('costIndex.title')}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t('costIndex.intro')}</p>
        </Hero>
        <DataSoon title={t('common.soonTitle')} text={t('common.soonText')} cta={t('common.bookCall')} href={contact} />
      </div>
    )
  }

  const p = res.page
  const path = `/${locale}/cost/${country}/${region}`
  const crumbs = [
    { name: t('common.home'), href: `/${locale}` },
    { name: t('costIndex.breadcrumb'), href: `/${locale}/cost` },
    { name: countryName, href: `/${locale}/cost#${country}` },
    { name: p.name, href: path },
  ]
  const period = p.rows[0]?.period
  const labels = { source: t('common.source'), licence: t('common.licence'), lastUpdated: t('common.lastUpdated'), period: t('common.period'), notYet: t('common.notYet') }
  const title = p.comingSoon ? t('cost.comingTitle', { region: p.name }) : t('cost.title', { region: p.name })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbLd(base, crumbs),
      ...(p.source && p.rows.length
        ? [
            {
              '@type': 'Dataset',
              name: t('cost.tableTitle', { region: p.name }),
              description: t('cost.metaDescription', { region: p.name, source: p.source.name }),
              url: `${base}${path}`,
              license: p.source.url,
              isAccessibleForFree: true,
              creator: { '@type': 'Organization', name: p.source.name, url: p.source.url },
              publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', founder: { '@type': 'Person', name: 'Ray Rasouli' } },
              spatialCoverage: { '@type': 'Place', name: `${p.name}, ${countryName}` },
              temporalCoverage: period,
              variableMeasured: p.rows.map((r) => r.name),
              ...(p.source.lastUpdated ? { dateModified: p.source.lastUpdated } : {}),
            },
          ]
        : []),
    ],
  }

  return (
    <div className="bg-primary text-white">
      <JsonLd data={jsonLd} />
      <Hero crumbs={crumbs} title={title}>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{p.comingSoon ? t('cost.comingText', { region: p.name }) : t('cost.intro', { region: p.name })}</p>
        {!p.indexable && !p.comingSoon && <p className="mt-4 max-w-2xl text-sm text-neutral-400">{t('cost.thinNote')}</p>}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={contact} className={primaryBtn}>
            {t('common.bookCall')}
          </Link>
          <a href="#method" className={ghostBtn}>
            {t('cost.method.title')}
          </a>
        </div>
      </Hero>

      <CostExplorer locale={locale} region={p.name} countryPath={`/${locale}/cost/${country}`} currency={COUNTRIES[p.country].currency} rows={p.rows} neighbours={p.neighbours} />

      <section id="method" className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">{t('cost.method.title')}</h2>
            <div className="mt-5">
              <Prose>
                <p>{t('cost.framing')}</p>
              </Prose>
            </div>
            {p.source && <SourceLine source={p.source} period={period} labels={labels} locale={locale} />}
          </div>
          <dl className={`${card} grid gap-5 p-6 sm:p-8`}>
            {(['formula', 'wage', 'oncost', 'leavesOut'] as const).map((k) => (
              <div key={k}>
                <dt className="font-heading text-base font-semibold text-white">{t(`cost.method.${k}Title`)}</dt>
                <dd className="mt-1 leading-relaxed text-neutral-300">{t(`cost.method.${k}`, { region: p.name })}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pb-16" aria-labelledby="more-regions">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="more-regions" className="font-heading text-xl font-semibold text-white">
            {t('cost.otherRegions')}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={`/${locale}/cost#${country}`} className={chip}>
              {countryName}
            </Link>
            <Link href={`/${locale}/cost`} className={chip}>
              {t('costIndex.breadcrumb')}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title={t('cost.ctaTitle')} text={t('cost.ctaText')} cta={t('common.bookCall')} href={contact} note={t('common.founderLine')} />
    </div>
  )
}
