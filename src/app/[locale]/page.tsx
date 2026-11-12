import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ConversationHero from '@/src/components/sections/hero/ConversationHero'
import HeroMarquee from '@/src/components/sections/HeroMarquee'
import WhoWeHelp from '@/src/components/sections/WhoWeHelp'
import DifferentiatorCards from '@/src/components/sections/DifferentiatorCards'
import PlatformsShowcase from '@/src/components/sections/PlatformsShowcase'
import ProcessSteps from '@/src/components/sections/ProcessSteps'
import SupportGrid from '@/src/components/sections/SupportGrid'
import CTABlock from '@/src/components/sections/CTABlock'
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
      <HeroMarquee />
      <WhoWeHelp />
      <DifferentiatorCards />
      <PlatformsShowcase />
      <ProcessSteps />
      <SupportGrid variant="home" />
      <CTABlock />
    </>
  )
}
