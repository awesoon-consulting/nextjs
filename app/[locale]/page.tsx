import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Hero from '@/src/components/sections/Hero'
import HeroMarquee from '@/src/components/sections/HeroMarquee'
import WhoWeHelp from '@/src/components/sections/WhoWeHelp'
import LazyMount from '@/src/components/ui/LazyMount'
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
      {/*
        Below-fold sections are wrapped in LazyMount so their DOM is only
        built when the user scrolls near them. This keeps the initial HTML
        and RSC payload small, dramatically reducing iPhone Safari's scroll
        stall. SEO is preserved because the components still SSR on the
        first render into the placeholder; crawlers get the full tree on
        their initial mount.
      */}
      <LazyMount minHeight={600}>
        <DifferentiatorCards />
      </LazyMount>
      <LazyMount minHeight={800}>
        <PlatformsShowcase />
      </LazyMount>
      <LazyMount minHeight={600}>
        <ProcessSteps />
      </LazyMount>
      <LazyMount minHeight={600}>
        <SupportGrid variant="home" />
      </LazyMount>
      <LazyMount minHeight={500}>
        <CTABlock />
      </LazyMount>
    </>
  )
}
