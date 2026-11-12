import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { siteConfig } from '@/src/config/site'
import TrackedEmailLink from '@/src/components/ui/TrackedEmailLink'
import LanguageSwitcher from './LanguageSwitcher'

const solutionLabel = new Map<string, string>(
  siteConfig.footer.solutionLinks.map((l) => [l.href.replace('/solutions/', ''), l.labelKey]),
)

const heading = 'mb-4 text-sm font-semibold text-text-primary dark:text-white'
const link =
  'rounded text-sm text-text-secondary transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-neutral-400 dark:hover:text-white'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const year = new Date().getFullYear()
  const localHref = (href: string) => `/${locale}${href}`

  return (
    <footer className="w-full border-t border-neutral-200 bg-white text-text-primary dark:border-white/10 dark:bg-primary dark:text-white">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link href={localHref('')} className="inline-flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Image src="/images/retina-logo.png" alt="" width={26} height={26} />
              <span className="font-heading text-xl font-bold lowercase">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary dark:text-neutral-400">{t('footer.tagline')}</p>
            <h3 className={`${heading} mt-8`}>{t('footer.contactHeading')}</h3>
            <ul className="space-y-2.5 text-sm text-text-secondary dark:text-neutral-400">
              <li>
                <TrackedEmailLink email={siteConfig.contact.email} className={`${link} break-all`} />
              </li>
              <li className="text-xs text-text-muted dark:text-neutral-500">{t('footer.humanReplies')}</li>
              <li>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                  {t('footer.linkedin')}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h3 className={heading}>{t('footer.services')}</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {siteConfig.services
                .filter((s) => s.solutions.length > 0)
                .map((s) => (
                  <div key={s.key}>
                    <Link href={localHref(s.href)} className="font-heading text-sm font-semibold text-text-primary hover:underline dark:text-white">
                      {t(`serviceLines.${s.key}.name`)}
                    </Link>
                    <ul className="mt-3 space-y-2">
                      {s.solutions.map((slug) => (
                        <li key={slug}>
                          <Link href={localHref(`/solutions/${slug}`)} className={link}>
                            {t(solutionLabel.get(slug) ?? '')}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {siteConfig.services
                .filter((s) => s.solutions.length === 0)
                .map((s) => (
                  <Link key={s.key} href={localHref(s.href)} className="font-heading text-sm font-semibold text-text-primary hover:underline dark:text-white">
                    {t(`serviceLines.${s.key}.name`)}
                  </Link>
                ))}
              <Link href={localHref('/solutions')} className="text-sm font-semibold text-text-primary underline underline-offset-4 dark:text-white">
                {t('nav.allSolutions')}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            <div>
              <h3 className={heading}>{t('footer.support')}</h3>
              <ul className="space-y-2">
                {siteConfig.footer.supportLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={localHref(l.href)} className={link}>
                      {t(l.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={heading}>{t('footer.company')}</h3>
              <ul className="space-y-2">
                {siteConfig.footer.companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={localHref(l.href)} className={link}>
                      {t(l.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-white/10">
        <div className="flex w-full flex-col gap-4 px-4 py-6 text-xs text-text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10 xl:px-16 dark:text-neutral-500">
          <p>
            {t('footer.copyright', { year })} {t('footer.noTracking')}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {siteConfig.footer.legalLinks.map((l) => (
              <Link key={l.href} href={localHref(l.href)} className={link}>
                {t(l.labelKey)}
              </Link>
            ))}
            <span className="sr-only">{t('footer.language')}</span>
            <LanguageSwitcher direction="up" />
          </div>
        </div>
      </div>
    </footer>
  )
}
