'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import AnimateIn from '@/src/components/ui/AnimateIn'

export default function CookiesPage() {
  const t = useTranslations()
  const locale = useLocale()
  const sectionClass =
    'rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-primary dark:shadow-none'
  const tableWrapClass = 'overflow-hidden rounded-xl border border-neutral-200 dark:border-white/10'
  const tableHeadClass =
    'border border-neutral-200 bg-neutral-50 p-3 text-left font-semibold text-text-primary dark:border-white/10 dark:bg-secondary/40'
  const tableCellClass = 'border border-neutral-200 p-3 dark:border-white/10'
  const mutedPillClass =
    'rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-text-muted dark:bg-white/10 dark:text-neutral-300'

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="mb-12">
            <h1 className="mb-2 font-heading text-4xl font-bold text-text-primary">
              {t('cookies.title')}
            </h1>
            <p className="text-sm text-text-muted">{t('cookies.lastUpdated')}</p>
          </div>
        </AnimateIn>

        <div className="space-y-6 text-text-secondary">
          <AnimateIn variant="slide-up" delay={60} threshold={0.04}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. We use
                cookies and localStorage to provide certain functionality and, with your consent, to
                understand how you use our site.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={120} threshold={0.04}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                Cookies We Use
              </h2>

              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-text-primary">Necessary</h3>
                  <span className="rounded-full bg-success-light px-2 py-0.5 text-xs font-medium text-success">
                    Always Active
                  </span>
                </div>
                <div className={tableWrapClass}>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className={tableHeadClass}>Name</th>
                        <th className={tableHeadClass}>Type</th>
                        <th className={tableHeadClass}>Purpose</th>
                        <th className={tableHeadClass}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`${tableCellClass} font-mono text-xs`}>awesoon_consent</td>
                        <td className={tableCellClass}>localStorage</td>
                        <td className={tableCellClass}>
                          Stores your cookie consent preferences. Required to remember your choices.
                        </td>
                        <td className={tableCellClass}>Until cleared by browser</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-text-primary">Analytics</h3>
                  <span className={mutedPillClass}>Consent Required</span>
                </div>
                <p className="mb-3 text-sm">
                  These cookies are only set if you accept analytics cookies. They are provided by
                  Google Analytics 4 to help us understand how visitors use our site.
                </p>
                <div className={tableWrapClass}>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th className={tableHeadClass}>Name</th>
                        <th className={tableHeadClass}>Provider</th>
                        <th className={tableHeadClass}>Purpose</th>
                        <th className={tableHeadClass}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={`${tableCellClass} font-mono text-xs`}>_ga</td>
                        <td className={tableCellClass}>Google</td>
                        <td className={tableCellClass}>
                          Distinguishes unique users by assigning a randomly generated number.
                        </td>
                        <td className={tableCellClass}>2 years</td>
                      </tr>
                      <tr>
                        <td className={`${tableCellClass} font-mono text-xs`}>_ga_*</td>
                        <td className={tableCellClass}>Google</td>
                        <td className={tableCellClass}>
                          Used to persist session state across pages.
                        </td>
                        <td className={tableCellClass}>2 years</td>
                      </tr>
                      <tr>
                        <td className={`${tableCellClass} font-mono text-xs`}>_gid</td>
                        <td className={tableCellClass}>Google</td>
                        <td className={tableCellClass}>Distinguishes users. Resets each day.</td>
                        <td className={tableCellClass}>24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-text-primary">Marketing</h3>
                  <span className={mutedPillClass}>Not Used</span>
                </div>
                <p className="text-sm">
                  We currently do not use any marketing or advertising cookies.
                </p>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={180} threshold={0.04}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                Managing Your Preferences
              </h2>
              <p className="mb-4">
                You can update your cookie preferences at any time. Click the button below to open
                the cookie preference manager.
              </p>
              <button
                onClick={() => window.dispatchEvent(new Event('open-cookie-manager'))}
                className="inline-flex items-center rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-secondary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Manage Cookie Preferences
              </button>
              <p className="mt-4 text-sm">
                You can also control cookies through your browser settings. Note that disabling all
                cookies may affect site functionality.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={240} threshold={0.04}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                More Information
              </h2>
              <p>
                For more information about how we handle your personal data, see our{' '}
                <Link
                  href={`/${locale}/privacy`}
                  className="text-secondary underline hover:no-underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
