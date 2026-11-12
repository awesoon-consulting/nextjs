'use client'

import { useEffect, useRef, useState } from 'react'
import { useMessages, useTranslations } from 'next-intl'
import { IsoPath } from '@/src/components/sections/HowWeWork'

export default function AdHow() {
  const t = useTranslations('advertisingPage.how')
  const steps = (useMessages() as { advertisingPage: { how: { steps: { title: string; text: string }[] } } }).advertisingPage.how.steps
  const [lit, setLit] = useState(1)
  const ref = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setLit(4), 0)
      return () => window.clearTimeout(id)
    }
    let timer = 0
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        const step = () => {
          setLit((n) => {
            if (n < 4) timer = window.setTimeout(step, 450)
            return Math.min(4, n + 1)
          })
        }
        timer = window.setTimeout(step, 200)
      },
      { threshold: 0.4 },
    )
    if (ref.current) io.observe(ref.current)
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <section className="w-full bg-[#0B1322] py-20 sm:py-24" aria-labelledby="ad-how-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="ad-how-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>
        <div className="mt-10 hidden lg:block">
          <IsoPath lit={lit} label={t('pathLabel')} />
        </div>
        <ol ref={ref} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`rounded-3xl border bg-[#111827] p-6 transition-colors duration-500 motion-reduce:transition-none ${i < lit ? 'border-white/20' : 'border-white/[0.08]'}`}
            >
              <span className="font-heading text-sm font-semibold text-[#00AEEF]">0{i + 1}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
