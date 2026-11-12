import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ComingSoon from '@/src/components/sections/ComingSoon'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale })
  return { title: t('serviceLines.design.name'), robots: { index: false } }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ComingSoon locale={locale} titleKey="serviceLines.design.name" />
}
