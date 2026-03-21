import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Button from '@/src/components/ui/Button'

/**
 * Hero — full-viewport-width opening section.
 *
 * Design decisions:
 * - Always dark (primary bg) regardless of theme — hero is a brand anchor
 * - Geometric SVG circuit-board pattern (no stock photos)
 * - Staggered CSS entrance animations on headline, subtext, CTAs
 * - Three trust signals below CTAs (social proof strip)
 * - Full-bleed: section fills 100vw, inner content has max-width container
 *
 * @see /src/components/README.md
 */

export default function Hero() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-primary overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background: geometric SVG pattern ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Full-grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hero-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#F59E0B" strokeWidth="0.6" />
            </pattern>
            <pattern id="hero-dots" width="72" height="72" patternUnits="userSpaceOnUse">
              <circle cx="36" cy="36" r="1.5" fill="#F59E0B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Circuit-board accent — right half */}
        <svg
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.07]"
          viewBox="0 0 700 900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <g stroke="#F59E0B" strokeWidth="1" fill="none">
            <line x1="0"   y1="180" x2="700" y2="180" />
            <line x1="0"   y1="360" x2="700" y2="360" />
            <line x1="0"   y1="540" x2="700" y2="540" />
            <line x1="0"   y1="720" x2="700" y2="720" />
            <line x1="120" y1="0"   x2="120" y2="900" />
            <line x1="300" y1="0"   x2="300" y2="900" />
            <line x1="480" y1="0"   x2="480" y2="900" />
            <line x1="660" y1="0"   x2="660" y2="900" />
            {/* Nodes */}
            <circle cx="120" cy="180" r="5"  fill="#F59E0B" />
            <circle cx="300" cy="180" r="5"  fill="#F59E0B" />
            <circle cx="480" cy="360" r="5"  fill="#F59E0B" />
            <circle cx="120" cy="540" r="5"  fill="#F59E0B" />
            <circle cx="660" cy="540" r="5"  fill="#F59E0B" />
            <circle cx="300" cy="720" r="5"  fill="#F59E0B" />
            {/* Ring nodes */}
            <circle cx="480" cy="180" r="8"  fill="none" />
            <circle cx="120" cy="360" r="8"  fill="none" />
            <circle cx="660" cy="360" r="8"  fill="none" />
            <circle cx="300" cy="540" r="8"  fill="none" />
            {/* L-connectors */}
            <path d="M 120 180 L 120 270 L 300 270" />
            <path d="M 480 360 L 480 440 L 660 440" />
            <path d="M 300 720 L 300 640 L 120 640" />
            <path d="M 660 540 L 660 460 L 480 460" />
          </g>
        </svg>

        {/* Ambient glow layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-secondary/25 blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[80px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-32 pt-40">
        <div className="max-w-4xl">

          {/* Trust badge — slides down */}
          <div
            className="animate-in anim-hero-badge delay-0 inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-accent text-sm font-medium">{t('hero.trustBadge')}</span>
          </div>

          {/* Headline — slides up with stagger */}
          <h1
            className="animate-in anim-slide-up delay-100 font-heading font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Your ops outgrew{' '}
            <span className="text-accent relative">
              your tools.
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/40 rounded-full" aria-hidden="true" />
            </span>
            <br />
            <span className="text-neutral-300">We fix that.</span>
          </h1>

          {/* Subtext */}
          <p
            className="animate-in anim-slide-up delay-200 text-lg sm:text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl"
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
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href={`/${locale}/solutions`}>
              <Button variant="outline" size="lg">
                {t('hero.secondaryCta')}
              </Button>
            </Link>
          </div>

          {/* Trust signals strip */}
          <div
            className="animate-in anim-fade-in delay-500 mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 sm:gap-10"
            aria-label="Trust signals"
          >
            {[
              { stat: '48h', label: 'Average audit turnaround' },
              { stat: '100%', label: 'Senior operator delivery' },
              { stat: '0', label: 'Chatbots. Ever.' },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-center gap-3">
                <span className="font-heading font-bold text-2xl text-accent">{stat}</span>
                <span className="text-sm text-neutral-400 leading-tight max-w-[100px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface dark:from-primary to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
