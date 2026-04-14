/**
 * WhoWeHelp,  industry tiles section.
 * Full-width section, staggered card entrance via AnimateIn.
 * Light bg in light mode, dark secondary bg in dark mode.
 */

import type { ReactElement } from 'react'
import { useTranslations } from 'next-intl'
import AnimateIn from '@/src/components/ui/AnimateIn'

const industryIcons: Record<string, ReactElement> = {
  manufacturing: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  distribution: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  ),
  industrial: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  ),
  other: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
}

export default function WhoWeHelp() {
  const t = useTranslations('whoWeHelp')
  const industries = ['manufacturing', 'distribution', 'industrial', 'other'] as const

  return (
    <section
      className="w-full py-24 bg-surface dark:bg-primary/80"
      aria-labelledby="who-we-help-title"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <AnimateIn variant="slide-up" threshold={0.1}>
          <div className="text-center mb-16">
            <h2
              id="who-we-help-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary dark:text-white mb-4"
            >
              {t('title')}
            </h2>
            <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <AnimateIn key={industry} variant="slide-up" delay={idx * 80} threshold={0.05}>
              <div
                className="group h-full p-8 rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-accent/50 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300 cursor-default"
                style={{ backgroundColor: 'var(--card-bg, #ffffff)' }}
              >
                <div className="w-14 h-14 bg-accent/10 dark:bg-white/10 border border-accent/20 dark:border-white/10 rounded-xl flex items-center justify-center text-accent dark:text-white/80 mb-5 group-hover:bg-accent/20 dark:group-hover:bg-white/15 transition-colors">
                  {industryIcons[industry]}
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary dark:text-white mb-2 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                  {t(`industries.${industry}.title`)}
                </h3>
                <p className="text-sm text-text-secondary dark:text-neutral-400 leading-relaxed">
                  {t(`industries.${industry}.description`)}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
