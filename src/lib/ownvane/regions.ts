// ISO 3166-2 codes. Must match the region check in supabase/migrations/20261119000000_ownvane_waitlist.sql.
export const CANADA_REGIONS = ['CA-AB', 'CA-BC', 'CA-MB', 'CA-NB', 'CA-NL', 'CA-NS', 'CA-ON', 'CA-PE', 'CA-QC', 'CA-SK', 'CA-NT', 'CA-NU', 'CA-YT'] as const

export const US_REGIONS = [
  'US-AL', 'US-AK', 'US-AZ', 'US-AR', 'US-CA', 'US-CO', 'US-CT', 'US-DE', 'US-DC', 'US-FL', 'US-GA', 'US-HI', 'US-ID',
  'US-IL', 'US-IN', 'US-IA', 'US-KS', 'US-KY', 'US-LA', 'US-ME', 'US-MD', 'US-MA', 'US-MI', 'US-MN', 'US-MS', 'US-MO',
  'US-MT', 'US-NE', 'US-NV', 'US-NH', 'US-NJ', 'US-NM', 'US-NY', 'US-NC', 'US-ND', 'US-OH', 'US-OK', 'US-OR', 'US-PA',
  'US-RI', 'US-SC', 'US-SD', 'US-TN', 'US-TX', 'US-UT', 'US-VT', 'US-VA', 'US-WA', 'US-WV', 'US-WI', 'US-WY',
] as const

export type Region = (typeof CANADA_REGIONS)[number] | (typeof US_REGIONS)[number]

const ALL: ReadonlySet<string> = new Set([...CANADA_REGIONS, ...US_REGIONS])

export function isRegion(value: unknown): value is Region {
  return typeof value === 'string' && ALL.has(value)
}
