# Awesoon,  Marketing Website

Production-ready multi-language marketing website for Awesoon, a B2B operations consulting firm.

**Stack:** Next.js 14+, TypeScript, Tailwind CSS, next-intl (EN/FR/ES), GA4, Google Sheets API v4

---

## 1. Local Development Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Install and Run

```bash
# Navigate to project directory
cd frontend/nextjs

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values (see section 2)

# Start development server
npm run dev
```

Open http://localhost:3000,  the middleware will redirect to `/en`.

---

## 2. Environment Variables

Create a `.env.local` file in the project root with these values:

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Yes (for form) | Service account email from Google Cloud Console |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Yes (for form) | Private key from service account JSON (keep `\n` escape sequences) |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | Yes (for form) | ID from the Google Sheet URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 Measurement ID (format: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_SITE_URL` | No | Production URL (default: `https://awesoon.com`) |

Example `.env.local`:

```
GOOGLE_SHEETS_CLIENT_EMAIL=awesoon-sheets@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIEo...\n-----END RSA PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://awesoon.com
```

The private key must be wrapped in double quotes in `.env.local` to preserve the `\n` characters.

---

## 3. Google Sheets Setup

### Step 1: Create a Google Cloud Project

1. Go to console.cloud.google.com
2. Create a new project (e.g., "Awesoon Website")
3. Enable the Google Sheets API under APIs & Services → Library

### Step 2: Create a Service Account

1. Go to APIs & Services → Credentials
2. Click "Create Credentials" → "Service Account"
3. Name it `awesoon-sheets` and click through
4. On the service account page, go to "Keys" → "Add Key" → "Create New Key" → JSON
5. Download the JSON file
6. From the JSON file, copy:
   - `client_email` → `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `private_key` → `GOOGLE_SHEETS_PRIVATE_KEY`

### Step 3: Create the Spreadsheet

1. Go to sheets.google.com and create a new spreadsheet
2. Name it "Awesoon Leads"
3. In the spreadsheet URL, copy the ID from `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
4. Set this as `GOOGLE_SHEETS_SPREADSHEET_ID`

### Step 4: Share the Spreadsheet

1. Click "Share" in the spreadsheet
2. Add the service account email (`client_email` from the JSON)
3. Give it "Editor" access

### Step 5: Add Header Row

Add these headers manually to row 1 of Sheet1:

```
Timestamp | Name | Company | Email | Phone | Industry | Company Size | Problems | Timeline | Budget | Message | Locale | Source URL
```

---

## 4. i18n Translation Instructions

Translations live in `/messages/`:
- `en.json`,  English (source of truth)
- `fr.json`,  French (machine-translated, marked TODO for professional review)
- `es.json`,  Spanish (machine-translated, marked TODO for professional review)

### Adding a New String

1. Add the key to `messages/en.json` in the appropriate namespace
2. Add the same key to `messages/fr.json` and `messages/es.json`
3. Use in components: `const t = useTranslations('namespace')` then `t('key')`

### Adding a New Language

1. Add the locale to `siteConfig.locales` in `src/config/site.ts`
2. Update the middleware in `middleware.ts`
3. Create `messages/[locale].json`
4. Add hreflang alternates in `app/[locale]/layout.tsx`

---

## 5. Updating Design Tokens

All design decisions live in `src/config/theme.ts`. This is the single source of truth.

To change the accent color: edit `theme.colors.accent.DEFAULT`. Tailwind picks it up via `tailwind.config.ts`. No component changes needed.

To change typography: edit `theme.typography.fontFamily` and update the font imports in `app/[locale]/layout.tsx`.

---

## 6. Deploying to Vercel

### Via Vercel Dashboard

1. Push to GitHub/GitLab/Bitbucket
2. Go to vercel.com → New Project → Import repository
3. In Environment Variables, add all variables from section 2
4. Click Deploy

### Via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Post-Deploy Checklist

- Set all environment variables in Vercel project settings
- Verify form submissions appear in Google Sheets
- Confirm GA4 only fires after analytics consent
- Test all three language routes (`/en`, `/fr`, `/es`)
- Verify cookie banner appears on first visit
- Test contact form through all 4 steps
- Check mobile layout on a real device

---

## 7. Sitemap

The site uses Next.js built-in sitemap generation via `app/sitemap.ts`.

For post-build sitemap generation with next-sitemap:

```bash
npm run build
npx next-sitemap
```

The `next-sitemap.config.js` outputs `sitemap.xml` and updates `public/robots.txt`.

---

## 8. Project Structure

```
app/                          # Next.js App Router
  [locale]/                   # Locale-prefixed routes (en/fr/es)
    layout.tsx                # Root layout with fonts, GA4, ConsentManager
    page.tsx                  # Home page
    solutions/                # Solutions overview + dynamic [slug]
    insights/                 # Blog index + dynamic [slug]
    about/
    contact/
    privacy/
    terms/
    cookies/
  api/submit-lead/            # Google Sheets form handler
  globals.css
  not-found.tsx
  sitemap.ts

messages/                     # i18n translation files
  en.json
  fr.json
  es.json

src/
  components/
    ui/                       # Button, Card, Badge, Input, Select, etc.
    layout/                   # Navbar, Footer, CookieBanner, ConsentManager
    sections/                 # Hero, ProcessSteps, SolutionGrid, etc.
    forms/                    # MultiStepForm, FormStep, FieldWrapper
  config/
    theme.ts                  # Design tokens (single source of truth)
    site.ts                   # Site config, nav links, contact info
  data/
    solutions.ts              # Solution page data
    insights.ts               # Blog post data
  lib/
    consent.ts                # Cookie consent read/write
    analytics.ts              # GA4 event helpers (consent-gated)
    sheets.ts                 # Google Sheets API client

middleware.ts                 # next-intl locale routing
tailwind.config.ts            # Extends design tokens
next.config.ts                # next-intl, image domains, security headers
```

---

## 9. Key Architecture Decisions

**Consent-first GA4:** gtag consent mode v2 defaults all storage to `denied`. Analytics only activates after explicit user consent via the cookie banner.

**No hardcoded strings:** All UI text goes through next-intl `useTranslations()`. Zero hardcoded English strings in components.

**No hardcoded hex colors:** All colors use Tailwind classes referencing `theme.ts` tokens.

**Form rate limiting:** The `/api/submit-lead` route has in-memory rate limiting (10 submissions/IP/hour).

**Service account auth:** Google Sheets uses a service account. The private key is a server-side environment variable only.
