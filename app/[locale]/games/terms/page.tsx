import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { LegalSections, type LegalSection } from '../_components/LegalSections'
import { siteConfig } from '@/src/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesTerms' })

  return {
    title: t('title'),
    description: t('lead'),
    robots: { index: false },
  }
}

export default async function GamesTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'gamesTerms' })

  const short = t.raw('short') as string[]
  const sections = t.raw('sections') as LegalSection[]

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">{t('title')}</h1>
        <p className="text-sm text-text-muted mb-12">{t('updated')}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-text-secondary">
          <section aria-labelledby="games-terms-intro">
            <h2 id="games-terms-intro" className="sr-only">
              {t('title')}
            </h2>
            <p className="text-lg text-text-primary font-semibold">{t('lead')}</p>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              {short.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-text-muted">{t('precedence')}</p>
            <p className="mt-3 text-sm text-text-muted">{t('appliesTo')}</p>
          </section>

          <LegalSections sections={sections} idPrefix="games-terms" />

          <section aria-labelledby="games-terms-contact">
            <h2
              id="games-terms-contact"
              className="font-heading font-bold text-2xl text-text-primary mb-4"
            >
              {t('contactH')}
            </h2>
            <p>
              {t('contactB')}{' '}
              <a href={`mailto:${siteConfig.contact.gamesEmail}`} className="underline">
                {siteConfig.contact.gamesEmail}
              </a>
            </p>
            <p className="mt-3">
              <Link href={`/${locale}/games/privacy`} className="underline">
                {t('privacyLink')}
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
