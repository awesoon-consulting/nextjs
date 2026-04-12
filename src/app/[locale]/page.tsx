import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Hero from '@/src/components/sections/Hero'
import WhoWeHelp from '@/src/components/sections/WhoWeHelp'
import DifferentiatorCards from '@/src/components/sections/DifferentiatorCards'
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <DifferentiatorCards />
      <ProcessSteps />
      <SupportGrid variant="home" />
      <CTABlock />
    </>
  )
}
