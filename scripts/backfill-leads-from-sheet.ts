import { google } from 'googleapis'
import { sql } from 'drizzle-orm'
import { getDb } from '../src/lib/ingest/db/client'
import { leads } from '../src/lib/ingest/db/schema'

// One-time copy of the old Google Sheet into the leads table. Read-only on the sheet;
// reruns skip rows already copied (unique on email + submitted_at).
async function main() {
  const db = getDb()
  if (!db) throw new Error('Set DATABASE_URL.')
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: 'Sheet1!A2:U',
  })
  const rows = ((res.data.values ?? []) as string[][]).filter((r) => r[3] && !Number.isNaN(Date.parse(r[0])))
  const c = (r: string[], i: number) => (r[i]?.trim() ? r[i].trim() : null)

  const values = rows.map((r) => ({
    submittedAt: new Date(r[0]),
    name: r[1] ?? '',
    company: r[2] ?? '',
    email: r[3].trim().toLowerCase(),
    phone: c(r, 4),
    industry: r[5] ?? '',
    companySize: r[6] ?? '',
    problems: (r[7] ?? '').split(',').map((p: string) => p.trim()).filter(Boolean),
    otherProblem: c(r, 8),
    timeline: r[9] ?? '',
    budget: r[10] ?? '',
    message: c(r, 11),
    locale: r[12] || 'en',
    sourceUrl: c(r, 13),
    utmSource: c(r, 14),
    utmMedium: c(r, 15),
    utmCampaign: c(r, 16),
    utmTerm: c(r, 17),
    utmContent: c(r, 18),
    landingPage: c(r, 19),
    referrer: c(r, 20),
  }))

  const inserted = values.length
    ? await db.insert(leads).values(values).onConflictDoNothing().returning({ id: leads.id })
    : []
  const [{ total }] = await db.select({ total: sql<number>`count(*)::int` }).from(leads)
  console.log(`sheet rows: ${(res.data.values ?? []).length}, valid: ${rows.length}, inserted: ${inserted.length}, leads table total: ${total}`)
  process.exit(0)
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
