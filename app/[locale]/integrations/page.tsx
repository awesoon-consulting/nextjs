import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { getIntegrationsIndex } from '@/src/lib/cost-platform/integrations'
import { baseUrl } from '@/src/lib/cost-platform/shared'
import { CtaBand, DataSoon, Hero, JsonLd, Prose, SourceLine, breadcrumbLd, card } from '@/src/components/cost-platform/ui'

export const revalidate = 86400

const PATH = '/integrations'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'costPlatform.integrationsIndex' })
  const idx = await getIntegrationsIndex()
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: idx?.pairs.length ? undefined : { index: false, follow: true },
    alternates: { canonical: `/${locale}${PATH}`, languages: { en: `/en${PATH}`, fr: `/fr${PATH}`, es: `/es${PATH}`, 'x-default': `/en${PATH}` } },
    openGraph: { type: 'website', title: t('metaTitle'), description: t('metaDescription'), url: `/${locale}${PATH}`, siteName: siteConfig.name, locale },
  }
}

export default async function IntegrationsIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'costPlatform' })
  const idx = await getIntegrationsIndex()
  const base = baseUrl()
  const crumbs = [
    { name: t('common.home'), href: `/${locale}` },
    { name: t('integrationsIndex.breadcrumb'), href: `/${locale}${PATH}` },
  ]
  const labels = { source: t('common.source'), licence: t('common.licence'), lastUpdated: t('common.lastUpdated'), period: t('common.period'), notYet: t('common.notYet') }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbLd(base, crumbs),
      ...(idx
        ? [
            {
              '@type': 'Dataset',
              name: t('integrationsIndex.title'),
              description: t('integrationsIndex.metaDescription'),
              url: `${base}/${locale}${PATH}`,
              isAccessibleForFree: true,
              license: 'https://creativecommons.org/publicdomain/zero/1.0/',
              creator: { '@type': 'Organization', name: 'APIs.guru', url: 'https://apis.guru/' },
              publisher: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', founder: { '@type': 'Person', name: 'Ray Rasouli' } },
            },
          ]
        : []),
    ],
  }

  return (
    <div className="bg-primary text-white">
      <JsonLd data={jsonLd} />
      <Hero crumbs={crumbs} eyebrow={t('integrationsIndex.eyebrow')} title={t('integrationsIndex.title')}>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-300">{t('integrationsIndex.intro')}</p>
        {idx && <p className="mt-4 text-sm text-neutral-400">{t('integrationsIndex.qualify', { pairs: idx.pairs.length, platforms: idx.platforms.length, specs: idx.totalSpecs })}</p>}
      </Hero>

      {!idx ? (
        <DataSoon title={t('common.soonTitle')} text={t('common.soonText')} cta={t('common.bookCall')} href={`/${locale}/contact`} />
      ) : (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {idx.pairs.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${locale}${PATH}/${p.slug}`}
                  className={`${card} flex min-h-[88px] flex-col justify-center rounded-2xl px-5 py-4 transition-[border-color,background-color,transform] duration-150 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#162033] motion-reduce:hover:translate-y-0`}
                >
                  <span className="font-heading text-lg font-semibold text-white">
                    {p.a.name} <span className="text-[#9DB6DC]">+</span> {p.b.name}
                  </span>
                  <span className="mt-1 text-sm text-neutral-400">
                    {t(`integration.categories.${p.a.category}`)} · {t(`integration.categories.${p.b.category}`)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {idx.source && <SourceLine source={idx.source} labels={labels} locale={locale} />}
        </section>
      )}

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Prose>
            <p>{t('integrationsIndex.framing1')}</p>
            <p>{t('integrationsIndex.framing2')}</p>
          </Prose>
        </div>
      </section>

      <CtaBand title={t('integration.ctaTitle')} text={t('integration.ctaText')} cta={t('common.bookCall')} href={`/${locale}/contact`} note={t('common.founderLine')} />
    </div>
  )
}
