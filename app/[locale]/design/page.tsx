import type { Metadata } from 'next'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import DesignHero from '@/src/components/design/DesignHero'
import DesignServices from '@/src/components/design/DesignServices'
import TokenDemo from '@/src/components/design/TokenDemo'
import DesignProof from '@/src/components/design/DesignProof'
import DesignProcess from '@/src/components/design/DesignProcess'
import DesignKeepFaq from '@/src/components/design/DesignKeepFaq'
import RelatedSpokes from '@/src/components/hubs/RelatedSpokes'
import FounderBand from '@/src/components/sections/FounderBand'
import ClosingBand from '@/src/components/sections/ClosingBand'
import { siteConfig } from '@/src/config/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'designPage.meta' })
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/design`,
      languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/design`])),
    },
    openGraph: { title: t('title'), description: t('description'), type: 'website', url: `${baseUrl}/${locale}/design` },
  }
}

export default async function DesignPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'designPage' })
  const m = (await getMessages({ locale })) as unknown as { designPage: { faq: { items: { q: string; a: string }[] } } }
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  const services = ['brand', 'interface', 'system', 'art'] as const

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t('meta.title'),
      description: t('meta.description'),
      serviceType: services.map((s) => t(`services.items.${s}.name`)),
      url: `${baseUrl}/${locale}/design`,
      areaServed: 'North America',
      provider: { '@type': 'Organization', name: 'Awesoon Technologies Inc.', url: baseUrl, founder: { '@type': 'Person', name: 'Ray Rasouli' } },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('services.title'),
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t(`services.items.${s}.name`), description: t(`services.items.${s}.line`) },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: m.designPage.faq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]

  return (
    <div className="design-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <DesignHero />
      <DesignServices />
      <TokenDemo />
      <DesignProof locale={locale} />
      <DesignProcess />
      <DesignKeepFaq locale={locale} />
      <RelatedSpokes slugs={['interface-development', 'application-programming', 'crm-setup']} locale={locale} />
      <FounderBand />
      <ClosingBand />
    </div>
  )
}
