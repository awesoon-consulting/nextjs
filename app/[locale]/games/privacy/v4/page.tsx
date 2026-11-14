import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PrivacyV2 } from '../../_components/PrivacyV2'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesPrivacyV4' })
  return { title: t('title'), description: t('lead'), robots: { index: false } }
}

export default async function GamesPrivacyV4Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <PrivacyV2 locale={locale} ns="gamesPrivacyV4" previousHref="/games/privacy/v3" />
}
