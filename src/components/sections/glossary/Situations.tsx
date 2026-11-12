'use client'

import { useState } from 'react'
import AskButton from './AskButton'
import { chip } from './ui'

export default function Situations({ items, label, inSituation, askLabel }: {
  items: { label: string; verdict: string; why: string }[]
  label: string
  inSituation: string
  askLabel: string
}) {
  const [i, setI] = useState(0)
  const s = items[i]
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <div role="group" aria-label={label} className="flex flex-col gap-2">
        {items.map((x, k) => (
          <button key={k} type="button" aria-pressed={i === k} onClick={() => setI(k)} className={`${chip(i === k)} min-h-12 justify-start rounded-2xl px-4 text-left text-base`}>
            {x.label}
          </button>
        ))}
      </div>
      <div key={i} aria-live="polite" className="ps-msg rounded-3xl bg-gradient-to-b from-[#15284A] to-[#0F1D33] p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-wide text-[#9DB8E0]">{inSituation}</p>
        <p className="mt-3 font-heading text-2xl leading-snug font-bold text-white">{s.verdict}</p>
        <p className="mt-3 text-base leading-relaxed text-neutral-200">{s.why}</p>
        <AskButton text={s.label} className="mt-5 inline-flex min-h-11 items-center rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]">
          {askLabel}
        </AskButton>
      </div>
    </div>
  )
}
