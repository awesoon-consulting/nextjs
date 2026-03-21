'use client'

/**
 * FloatingCTA — sticky conversion bar that appears after scrolling
 * past the hero section (~600px down). Dismissible per session.
 *
 * Conversion design:
 * - Slides up from bottom after scroll threshold
 * - Shows on all pages except /contact (checked via pathname)
 * - "Get a Free Systems Audit" primary CTA
 * - Dismissible (session storage — returns on next visit)
 * - Amber pulsing dot for attention without being annoying
 * - Respects reduced-motion preference
 *
 * @see /src/components/README.md
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

const DISMISSED_KEY = 'awesoon_floating_cta_dismissed'
const SCROLL_THRESHOLD = 600

export default function FloatingCTA() {
  const locale = useLocale()
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Check if user already dismissed this session
  useEffect(() => {
    setMounted(true)
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) {
        setDismissed(true)
      }
    } catch {
      // sessionStorage unavailable (e.g. incognito restrictions) — show anyway
    }
  }, [])

  // Show after scrolling past hero
  useEffect(() => {
    if (!mounted || dismissed) return

    function handleScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted, dismissed])

  // Reset visibility on route change
  useEffect(() => {
    setVisible(false)
  }, [pathname])

  function dismiss() {
    setDismissed(true)
    setVisible(false)
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1')
    } catch {
      // ignore
    }
  }

  // Don't show on /contact pages
  const isContactPage = pathname.includes('/contact')
  if (!mounted || dismissed || isContactPage) return null

  const contactHref = `/${locale}/contact`

  return (
    <div
      role="complementary"
      aria-label="Free systems audit offer"
      className={[
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4',
        'transition-all duration-500',
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-8 opacity-0 pointer-events-none',
      ].join(' ')}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative bg-primary border border-accent/30 rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4">
        {/* Pulse indicator */}
        <div className="relative flex-shrink-0" aria-hidden="true">
          <span className="absolute inline-flex w-3 h-3 rounded-full bg-accent animate-ping-slow" />
          <span className="relative inline-flex w-3 h-3 rounded-full bg-accent" />
        </div>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-tight">
            Your systems audit is free.
          </p>
          <p className="text-neutral-400 text-xs mt-0.5">
            30 minutes. A real operator. No pitch deck.
          </p>
        </div>

        {/* CTA */}
        <Link
          href={contactHref}
          className="flex-shrink-0 bg-accent hover:bg-accent-dark text-primary font-semibold text-sm px-4 py-2 rounded-xl transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary whitespace-nowrap"
          onClick={() => setVisible(false)}
        >
          Claim It →
        </Link>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss this offer"
          className="flex-shrink-0 p-1.5 text-neutral-500 hover:text-neutral-300 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
