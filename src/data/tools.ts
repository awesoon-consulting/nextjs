export type ToolHub = 'automation' | 'procurement' | 'erpCrm' | 'consulting' | 'design' | 'advertising'

export interface ToolEntry {
  id: string
  hub: ToolHub
  path?: string
}

export const TOOLS: ToolEntry[] = [
  { id: 'calculator', hub: 'automation', path: '/tools/manual-work-cost-calculator' },
  { id: 'finder', hub: 'procurement', path: '/tools/procurement-code-finder' },
  { id: 'erp', hub: 'erpCrm' },
  { id: 'health', hub: 'consulting' },
  { id: 'capability', hub: 'procurement' },
  { id: 'rfp', hub: 'procurement' },
  { id: 'integration', hub: 'automation' },
  { id: 'brand', hub: 'design' },
  { id: 'adSpecs', hub: 'advertising' },
  { id: 'processMaps', hub: 'consulting' },
]

export const TOOL_SITEMAP_PATHS = ['/tools', ...TOOLS.flatMap((t) => (t.path ? [t.path] : []))]
