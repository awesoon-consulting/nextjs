import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import AnimateIn from '@/src/components/ui/AnimateIn'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })

  return {
    title: t('title'),
    robots: { index: false },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })
  const sectionClass =
    'rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-primary dark:shadow-none'
  const linkClass = 'text-secondary underline hover:no-underline'
  const codeClass = 'rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-white/10 dark:text-neutral-200'

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="mb-12">
            <h1 className="mb-2 font-heading text-4xl font-bold text-text-primary">{t('title')}</h1>
            <p className="mb-2 text-sm text-text-muted">{t('effectiveDate')}</p>
            <p className="text-sm text-text-muted">{t('lastUpdated')}</p>
          </div>
        </AnimateIn>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-text-secondary">
          <AnimateIn variant="slide-up" delay={60} threshold={0.03}>
            <section aria-labelledby="priv-intro" className={sectionClass}>
              <h2 id="priv-intro" className="mb-4 font-heading text-2xl font-bold text-text-primary">
                1. Introduction
              </h2>
              <p>
                {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
                committed to protecting the privacy of individuals who visit our website and submit
                inquiries. This Privacy Policy explains how we collect, use, store, and share
                personal information in compliance with applicable privacy laws, including:
              </p>
              <ul className="ml-6 mt-3 list-disc space-y-1">
                <li>
                  <strong>GDPR</strong>, General Data Protection Regulation (EU/EEA)
                </li>
                <li>
                  <strong>Quebec Law 25</strong>, Act Respecting the Protection of Personal
                  Information in the Private Sector (Canada/Quebec)
                </li>
                <li>
                  <strong>PIPEDA</strong>, Personal Information Protection and Electronic Documents
                  Act (Canada)
                </li>
                <li>
                  <strong>CCPA</strong>, California Consumer Privacy Act (United States/California)
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={110} threshold={0.03}>
            <section aria-labelledby="priv-data-collected" className={sectionClass}>
              <h2
                id="priv-data-collected"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                2. Data We Collect
              </h2>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">2.1 Contact Form Data</h3>
              <p>When you submit our contact form, we collect the following information you provide:</p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Full name</li>
                <li>Company name</li>
                <li>Work email address</li>
                <li>Phone number (optional)</li>
                <li>Industry and company size</li>
                <li>Operational challenges (selected from checkboxes)</li>
                <li>Project timeline and budget range</li>
                <li>Free-text message (optional)</li>
                <li>Submission timestamp, locale, and source page URL</li>
              </ul>

              <h3 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
                2.2 Analytics Data (with consent)
              </h3>
              <p>
                If you consent to analytics cookies, we collect anonymized usage data through
                Google Analytics 4, including pages visited, session duration, and browser/device
                information. No personal data is associated with analytics records without consent.
              </p>

              <h3 className="mb-2 mt-6 text-lg font-semibold text-text-primary">
                2.3 Consent Records
              </h3>
              <p>
                We store your cookie consent decision in your browser&apos;s localStorage under the
                key <code className={codeClass}>awesoon_consent</code>. This is necessary to
                remember your preferences.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={160} threshold={0.03}>
            <section aria-labelledby="priv-how-we-use" className={sectionClass}>
              <h2
                id="priv-how-we-use"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                3. How We Use Your Data
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>To respond to your inquiry</strong>, We use your contact information to
                  reach out and discuss your operational challenges.
                </li>
                <li>
                  <strong>To understand our prospective clients</strong>, Aggregated,
                  non-identifiable information about the types of challenges businesses face helps
                  us improve our services.
                </li>
                <li>
                  <strong>To improve our website</strong>, With your consent, analytics data helps
                  us understand which content is most helpful.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell your personal data. We do not use your data for automated
                decision-making or profiling.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={210} threshold={0.03}>
            <section aria-labelledby="priv-storage" className={sectionClass}>
              <h2
                id="priv-storage"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                4. How We Store Your Data
              </h2>
              <p>
                Contact form submissions are stored in a Google Sheets spreadsheet accessible only
                to authorized {siteConfig.name} team members. Google Sheets data is stored on
                Google&apos;s servers, which are SOC 2 and ISO 27001 certified.
              </p>
              <p className="mt-3">
                We do not use a third-party CRM or marketing automation platform. Your data is not
                shared with any external parties except as described in this policy.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={260} threshold={0.03}>
            <section aria-labelledby="priv-retention" className={sectionClass}>
              <h2
                id="priv-retention"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                5. Data Retention
              </h2>
              <p>
                We retain contact form submissions for a maximum of 3 years from the date of
                submission, or until you request deletion, whichever comes first. Analytics data
                retained by Google Analytics is subject to Google&apos;s data retention policy (we
                use a 14-month retention window).
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={310} threshold={0.03}>
            <section aria-labelledby="priv-rights" className={sectionClass}>
              <h2
                id="priv-rights"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                6. Your Rights
              </h2>
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="ml-6 mt-3 list-disc space-y-2">
                <li>
                  <strong>Right of access</strong>, Request a copy of the personal data we hold
                  about you.
                </li>
                <li>
                  <strong>Right to rectification</strong>, Request that we correct inaccurate data.
                </li>
                <li>
                  <strong>Right to erasure</strong>, Request that we delete your personal data.
                </li>
                <li>
                  <strong>Right to restrict processing</strong>, Request that we limit how we use
                  your data.
                </li>
                <li>
                  <strong>Right to data portability</strong>, Request your data in a
                  machine-readable format.
                </li>
                <li>
                  <strong>Right to object</strong>, Object to our processing of your personal data.
                </li>
                <li>
                  <strong>Right to withdraw consent</strong>, Withdraw cookie consent at any time
                  via the cookie preference manager.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email us at{' '}
                <a href={`mailto:${siteConfig.contact.privacyEmail}`} className={linkClass}>
                  {siteConfig.contact.privacyEmail}
                </a>
                . We will respond within 30 days. [PLACEHOLDER, adjust response timelines per
                jurisdiction]
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={360} threshold={0.03}>
            <section aria-labelledby="priv-cookies" className={sectionClass}>
              <h2
                id="priv-cookies"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                7. Cookies
              </h2>
              <p>
                We use cookies only with your consent, except for strictly necessary functionality.
                See our{' '}
                <a href={`/${locale}/cookies`} className={linkClass}>
                  Cookie Policy
                </a>{' '}
                for a complete list of cookies and how to manage your preferences.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={410} threshold={0.03}>
            <section aria-labelledby="priv-third-parties" className={sectionClass}>
              <h2
                id="priv-third-parties"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                8. Third-Party Services
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong>Google Analytics 4</strong>, Used to understand website usage. Only
                  activated with analytics consent. Subject to{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Sheets</strong>, Used to store contact form submissions. Subject to{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Vercel</strong>, Our hosting provider. Subject to{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Vercel&apos;s Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={460} threshold={0.03}>
            <section aria-labelledby="priv-contact" className={sectionClass}>
              <h2
                id="priv-contact"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                9. Contact
              </h2>
              <p>
                For privacy-related inquiries, data requests, or complaints, contact our Privacy
                Officer at:
              </p>
              <div className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-white/10 dark:bg-secondary/40">
                <p className="font-medium text-text-primary">{siteConfig.name}</p>
                <p className="text-text-secondary">{siteConfig.contact.address}</p>
                <a href={`mailto:${siteConfig.contact.privacyEmail}`} className={linkClass}>
                  {siteConfig.contact.privacyEmail}
                </a>
                <p className="mt-1 text-sm text-text-muted">
                  [PLACEHOLDER, add mailing address when available]
                </p>
              </div>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={510} threshold={0.03}>
            <section aria-labelledby="priv-changes" className={sectionClass}>
              <h2
                id="priv-changes"
                className="mb-4 font-heading text-2xl font-bold text-text-primary"
              >
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated
                policy on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage
                you to review this policy periodically.
              </p>
            </section>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
