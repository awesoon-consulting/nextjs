'use client'

/**
 * ProcessSteps,  4-step process with connecting line.
 * Full-width. Steps stagger in left-to-right via AnimateIn.
 * Light/dark mode aware.
 */

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import AnimateIn from '@/src/components/ui/AnimateIn'
import Button from '@/src/components/ui/Button'

export default function ProcessSteps() {
  const t = useTranslations('process')
  const locale = useLocale()
  const steps = [0, 1, 2, 3]

  return (
    <section
      className="w-full py-24 bg-neutral-100 dark:bg-secondary/30"
      aria-labelledby="process-title"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <AnimateIn variant="slide-up" threshold={0.1}>
          <div className="text-center mb-16">
            <p className="text-text-muted dark:text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2
              id="process-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary dark:text-white mb-4"
            >
              {t('title')}
            </h2>
            <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </AnimateIn>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(12.5%+3rem)] right-[calc(12.5%+3rem)] h-0.5 bg-gradient-to-r from-neutral-300 dark:from-white/10 via-accent/50 to-neutral-300 dark:to-white/10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((idx) => (
              <AnimateIn key={idx} variant="slide-up" delay={idx * 120} threshold={0.05}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Step number circle */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-white dark:bg-primary/80 border-2 border-neutral-200 dark:border-white/20 group-hover:border-accent dark:group-hover:border-accent flex flex-col items-center justify-center mb-6 transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <span className="text-xs font-medium text-text-muted dark:text-neutral-500 uppercase tracking-widest">
                      Step
                    </span>
                    <span className="font-heading font-bold text-2xl text-secondary dark:text-accent">
                      {t(`steps.${idx}.number`)}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-text-primary dark:text-white mb-3 group-hover:text-secondary dark:group-hover:text-accent transition-colors">
                    {t(`steps.${idx}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-neutral-400 leading-relaxed">
                    {t(`steps.${idx}.description`)}
                  </p>

                  {/* Step 1 and 2 get inline nudge */}
                  {(idx === 0 || idx === 1) && (
                    <p className="mt-3 text-xs text-accent font-medium">
                      {idx === 0 ? 'Free,  no commitment' : 'Delivered in 48h'}
                    </p>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* CTA below steps */}
        <AnimateIn variant="slide-up" delay={200} threshold={0.05}>
          <div className="mt-16 text-center">
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="lg" className="group">
                Start with a Free Systems Audit
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
              </Button>
            </Link>
            <p className="mt-3 text-xs text-text-muted dark:text-neutral-500">
              No pitch deck. No commitments. Just clarity.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
