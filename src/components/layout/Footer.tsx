import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { siteConfig } from '@/src/config/site'

/**
 * Footer,  full-viewport-width dark footer with:
 * - Brand column with tagline and LinkedIn link
 * - Solutions, Company, Contact link columns
 * - Inline CTA strip above the bottom bar ("Ready to fix your ops?")
 * - Bottom bar: copyright, legal links, no-tracking note
 *
 * Dark mode: always dark (matches primary bg). Light mode: same.
 * The footer intentionally stays dark in both themes for visual anchoring.
 *
 * @see /src/components/README.md
 */

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const year = new Date().getFullYear()

  function localHref(href: string) {
    return `/${locale}${href}`
  }

  return (
    <footer className="w-full bg-primary text-white" role="contentinfo">
      {/* ── Pre-footer CTA strip ── */}
      <div className="w-full bg-secondary/40 border-t border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-xl text-white">
              Ready to stop managing workarounds?
            </p>
            <p className="text-sm text-neutral-400 mt-1">
              A 30-minute call. No pitch deck. Just an honest look at your systems.
            </p>
          </div>
          <Link
            href={localHref('/contact')}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary font-semibold px-6 py-3 rounded-xl transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary shadow-md hover:shadow-lg"
          >
            Get a Free Systems Audit
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Main footer columns ── */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand column,  spans 4 of 12 */}
          <div className="lg:col-span-4">
            <Link
              href={localHref('/')}
              className="inline-flex items-center gap-1 font-heading font-bold text-2xl text-white mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              {siteConfig.name}
              <span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mt-2">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Awesoon on LinkedIn"
                className="text-neutral-400 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions column,  spans 3 of 12 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              {t('footer.solutions')}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.solutionLinks.map(({ labelKey, href }) => (
                <li key={href}>
                  <Link
                    href={localHref(href)}
                    className="text-sm text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {t(labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column,  spans 2 of 12 */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.companyLinks.map(({ labelKey, href }) => (
                <li key={href}>
                  <Link
                    href={localHref(href)}
                    className="text-sm text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {t(labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column,  spans 3 of 12 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
              <li className="pt-2">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  A real person replies within 24 hours.
                  <br />
                  No chatbots, no auto-responders.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
              <span>{t('footer.copyright', { year })}</span>
              <span aria-hidden="true">·</span>
              <span>{t('footer.noTracking')}</span>
            </div>
            <nav className="flex flex-wrap items-center gap-4" aria-label="Legal navigation">
              {siteConfig.footer.legalLinks.map(({ labelKey, href }) => (
                <Link
                  key={href}
                  href={localHref(href)}
                  className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {t(labelKey as Parameters<typeof t>[0])}
                </Link>
              ))}
            </nav>
          </div>
          <p className="mt-3 text-xs text-neutral-600">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  )
}
