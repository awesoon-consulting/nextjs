// Append only: a version's wording never changes once a page has shown it, because each signup stores the version.
// [address] and [contact] are filled from SENDER_POSTAL_ADDRESS and CONTACT_EMAIL when the form renders.
export const CONSENT_WORDINGS: Record<string, string> = {
  '2026-11-17':
    'Email me when TapBody is ready. TapBody is made by Awesoon Technologies Inc., and this list moves with TapBody if it becomes its own company. I can unsubscribe at any time.',
  '2026-11-18':
    'Email me when TapBody is ready, plus a few updates before launch. TapBody is made by Awesoon Technologies Inc., [address], [contact]. My email is stored with our database and email providers in the United States. If TapBody moves to its own company, that company may send these emails too. I can unsubscribe at any time.',
  // Short form on the Awesoon page; the sender address, contact, storage and use sit one link away on the same page.
  '2026-11-18b': 'Email me about TapBody from Awesoon Technologies Inc. I can unsubscribe at any time.',
}

export const CURRENT_CONSENT_VERSION = '2026-11-18b'

export function consentText(version: string, address: string, contact: string): string {
  return CONSENT_WORDINGS[version].replace('[address]', address).replace('[contact]', contact)
}
