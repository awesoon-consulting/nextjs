import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Unbounded, Manrope } from 'next/font/google'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { towerDraftPlayPath, towerDraftShots, towerDraftStores } from '@/src/data/tower-draft'
import TeaserVideo from '@/src/components/games/tower-draft/TeaserVideo'
import PlayInBrowser from '@/src/components/games/tower-draft/PlayInBrowser'
import './tower-draft.css'

const head = Unbounded({ subsets: ['latin'], weight: ['700'], variable: '--font-td-head', display: 'swap', preload: false })
const body = Manrope({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-td-body', display: 'swap', preload: false })

interface PageProps {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'towerDraft' })
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: `${baseUrl}/${locale}/games/tower-draft`,
      languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/games/tower-draft`])),
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      type: 'website',
      images: [{ url: '/images/games/tower-draft/01-town.webp', width: 540, height: 960 }],
    },
  }
}

function StoreLink({ name, href, badgeLabel, coming }: { name: string; href: string | null; badgeLabel: string; coming: string }) {
  const inner = (
    <>
      <span className="td-head text-base text-white">{name}</span>
      <span className="td-mono text-[0.7rem] text-[#FFC14D]">{href ? null : coming}</span>
    </>
  )
  if (href) {
    return (
      <a href={href} aria-label={badgeLabel} className="td-store flex-col !items-start !gap-0.5 hover:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC14D]">
        {inner}
      </a>
    )
  }
  return <p className="td-store flex-col !items-start !gap-0.5">{inner}</p>
}

export default async function TowerDraftPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'towerDraft' })
  const facts = t.raw('facts') as string[]
  const steps = t.raw('steps') as { title: string; body: string }[]
  const shotAlts = t.raw('shots') as string[]
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Tower Draft',
    description: t('metaDescription'),
    gamePlatform: ['iOS', 'Android', 'Web browser'],
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS, Android',
    url: `${baseUrl}/${locale}/games/tower-draft`,
    image: `${baseUrl}/images/games/tower-draft/icon.webp`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: baseUrl },
  }

  const stores = (
    <div className="flex flex-wrap gap-3">
      <StoreLink name={t('appStore')} href={towerDraftStores.appStore} badgeLabel={t('appStoreBadge')} coming={t('coming')} />
      <StoreLink name={t('googlePlay')} href={towerDraftStores.googlePlay} badgeLabel={t('googlePlayBadge')} coming={t('coming')} />
    </div>
  )

  return (
    <div className={`td-page ${head.variable} ${body.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="td-sheet relative overflow-hidden pb-16 sm:pb-24">
        <div className="td-hero-art" aria-hidden="true">
          <Image src="/images/games/tower-draft/hero-town.webp" alt="" fill priority sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-[62vw] sm:px-6 sm:pt-[48vw] md:grid-cols-[1.1fr_1fr] md:items-center md:pt-36 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/games/tower-draft/icon.webp" alt="" width={56} height={56} priority className="rounded-[14px] ring-1 ring-white/30" />
              <p className="td-mono hidden text-xs text-[#EAF2FF] sm:block">{t('eyebrow')}</p>
            </div>
            <h1 className="td-head mt-5 text-[2.75rem] leading-[1.02] text-white sm:text-7xl">Tower Draft</h1>
            <div className="td-dim mt-4 w-full max-w-md" aria-hidden="true" />
            <p className="td-head mt-5 text-xl text-[#FFC14D] sm:text-2xl">{t('tagline')}</p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#EAF2FF]">{t('lead')}</p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <a href={towerDraftPlayPath} className="td-gold td-head rounded-full px-8 py-4 text-base">
                {t('play')}
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M10 5l4 4-4 4" />
                </svg>
              </a>
              <p className="text-sm text-[#EAF2FF]">{t('playNote')}</p>
            </div>

            <p className="mt-8 flex items-center gap-2 text-base font-bold text-white">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#FFC14D" strokeWidth="2" strokeLinecap="round">
                <rect x="2.5" y="3.5" width="13" height="12" rx="2.5" />
                <path d="M2.5 7.5h13M6 2v3M12 2v3" />
              </svg>
              {t('storesLine')}
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {facts.map((fact) => (
                <li key={fact} className="flex items-center gap-2 text-sm text-[#EAF2FF]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-[#FFC14D]" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <TeaserVideo label={t('videoLabel')} pauseLabel={t('pause')} playLabel={t('resume')} />
        </div>
      </section>

      <section className="td-deep py-16 sm:py-24" aria-labelledby="td-steps">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="td-steps" className="td-head text-3xl text-white sm:text-4xl">{t('stepsTitle')}</h2>
        </div>
        <ol className="td-shots mx-auto mt-10 flex max-w-6xl gap-5 overflow-x-auto px-4 pb-4 sm:px-6 md:grid md:grid-cols-4 md:overflow-visible lg:px-8">
          {towerDraftShots.map((src, i) => (
            <li key={src} className="w-[66vw] shrink-0 sm:w-[40vw] md:w-auto">
              <Image
                src={src}
                alt={shotAlts[i]}
                width={540}
                height={960}
                sizes="(min-width: 768px) 25vw, 66vw"
                className="h-auto w-full rounded-[1.4rem] ring-1 ring-white/25 shadow-[0_20px_40px_rgba(3,20,48,0.45)]"
              />
              <span className="td-mono mt-5 block text-xs text-[#FFC14D]">{String(i + 1).padStart(2, '0')}</span>
              <div className="td-dim mt-2" aria-hidden="true" />
              <h3 className="td-head mt-4 text-xl text-white">{steps[i].title}</h3>
              <p className="mt-2 leading-relaxed text-[#EAF2FF]">{steps[i].body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="td-sheet py-16 sm:py-24" aria-labelledby="td-try">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <div>
            <h2 id="td-try" className="td-head text-3xl text-white sm:text-4xl">{t('tryTitle')}</h2>
            <div className="td-dim mt-4 max-w-sm" aria-hidden="true" />
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#EAF2FF]">{t('tryBody')}</p>
          </div>
          <PlayInBrowser
            src={towerDraftPlayPath}
            frameTitle={t('frameTitle')}
            startLabel={t('tryButton')}
            fullLabel={t('tryFull')}
            posterAlt={t('shots.2')}
          />
        </div>
      </section>

      <section className="td-deep py-16 sm:py-24" aria-labelledby="td-get">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="td-get" className="td-head text-3xl text-white sm:text-4xl">{t('getTitle')}</h2>
          <p className="mt-4 text-lg text-[#EAF2FF]">{t('getBody')}</p>
          <div className="mt-8">{stores}</div>
          <nav aria-label="Tower Draft" className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#EAF2FF]">
            <Link href={`/${locale}/games/tower-draft/privacy`} className="td-link">{t('privacy')}</Link>
            <Link href={`/${locale}/games/tower-draft/terms`} className="td-link">{t('terms')}</Link>
            <Link href={`/${locale}/games/tower-draft/support`} className="td-link">{t('support')}</Link>
          </nav>
          <p className="mt-6 text-sm text-[#BFD4EE]">{t('publisher')}</p>
        </div>
      </section>
    </div>
  )
}
