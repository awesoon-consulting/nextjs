import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
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

  const sections = [
    { id: 'collect', heading: t('collectH'), body: t('collectB') },
    { id: 'ads', heading: t('adsH'), body: t('adsB') },
    { id: 'delete', heading: t('deleteH'), body: t('deleteB') },
    { id: 'children', heading: t('childrenH'), body: t('childrenB') },
    { id: 'changes', heading: t('changesH'), body: t('changesB') },
  ]

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
            <p className="mt-3">{t('onDevice')}</p>
            <p className="mt-3 text-sm text-text-muted">{t('appliesTo')}</p>
          </section>

          {sections.map((section) => (
            <section key={section.id} aria-labelledby={`games-priv-${section.id}`}>
              <h2
                id={`games-priv-${section.id}`}
                className="font-heading font-bold text-2xl text-text-primary mb-4"
              >
                {section.heading}
              </h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section aria-labelledby="games-priv-contact">
            <h2
              id="games-priv-contact"
              className="font-heading font-bold text-2xl text-text-primary mb-4"
            >
              {t('contactH')}
            </h2>
            <p>
              {t('contactB')}{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
