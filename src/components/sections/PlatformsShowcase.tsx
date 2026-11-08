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
import type { Platform } from '@/src/data/platforms'

interface Category {
  key: string
  label: string
  icon: string
  platforms: Platform[]
}

const categories: Category[] = [
  {
    key: 'erp',
    label: 'ERP',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    platforms: [
      { name: 'NetSuite', slug: 'netsuite', url: 'https://www.netsuite.com/', fit: 'Cloud-first ERP for multi-entity businesses with strong finance and reporting needs. Our top pick for growing companies that outgrew QuickBooks.' },
      { name: 'Odoo', slug: 'odoo', url: 'https://www.odoo.com/', fit: 'All-in-one suite: ERP, CRM, inventory, ecommerce. Ideal when you want a single connected stack without per-module vendor lock-in.' },
      { name: 'Epicor', slug: 'epicor', url: 'https://www.epicor.com/', fit: 'Deep manufacturing and distribution ERP with complex production workflows, BOMs, and shop floor control.' },
      { name: 'SAP Business One', slug: 'sap', url: 'https://www.sap.com/products/erp/business-one.html', fit: 'SAP-grade financial controls and audit trails without the overhead of a full S/4HANA deployment.' },
    ],
  },
  {
    key: 'crm',
    label: 'CRM',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    platforms: [
      { name: 'Salesforce', slug: 'salesforce', url: 'https://www.salesforce.com/', fit: 'Sales-led organizations with complex pipelines, custom objects, and high forecast accuracy requirements.' },
      { name: 'HubSpot', slug: 'hubspot', url: 'https://www.hubspot.com/', fit: 'Marketing-driven teams that want fast adoption, inbound workflows, and tight sales-marketing alignment.' },
      { name: 'Zoho CRM', slug: 'zoho', url: 'https://www.zoho.com/crm/', fit: 'Full CRM suite without enterprise pricing. Great for lean teams that need breadth without complexity.' },
      { name: 'Pipedrive', slug: 'pipedrive', url: 'https://www.pipedrive.com/', fit: 'Dead-simple pipeline visibility for small sales teams that want speed over configuration depth.' },
    ],
  },
  {
    key: 'ecom',
    label: 'Ecommerce',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    platforms: [
      { name: 'Shopify', slug: 'shopify', url: 'https://www.shopify.com/', fit: 'Our default for B2C and mid-complexity B2B. Fast to launch, easy to operate, huge app ecosystem.' },
      { name: 'Magento', slug: 'magento', url: 'https://business.adobe.com/products/magento/magento-commerce.html', fit: 'Complex catalogs, tiered B2B pricing, and deep customization. When Shopify is not enough.' },
      { name: 'WooCommerce', slug: 'woocommerce', url: 'https://woocommerce.com/', fit: 'Content-driven stores built on WordPress with full ownership of the hosting and plugin stack.' },
      { name: 'BigCommerce', slug: 'bigcommerce', url: 'https://www.bigcommerce.com/', fit: 'Hybrid SaaS/headless with stronger native B2B features than Shopify Basic.' },
    ],
  },
  {
    key: 'integration',
    label: 'Integration',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    platforms: [
      { name: 'Celigo', slug: 'celigo', url: 'https://www.celigo.com/', fit: 'iPaaS purpose-built for NetSuite and ecommerce. Pre-built connectors for the stack we work with most.' },
      { name: 'Boomi', slug: 'boomi', url: 'https://boomi.com/', fit: 'Enterprise-grade integration with strong data transformation, governance, and error handling.' },
      { name: 'Zapier', slug: 'zapier', url: 'https://zapier.com/', fit: 'Fast SaaS-to-SaaS automation when you need speed over depth. Great for non-critical workflows.' },
      { name: 'Make', slug: 'make', url: 'https://www.make.com/', fit: 'Visual workflow builder with deeper logic than Zapier. Our pick for complex multi-step flows.' },
    ],
  },
  {
    key: 'ai',
    label: 'AI & Data',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    platforms: [
      { name: 'OpenAI', slug: 'openai', url: 'https://openai.com/', fit: 'GPT-based copilots, reasoning, and document intelligence. Our primary for customer-facing AI.' },
      { name: 'Anthropic', slug: 'anthropic', url: 'https://www.anthropic.com/', fit: 'Claude for long-context analysis, production agents, and safer tool-use patterns.' },
      { name: 'LangChain', slug: 'langchain', url: 'https://www.langchain.com/', fit: 'Framework for building RAG pipelines, agents, and multi-step AI workflows.' },
      { name: 'PostgreSQL', slug: 'postgresql', url: 'https://www.postgresql.org/', fit: 'Our default database with pgvector for AI embeddings. No separate vector DB needed.' },
    ],
  },
]

export default function PlatformsShowcase() {
  const [activeCat, setActiveCat] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)

  const category = categories[activeCat]
  const platform = category.platforms[activeIdx]

  return (
    <section className="py-24 bg-neutral-50 dark:bg-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-plat" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-plat)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-white/40 mb-3">
            Versatile by design
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary dark:text-white mb-4">
            The platforms we actually know
          </h2>
          <p className="text-lg text-text-secondary dark:text-neutral-400 max-w-2xl mx-auto">
            We are vendor-neutral; we pick what fits your operations, not what pays us the highest commission.
          </p>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Platform categories"
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCat === i}
              onClick={() => {
                setActiveCat(i)
                setActiveIdx(0)
              }}
              className={[
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                activeCat === i
                  ? 'bg-primary text-white shadow-md scale-105 dark:bg-accent dark:text-primary'
                  : 'bg-white text-text-secondary hover:bg-neutral-100 border border-neutral-200 dark:bg-white/5 dark:text-neutral-300 dark:border-white/10 dark:hover:bg-white/10',
              ].join(' ')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
              </svg>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Detail strip */}
        <div
          className="mb-5 rounded-2xl border border-neutral-200 bg-white shadow-md dark:border-white/10 dark:bg-white/[0.03] overflow-hidden"
          aria-live="polite"
        >
          <div key={`${activeCat}-${activeIdx}`} className="p-6 platform-detail-anim">
          <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${platform.name} website`}
              className="flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-white border-2 border-neutral-200 shadow-sm dark:bg-white dark:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/platforms/${platform.slug}.svg`}
                alt={platform.name}
                style={{ height: '44px', width: 'auto', maxWidth: '64px' }}
                className="object-contain"
              />
            </a>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-heading font-bold text-xl text-text-primary dark:text-white">
                  {platform.name}
                </h3>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent hover:text-white dark:bg-accent/20 dark:hover:bg-accent dark:hover:text-primary transition-all"
                >
                  Official site
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-text-secondary dark:text-neutral-300 leading-relaxed">
                {platform.fit}
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* Logo grid: 4 columns, prominent */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {category.platforms.map((p, i) => {
            const isActive = activeIdx === i
            return (
              <button
                key={p.slug + i}
                type="button"
                onClick={() => {
                  if (isActive) {
                    window.open(p.url, '_blank', 'noopener,noreferrer')
                  } else {
                    setActiveIdx(i)
                  }
                }}
                onMouseEnter={() => setActiveIdx(i)}
                aria-pressed={isActive}
                aria-label={isActive ? `Open ${p.name} website` : `Select ${p.name}`}
                className={[
                  'group relative flex flex-col items-center justify-center gap-3 py-7 px-3 cursor-pointer',
                  'rounded-2xl border-2 transition-all duration-300 ease-out',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  isActive
                    ? 'border-accent bg-accent/[0.06] shadow-lg scale-[1.02] dark:border-accent dark:bg-accent/[0.08]'
                    : 'border-neutral-200 bg-white hover:border-accent/50 hover:-translate-y-1 hover:shadow-md dark:border-white/15 dark:bg-white/[0.04] dark:hover:border-white/30 dark:hover:bg-white/[0.08]',
                ].join(' ')}
              >
                {/* White tile for logo so brand colors have consistent contrast */}
                <div className="pointer-events-none flex items-center justify-center h-14 w-24 rounded-xl bg-white border border-neutral-200 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/platforms/${p.slug}.svg`}
                    alt={p.name}
                    style={{ height: '40px', width: 'auto', maxWidth: '80px' }}
                    className={[
                      'object-contain transition-transform duration-200',
                      isActive ? 'scale-110' : 'group-hover:scale-105',
                    ].join(' ')}
                  />
                </div>
                <span
                  className={[
                    'pointer-events-none text-sm font-semibold transition-colors text-center',
                    isActive ? 'text-accent dark:text-accent' : 'text-text-primary dark:text-white/80',
                  ].join(' ')}
                >
                  {p.name}
                </span>
              </button>
            )
          })}
        </div>

        <p className="text-center text-xs text-text-muted dark:text-neutral-500 mt-8">
          And many more: Shopify, Docker, AWS, Google Cloud, Airtable, Notion, Jira, Linear, Monday, Asana, Confluence, Pipedrive, Fishbowl, Zebra, Make, n8n, and others.
        </p>
      </div>
    </section>
  )
}
