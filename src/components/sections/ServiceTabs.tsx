'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { siteConfig } from '@/src/config/site'

const solutionLabel = new Map<string, string>(
  siteConfig.footer.solutionLinks.map((l) => [l.href.replace('/solutions/', ''), l.labelKey]),
)

export default function ServiceTabs() {
  const t = useTranslations()
  const locale = useLocale()
  const [active, setActive] = useState(0)
  const svc = siteConfig.services[active]
  const name = t(`serviceLines.${svc.key}.name`)

  return (
    <section className="w-full bg-white py-20 sm:py-24 dark:bg-primary" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="services-title" className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl dark:text-white">
          {t('serviceLines.title')}
        </h2>
        <div className="mt-8 flex gap-1 overflow-x-auto rounded-full border border-neutral-200 p-1 sm:w-fit dark:border-white/10" role="tablist">
          {siteConfig.services.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === active}
              aria-controls="service-panel"
              onClick={() => setActive(i)}
              className={`min-h-10 flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                i === active
                  ? 'bg-primary text-white dark:bg-white dark:text-primary'
                  : 'text-text-secondary hover:text-text-primary dark:text-neutral-300 dark:hover:text-white'
              }`}
            >
              {t(`serviceLines.${s.key}.name`)}
            </button>
          ))}
        </div>

        <div id="service-panel" role="tabpanel" className="mt-8 grid gap-6 rounded-3xl border border-neutral-200 p-6 sm:p-10 lg:grid-cols-2 dark:border-white/10">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-text-primary dark:text-white">{name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-text-secondary dark:text-neutral-300">{t(`serviceLines.${svc.key}.line`)}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-neutral-100 p-4 dark:bg-white/5">
                <p className="text-sm font-semibold text-text-muted dark:text-neutral-400">{t('serviceLines.before')}</p>
                <p className="mt-1 text-sm text-text-secondary dark:text-neutral-300">{t(`serviceLines.${svc.key}.before`)}</p>
              </div>
              <div className="rounded-2xl bg-accent p-4 text-white">
                <p className="text-sm font-semibold text-white/70">{t('serviceLines.after')}</p>
                <p className="mt-1 text-sm">{t(`serviceLines.${svc.key}.after`)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <ul className="divide-y divide-neutral-200 dark:divide-white/10">
              {svc.solutions.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/${locale}/solutions/${slug}`}
                    className="flex items-center justify-between py-3 text-base text-text-primary hover:underline dark:text-white"
                  >
                    {t(solutionLabel.get(slug) ?? '')}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
              {svc.extras.map((x) => (
                <li key={x.labelKey}>
                  <Link href={`/${locale}${x.href}`} className="flex items-center justify-between py-3 text-base text-text-primary hover:underline dark:text-white">
                    {t(x.labelKey)}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}${svc.href}`}
              className="w-fit rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
            >
              {t('serviceLines.explore', { service: name })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
