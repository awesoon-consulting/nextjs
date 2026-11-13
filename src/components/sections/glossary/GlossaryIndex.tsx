'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import AskButton from './AskButton'
import { chip, ghostBtn, lift, primaryBtn } from './ui'

export interface IndexItem {
  slug: string
  term: string
  definition: string
  category: string
}

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const letterOf = (s: string) => {
  const c = fold(s).charAt(0).toUpperCase()
  return /[A-Z]/.test(c) ? c : '#'
}
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function GlossaryIndex({ items, categories }: { items: IndexItem[]; categories: string[] }) {
  const t = useTranslations('glossaryPage')
  const locale = useLocale()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<string>('all')

  const shown = useMemo(() => {
    const f = fold(q.trim())
    return items.filter((i) => (cat === 'all' || i.category === cat) && (!f || fold(i.term).includes(f) || fold(i.definition).includes(f)))
  }, [items, q, cat])

  const groups = useMemo(() => {
    const m = new Map<string, IndexItem[]>()
    for (const i of shown) {
      const l = letterOf(i.term)
      m.set(l, [...(m.get(l) ?? []), i])
    }
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b))
  }, [shown])
  const present = new Set(groups.map(([l]) => l))

  return (
    <div>
      <div className="sticky top-[72px] z-20 -mx-4 border-b border-white/10 bg-[#0A0A0A]/90 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
        <label htmlFor="gl-search" className="sr-only">
          {t('searchLabel')}
        </label>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 focus-within:border-white focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#7D9CCB]">
          <svg className="h-4 w-4 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
          </svg>
          <input
            id="gl-search"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('searchPlaceholder')}
            autoComplete="off"
            className="min-h-12 min-w-0 flex-1 bg-transparent text-base text-white placeholder:text-neutral-400 focus:outline-none"
          />
        </div>
        <nav aria-label={t('lettersLabel')} className="mt-3 flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none]">
          {LETTERS.map((l) =>
            present.has(l) ? (
              <a key={l} href={`#letter-${l}`} className="flex h-9 min-w-9 items-center justify-center rounded-lg text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]">
                {l}
              </a>
            ) : (
              <span key={l} aria-hidden="true" className="flex h-9 min-w-9 items-center justify-center text-sm text-neutral-600">
                {l}
              </span>
            )
          )}
        </nav>
        <div role="group" aria-label={t('categoriesLabel')} className="mt-2 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {['all', ...categories].map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`${chip(cat === c)} flex-shrink-0`}>
              {c === 'all' ? t('all') : t(`categories.${c}`)}
            </button>
          ))}
        </div>
        <p className="mt-2 text-sm text-neutral-400" aria-live="polite">
          {t('count', { count: shown.length })}
        </p>
      </div>

      {shown.length === 0 && (
        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-white/[0.08] bg-[#111827] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-white">{t('empty')}</p>
          <div className="flex gap-2.5">
            <AskButton text={q} className={`${primaryBtn} min-h-11 px-5 text-sm`}>
              {t('askHero')}
            </AskButton>
            <button type="button" onClick={() => { setQ(''); setCat('all') }} className={`${ghostBtn} min-h-11 px-5 text-sm`}>
              {t('clear')}
            </button>
          </div>
        </div>
      )}

      {groups.map(([letter, list]) => (
        <section key={letter} id={`letter-${letter}`} aria-labelledby={`h-${letter}`} className="scroll-mt-64 pt-10">
          <h3 id={`h-${letter}`} className="font-heading text-2xl font-bold text-white">
            {letter}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {list.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/${locale}/glossary/${i.slug}`}
                  className={`group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 ${lift}`}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-heading text-lg font-semibold text-white">{i.term}</span>
                    <span className="mt-1 flex-shrink-0 rounded-full bg-white/[0.06] px-2.5 py-0.5 text-xs text-neutral-300">{t(`categories.${i.category}`)}</span>
                  </span>
                  <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-300">{i.definition}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
