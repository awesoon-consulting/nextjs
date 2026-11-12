'use client'

/**
 * @file     PlatformsShowcase.tsx
 * @layer    src > components > sections
 * @purpose  Homepage mid-section. Shows platforms grouped by category with
 *           colorful logos, always-visible detail strip, and category tabs.
 *           Anchors credibility in the middle of the page for visitors who
 *           scrolled past the hero but haven't hit a solution page yet.
 * @depends  Platform data from /src/data/platforms.ts
 */

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import type { Platform } from '@/src/data/platforms'

const MORE = ['Docker', 'AWS', 'Google Cloud', 'Airtable', 'Notion', 'Jira', 'Linear', 'Monday', 'Asana', 'Confluence', 'Fishbowl', 'Zebra', 'n8n']

interface Category {
  key: 'erp' | 'crm' | 'ecom' | 'integration' | 'ai'
  icon: string
  platforms: (Pick<Platform, 'name' | 'slug' | 'url'> & { short?: string })[]
}

const categories: Category[] = [
  {
    key: 'erp',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    platforms: [
      { name: 'NetSuite', slug: 'netsuite', url: 'https://www.netsuite.com/' },
      { name: 'Odoo', slug: 'odoo', url: 'https://www.odoo.com/' },
      { name: 'Epicor', slug: 'epicor', url: 'https://www.epicor.com/' },
      { name: 'SAP Business One', short: 'SAP B1', slug: 'sap', url: 'https://www.sap.com/products/erp/business-one.html' },
    ],
  },
  {
    key: 'crm',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    platforms: [
      { name: 'Salesforce', slug: 'salesforce', url: 'https://www.salesforce.com/' },
      { name: 'HubSpot', slug: 'hubspot', url: 'https://www.hubspot.com/' },
      { name: 'Zoho CRM', slug: 'zoho', url: 'https://www.zoho.com/crm/' },
      { name: 'Pipedrive', slug: 'pipedrive', url: 'https://www.pipedrive.com/' },
    ],
  },
  {
    key: 'ecom',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    platforms: [
      { name: 'Shopify', slug: 'shopify', url: 'https://www.shopify.com/' },
      { name: 'Magento', slug: 'magento', url: 'https://business.adobe.com/products/magento/magento-commerce.html' },
      { name: 'WooCommerce', slug: 'woocommerce', url: 'https://woocommerce.com/' },
      { name: 'BigCommerce', slug: 'bigcommerce', url: 'https://www.bigcommerce.com/' },
    ],
  },
  {
    key: 'integration',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    platforms: [
      { name: 'Celigo', slug: 'celigo', url: 'https://www.celigo.com/' },
      { name: 'Boomi', slug: 'boomi', url: 'https://boomi.com/' },
      { name: 'Zapier', slug: 'zapier', url: 'https://zapier.com/' },
      { name: 'Make', slug: 'make', url: 'https://www.make.com/' },
    ],
  },
  {
    key: 'ai',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    platforms: [
      { name: 'OpenAI', slug: 'openai', url: 'https://openai.com/' },
      { name: 'Anthropic', slug: 'anthropic', url: 'https://www.anthropic.com/' },
      { name: 'LangChain', slug: 'langchain', url: 'https://www.langchain.com/' },
      { name: 'PostgreSQL', slug: 'postgresql', url: 'https://www.postgresql.org/' },
    ],
  },
]

export default function PlatformsShowcase() {
  const t = useTranslations('platforms')
  const [activeCat, setActiveCat] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)
  const category = categories[activeCat]

  return (
    <section className="w-full bg-white py-24 dark:bg-primary" aria-labelledby="platforms-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 id="platforms-title" className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl dark:text-white">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-neutral-300">{t('text')}</p>
        </div>

        <div role="tablist" aria-label={t('categories')} className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCat === i}
              onClick={() => {
                setActiveCat(i)
                setActiveIdx(0)
              }}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeCat === i
                  ? 'border-primary bg-primary text-white dark:border-white dark:bg-white dark:text-primary'
                  : 'border-neutral-200 text-text-secondary hover:text-text-primary dark:border-white/10 dark:text-neutral-300'
              }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
              </svg>
              {t(`cat.${cat.key}`)}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {category.platforms.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setActiveIdx(i)}
              aria-pressed={activeIdx === i}
              className={`flex h-16 items-center gap-3 rounded-2xl border px-4 text-left transition-colors ${
                activeIdx === i
                  ? 'border-primary bg-white dark:border-white/40 dark:bg-[#111827]'
                  : 'border-neutral-200 bg-white hover:border-neutral-400 dark:border-white/[0.08] dark:bg-[#111827] dark:hover:border-white/20'
              }`}
            >
              <span className="flex h-8 w-14 flex-shrink-0 items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/platforms/${p.slug}.svg`}
                  alt=""
                  className={`max-h-7 max-w-full object-contain dark:brightness-0 dark:invert ${p.slug === 'epicor' ? 'scale-150' : ''}`}
                />
              </span>
              <span className="text-sm leading-tight font-semibold text-text-primary dark:text-white">
                {p.short ? (
                  <>
                    <span className="sm:hidden">{p.short}</span>
                    <span className="hidden sm:inline">{p.name}</span>
                  </>
                ) : (
                  p.name
                )}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-white/[0.08] dark:bg-[#111827]" aria-live="polite">
          <p className="text-sm leading-relaxed text-text-secondary dark:text-neutral-300">
            <span className="font-semibold text-text-primary dark:text-white">{category.platforms[activeIdx].name}. </span>
            {t(`fit.${category.platforms[activeIdx].slug}`)}{' '}
            <a href={category.platforms[activeIdx].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold whitespace-nowrap text-text-primary underline-offset-4 hover:underline dark:text-white">
              {t('officialSite')} <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-text-muted dark:text-neutral-400">{t('more')}</span>
          {MORE.map((m) => (
            <span key={m} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-text-secondary dark:border-white/10 dark:text-neutral-300">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
