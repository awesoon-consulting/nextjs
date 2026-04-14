'use client'

/**
 * FloatingCTA,  sticky conversion bar that appears after scrolling
 * past the hero section (~600px down). Dismissible per session.
 *
 * Conversion design:
 * - Slides up from bottom after scroll threshold
 * - Shows on all pages except /contact (checked via pathname)
 * - "Get a Free Systems Health Check" primary CTA
 * - Dismissible (session storage,  returns on next visit)
 * - Amber pulsing dot for attention without being annoying
 * - Respects reduced-motion preference
 *
 * @see /src/components/README.md
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

const DISMISSED_KEY = 'awesoon_floating_cta_dismissed'
const SCROLL_THRESHOLD = 600

export default function FloatingCTA() {
  const locale = useLocale()
  const t = useTranslations('floatingCta')
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Reset visibility on route change (prevents stale "visible" state
  // when navigating to a new page where the scroll position is at top).
  useEffect(() => {
    setIsVisible(false)
  }, [pathname])

  useEffect(() => {
    // Defer hydration work until after first paint so the hero has time
    // to render without competing with this component's setup cost.
    const idle = (cb: () => void) => {
      const w = window as typeof window & {
        requestIdleCallback?: (cb: () => void) => number
      }
      if (typeof w.requestIdleCallback === 'function') {
        w.requestIdleCallback(cb)
      } else {
        setTimeout(cb, 200)
      }
    }
    idle(() => {
      setIsReady(true)
      try {
        if (sessionStorage.getItem(DISMISSED_KEY)) setDismissed(true)
      } catch {
        /* ignore */
      }
    })
  }, [])

  useEffect(() => {
    if (!isReady || dismissed) return

    let ticking = false
    function handleScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > SCROLL_THRESHOLD)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed, isReady])

  function dismiss() {
    setDismissed(true)
    setIsVisible(false)
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1')
    } catch {
      // ignore
    }
  }

  // Don't show on /contact pages
  const isContactPage = pathname.includes('/contact')
  if (!isReady || dismissed || isContactPage) return null

  const contactHref = `/${locale}/contact`

  return (
    <div
      role="complementary"
      aria-label="Free systems health check offer"
      className={[
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4',
        'transition-transform duration-300 ease-out',
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-8 opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <div className="relative flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-5 py-4 shadow-[0_28px_80px_rgba(10,10,10,0.18)] dark:border-white/10 dark:bg-primary dark:shadow-2xl">
        {/* Pulse indicator */}
        <div className="relative flex-shrink-0" aria-hidden="true">
          <span className="absolute inline-flex w-3 h-3 rounded-full bg-accent animate-ping-slow" />
          <span className="relative inline-flex w-3 h-3 rounded-full bg-accent" />
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold leading-tight text-text-primary dark:text-white">
            {t('message')}
          </p>
          <p className="mt-0.5 text-xs text-text-secondary dark:text-neutral-400">
            {t('subtext')}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={contactHref}
          className="flex-shrink-0 whitespace-nowrap rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-text-inverse transition-colors duration-150 hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-secondary dark:hover:bg-secondary-light dark:focus-visible:ring-offset-primary"
          onClick={() => setIsVisible(false)}
        >
          {t('button')}
        </Link>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss this offer"
          className="flex-shrink-0 rounded-lg p-1.5 text-text-muted transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-neutral-500 dark:hover:text-neutral-300"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
