import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gamesSupport' })

  return {
    title: t('title'),
    description: t('lead'),
    robots: { index: false },
  }
}

export default async function GamesSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'gamesSupport' })

  const faqs = [
    { id: 'progress', question: t('q1'), answer: t('a1') },
    { id: 'offline', question: t('q2'), answer: t('a2') },
    { id: 'account', question: t('q3'), answer: t('a3') },
    { id: 'reset', question: t('q4'), answer: t('a4') },
    { id: 'ads', question: t('q5'), answer: t('a5') },
  ]

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">{t('title')}</h1>
        <p className="text-lg text-text-secondary mb-2">{t('lead')}</p>
        <p className="text-sm text-text-muted mb-12">{t('appliesTo')}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-text-secondary">
          <section aria-labelledby="games-support-contact">
            <h2
              id="games-support-contact"
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

          <section aria-labelledby="games-support-faq">
            <h2
              id="games-support-faq"
              className="font-heading font-bold text-2xl text-text-primary mb-4"
            >
              {t('faqH')}
            </h2>
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-text-primary">{faq.question}</dt>
                  <dd className="mt-1">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="games-support-privacy">
            <h2
              id="games-support-privacy"
              className="font-heading font-bold text-2xl text-text-primary mb-4"
            >
              {t('privacyH')}
            </h2>
            <p>
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
