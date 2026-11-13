import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { getCostIndex } from '@/src/lib/cost-platform/cost'
import { COUNTRIES } from '@/src/lib/cost-platform/regions'
import { baseUrl, getSourceInfo } from '@/src/lib/cost-platform/shared'
import { CtaBand, DataSoon, Hero, JsonLd, Prose, breadcrumbLd, card } from '@/src/components/cost-platform/ui'

export const revalidate = 86400

const PATH = '/cost'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'costPlatform.costIndex' })
  const groups = await getCostIndex()
  const any = groups?.some((g) => g.regions.some((r) => r.indexable))
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: any ? undefined : { index: false, follow: true },
    alternates: { canonical: `/${locale}${PATH}`, languages: { en: `/en${PATH}`, fr: `/fr${PATH}`, es: `/es${PATH}`, 'x-default': `/en${PATH}` } },
    openGraph: { type: 'website', title: t('metaTitle'), description: t('metaDescription'), url: `/${locale}${PATH}`, siteName: siteConfig.name, locale },
  }
}

export default async function CostIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const groups = await getCostIndex()
  const base = baseUrl()
  const crumbs = [
    { name: t('common.home'), href: `/${locale}` },
    { name: t('costIndex.breadcrumb'), href: `/${locale}${PATH}` },
  ]
  const indexed = groups?.reduce((n, g) => n + g.regions.filter((r) => r.indexable).length, 0) ?? 0
  const sources = groups ? (await Promise.all(groups.map((g) => getSourceInfo(COUNTRIES[g.slug].sourceId)))).filter((s) => !!s) : []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbLd(base, crumbs),
      ...(groups
        ? [
            {
              '@type': 'Dataset',
              name: t('costIndex.title'),
              description: t('costIndex.metaDescription'),
              url: `${base}/${locale}${PATH}`,
              isAccessibleForFree: true,
              publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', founder: { '@type': 'Person', name: 'Ray Rasouli' } },
              creator: sources.map((s) => ({ '@type': 'Organization', name: s!.name, url: s!.url })),
              spatialCoverage: groups.map((g) => ({ '@type': 'Country', name: t(`costIndex.countries.${g.slug}`) })),
            },
          ]
        : []),
    ],
  }

  return (
    <div className="bg-primary text-white">
      <JsonLd data={jsonLd} />
      <Hero crumbs={crumbs} eyebrow={t('costIndex.eyebrow')} title={t('costIndex.title')}>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t('costIndex.intro')}</p>
        {groups && <p className="mt-4 text-sm text-neutral-400">{t('costIndex.indexedCount', { count: indexed })}</p>}
      </Hero>

      {!groups ? (
        <DataSoon title={t('common.soonTitle')} text={t('common.soonText')} cta={t('common.bookCall')} href={`/${locale}/contact`} />
      ) : (
        <section className="mx-auto max-w-7xl space-y-14 px-4 pb-16 sm:px-6 lg:px-8">
          {groups.map((g) => (
            <div key={g.slug} id={g.slug} className="scroll-mt-24">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t(`costIndex.countries.${g.slug}`)}</h2>
                <p className="text-sm text-neutral-400">{t('costIndex.regions', { count: g.regions.length })}</p>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {g.regions.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${locale}/cost/${g.slug}/${r.slug}`}
                      className={`${card} flex min-h-[76px] flex-col justify-center rounded-2xl px-5 py-4 transition-[border-color,background-color,transform] duration-150 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#162033] motion-reduce:hover:translate-y-0`}
                    >
                      <span className="font-semibold text-white">{r.name}</span>
                      <span className={`mt-1 text-sm ${r.indexable ? 'text-[#9DB6DC]' : 'text-neutral-400'}`}>{t('costIndex.occupations', { count: r.occupations })}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <p>{t('costIndex.framing1')}</p>
            <p>{t('costIndex.framing2')}</p>
          </Prose>
        </div>
      </section>

      <CtaBand title={t('cost.ctaTitle')} text={t('cost.ctaText')} cta={t('common.bookCall')} href={`/${locale}/contact`} note={t('common.founderLine')} />
    </div>
  )
}
