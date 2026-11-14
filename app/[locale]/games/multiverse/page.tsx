import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { getLocalizedGames } from '@/src/data/games'
import { siteConfig } from '@/src/config/site'
import Badge from '@/src/components/ui/Badge'

interface MultiversePageProps {
  params: Promise<{ locale: string }>
}

type MultiverseMessages = {
  gamesMultiverse: {
    cards: { title: string; text: string }[]
    deleteSteps: string[]
    faq: { q: string; a: string }[]
  }
}

const card =
  'rounded-3xl border border-neutral-200 bg-white p-6 dark:border-white/[0.08] dark:bg-[#111827]'
const inlineLink = 'text-accent underline underline-offset-4 dark:text-[#7D9CCB] dark:hover:text-[#FAFAFA]'

export async function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: MultiversePageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesMultiverse' })
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/games/multiverse`,
      languages: Object.fromEntries(
        siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/games/multiverse`])
      ),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
    },
  }
}

export default async function MultiversePage({ params }: MultiversePageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'gamesMultiverse' })
  const m = ((await getMessages({ locale })) as unknown as MultiverseMessages).gamesMultiverse
  const pennyLoaf = getLocalizedGames(locale).find((g) => g.slug === 'idle-bakery')

  return (
    <>
      <section className="bg-neutral-50 pt-32 pb-16 dark:bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="accent" size="sm">
            {t('eyebrow')}
          </Badge>
          <h1 className="mt-4 font-heading font-bold text-4xl sm:text-5xl text-text-primary leading-tight">
            {t('headline')}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">{t('lead')}</p>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="mv-games">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="mv-games" className="font-heading font-bold text-2xl text-text-primary">
            {t('gamesTitle')}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li>
              <Link
                href={`/${locale}/games/idle-bakery`}
                className={`${card} flex items-center gap-4 transition-colors dark:hover:border-white/[0.16] dark:hover:bg-[#151C2B]`}
              >
                {pennyLoaf && (
                  <Image src={pennyLoaf.icon} alt="" width={56} height={56} className="shrink-0 rounded-2xl" style={{ height: 56, width: 56 }} />
                )}
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">{t('pennyLoaf')}</h3>
                  <p className="text-sm text-text-secondary">{t('pennyLoafNote')}</p>
                </div>
              </Link>
            </li>
            <li className={`${card} flex items-center justify-between gap-4`}>
              <h3 className="font-heading font-bold text-lg text-text-primary">{t('towerDraft')}</h3>
              <Badge variant="default" size="sm">
                {t('comingSoon')}
              </Badge>
            </li>
          </ul>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {m.cards.map((c) => (
              <li key={c.title} className={card}>
                <h3 className="font-heading font-semibold text-lg text-text-primary">{c.title}</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-neutral-50 dark:bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-2">
          <section className={card} aria-labelledby="mv-kept">
            <h2 id="mv-kept" className="font-heading font-bold text-2xl text-text-primary">
              {t('keptTitle')}
            </h2>
            <p className="mt-3 text-text-secondary leading-relaxed">{t('keptText')}</p>
            <p className="mt-3 text-text-secondary leading-relaxed">
              {t('keptLinksIntro')}{' '}
              <Link href={`/${locale}/games/privacy`} className={inlineLink}>
                {t('privacyLink')}
              </Link>{' '}
              {t('and')}{' '}
              <Link href={`/${locale}/games/terms`} className={inlineLink}>
                {t('termsLink')}
              </Link>
              .
            </p>
          </section>

          <section className={card} aria-labelledby="mv-delete">
            <h2 id="mv-delete" className="font-heading font-bold text-2xl text-text-primary">
              {t('deleteTitle')}
            </h2>
            <p className="mt-3 text-text-secondary leading-relaxed">{t('deleteLead')}</p>
            <ol className="mt-4 space-y-2">
              {m.deleteSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-text-primary">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-heading font-semibold text-accent dark:text-[#7D9CCB]">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-text-muted leading-relaxed">{t('deleteNote')}</p>
          </section>
        </div>
      </section>

      <section className="py-16 bg-surface" aria-labelledby="mv-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="mv-faq" className="font-heading font-bold text-2xl text-text-primary">
            {t('faqTitle')}
          </h2>
          <div className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-white/[0.08] dark:border-white/[0.08]">
            {m.faq.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 font-heading text-base font-semibold text-text-primary sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-text-muted transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 text-text-secondary leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
