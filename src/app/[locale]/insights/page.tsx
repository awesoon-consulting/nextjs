import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import InsightGrid from '@/src/components/sections/InsightGrid'
import CTABlock from '@/src/components/sections/CTABlock'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'insights' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <div className="pt-16">
        <InsightGrid />
        <CTABlock />
      </div>
    </>
  )
}
