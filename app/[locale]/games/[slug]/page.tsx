import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getAllGameSlugs, getLocalizedGameBySlug } from '@/src/data/games'
import { siteConfig } from '@/src/config/site'
import Badge from '@/src/components/ui/Badge'
import PhoneFrame from '@/src/components/ui/PhoneFrame'

interface GamePageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllGameSlugs()
  return siteConfig.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const game = getLocalizedGameBySlug(slug, locale)
  if (!game) return {}

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

  return {
    title: `${game.name}, ${game.tagline}`,
    description: game.seoSummary,
    keywords: game.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/games/${slug}`,
      languages: Object.fromEntries(
        siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/games/${slug}`])
      ),
    },
    openGraph: {
      title: `${game.name}, ${game.tagline}`,
      description: game.seoSummary,
      type: 'website',
      images: [{ url: game.screenshots[0]?.src ?? game.icon }],
    },
  }
}

export default async function GamePage({ params }: GamePageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const game = getLocalizedGameBySlug(slug, locale)
  if (!game) notFound()

  const t = await getTranslations({ locale, namespace: 'games' })
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

  const details = [
    { label: t('category'), value: game.category },
    { label: t('ageRating'), value: t('ageRatingValue') },
    { label: t('session'), value: game.sessionLength },
    { label: t('players'), value: game.players },
    { label: t('price'), value: game.price },
    { label: t('platforms'), value: t('platformsValue') },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: game.name,
    description: game.seoSummary,
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS, Android',
    contentRating: game.ageRating,
    url: `${baseUrl}/${locale}/games/${slug}`,
    image: `${baseUrl}${game.icon}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: baseUrl },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: game.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, faqSchema]) }}
      />

      <section className="bg-neutral-50 pt-32 pb-16 dark:bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/games`}
            className="text-sm text-text-muted hover:text-text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            {t('backToGames')}
          </Link>

          <div className="mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src={game.icon}
                  alt=""
                  width={80}
                  height={80}
                  priority
                  className="rounded-2xl"
                  style={{ height: 80, width: 80 }}
                />
                <div>
                  <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary leading-tight">
                    {game.name}
                  </h1>
                  <p className="text-lg text-text-secondary mt-1">{game.tagline}</p>
                </div>
              </div>

              <p className="text-base text-text-secondary mt-6 max-w-xl">{game.heroBlurb}</p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Badge variant="accent" size="sm">
                  {game.category}
                </Badge>
                <Badge variant="outline" size="sm">
                  {game.ageRating}
                </Badge>
                <Badge variant="outline" size="sm">
                  {game.price}
                </Badge>
              </div>

              <p className="mt-6 text-sm text-text-muted">{t('comingSoon')}</p>
            </div>

            <PhoneFrame
              src={game.screenshots[0].src}
              alt={game.screenshots[0].alt}
              accent={game.accent}
              priority
              className="w-52 justify-self-center md:w-60"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-8">
            {t('howToPlay')}
          </h2>
          <ol className="grid gap-6 sm:grid-cols-3">
            {game.howToPlay.map((step, index) => (
              <li key={step.title} className="border-t-2 pt-4" style={{ borderColor: game.accent }}>
                <span className="font-mono text-sm text-text-muted">{index + 1}</span>
                <h3 className="font-heading font-bold text-lg text-text-primary mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-text-primary mb-8">
            {t('screenshots')}
          </h2>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {game.screenshots.map((shot) => (
              <li key={shot.src}>
                <PhoneFrame src={shot.src} alt={shot.alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
              {t('features')}
            </h2>
            <ul className="space-y-3">
              {game.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-text-secondary">
                  <span aria-hidden="true" style={{ color: game.accent }}>
                    &#9679;
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
              {t('whoFor')}
            </h2>
            <ul className="space-y-3">
              {game.whoFor.map((line) => (
                <li key={line} className="flex gap-3 text-text-secondary">
                  <span aria-hidden="true" style={{ color: game.accent }}>
                    &#9679;
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
              {t('details')}
            </h2>
            <dl className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {details.map((row) => (
                <div key={row.label} className="flex justify-between gap-4 py-3">
                  <dt className="text-text-muted text-sm">{row.label}</dt>
                  <dd className="text-text-primary text-sm text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-text-muted">
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

          <div>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">{t('faq')}</h2>
            <dl className="space-y-6">
              {game.faq.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-text-primary">{item.q}</dt>
                  <dd className="text-text-secondary mt-1">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
