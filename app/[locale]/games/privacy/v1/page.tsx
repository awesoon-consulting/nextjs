import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PrivacyV1 } from '../../_components/PrivacyV1'
import { siteConfig } from '@/src/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesPrivacyV1' })

  return {
    title: t('title'),
    description: t('lead'),
    robots: { index: false },
  }
}

export default async function GamesPrivacyV1Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <PrivacyV1 locale={locale} isCurrent={siteConfig.games.privacyVersion === 'v1'} />
}
