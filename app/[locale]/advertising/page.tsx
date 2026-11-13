import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import AdHero from '@/src/components/sections/advertising/AdHero'
import AdServices from '@/src/components/sections/advertising/AdServices'
import FormatsDemo from '@/src/components/sections/advertising/FormatsDemo'
import AdReporting from '@/src/components/sections/advertising/AdReporting'
import AdHow from '@/src/components/sections/advertising/AdHow'
import { AdFaq, AdKeep } from '@/src/components/sections/advertising/AdKeepFaq'
import RelatedSpokes from '@/src/components/hubs/RelatedSpokes'
import FounderBand from '@/src/components/sections/FounderBand'
import ClosingBand from '@/src/components/sections/ClosingBand'
import { siteConfig } from '@/src/config/site'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'advertisingPage.meta' })
  const url = `${baseUrl}/${locale}/advertising`
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: { ...Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/advertising`])), 'x-default': `${baseUrl}/en/advertising` },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: siteConfig.name,
      title: t('title'),
      description: t('description'),
      locale,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: t('title') }],
    },
    twitter: { card: 'summary_large_image', title: t('title'), description: t('description'), images: ['/images/og-image.png'] },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'advertisingPage' })
  const tabs = ['campaigns', 'production', 'banner', 'playbooks'] as const
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('meta.title'),
    description: t('meta.description'),
    serviceType: t('hero.eyebrow'),
    url: `${baseUrl}/${locale}/advertising`,
    inLanguage: locale,
    areaServed: ['CA', 'US'],
    provider: { '@type': 'Organization', name: siteConfig.name, url: baseUrl, founder: { '@type': 'Person', name: 'Ray Rasouli' } },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('services.title'),
      itemListElement: tabs.map((k) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: t(`services.tabs.${k}.name`), description: t(`services.tabs.${k}.line`) },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <AdHero />
      <AdServices />
      <FormatsDemo />
      <AdReporting />
      <AdHow />
      <AdKeep />
      <AdFaq />
      <RelatedSpokes slugs={['crm-setup', 'system-integration', 'interface-development']} locale={locale} />
      <FounderBand />
      <ClosingBand title={t('closing.title')} text={t('closing.text')} />
    </>
  )
}
