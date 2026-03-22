'use client'

/**
 * ProblemSolutions,  problem-led solution cards grid.
 * Full-width. Cards slide in from alternating sides via AnimateIn.
 * Light/dark mode aware.
 */

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import AnimateIn from '@/src/components/ui/AnimateIn'

export default function ProblemSolutions() {
  const t = useTranslations('problemSolutions')
  const tEyebrow = useTranslations('eyebrow')
  const locale = useLocale()
  const items = [0, 1, 2, 3] as const

  return (
    <section
      className="w-full py-24 bg-surface dark:bg-primary/90"
      aria-labelledby="problem-solutions-title"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <AnimateIn variant="slide-up" threshold={0.1}>
          <div className="text-center mb-16">
            <p className="text-text-muted dark:text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
              {tEyebrow('soundFamiliar')}
            </p>
            <h2
              id="problem-solutions-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary dark:text-white mb-4"
            >
              {t('title')}
            </h2>
            <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((idx) => {
            const variant = idx % 2 === 0 ? 'slide-left' : 'slide-right'
            return (
              <AnimateIn key={idx} variant={variant} delay={idx * 80} threshold={0.05}>
                <div
                  className="group relative p-7 rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-accent/40 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg h-full"
                  style={{ backgroundColor: 'var(--card-bg, #ffffff)' }}
                >
                  {/* Problem tag */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-lg flex items-center justify-center mt-0.5">
                      <svg
                        className="w-5 h-5 text-red-500 dark:text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-text-primary dark:text-white font-medium text-lg mb-4 leading-snug italic">
                        &ldquo;{t(`items.${idx}.problem`)}&rdquo;
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-0.5 bg-accent dark:bg-white/30 flex-shrink-0" aria-hidden="true" />
                        <Link
                          href={`/${locale}/solutions/${t(`items.${idx}.slug`)}`}
                          className="inline-flex items-center gap-1 rounded text-sm font-semibold text-accent transition-colors hover:text-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-neutral-200 dark:hover:text-white"
                        >
                          {t(`items.${idx}.solution`)}
                          <svg
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
