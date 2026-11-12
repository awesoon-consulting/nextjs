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

const FOOTER_COLUMNS = [['consultation'], ['programming', 'design'], ['automation'], ['advertising']] as const

function Group({ title, titleHref, items }: { title: string; titleHref?: string; items: { href: string; label: string }[] }) {
  const list = (
    <ul className="mt-3 space-y-2">
      {items.map((x) => (
        <li key={x.href + x.label}>
          <Link href={x.href} className={link}>
            {x.label}
          </Link>
        </li>
      ))}
    </ul>
  )
  return (
    <>
      <div className="hidden sm:block">
        {titleHref ? (
          <Link href={titleHref} className="font-heading text-sm font-semibold text-text-primary hover:underline dark:text-white">
            {title}
          </Link>
        ) : (
          <h3 className="font-heading text-sm font-semibold text-text-primary dark:text-white">{title}</h3>
        )}
        {list}
      </div>
      <details className="group border-b border-neutral-200 py-3 sm:hidden dark:border-white/10">
        <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-sm font-semibold text-text-primary dark:text-white">
          {title}
          <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        {list}
      </details>
    </>
  )
}

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const year = new Date().getFullYear()
  const localHref = (href: string) => `/${locale}${href}`

  return (
    <footer className="w-full border-t border-neutral-200 bg-white text-text-primary dark:border-white/10 dark:bg-primary dark:text-white">
      <div className="w-full px-4 py-16 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href={localHref('')} className="inline-flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Image src="/images/retina-logo.png" alt="" width={26} height={26} />
              <span className="font-heading text-xl font-bold lowercase">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary dark:text-neutral-400">{t('footer.tagline')}</p>
            <h3 className={`${heading} mt-8`}>{t('footer.contactHeading')}</h3>
            <ul className="space-y-2.5 text-sm text-text-secondary dark:text-neutral-400">
              <li>
                <TrackedEmailLink email={siteConfig.contact.email} className={`${link} whitespace-nowrap`} />
              </li>
              <li className="text-xs text-text-muted dark:text-neutral-400">{t('footer.humanReplies')}</li>
              <li>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                  {t('footer.linkedin')}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-0 sm:grid-cols-2 sm:gap-8 lg:col-span-6 lg:col-start-7">
            <Group title={t('footer.support')} items={siteConfig.footer.supportLinks.map((l) => ({ href: localHref(l.href), label: t(l.labelKey) }))} />
            <Group title={t('footer.company')} items={siteConfig.footer.companyLinks.map((l) => ({ href: localHref(l.href), label: t(l.labelKey) }))} />
          </div>
        </div>

        <h3 className={`${heading} mt-14`}>{t('footer.services')}</h3>
        <div className="grid gap-0 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.join()} className="sm:space-y-8">
              {siteConfig.services
                .filter((s) => (col as readonly string[]).includes(s.key))
                .map((s) => (
                  <Group
                    key={s.key}
                    title={t(`serviceLines.${s.key}.menuName`)}
                    titleHref={localHref(s.href)}
                    items={
                      s.solutions.length > 0
                        ? s.solutions.map((slug) => ({ href: localHref(`/solutions/${slug}`), label: t(solutionLabel.get(slug) ?? '') }))
                        : s.extras.map((x) => ({ href: localHref(x.href), label: t(x.labelKey) }))
                    }
                  />
                ))}
            </div>
          ))}
        </div>
        <Link href={localHref('/solutions')} className="mt-8 inline-block rounded-full border border-neutral-300 px-5 py-2 text-sm font-semibold text-text-primary dark:border-white/20 dark:text-white">
          {t('nav.allSolutions')}
        </Link>
      </div>

      <div className="border-t border-neutral-200 dark:border-white/10">
        <div className="flex w-full flex-col gap-4 px-4 py-6 text-xs text-text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10 xl:px-16 dark:text-neutral-400">
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
