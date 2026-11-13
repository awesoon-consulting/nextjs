import wages from '@/src/data/wages-snapshot.json'

export const ROLES = ['dataEntry', 'orderClerk', 'billingClerk', 'bookkeeping'] as const
export type Role = (typeof ROLES)[number]
export const COUNTRIES = ['CA', 'US', 'AU', 'UK'] as const
export type Country = (typeof COUNTRIES)[number]
export type WageCountry = Exclude<Country, 'UK'>

export const WAGES = wages
export const WEEKS_PER_YEAR = 52
// Full-time weeks used only to turn published figures into an hourly rate.
// BLS derives its hourly wages from annual ones at 2,080 hours (40 a week);
// Australia's National Employment Standards set 38 ordinary hours a week.
export const FULL_WEEK: Record<WageCountry, number> = { US: 40, CA: 40, AU: 38 }

export function regionsFor(country: WageCountry): string[] {
  return Object.keys(WAGES[country].regions)
}

export function hourlyWage(country: WageCountry, region: string, role: Role): number | undefined {
  if (country === 'US') {
    const annual = (WAGES.US.regions as Record<string, Partial<Record<Role, number>>>)[region]?.[role]
    return annual === undefined ? undefined : annual / (FULL_WEEK.US * WEEKS_PER_YEAR)
  }
  if (country === 'CA') return (WAGES.CA.regions as Record<string, number>)[region]
  const weekly = (WAGES.AU.regions as Record<string, number>)[region]
  return weekly === undefined ? undefined : weekly / FULL_WEEK.AU
}

export interface CostInput {
  country: WageCountry
  region: string
  roles: Role[]
  hoursPerWeek: number
  people: number
}

export interface CostResult {
  yearlyCost: number
  yearlyHours: number
  fullTimePeople: number
  averageHourly: number
  breakdown: { role: Role; hourly: number; cost: number }[]
}

// Hours are split evenly across the picked roles that have a published wage.
export function computeCost({ country, region, roles, hoursPerWeek, people }: CostInput): CostResult {
  const yearlyHours = hoursPerWeek * people * WEEKS_PER_YEAR
  const priced = roles.flatMap((role) => {
    const hourly = hourlyWage(country, region, role)
    return hourly === undefined ? [] : [{ role, hourly }]
  })
  const share = priced.length ? yearlyHours / priced.length : 0
  const breakdown = priced.map(({ role, hourly }) => ({ role, hourly, cost: share * hourly }))
  const yearlyCost = breakdown.reduce((s, b) => s + b.cost, 0)
  return {
    yearlyCost,
    yearlyHours: priced.length ? yearlyHours : 0,
    fullTimePeople: priced.length ? (hoursPerWeek * people) / FULL_WEEK[country] : 0,
    averageHourly: priced.length ? yearlyCost / yearlyHours : 0,
    breakdown,
  }
}
