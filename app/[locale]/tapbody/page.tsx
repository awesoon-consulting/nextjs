import type { Metadata } from 'next'
import { Manrope, Unbounded } from 'next/font/google'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { CURRENT_CONSENT_VERSION } from '@/src/lib/tapbody/consent'
import BodyHero, { type BodyHeroLabels } from './_components/BodyHero'
import WaitlistForm, { type WaitlistLabels } from './_components/WaitlistForm'

// TapBody keeps its own look on this page (warm plum, apricot to rose, lime), separate from Awesoon's brand.
const display = Unbounded({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-tb-display' })
const text = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-tb-text' })

interface TapBodyPageProps {
  params: Promise<{ locale: string }>
}

type TapBodyMessages = {
  tapbody: {
    regions: BodyHeroLabels['regions']
    form: Omit<WaitlistLabels, 'consent'> & { consent: string }
    steps: { title: string; text: string }[]
    features: { title: string; text: string }[]
    faq: { q: string; a: string }[]
  }
}

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

const panel = 'rounded-3xl border border-white/10 bg-white/[0.04] p-6'

export default async function TapBodyPage({ params }: TapBodyPageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'tapbody' })
  const m = ((await getMessages({ locale })) as unknown as TapBodyMessages).tapbody

  const heroLabels: BodyHeroLabels = {
    sided: t.raw('sided') as string,
    left: t('left'),
    right: t('right'),
    regions: m.regions,
    hint: t('hint'),
    bodyLabel: t('bodyLabel'),
    loading: t('loading'),
  }
  const formLabels: WaitlistLabels = {
    ...m.form,
    consent: t('form.consent', { address: siteConfig.contact.address, contact: siteConfig.contact.email }),
  }

  return (
    <div
      className={`${display.variable} ${text.variable} bg-[#120B0E] text-[#F8EFEB]`}
      style={{ fontFamily: 'var(--font-tb-text), system-ui, sans-serif' }}
    >
      <style>{`@keyframes tbTag{from{opacity:0;transform:translate(-50%,-110%) scale(.96)}to{opacity:1;transform:translate(-50%,-140%) scale(1)}}`}</style>

      <section className="relative overflow-hidden pt-28 pb-16" style={{ background: 'radial-gradient(90% 70% at 72% 42%, #3A1420 0%, #160B10 50%, #0B0608 100%)' }}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
          <div className="flex min-w-0 flex-col gap-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#C9ABA3]">{t('eyebrow')}</p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.12] sm:text-5xl" style={{ fontFamily: 'var(--font-tb-display), sans-serif' }}>
              {t('headline')}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#E3CFC8]">{t('lead')}</p>
            <div id="join" className="max-w-xl scroll-mt-28">
              <WaitlistForm labels={formLabels} locale={locale} consentVersion={CURRENT_CONSENT_VERSION} source="awesoon-site" />
            </div>
          </div>
          <div className="h-[520px] min-w-0 sm:h-[640px]">
            <BodyHero labels={heroLabels} />
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="tb-steps">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="tb-steps" className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: 'var(--font-tb-display), sans-serif' }}>
            {t('stepsTitle')}
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {m.steps.map((s, i) => (
              <li key={s.title} className={panel}>
                <p className="font-semibold" style={{ fontFamily: 'var(--font-tb-display), sans-serif', color: ['#FFB36B', '#FF8A74', '#FF5C8A'][i] }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-[#D9C2BC]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1C1015] py-16" aria-labelledby="tb-features">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="tb-features" className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: 'var(--font-tb-display), sans-serif' }}>
            {t('featuresTitle')}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {m.features.map((f) => (
              <li key={f.title} className={panel}>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-[#D9C2BC]">{f.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-3xl border border-[#CCFF4D]/30 bg-[#CCFF4D]/[0.06] p-6">
            <h3 className="text-lg font-bold">{t('neverTitle')}</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-[#E3CFC8]">{t('neverText')}</p>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="tb-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="tb-faq" className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: 'var(--font-tb-display), sans-serif' }}>
            {t('faqTitle')}
          </h2>
          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {m.faq.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold sm:text-lg [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg className="h-5 w-5 shrink-0 text-[#C9ABA3] transition-transform group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-[#D9C2BC]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-[#C2A4A8]">{t('disclaimer')}</p>
        </div>
      </section>
    </div>
  )
}
