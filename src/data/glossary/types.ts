export type GlossaryLocale = 'en' | 'fr' | 'es'

export type GlossaryCategory =
  | 'operations'
  | 'finance'
  | 'systems'
  | 'integration'
  | 'erp'
  | 'crm'
  | 'data'
  | 'automation'
  | 'design'
  | 'advertising'
  | 'procurement'
  | 'support'

export type Hub =
  | '/automation'
  | '/software-development'
  | '/erp-crm'
  | '/consulting'
  | '/design'
  | '/advertising'
  | '/support'
  | '/public-sector'

export interface TermCopy {
  term: string
  definition: string
  explanation: string
  breaks: { title: string; detail: string }[]
  diagram?: string[]
  faq: { q: string; a: string }[]
}

export interface GlossaryTerm {
  slug: string
  category: GlossaryCategory
  hub: Hub
  related: string[]
  copy: Record<GlossaryLocale, TermCopy>
}
