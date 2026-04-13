import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { getAllSolutionSlugs, getLocalizedSolutionBySlug } from '@/src/data/solutions'
import { getInsightBySlug } from '@/src/data/insights'
import { getPlatformsForSolution } from '@/src/data/platforms'
import { siteConfig } from '@/src/config/site'
import CTABlock from '@/src/components/sections/CTABlock'
import PlatformStack from '@/src/components/sections/PlatformStack'
import Badge from '@/src/components/ui/Badge'
import Button from '@/src/components/ui/Button'

interface SolutionPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs()
  return siteConfig.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const solution = getLocalizedSolutionBySlug(slug, locale)
  if (!solution) return {}

  const t = await getTranslations({ locale })

  return {
    title: t(solution.titleKey as Parameters<typeof t>[0]),
    description: solution.seoSummary,
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const solution = getLocalizedSolutionBySlug(slug, locale)

  if (!solution) notFound()

  const t = await getTranslations({ locale })
  const platforms = getPlatformsForSolution(slug)

  return (
    <>
      <section className="bg-neutral-50 pt-32 pb-20 relative overflow-hidden dark:bg-secondary/30">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-sol" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1C4E80" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-sol)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href={`/${locale}/solutions`}
              className="text-sm text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('solutions.title')}
            </Link>
          </div>
          <Badge variant="accent" size="sm" className="mb-4">
            {solution.category}
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4 leading-tight">
            {solution.problemHeadline}
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            {t(solution.descriptionKey as Parameters<typeof t>[0])}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button variant="primary" size="lg">
              {solution.ctaText}
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                  {t('solutionPage.painPointsTitle')}
                </h2>
                <ul className="space-y-3" role="list">
                  {solution.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-error-light flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-error" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-text-secondary">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                  {t('solutionPage.whatWeDoTitle')}
                </h2>
                <ol className="space-y-4" role="list">
                  {solution.whatWeDo.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 dark:bg-white/10 border-2 border-secondary/20 dark:border-white/20 flex items-center justify-center mt-0.5">
                        <span className="font-heading font-bold text-sm text-secondary dark:text-white">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-text-secondary pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {platforms.length > 0 && (
                <PlatformStack
                  platforms={platforms}
                  heading={t('solutionPage.platformsTitle')}
                  subheading={t('solutionPage.platformsSubtitle')}
                  tapHint={t('solutionPage.platformsTapHint')}
                />
              )}

              <div>
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                  {t('solutionPage.outcomesTitle')}
                </h2>
                <ul className="space-y-3" role="list">
                  {solution.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-light flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-text-secondary">{outcome}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-primary rounded-2xl p-6 text-center">
                  <h3 className="font-heading font-bold text-xl text-text-inverse mb-3">
                    {t('solutionPage.sidebarTitle')}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-6">
                    {t('solutionPage.sidebarText')}
                  </p>
                  <Link href={`/${locale}/contact`}>
                    <Button variant="primary" size="md" fullWidth>
                      {solution.ctaText}
                    </Button>
                  </Link>
                </div>

                {solution.relatedSlugs.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                      {t('solutionPage.relatedSolutions')}
                    </h4>
                    <div className="space-y-2">
                      {solution.relatedSlugs.map((relSlug) => {
                        const related = getLocalizedSolutionBySlug(relSlug, locale)
                        if (!related) return null
                        return (
                          <Link
                            key={relSlug}
                            href={`/${locale}/solutions/${relSlug}`}
                            className="block p-3 rounded-lg border border-neutral-200 hover:border-secondary/40 transition-colors text-sm font-medium text-text-secondary hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                          >
                            {t(related.titleKey as Parameters<typeof t>[0])}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}

                {solution.relatedInsightSlugs.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                      {t('solutionPage.relatedInsights')}
                    </h4>
                    <div className="space-y-2">
                      {solution.relatedInsightSlugs.map((insightSlug) => {
                        const relatedInsight = getInsightBySlug(insightSlug)
                        if (!relatedInsight) return null
                        return (
                          <Link
                            key={insightSlug}
                            href={`/${locale}/insights/${insightSlug}`}
                            className="block rounded-lg border border-neutral-200 p-3 text-sm font-medium text-text-secondary transition-colors hover:border-secondary/40 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                          >
                            {relatedInsight.title}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  )
}
