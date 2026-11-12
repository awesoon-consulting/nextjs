'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { BID_CATEGORIES, COUNTRIES, COUNTRY_SCHEMES, type Country } from '@/src/data/public-sector'

interface Message {
  id: number
  bot: boolean
  text: string
  matches?: string[]
  country?: Country | 'all'
}

const STARTERS = ['erp', 'it', 'crm', 'staff', 'creative'] as const

export const chipClass = (on: boolean) =>
  `inline-flex min-h-10 items-center rounded-full border px-3.5 py-2 text-sm transition-colors ${
    on
      ? 'border-white bg-white font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]'
      : 'border-white/10 bg-white/5 text-neutral-300 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white'
  }`

export default function ProcurementAssistant() {
  const t = useTranslations('publicSector')
  const locale = useLocale()
  const [messages, setMessages] = useState<Message[]>(() => [{ id: 0, bot: true, text: t('assistant.greeting') }])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const [country, setCountry] = useState<Country | 'all'>('all')
  const idRef = useRef(1)
  const logRef = useRef<HTMLDivElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  useEffect(() => {
    const el = logRef.current
    if (el && messages.length > 1) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function match(text: string) {
    const q = text.toLowerCase()
    const hits = BID_CATEGORIES.map(({ slug }) => {
      const words = t(`categories.items.${slug}.keywords`).split(',').map((w) => w.trim().toLowerCase()).filter(Boolean)
      const name = t(`categories.items.${slug}.name`).toLowerCase()
      const score = words.filter((w) => q.includes(w)).length + (q.includes(name) ? 3 : 0)
      return { slug, score }
    })
      .filter((h) => h.score > 0)
      .sort((a, b) => b.score - a.score)
    return hits.slice(0, 3).map((h) => h.slug)
  }

  function ask(text: string) {
    const clean = text.trim()
    if (!clean || typing) return
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    const matches = match(clean)
    const reply: Message = {
      id: idRef.current++,
      bot: true,
      text: matches.length ? t('assistant.matchIntro') : t('assistant.noMatch'),
      matches: matches.length ? matches : ['it-expert-services'],
      country,
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMessages((m) => [...m, reply])
      return
    }
    setTyping(true)
    timer.current = window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, reply])
    }, 650)
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    ask(draft)
  }

  function reset() {
    window.clearTimeout(timer.current)
    setTyping(false)
    setMessages([{ id: idRef.current++, bot: true, text: t('assistant.greeting') }])
  }

  const started = messages.length > 1
  const primaryBtn =
    'inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-center py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]'
  const ghostBtn =
    'inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 text-center py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]'

  return (
    <div className="ps-rise rounded-3xl border border-white/[0.08] bg-[#111827] shadow-[0_30px_80px_-30px_rgba(15,29,51,0.9)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5 sm:px-6">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="ps-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00AEEF]" />
          </span>
          {t('assistant.label')}
        </p>
        {started && (
          <button type="button" onClick={reset} className="rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white">
            {t('assistant.reset')}
          </button>
        )}
      </div>

      <div className="border-b border-white/10 px-5 py-3 sm:px-6">
        <p id="ps-country-label" className="mb-2 text-xs font-semibold text-neutral-400">
          {t('assistant.countryLabel')}
        </p>
        <div role="group" aria-labelledby="ps-country-label" className="flex flex-wrap gap-2">
          {(['all', ...COUNTRIES] as const).map((c) => (
            <button key={c} type="button" aria-pressed={country === c} onClick={() => setCountry(c)} className={chipClass(country === c)}>
              {t(`assistant.countries.${c}`)}
            </button>
          ))}
        </div>
      </div>

      <div ref={logRef} className="max-h-[420px] space-y-5 overflow-y-auto p-5 sm:p-6" role="log" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={`ps-msg flex items-start gap-3 ${m.bot ? '' : 'justify-end'}`}>
            {m.bot && <Image src="/images/retina-logo.png" alt="" width={28} height={28} className="mt-0.5 flex-shrink-0" />}
            <div className={m.bot ? 'min-w-0 flex-1' : 'max-w-[85%]'}>
              <p
                className={
                  m.bot
                    ? 'pt-0.5 text-base leading-relaxed text-white'
                    : 'rounded-[18px_18px_4px_18px] bg-white px-4 py-3 text-base leading-normal text-[#0A0A0A]'
                }
              >
                {m.text}
              </p>
              {m.matches && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <ul className="space-y-2">
                    {m.matches.map((slug) => (
                      <li key={slug} className="flex items-start gap-2.5 text-sm text-white">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00AEEF]" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                        <span>
                          <span className="block font-semibold">{t(`categories.items.${slug}.name`)}</span>
                          <span className="block text-neutral-300">{t(`categories.items.${slug}.service`)}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  {m.country && m.country !== 'all' && (
                    <p className="mt-3 text-sm text-neutral-400">
                      {t('assistant.schemes', { country: t(`assistant.countries.${m.country}`), schemes: COUNTRY_SCHEMES[m.country].join(', ') })}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <Link href={`/${locale}/public-sector/capability-statement?c=${m.matches.join(',')}`} className={primaryBtn}>
                      {t('assistant.statementCta')}
                    </Link>
                    <Link href={`/${locale}/contact`} className={ghostBtn}>
                      {t('assistant.callCta')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-3" role="status" aria-label={t('assistant.typing')}>
            <Image src="/images/retina-logo.png" alt="" width={28} height={28} />
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-2 animate-pulse rounded-full bg-neutral-400" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 p-4 sm:p-5">
        {!started && (
          <div className="order-2 flex flex-wrap gap-2" role="group" aria-label={t('assistant.startersLabel')}>
            {STARTERS.map((k) => (
              <button key={k} type="button" onClick={() => ask(t(`assistant.starters.${k}`))} className={chipClass(false)}>
                {t(`assistant.starters.${k}`)}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={onSubmit}
          className="order-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pr-1.5 pl-5 focus-within:border-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#7D9CCB]"
        >
          <label htmlFor="ps-assistant-input" className="sr-only">
            {t('assistant.placeholder')}
          </label>
          <input
            id="ps-assistant-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t('assistant.placeholder')}
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent py-2 text-base text-white placeholder:text-neutral-400 focus-visible:outline-none!"
          />
          <button
            type="submit"
            aria-label={t('assistant.send')}
            disabled={typing}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5] disabled:opacity-60"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
        <p className="order-3 text-xs text-neutral-400">{t('assistant.privacy')}</p>
      </div>
    </div>
  )
}
