'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { getAssistantReply, type AssistantReplyKind } from '@/src/lib/assistant'

import WorkflowMap from './WorkflowMap'
import { useTheme } from '@/src/components/layout/ThemeProvider'

const WorkflowScene = dynamic(() => import('./WorkflowScene'), { ssr: false })

interface Message {
  id: number
  bot: boolean
  text: string
  kind?: AssistantReplyKind
}

const STARTERS = ['orders', 'spreadsheets', 'tools', 'government'] as const

function canRun3D() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (!window.matchMedia('(min-width: 1280px)').matches) return false
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

function MiniFlow() {
  return (
    <svg viewBox="0 0 300 44" className="h-7 w-full">
      {[0, 1, 2].map((i) => (
        <g key={i} className="mini-env" style={{ animationDelay: `${i * 0.8}s` }}>
          <rect x={6} y={10} width={30} height={20} rx={3} fill="none" stroke="currentColor" strokeWidth={1.5} className="text-[#0F1D33] dark:text-[#6E8BB5]" />
          <path d="M6 10 L21 21 L36 10" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-[#0F1D33] dark:text-[#6E8BB5]" />
        </g>
      ))}
      <path d="M60 22 H 220" stroke="currentColor" strokeDasharray="3 5" strokeWidth={1.5} className="text-[#0F1D33]/40 dark:text-white/30" />
      {[0, 1, 2].map((l) => (
        <g key={l} transform={`translate(258 ${10 + l * 11})`}>
          <path d="M0 -6 L16 0 L0 6 L-16 0 Z" fill={['#0E6A9E', '#00AEEF', '#193C57'][l]} />
        </g>
      ))}
    </svg>
  )
}

const GHOSTS = ['ghost1', 'ghost2', 'ghost3'] as const

function Check() {
  return (
    <svg className="h-4 w-4 flex-shrink-0 text-accent dark:text-[#00AEEF]" fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export default function ConversationHero() {
  const t = useTranslations('assistant')
  const locale = useLocale()
  const [messages, setMessages] = useState<Message[]>(() => [{ id: 0, bot: true, text: t('greeting') }])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const [turn, setTurn] = useState(0)
  const [order, setOrder] = useState(0)
  const [touched, setTouched] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [ghost, setGhost] = useState('')
  const [sceneOn, setSceneOn] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const { resolvedTheme } = useTheme()
  const onSceneReady = useCallback(() => setSceneReady(true), [])

  useEffect(() => {
    if (!canRun3D()) return
    const start = () => setSceneOn(true)
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
    const go = () => (w.requestIdleCallback ? w.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 600))
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
    return () => window.removeEventListener('load', go)
  }, [])
  const idRef = useRef(1)
  const timers = useRef<number[]>([])
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = timers.current
    return () => list.forEach((id) => window.clearTimeout(id))
  }, [])

  useEffect(() => {
    if (touched || !window.matchMedia('(min-width: 640px)').matches) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const phrases = GHOSTS.map((k) => t(k))
    if (reduce) return
    let i = 0
    let n = 0
    let dir = 1
    let id = 0
    const tick = () => {
      const full = phrases[i]
      n += dir
      setGhost(full.slice(0, n))
      let wait = dir > 0 ? 45 : 20
      if (dir > 0 && n >= full.length) {
        dir = -1
        wait = 1800
      } else if (dir < 0 && n <= 0) {
        dir = 1
        i = (i + 1) % phrases.length
        wait = 400
      }
      id = window.setTimeout(tick, wait)
    }
    id = window.setTimeout(tick, 900)
    return () => window.clearTimeout(id)
  }, [touched, t])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const progress = Math.max(order, Math.min(draft.length, 40) / 80)

  function typeOut(full: string, kind: AssistantReplyKind) {
    const id = idRef.current++
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTyping(false)
    setMessages((m) => [...m, { id, bot: true, text: reduce ? full : '', kind: reduce ? kind : 'text' }])
    if (reduce) {
      setOrder(1)
      return
    }
    let n = 0
    const step = () => {
      n += 3
      const done = n >= full.length
      setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, text: full.slice(0, n), kind: done ? kind : 'text' } : msg)))
      if (done) setOrder(1)
      else timers.current.push(window.setTimeout(step, 16))
    }
    step()
  }

  async function ask(text: string) {
    const clean = text.trim()
    if (!clean || typing) return
    setTouched(true)
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    setTurn((n) => n + 1)
    setOrder(0.5 + turn * 0.2)
    setTyping(true)
    const split = (key: string) => t(key).split(',').map((s) => s.trim().toLowerCase())
    const reply = await getAssistantReply(clean, turn, {
      orders: split('keywordsOrders'),
      spreadsheets: split('keywordsSpreadsheets'),
      government: split('keywordsGovernment'),
    })
    const full = [reply.prefixKey ? t(reply.prefixKey) : '', t(reply.messageKey)].filter(Boolean).join(' ')
    timers.current.push(window.setTimeout(() => typeOut(full, reply.kind), 700))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    ask(draft)
  }

  function talkToRasoul() {
    if (typing) return
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: t('talkToRasoul') }])
    setTyping(true)
    timers.current.push(window.setTimeout(() => typeOut(t('bookText'), 'book'), 700))
  }

  const chip =
    'min-h-10 items-center rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-left text-sm text-text-secondary transition-colors hover:border-primary hover:text-text-primary dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white'
  const briefItems = [1, 2, 3].map((n) => ({ n: `0${n}`, title: t(`brief${n}Title`), text: t(`brief${n}Text`) }))

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 pt-24 pb-14 sm:pt-32 sm:pb-16 dark:bg-primary" aria-labelledby="hero-title">
      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
        <h1 id="hero-title" className="text-center font-heading text-[2rem] font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl dark:text-white">
          {t('title')}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-text-secondary sm:mt-5 sm:text-lg dark:text-neutral-300">
          {t('subtitle')}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-neutral-600 dark:text-neutral-300">{t('fitLine')}</p>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <div className="pointer-events-none absolute inset-0 hidden xl:block" role="img" aria-label={t('mapLabel')}>
          <div className={`absolute inset-0 transition-opacity duration-700 ${sceneReady ? 'opacity-0' : 'opacity-100'}`}>
            <WorkflowMap progress={progress} />
          </div>
          {sceneOn && (
            <div className={`absolute inset-0 transition-opacity duration-700 ${sceneReady ? 'opacity-100' : 'opacity-0'}`}>
              <WorkflowScene
                progress={progress}
                energy={Math.min(draft.length, 30) / 30}
                gap={800}
                dark={resolvedTheme === 'dark'}
                onReady={onSceneReady}
              />
            </div>
          )}
        </div>
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[560px] w-[900px] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.08] dark:opacity-[0.14]"
          style={{ background: 'radial-gradient(closest-side, #0F1D33, #00AEEF 55%, transparent)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 xl:max-w-3xl">
        <div className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-white/[0.08] dark:bg-[#111827] dark:shadow-[0_30px_80px_-30px_rgba(15,29,51,0.9)]">
          <div className="flex h-10 items-center border-b border-neutral-200 px-5 sm:hidden dark:border-white/10" aria-hidden="true">
            <MiniFlow />
          </div>
          <div ref={logRef} className="max-h-[440px] space-y-5 overflow-y-auto p-5 sm:p-7" role="log" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`flex items-start gap-3 ${m.bot ? '' : 'justify-end'}`}>
                {m.bot && <Image src="/images/retina-logo.png" alt="" width={28} height={28} className="mt-0.5 flex-shrink-0" />}
                <div className={m.bot ? 'max-w-[620px] min-w-0 flex-1' : 'max-w-[520px]'}>
                  <p
                    className={
                      m.bot
                        ? 'pt-0.5 text-base leading-relaxed text-text-primary dark:text-white'
                        : 'rounded-[18px_18px_4px_18px] bg-primary px-4 py-3 text-base leading-normal text-white dark:bg-white dark:text-primary'
                    }
                  >
                    {m.text}
                  </p>
                  {m.kind === 'brief' && (
                    <div className="mt-4 rounded-2xl border border-neutral-200 p-5 dark:border-white/10">
                      <p className="text-sm font-semibold text-text-muted dark:text-neutral-400">{t('briefLabel')}</p>
                      <ol className="mt-3 space-y-3">
                        {briefItems.map((b) => (
                          <li key={b.n} className="flex gap-3">
                            <span className="font-heading text-sm font-semibold text-text-muted dark:text-neutral-400">{b.n}</span>
                            <span>
                              <span className="block font-heading text-sm font-semibold text-text-primary dark:text-white">{b.title}</span>
                              <span className="block text-sm text-text-secondary dark:text-neutral-300">{b.text}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                      <button
                        type="button"
                        onClick={talkToRasoul}
                        className="mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary dark:bg-white dark:text-primary"
                      >
                        {t('talkToRasoul')}
                      </button>
                    </div>
                  )}
                  {m.kind === 'book' && (
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-neutral-200 p-5 dark:border-white/10">
                      <p className="text-sm font-semibold text-text-muted dark:text-neutral-400">{t('bookLabel')}</p>
                      <Link
                        href={`/${locale}/contact`}
                        className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary dark:bg-white dark:text-primary"
                      >
                        {t('bookCta')}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-3" aria-label={t('typing')}>
                <Image src="/images/retina-logo.png" alt="" width={28} height={28} />
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-2 w-2 animate-pulse rounded-full bg-neutral-400" style={{ animationDelay: `${i * 150}ms` }} />
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-neutral-200 p-4 sm:p-5 dark:border-white/10">
            {turn === 0 && (
              <div className="order-2 flex flex-wrap gap-2 sm:order-1">
                {STARTERS.map((k, i) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => ask(t(`starters.${k}`))}
                    className={`${i >= 2 && !showAll ? 'hidden sm:inline-flex' : 'inline-flex'} ${chip}`}
                  >
                    {t(`starters.${k}`)}
                  </button>
                ))}
                {!showAll && (
                  <button type="button" onClick={() => setShowAll(true)} className={`inline-flex sm:hidden ${chip}`}>
                    {t('more')}
                  </button>
                )}
              </div>
            )}
            <form
              onSubmit={onSubmit}
              className="order-1 flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 py-1.5 pr-1.5 pl-5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/25 sm:order-2 dark:border-white/10 dark:bg-white/5 dark:focus-within:border-white dark:focus-within:ring-white/30"
            >
              <label htmlFor="assistant-input" className="sr-only">
                {t('placeholder')}
              </label>
              <input
                id="assistant-input"
                value={draft}
                onChange={(e) => {
                  setDraft(e.target.value)
                  setTouched(true)
                }}
                placeholder={touched ? t('placeholder') : ghost || t('placeholder')}
                autoComplete="off"
                style={{ outline: 'none' }}
                className="min-w-0 flex-1 bg-transparent py-2 text-base text-text-primary placeholder:text-text-muted focus:outline-none focus-visible:outline-none dark:text-white"
              />
              <button
                type="submit"
                aria-label={t('send')}
                disabled={typing}
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 dark:bg-white dark:text-[#0A0A0A] dark:focus-visible:ring-white dark:focus-visible:ring-offset-[#111827] ${touched ? '' : 'send-pulse'}`}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex w-full max-w-5xl flex-col items-center gap-5 px-4 sm:px-6">
        <Link href={`/${locale}/contact`} className="group inline-flex items-center gap-2 text-base font-semibold text-text-primary underline-offset-4 hover:underline dark:text-white">
          {t('orBook')}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:flex lg:flex-nowrap lg:gap-8">
          {(['trust1', 'trust2', 'trust3', 'trust4'] as const).map((k) => (
            <li key={k} className="flex items-center gap-2 text-sm text-text-secondary lg:whitespace-nowrap dark:text-neutral-300">
              <Check />
              {t(k)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
