'use client'

import { useEffect, useEffectEvent, useRef, useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { getGuidedReply, type GuidedStep } from '@/src/lib/assistant'
import { chip, mid, primaryBtn } from './ui'

interface Message {
  id: number
  bot: boolean
  text: string
  step?: GuidedStep
}

type Mode = { kind: 'term'; term: string } | { kind: 'index' } | { kind: 'compare'; a?: string; b?: string }

export default function GlossaryAssistant({ mode, topic }: { mode: Mode; topic: string }) {
  const t = useTranslations('glossaryAssistant')
  const locale = useLocale()
  const greeting =
    mode.kind === 'term' ? t('greetTerm', { term: mid(mode.term) }) : mode.kind === 'compare' ? (mode.a && mode.b ? t('greetCompare', { a: mode.a, b: mode.b }) : t('greetCompareAny')) : t('greetIndex')
  const [messages, setMessages] = useState<Message[]>(() => [{ id: 0, bot: true, text: greeting }])
  const [said, setSaid] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const idRef = useRef(1)
  const logRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  useEffect(() => {
    const el = logRef.current
    if (el && messages.length > 1) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  async function ask(text: string) {
    const clean = text.trim()
    if (!clean || typing) return
    const turn = said.length
    setSaid((s) => [...s, clean])
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    const { step } = await getGuidedReply(clean, turn, {})
    const reply: Message = { id: idRef.current++, bot: true, step, text: step === 'q1' ? t('q1') : step === 'q2' ? t('q2') : t('brief') }
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

  const onAskEvent = useEffectEvent((text: string) => ask(text))

  useEffect(() => {
    const onAsk = (e: Event) => {
      const text = (e as CustomEvent<string>).detail
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (text) onAskEvent(text)
      else inputRef.current?.focus({ preventScroll: true })
    }
    window.addEventListener('glossary-ask', onAsk)
    return () => window.removeEventListener('glossary-ask', onAsk)
  }, [])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    ask(draft)
  }

  function reset() {
    window.clearTimeout(timer.current)
    setTyping(false)
    setSaid([])
    setMessages([{ id: idRef.current++, bot: true, text: greeting }])
  }

  const started = messages.length > 1
  const done = messages.some((m) => m.step === 'brief')
  const label = mode.kind === 'term' ? t('termLabel', { term: locale === 'fr' ? mode.term : mid(mode.term) }) : mode.kind === 'compare' ? t('compareLabel') : t('indexLabel')
  const sub = mode.kind === 'term' ? t('termSub') : mode.kind === 'compare' ? t('compareSub') : t('indexSub')
  const starters = mode.kind === 'term' ? ['term1', 'term2'] : mode.kind === 'compare' ? ['compare1', 'compare2'] : ['index1', 'index2']

  return (
    <div id="ask" className="ps-rise scroll-mt-28 rounded-3xl border border-white/[0.08] bg-[#111827] shadow-[0_30px_80px_-30px_rgba(15,29,51,0.9)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Image src="/images/retina-logo.png" alt="" width={28} height={28} className="flex-shrink-0" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{label}</p>
            <p className="truncate text-xs text-neutral-400">{sub}</p>
          </div>
        </div>
        {started ? (
          <button type="button" onClick={reset} className="flex-shrink-0 rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white">
            {t('reset')}
          </button>
        ) : (
          <span className="flex flex-shrink-0 items-center gap-1.5 text-xs text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" aria-hidden="true" />
            {t('informs')}
          </span>
        )}
      </div>

      <div ref={logRef} className="max-h-[360px] min-h-[132px] space-y-4 overflow-y-auto p-5 sm:p-6" role="log" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={`ps-msg flex items-start gap-3 ${m.bot ? '' : 'justify-end'}`}>
            <div className={m.bot ? 'min-w-0 flex-1' : 'max-w-[85%]'}>
              <p className={m.bot ? 'text-base leading-relaxed text-white' : 'rounded-[18px_18px_4px_18px] bg-white px-4 py-3 text-base leading-normal text-[#0A0A0A]'}>{m.text}</p>
              {m.step === 'brief' && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <p className="text-xs font-semibold tracking-wide text-[#7D9CCB]">{t('briefHeading')}</p>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div>
                      <dt className="text-neutral-400">{t('briefTopic')}</dt>
                      <dd className="text-white">{topic}</dd>
                    </div>
                    <div>
                      <dt className="text-neutral-400">{t('briefSaid')}</dt>
                      <dd className="text-white">{said.join(' / ')}</dd>
                    </div>
                  </dl>
                  <Link href={`/${locale}/contact`} className={`${primaryBtn} mt-4 min-h-11 px-5 text-sm`}>
                    {t('book')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-1" role="status" aria-label={t('typing')}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-2 animate-pulse rounded-full bg-neutral-400" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 p-4 sm:p-5">
        {!started && (
          <div className="order-2 flex flex-wrap gap-2" role="group" aria-label={t('startersLabel')}>
            {starters.map((k) => (
              <button key={k} type="button" onClick={() => ask(t(`starters.${k}`))} className={chip(false)}>
                {t(`starters.${k}`)}
              </button>
            ))}
          </div>
        )}
        {!done && (
          <form
            onSubmit={onSubmit}
            className="order-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pr-1.5 pl-5 focus-within:border-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#7D9CCB]"
          >
            <label htmlFor="gl-assistant-input" className="sr-only">
              {t('placeholder')}
            </label>
            <input
              ref={inputRef}
              id="gl-assistant-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t('placeholder')}
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent py-2 text-base text-white placeholder:text-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label={t('send')}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </button>
          </form>
        )}
        <p className="order-3 text-xs text-neutral-400">{t('disclaimer')}</p>
      </div>
    </div>
  )
}
