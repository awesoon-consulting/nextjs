'use client'

import Link from 'next/link'
import { useState, type ReactNode } from 'react'

export interface HubPanel {
  country: string
  label: string
  content: ReactNode
}

export default function HubSwitcher({ panels, label }: { panels: HubPanel[]; label: string }) {
  const [active, setActive] = useState(panels[0].country)
  return (
    <div>
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
        {panels.map((p) => {
          const on = p.country === active
          return (
            <button
              key={p.country}
              type="button"
              role="tab"
              id={`tab-${p.country}`}
              aria-selected={on}
              aria-controls={`panel-${p.country}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(p.country)}
              onKeyDown={(e) => {
                if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
                const i = panels.findIndex((x) => x.country === active)
                const next = panels[(i + (e.key === 'ArrowRight' ? 1 : panels.length - 1)) % panels.length]
                setActive(next.country)
                document.getElementById(`tab-${next.country}`)?.focus()
              }}
              className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors ${
                on ? 'border-white bg-white text-[#0A0A0A]' : 'border-white/20 text-neutral-200 hover:border-white/40 hover:bg-white/[0.06]'
              }`}
            >
              {p.label}
            </button>
          )
        })}
      </div>
      {panels.map((p) => (
        <div key={p.country} role="tabpanel" id={`panel-${p.country}`} aria-labelledby={`tab-${p.country}`} hidden={p.country !== active} className="mt-8">
          {p.content}
        </div>
      ))}
    </div>
  )
}

export function Tile({ href, name, open, awards, openLabel, awardsLabel }: { href: string; name: string; open: number; awards: number; openLabel: string; awardsLabel: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#111111] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-[#151515] motion-reduce:hover:translate-y-0"
    >
      <span className="font-heading text-base font-semibold text-white group-hover:text-[#C9D7EC]">{name}</span>
      <span className="mt-4 flex items-baseline gap-4 text-sm text-neutral-400">
        <span>
          <span className={`font-heading text-2xl font-bold tabular-nums ${open > 0 ? 'text-white' : 'text-neutral-500'}`}>{open}</span> {openLabel}
        </span>
        <span>
          <span className="font-semibold text-neutral-200 tabular-nums">{awards}</span> {awardsLabel}
        </span>
      </span>
    </Link>
  )
}
