import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ConversationHero from '@/src/components/sections/hero/ConversationHero'
import ServiceTabs from '@/src/components/sections/ServiceTabs'
import SampleBrief from '@/src/components/sections/SampleBrief'
import HowWeWork from '@/src/components/sections/HowWeWork'
import FounderBand from '@/src/components/sections/FounderBand'
import ClosingBand from '@/src/components/sections/ClosingBand'
import PlatformsShowcase from '@/src/components/sections/PlatformsShowcase'
import { siteConfig } from '@/src/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'assistant' })

  return {
    title: `${siteConfig.name},  ${siteConfig.tagline}`,
    description: t('subtitle'),
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <ConversationHero />
      <ServiceTabs />
      <SampleBrief />
      <PlatformsShowcase />
      <HowWeWork />
      <FounderBand />
      <ClosingBand />
    </>
  )
}
