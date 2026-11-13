import en from '@/messages/procurement/en.json'
import fr from '@/messages/procurement/fr.json'
import es from '@/messages/procurement/es.json'
import siteEn from '@/messages/en.json'
import siteFr from '@/messages/fr.json'
import siteEs from '@/messages/es.json'
import type { CountrySlug } from './data'

export { fmt, money, date } from './format'

export type Copy = typeof en

const COPY: Record<string, Copy> = { en, fr: fr as Copy, es: es as Copy }
const SITE: Record<string, typeof siteEn> = { en: siteEn, fr: siteFr as typeof siteEn, es: siteEs as typeof siteEn }

export const getCopy = (locale: string) => COPY[locale] ?? en

type Items = Record<string, { name: string; service: string }>

export function categoryName(locale: string, slug: string) {
  return ((SITE[locale] ?? siteEn).publicSector.categories.items as Items)[slug]?.name ?? slug
}

export function categoryService(locale: string, slug: string) {
  return ((SITE[locale] ?? siteEn).publicSector.categories.items as Items)[slug]?.service ?? ''
}

export const countryName = (locale: string, c: CountrySlug) => getCopy(locale).countries[c]
export const countryIn = (locale: string, c: CountrySlug) => getCopy(locale).countryIn[c]
