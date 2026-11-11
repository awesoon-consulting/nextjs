import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { LegalSections, type LegalSection } from './LegalSections'

export async function PrivacyV1({ locale, isCurrent }: { locale: string; isCurrent: boolean }) {
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'gamesPrivacyV1' })

  const sections = t.raw('sections') as LegalSection[]

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">{t('title')}</h1>
        <p className="text-sm text-text-muted mb-12">{t('updated')}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-text-secondary">
          <section aria-labelledby="games-priv-v1-intro">
            <h2 id="games-priv-v1-intro" className="sr-only">
              {t('title')}
            </h2>
            <p className="text-lg text-text-primary font-semibold">{t('lead')}</p>
            <p className="mt-3">{t('intro')}</p>
            <p className="mt-3 text-sm text-text-muted">{t('appliesTo')}</p>
            {!isCurrent && (
              <>
                <p className="mt-3 text-sm text-text-muted">{t('note')}</p>
                <p className="mt-3">
                  <Link href={`/${locale}/games/privacy`} className="underline">
                    {t('currentLink')}
                  </Link>
                </p>
              </>
            )}
          </section>

          <LegalSections sections={sections} idPrefix="games-priv-v1" />

          <section aria-labelledby="games-priv-v1-contact">
            <h2
              id="games-priv-v1-contact"
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
          </section>
        </div>
      </div>
    </div>
  )
}
