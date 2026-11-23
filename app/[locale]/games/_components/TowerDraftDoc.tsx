import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { LegalSections, type LegalSection } from './LegalSections'

type Doc = 'home' | 'privacy' | 'support' | 'terms'

const link = 'text-[#7D9CCB] underline underline-offset-4 hover:text-[#FAFAFA]'

// The Tower Draft pages are written in English only; every locale serves the same text.
const tr = (namespace: string) => getTranslations({ locale: 'en', namespace: `towerDraftLegal.${namespace}` })

export async function towerDraftMetadata(doc: Doc): Promise<Metadata> {
  const t = await tr(doc)
  return { title: t('title'), description: t('lead'), robots: { index: false } }
}

export async function TowerDraftDoc({ doc, locale }: { doc: Doc; locale: string }) {
  setRequestLocale(locale)
  const t = await tr(doc)
  const base = `/${locale}/games/tower-draft`
  const email = (
    <a href={`mailto:${siteConfig.contact.gamesEmail}`} className={link}>
      {siteConfig.contact.gamesEmail}
    </a>
  )

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">{t('title')}</h1>
        {doc === 'privacy' || doc === 'terms' ? <p className="text-sm text-text-muted mb-12">{t('updated')}</p> : null}
        <div className="prose prose-neutral max-w-none space-y-10 text-text-secondary">
          <section>
            <p className="text-lg text-text-primary font-semibold">{t('lead')}</p>
            {doc === 'home' ? <p className="mt-3">{t('play')}</p> : null}
            {doc === 'privacy' ? <p className="mt-3">{t('intro')}</p> : null}
            {doc !== 'home' ? <p className="mt-3 text-sm text-text-muted">{t('appliesTo')}</p> : null}
            {doc === 'terms' ? (
              <>
                <ul className="mt-3 list-disc pl-5">
                  {(t.raw('short') as string[]).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-text-muted">{t('precedence')}</p>
              </>
            ) : null}
          </section>

          {doc === 'privacy' || doc === 'terms' ? <LegalSections sections={t.raw('sections') as LegalSection[]} idPrefix={`td-${doc}`} /> : null}

          {doc === 'support' ? (
            <section aria-labelledby="td-support-faq">
              <h2 id="td-support-faq" className="font-heading font-bold text-2xl text-text-primary mb-4">
                {t('faqH')}
              </h2>
              <dl className="space-y-6">
                {(t.raw('faqs') as { q: string; a: string }[]).map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-semibold text-text-primary">{faq.q}</dt>
                    <dd className="mt-1">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {doc === 'home' ? (
            <section aria-labelledby="td-home-links">
              <h2 id="td-home-links" className="font-heading font-bold text-2xl text-text-primary mb-4">
                {t('linksH')}
              </h2>
              <ul className="space-y-2">
                {(['privacy', 'support', 'terms'] as const).map((p) => (
                  <li key={p}>
                    <Link href={`${base}/${p}`} className={link}>
                      {t(`${p}Link`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <>
              <section aria-labelledby={`td-${doc}-contact`}>
                <h2 id={`td-${doc}-contact`} className="font-heading font-bold text-2xl text-text-primary mb-4">
                  {t('contactH')}
                </h2>
                <p>
                  {t('contactB')} {email}
                </p>
              </section>
              {doc === 'support' ? (
                <section>
                  <p>
                    <Link href={`${base}/privacy`} className={link}>
                      {t('privacyLink')}
                    </Link>
                  </p>
                  <p className="mt-3">
                    <Link href={`${base}/terms`} className={link}>
                      {t('termsLink')}
                    </Link>
                  </p>
                </section>
              ) : (
                <p>
                  <Link href={`${base}/${doc === 'privacy' ? 'terms' : 'privacy'}`} className={link}>
                    {t(doc === 'privacy' ? 'termsLink' : 'privacyLink')}
                  </Link>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
