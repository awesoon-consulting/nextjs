import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import MultiStepForm from '@/src/components/forms/MultiStepForm'
import AnimateIn from '@/src/components/ui/AnimateIn'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="lg:sticky lg:top-24">
            <AnimateIn variant="slide-right" threshold={0.08}>
              <div>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4">
                  {t('title')}
                </h1>
                <p className="text-lg text-text-secondary mb-10">{t('subtitle')}</p>
              </div>
            </AnimateIn>

            {/* What to expect */}
            <div className="space-y-6">
              <AnimateIn variant="slide-right" delay={70} threshold={0.05}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 dark:bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent dark:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Discovery call</h3>
                    <p className="text-sm text-text-secondary">
                      We start with a 30-minute call to understand your operations and current challenges.
                    </p>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn variant="slide-right" delay={140} threshold={0.05}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 dark:bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent dark:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Free systems audit</h3>
                    <p className="text-sm text-text-secondary">
                      We map your current tech stack and workflows. You get a clear picture of where your operational complexity lives.
                    </p>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn variant="slide-right" delay={210} threshold={0.05}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 dark:bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent dark:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">No obligation</h3>
                    <p className="text-sm text-text-secondary">
                      No sales pressure, no pitch deck. We share our honest assessment and only move forward if we&apos;re a genuine fit.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Right: Form */}
          <AnimateIn variant="slide-left" delay={120} threshold={0.06}>
            <div className="rounded-2xl border border-neutral-200 bg-surface-elevated p-8 shadow-lg dark:border-white/10 dark:bg-primary dark:shadow-none">
              <MultiStepForm />
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
