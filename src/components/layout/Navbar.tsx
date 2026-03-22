'use client'

/**
 * Navbar, sticky top nav with:
 * - Full-width mega menu for Solutions (8 solution cards in a grid)
 * - Dark/light mode toggle
 * - Mobile hamburger menu with full menu
 * - Language switcher
 * - Conversion CTA
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/src/config/site'
import Button from '@/src/components/ui/Button'
import LanguageSwitcher from './LanguageSwitcher'
import { useTheme } from './ThemeProvider'

function SunIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 3v2m0 14v2M3 12H1m4.22-6.36L3.86 4.22M18.36 5.64l1.42-1.42M21 12h2m-3.64 6.36 1.42 1.42M5.64 18.36l-1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  )
}

export default function Navbar() {
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null)

  const isMobileMenuOpen = mobileMenuPath === pathname

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  function localHref(href: string) {
    return `/${locale}${href === '/' ? '' : href}`
  }

  function isActive(href: string) {
    const target = localHref(href)
    if (href === '/') return pathname === target
    return pathname.startsWith(target)
  }

  const navLinkBase =
    'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'border-neutral-200/80 bg-white/96 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-primary/98'
          : 'border-neutral-200/60 bg-white/82 shadow-md backdrop-blur-xl dark:border-white/5 dark:bg-primary/90',
      ].join(' ')}
    >
      <nav
        className="w-full px-4 sm:px-6 lg:px-10 xl:px-16"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            href={localHref('/')}
            className="flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`${siteConfig.name},  Home`}
          >
            <span className="font-heading text-xl font-bold tracking-tight text-text-primary dark:text-white">
              {siteConfig.name}
            </span>
            <span className="hidden text-xl font-bold text-accent dark:text-white/50 sm:inline-block">.</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.main.map(({ labelKey, href }) => {
              return (
                <Link
                  key={href}
                  href={localHref(href)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={[
                    navLinkBase,
                    isActive(href)
                      ? 'text-accent dark:text-white'
                      : 'text-text-secondary hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white',
                  ].join(' ')}
                >
                  {t(labelKey)}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title="Toggle color theme"
              className="rounded-lg p-2 text-text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <span className="block dark:hidden" aria-hidden="true">
                <MoonIcon />
              </span>
              <span className="hidden dark:block" aria-hidden="true">
                <SunIcon />
              </span>
            </button>
            <Link href={localHref(siteConfig.nav.cta.href)}>
              <Button variant="primary" size="sm">
                {t(siteConfig.nav.cta.labelKey)}
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title="Toggle color theme"
              className="rounded-lg p-2 text-text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <span className="block dark:hidden" aria-hidden="true">
                <MoonIcon />
              </span>
              <span className="hidden dark:block" aria-hidden="true">
                <SunIcon />
              </span>
            </button>
            <button
              onClick={() => setMobileMenuPath((current) => (current === pathname ? null : pathname))}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className="rounded-lg p-2 text-text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="w-full border-t border-neutral-200/80 bg-white/98 dark:border-white/10 dark:bg-primary/98 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {siteConfig.nav.main.map(({ labelKey, href }) => {
              return (
                <Link
                  key={href}
                  href={localHref(href)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={[
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive(href)
                      ? 'bg-accent/10 text-accent dark:bg-white/10 dark:text-white'
                      : 'text-text-secondary hover:bg-neutral-100 hover:text-text-primary dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-white',
                  ].join(' ')}
                >
                  {t(labelKey)}
                </Link>
              )
            })}
            <div className="pt-3">
              <Link href={localHref(siteConfig.nav.cta.href)}>
                <Button variant="primary" size="md" fullWidth>
                  {t(siteConfig.nav.cta.labelKey)}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
