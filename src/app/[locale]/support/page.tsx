import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import SupportGrid from '@/src/components/sections/SupportGrid'
import CTABlock from '@/src/components/sections/CTABlock'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'support' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="pt-16">
      <SupportGrid />
      <CTABlock />
    </div>
  )
}
