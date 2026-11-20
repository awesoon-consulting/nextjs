'use client'

import { useId, useRef, useState } from 'react'
import { CANADA_REGIONS, US_REGIONS } from '@/src/lib/ownvane/regions'

export interface OwnvaneWaitlistLabels {
  email: string
  placeholder: string
  region: string
  regionPlaceholder: string
  canada: string
  us: string
  firstName: string
  optional: string
  honeypot: string
  consent: string
  details: string
  submit: string
  sending: string
  success: string
  note: string
  errorEmail: string
  errorRegion: string
  errorFirstName: string
  errorConsent: string
  errorBusy: string
  errorGeneric: string
}

type Field = 'email' | 'region' | 'firstName' | 'consent'
type Errors = Partial<Record<Field, string>>

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const FIRST_NAME_BAD = /[\u0000-\u001f\u007f<>@/]/

export default function WaitlistForm({
  labels,
  regionNames,
  locale,
  consentVersion,
}: {
  labels: OwnvaneWaitlistLabels
  regionNames: Record<string, string>
  locale: string
  consentVersion: string
}) {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [region, setRegion] = useState('')
  const [firstName, setFirstName] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')
  const [failure, setFailure] = useState('')

  function check(): Errors {
    const e: Errors = {}
    if (!EMAIL.test(email.trim())) e.email = labels.errorEmail
    if (!region) e.region = labels.errorRegion
    if (firstName.trim().length > 80 || FIRST_NAME_BAD.test(firstName)) e.firstName = labels.errorFirstName
    if (!consent) e.consent = labels.errorConsent
    return e
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    setFailure('')
    const found = check()
    setErrors(found)
    const first = (['email', 'region', 'firstName', 'consent'] as Field[]).find((f) => found[f])
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(`${id}-${first}`)}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/ownvane-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          region,
          firstName: firstName.trim() || null,
          consent: true,
          consentVersion,
          source: 'awesoon-site',
          locale,
          website,
        }),
      })
      if (res.ok) {
        setStatus('done')
        requestAnimationFrame(() => doneRef.current?.focus())
        return
      }
      setStatus('idle')
      setFailure(res.status === 429 ? labels.errorBusy : res.status === 400 ? labels.errorEmail : labels.errorGeneric)
    } catch {
      setStatus('idle')
      setFailure(labels.errorGeneric)
    }
  }

  if (status === 'done') {
    return (
      <div ref={doneRef} tabIndex={-1} role="status" className="ov-done">
        <p>{labels.success}</p>
        <p>{labels.note}</p>
      </div>
    )
  }

  const err = (f: Field) =>
    errors[f] ? (
      <p className="ov-err" id={`${id}-${f}-err`}>
        {errors[f]}
      </p>
    ) : null
  const described = (f: Field) => (errors[f] ? `${id}-${f}-err` : undefined)

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="ov-form">
      <div className="ov-field">
        <label htmlFor={`${id}-email`}>{labels.email}</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={labels.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={described('email')}
        />
        {err('email')}
      </div>
      <div className="ov-field">
        <label htmlFor={`${id}-region`}>{labels.region}</label>
        <select
          id={`${id}-region`}
          name="region"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          aria-invalid={errors.region ? true : undefined}
          aria-describedby={described('region')}
        >
          <option value="">{labels.regionPlaceholder}</option>
          <optgroup label={labels.canada}>
            {CANADA_REGIONS.map((r) => (
              <option key={r} value={r}>
                {regionNames[r]}
              </option>
            ))}
          </optgroup>
          <optgroup label={labels.us}>
            {US_REGIONS.map((r) => (
              <option key={r} value={r}>
                {regionNames[r]}
              </option>
            ))}
          </optgroup>
        </select>
        {err('region')}
      </div>
      <div className="ov-field">
        <label htmlFor={`${id}-firstName`}>
          {labels.firstName} <span className="ov-opt">{labels.optional}</span>
        </label>
        <input
          id={`${id}-firstName`}
          name="firstName"
          autoComplete="given-name"
          maxLength={80}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-invalid={errors.firstName ? true : undefined}
          aria-describedby={described('firstName')}
        />
        {err('firstName')}
      </div>
      <div className="ov-hp" aria-hidden="true">
        <label htmlFor={`${id}-website`}>{labels.honeypot}</label>
        <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div>
        <div className="ov-consent">
          <input
            id={`${id}-consent`}
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${id}-consent-err ${id}-details` : `${id}-details`}
          />
          <label htmlFor={`${id}-consent`}>{labels.consent}</label>
        </div>
        {err('consent')}
      </div>
      <p className="ov-small" id={`${id}-details`}>
        <a href="#waitlist-privacy">{labels.details}</a>
      </p>
      <div>
        <button type="submit" className="ov-btn ov-btn-sheen" disabled={status === 'sending'}>
          {status === 'sending' ? labels.sending : labels.submit}
        </button>
      </div>
      {failure && (
        <p role="alert" className="ov-status">
          {failure}
        </p>
      )}
    </form>
  )
}
