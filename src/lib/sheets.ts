/**
 * Google Sheets API v4 client using service account authentication.
 * Appends a lead row to the configured spreadsheet.
 *
 * Required environment variables:
 * - GOOGLE_SHEETS_CLIENT_EMAIL
 * - GOOGLE_SHEETS_PRIVATE_KEY
 * - GOOGLE_SHEETS_SPREADSHEET_ID
 *
 * @see /src/app/api/submit-lead/README.md for full setup instructions
 */

import { google } from 'googleapis'

export interface LeadFormData {
  name: string
  company: string
  email: string
  phone?: string
  industry: string
  companySize: string
  problems: string[]
  timeline: string
  budget: string
  message?: string
  locale: string
  submittedAt: string
  sourceUrl?: string
}

function getAuthClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!clientEmail || !privateKey) {
    throw new Error(
      'Missing Google Sheets credentials. Set GOOGLE_SHEETS_CLIENT_EMAIL and GOOGLE_SHEETS_PRIVATE_KEY.'
    )
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

/**
 * Appends a lead form submission as a new row in the Google Sheet.
 * Column order: Timestamp | Name | Company | Email | Phone | Industry | Company Size | Problems | Timeline | Budget | Message | Locale | Source URL
 */
export async function appendLeadRow(data: LeadFormData): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!spreadsheetId) {
    throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID environment variable.')
  }

  const auth = getAuthClient()
  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    data.submittedAt,
    data.name,
    data.company,
    data.email,
    data.phone ?? '',
    data.industry,
    data.companySize,
    data.problems.join(', '),
    data.timeline,
    data.budget,
    data.message ?? '',
    data.locale,
    data.sourceUrl ?? '',
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:M',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  })
}

/**
 * Ensures the spreadsheet header row exists. Call this during initial setup.
 */
export async function ensureHeaderRow(): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  if (!spreadsheetId) throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID')

  const auth = getAuthClient()
  const sheets = google.sheets({ version: 'v4', auth })

  // Check if row 1 already has content
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1:M1',
  })

  const existing = result.data.values
  if (existing && existing.length > 0) return // Header already exists

  const headers = [
    'Timestamp',
    'Name',
    'Company',
    'Email',
    'Phone',
    'Industry',
    'Company Size',
    'Problems',
    'Timeline',
    'Budget',
    'Message',
    'Locale',
    'Source URL',
  ]

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Sheet1!A1:M1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [headers],
    },
  })
}
