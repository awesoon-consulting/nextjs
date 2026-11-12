'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/src/config/site'
import LanguageSwitcher from './LanguageSwitcher'
import { useTheme } from './ThemeProvider'

const solutionLabel = new Map<string, string>(
  siteConfig.footer.solutionLinks.map((l) => [l.href.replace('/solutions/', ''), l.labelKey]),
)

function ThemeIcon() {
  return (
    <>
      <svg className="block h-5 w-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
      <svg className="hidden h-5 w-5 dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v2m0 14v2M3 12H1m4.22-6.36L3.86 4.22M18.36 5.64l1.42-1.42M21 12h2m-3.64 6.36 1.42 1.42M5.64 18.36l-1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    </>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Navbar() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaOpen, setIsMegaOpen] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setIsMobileMenuOpen(false)
    setIsMegaOpen(false)
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen && !isMegaOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsMegaOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setIsMegaOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [isMobileMenuOpen, isMegaOpen])

  function localHref(href: string) {
    return `/${locale}${href === '/' ? '' : href}`
  }

  function isActive(href: string) {
    return pathname.startsWith(localHref(href))
  }

  const linkBase =
    'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  const linkIdle =
    'text-text-secondary hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white'
  const iconBtn =
    'rounded-full p-2 text-text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white'
  const pill =
    'inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:bg-white dark:text-primary dark:hover:bg-neutral-200'

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
          isScrolled || isMegaOpen
            ? 'border-neutral-200/80 bg-white/96 backdrop-blur-xl dark:border-white/10 dark:bg-primary/98'
            : 'border-transparent bg-white/80 backdrop-blur-xl dark:bg-primary/80',
        ].join(' ')}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-10 xl:px-16" aria-label={t('nav.mainNav')}>
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href={localHref('/')}
              className="flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={t('nav.home')}
            >
              <Image src="/images/retina-logo.png" alt="" width={26} height={26} className="flex-shrink-0" priority />
              <span className="font-heading text-xl font-bold tracking-tight text-text-primary lowercase dark:text-white">
                {siteConfig.name}
              </span>
            </Link>

            <div className="hidden items-center gap-1 lg:flex" ref={megaRef}>
              <button
                type="button"
                onClick={() => setIsMegaOpen((o) => !o)}
                aria-expanded={isMegaOpen}
                aria-controls="services-menu"
                className={`${linkBase} inline-flex items-center gap-1 ${isMegaOpen ? 'bg-neutral-100 text-text-primary dark:bg-white/10 dark:text-white' : linkIdle}`}
              >
                {t('nav.services')}
                <Chevron open={isMegaOpen} />
              </button>
              {siteConfig.nav.main.map(({ labelKey, href }) => (
                <Link
                  key={href}
                  href={localHref(href)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={`${linkBase} ${isActive(href) ? 'text-text-primary dark:text-white' : linkIdle}`}
                >
                  {t(labelKey)}
                </Link>
              ))}

              {isMegaOpen && (
                <div
                  id="services-menu"
                  className="absolute left-0 right-0 top-16 border-b border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-primary"
                >
                  <div className="grid grid-cols-5 gap-8 px-10 py-10 xl:px-16">
                    {siteConfig.services.map((s) => (
                      <div key={s.key}>
                        <Link
                          href={localHref(s.href)}
                          className="font-heading text-base font-semibold text-text-primary hover:underline dark:text-white"
                        >
                          {t(`serviceLines.${s.key}.name`)}
                        </Link>
                        <p className="mt-1 text-sm leading-snug text-text-muted dark:text-neutral-400">
                          {t(`serviceLines.${s.key}.short`)}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {s.solutions.map((slug) => (
                            <li key={slug}>
                              <Link
                                href={localHref(`/solutions/${slug}`)}
                                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary dark:text-neutral-300 dark:hover:text-white"
                              >
                                {t(solutionLabel.get(slug) ?? '')}
                                {slug === 'systems-audit' && (
                                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-text-primary dark:bg-white/10 dark:text-white">
                                    {t('nav.free')}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-6 border-t border-neutral-200 px-10 py-6 dark:border-white/10 xl:px-16">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <span className="text-xs font-semibold tracking-wider text-text-muted uppercase dark:text-neutral-400">
                        {t('nav.supportHeading')}
                      </span>
                      {siteConfig.footer.supportLinks.map((l) => (
                        <Link key={l.href} href={localHref(l.href)} className="text-sm text-text-secondary hover:text-text-primary dark:text-neutral-300 dark:hover:text-white">
                          {t(l.labelKey)}
                        </Link>
                      ))}
                    </div>
                    <div className="flex items-center gap-5 text-sm">
                      <span className="text-text-muted dark:text-neutral-400">
                        {t('nav.notSure')}{' '}
                        <Link href={localHref('/solutions/systems-audit')} className="font-medium text-text-primary underline underline-offset-4 dark:text-white">
                          {t('nav.notSureLink')}
                        </Link>
                      </span>
                      <Link href={localHref('/solutions')} className="font-semibold text-text-primary dark:text-white">
                        {t('nav.allSolutions')}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher />
              <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label={t('nav.toggleTheme')} className={iconBtn}>
                <ThemeIcon />
              </button>
              <Link href={localHref(siteConfig.nav.cta.href)} className={pill}>
                {t(siteConfig.nav.cta.labelKey)}
              </Link>
            </div>

            <div className="flex items-center gap-1 lg:hidden">
              <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} aria-label={t('nav.toggleTheme')} className={iconBtn}>
                <ThemeIcon />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen((o) => !o)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                className={iconBtn}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="lg:hidden" aria-hidden={!isMobileMenuOpen} inert={!isMobileMenuOpen}>
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        />
        <div
          className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-primary ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.mobileNav')}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-white/10">
            <span className="flex items-center gap-2 font-heading text-lg font-bold lowercase text-text-primary dark:text-white">
              <Image src="/images/retina-logo.png" alt="" width={22} height={22} />
              {siteConfig.name}
            </span>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label={t('nav.closeMenu')} className={iconBtn}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            <p className="px-1 pb-2 text-xs font-semibold tracking-wider text-text-muted uppercase dark:text-neutral-400">{t('nav.services')}</p>
            {siteConfig.services.map((s) => (
              <details key={s.key} className="group border-b border-neutral-200 dark:border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-heading text-base font-semibold text-text-primary dark:text-white">
                  {t(`serviceLines.${s.key}.name`)}
                  <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="space-y-1 pb-3">
                  {s.solutions.map((slug) => (
                    <li key={slug}>
                      <Link href={localHref(`/solutions/${slug}`)} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm text-text-secondary dark:text-neutral-300">
                        {t(solutionLabel.get(slug) ?? '')}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={localHref(s.href)} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm font-semibold text-text-primary dark:text-white">
                      {t('serviceLines.explore', { service: t(`serviceLines.${s.key}.name`) })}
                    </Link>
                  </li>
                </ul>
              </details>
            ))}
            <details className="group border-b border-neutral-200 dark:border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-heading text-base font-semibold text-text-primary dark:text-white">
                {t('nav.supportHeading')}
                <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="space-y-1 pb-3">
                {siteConfig.footer.supportLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={localHref(l.href)} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm text-text-secondary dark:text-neutral-300">
                      {t(l.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <nav className="mt-4 space-y-1" aria-label={t('nav.mainNav')}>
              {siteConfig.nav.main.map(({ labelKey, href }) => (
                <Link
                  key={href}
                  href={localHref(href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className="block rounded-lg px-1 py-3 font-heading text-base font-semibold text-text-primary dark:text-white"
                >
                  {t(labelKey)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher className="mt-4" />
          </div>

          <div className="border-t border-neutral-200 px-5 py-4 dark:border-white/10">
            <Link href={localHref(siteConfig.nav.cta.href)} onClick={() => setIsMobileMenuOpen(false)} className={`${pill} w-full py-3 text-base`}>
              {t(siteConfig.nav.cta.labelKey)}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
