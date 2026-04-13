import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import TeamGrid from '@/src/components/sections/TeamGrid'
import CTABlock from '@/src/components/sections/CTABlock'
import AnimateIn from '@/src/components/ui/AnimateIn'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })

  return {
    title: t('title'),
    description: t('hero.subtext'),
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'about' })

  const values = [0, 1, 2, 3] as const

  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-white pt-32 pb-20 dark:border-white/10 dark:bg-primary">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="mb-6 font-heading text-5xl font-bold text-text-primary dark:text-text-inverse sm:text-6xl">
              {t('hero.headline')}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-text-secondary dark:text-neutral-400">
              {t('hero.subtext')}
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Mission */}
      <section className="py-20 bg-surface">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl text-text-primary mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">{t('mission.text')}</p>
          </div>
        </AnimateIn>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50 dark:bg-secondary/30" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="slide-up" threshold={0.08}>
            <h2
              id="values-heading"
              className="font-heading font-bold text-4xl text-text-primary text-center mb-12"
            >
              {t('values.title')}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((idx) => (
              <AnimateIn key={idx} variant="slide-up" delay={idx * 80} threshold={0.04}>
                <div className="rounded-2xl border border-neutral-200 bg-surface-elevated p-8 shadow-sm dark:border-white/10 dark:bg-primary dark:shadow-none">
                  <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                    {t(`values.items.${idx}.title`)}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {t(`values.items.${idx}.description`)}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamGrid />

      {/* CTA */}
      <CTABlock />
    </>
  )
}
