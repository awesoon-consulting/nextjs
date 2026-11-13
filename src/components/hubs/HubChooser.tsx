'use client'

import { useState } from 'react'
import Link from 'next/link'
import AskButton from './AskButton'

interface Option {
  slug: string
  label: string
  title: string
  answer: string
  href: string
}

export default function HubChooser({ options, labels }: { options: Option[]; labels: { startHere: string; readPage: string; askFits: string; group: string } }) {
  const [picked, setPicked] = useState(options[0].slug)
  const current = options.find((o) => o.slug === picked) ?? options[0]
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div role="radiogroup" aria-label={labels.group} className="flex flex-col gap-2">
        {options.map((o) => {
          const on = o.slug === picked
          return (
            <button
              key={o.slug}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setPicked(o.slug)}
              className={`flex min-h-12 items-center gap-3 rounded-2xl border px-4 py-3 text-left text-base transition-colors motion-reduce:transition-none ${
                on ? 'border-[#00AEEF]/60 bg-[#00AEEF]/10 text-white' : 'border-white/10 bg-white/[0.03] text-neutral-300 hover:border-white/25 hover:text-white'
              }`}
            >
              <span className={`h-4 w-4 flex-shrink-0 rounded-full border-2 ${on ? 'border-[#00AEEF] bg-[#00AEEF]' : 'border-neutral-500'}`} aria-hidden="true" />
              {o.label}
            </button>
          )
        })}
      </div>
      <div key={current.slug} className="ad-fade rounded-3xl border border-white/[0.08] bg-[#111827] p-6 sm:p-8" aria-live="polite">
        <p className="text-sm font-semibold text-[#7D9CCB]">{labels.startHere}</p>
        <h3 className="mt-2 font-heading text-2xl font-bold text-white">{current.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-neutral-300">{current.answer}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={current.href} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]">
            {labels.readPage}
          </Link>
          <AskButton text={current.label} label={labels.askFits} className="text-sm font-semibold text-white underline-offset-4 hover:underline" />
        </div>
      </div>
    </div>
  )
}
