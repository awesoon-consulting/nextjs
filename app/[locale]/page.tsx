import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from '@/src/components/sections/Hero'
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
  const t = await getTranslations({ locale, namespace: 'hero' })

  return {
    title: `${siteConfig.name},  ${siteConfig.tagline}`,
    description: t('subtext'),
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
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
