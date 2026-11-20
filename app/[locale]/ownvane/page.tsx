import type { Metadata } from 'next'
import Link from 'next/link'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { CURRENT_CONSENT_VERSION } from '@/src/lib/ownvane/consent'
import { ownvaneWaitlistReady } from '@/src/lib/ownvane/env'
import Journey from './_components/Journey'
import WaitlistForm, { type OwnvaneWaitlistLabels } from './_components/WaitlistForm'
import { geist } from './_components/fonts'
import './ownvane.css'

interface OwnvanePageProps {
  params: Promise<{ locale: string }>
}

type Item = { title: string; text: string }
type OwnvaneMessages = {
  title: string
  description: string
  ogTitle: string
  logoAlt: string
  hero: { titleA: string; titleB: string; lede: string; when: string; join: string }
  get: { title: string; sub: string; items: Item[] }
  ai: { title: string; items: string[]; never: string }
  ads: { title: string; sub: string; feeLabel: string; fee: string; noLead: string }
  plans: { title: string; per: string; items: { name: string; price: string; text: string }[]; terms: string }
  yours: { title: string; sub: string; cols: { title: string; items: string[] }[] }
  waitlist: { title: string; sub: string }
  form: OwnvaneWaitlistLabels & { soon: string }
  privacy: { title: string; items: string[]; more: string; owner: string }
  regions: Record<string, string>
  journey: { label: string; showMe: string; skip: string; next: string; back: string; progress: string; moves: string }
}

async function ownvaneMessages(locale: string) {
  return ((await getMessages({ locale })) as unknown as { ownvane: OwnvaneMessages }).ownvane
}

export async function generateStaticParams() {
  return siteConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: OwnvanePageProps): Promise<Metadata> {
  const { locale } = await params
  const m = await ownvaneMessages(locale)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/ownvane`,
      languages: { ...Object.fromEntries(siteConfig.locales.map((l) => [l, `${baseUrl}/${l}/ownvane`])), 'x-default': `${baseUrl}/en/ownvane` },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.description,
      type: 'website',
      url: `${baseUrl}/${locale}/ownvane`,
      siteName: 'Ownvane',
    },
    twitter: { card: 'summary', title: m.ogTitle, description: m.description },
  }
}

export default async function OwnvanePage({ params }: OwnvanePageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const m = await ownvaneMessages(locale)
  const fill = (s: string) => s.replaceAll('{address}', siteConfig.contact.address).replaceAll('{contact}', siteConfig.contact.email)
  const portal = m.get.items[2]
  const titles = [
    `${m.hero.titleA} ${m.hero.titleB}`,
    m.get.title,
    m.ads.title,
    m.ai.title,
    portal.title,
    m.journey.moves,
    m.plans.title,
    m.yours.title,
    m.waitlist.title,
  ]

  return (
    <Journey className={`ov ${geist.variable}`} labels={m.journey} titles={titles}>
      <header className="ov-bar">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/ownvane/ownvane-emblem-wordmark-night.svg" alt={m.logoAlt} width={120} height={14} />
        <a className="ov-skip" href="#waitlist">
          {m.journey.skip}
        </a>
      </header>

      <section className="ov-step ov-step-intro" id="intro" aria-labelledby="ov-t-intro">
        <h1 id="ov-t-intro">
          {m.hero.titleA} <span className="ov-sheen-word">{m.hero.titleB}</span>
        </h1>
        <p className="ov-lede">{m.hero.lede}</p>
        <p className="ov-when">{m.hero.when}</p>
        <div className="ov-actions">
          <a className="ov-btn" href="#home">
            {m.journey.showMe}
          </a>
          <a className="ov-quiet" href="#waitlist">
            {m.hero.join}
          </a>
        </div>
      </section>

      <section className="ov-step" id="home" aria-labelledby="ov-t-home">
        <h2 id="ov-t-home">{m.get.title}</h2>
        <p className="ov-sub">{m.get.sub}</p>
        <ul className="ov-list">
          {m.get.items.map((item) => (
            <li key={item.title}>
              <b>{item.title}</b> {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="ov-step" id="ads" aria-labelledby="ov-t-ads">
        <h2 id="ov-t-ads">{m.ads.title}</h2>
        <p className="ov-sub">{m.ads.sub}</p>
        <p className="ov-fee">
          <b>{m.ads.feeLabel}</b> {m.ads.fee} {m.ads.noLead}
        </p>
      </section>

      <section className="ov-step" id="ai" aria-labelledby="ov-t-ai">
        <h2 id="ov-t-ai">{m.ai.title}</h2>
        <ul className="ov-list">
          {m.ai.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="ov-sub">{m.ai.never}</p>
      </section>

      <section className="ov-step" id="portal" aria-labelledby="ov-t-portal">
        <h2 id="ov-t-portal">{portal.title}</h2>
        <p className="ov-sub">{portal.text}</p>
      </section>

      <section className="ov-step" id="moves" aria-labelledby="ov-t-moves">
        <h2 id="ov-t-moves">{m.journey.moves}</h2>
        <p className="ov-sub">{m.yours.sub}</p>
      </section>

      <section className="ov-step" id="plans" aria-labelledby="ov-t-plans">
        <h2 id="ov-t-plans">{m.plans.title}</h2>
        <dl className="ov-plans">
          {m.plans.items.map((p, i) => (
            <div key={p.name} className={i === 1 ? 'is-pro' : undefined}>
              <dt>{p.name}</dt>
              <dd className="ov-price">
                {p.price} <span>{m.plans.per}</span>
              </dd>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
        <p className="ov-terms">{m.plans.terms}</p>
      </section>

      <section className="ov-step" id="yours" aria-labelledby="ov-t-yours">
        <h2 id="ov-t-yours">{m.yours.title}</h2>
        <div className="ov-yours">
          {m.yours.cols.map((c, i) => (
            <div key={c.title} className={i === 0 ? 'is-own' : undefined}>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="ov-step ov-step-waitlist" id="waitlist" aria-labelledby="ov-waitlist-title">
        <h2 id="ov-waitlist-title" tabIndex={-1}>
          {m.waitlist.title}
        </h2>
        <p className="ov-sub">{m.waitlist.sub}</p>
        <div className="ov-form-wrap">
          {ownvaneWaitlistReady() ? (
            <WaitlistForm labels={m.form} regionNames={m.regions} locale={locale} consentVersion={CURRENT_CONSENT_VERSION} />
          ) : (
            <p className="ov-soon">{m.form.soon}</p>
          )}
        </div>
        <section id="waitlist-privacy" className="ov-privacy" aria-labelledby="ov-privacy-title">
          <h3 id="ov-privacy-title">{m.privacy.title}</h3>
          <ul>
            {m.privacy.items.map((item) => (
              <li key={item}>{fill(item)}</li>
            ))}
          </ul>
          <p className="ov-owner">
            <Link href={`/${locale}/privacy`}>{m.privacy.more}</Link>
          </p>
          <p className="ov-owner">{m.privacy.owner}</p>
        </section>
      </section>
    </Journey>
  )
}
