import type { GlossaryLocale } from '../glossary/types'

export interface CompareFact {
  area: Record<GlossaryLocale, string>
  a: Record<GlossaryLocale, string>
  b: Record<GlossaryLocale, string>
  sources: { label: string; url: string }[]
  asOf: string
}

export interface CompareCopy {
  title: string
  short: string
  intro: string
  situations: { label: string; verdict: string; why: string }[]
  framing: string[]
  faq: { q: string; a: string }[]
}

export interface Comparison {
  slug: string
  a: string
  b: string
  hub: '/erp-crm' | '/automation' | '/software-development' | '/consulting'
  relatedTerms: string[]
  checked: string
  facts: CompareFact[]
  copy: Record<GlossaryLocale, CompareCopy>
}
