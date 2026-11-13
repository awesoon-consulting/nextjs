export const COUNTRIES = {
  ca: { code: 'CA', sourceId: 'statcan-wages', currency: 'CAD' },
  us: { code: 'US', sourceId: 'bls-oews', currency: 'USD' },
  gb: { code: 'GB', sourceId: 'ons-ashe', currency: 'GBP' },
  au: { code: 'AU', sourceId: 'abs-earnings', currency: 'AUD' },
} as const

export type CountrySlug = keyof typeof COUNTRIES

export const COUNTRY_SLUGS = Object.keys(COUNTRIES) as CountrySlug[]

export function countrySlugFromCode(code: string): CountrySlug | null {
  return COUNTRY_SLUGS.find((s) => COUNTRIES[s].code === code) ?? null
}

// ONS ASHE is not loading yet; these ITL1 regions render as noindex "wage data coming" pages.
export const UK_REGIONS = [
  'North East',
  'North West',
  'Yorkshire and The Humber',
  'East Midlands',
  'West Midlands',
  'East of England',
  'London',
  'South East',
  'South West',
  'Wales',
  'Scotland',
  'Northern Ireland',
]

// National rows sit in the same table as regions; they are a baseline, not a page.
export const NATIONAL_ROWS = new Set(['Canada', 'Australia', 'United States', 'United Kingdom'])

const pairs = (s: string) =>
  s.split(';').flatMap((g) => {
    const [a, rest] = g.split(':')
    return rest.split(',').map((b) => [a.trim(), b.trim()] as const)
  })

const CA = pairs(
  'british-columbia:alberta,yukon,northwest-territories;alberta:saskatchewan,northwest-territories;saskatchewan:manitoba,northwest-territories;manitoba:ontario,nunavut;ontario:quebec;quebec:new-brunswick,newfoundland-and-labrador;new-brunswick:nova-scotia,prince-edward-island;nova-scotia:prince-edward-island,newfoundland-and-labrador;yukon:northwest-territories;northwest-territories:nunavut',
)

const US = pairs(
  'alabama:florida,georgia,mississippi,tennessee;arizona:california,colorado,nevada,new-mexico,utah;arkansas:louisiana,mississippi,missouri,oklahoma,tennessee,texas;california:nevada,oregon;colorado:kansas,nebraska,new-mexico,oklahoma,utah,wyoming;connecticut:massachusetts,new-york,rhode-island;delaware:maryland,new-jersey,pennsylvania;district-of-columbia:maryland,virginia;florida:georgia;georgia:north-carolina,south-carolina,tennessee;idaho:montana,nevada,oregon,utah,washington,wyoming;illinois:indiana,iowa,kentucky,missouri,wisconsin;indiana:kentucky,michigan,ohio;iowa:minnesota,missouri,nebraska,south-dakota,wisconsin;kansas:missouri,nebraska,oklahoma;kentucky:missouri,ohio,tennessee,virginia,west-virginia;louisiana:mississippi,texas;maine:new-hampshire;maryland:pennsylvania,virginia,west-virginia;massachusetts:new-hampshire,new-york,rhode-island,vermont;michigan:ohio,wisconsin;minnesota:north-dakota,south-dakota,wisconsin;mississippi:tennessee;missouri:nebraska,oklahoma,tennessee;montana:north-dakota,south-dakota,wyoming;nebraska:south-dakota,wyoming;nevada:oregon,utah;new-hampshire:vermont;new-jersey:new-york,pennsylvania;new-mexico:oklahoma,texas,utah;new-york:pennsylvania,vermont;north-carolina:south-carolina,tennessee,virginia;north-dakota:south-dakota;ohio:pennsylvania,west-virginia;oklahoma:texas;oregon:washington;pennsylvania:west-virginia;south-dakota:wyoming;tennessee:virginia;utah:wyoming;virginia:west-virginia;alaska:washington;hawaii:california',
)

const AU = pairs(
  'western-australia:northern-territory,south-australia;northern-territory:queensland,south-australia;queensland:new-south-wales,south-australia;new-south-wales:victoria,south-australia,australian-capital-territory;victoria:south-australia,tasmania',
)

const GB = pairs(
  'north-east:north-west,yorkshire-and-the-humber,scotland;north-west:yorkshire-and-the-humber,west-midlands,wales,east-midlands,scotland;yorkshire-and-the-humber:east-midlands;east-midlands:west-midlands,east-of-england,south-east;west-midlands:wales,south-west,south-east;east-of-england:london,south-east;london:south-east;south-east:south-west;south-west:wales;scotland:northern-ireland',
)

const ADJ: Record<CountrySlug, Map<string, Set<string>>> = { ca: new Map(), us: new Map(), gb: new Map(), au: new Map() }
for (const [c, list] of [['ca', CA], ['us', US], ['au', AU], ['gb', GB]] as const) {
  for (const [a, b] of list) {
    if (!ADJ[c].has(a)) ADJ[c].set(a, new Set())
    if (!ADJ[c].has(b)) ADJ[c].set(b, new Set())
    ADJ[c].get(a)!.add(b)
    ADJ[c].get(b)!.add(a)
  }
}

export function neighbours(country: CountrySlug, region: string): string[] {
  return [...(ADJ[country].get(region) ?? [])]
}
