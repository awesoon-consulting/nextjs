'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import Link from 'next/link'

export interface AssistantTopic {
  id: string
  chip: string
  keywords: string[]
  reply: string
  link?: { label: string; href: string }
}

interface Props {
  locale: string
  title: string
  intro: string
  placeholder: string
  send: string
  logLabel: string
  note: string
  cta: string
  fallback: string
  topics: AssistantTopic[]
  context?: string
}

interface Msg {
  id: number
  bot: boolean
  text: string
  link?: { label: string; href: string }
  book?: boolean
}

export default function WorkAssistant({ locale, title, intro, placeholder, send, logLabel, note, cta, fallback, topics, context }: Props) {
  const [messages, setMessages] = useState<Msg[]>([{ id: 0, bot: true, text: intro }])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const [used, setUsed] = useState<string[]>([])
  const idRef = useRef(1)
  const logRef = useRef<HTMLDivElement>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])
  useEffect(() => {
    if (messages.length > 1 || typing) logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function answer(text: string, topic?: AssistantTopic) {
    const clean = text.trim()
    if (!clean || typing) return
    const lower = clean.toLowerCase()
    const match = topic ?? topics.find((t) => t.keywords.some((k) => k && lower.includes(k)))
    setMessages((m) => [...m, { id: idRef.current++, bot: false, text: clean }])
    setDraft('')
    if (match) setUsed((u) => [...u, match.id])
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTyping(true)
    timer.current = window.setTimeout(
      () => {
        setTyping(false)
        setMessages((m) => [...m, { id: idRef.current++, bot: true, text: match ? match.reply : fallback, link: match?.link, book: true }])
      },
      reduce ? 0 : 650,
    )
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    answer(draft)
  }

  const chips = topics.filter((t) => !used.includes(t.id)).slice(0, 3)

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00AEEF] opacity-60 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00AEEF]" />
        </span>
        <h2 className="font-heading text-base font-semibold text-white">{title}</h2>
        {context && <span className="ml-auto truncate rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-neutral-300">{context}</span>}
      </div>

      <div ref={logRef} role="log" aria-label={logLabel} aria-live="polite" className="max-h-80 space-y-3 overflow-y-auto px-5 py-4">
        {messages.map((m) => (
          <div key={m.id} className={m.bot ? 'max-w-[92%]' : 'ml-auto max-w-[85%]'}>
            <p className={`rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${m.bot ? 'rounded-tl-sm bg-white/[0.06] text-neutral-100' : 'rounded-tr-sm bg-[#0E6A9E] text-white'}`}>{m.text}</p>
            {(m.link || m.book) && (
              <div className="mt-2 flex flex-wrap gap-2">
                {m.link && (
                  <Link href={`/${locale}${m.link.href === '/' ? '' : m.link.href}`} className="inline-flex min-h-10 items-center rounded-full border border-white/15 px-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]">
                    {m.link.label}
                  </Link>
                )}
                {m.book && (
                  <Link href={`/${locale}/contact`} className="inline-flex min-h-10 items-center rounded-full bg-white px-3.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]">
                    {cta}
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
        {typing && (
          <div className="flex w-16 gap-1 rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60 motion-reduce:animate-none" style={{ animationDelay: `${i * 120}ms` }} />
            ))}
          </div>
        )}
      </div>

      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 px-5 pb-3">
          {chips.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => answer(t.chip, t)}
              className="min-h-10 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-left text-sm text-neutral-200 transition-colors hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              {t.chip}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-white/10 p-3">
        <label htmlFor="work-ask" className="sr-only">
          {placeholder}
        </label>
        <input
          id="work-ask"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="min-h-11 flex-1 rounded-full bg-white/[0.06] px-4 text-[15px] text-white placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
        />
        <button
          type="submit"
          aria-label={send}
          disabled={!draft.trim() || typing}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827] disabled:opacity-40"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
      <p className="px-5 pb-3 text-xs text-neutral-400">{note}</p>
    </div>
  )
}
