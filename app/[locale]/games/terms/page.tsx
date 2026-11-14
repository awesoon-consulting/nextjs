import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Terms } from '../_components/Terms'
import { siteConfig } from '@/src/config/site'

const isV2 = siteConfig.games.termsVersion === 'v2'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: isV2 ? 'gamesTermsV2' : 'gamesTerms' })
  return { title: t('title'), description: t('lead'), robots: { index: false } }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return isV2 ? (
    <Terms locale={locale} ns="gamesTermsV2" previousHref="/games/terms/v1" />
  ) : (
    <Terms locale={locale} ns="gamesTerms" />
  )
}
