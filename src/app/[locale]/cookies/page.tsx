'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function CookiesPage() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">
          {t('cookies.title')}
        </h1>
        <p className="text-sm text-text-muted mb-12">{t('cookies.lastUpdated')}</p>

        <div className="space-y-10 text-text-secondary">
          <section>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. We use cookies and localStorage to provide certain functionality and, with your consent, to understand how you use our site.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
              Cookies We Use
            </h2>

            {/* Necessary */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-semibold text-lg text-text-primary">Necessary</h3>
                <span className="text-xs bg-success-light text-success px-2 py-0.5 rounded-full font-medium">
                  Always Active
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Name
                      </th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Type
                      </th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Purpose
                      </th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-mono text-xs">
                        awesoon_consent
                      </td>
                      <td className="p-3 border border-neutral-200">localStorage</td>
                      <td className="p-3 border border-neutral-200">
                        Stores your cookie consent preferences. Required to remember your choices.
                      </td>
                      <td className="p-3 border border-neutral-200">Until cleared by browser</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-semibold text-lg text-text-primary">Analytics</h3>
                <span className="text-xs bg-neutral-100 text-text-muted px-2 py-0.5 rounded-full font-medium">
                  Consent Required
                </span>
              </div>
              <p className="text-sm mb-3">
                These cookies are only set if you accept analytics cookies. They are provided by Google Analytics 4 to help us understand how visitors use our site.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Name
                      </th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Provider
                      </th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Purpose
                      </th>
                      <th className="text-left p-3 border border-neutral-200 font-semibold text-text-primary">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-mono text-xs">_ga</td>
                      <td className="p-3 border border-neutral-200">Google</td>
                      <td className="p-3 border border-neutral-200">
                        Distinguishes unique users by assigning a randomly generated number.
                      </td>
                      <td className="p-3 border border-neutral-200">2 years</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-mono text-xs">_ga_*</td>
                      <td className="p-3 border border-neutral-200">Google</td>
                      <td className="p-3 border border-neutral-200">
                        Used to persist session state across pages.
                      </td>
                      <td className="p-3 border border-neutral-200">2 years</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-neutral-200 font-mono text-xs">_gid</td>
                      <td className="p-3 border border-neutral-200">Google</td>
                      <td className="p-3 border border-neutral-200">
                        Distinguishes users. Resets each day.
                      </td>
                      <td className="p-3 border border-neutral-200">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-semibold text-lg text-text-primary">Marketing</h3>
                <span className="text-xs bg-neutral-100 text-text-muted px-2 py-0.5 rounded-full font-medium">
                  Not Used
                </span>
              </div>
              <p className="text-sm">
                We currently do not use any marketing or advertising cookies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
              Managing Your Preferences
            </h2>
            <p className="mb-4">
              You can update your cookie preferences at any time. Click the button below to open the cookie preference manager.
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-cookie-manager'))}
              className="inline-flex items-center px-5 py-2.5 bg-secondary text-text-inverse text-sm font-semibold rounded-lg hover:bg-secondary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Manage Cookie Preferences
            </button>
            <p className="mt-4 text-sm">
              You can also control cookies through your browser settings. Note that disabling all cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
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
        </div>
      </div>
    </div>
  )
}
