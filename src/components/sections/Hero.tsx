import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Button from '@/src/components/ui/Button'

/**
 * Hero,  always dark navy. Full-viewport-width.
 * Design: typography-first, geometric grid pattern, no colour noise.
 * Amber used only on the accent word and CTA button.
 */
export default function Hero() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0F1B2D' }}
      aria-label="Hero"
    >
      {/* Subtle geometric grid,  very low opacity */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.03 }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* Single subtle glow,  no amber */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ backgroundColor: 'rgba(30,58,95,0.5)' }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-32 pt-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="animate-in anim-hero-badge delay-0 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{
              backgroundColor: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full" aria-hidden="true" />
            <span className="text-white/60 text-sm font-medium tracking-wide">
              {t('hero.trustBadge')}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-in anim-slide-up delay-100 font-heading font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight mb-6">
            Your ops outgrew <span className="text-accent">your tools.</span>
            <br />
            We fix that.
          </h1>

          {/* Subtext */}
          <p
            className="animate-in anim-slide-up delay-200 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {t('hero.subtext')}
          </p>

          {/* CTAs */}
          <div className="animate-in anim-slide-up delay-300 flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="lg" className="group">
                {t('hero.primaryCta')}
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
            <Link href={`/${locale}/solutions`}>
              <Button variant="outline" size="lg">
                {t('hero.secondaryCta')}
              </Button>
            </Link>
          </div>

          {/* Trust signals */}
          <div
            className="animate-in anim-fade-in delay-500 mt-12 pt-8 flex flex-wrap gap-6 sm:gap-10"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            aria-label="Trust signals"
          >
            {[
              { stat: '48h', label: 'Average audit turnaround' },
              { stat: '100%', label: 'Senior operator delivery' },
              { stat: '0', label: 'Chatbots. Ever.' },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-center gap-3">
                <span className="font-heading font-bold text-2xl text-white">{stat}</span>
                <span
                  className="text-sm leading-tight max-w-[100px]"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 dark:hidden"
        style={{ background: 'linear-gradient(to top, #FAFAF7, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 hidden dark:block"
        style={{ background: 'linear-gradient(to top, #0F1B2D, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
