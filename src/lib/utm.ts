/**
 * @file     utm.ts
 * @layer    src > lib
 * @readme   ./README.md
 * @purpose  Capture and persist UTM parameters from URL across page navigations
 * @depends  none
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
const UTM_STORAGE_KEY = 'awesoon_utm'

export interface UtmParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  landing_page?: string
  referrer?: string
}

/**
 * Capture UTM params from the current URL and persist to sessionStorage.
 * Only overwrites if new UTM params are present (first-touch within session).
 */
export function captureUtmParams(): void {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const hasUtm = UTM_KEYS.some((key) => params.has(key))

  // Only capture if URL has UTM params and we haven't already stored them this session
  if (!hasUtm) return
  if (sessionStorage.getItem(UTM_STORAGE_KEY)) return

  const utm: UtmParams = {}
  for (const key of UTM_KEYS) {
    const val = params.get(key)
    if (val) utm[key] = val
  }
  utm.landing_page = window.location.pathname
  utm.referrer = document.referrer || undefined

  sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm))
}

/**
 * Retrieve stored UTM params. Returns empty object if none captured.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {}
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UtmParams) : {}
  } catch {
    return {}
  }
}
