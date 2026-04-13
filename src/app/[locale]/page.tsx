import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'
import Hero from '@/src/components/sections/Hero'
import { siteConfig } from '@/src/config/site'

const WhoWeHelp = dynamic(() => import('@/src/components/sections/WhoWeHelp'))
const DifferentiatorCards = dynamic(() => import('@/src/components/sections/DifferentiatorCards'))
const ProcessSteps = dynamic(() => import('@/src/components/sections/ProcessSteps'))
const SupportGrid = dynamic(() => import('@/src/components/sections/SupportGrid'))
const CTABlock = dynamic(() => import('@/src/components/sections/CTABlock'))

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
