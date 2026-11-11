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
  const t = await getTranslations({ locale, namespace: 'gamesPrivacy' })

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
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'gamesPrivacy' })

  const sections = t.raw('sections') as LegalSection[]

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">{t('title')}</h1>
        <p className="text-sm text-text-muted mb-12">{t('updated')}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-text-secondary">
          <section aria-labelledby="games-priv-intro">
            <h2 id="games-priv-intro" className="sr-only">
              {t('title')}
            </h2>
            <p className="text-lg text-text-primary font-semibold">{t('lead')}</p>
            <p className="mt-3 text-sm text-text-muted">{t('appliesTo')}</p>
          </section>

          <LegalSections sections={sections} idPrefix="games-priv" />

          <section aria-labelledby="games-priv-contact">
            <h2
              id="games-priv-contact"
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
              <Link href={`/${locale}/games/terms`} className="underline">
                {t('termsLink')}
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
