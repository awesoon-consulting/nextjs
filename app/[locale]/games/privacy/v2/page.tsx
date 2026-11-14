import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PrivacyV2 } from '../../_components/PrivacyV2'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesPrivacy' })
  return { title: t('title'), description: t('lead'), robots: { index: false } }
}

export default async function GamesPrivacyV2Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <PrivacyV2 locale={locale} />
}
