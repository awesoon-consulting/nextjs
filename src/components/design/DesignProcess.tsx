'use client'

import { useEffect, useRef, useState } from 'react'
import { useMessages, useTranslations } from 'next-intl'
import { IsoPath } from '@/src/components/sections/HowWeWork'

export default function DesignProcess() {
  const t = useTranslations('designPage.process')
  const steps = (useMessages() as { designPage: { process: { steps: { title: string; text: string }[] } } }).designPage.process.steps
  const [lit, setLit] = useState(1)
  const refs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setLit(4), 0)
      return () => window.clearTimeout(id)
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setLit((n) => Math.max(n, Number((e.target as HTMLElement).dataset.step)))),
      { threshold: 0.6 },
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="w-full bg-[#0A0A0A] py-24" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="process-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>
        <div className="mt-10 hidden lg:block">
          <IsoPath lit={lit} label={t('pathLabel')} />
        </div>
        <ol className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-step={i + 1}
              ref={(el) => {
                refs.current[i] = el
              }}
            >
              <div className={`h-full rounded-3xl border bg-[#111827] p-6 transition-colors duration-500 ${i < lit ? 'border-white/20' : 'border-white/[0.08]'}`}>
                <span className="font-heading text-sm font-semibold text-[#00AEEF]">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
