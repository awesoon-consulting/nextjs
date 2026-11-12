'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useLocale, useMessages, useTranslations } from 'next-intl'
import { siteConfig } from '@/src/config/site'
import ServiceIcon from '@/src/components/ui/ServiceIcon'

const SUPPORT_ICONS = ['systemsSupport', 'crmSupport', 'erpSupport', 'ecommerceSupport']
const LAYER = [
  { top: '#33B8F0', left: '#0E6A9E', right: '#0B5580' },
  { top: '#7FD6F7', left: '#00AEEF', right: '#0090C6' },
  { top: '#2E5677', left: '#193C57', right: '#102A3F' },
  { top: '#33B8F0', left: '#0E6A9E', right: '#0B5580' },
]

function IsoPath({ lit, label }: { lit: number; label: string }) {
  const pts = [0, 1, 2, 3].map((i) => ({ x: 60 + i * 160, y: 70 - (i % 2) * 24 }))
  return (
    <svg viewBox="0 0 600 120" className="h-auto w-full" role="img" aria-label={label}>
      {pts.slice(1).map((p, i) => (
        <line
          key={i}
          x1={pts[i].x}
          y1={pts[i].y}
          x2={p.x}
          y2={p.y}
          strokeWidth={2}
          strokeDasharray={i < lit - 1 ? '0' : '4 6'}
          className={i < lit - 1 ? 'stroke-[#00AEEF]' : 'stroke-[#0F1D33]/30 dark:stroke-white/20'}
          style={{ transition: 'stroke 600ms' }}
        />
      ))}
      {pts.map((p, i) => {
        const on = i < lit
        const c = LAYER[i]
        return (
          <g key={i} style={{ transform: `translate(${p.x}px, ${p.y}px)`, opacity: on ? 1 : 0.35, transition: 'opacity 600ms' }}>
            <path d="M0 -16 L28 0 L0 16 L-28 0 Z" fill={c.top} />
            <path d="M-28 0 L0 16 L0 30 L-28 14 Z" fill={c.left} />
            <path d="M28 0 L0 16 L0 30 L28 14 Z" fill={c.right} />
            <text y={4} textAnchor="middle" className="fill-white font-heading text-[11px] font-semibold">
              0{i + 1}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export default function HowWeWork() {
  const t = useTranslations()
  const locale = useLocale()
  const messages = useMessages() as { process: { steps: { title: string }[] }; howWeWork: { steps: string[] } }
  const steps = messages.process.steps.map((s, i) => ({ title: s.title, description: messages.howWeWork.steps[i] }))
  const [lit, setLit] = useState(1)
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setLit(4), 0)
      return () => window.clearTimeout(id)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setLit((n) => Math.max(n, Number((e.target as HTMLElement).dataset.step)))
        })
      },
      { threshold: 0.6 },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const card =
    'flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 transition-colors dark:border-white/[0.08] dark:bg-[#111827]'

  return (
    <section className="w-full bg-neutral-100 py-24 dark:bg-[#0B1322]" aria-labelledby="how-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="how-title" className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl dark:text-white">
          {t('howWeWork.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary dark:text-neutral-300">{t('howWeWork.subtitle')}</p>
        <div className="mt-10 hidden lg:block">
          <IsoPath lit={lit} label={t('howWeWork.pathLabel')} />
        </div>
        <ol className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={i}
              ref={(el) => {
                refs.current[i] = el
              }}
              data-step={i + 1}
            >
              <div className={`${card} ${i < lit ? 'border-[#0F1D33]/40 dark:border-white/20' : ''}`}>
                <span className="font-heading text-sm font-semibold text-accent dark:text-[#00AEEF]">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-text-primary dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary dark:text-neutral-300">{s.description}</p>
                <div className="mt-auto pt-4">
                {i === 0 && (
                  <div className="flex flex-wrap gap-2">
                    {[t('howWeWork.freeAfterCall'), t('process.deliveredHealthCheck')].map((c) => (
                      <span key={c} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-text-secondary dark:bg-white/10 dark:text-neutral-300">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                {i === 3 && (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-text-primary underline-offset-4 hover:underline dark:text-white">
                      {t('howWeWork.supportToggle')}
                      <svg className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {siteConfig.footer.supportLinks.map((l, j) => (
                        <li key={l.href}>
                          <Link href={`/${locale}${l.href}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary dark:text-neutral-300 dark:hover:text-white">
                            <ServiceIcon id={SUPPORT_ICONS[j]} className="!h-8 !w-8" />
                            {t(l.labelKey)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex justify-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary dark:bg-white dark:text-primary dark:hover:bg-[#E5E5E5]"
          >
            {t('closing.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
