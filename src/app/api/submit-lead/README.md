# API Route: POST /api/submit-lead

Accepts contact form submissions and appends them to a Google Sheet.

## Endpoint

`POST /api/submit-lead`

## Request Body

```json
{
  "name": "Jane Smith",
  "company": "Acme Manufacturing Inc.",
  "email": "jane@acmemfg.com",
  "phone": "+1 (555) 000-0000",
  "industry": "manufacturing",
  "companySize": "51-200",
  "problems": ["disconnected", "spreadsheets"],
  "timeline": "1-3-months",
  "budget": "25k-75k",
  "message": "Optional free text",
  "locale": "en",
  "submittedAt": "2026-03-21T14:30:00Z",
  "sourceUrl": "/en/contact"
}
```

## Required Fields

- `name` — non-empty string
- `email` — valid email format
- `company` — non-empty string
- `industry` — non-empty string
- `companySize` — non-empty string
- `problems` — non-empty array
- `timeline` — non-empty string
- `budget` — non-empty string

## Responses

| Status | Description |
|---|---|
| 200 | Success — row appended to Google Sheet |
| 400 | Validation failed — missing or invalid fields |
| 405 | Method not allowed — only POST is accepted |
| 429 | Rate limited — 10 submissions per IP per hour |
| 500 | Server error — Google Sheets API failure |

## Rate Limiting

The route uses in-memory rate limiting: **10 submissions per IP address per hour**.

Note: In-memory rate limiting is reset on server restart. For production with multiple instances (Vercel functions), consider using an external rate limiter like Upstash Redis.

## Google Sheets Column Mapping

| Column | Field |
|---|---|
| A | Timestamp |
| B | Name |
| C | Company |
| D | Email |
| E | Phone |
| F | Industry |
| G | Company Size |
| H | Problems (comma-separated) |
| I | Timeline |
| J | Budget |
| K | Message |
| L | Locale |
| M | Source URL |

## Setup

See the main `README.md` for Google Sheets service account setup instructions.
