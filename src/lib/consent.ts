/**
 * Consent management helpers.
 * Reads and writes user consent preferences to localStorage.
 * Used by ConsentManager to initialize and update gtag consent mode v2.
 */

export type ConsentCategories = {
  necessary: boolean // always true — cannot be toggled
  analytics: boolean
  marketing: boolean
}

export const CONSENT_KEY = 'awesoon_consent'

/**
 * Read consent from localStorage. Returns null if not yet set.
 */
export function getConsent(): ConsentCategories | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentCategories
    // Necessary is always true
    return { ...parsed, necessary: true }
  } catch {
    return null
  }
}

/**
 * Write consent to localStorage. Ensures necessary is always true.
 */
export function setConsent(categories: ConsentCategories): void {
  if (typeof window === 'undefined') return
  const safe: ConsentCategories = { ...categories, necessary: true }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(safe))
}

/**
 * Returns true if the user has made a consent decision (accept or reject).
 */
export function hasConsent(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(CONSENT_KEY) !== null
}

/**
 * Clear all consent records (e.g., if user requests data deletion).
 */
export function clearConsent(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CONSENT_KEY)
}

/**
 * Check if a specific consent category is granted.
 */
export function isConsentGranted(category: keyof ConsentCategories): boolean {
  const consent = getConsent()
  if (!consent) return false
  return consent[category] === true
}
