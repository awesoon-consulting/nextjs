import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PrivacyV1 } from '../_components/PrivacyV1'
import { PrivacyV2 } from '../_components/PrivacyV2'
import { siteConfig } from '@/src/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const namespace = siteConfig.games.privacyVersion === 'v1' ? 'gamesPrivacyV1' : 'gamesPrivacy'
  const t = await getTranslations({ locale, namespace })

  return {
    title: t('title'),
    description: t('lead'),
    robots: { index: false },
  }
}

export default async function GamesPrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (siteConfig.games.privacyVersion === 'v1') {
    return <PrivacyV1 locale={locale} isCurrent />
  }
  return <PrivacyV2 locale={locale} />
}
