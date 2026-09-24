import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getLocalizedGames } from '@/src/data/games'
import { siteConfig } from '@/src/config/site'
import Badge from '@/src/components/ui/Badge'

interface GamesPageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: GamesPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'games' })
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: `${baseUrl}/${locale}/games`,
      languages: Object.fromEntries(
        siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/games`])
      ),
    },
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: 'website',
    },
  }
}

export default async function GamesPage({ params }: GamesPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'games' })
  const games = getLocalizedGames(locale)

  return (
    <>
      <section className="bg-neutral-50 pt-32 pb-16 dark:bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">{t('subtitle')}</p>
          <p className="text-base text-text-muted max-w-2xl mt-4">{t('intro')}</p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2">
            {games.map((game) => (
              <li key={game.slug}>
                <Link
                  href={`/${locale}/games/${game.slug}`}
                  className="group flex gap-5 rounded-xl border border-neutral-200 bg-white p-5 transition-colors hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-neutral-800 dark:bg-secondary/20"
                >
                  <Image
                    src={game.icon}
                    alt=""
                    width={72}
                    height={72}
                    className="h-18 w-18 shrink-0 rounded-2xl"
                    style={{ height: 72, width: 72 }}
                  />
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-xl text-text-primary group-hover:text-accent transition-colors">
                      {game.name}
                    </h2>
                    <p className="text-sm text-text-secondary mt-1">{game.tagline}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Badge variant="accent" size="sm">
                        {game.category}
                      </Badge>
                      <span className="text-xs text-text-muted">{game.ageRating}</span>
                      <span className="text-xs text-text-muted">{game.price}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-text-muted">
            {t('privacyNote')}{' '}
            <Link href={`/${locale}/games/privacy`} className="underline">
              {t('privacyLink')}
            </Link>{' '}
            <span aria-hidden="true">·</span>{' '}
            <Link href={`/${locale}/games/support`} className="underline">
              {t('supportLink')}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
