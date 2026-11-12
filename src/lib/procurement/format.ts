export function fmt(s: string, vars: Record<string, string | number> = {}) {
  return s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
}

export function money(locale: string, value: number | null, currency: string, compact = false) {
  if (value === null) return null
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: compact && value >= 1000 ? 1 : 0,
    notation: compact ? 'compact' : 'standard',
  }).format(value)
}

export function date(locale: string, d: string | null) {
  if (!d) return null
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(d))
}

