'use client'

/**
 * CTABlock — high-conversion inline CTA section.
 *
 * Variants:
 *   'default' — dark navy bg, amber button (primary CTA, used on home)
 *   'accent'  — full amber bg, dark text (maximum contrast CTA)
 *   'light'   — light surface bg, secondary styled (used mid-page)
 *
 * Full-width section. AnimateIn on content block.
 * Trust signals (no chatbot, 24h reply, free) are always shown.
 *
 * @see /src/components/README.md
 */

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Button from '@/src/components/ui/Button'
import AnimateIn from '@/src/components/ui/AnimateIn'

interface CTABlockProps {
  titleKey?: string
  subtextKey?: string
  buttonKey?: string
  href?: string
  variant?: 'default' | 'accent' | 'light'
  /** Show/hide the trust signals strip. Default true */
  showTrust?: boolean
}

const trustSignals = [
  { icon: '🚫', text: 'No chatbots' },
  { icon: '⏱️', text: 'Reply within 24h' },
  { icon: '🆓', text: 'Completely free' },
  { icon: '👤', text: 'Named point of contact' },
]

export default function CTABlock({
  titleKey = 'about.cta.headline',
  subtextKey = 'about.cta.subtext',
  buttonKey = 'about.cta.button',
  href,
  variant = 'default',
  showTrust = true,
}: CTABlockProps) {
  const t = useTranslations()
  const locale = useLocale()
  const target = href ?? `/${locale}/contact`

  // ── Accent variant: full amber bg ──────────────────────────────────
  if (variant === 'accent') {
    return (
      <section className="w-full py-20 bg-accent" aria-labelledby="cta-heading">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <AnimateIn variant="scale" threshold={0.1}>
            <div className="text-center">
              <h2
                id="cta-heading"
                className="font-heading font-bold text-4xl sm:text-5xl text-primary mb-4"
              >
                {t(titleKey as Parameters<typeof t>[0])}
              </h2>
              <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">
                {t(subtextKey as Parameters<typeof t>[0])}
              </p>
              <Link href={target}>
                <Button variant="secondary" size="lg">
                  {t(buttonKey as Parameters<typeof t>[0])}
                </Button>
              </Link>
              {showTrust && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                  {trustSignals.map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-primary/70">
                      <span aria-hidden="true">{icon}</span>
                      <span className="text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>
    )
  }

  // ── Light variant ───────────────────────────────────────────────────
  if (variant === 'light') {
    return (
      <section
        className="w-full py-24 bg-neutral-100 dark:bg-secondary/20"
        aria-labelledby="cta-heading"
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <AnimateIn variant="slide-up" threshold={0.1}>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                id="cta-heading"
                className="font-heading font-bold text-4xl sm:text-5xl text-text-primary dark:text-white mb-4"
              >
                {t(titleKey as Parameters<typeof t>[0])}
              </h2>
              <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-2xl mx-auto mb-8">
                {t(subtextKey as Parameters<typeof t>[0])}
              </p>
              <Link href={target}>
                <Button variant="primary" size="lg">
                  {t(buttonKey as Parameters<typeof t>[0])}
                </Button>
              </Link>
              {showTrust && (
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                  {trustSignals.map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-text-muted dark:text-neutral-500">
                      <span aria-hidden="true">{icon}</span>
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>
    )
  }

  // ── Default variant: dark with pattern ─────────────────────────────
  return (
    <section
      className="w-full py-28 bg-primary relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute right-0 top-0 h-full opacity-[0.06]" viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#F59E0B" strokeWidth="1" fill="none">
            <circle cx="250" cy="350" r="250" />
            <circle cx="250" cy="350" r="180" />
            <circle cx="250" cy="350" r="110" />
            <circle cx="250" cy="350" r="50" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-transparent" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <AnimateIn variant="slide-up" threshold={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Take the first step
            </p>
            <h2
              id="cta-heading"
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5"
            >
              {t(titleKey as Parameters<typeof t>[0])}
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
              {t(subtextKey as Parameters<typeof t>[0])}
            </p>
            <Link href={target}>
              <Button variant="primary" size="lg" className="group">
                {t(buttonKey as Parameters<typeof t>[0])}
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>

            {showTrust && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                {trustSignals.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-neutral-500">
                    <span aria-hidden="true">{icon}</span>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
