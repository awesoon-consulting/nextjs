import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { siteConfig } from '@/src/config/site'

/**
 * Footer,  premium footer with:
 * - Brand column with tagline and LinkedIn link
 * - Solutions, Company, Contact link columns
 * - Inline CTA strip above the bottom bar ("Ready to fix your ops?")
 * - Bottom bar: copyright, legal links, no-tracking note
 *
 * Light mode uses white surfaces, crisp borders, and shadowed separation.
 * Dark mode keeps the brand navy treatment.
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
    <footer
      className="w-full border-t border-neutral-200 bg-white text-text-primary shadow-[0_-24px_80px_rgba(10,10,10,0.06)] dark:border-white/10 dark:bg-primary dark:text-white dark:shadow-none"
      role="contentinfo"
    >
      {/* ── Pre-footer CTA strip ── */}
      <div className="w-full border-b border-neutral-200 bg-neutral-50/90 dark:border-white/10 dark:bg-secondary/40">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-xl text-text-primary dark:text-white">
              {t('footer.readyHeadline')}
            </p>
            <p className="mt-1 text-sm text-text-secondary dark:text-neutral-400">
              {t('footer.readySubtext')}
            </p>
          </div>
          <Link
            href={localHref('/contact')}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-text-inverse shadow-md transition-colors duration-150 hover:bg-secondary hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-secondary dark:hover:bg-secondary-light dark:focus-visible:ring-offset-secondary"
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
              <span className="text-text-primary dark:text-white">{siteConfig.name}</span>
              <span className="text-accent dark:text-white/50">.</span>
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-secondary dark:text-neutral-400">
              {t('footer.tagline')}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Awesoon on LinkedIn"
                className="text-text-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded dark:text-neutral-400 dark:hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions column,  spans 3 of 12 */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-neutral-400">
              {t('footer.solutions')}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.solutionLinks.map(({ labelKey, href }) => (
                <li key={href}>
                  <Link
                    href={localHref(href)}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded dark:text-neutral-400 dark:hover:text-white"
                  >
                    {t(labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column,  spans 2 of 12 */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-neutral-400">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2.5">
              {siteConfig.footer.companyLinks.map(({ labelKey, href }) => (
                <li key={href}>
                  <Link
                    href={localHref(href)}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded dark:text-neutral-400 dark:hover:text-white"
                  >
                    {t(labelKey as Parameters<typeof t>[0])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column,  spans 3 of 12 */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-neutral-400">
              {t('footer.contactHeading')}
            </h3>
            <ul className="space-y-2.5 text-sm text-text-secondary dark:text-neutral-400">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded dark:hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
              <li className="pt-2">
                <p className="text-xs leading-relaxed text-text-muted dark:text-neutral-500">
                  {t('footer.humanReplies')}
                  <br />
                  {t('footer.noChatbots')}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted dark:text-neutral-500">
              <span>{t('footer.copyright', { year })}</span>
              <span aria-hidden="true">·</span>
              <span>{t('footer.noTracking')}</span>
            </div>
            <nav className="flex flex-wrap items-center gap-4" aria-label="Legal navigation">
              {siteConfig.footer.legalLinks.map(({ labelKey, href }) => (
                <Link
                  key={href}
                  href={localHref(href)}
                  className="text-xs text-text-muted transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded dark:text-neutral-500 dark:hover:text-neutral-300"
                >
                  {t(labelKey as Parameters<typeof t>[0])}
                </Link>
              ))}
            </nav>
          </div>
          <p className="mt-3 text-xs text-text-muted dark:text-neutral-600">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  )
}
