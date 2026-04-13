import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import AnimateIn from '@/src/components/ui/AnimateIn'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'terms' })

  return {
    title: t('title'),
    robots: { index: false },
  }
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'terms' })
  const sectionClass =
    'rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-primary dark:shadow-none'

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="mb-12">
            <h1 className="mb-2 font-heading text-4xl font-bold text-text-primary">{t('title')}</h1>
            <p className="text-sm text-text-muted">{t('lastUpdated')}</p>
          </div>
        </AnimateIn>

        <div className="space-y-6 text-text-secondary">
          <AnimateIn variant="slide-up" delay={60} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the {siteConfig.name} website at {siteConfig.url} (the
                &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use the Site.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={110} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                2. Services Description
              </h2>
              <p>
                {siteConfig.name} provides B2B operations consulting services to mid-market
                manufacturing, distribution, and industrial companies. The Site serves as an
                informational and lead generation platform. Actual consulting engagements are
                governed by separate service agreements.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={160} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                3. Intellectual Property
              </h2>
              <p>
                All content on this Site, including text, graphics, logos, and software, is the
                property of {siteConfig.name} and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or create derivative works without our
                express written permission.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={210} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                4. Contact Form Submissions
              </h2>
              <p>
                By submitting our contact form, you consent to being contacted by {siteConfig.name}{' '}
                regarding your inquiry. We will not add you to marketing lists or share your
                information with third parties without your explicit consent. See our Privacy Policy
                for full details.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={260} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                5. Disclaimer of Warranties
              </h2>
              <p>
                The information on this Site is provided &ldquo;as is&rdquo; without warranties of
                any kind. While we strive to keep information accurate and current, we make no
                representations about the completeness, accuracy, or suitability of the information
                for any purpose.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={310} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} shall not be liable for
                any indirect, incidental, special, or consequential damages arising from your use
                of the Site. Our total liability for any claim arising from use of the Site shall
                not exceed CAD $100.
              </p>
              <p className="mt-3">[PLACEHOLDER, have this reviewed by a lawyer before launch]</p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={360} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                7. Links to Third-Party Sites
              </h2>
              <p>
                This Site may contain links to third-party websites. These links are provided for
                convenience only. We have no control over the content of linked sites and accept no
                responsibility for their content or privacy practices.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={410} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                8. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by the laws of the Province of Quebec, Canada,
                without regard to conflict of law provisions. [PLACEHOLDER, confirm jurisdiction
                with legal counsel]
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={460} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Updated terms will be
                posted on this page with a revised date. Continued use of the Site after changes
                constitutes acceptance of the new terms.
              </p>
            </section>
          </AnimateIn>

          <AnimateIn variant="slide-up" delay={510} threshold={0.03}>
            <section className={sectionClass}>
              <h2 className="mb-4 font-heading text-2xl font-bold text-text-primary">10. Contact</h2>
              <p>
                For questions about these Terms, contact us at{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-secondary underline hover:no-underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
