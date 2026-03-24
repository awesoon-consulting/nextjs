'use client'

/**
 * DifferentiatorCards,  4 differentiator cards on a dark bg.
 * Full-width section. Cards stagger in via AnimateIn.
 * Always dark-themed for brand contrast (section anchors the page).
 */

import { useTranslations } from 'next-intl'
import AnimateIn from '@/src/components/ui/AnimateIn'

const icons = [
  /* 0 — Independent (shield) */
  <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  /* 1 — Real experience (briefcase) */
  <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>,
  /* 2 — Practical scaling (trending up) */
  <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  /* 3 — End-user-first (cursor click) */
  <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
  </svg>,
  /* 4 — Senior-led (user check) */
  <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  /* 5 — Focus (target) */
  <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
]

export default function DifferentiatorCards() {
  const t = useTranslations('differentiators')
  const tEyebrow = useTranslations('eyebrow')
  const items = [0, 1, 2, 3, 4, 5]

  return (
    <section
      className="w-full py-24 bg-neutral-100 dark:bg-primary relative overflow-hidden"
      aria-labelledby="differentiators-title"
    >
      {/* Subtle border lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neutral-300/60 dark:via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neutral-300/60 dark:via-white/10 to-transparent" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16">
        <AnimateIn variant="slide-up" threshold={0.1}>
          <div className="text-center mb-16">
            <p className="text-neutral-400 dark:text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
              {tEyebrow('whyAwesoon')}
            </p>
            <h2
              id="differentiators-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary dark:text-white mb-4"
            >
              {t('title')}
            </h2>
            <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((idx) => (
            <AnimateIn key={idx} variant="scale" delay={idx * 100} threshold={0.05}>
              <div
                className="relative p-8 rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-accent/40 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300 group cursor-default h-full"
                style={{ backgroundColor: 'var(--card-bg, #ffffff)' }}
              >
                {/* Accent corner line */}
                <div
                  className="absolute top-0 left-8 w-12 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 dark:bg-white/10 border border-accent/20 dark:border-white/10 rounded-xl flex items-center justify-center text-accent dark:text-white/80 group-hover:bg-accent/20 dark:group-hover:bg-white/15 group-hover:border-accent/40 dark:group-hover:border-white/20 transition-colors">
                    {icons[idx]}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-text-primary dark:text-white group-hover:text-accent dark:group-hover:text-white transition-colors">
                    {t(`items.${idx}.title`)}
                  </h3>
                </div>
                <p className="text-text-secondary dark:text-neutral-400 leading-relaxed group-hover:text-text-primary dark:group-hover:text-neutral-300 transition-colors">
                  {t(`items.${idx}.description`)}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
