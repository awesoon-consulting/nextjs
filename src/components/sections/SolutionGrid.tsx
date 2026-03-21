import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Card from '@/src/components/ui/Card'
import Badge from '@/src/components/ui/Badge'

const solutionKeys = [
  { key: 'opsOutgrown', category: 'Operations Strategy' },
  { key: 'spreadsheetOps', category: 'Infrastructure' },
  { key: 'systemIntegration', category: 'Integration' },
  { key: 'erpImplementation', category: 'ERP' },
  { key: 'crmImplementation', category: 'CRM' },
  { key: 'apiIntegrations', category: 'Integration' },
  { key: 'vendorManagement', category: 'Strategy' },
  { key: 'systemsAudit', category: 'Strategy' },
] as const

export default function SolutionGrid() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <section className="py-24 bg-neutral-50" aria-labelledby="solutions-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="solutions-title"
            className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4"
          >
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t('solutions.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutionKeys.map(({ key, category }) => {
            const slug = t(`solutions.cards.${key}.slug`)
            return (
              <Link
                key={key}
                href={`/${locale}/solutions/${slug}`}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xl"
              >
                <Card variant="bordered" hover className="h-full flex flex-col group-hover:border-secondary/40 transition-colors">
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
                  <div className="mt-4 flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
