import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getSolutionBySlug, getAllSolutionSlugs } from '@/src/data/solutions'
import { siteConfig } from '@/src/config/site'
import CTABlock from '@/src/components/sections/CTABlock'
import Badge from '@/src/components/ui/Badge'
import Button from '@/src/components/ui/Button'
import AnimateIn from '@/src/components/ui/AnimateIn'

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
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}

  const t = await getTranslations({ locale })

  return {
    title: t(solution.titleKey as Parameters<typeof t>[0]),
    description: solution.problemHeadline,
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { locale, slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) notFound()

  const t = await getTranslations({ locale })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 bg-white pt-32 pb-20 dark:border-white/10 dark:bg-primary">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-sol" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F1D33" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-sol)" />
          </svg>
        </div>
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href={`/${locale}/solutions`}
                className="flex items-center gap-1 rounded text-sm text-text-muted transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-neutral-400 dark:hover:text-text-inverse"
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
            <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-text-primary dark:text-text-inverse sm:text-5xl">
              {solution.problemHeadline}
            </h1>
            <p className="mb-8 text-lg text-text-secondary dark:text-neutral-400">
              {t(solution.descriptionKey as Parameters<typeof t>[0])}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button variant="primary" size="lg">
                {solution.ctaText}
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* Content */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Pain Points */}
              <AnimateIn variant="slide-up" threshold={0.04}>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                    Does This Sound Familiar?
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
              </AnimateIn>

              {/* What We Do */}
              <AnimateIn variant="slide-up" delay={100} threshold={0.04}>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                    What We Do
                  </h2>
                  <ol className="space-y-4" role="list">
                    {solution.whatWeDo.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center mt-0.5">
                          <span className="font-heading font-bold text-sm text-secondary">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-text-secondary pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimateIn>

              {/* Outcomes */}
              <AnimateIn variant="slide-up" delay={180} threshold={0.04}>
                <div>
                  <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">
                    What You Get
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
              </AnimateIn>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <AnimateIn variant="slide-left" delay={120} threshold={0.04}>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-lg dark:border-white/10 dark:bg-primary dark:shadow-none">
                  <h3 className="mb-3 font-heading text-xl font-bold text-text-primary dark:text-text-inverse">
                    Ready to get started?
                  </h3>
                  <p className="mb-6 text-sm text-text-secondary dark:text-neutral-400">
                    Start with a free systems audit. No pitch deck, no pressure.
                  </p>
                  <Link href={`/${locale}/contact`}>
                    <Button variant="primary" size="md" fullWidth>
                      {solution.ctaText}
                    </Button>
                  </Link>
                  </div>
                </AnimateIn>

                {solution.relatedSlugs.length > 0 && (
                  <AnimateIn variant="slide-left" delay={220} threshold={0.04}>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                      Related Solutions
                    </h4>
                    <div className="space-y-2">
                      {solution.relatedSlugs.map((relSlug) => {
                        const related = getSolutionBySlug(relSlug)
                        if (!related) return null
                        return (
                          <Link
                            key={relSlug}
                            href={`/${locale}/solutions/${relSlug}`}
                            className="block rounded-lg border border-neutral-200 p-3 text-sm font-medium text-text-secondary transition-colors hover:border-secondary/40 hover:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary dark:border-white/10 dark:text-neutral-300 dark:hover:border-white/20 dark:hover:text-white"
                          >
                            {t(related.titleKey as Parameters<typeof t>[0])}
                          </Link>
                        )
                      })}
                    </div>
                  </AnimateIn>
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
