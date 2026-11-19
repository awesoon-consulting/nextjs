'use client'

import { useState } from 'react'

// The emailed link only opens the page; acting takes a tap, so mail scanners that open links cannot act for someone.
export default function TokenAction({
  token,
  endpoint,
  labels,
}: {
  token: string
  endpoint: string
  labels: { button: string; done: string; invalid: string; error: string }
}) {
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function run() {
    setBusy(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      setMessage(res.ok ? labels.done : res.status === 400 || res.status === 404 ? labels.invalid : labels.error)
    } catch {
      setMessage(labels.error)
    }
    setBusy(false)
  }

  if (message) {
    return (
      <p role="status" className="text-lg font-semibold text-[#F8EFEB]">
        {message}
      </p>
    )
  }
  return (
    <button
      type="button"
      onClick={run}
      disabled={busy || !token}
      className="h-14 rounded-2xl bg-gradient-to-r from-[#FFB36B] via-[#FF8A74] to-[#FF5C8A] px-8 text-base font-bold text-[#1C0A10] disabled:opacity-60"
    >
      {labels.button}
    </button>
  )
}
