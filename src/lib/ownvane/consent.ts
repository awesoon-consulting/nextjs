// Append only: a version's wording never changes once a page has shown it, because each signup stores the version.
// The page shows this wording in en, fr or es (messages/*.json ownvane.form.consent); the version covers all three.
// The sender address, contact, storage and use sit one link away on the same page (#waitlist-privacy).
export const CONSENT_WORDINGS: Record<string, string> = {
  '2026-11-19': 'Email me my Ownvane invite and launch news from Awesoon Technologies Inc. I can unsubscribe at any time.',
}

export const CURRENT_CONSENT_VERSION = '2026-11-19'
