'use client'

import { useId, useState } from 'react'

export interface WaitlistLabels {
  email: string
  placeholder: string
  consent: string
  submit: string
  sending: string
  success: string
  errorEmail: string
  errorConsent: string
  errorBusy: string
  errorGeneric: string
  note: string
}

type Status = 'idle' | 'sending' | 'done' | 'error'

export default function WaitlistForm({ labels, locale, consentVersion, source }: { labels: WaitlistLabels; locale: string; consentVersion: string; source: string }) {
  const id = useId()
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error')
      setMessage(labels.errorEmail)
      return
    }
    if (!consent) {
      setStatus('error')
      setMessage(labels.errorConsent)
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/tapbody-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent: true, consentVersion, source, locale, website }),
      })
      if (res.ok) {
        setStatus('done')
        setMessage(labels.success)
        return
      }
      setStatus('error')
      setMessage(res.status === 429 ? labels.errorBusy : res.status === 400 ? labels.errorEmail : labels.errorGeneric)
    } catch {
      setStatus('error')
      setMessage(labels.errorGeneric)
    }
  }

  if (status === 'done') {
    return (
      <div role="status" className="rounded-3xl border border-[#CCFF4D]/40 bg-[#CCFF4D]/10 p-6 text-[#F8EFEB]">
        <p className="text-lg font-semibold">{message}</p>
        <p className="mt-2 text-sm text-[#C9ABA3]">{labels.note}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#1C0E12]/70 p-5 backdrop-blur-md">
      <label htmlFor={`${id}-email`} className="text-sm font-semibold text-[#F8EFEB]">
        {labels.email}
      </label>
      <input
        id={`${id}-email`}
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={labels.placeholder}
        className="h-12 rounded-2xl border border-white/15 bg-white/[0.04] px-4 text-base text-[#F8EFEB] placeholder:text-[#8F7A76] focus:border-[#FFB36B] focus:outline-none"
      />
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <label htmlFor={`${id}-consent`} className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-[#E3CFC8]">
        <input
          id={`${id}-consent`}
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#CCFF4D]"
        />
        <span>{labels.consent}</span>
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="h-14 rounded-2xl bg-gradient-to-r from-[#FFB36B] via-[#FF8A74] to-[#FF5C8A] text-base font-bold text-[#1C0A10] shadow-[0_10px_30px_rgba(255,92,138,0.28)] transition-transform active:scale-[0.98] disabled:opacity-70"
      >
        {status === 'sending' ? labels.sending : labels.submit}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-sm text-[#FFB8CB]">
          {message}
        </p>
      )}
      <p className="text-center text-xs text-[#C9ABA3]">{labels.note}</p>
    </form>
  )
}
