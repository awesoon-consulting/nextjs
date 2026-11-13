export type HubId = 'automation' | 'software-development' | 'erp-crm' | 'consulting'
export const HUB_IDS: HubId[] = ['automation', 'software-development', 'erp-crm', 'consulting']

export const HUB_SPOKES: Record<HubId, string[]> = {
  automation: ['system-integration', 'api-integrations', 'ai-operations', 'spreadsheet-operations', 'mobile-warehouse-barcoding', 'database-management-service'],
  'software-development': ['custom-api-development', 'ecommerce-development', 'application-programming', 'client-server-programming', 'database-design', 'database-interfaces', 'interface-development'],
  'erp-crm': ['erp-implementation', 'crm-implementation', 'erp-database-applications', 'crm-setup'],
  consulting: ['systems-audit', 'ops-outgrown-tools', 'software-selection', 'project-management', 'operational-process-foundations', 'it-expert-services', 'permanent-developers'],
}

// Old /solutions/<slug> slugs that changed name when they moved into a hub.
export const RENAMED: Record<string, string> = { 'vendor-management': 'software-selection' }

export function hubOf(slug: string): HubId | undefined {
  return HUB_IDS.find((h) => HUB_SPOKES[h].includes(slug))
}

export function spokePath(oldOrNewSlug: string): string {
  const slug = RENAMED[oldOrNewSlug] ?? oldOrNewSlug
  if (slug === 'maintenance') return '/games/maintenance'
  const hub = hubOf(slug)
  return hub ? `/${hub}/${slug}` : '/solutions'
}
