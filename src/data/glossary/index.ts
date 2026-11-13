import { TERMS_A } from './terms-a'
import { TERMS_B } from './terms-b'
import { TERMS_C } from './terms-c'
import { TERMS_D } from './terms-d'
import type { GlossaryLocale, GlossaryTerm } from './types'

export type { GlossaryLocale, GlossaryTerm, GlossaryCategory, Hub, TermCopy } from './types'

export const GLOSSARY: GlossaryTerm[] = [...TERMS_A, ...TERMS_B, ...TERMS_C, ...TERMS_D].sort((x, y) =>
  x.copy.en.term.localeCompare(y.copy.en.term, 'en')
)

const BY_SLUG = new Map(GLOSSARY.map((t) => [t.slug, t]))

export const getTerm = (slug: string) => BY_SLUG.get(slug)
export const getAllTermSlugs = () => GLOSSARY.map((t) => t.slug)
export const asLocale = (l: string): GlossaryLocale => (l === 'fr' || l === 'es' ? l : 'en')
