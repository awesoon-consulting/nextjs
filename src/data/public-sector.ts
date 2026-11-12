import { PORTAL_CATEGORIES, type Scheme } from '@/src/lib/ingest/category-map'

export type CategoryGroup = 'it' | 'creative' | 'staffing'
export type Country = 'ca' | 'us' | 'uk' | 'au'

export const COUNTRIES: Country[] = ['ca', 'us', 'uk', 'au']

// The code schemes each country's portals list notices under. Awesoon's own
// codes stay "on request" until the open item `portal-category-codes` closes.
export const COUNTRY_SCHEMES: Record<Country, Scheme[]> = {
  ca: ['UNSPSC', 'GSIN'],
  us: ['NAICS', 'PSC'],
  uk: ['CPV'],
  au: ['UNSPSC'],
}

// IT and ERP lead, per the decision `public-sector-bidding`.
const ORDER: { slug: string; group: CategoryGroup }[] = [
  { slug: 'it-expert-services', group: 'it' },
  { slug: 'erp-database-programming', group: 'it' },
  { slug: 'crm-software', group: 'it' },
  { slug: 'application-programming', group: 'it' },
  { slug: 'client-server-programming', group: 'it' },
  { slug: 'database-design-management', group: 'it' },
  { slug: 'gui-development', group: 'it' },
  { slug: 'game-software-maintenance', group: 'it' },
  { slug: 'permanent-it-developers', group: 'staffing' },
  { slug: 'advertising-campaign-production', group: 'creative' },
  { slug: 'brand-marketing-materials', group: 'creative' },
  { slug: 'art-and-graphics', group: 'creative' },
  { slug: 'banner-advertising', group: 'creative' },
]

const KNOWN = new Set(PORTAL_CATEGORIES.map((c) => c.slug))

export const BID_CATEGORIES = ORDER.filter((c) => KNOWN.has(c.slug))

export const LEAD_SLUGS = ['it-expert-services', 'erp-database-programming', 'crm-software']

export const CAPABILITY_PDF = (locale: string) => `/capability-statement/awesoon-capability-statement-${locale}.pdf`
