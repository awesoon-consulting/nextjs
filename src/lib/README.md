# Library Utilities — `/src/lib`

## `consent.ts` — Cookie Consent

Reads and writes consent preferences from `localStorage`.

```typescript
import { getConsent, setConsent, hasConsent, isConsentGranted } from '@/src/lib/consent'

// Check if user has made a consent decision
hasConsent()  // boolean

// Read current consent
getConsent()  // ConsentCategories | null

// Set consent (e.g., after user clicks "Accept All")
setConsent({ necessary: true, analytics: true, marketing: false })

// Check specific category
isConsentGranted('analytics')  // boolean
```

**Storage key:** `awesoon_consent` in localStorage.

**ConsentCategories type:**
```typescript
type ConsentCategories = {
  necessary: boolean  // always true
  analytics: boolean  // Google Analytics 4
  marketing: boolean  // Marketing cookies
}
```

## `analytics.ts` — GA4 Events

All functions are no-ops if analytics consent is not granted.

```typescript
import { trackEvent, trackPageView, trackCTAClick } from '@/src/lib/analytics'

trackEvent('custom_event', { param1: 'value' })
trackPageView('/en/solutions')
trackCTAClick('Get a Free Audit', 'hero')
trackFormStep(1, 'Your Business')
trackFormSubmit('contact-form')
```

**Never fires until analytics consent is granted.** Checks `isConsentGranted('analytics')` before every call.

## `sheets.ts` — Google Sheets API

Server-side only. Uses service account authentication.

```typescript
import { appendLeadRow, ensureHeaderRow } from '@/src/lib/sheets'

// Append a lead submission
await appendLeadRow(formData)

// Ensure header row exists (run once during setup)
await ensureHeaderRow()
```

**Required environment variables:**
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_SPREADSHEET_ID`

**Column order in sheet:**
Timestamp | Name | Company | Email | Phone | Industry | Company Size | Problems | Timeline | Budget | Message | Locale | Source URL
