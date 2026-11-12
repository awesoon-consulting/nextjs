'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import s from './work.module.css'

export interface GridItem {
  id: string
  categories: string[]
  href: string
  name: string
  line: string
  system: string
  tags: string[]
  featured: boolean
  visual: ReactNode
}

interface Props {
  items: GridItem[]
  tabs: { id: string; label: string }[]
  filterLabel: string
  systemLabel: string
  openLabel: string
  shownLabel: string
}

export default function WorkGrid({ items, tabs, filterLabel, systemLabel, openLabel, shownLabel }: Props) {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? items : items.filter((i) => i.categories.includes(active))

  return (
    <div>
      <div role="group" aria-label={filterLabel} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {tabs.map((tab) => {
          const count = tab.id === 'all' ? items.length : items.filter((i) => i.categories.includes(tab.id)).length
          const on = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(tab.id)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] ${
                on ? 'border-white bg-white text-[#0A0A0A]' : 'border-white/15 text-neutral-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white'
              }`}
            >
              {tab.label}
              <span className={`text-xs tabular-nums ${on ? 'text-[#0A0A0A]/70' : 'text-neutral-400'}`}>{count}</span>
            </button>
          )
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} {shownLabel}
      </p>

      <ul className="mt-8 grid gap-5 md:grid-cols-6">
        {shown.map((item, i) => (
          <li key={`${active}-${item.id}`} className={`${s.reveal} ${active === 'all' ? (item.featured ? 'md:col-span-3' : 'md:col-span-2') : 'md:col-span-3'}`} style={{ animationDelay: `${i * 60}ms` }}>
            <Link
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827] transition-colors hover:border-white/[0.2] hover:bg-[#151C2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              {item.visual}
              <div className="relative flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`font-heading font-bold text-white ${item.featured && active === 'all' ? 'text-2xl' : 'text-xl'}`}>{item.name}</h3>
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all group-hover:translate-x-0.5 group-hover:border-white group-hover:bg-white group-hover:text-[#0A0A0A]">
                    <span className="sr-only">{openLabel}</span>
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-base leading-relaxed text-neutral-300">{item.line}</p>
                <div className="mt-auto pt-5">
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-300 md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100 motion-reduce:transition-none">
                    <div className="overflow-hidden">
                      <p className="mb-4 border-l-2 border-[#00AEEF] pl-3 text-sm leading-relaxed text-neutral-200">
                        <span className="font-semibold text-white">{systemLabel}. </span>
                        {item.system}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-neutral-300">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
