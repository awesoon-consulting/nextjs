'use client'

import { useId, useState } from 'react'
import Button from '@/src/components/ui/Button'

export interface WaitlistLabels {
  email: string
  placeholder: string
  consent: string
  details: string
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
      <div role="status" className="rounded-3xl border border-neutral-200 bg-white p-6 dark:border-white/[0.08] dark:bg-[#111827]">
        <p className="font-heading text-lg font-semibold text-text-primary">{message}</p>
        <p className="mt-2 text-sm text-text-secondary">{labels.note}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <label htmlFor={`${id}-email`} className="sr-only">
        {labels.email}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${id}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.placeholder}
          className="h-12 w-full min-w-0 rounded-full sm:flex-1 border border-neutral-300 bg-white px-5 text-base text-text-primary placeholder:text-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/[0.12] dark:bg-[#111827]"
        />
        <Button type="submit" loading={status === 'sending'} className="h-12 whitespace-nowrap px-6">
          {status === 'sending' ? labels.sending : labels.submit}
        </Button>
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <label htmlFor={`${id}-consent`} className="flex cursor-pointer items-start gap-2.5 text-sm text-text-secondary">
        <input id={`${id}-consent`} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-current" />
        <span>
          {labels.consent}{' '}
          <a href="#waitlist-privacy" className="underline underline-offset-4 hover:text-text-primary">
            {labels.details}
          </a>
        </span>
      </label>
      {status === 'error' && (
        <p role="alert" className="text-sm text-error">
          {message}
        </p>
      )}
    </form>
  )
}
