'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { getDesignAssistantReply, matchDesignNeed, type DesignNeed } from '@/src/lib/assistant'
import { siteConfig } from '@/src/config/site'
import HeroArt from './HeroArt'

interface Message {
  id: number
  bot: boolean
  text: string
  options?: 'exist' | 'audience'
  brief?: boolean
  book?: boolean
}

const NEEDS: DesignNeed[] = ['brand', 'interface', 'system', 'graphics']
const EXIST = ['none', 'some', 'brand', 'product'] as const
const AUDIENCE = ['customers', 'team', 'both', 'public'] as const

export const DESIGN_ASK_EVENT = 'design-assistant-ask'

const chip =
  'inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-left text-sm text-neutral-200 transition-colors hover:border-white/25 hover:bg-white/[0.09] hover:text-white'
const primary =
  'inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]'
const secondary =
  'inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent'

export default function DesignHero() {
  const t = useTranslations('designPage')
  const locale = useLocale()
  const [messages, setMessages] = useState<Message[]>(() => [{ id: 0, bot: true, text: t('assistant.greeting') }])
  const [step, setStep] = useState(0)
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState('')
  const [need, setNeed] = useState<DesignNeed | undefined>()
  const [needLabel, setNeedLabel] = useState('')
  const [existLabel, setExistLabel] = useState('')
  const [audienceLabel, setAudienceLabel] = useState('')
  const [consent, setConsent] = useState(false)
  const [copied, setCopied] = useState(false)
  const idRef = useRef(1)
  const timers = useRef<number[]>([])
  const logRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const askRef = useRef<(text: string, picked?: DesignNeed) => void>(() => {})

  useEffect(() => {
    const list = timers.current
    return () => list.forEach((id) => window.clearTimeout(id))
  }, [])

  useEffect(() => {
    const el = logRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    const onAsk = (e: Event) => {
      const picked = (e as CustomEvent<DesignNeed>).detail
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      askRef.current(t(`assistant.chips.${picked}`), picked)
    }
    window.addEventListener(DESIGN_ASK_EVENT, onAsk)
    return () => window.removeEventListener(DESIGN_ASK_EVENT, onAsk)
  }, [t])

  function typeOut(full: string, extra: Omit<Message, 'id' | 'bot' | 'text'>) {
    const id = idRef.current++
    setTyping(false)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMessages((m) => [...m, { id, bot: true, text: full, ...extra }])
      return
    }
    setMessages((m) => [...m, { id, bot: true, text: '' }])
    let n = 0
    const tick = () => {
      n += 3
      const done = n >= full.length
      setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, text: full.slice(0, n), ...(done ? extra : {}) } : msg)))
      if (!done) timers.current.push(window.setTimeout(tick, 16))
    }
    tick()
  }

  async function ask(text: string, picked?: DesignNeed) {
    const clean = text.trim()
    if (!clean || typing) return
    let current = step
    let currentNeed = need
    if (step >= 3 || (picked && step > 0)) {
      current = 0
      setMessages((m) => m.filter((msg) => msg.id === 0))
    }
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    setTyping(true)
    const priceWords = t('assistant.priceWords').split(',').map((s) => s.trim().toLowerCase())
    if (current === 0) {
      currentNeed = picked ?? matchDesignNeed(clean)
      setNeed(currentNeed)
      setNeedLabel(clean)
    }
    const reply = await getDesignAssistantReply(current, currentNeed, picked ? '' : clean, priceWords)
    if (!reply.book) {
      if (current === 1) setExistLabel(clean)
      if (current === 2) setAudienceLabel(clean)
      setStep(current + 1)
    }
    const full = [reply.prefixKey ? t(`assistant.${reply.prefixKey}`) : '', t(`assistant.${reply.messageKey}`)].filter(Boolean).join(' ')
    timers.current.push(window.setTimeout(() => typeOut(full, { options: reply.options, brief: reply.brief, book: reply.book }), 600))
  }
  useEffect(() => {
    askRef.current = ask
  })

  function restart() {
    timers.current.forEach((id) => window.clearTimeout(id))
    setTyping(false)
    setStep(0)
    setNeed(undefined)
    setConsent(false)
    setMessages([{ id: idRef.current++, bot: true, text: t('assistant.greeting') }])
  }

  const buildText = t(`assistant.buildText.${need ?? 'system'}`)
  const briefRows = [
    [t('assistant.need'), needLabel],
    [t('assistant.today'), existLabel],
    [t('assistant.users'), audienceLabel],
    [t('assistant.build'), buildText],
    [t('assistant.keep'), t('assistant.keepText')],
  ]
  const briefText = `${t('assistant.briefLabel')}\n\n${briefRows.map(([k, v]) => `${k}: ${v}`).join('\n')}`

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(briefText)
      setCopied(true)
      timers.current.push(window.setTimeout(() => setCopied(false), 2000))
    } catch {
      setCopied(false)
    }
  }

  function sendToRay() {
    if (!consent) return
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(t('assistant.emailSubject'))}&body=${encodeURIComponent(briefText)}`
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    ask(draft)
  }

  const optionKeys = (o: 'exist' | 'audience') => (o === 'exist' ? EXIST : AUDIENCE)
  const last = messages[messages.length - 1]

  return (
    <section className="design-hero relative w-full overflow-hidden bg-[#0A0A0A] pt-20 pb-16 sm:pt-28 sm:pb-20" aria-labelledby="design-title">
      <div className="design-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[40%] right-[-10%] h-[620px] w-[820px] max-w-[160vw] opacity-[0.22]"
        style={{ background: 'radial-gradient(closest-side, #17304f, #0F1D33 50%, transparent)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-14">
        <div>
          <p className="text-sm font-semibold text-[#7D9CCB]">{t('hero.eyebrow')}</p>
          <h1 id="design-title" className="mt-3 font-heading text-[2.1rem] leading-[1.05] font-bold tracking-tight text-white sm:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed sm:mt-5 text-neutral-300 sm:text-lg">{t('hero.subtitle')}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
            <Link href={`/${locale}/contact`} className={`${primary} px-6 py-3.5 text-base`}>
              {t('hero.cta')}
            </Link>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 sm:mt-7">
            {(['trust1', 'trust2', 'trust3'] as const).map((k) => (
              <li key={k} className={`${k === 'trust3' ? 'hidden sm:flex' : 'flex'} items-center gap-2 text-sm text-neutral-300`}>
                <svg className="h-4 w-4 flex-shrink-0 text-[#7D9CCB]" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {t(`hero.${k}`)}
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden max-w-[420px] sm:block">
            <HeroArt label={t('hero.artLabel')} />
          </div>
        </div>

        <div ref={cardRef} id="design-assistant" className="scroll-mt-24 rounded-3xl border border-white/[0.08] bg-[#111827] shadow-[0_30px_80px_-30px_rgba(15,29,51,0.9)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <Image src="/images/retina-logo.png" alt="" width={24} height={24} />
              <p className="font-heading text-sm font-semibold text-white">{t('assistant.label')}</p>
            </div>
            {step > 0 && (
              <button type="button" onClick={restart} className="rounded-full px-2 py-1 text-xs font-medium text-neutral-400 hover:text-white">
                {t('assistant.restart')}
              </button>
            )}
          </div>
          <div ref={logRef} className="max-h-[480px] min-h-[220px] space-y-4 overflow-y-auto p-5" role="log" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`design-msg flex ${m.bot ? '' : 'justify-end'}`}>
                <div className={m.bot ? 'w-full' : 'max-w-[85%]'}>
                  <p
                    className={
                      m.bot
                        ? m.id === 0
                          ? 'font-heading text-xl font-semibold text-white'
                          : 'text-[15px] leading-relaxed text-white'
                        : 'rounded-[18px_18px_4px_18px] bg-white px-4 py-2.5 text-[15px] text-[#0A0A0A]'
                    }
                  >
                    {m.text}
                  </p>
                  {m.id === 0 && step === 0 && !typing && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {NEEDS.map((k) => (
                        <button key={k} type="button" onClick={() => ask(t(`assistant.chips.${k}`), k)} className={`${chip} design-chip justify-start gap-2.5 rounded-2xl py-3`}>
                          <NeedGlyph need={k} />
                          {t(`assistant.chips.${k}`)}
                        </button>
                      ))}
                    </div>
                  )}
                  {m.options && m === last && !typing && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {optionKeys(m.options).map((k) => (
                        <button key={k} type="button" onClick={() => ask(t(`assistant.${m.options}.${k}`))} className={chip}>
                          {t(`assistant.${m.options}.${k}`)}
                        </button>
                      ))}
                    </div>
                  )}
                  {m.brief && (
                    <div className="design-brief mt-4 rounded-2xl border border-[#7D9CCB]/40 bg-[#0A0A0A]/60 p-5">
                      <p className="text-xs font-semibold text-[#7D9CCB]">{t('assistant.briefLabel')}</p>
                      <dl className="mt-3 space-y-2.5">
                        {briefRows.map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-xs text-neutral-400">{k}</dt>
                            <dd className="text-sm text-white">{v}</dd>
                          </div>
                        ))}
                      </dl>
                      <button type="button" onClick={copyBrief} className="mt-4 text-sm font-semibold text-[#7D9CCB] underline-offset-4 hover:text-white hover:underline">
                        <span aria-live="polite">{copied ? t('assistant.copied') : t('assistant.copy')}</span>
                      </button>
                      <div className="mt-4 border-t border-white/10 pt-4">
                        <label className="flex cursor-pointer items-start gap-2.5 text-sm text-neutral-300">
                          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 flex-shrink-0 accent-[#7D9CCB]" />
                          {t('assistant.consent')}
                        </label>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Link href={`/${locale}/contact`} className={primary}>
                            {t('hero.cta')}
                          </Link>
                          <button type="button" onClick={sendToRay} disabled={!consent} className={secondary}>
                            {t('assistant.talk')}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {m.book && (
                    <div className="mt-3">
                      <Link href={`/${locale}/contact`} className={primary}>
                        {t('hero.cta')}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-1 py-1" role="status" aria-label={t('assistant.typing')}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-2 w-2 animate-pulse rounded-full bg-neutral-400" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            )}
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/[0.08] p-3">
            <label htmlFor="design-input" className="sr-only">
              {t('assistant.placeholder')}
            </label>
            <input
              id="design-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t('assistant.placeholder')}
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[15px] text-white placeholder:text-neutral-400 focus-visible:border-white/40"
            />
            <button
              type="submit"
              aria-label={t('assistant.send')}
              disabled={typing}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] disabled:opacity-60"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
          <p className="px-5 pb-4 text-xs text-neutral-400">{t('assistant.note')}</p>
        </div>
      </div>
    </section>
  )
}

export function NeedGlyph({ need, className = 'h-7 w-7' }: { need: DesignNeed; className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={`${className} flex-shrink-0`} aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="#0F1D33" />
      {need === 'brand' && (
        <>
          <circle cx="11" cy="14" r="5" fill="#7D9CCB" />
          <rect x="15" y="9" width="7" height="10" rx="2" fill="#00AEEF" />
        </>
      )}
      {need === 'interface' && (
        <>
          <rect x="7" y="7" width="14" height="14" rx="3" fill="none" stroke="#7D9CCB" strokeWidth="1.6" />
          <rect x="9.5" y="10" width="9" height="2" rx="1" fill="#00AEEF" />
          <rect x="9.5" y="14" width="6" height="2" rx="1" fill="#7D9CCB" />
        </>
      )}
      {need === 'system' && (
        <>
          <rect x="7" y="7" width="6" height="6" rx="1.5" fill="#00AEEF" />
          <rect x="15" y="7" width="6" height="6" rx="1.5" fill="#7D9CCB" />
          <rect x="7" y="15" width="6" height="6" rx="1.5" fill="#7D9CCB" />
          <rect x="15" y="15" width="6" height="6" rx="3" fill="#00AEEF" />
        </>
      )}
      {need === 'graphics' && (
        <>
          <path d="M7 20 L12 12 L16 17 L18 14 L21 20 Z" fill="#7D9CCB" />
          <circle cx="18" cy="9.5" r="2.2" fill="#00AEEF" />
        </>
      )}
    </svg>
  )
}
