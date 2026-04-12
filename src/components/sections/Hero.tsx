import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import Button from '@/src/components/ui/Button'

/**
 * Hero, premium monochrome in light mode and deep navy in dark mode.
 * Left column: headline, subtext, CTAs, trust stats.
 * Right column (top on mobile): staggered portrait pair with fade+slide animation.
 */
export default function Hero() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-white dark:bg-primary"
      aria-label="Hero"
    >
      {/* Subtle geometric grid and glows */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.05 }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0A0A0A" strokeWidth="0.5" />
            </pattern>
            <pattern id="hero-grid-dark" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" className="dark:hidden" />
          <rect width="100%" height="100%" fill="url(#hero-grid-dark)" className="hidden dark:block" />
        </svg>

        <div
          className="absolute left-[-10%] top-24 h-[420px] w-[420px] rounded-full blur-[140px]"
          style={{ backgroundColor: 'rgba(245,158,11,0.10)' }}
        />
        <div
          className="absolute right-[-8%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full blur-[180px] dark:hidden"
          style={{ backgroundColor: 'rgba(10,10,10,0.08)' }}
        />
        <div
          className="absolute right-0 top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[160px] dark:block"
          style={{ backgroundColor: 'rgba(15,29,51,0.52)' }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-32 pt-40">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: copy ── */}
          <div className="w-full lg:max-w-[52%]">
            {/* Badge */}
            <div className="animate-in anim-hero-badge delay-0 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 bg-white/94 border border-black/8 shadow-[0_16px_40px_-24px_rgba(10,10,10,0.35)] dark:bg-white/5 dark:border-white/10 dark:shadow-none">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-sm font-medium tracking-wide text-text-secondary dark:text-white/60">
                {t('hero.trustBadge')}
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-in anim-slide-up delay-100 mb-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-text-primary dark:text-white sm:text-6xl lg:text-6xl xl:text-7xl">
              {t('hero.headline1')}{' '}
              <span className="text-accent dark:text-white">{t('hero.headlineAccent')}</span>
              <br />
              {t('hero.headline2')}
            </h1>

            {/* Subtext */}
            <p className="animate-in anim-slide-up delay-200 mb-10 max-w-xl text-lg leading-relaxed text-text-secondary dark:text-white/55 sm:text-xl">
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
              className="animate-in anim-fade-in delay-500 mt-12 flex flex-wrap gap-6 border-t border-neutral-200 pt-8 dark:border-white/10 sm:gap-10"
              aria-label="Trust signals"
            >
              {[
                { stat: '48h', label: t('hero.trustSignals.auditTurnaround') },
                { stat: '100%', label: t('hero.trustSignals.seniorDelivery') },
                { stat: '0', label: t('hero.trustSignals.noChatbots') },
              ].map(({ stat, label }) => (
                <div key={stat} className="flex items-center gap-3">
                  <span className="font-heading text-2xl font-bold text-text-primary dark:text-white">
                    {stat}
                  </span>
                  <span className="max-w-[100px] text-sm leading-tight text-text-muted dark:text-white/40">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: team portraits ── */}
          <div
            className="w-full lg:flex-1 flex justify-center lg:justify-end"
            aria-hidden="true"
          >
            {/* Staggered card pair */}
            <div className="relative w-[320px] h-[420px] sm:w-[380px] sm:h-[480px]">

              {/* Ching — back card, slides in from right, slight offset */}
              <div
                className="animate-in anim-slide-right delay-200 absolute top-0 right-0 w-[200px] sm:w-[240px] h-[280px] sm:h-[330px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10"
                style={{ animationFillMode: 'both' }}
              >
                <Image
                  src="/images/team-ching.png"
                  alt="Ching Ho — Project Manager & ERP/CRM Consultant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 200px, 240px"
                  priority
                />
                {/* Name label */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-xs font-semibold leading-tight">Ching Ho</p>
                  <p className="text-white/70 text-[10px]">{t('hero.teamLabels.chingTitle')}</p>
                </div>
              </div>

              {/* Ray — front card, slides in from right with more delay, offset down-left */}
              <div
                className="animate-in anim-slide-right delay-400 absolute bottom-0 left-0 w-[200px] sm:w-[240px] h-[280px] sm:h-[330px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-white/10"
                style={{ animationFillMode: 'both' }}
              >
                <Image
                  src="/images/team-ray.png"
                  alt="Ray Rasouli — Software Engineer & Solution Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 200px, 240px"
                  priority
                />
                {/* Name label */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-xs font-semibold leading-tight">Ray Rasouli</p>
                  <p className="text-white/70 text-[10px]">{t('hero.teamLabels.rayTitle')}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 dark:hidden"
        style={{ background: 'linear-gradient(to top, #FFFFFF, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 hidden dark:block"
        style={{ background: 'linear-gradient(to top, #050914, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
