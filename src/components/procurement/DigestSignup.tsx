'use client'

import { useState } from 'react'
import type { Copy } from '@/src/lib/procurement/copy'
import { fmt } from '@/src/lib/procurement/format'

// No subscriber store exists yet, so the form only opens a mailto. Nothing is kept here.
export default function DigestSignup({ t, locale, country, to }: { t: Copy['digest']; locale: string; country: string; to: string }) {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)

  return (
    <form
      className="rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault()
        const subject = fmt(t.mailSubject, { country })
        const body = fmt(t.mailBody, { email, country })
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      }}
    >
      <h2 id="digest-signup" className="font-heading text-2xl font-bold text-white">
        {t.signupTitle}
      </h2>
      <p className="mt-2 text-neutral-300">{t.signupText}</p>
      <label htmlFor="digest-email" className="mt-6 block text-sm font-semibold text-neutral-200">
        {t.email}
      </label>
      <input
        id="digest-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 min-h-12 w-full rounded-xl border border-white/20 bg-[#0A0A0A] px-4 text-white placeholder:text-neutral-500 hover:border-white/40"
      />
      <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-neutral-300">
        <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 flex-shrink-0 accent-[#7D9CCB]" />
        <span>
          {t.consent}{' '}
          <a href={`/${locale}/privacy`} className="underline underline-offset-4 hover:text-white">
            {t.privacy}
          </a>
        </span>
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]"
      >
        {t.submit}
      </button>
      <p className="mt-3 text-xs text-neutral-400">{t.mailtoNote}</p>
    </form>
  )
}
