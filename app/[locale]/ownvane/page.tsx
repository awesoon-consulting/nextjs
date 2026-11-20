import type { Metadata } from 'next'
import Link from 'next/link'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import { CURRENT_CONSENT_VERSION } from '@/src/lib/ownvane/consent'
import { ownvaneWaitlistReady } from '@/src/lib/ownvane/env'
import Street from './_components/Street'
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
  byline: string
  nav: { label: string; get: string; ai: string; plans: string; join: string }
  hero: { titleA: string; titleB: string; lede: string; when: string; join: string; figureLabel: string; url: string; rows: (Item & { tag: string })[] }
  get: { title: string; sub: string; items: Item[] }
  ai: { title: string; items: string[]; never: string; figureLabel: string; url: string; who: string; msg1: string; msg2: string; msg3: string; handoff: string }
  ads: { title: string; sub: string; feeLabel: string; fee: string; noLead: string; flowLabel: string; flow: string[] }
  plans: { title: string; per: string; items: { name: string; price: string; text: string }[]; terms: string }
  yours: { title: string; sub: string; cols: { title: string; items: string[] }[] }
  waitlist: { title: string; sub: string }
  form: OwnvaneWaitlistLabels & { soon: string }
  privacy: { title: string; items: string[]; more: string; owner: string }
  regions: Record<string, string>
}

async function ownvaneMessages(locale: string) {
  return ((await getMessages({ locale })) as unknown as { ownvane: OwnvaneMessages }).ownvane
}

const GET_ICONS = [
  <path key="a" d="M4 7h24v18H4zM4 12h24" />,
  <g key="b">
    <path d="M5 8h22M5 16h22M5 24h14" />
    <circle cx="25" cy="24" r="2" />
  </g>,
  <g key="c">
    <path d="M6 15 16 6l10 9v11H6z" />
    <path d="M13 26v-7h6v7" />
  </g>,
  <g key="d">
    <path d="M8 4h12l5 5v19H8z" />
    <path d="M12 22c3-4 5 2 8-2" />
  </g>,
  <path key="e" d="M5 8h22v18H5zM5 13h22M11 5v6M21 5v6" />,
  <path key="f" d="M5 5h9v9H5zM18 5h9v9h-9zM5 18h9v9H5zM18 18h9v9h-9z" />,
]

function Arrow() {
  return (
    <svg width="48" height="16" viewBox="0 0 48 16" aria-hidden="true">
      <path d="M2 8h40M36 3l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
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

  return (
    <div className={`ov ${geist.variable}`}>
      <header className="ov-bar">
        <div className="ov-wrap">
          <a className="ov-logo" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ownvane/ownvane-emblem-wordmark-night.svg" alt={m.logoAlt} width={120} height={14} />
            <span>{m.byline}</span>
          </a>
          <nav className="ov-menu" aria-label={m.nav.label}>
            <a className="ov-hide-s" href="#what-you-get">
              {m.nav.get}
            </a>
            <a className="ov-hide-s" href="#ai">
              {m.nav.ai}
            </a>
            <a className="ov-hide-s" href="#plans">
              {m.nav.plans}
            </a>
            <a className="ov-join" href="#waitlist">
              {m.nav.join}
            </a>
          </nav>
        </div>
      </header>

      <section className="ov-hero" id="top" aria-labelledby="ov-hero-title">
        <Street />
        <div className="ov-wrap">
          <div>
            <h1 id="ov-hero-title">
              {m.hero.titleA} <span className="ov-sheen-word">{m.hero.titleB}</span>
            </h1>
            <p className="ov-lede">{m.hero.lede}</p>
            <p className="ov-when">{m.hero.when}</p>
            <div className="ov-actions">
              <a className="ov-btn ov-btn-sheen" href="#waitlist">
                {m.hero.join}
              </a>
            </div>
          </div>
          <figure className="ov-product" aria-label={m.hero.figureLabel}>
            <div className="ov-product-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span className="ov-url">{m.hero.url}</span>
            </div>
            <ol>
              {m.hero.rows.map((r, i) => (
                <li key={r.title}>
                  <span className={i < 2 ? 'ov-dot' : 'ov-dot is-off'} />
                  <div>
                    <b>{r.title}</b>
                    <span>{r.text}</span>
                  </div>
                  <em>{r.tag}</em>
                </li>
              ))}
            </ol>
          </figure>
        </div>
      </section>

      <section className="ov-band" id="what-you-get" aria-labelledby="ov-get-title">
        <div className="ov-wrap">
          <h2 id="ov-get-title">{m.get.title}</h2>
          <p className="ov-sub">{m.get.sub}</p>
          <ul className="ov-gets">
            {m.get.items.map((item, i) => (
              <li key={item.title}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  {GET_ICONS[i]}
                </svg>
                <b>{item.title}</b>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ov-band" id="ai" aria-labelledby="ov-ai-title">
        <div className="ov-wrap ov-split">
          <div>
            <h2 id="ov-ai-title">{m.ai.title}</h2>
            <ul className="ov-ai-list">
              {m.ai.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="ov-never">{m.ai.never}</p>
          </div>
          <figure className="ov-product" aria-label={m.ai.figureLabel}>
            <div className="ov-product-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span className="ov-url">{m.ai.url}</span>
            </div>
            <div className="ov-chat">
              <span className="ov-who">{m.ai.who}</span>
              <p className="ov-msg is-ai">{m.ai.msg1}</p>
              <p className="ov-msg is-them">{m.ai.msg2}</p>
              <span className="ov-who">{m.ai.who}</span>
              <p className="ov-msg is-ai">{m.ai.msg3}</p>
              <span className="ov-handoff">
                <span className="ov-dot" />
                {m.ai.handoff}
              </span>
            </div>
          </figure>
        </div>
      </section>

      <section className="ov-band" id="ad-engine" aria-labelledby="ov-ads-title">
        <div className="ov-wrap">
          <h2 id="ov-ads-title">{m.ads.title}</h2>
          <p className="ov-sub">{m.ads.sub}</p>
          <p className="ov-fee">
            <b>{m.ads.feeLabel}</b> {m.ads.fee} {m.ads.noLead}
          </p>
          <div className="ov-flow" role="img" aria-label={m.ads.flowLabel}>
            <span className="is-own">{m.ads.flow[0]}</span>
            <Arrow />
            <span>{m.ads.flow[1]}</span>
            <Arrow />
            <span className="is-own">{m.ads.flow[2]}</span>
          </div>
        </div>
      </section>

      <section className="ov-band" id="plans" aria-labelledby="ov-plans-title">
        <div className="ov-wrap">
          <h2 id="ov-plans-title">{m.plans.title}</h2>
          <div className="ov-plans">
            {m.plans.items.map((p, i) => (
              <div key={p.name} className={i === 1 ? 'ov-plan is-pro' : 'ov-plan'}>
                <h3>{p.name}</h3>
                <span className={i === 2 ? 'ov-price is-range' : 'ov-price'}>{p.price}</span>
                <span className="ov-per">{m.plans.per}</span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <p className="ov-terms">{m.plans.terms}</p>
        </div>
      </section>

      <section className="ov-band" id="yours" aria-labelledby="ov-yours-title">
        <div className="ov-wrap">
          <h2 id="ov-yours-title">{m.yours.title}</h2>
          <p className="ov-sub">{m.yours.sub}</p>
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
        </div>
      </section>

      <section className="ov-band ov-waitlist" id="waitlist" aria-labelledby="ov-waitlist-title">
        <div className="ov-wrap">
          <div className="ov-split">
            <div>
              <h2 id="ov-waitlist-title">{m.waitlist.title}</h2>
              <p className="ov-sub">{m.waitlist.sub}</p>
            </div>
            <div>
              {ownvaneWaitlistReady() ? (
                <WaitlistForm labels={m.form} regionNames={m.regions} locale={locale} consentVersion={CURRENT_CONSENT_VERSION} />
              ) : (
                <p className="ov-soon">{m.form.soon}</p>
              )}
            </div>
          </div>

          <section id="waitlist-privacy" className="ov-privacy" aria-labelledby="ov-privacy-title">
            <h3 id="ov-privacy-title">{m.privacy.title}</h3>
            <ul>
              {m.privacy.items.map((item) => (
                <li key={item}>{fill(item)}</li>
              ))}
            </ul>
            <p className="ov-owner">
              <Link href={`/${locale}/privacy`} className="ov-text-link">
                {m.privacy.more}
              </Link>
            </p>
            <p className="ov-owner">{m.privacy.owner}</p>
          </section>
        </div>
      </section>
    </div>
  )
}
