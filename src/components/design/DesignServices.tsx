'use client'

import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { useMessages, useTranslations } from 'next-intl'
import type { DesignNeed } from '@/src/lib/assistant'
import { DESIGN_ASK_EVENT, NeedGlyph } from './DesignHero'

const TABS = ['brand', 'interface', 'system', 'art'] as const
type Tab = (typeof TABS)[number]
const NEED: Record<Tab, DesignNeed> = { brand: 'brand', interface: 'interface', system: 'system', art: 'graphics' }

const MIX = ['#7D9CCB', '#E0A458', '#5EC8A0', '#C77DFF', '#00AEEF', '#F87171']

function Mini({ tab, after }: { tab: Tab; after: boolean }) {
  const c = (i: number) => (after ? '#7D9CCB' : MIX[i % MIX.length])
  const r = (i: number) => (after ? 6 : [0, 10, 3, 14, 1, 8][i % 6])
  if (tab === 'brand')
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${12 + i * 62} ${after ? 24 : 18 + i * 9}) rotate(${after ? 0 : (i - 1) * 5})`}>
            <rect width="52" height="70" rx={r(i)} fill="#1F2937" />
            <rect x="8" y="10" width={after ? 24 : 18 + i * 8} height="6" rx="3" fill={c(i)} />
            <rect x="8" y="24" width="36" height="3" rx="1.5" fill="#4B5563" />
            <rect x="8" y="31" width="30" height="3" rx="1.5" fill="#4B5563" />
            <circle cx={after ? 40 : 14 + i * 12} cy="56" r="5" fill={c(i + 1)} />
          </g>
        ))}
      </svg>
    )
  if (tab === 'interface')
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full">
        <rect x="40" y="6" width="120" height="108" rx="12" fill="#1F2937" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={after ? 52 : 50 + [0, 14, 4, 20][i]}
            y={20 + i * 22}
            width={after ? 96 : [70, 60, 88, 50][i]}
            height="14"
            rx={r(i)}
            fill={after ? (i === 3 ? '#7D9CCB' : '#374151') : MIX[i]}
            opacity={after ? 1 : 0.8}
          />
        ))}
      </svg>
    )
  if (tab === 'system')
    return (
      <svg viewBox="0 0 200 120" className="h-full w-full">
        {after ? (
          <>
            <rect x="82" y="44" width="36" height="32" rx="8" fill="#7D9CCB" />
            {[
              [30, 18],
              [170, 18],
              [30, 102],
              [170, 102],
            ].map(([x, y], i) => (
              <g key={i}>
                <line x1="100" y1="60" x2={x} y2={y} stroke="#7D9CCB" strokeOpacity="0.5" strokeWidth="1.5" />
                <rect x={x - 16} y={y - 9} width="32" height="18" rx="6" fill="#1F2937" stroke="#7D9CCB" strokeWidth="1.5" />
              </g>
            ))}
          </>
        ) : (
          Array.from({ length: 12 }, (_, i) => (
            <rect key={i} x={18 + (i % 4) * 44} y={16 + Math.floor(i / 4) * 32} width="32" height="22" rx={r(i)} fill={['#5B7FB8', '#6A8CC4', '#7D9CCB', '#4E6FA3', '#8AA6D4', '#6B86B0'][i % 6]} />
          ))
        )}
      </svg>
    )
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full">
      {[0, 1, 2, 3].map((i) => {
        const x = after ? 14 + (i % 2) * 90 : [10, 100, 40, 128][i]
        const y = after ? 8 + Math.floor(i / 2) * 56 : [6, 14, 62, 58][i]
        return (
          <g key={i} transform={`translate(${x} ${y})`}>
            <rect width={after ? 82 : [70, 60, 80, 56][i]} height={after ? 48 : [44, 52, 40, 54][i]} rx={r(i)} fill="#1F2937" />
            <path d={`M8 ${after ? 40 : 36} L24 20 L36 32 L44 24 L58 ${after ? 40 : 36} Z`} fill={c(i)} />
            <circle cx={after ? 66 : 50} cy="14" r="5" fill={after ? '#00AEEF' : MIX[(i + 3) % 6]} />
          </g>
        )
      })}
    </svg>
  )
}

export default function DesignServices() {
  const t = useTranslations('designPage.services')
  const messages = useMessages() as { designPage: { services: { items: Record<Tab, { get: string[]; keep: string[] }> } } }
  const [active, setActive] = useState<Tab>('brand')
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1) as Tab
      if (TABS.includes(h)) {
        setActive(h)
        document.getElementById('design-services')?.scrollIntoView({ block: 'start' })
      }
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [])

  function onKey(e: KeyboardEvent, i: number) {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const n = (i + dir + TABS.length) % TABS.length
    setActive(TABS[n])
    tabRefs.current[n]?.focus()
  }

  const item = messages.designPage.services.items[active]

  return (
    <section id="design-services" className="w-full scroll-mt-20 bg-[#0B1322] py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="services-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>

        <div role="tablist" aria-label={t('title')} className="mt-10 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {TABS.map((k, i) => (
            <button
              key={k}
              id={`tab-${k}`}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              role="tab"
              type="button"
              aria-selected={active === k}
              aria-controls="design-service-panel"
              tabIndex={active === k ? 0 : -1}
              onClick={() => setActive(k)}
              onKeyDown={(e) => onKey(e, i)}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left font-heading text-sm font-semibold transition-colors sm:text-base ${
                active === k ? 'border-white bg-white text-[#0A0A0A]' : 'border-white/10 bg-[#111827] text-neutral-200 hover:border-white/25 hover:text-white'
              }`}
            >
              <NeedGlyph need={NEED[k]} className="h-8 w-8" />
              {t(`items.${k}.name`)}
            </button>
          ))}
        </div>

        <div
          id="design-service-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          key={active}
          className="design-fade mt-4 grid gap-6 rounded-3xl border border-white/[0.08] bg-[#111827] p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="flex flex-col">
            <p className="font-heading text-xl leading-snug font-semibold text-white sm:text-2xl">{t(`items.${active}.line`)}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {(['get', 'keep'] as const).map((col) => (
                <div key={col}>
                  <p className="text-sm font-semibold text-[#7D9CCB]">{t(col === 'get' ? 'getLabel' : 'keepLabel')}</p>
                  <ul className="mt-3 space-y-2.5">
                    {item[col].map((line) => (
                      <li key={line} className="flex gap-2.5 text-[15px] leading-snug text-neutral-200">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7D9CCB]" aria-hidden="true" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-7">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent(DESIGN_ASK_EVENT, { detail: NEED[active] }))}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                {t('start')}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[false, true].map((after) => (
              <figure key={String(after)} className={`flex flex-col rounded-2xl border p-3 ${after ? 'border-[#7D9CCB]/50 bg-[#0F1D33]' : 'border-white/[0.08] bg-[#0A0A0A]'}`}>
                <figcaption className="text-xs font-semibold text-neutral-300">{t(after ? 'after' : 'before')}</figcaption>
                <div className="my-3 aspect-[5/3] w-full">
                  <Mini tab={active} after={after} />
                </div>
                <p className="mt-auto text-sm leading-snug text-neutral-200">{t(`items.${active}.${after ? 'afterText' : 'beforeText'}`)}</p>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
