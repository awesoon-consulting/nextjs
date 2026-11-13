'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useMessages, useTranslations } from 'next-intl'
import { getGuidedReply } from '@/src/lib/assistant'

export interface AssistantSpoke {
  slug: string
  title: string
  href: string
  keywords: string[]
}

type Kind = 'text' | 'brief' | 'book'
interface Message {
  id: number
  bot: boolean
  text: string
  kind?: Kind
}

export default function HubAssistant({ hub, hubName, spokes, starters }: { hub: string; hubName: string; spokes: AssistantSpoke[]; starters?: string[] }) {
  const t = useTranslations('hubs.chrome.chat')
  const tc = useTranslations('closing')
  const locale = useLocale()
  const chat = (useMessages() as { hubs: { chrome: { chat: { chips: string[]; when: string[] } } } }).hubs.chrome.chat
  const [messages, setMessages] = useState<Message[]>(() => [{ id: 0, bot: true, text: t('greeting') }])
  const [turn, setTurn] = useState(0)
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState('')
  const [answers, setAnswers] = useState({ need: '', setup: '', when: '', spoke: '' })
  const [consent, setConsent] = useState(false)
  const idRef = useRef(1)
  const timers = useRef<number[]>([])
  const logRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const list = timers.current
    return () => list.forEach((id) => window.clearTimeout(id))
  }, [])

  useEffect(() => {
    function onAsk(e: Event) {
      const text = (e as CustomEvent<string>).detail
      inputRef.current?.focus({ preventScroll: true })
      if (text) setDraft(text)
    }
    window.addEventListener('hub-ask', onAsk)
    return () => window.removeEventListener('hub-ask', onAsk)
  }, [])

  useEffect(() => {
    if (messages.length === 1) return
    const el = logRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }, [messages, typing])

  function botSay(text: string, kind: Kind = 'text') {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTyping(true)
    timers.current.push(
      window.setTimeout(() => {
        setTyping(false)
        setMessages((m) => [...m, { id: idRef.current++, bot: true, text, kind }])
      }, reduce ? 0 : 650),
    )
  }

  async function ask(text: string) {
    const clean = text.trim()
    if (!clean || typing || turn > 2) return
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    const goals = Object.fromEntries(spokes.map((s) => [s.slug, s.keywords]))
    const reply = await getGuidedReply(clean, turn, goals)
    setTurn((n) => n + 1)
    if (reply.step === 'q1') {
      const match = spokes.find((s) => s.slug === reply.goal)
      setAnswers((a) => ({ ...a, need: clean, spoke: match?.slug ?? '' }))
      botSay(`${match ? t('openMatch', { page: match.title }) : t('openGeneric')} ${t('q1')}`)
    } else if (reply.step === 'q2') {
      setAnswers((a) => ({ ...a, setup: clean }))
      botSay(t('q2'))
    } else {
      setAnswers((a) => ({ ...a, when: clean }))
      botSay(t('briefIntro'), 'brief')
    }
  }

  function talkToRay() {
    if (typing || messages.some((m) => m.kind === 'book')) return
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: t('talkToRay') }])
    botSay(t('bookLabel'), 'book')
  }

  function restart() {
    timers.current.forEach((id) => window.clearTimeout(id))
    setTyping(false)
    setTurn(0)
    setConsent(false)
    setAnswers({ need: '', setup: '', when: '', spoke: '' })
    setMessages([{ id: idRef.current++, bot: true, text: t('greeting') }])
  }

  function onBook() {
    if (!consent) return
    try {
      sessionStorage.setItem('awesoon:brief', JSON.stringify({ page: hub, ...answers }))
    } catch {}
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    ask(draft)
  }

  const picked = spokes.find((s) => s.slug === answers.spoke)
  const chips = turn === 0 ? (starters ?? chat.chips) : turn === 2 ? chat.when : []
  const chip =
    'inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-left text-sm text-neutral-200 hover:border-white/25 hover:bg-white/[0.09] hover:text-white disabled:opacity-50'
  const cta = 'inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]'
  const rows = [
    { label: t('needLabel'), value: answers.need },
    { label: t('setupLabel'), value: answers.setup },
    { label: t('whenLabel'), value: answers.when },
  ]

  return (
    <div id="hub-assistant" className="scroll-mt-24 rounded-3xl border border-white/[0.08] bg-[#111827] shadow-[0_30px_80px_-30px_rgba(0,174,239,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-[#00AEEF]" aria-hidden="true" />
          <p className="font-heading text-sm font-semibold text-white">{t('label', { hub: hubName.toLowerCase() })}</p>
        </div>
        {turn > 0 ? (
          <button type="button" onClick={restart} className="rounded-full px-2.5 py-1 text-sm text-neutral-300 hover:bg-white/[0.08] hover:text-white">
            {t('restart')}
          </button>
        ) : (
          <p className="hidden text-xs text-neutral-400 sm:block">{t('note')}</p>
        )}
      </div>
      <div ref={logRef} className="max-h-[400px] space-y-4 overflow-y-auto p-5 sm:p-6" role="log" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={`ad-msg flex items-start gap-3 ${m.bot ? '' : 'justify-end'}`}>
            {m.bot && <Image src="/images/retina-logo.png" alt="" width={26} height={26} className="mt-0.5 flex-shrink-0" />}
            <div className={m.bot ? 'min-w-0 flex-1' : 'max-w-[85%]'}>
              <p className={m.bot ? 'pt-0.5 text-base leading-relaxed text-white' : 'rounded-[18px_18px_4px_18px] bg-white px-4 py-2.5 text-base leading-normal text-[#0A0A0A]'}>{m.text}</p>
              {m.kind === 'brief' && (
                <div className="mt-4 rounded-2xl border border-[#00AEEF]/30 bg-[#0B1322] p-5">
                  <p className="text-sm font-semibold text-[#7D9CCB]">{t('briefLabel')}</p>
                  <dl className="mt-3 space-y-3">
                    {rows.map((r) => (
                      <div key={r.label} className="grid gap-0.5 sm:grid-cols-[130px_1fr] sm:gap-3">
                        <dt className="text-sm text-neutral-400">{r.label}</dt>
                        <dd className="text-sm font-medium text-white">{r.value}</dd>
                      </div>
                    ))}
                    {picked && (
                      <div className="grid gap-0.5 sm:grid-cols-[130px_1fr] sm:gap-3">
                        <dt className="text-sm text-neutral-400">{t('pageLabel')}</dt>
                        <dd className="text-sm font-medium">
                          <Link href={picked.href} className="text-white underline underline-offset-4 hover:text-[#B9CCE6]">
                            {picked.title}
                          </Link>
                        </dd>
                      </div>
                    )}
                  </dl>
                  {!messages.some((x) => x.kind === 'book') && (
                    <button type="button" onClick={talkToRay} className="mt-5 inline-flex rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.08]">
                      {t('talkToRay')}
                    </button>
                  )}
                </div>
              )}
              {m.kind === 'book' && (
                <div className="mt-4 rounded-2xl border border-white/10 p-5">
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-neutral-200">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 flex-shrink-0 accent-[#00AEEF]" />
                    {t('consentLabel')}
                  </label>
                  <Link href={`/${locale}/contact`} onClick={onBook} className={`${cta} mt-4 w-full text-sm sm:w-auto`}>
                    {tc('cta')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-3" role="status" aria-label={t('typing')}>
            <Image src="/images/retina-logo.png" alt="" width={26} height={26} />
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2 w-2 animate-pulse rounded-full bg-neutral-400 motion-reduce:animate-none" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </span>
          </div>
        )}
      </div>
      {turn <= 2 && (
        <div className="flex flex-col gap-3 border-t border-white/10 p-4 sm:p-5">
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <button key={c} type="button" disabled={typing} onClick={() => ask(c)} className={chip}>
                  {c}
                </button>
              ))}
            </div>
          )}
          <form onSubmit={onSubmit} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pr-1.5 pl-5 focus-within:border-white/40">
            <label htmlFor={`hub-input-${hub}`} className="sr-only">
              {t('placeholder')}
            </label>
            <input
              id={`hub-input-${hub}`}
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={t('placeholder')}
              autoComplete="off"
              maxLength={160}
              className="min-w-0 flex-1 bg-transparent py-2 text-base text-white placeholder:text-neutral-400 focus-visible:outline-none!"
            />
            <button type="submit" aria-label={t('send')} disabled={typing} className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0A0A0A] hover:bg-[#E5E5E5] disabled:opacity-60">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
