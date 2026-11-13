import { getLocalizedSolutionBySlug } from './solutions'
import { getNewSpoke, type FaqItem, type Lang } from './spokes'
import { HUB_SPOKES, RENAMED, hubOf, type HubId } from './hub-map'

export { HUB_IDS, HUB_SPOKES, RENAMED, hubOf, spokePath, type HubId } from './hub-map'

const SOURCE: Record<string, string> = { 'software-selection': 'vendor-management' }

export const HUB_INSIGHTS: Record<HubId, string[]> = {
  automation: ['system-integration-guide', 'retire-spreadsheets-without-breaking-operations', 'ai-operations-readiness', 'building-rag-agents-for-operations'],
  'software-development': ['system-integration-guide', 'building-rag-agents-for-operations'],
  'erp-crm': ['why-erp-projects-fail', 'spreadsheet-to-erp-migration'],
  consulting: ['vendor-selection-process', 'vendor-selection-in-ai-and-integration-sprawl'],
}

const PORTAL: Record<string, string> = {
  'system-integration': 'Client or server programming services',
  'api-integrations': 'Client or server programming services',
  'ai-operations': 'IT expert services',
  'spreadsheet-operations': 'Database design and management',
  'mobile-warehouse-barcoding': 'Application programming services',
  'custom-api-development': 'Application programming services',
  'ecommerce-development': 'Application programming services',
  'erp-implementation': 'ERP or database applications programming services',
  'crm-implementation': 'CRM software',
  'systems-audit': 'IT expert services',
  'ops-outgrown-tools': 'IT expert services',
  'software-selection': 'IT expert services',
  'project-management': 'IT expert services',
  'operational-process-foundations': 'IT expert services',
}

const KEYWORDS: Record<string, string[]> = {
  'system-integration': ['connect', 'sync', 'shopify', 'integrat', 'intégr', 'conect', 'relier'],
  'api-integrations': ['api', 'webhook'],
  'ai-operations': ['ai', 'ia', 'rag', 'agent', 'gpt', 'copilot'],
  'spreadsheet-operations': ['spreadsheet', 'excel', 'sheet', 'tableur', 'hoja'],
  'mobile-warehouse-barcoding': ['warehouse', 'barcode', 'scan', 'entrepôt', 'almacén', 'código'],
  'database-management-service': ['backup', 'database', 'sauvegarde', 'respaldo', 'base de'],
  'custom-api-development': ['api', 'endpoint', 'portal'],
  'ecommerce-development': ['store', 'shop', 'ecommerce', 'boutique', 'tienda'],
  'application-programming': ['app', 'tool', 'internal', 'outil', 'herramienta', 'aplicación'],
  'client-server-programming': ['server', 'back end', 'backend', 'slow', 'serveur', 'servidor'],
  'database-design': ['data', 'report', 'numbers', 'donnée', 'dato', 'rapport', 'informe'],
  'database-interfaces': ['query', 'search', 'lookup', 'requête', 'consulta'],
  'interface-development': ['screen', 'ui', 'design', 'accessib', 'écran', 'pantalla'],
  'erp-implementation': ['erp', 'netsuite', 'dynamics', 'odoo', 'acumatica'],
  'crm-implementation': ['crm', 'salesforce', 'pipeline'],
  'erp-database-applications': ['custom', 'script', 'extension', 'upgrade', 'mesure', 'medida'],
  'crm-setup': ['hubspot', 'zoho', 'pipedrive', 'setup', 'configur'],
  'systems-audit': ['audit', 'review', 'check', 'health', 'examen', 'revisión'],
  'ops-outgrown-tools': ['grow', 'outgrown', 'scale', 'croiss', 'crec'],
  'software-selection': ['choose', 'select', 'vendor', 'which', 'choisir', 'elegir', 'fournisseur', 'proveedor'],
  'project-management': ['project', 'stuck', 'late', 'projet', 'proyecto'],
  'operational-process-foundations': ['process', 'sop', 'procédure', 'proceso'],
  'it-expert-services': ['expert', 'advice', 'opinion', 'conseil', 'consejo', 'experto'],
  'permanent-developers': ['hire', 'developer', 'staff', 'embauch', 'contratar', 'développeur', 'desarrollador'],
}

export function spokeKeywords(slug: string) {
  return KEYWORDS[slug] ?? []
}

export interface SpokeView {
  slug: string
  hub: HubId | 'games'
  title: string
  seo: string
  answer: string
  headline?: string
  problem: string[]
  whatWeDo: string[]
  howItRuns?: string[]
  keep?: string[]
  outcomes?: string[]
  faq?: FaqItem[]
  portalCategory?: string
  related: string[]
  insights: string[]
  platformSlug?: string
}

type Translator = (key: string) => string

export function getSpokeView(slug: string, locale: string, t: Translator): SpokeView | undefined {
  const lang = (['en', 'fr', 'es'].includes(locale) ? locale : 'en') as Lang
  const fresh = getNewSpoke(slug)
  const hub = slug === 'maintenance' ? 'games' : hubOf(slug)
  if (!hub) return undefined
  const siblings = hub === 'games' ? ['application-programming', 'client-server-programming', 'interface-development'] : HUB_SPOKES[hub].filter((s) => s !== slug)
  if (fresh) {
    const c = fresh.copy[lang]
    return {
      slug,
      hub,
      ...c,
      portalCategory: fresh.portalCategory,
      related: siblings.slice(0, 3),
      insights: hub === 'games' ? [] : HUB_INSIGHTS[hub].slice(0, 2),
    }
  }
  const source = SOURCE[slug] ?? slug
  const s = getLocalizedSolutionBySlug(source, locale)
  if (!s) return undefined
  return {
    slug,
    hub,
    title: t(s.titleKey),
    seo: s.seoSummary,
    answer: t(s.descriptionKey),
    headline: s.problemHeadline,
    problem: s.painPoints,
    whatWeDo: s.whatWeDo,
    outcomes: s.outcomes,
    portalCategory: PORTAL[slug],
    related: [...s.relatedSlugs.map((r) => RENAMED[r] ?? r).filter((r) => hubOf(r) === hub && r !== slug), ...siblings].filter((v, i, a) => a.indexOf(v) === i).slice(0, 3),
    insights: s.relatedInsightSlugs,
    platformSlug: source,
  }
}

export function spokeTitle(slug: string, locale: string, t: Translator): string {
  return getSpokeView(slug, locale, t)?.title ?? slug
}
