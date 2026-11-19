import type { Metadata } from 'next'
import Link from 'next/link'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import Badge from '@/src/components/ui/Badge'
import { siteConfig } from '@/src/config/site'
import { CURRENT_CONSENT_VERSION } from '@/src/lib/tapbody/consent'
import { tapbodyWaitlistReady } from '@/src/lib/tapbody/env'
import BodyHero, { type BodyHeroLabels } from './_components/BodyHero'
import WaitlistForm, { type WaitlistLabels } from './_components/WaitlistForm'

interface TapBodyPageProps {
  params: Promise<{ locale: string }>
}

type TapBodyMessages = {
  tapbody: {
    regions: BodyHeroLabels['regions']
    form: WaitlistLabels & { soon: string }
    steps: { title: string; text: string }[]
    features: { title: string; text: string }[]
    faq: { q: string; a: string }[]
    privacyItems: string[]
  }
}

const card = 'rounded-3xl border border-neutral-200 bg-white p-6 dark:border-white/[0.08] dark:bg-[#111827]'

export async function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: TapBodyPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'tapbody' })
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/tapbody`,
      languages: Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/tapbody`])),
    },
    openGraph: { title: t('title'), description: t('description'), type: 'website' },
  }
}

export default async function TapBodyPage({ params }: TapBodyPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'tapbody' })
  const m = ((await getMessages({ locale })) as unknown as TapBodyMessages).tapbody
  const fill = (s: string) => s.replace('{address}', siteConfig.contact.address).replace('{contact}', siteConfig.contact.email)

  const heroLabels: BodyHeroLabels = {
    sided: t.raw('sided') as string,
    left: t('left'),
    right: t('right'),
    regions: m.regions,
    hint: t('hint'),
    bodyLabel: t('bodyLabel'),
    loading: t('loading'),
  }

  return (
    <>
      <style>{`@keyframes tbTag{from{opacity:0;transform:translate(-50%,-110%) scale(.96)}to{opacity:1;transform:translate(-50%,-140%) scale(1)}}`}</style>

      <section className="bg-neutral-50 pt-32 pb-16 dark:bg-secondary/30">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
          <div className="flex min-w-0 flex-col gap-5">
            <Badge variant="accent" size="sm" className="self-start">
              {t('eyebrow')}
            </Badge>
            <h1 className="font-heading text-5xl font-bold leading-tight text-text-primary sm:text-6xl">{t('appName')}</h1>
            <p className="font-heading text-2xl font-semibold leading-snug text-text-primary text-balance">{t('headline')}</p>
            <p className="max-w-xl text-lg leading-relaxed text-text-secondary">{t('lead')}</p>
            <div id="join" className="mt-2 max-w-xl scroll-mt-28">
              {tapbodyWaitlistReady() ? (
                <WaitlistForm labels={m.form} locale={locale} consentVersion={CURRENT_CONSENT_VERSION} source="awesoon-site" />
              ) : (
                <p className={`${card} text-text-secondary`}>{m.form.soon}</p>
              )}
            </div>
          </div>

          <figure
            className="relative h-[520px] min-w-0 overflow-hidden rounded-3xl border border-white/[0.08] sm:h-[600px]"
            style={{ background: 'radial-gradient(100% 70% at 50% 45%, #3A1420 0%, #160B10 55%, #0B0608 100%)' }}
          >
            <figcaption className="absolute left-5 top-4 z-10 font-mono text-[11px] uppercase tracking-[0.16em] text-[#C9ABA3]">{t('showcase')}</figcaption>
            <BodyHero labels={heroLabels} />
          </figure>
        </div>
      </section>

      <section className="bg-surface py-16" aria-labelledby="tb-steps">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="tb-steps" className="font-heading text-2xl font-bold text-text-primary">
            {t('stepsTitle')}
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {m.steps.map((s, i) => (
              <li key={s.title} className={card}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-heading font-semibold text-accent dark:bg-white/10 dark:text-[#7D9CCB]">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-text-secondary">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 dark:bg-secondary/30" aria-labelledby="tb-features">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="tb-features" className="font-heading text-2xl font-bold text-text-primary">
            {t('featuresTitle')}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {m.features.map((f) => (
              <li key={f.title} className={card}>
                <h3 className="font-heading text-lg font-semibold text-text-primary">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-text-secondary">{f.text}</p>
              </li>
            ))}
          </ul>
          <div className={`${card} mt-4`}>
            <h3 className="font-heading text-lg font-semibold text-text-primary">{t('neverTitle')}</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-text-secondary">{t('neverText')}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16" aria-labelledby="tb-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="tb-faq" className="font-heading text-2xl font-bold text-text-primary">
            {t('faqTitle')}
          </h2>
          <div className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-white/[0.08] dark:border-white/[0.08]">
            {m.faq.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 font-heading text-base font-semibold text-text-primary sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg className="h-5 w-5 flex-shrink-0 text-text-muted transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-text-secondary">{f.a}</p>
              </details>
            ))}
          </div>

          <section id="waitlist-privacy" className={`${card} mt-10 scroll-mt-28`} aria-labelledby="tb-privacy">
            <h2 id="tb-privacy" className="font-heading text-lg font-semibold text-text-primary">
              {t('privacyTitle')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
              {m.privacyItems.map((item) => (
                <li key={item}>{fill(item)}</li>
              ))}
            </ul>
            <Link href={`/${locale}/privacy`} className="mt-4 inline-block text-sm text-accent underline underline-offset-4 dark:text-[#7D9CCB] dark:hover:text-[#FAFAFA]">
              {t('privacyMore')}
            </Link>
          </section>

          <p className="mt-8 text-center text-xs text-text-muted">{t('disclaimer')}</p>
        </div>
      </section>
    </>
  )
}
