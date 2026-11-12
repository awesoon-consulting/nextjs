'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { siteConfig } from '@/src/config/site'
import IsoNodes from '@/src/components/ui/IsoNodes'
import ServiceIcon from '@/src/components/ui/ServiceIcon'

const solutionLabel = new Map<string, string>(
  siteConfig.footer.solutionLinks.map((l) => [l.href.replace('/solutions/', ''), l.labelKey]),
)

export default function ServiceTabs() {
  const t = useTranslations()
  const locale = useLocale()
  const [active, setActive] = useState(0)
  const [clean, setClean] = useState(true)
  const svc = siteConfig.services[active]
  const name = t(`serviceLines.${svc.key}.name`)
  const items = [
    ...svc.solutions.map((slug) => ({ href: `/solutions/${slug}`, label: t(solutionLabel.get(slug) ?? '') })),
    ...svc.extras.map((x) => ({ href: x.href, label: t(x.labelKey) })),
  ].slice(0, 6)

  return (
    <section className="w-full bg-white py-24 dark:bg-primary" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="services-title" className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl dark:text-white">
          {t('serviceLines.title')}
        </h2>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="tablist">
          {siteConfig.services.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === active}
              aria-controls="service-panel"
              onClick={() => setActive(i)}
              className={`flex min-h-11 flex-shrink-0 items-center gap-2 rounded-full border py-1 pr-4 pl-1 text-sm font-medium whitespace-nowrap transition-colors ${
                i === active
                  ? 'border-primary bg-primary text-white dark:border-white dark:bg-white dark:text-primary'
                  : 'border-neutral-200 text-text-secondary hover:text-text-primary dark:border-white/10 dark:text-neutral-300 dark:hover:bg-white/[0.08] dark:hover:text-white'
              }`}
            >
              <ServiceIcon id={s.key} className={`!h-8 !w-8 !rounded-full ${i === active ? 'dark:!bg-primary/10 dark:!text-primary' : ''}`} />
              {t(`serviceLines.${s.key}.menuName`)}
            </button>
          ))}
        </div>

        <div
          id="service-panel"
          role="tabpanel"
          className="mt-8 grid overflow-hidden rounded-3xl border border-neutral-200 lg:grid-cols-2 dark:border-white/[0.08] dark:bg-[#111827]"
        >
          <div className="relative bg-neutral-100 p-6 sm:p-8 dark:bg-white/[0.03]">
            <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1 dark:border-white/10 dark:bg-[#111827]" role="group" aria-label={t('serviceLines.toggleLabel')}>
              {[false, true].map((v) => (
                <button
                  key={String(v)}
                  type="button"
                  aria-pressed={clean === v}
                  onClick={() => setClean(v)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    clean === v ? 'bg-primary text-white dark:bg-white dark:text-primary' : 'text-text-secondary dark:text-neutral-300 dark:hover:bg-white/[0.08] dark:hover:text-white'
                  }`}
                >
                  {t(v ? 'serviceLines.toggleAfter' : 'serviceLines.toggleBefore')}
                </button>
              ))}
            </div>
            <div className="mx-auto mt-4 aspect-[400/340] w-full max-w-md">
              <IsoNodes clean={clean} label={t('serviceLines.artLabel')} />
            </div>
            <p className="mt-2 text-center text-sm text-text-secondary dark:text-neutral-300">
              {t(`serviceLines.${svc.key}.${clean ? 'after' : 'before'}`)}
            </p>
          </div>
          <div className="flex flex-col p-6 sm:p-10">
            <h3 className="font-heading text-2xl font-semibold text-text-primary dark:text-white">{name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-text-secondary dark:text-neutral-300">{t(`serviceLines.${svc.key}.line`)}</p>
            <ul className="mt-6 divide-y divide-neutral-200 dark:divide-white/10">
              {items.map((x) => (
                <li key={x.href + x.label}>
                  <Link href={`/${locale}${x.href}`} className="flex items-center justify-between py-3 text-base text-text-primary hover:underline dark:text-white">
                    {x.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}${svc.href}`}
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-text-primary underline-offset-4 hover:underline dark:text-white"
            >
              {t('serviceLines.explore', { service: t(`serviceLines.${svc.key}.menuName`).toLowerCase() })} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
