// NEEDS RAY'S CHECK: these codes are a reviewed first pass, not yet checked
// against the exact codes on the portals Awesoon bids on (open item
// `portal-category-codes` in the blueprint). Edit codes here only; every
// connector filters through this file.
//
// Codes are prefixes: a notice code matches when it starts with one, so
// "811115" covers the whole UNSPSC class 81111500. CanadaBuys notices carry
// UNSPSC beside GSIN, so UNSPSC matching covers them; add GSIN prefixes only
// if a portal lists GSIN alone. The GSIN-UNSPSC crosswalk loads into
// code_crosswalk for the code finder.
//
// The decision `public-sector-bidding` names these categories; the brief
// says 15, the decision text yields 13 once the programming and staffing
// lines are split out. Ray to confirm the missing two, if any.

export type Scheme = 'UNSPSC' | 'NAICS' | 'PSC' | 'CPV' | 'GSIN'

export interface PortalCategory {
  slug: string
  name: string
  codes: Partial<Record<Scheme, string[]>>
}

export const PORTAL_CATEGORIES: PortalCategory[] = [
  {
    slug: 'advertising-campaign-production',
    name: 'Advertising campaign and production services',
    codes: { UNSPSC: ['821018'], NAICS: ['541810', '512110'], PSC: ['R701'], CPV: ['793414', '793411', '92111'] },
  },
  {
    slug: 'application-programming',
    name: 'Application programming services',
    codes: { UNSPSC: ['81111504', '81111508', '81111509', '81111510'], NAICS: ['541511'], PSC: ['DA01', 'DA10'], CPV: ['722120', '72262', '72263'] },
  },
  {
    slug: 'client-server-programming',
    name: 'Client or server programming services',
    codes: { UNSPSC: ['81111506'], NAICS: ['541511'], PSC: ['DA01'], CPV: ['72212', '72262'] },
  },
  {
    slug: 'erp-database-programming',
    name: 'ERP or database applications programming services',
    codes: { UNSPSC: ['81111507'], NAICS: ['541511', '541512'], PSC: ['DA01', 'DA10'], CPV: ['72212451', '48451', '72263'] },
  },
  {
    slug: 'art-and-graphics',
    name: 'Art and graphics',
    codes: { UNSPSC: ['821415', '821416'], NAICS: ['541430'], PSC: ['T001'], CPV: ['798225', '79933'] },
  },
  {
    slug: 'banner-advertising',
    name: 'Banner advertising',
    codes: { UNSPSC: ['82101500'], NAICS: ['541850'], PSC: ['R701'], CPV: ['79341'] },
  },
  {
    slug: 'brand-marketing-materials',
    name: 'Brand marketing materials',
    codes: { UNSPSC: ['821017', '821015'], NAICS: ['541613', '541430'], PSC: ['R701', 'R708'], CPV: ['79342', '79340'] },
  },
  {
    slug: 'crm-software',
    name: 'CRM software',
    codes: { UNSPSC: ['432323'], NAICS: ['513210', '541511'], PSC: ['7A21', 'DA10'], CPV: ['48445', '72212445'] },
  },
  {
    slug: 'database-design-management',
    name: 'Database design and management',
    codes: { UNSPSC: ['81111704', '811120'], NAICS: ['518210', '541512'], PSC: ['DH01', 'DA01'], CPV: ['7232', '72322', '72319'] },
  },
  {
    slug: 'game-software-maintenance',
    name: 'Game and entertainment software maintenance',
    codes: { UNSPSC: ['811122'], NAICS: ['541511'], PSC: ['DA01'], CPV: ['72267', '72212520'] },
  },
  {
    slug: 'gui-development',
    name: 'Graphical user interface development',
    codes: { UNSPSC: ['81111512'], NAICS: ['541511'], PSC: ['DA01'], CPV: ['72212190', '72212'] },
  },
  {
    slug: 'it-expert-services',
    name: 'IT expert services',
    codes: { UNSPSC: ['811118', '811117', '811115'], NAICS: ['541512', '541519', '541690'], PSC: ['DF01', 'DA01', 'R499'], CPV: ['72220', '72221', '72224', '7260'] },
  },
  {
    slug: 'permanent-it-developers',
    name: 'Permanent IT developers (through a vetted staffing partner)',
    codes: { UNSPSC: ['801116', '801115'], NAICS: ['561311', '561320'], PSC: [], CPV: ['7962', '79630'] },
  },
]

export function matchCategories(scheme: Scheme, codes: string[]): string[] {
  const clean = codes.map((c) => c.replace(/[^0-9A-Za-z]/g, '').toUpperCase()).filter(Boolean)
  return PORTAL_CATEGORIES.filter((cat) =>
    (cat.codes[scheme] ?? []).some((p) => clean.some((c) => c.startsWith(p.toUpperCase()))),
  ).map((cat) => cat.slug)
}

export function codesFor(scheme: Scheme): string[] {
  return [...new Set(PORTAL_CATEGORIES.flatMap((c) => c.codes[scheme] ?? []))]
}
