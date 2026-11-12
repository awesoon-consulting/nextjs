'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { getAssistantReply, type AssistantReplyKind } from '@/src/lib/assistant'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

interface Message {
  id: number
  bot: boolean
  text: string
  kind?: AssistantReplyKind
}

const STARTERS = ['orders', 'spreadsheets', 'tools', 'government'] as const

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

function StillLayers() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
      {[
        { y: 70, fill: '#0E6A9E' },
        { y: 130, fill: '#00AEEF' },
        { y: 190, fill: '#193C57' },
      ].map((l, i) => (
        <path key={i} d={`M200 ${l.y - 40} L320 ${l.y} L200 ${l.y + 40} L80 ${l.y} Z`} fill={l.fill} opacity={0.18 + i * 0.04} />
      ))}
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
  const [sceneOn, setSceneOn] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const idRef = useRef(1)
  const timers = useRef<number[]>([])
  const logRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = timers.current
    return () => list.forEach((id) => window.clearTimeout(id))
  }, [])

  useEffect(() => {
    if (!hasWebGL()) return
    const start = () => setSceneOn(true)
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
    const go = () => (w.requestIdleCallback ? w.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 600))
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
    return () => window.removeEventListener('load', go)
  }, [])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const onSceneReady = useCallback(() => setSceneReady(true), [])

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
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    setTurn((n) => n + 1)
    setOrder(0.5)
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

  const briefItems = [1, 2, 3].map((n) => ({ n: `0${n}`, title: t(`brief${n}Title`), text: t(`brief${n}Text`) }))

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 pt-28 pb-16 sm:pt-32 dark:bg-primary" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className={`absolute inset-x-0 top-0 h-[70%] transition-opacity duration-700 ${sceneReady ? 'opacity-0' : 'opacity-100'}`}>
          <div className="mx-auto h-full max-w-3xl opacity-60">
            <StillLayers />
          </div>
        </div>
        {sceneOn && (
          <div className={`absolute inset-0 transition-opacity duration-700 ${sceneReady ? 'opacity-100' : 'opacity-0'}`}>
            <HeroScene order={order} onReady={onSceneReady} />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-100 to-transparent dark:from-primary" />
      </div>
      <span className="sr-only">{t('sceneLabel')}</span>

      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="mx-auto mb-5 w-fit rounded-full border border-neutral-200 bg-white/90 px-4 py-1.5 text-center text-xs font-medium text-text-secondary sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
          {t('eyebrow')}
        </p>
        <h1 id="hero-title" className="text-center font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl dark:text-white">
          {t('title')}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-text-secondary sm:text-lg dark:text-neutral-300">
          {t('subtitle')}
        </p>

        <div className="mt-10 rounded-3xl border border-neutral-200 bg-white shadow-xl dark:border-white/10 dark:bg-secondary-dark">
          <div ref={logRef} className="max-h-[440px] min-h-[220px] space-y-5 overflow-y-auto p-5 sm:p-7" role="log" aria-live="polite">
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
                      <p className="text-xs font-semibold tracking-wider text-text-muted uppercase dark:text-neutral-400">{t('briefLabel')}</p>
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
                      <p className="text-xs font-semibold tracking-wider text-text-muted uppercase dark:text-neutral-400">{t('bookLabel')}</p>
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

          <div className="border-t border-neutral-200 p-4 sm:p-5 dark:border-white/10">
            {turn === 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {STARTERS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => ask(t(`starters.${k}`))}
                    className="min-h-10 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-left text-sm text-text-secondary transition-colors hover:border-primary hover:text-text-primary dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
                  >
                    {t(`starters.${k}`)}
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={onSubmit} className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 py-1.5 pr-1.5 pl-5 dark:border-white/10 dark:bg-white/5">
              <label htmlFor="assistant-input" className="sr-only">
                {t('placeholder')}
              </label>
              <input
                id="assistant-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={t('placeholder')}
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent py-2 text-base text-text-primary placeholder:text-text-muted focus:outline-none dark:text-white"
              />
              <button
                type="submit"
                aria-label={t('send')}
                disabled={!draft.trim() || typing}
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white transition-opacity disabled:opacity-40 dark:bg-white dark:text-primary"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-text-muted dark:text-neutral-400">{t('trust')}</p>
      </div>
    </section>
  )
}
