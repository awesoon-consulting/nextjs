import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Terms } from '../../_components/Terms'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesTerms' })
  return { title: t('title'), description: t('lead'), robots: { index: false } }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <Terms locale={locale} ns="gamesTerms" />
}
