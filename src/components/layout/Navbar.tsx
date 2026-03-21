'use client'

/**
 * Navbar,  sticky top nav with:
 * - Full-width mega menu for Solutions (8 solution cards in a grid)
 * - Dark/light mode toggle (reads from ThemeProvider)
 * - Mobile hamburger menu with full menu
 * - Language switcher
 * - Conversion CTA: "Get a Free Systems Audit"
 *
 * Layout: Logo left | Nav links center | Lang + Theme + CTA right
 * Mega menu: full-viewport-width panel anchored below the header
 *
 * @see /src/components/README.md
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/src/config/site'
import Button from '@/src/components/ui/Button'
import LanguageSwitcher from './LanguageSwitcher'

// Mega menu content,  Solutions grid
const SOLUTION_GROUPS = [
  {
    groupKey: 'nav.megaMenu.groupOps',
    items: [
      { labelKey: 'nav.megaMenu.opsOutgrown', href: '/solutions/ops-outgrown-tools', icon: '⚡' },
      {
        labelKey: 'nav.megaMenu.spreadsheetOps',
        href: '/solutions/spreadsheet-operations',
        icon: '📊',
      },
      {
        labelKey: 'nav.megaMenu.systemIntegration',
        href: '/solutions/system-integration',
        icon: '🔗',
      },
      { labelKey: 'nav.megaMenu.apiIntegrations', href: '/solutions/api-integrations', icon: '⚙️' },
    ],
  },
  {
    groupKey: 'nav.megaMenu.groupImplementation',
    items: [
      { labelKey: 'nav.megaMenu.erpImpl', href: '/solutions/erp-implementation', icon: '🏗️' },
      { labelKey: 'nav.megaMenu.crmImpl', href: '/solutions/crm-implementation', icon: '📋' },
      { labelKey: 'nav.megaMenu.vendorMgmt', href: '/solutions/vendor-management', icon: '🤝' },
      { labelKey: 'nav.megaMenu.systemsAudit', href: '/solutions/systems-audit', icon: '🔍' },
    ],
  },
]

// Sun icon for light mode
function SunIcon() {
  return (
    <svg
      className="w-5 h-5"
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

// Moon icon for dark mode
function MoonIcon() {
  return (
    <svg
      className="w-5 h-5"
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

  // Theme state: read from DOM directly to stay in sync across components
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Sync from DOM on mount
    setIsDark(document.documentElement.classList.contains('dark'))

    // Watch for external changes (e.g. system preference)
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  function toggle() {
    const nextDark = !isDark
    if (nextDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try {
      localStorage.setItem('awesoon_theme', nextDark ? 'dark' : 'light')
    } catch {}
    setIsDark(nextDark)
  }

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false)

  const megaMenuRef = useRef<HTMLDivElement>(null)
  const solutionsButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMegaMenuOpen(false)
  }, [pathname])

  // Close mega menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node) &&
        solutionsButtonRef.current &&
        !solutionsButtonRef.current.contains(e.target as Node)
      ) {
        setIsMegaMenuOpen(false)
      }
    }
    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClick)
      return () => document.removeEventListener('mousedown', handleClick)
    }
  }, [isMegaMenuOpen])

  // Close mega menu on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsMegaMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  function localHref(href: string) {
    return `/${locale}${href === '/' ? '' : href}`
  }

  function isActive(href: string) {
    const target = localHref(href)
    if (href === '/') return pathname === target
    return pathname.startsWith(target)
  }

  const isSolutionsActive = isActive('/solutions')

  const navLinkBase =
    'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen || isMegaMenuOpen
          ? 'bg-primary/98 dark:bg-primary/98 backdrop-blur-md shadow-lg'
          : 'bg-primary/85 dark:bg-primary/90 backdrop-blur-sm',
      ].join(' ')}
    >
      {/* ── Main nav row ── */}
      <nav
        className="w-full px-4 sm:px-6 lg:px-10 xl:px-16"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={localHref('/')}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label={`${siteConfig.name},  Home`}
          >
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline-block text-accent font-bold text-xl">.</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.main.map(({ labelKey, href }) => {
              if (href === '/solutions') {
                return (
                  <button
                    key={href}
                    ref={solutionsButtonRef}
                    onClick={() => setIsMegaMenuOpen((p) => !p)}
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                    className={[
                      navLinkBase,
                      'flex items-center gap-1',
                      isSolutionsActive || isMegaMenuOpen
                        ? 'text-accent'
                        : 'text-neutral-300 hover:text-white hover:bg-white/10',
                    ].join(' ')}
                  >
                    {t(labelKey)}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )
              }
              return (
                <Link
                  key={href}
                  href={localHref(href)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={[
                    navLinkBase,
                    isActive(href)
                      ? 'text-accent'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10',
                  ].join(' ')}
                >
                  {t(labelKey)}
                </Link>
              )
            })}
          </div>

          {/* Desktop right: lang + theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <Link href={localHref(siteConfig.nav.cta.href)}>
              <Button variant="primary" size="sm">
                {t(siteConfig.nav.cta.labelKey)}
              </Button>
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-1">
            <LanguageSwitcher />
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className="p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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

      {/* ── MEGA MENU,  Full-width solutions panel ── */}
      {isMegaMenuOpen && (
        <div
          ref={megaMenuRef}
          role="region"
          aria-label="Solutions menu"
          className="hidden md:block w-full bg-primary/98 backdrop-blur-md border-t border-white/10 shadow-2xl animate-in anim-menu-drop"
          style={{ animationDuration: '220ms' }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-8">
            <div className="grid grid-cols-2 gap-10">
              {SOLUTION_GROUPS.map((group) => (
                <div key={group.groupKey}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                    {t(group.groupKey as Parameters<typeof t>[0])}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map(({ labelKey, href, icon }) => (
                      <Link
                        key={href}
                        href={localHref(href)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/8 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <span className="text-lg mt-0.5 flex-shrink-0" aria-hidden="true">
                          {icon}
                        </span>
                        <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors leading-snug">
                          {t(labelKey as Parameters<typeof t>[0])}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mega menu footer CTA */}
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Not sure where to start?</p>
                <p className="text-xs text-neutral-400">A 30-min audit call costs you nothing.</p>
              </div>
              <Link href={localHref('/contact')} onClick={() => setIsMegaMenuOpen(false)}>
                <Button variant="primary" size="sm">
                  {t('nav.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-primary/98 border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {siteConfig.nav.main.map(({ labelKey, href }) => {
              if (href === '/solutions') {
                return (
                  <div key={href}>
                    <button
                      onClick={() => setIsMobileSolutionsOpen((p) => !p)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {t(labelKey)}
                      <svg
                        className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isMobileSolutionsOpen && (
                      <div className="mt-1 ml-4 space-y-1 border-l border-white/10 pl-4">
                        {SOLUTION_GROUPS.flatMap((g) => g.items).map(
                          ({ labelKey: lk, href: h, icon }) => (
                            <Link
                              key={h}
                              href={localHref(h)}
                              className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors"
                            >
                              <span aria-hidden="true">{icon}</span>
                              {t(lk as Parameters<typeof t>[0])}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={href}
                  href={localHref(href)}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className={[
                    'block px-4 py-3 text-base font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    isActive(href)
                      ? 'text-accent bg-white/10'
                      : 'text-neutral-300 hover:text-white hover:bg-white/10',
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
