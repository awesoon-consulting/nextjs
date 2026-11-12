'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import { useTranslations } from 'next-intl'
import type { ChangeItem } from '@/src/lib/cost-platform/calendar'
import { card } from './ui'

function Item({ i, locale }: { i: ChangeItem; locale: string }) {
  const t = useTranslations('costPlatform.calendar')
  const d = new Date(i.published)
  const part = (o: Intl.DateTimeFormatOptions) => d.toLocaleDateString(locale, { ...o, timeZone: 'UTC' })
  return (
    <li className="flex gap-4 border-t border-white/10 py-4 first:border-t-0">
      <time dateTime={i.published} className="flex w-14 flex-shrink-0 flex-col items-center rounded-xl bg-white/[0.04] py-2 text-center">
        <span className="text-[11px] font-semibold text-[#9DB6DC] uppercase">{part({ month: 'short' })}</span>
        <span className="font-heading text-xl font-semibold text-white tabular-nums">{part({ day: 'numeric' })}</span>
        <span className="text-[11px] text-neutral-400 tabular-nums">{part({ year: 'numeric' })}</span>
      </time>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-white">{i.vendor}</span>
          <span className={`rounded-full px-2 py-0.5 font-semibold ${i.kind === 'status' ? 'bg-[#3B1D1D] text-[#FCA5A5]' : 'bg-[#0F1D33] text-[#9DB6DC]'}`}>{t(`kind.${i.kind}`)}</span>
        </div>
        <p className="mt-1.5 leading-snug break-words text-neutral-100">{i.title}</p>
        {i.url && (
          <a
            href={i.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex min-h-8 items-center text-sm text-neutral-400 underline decoration-white/25 underline-offset-4 transition-colors hover:text-[#9DB6DC] hover:decoration-[#9DB6DC]"
          >
            {t('read')}
            <span className="sr-only">: {i.title}</span>
          </a>
        )}
      </div>
    </li>
  )
}

export default function CalendarView({ locale, upcoming, recent, vendors, days, email }: { locale: string; upcoming: ChangeItem[]; recent: ChangeItem[]; vendors: string[]; days: number; email: string }) {
  const t = useTranslations('costPlatform.calendar')
  const [vendor, setVendor] = useState<string | null>(null)
  const [picked, setPicked] = useState<string[]>([])
  const [consent, setConsent] = useState(false)
  const [shown, setShown] = useState(20)
  const consentId = useId()
  const f = (l: ChangeItem[]) => (vendor ? l.filter((i) => i.vendor === vendor) : l)
  const up = f(upcoming)
  const rec = f(recent)
  const pill = (on: boolean) =>
    `min-h-11 rounded-full px-4 text-sm font-semibold transition-colors ${on ? 'bg-white text-[#0A0A0A]' : 'border border-white/15 text-neutral-200 hover:border-white/35 hover:bg-white/[0.06]'}`
  const mailto = `mailto:${email}?subject=${encodeURIComponent(t('mailSubject'))}&body=${encodeURIComponent(t('mailBody', { platforms: (picked.length ? picked : vendors).join(', ') }))}`

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div role="group" aria-label={t('filter')} className="flex flex-wrap gap-2">
        <button type="button" aria-pressed={vendor === null} onClick={() => { setVendor(null); setShown(20) }} className={pill(vendor === null)}>
          {t('all')}
        </button>
        {vendors.map((v) => (
          <button key={v} type="button" aria-pressed={vendor === v} onClick={() => { setVendor(v); setShown(20) }} className={pill(vendor === v)}>
            {v}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8">
          <div className={`${card} p-6 sm:p-7`}>
            <h2 className="font-heading text-xl font-semibold text-white">{t('upcoming')}</h2>
            {up.length ? (
              <ul className="mt-3">
                {up.map((i) => (
                  <Item key={i.id} i={i} locale={locale} />
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-neutral-400">{t('upcomingNone')}</p>
            )}
          </div>
          <div className={`${card} p-6 sm:p-7`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-heading text-xl font-semibold text-white">{t('recent', { days })}</h2>
              <p className="text-sm text-neutral-400" aria-live="polite">
                {t('count', { count: rec.length })}
              </p>
            </div>
            <ul className="mt-3">
              {rec.slice(0, shown).map((i) => (
                <Item key={i.id} i={i} locale={locale} />
              ))}
            </ul>
            {rec.length > shown && (
              <button type="button" onClick={() => setShown(shown + 20)} className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.08]">
                {t('more', { count: Math.min(20, rec.length - shown) })}
              </button>
            )}
          </div>
        </div>

        <div className={`${card} p-6 sm:p-7 lg:sticky lg:top-24`}>
          <h2 className="font-heading text-xl font-semibold text-white">{t('subTitle')}</h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">{t('subText')}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {vendors.map((v) => {
              const on = picked.includes(v)
              return (
                <button key={v} type="button" aria-pressed={on} onClick={() => setPicked(on ? picked.filter((x) => x !== v) : [...picked, v])} className={pill(on)}>
                  {v}
                </button>
              )
            })}
          </div>
          <div className="mt-5 flex items-start gap-3">
            <input id={consentId} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer accent-[#9DB6DC]" />
            <label htmlFor={consentId} className="cursor-pointer text-sm leading-relaxed text-neutral-300">
              {t('subConsent')}{' '}
              <Link href={`/${locale}/privacy`} className="underline underline-offset-4 transition-colors hover:text-[#9DB6DC]">
                {t('privacy')}
              </Link>
              .
            </label>
          </div>
          {consent ? (
            <a href={mailto} className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]">
              {t('subButton')}
            </a>
          ) : (
            <button type="button" aria-disabled="true" aria-describedby={`${consentId}-hint`} className="mt-5 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-white/10 px-6 font-semibold text-neutral-300">
              {t('subButton')}
            </button>
          )}
          {!consent && (
            <p id={`${consentId}-hint`} className="mt-2 text-xs text-neutral-400">
              {t('subNeedConsent')}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
