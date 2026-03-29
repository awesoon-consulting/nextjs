'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Card from '@/src/components/ui/Card'
import Badge from '@/src/components/ui/Badge'
import AnimateIn from '@/src/components/ui/AnimateIn'
import { getLocalizedSupportItems } from '@/src/data/support'

interface SupportGridProps {
  variant?: 'page' | 'home'
}

export default function SupportGrid({ variant = 'page' }: SupportGridProps) {
  const t = useTranslations()
  const locale = useLocale()
  const items = getLocalizedSupportItems(locale)

  const introKey = variant === 'home' ? 'supportHome' : 'support'

  return (
    <section
      className={variant === 'home' ? 'bg-surface py-24' : 'bg-neutral-50 py-24 dark:bg-secondary/30'}
      aria-labelledby="support-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-text-muted dark:text-white/40">
              {t('eyebrow.support')}
            </p>
            <h2
              id="support-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4"
            >
              {t(`${introKey}.title`)}
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {t(`${introKey}.subtitle`)}
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, idx) => (
            <AnimateIn key={item.slug} variant="slide-up" delay={idx * 70} threshold={0.04}>
              <Link
                href={`/${locale}/support/${item.slug}`}
                className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <Card
                  variant="bordered"
                  hover
                  className="flex h-full flex-col group-hover:border-secondary/40 transition-colors"
                >
                  <div className="flex-1">
                    <Badge variant="default" size="sm" className="mb-3">
                      {item.category}
                    </Badge>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all dark:text-neutral-200">
                    {t('support.learnMore')}
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
