import { createHash } from 'node:crypto'
import { getDb } from '@/src/lib/ingest/db/client'
import { leads } from '@/src/lib/ingest/db/schema'
import { appendLeadRow, type LeadFormData } from '@/src/lib/sheets'

export function hashIp(ip: string): string {
  const salt = process.env.LEAD_IP_SALT ?? process.env.CRON_SECRET ?? ''
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex')
}

export async function insertLead(data: LeadFormData, meta: { ipHash: string; userAgent: string | null }) {
  const db = getDb()
  if (!db) throw new Error('No database URL configured for leads.')
  await db.insert(leads).values({
    submittedAt: new Date(data.submittedAt),
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    industry: data.industry,
    companySize: data.companySize,
    problems: data.problems,
    otherProblem: data.otherProblem,
    timeline: data.timeline,
    budget: data.budget,
    message: data.message,
    locale: data.locale,
    sourceUrl: data.sourceUrl,
    utmSource: data.utm_source,
    utmMedium: data.utm_medium,
    utmCampaign: data.utm_campaign,
    utmTerm: data.utm_term,
    utmContent: data.utm_content,
    landingPage: data.landing_page,
    referrer: data.referrer,
    ipHash: meta.ipHash,
    userAgent: meta.userAgent,
  })
}

export async function mirrorLeadToSheet(data: LeadFormData) {
  if (process.env.LEADS_SHEET_MIRROR === 'false') return
  const { GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY, GOOGLE_SHEETS_SPREADSHEET_ID } = process.env
  if (!GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_SPREADSHEET_ID) return
  try {
    await appendLeadRow(data)
  } catch (err) {
    console.error('Lead sheet mirror failed (lead is saved in the database):', err instanceof Error ? err.message : err)
  }
}
