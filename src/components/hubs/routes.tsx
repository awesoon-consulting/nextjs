import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { HUB_SPOKES, getSpokeView, spokePath, type HubId } from '@/src/data/hubs'
import { pageMetadata } from '@/src/lib/seo'
import HubPage from './HubPage'
import SpokePage from './SpokePage'

type LocaleParams = { params: Promise<{ locale: string }> }
type SpokeParams = { params: Promise<{ locale: string; spoke: string }> }

export function hubRoute(hub: HubId) {
  return {
    async generateMetadata({ params }: LocaleParams): Promise<Metadata> {
      const { locale } = await params
      const t = await getTranslations({ locale, namespace: `hubs.hub.${hub}` })
      return pageMetadata(locale, `/${hub}`, t('metaTitle'), t('metaDescription'))
    },
    async Page({ params }: LocaleParams) {
      const { locale } = await params
      setRequestLocale(locale)
      return <HubPage hub={hub} locale={locale} />
    },
  }
}

async function view(slug: string, locale: string) {
  const t = await getTranslations({ locale })
  return getSpokeView(slug, locale, (k) => t(k as Parameters<typeof t>[0]))
}

export async function spokeMetadata(slug: string, locale: string): Promise<Metadata> {
  const v = await view(slug, locale)
  if (!v) return {}
  return pageMetadata(locale, spokePath(slug), v.title, v.seo)
}

export async function renderSpoke(slug: string, locale: string) {
  setRequestLocale(locale)
  const v = await view(slug, locale)
  if (!v) notFound()
  return <SpokePage view={v} locale={locale} />
}

export function spokeRoute(hub: HubId) {
  return {
    generateStaticParams() {
      return siteConfig.locales.flatMap((locale) => HUB_SPOKES[hub].map((spoke) => ({ locale, spoke })))
    },
    async generateMetadata({ params }: SpokeParams): Promise<Metadata> {
      const { locale, spoke } = await params
      if (!HUB_SPOKES[hub].includes(spoke)) return {}
      return spokeMetadata(spoke, locale)
    },
    async Page({ params }: SpokeParams) {
      const { locale, spoke } = await params
      if (!HUB_SPOKES[hub].includes(spoke)) notFound()
      return renderSpoke(spoke, locale)
    },
  }
}
