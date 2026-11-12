'use client'

import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { fieldClass, ghostBtn, primaryBtn } from './styles'

interface Msg {
  id: number
  bot: boolean
  text: string
  book?: boolean
}

// Same scripted seam as src/lib/assistant.ts: no live model, no quotes, hand off to a call.
function scriptedReply(text: string, priceWords: string[]): 'price' | 'reply' {
  const t = text.toLowerCase()
  return priceWords.some((w) => w && t.includes(w)) ? 'price' : 'reply'
}

export default function ResultCard({ tool, toolName, summary, shareUrl }: { tool: 'calc' | 'finder'; toolName: string; summary: string; shareUrl: string }) {
  const t = useTranslations('tools.result')
  const ta = useTranslations('tools.assistant')
  const locale = useLocale()
  const uid = useId()
  const [copied, setCopied] = useState(false)
  const [chat, setChat] = useState<Msg[] | null>(null)
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const idRef = useRef(1)
  const timer = useRef<number | undefined>(undefined)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function share() {
    const url = new URL(shareUrl, window.location.origin).toString()
    if (navigator.share) {
      try {
        await navigator.share({ title: toolName, text: summary, url })
        return
      } catch {}
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  function openChat() {
    if (!chat) setChat([{ id: 0, bot: true, text: ta(tool) }])
    window.setTimeout(() => inputRef.current?.focus(), 50)
  }

  function ask(e: FormEvent) {
    e.preventDefault()
    const clean = draft.trim()
    if (!clean || typing) return
    setDraft('')
    const kind = scriptedReply(clean, ta('priceWords').split(','))
    const reply: Msg = { id: idRef.current++, bot: true, text: ta(kind), book: true }
    setChat((m) => [...(m ?? []), { id: idRef.current++, bot: false, text: clean }])
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setChat((m) => [...(m ?? []), reply])
      return
    }
    setTyping(true)
    timer.current = window.setTimeout(() => {
      setTyping(false)
      setChat((m) => [...(m ?? []), reply])
    }, 600)
  }

  const mailto = () => {
    const url = new URL(shareUrl, window.location.origin).toString()
    const subject = encodeURIComponent(t('emailSubject', { tool: toolName }))
    const body = encodeURIComponent(`${summary}\n\n${url}`)
    return `mailto:${encodeURIComponent(email.trim())}?subject=${subject}&body=${body}`
  }

  return (
    <div className="tl-rise rounded-3xl border border-white/[0.08] bg-[#111827] p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.06em] text-neutral-400 uppercase">{t('label')}</p>
      <p className="mt-2 font-heading text-lg font-semibold text-white">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <button type="button" onClick={openChat} className={primaryBtn} aria-expanded={!!chat} aria-controls={`${uid}-chat`}>
          {t('ask')}
        </button>
        <Link href={`/${locale}/contact`} className={ghostBtn}>
          {t('book')}
        </Link>
        <button type="button" onClick={share} className={ghostBtn}>
          {t('share')}
        </button>
        <span role="status" className="sr-only sm:not-sr-only sm:self-center sm:text-sm sm:text-neutral-300">
          {copied ? t('copied') : ''}
        </span>
      </div>

      {chat && (
        <div id={`${uid}-chat`} className="tl-rise mt-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/60">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="text-sm font-semibold text-white">{t('assistantLabel')}</p>
            <button type="button" onClick={() => setChat(null)} className="rounded-full px-3 py-1.5 text-sm text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7D9CCB]">
              {t('close')}
            </button>
          </div>
          <div className="max-h-80 space-y-4 overflow-y-auto p-4" role="log" aria-live="polite">
            {chat.map((m) => (
              <div key={m.id} className={`tl-rise flex items-start gap-3 ${m.bot ? '' : 'justify-end'}`}>
                {m.bot && <Image src="/images/retina-logo.png" alt="" width={24} height={24} className="mt-0.5 flex-shrink-0" />}
                <div className={m.bot ? 'min-w-0 flex-1' : 'max-w-[85%]'}>
                  <p className={m.bot ? 'text-[15px] leading-relaxed text-white' : 'rounded-[18px_18px_4px_18px] bg-white px-4 py-2.5 text-[15px] text-[#0A0A0A]'}>{m.text}</p>
                  {m.book && (
                    <Link href={`/${locale}/contact`} className={`${primaryBtn} mt-3`}>
                      {t('book')}
                    </Link>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-1.5" role="status" aria-label={t('typing')}>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="tl-dot h-1.5 w-1.5 rounded-full bg-neutral-400" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            )}
          </div>
          <form onSubmit={ask} className="flex gap-2 border-t border-white/10 p-3">
            <label htmlFor={`${uid}-ask`} className="sr-only">
              {t('askPlaceholder')}
            </label>
            <input ref={inputRef} id={`${uid}-ask`} value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t('askPlaceholder')} className={`${fieldClass} min-h-11 rounded-full py-2`} />
            <button type="submit" className={primaryBtn}>
              {t('send')}
            </button>
          </form>
        </div>
      )}

      <details className="group mt-6 border-t border-white/10 pt-5">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg text-sm font-semibold text-white hover:text-[#C7D4EA] focus-visible:outline-2 focus-visible:outline-[#7D9CCB]">
          <span aria-hidden="true" className="transition-transform group-open:rotate-90 motion-reduce:transition-none">›</span>
          {t('email')} <span className="font-normal text-neutral-400">{t('optional')}</span>
        </summary>
        <div className="mt-3 flex flex-col gap-3">
          <label className="flex flex-col gap-2 text-sm text-neutral-300">
            {t('emailLabel')}
            <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} />
          </label>
          <label className="flex min-h-11 cursor-pointer items-start gap-3 text-sm text-neutral-300">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 flex-shrink-0 accent-[#7D9CCB]" />
            {t('consent')}
          </label>
          <div>
            <button type="button" disabled={!consent || !/^\S+@\S+\.\S+$/.test(email.trim())} onClick={() => (window.location.href = mailto())} className={primaryBtn}>
              {t('emailCta')}
            </button>
          </div>
        </div>
      </details>
    </div>
  )
}
