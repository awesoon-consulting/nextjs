import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ClosingBand from '@/src/components/sections/ClosingBand'
import Breadcrumbs from '@/src/components/hubs/Breadcrumbs'
import { HUB_IDS, HUB_SPOKES, getSpokeView, spokePath } from '@/src/data/hubs'
import { breadcrumbLd, jsonLdScript, pageMetadata } from '@/src/lib/seo'

const EXTRA = ['design', 'advertising', 'support', 'games', 'public-sector'] as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hubs.chrome.index' })
  return pageMetadata(locale, '/solutions', t('metaTitle'), t('metaDescription'))
}

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale })
  const ti = await getTranslations({ locale, namespace: 'hubs.chrome.index' })
  const tc = await getTranslations({ locale, namespace: 'hubs.chrome' })
  const tr = (k: string) => t(k as Parameters<typeof t>[0])
  const crumbs = [
    { name: tc('home'), path: '' },
    { name: tc('services'), path: '/solutions' },
  ]
  const card = 'hub-card flex h-full flex-col rounded-3xl border border-white/[0.08] bg-[#111827] p-6 hover:border-white/25'

  return (
    <div className="bg-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbLd(locale, crumbs))} />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32" aria-labelledby="services-index">
        <Breadcrumbs items={crumbs} locale={locale} />
        <h1 id="services-index" className="mt-6 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {ti('title')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{ti('intro')}</p>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {HUB_IDS.map((h) => (
            <li key={h} className={card}>
              <h2 className="font-heading text-2xl font-semibold text-white">
                <Link href={`/${locale}/${h}`} className="hover:underline">
                  {t(`hubs.hub.${h}.name` as Parameters<typeof t>[0])}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{t(`hubs.hub.${h}.answer` as Parameters<typeof t>[0]).split('. ')[0]}.</p>
              <ul className="mt-4 flex-1 space-y-1.5">
                {HUB_SPOKES[h].map((s) => (
                  <li key={s}>
                    <Link href={`/${locale}${spokePath(s)}`} className="text-sm text-neutral-200 underline-offset-4 hover:text-white hover:underline">
                      {getSpokeView(s, locale, tr)?.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/${h}`} className="mt-5 text-sm font-semibold text-white underline-offset-4 hover:underline">
                {ti('open')} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
          {EXTRA.map((h) => (
            <li key={h} className={card}>
              <h2 className="font-heading text-2xl font-semibold text-white">
                <Link href={`/${locale}/${h}`} className="hover:underline">
                  {ti(`extra.${h}.name`)}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-300">{ti(`extra.${h}.line`)}</p>
              {h === 'games' && (
                <Link href={`/${locale}/games/maintenance`} className="mt-3 text-sm text-neutral-200 underline-offset-4 hover:text-white hover:underline">
                  {t('serviceItems.gameMaintenance')}
                </Link>
              )}
              <Link href={`/${locale}/${h}`} className="mt-5 text-sm font-semibold text-white underline-offset-4 hover:underline">
                {ti('open')} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ClosingBand />
    </div>
  )
}
