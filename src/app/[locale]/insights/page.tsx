import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
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

export default function InsightsPage() {
  return (
    <>
      <div className="pt-16">
        <InsightGrid />
        <CTABlock />
      </div>
    </>
  )
}
