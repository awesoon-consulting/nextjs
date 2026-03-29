import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Card from '@/src/components/ui/Card'
import Badge from '@/src/components/ui/Badge'
import AnimateIn from '@/src/components/ui/AnimateIn'

const solutionKeys = [
  { key: 'aiOperations', category: 'AI & Automation' },
  { key: 'opsOutgrown', category: 'Operations Strategy' },
  { key: 'spreadsheetOps', category: 'Infrastructure' },
  { key: 'systemIntegration', category: 'Integration' },
  { key: 'erpImplementation', category: 'ERP' },
  { key: 'crmImplementation', category: 'CRM' },
  { key: 'apiIntegrations', category: 'Integration' },
  { key: 'customApiDevelopment', category: 'Custom Development' },
  { key: 'ecommerceDevelopment', category: 'Ecommerce' },
  { key: 'vendorManagement', category: 'Strategy' },
  { key: 'systemsAudit', category: 'Strategy' },
] as const

export default function SolutionGrid() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="bg-neutral-50 py-24 dark:bg-secondary/30" aria-labelledby="solutions-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-text-muted dark:text-white/40">
              {t('eyebrow.problemsWeSolve')}
            </p>
            <h2
              id="solutions-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4"
            >
              {t('solutions.title')}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t('solutions.subtitle')}</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {solutionKeys.map(({ key, category }, idx) => {
            const slug = t(`solutions.cards.${key}.slug`)
            return (
              <AnimateIn key={key} variant="slide-up" delay={idx * 70} threshold={0.04}>
                <Link
                  href={`/${locale}/solutions/${slug}`}
                  className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Card
                    variant="bordered"
                    hover
                    className="flex h-full flex-col group-hover:border-secondary/40 transition-colors"
                  >
                    <div className="flex-1">
                      <Badge variant="default" size="sm" className="mb-3">
                        {category}
                      </Badge>
                      <h3 className="font-heading font-semibold text-lg text-text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                        {t(`solutions.cards.${key}.title`)}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {t(`solutions.cards.${key}.description`)}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all dark:text-neutral-200">
                      {t('solutions.learnMore')}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
