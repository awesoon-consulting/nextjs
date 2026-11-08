import { NextRequest, NextResponse } from 'next/server'
import { appendLeadRow, LeadFormData } from '@/src/lib/sheets'

// In-memory rate limiter: IP → { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 10
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

function getRateLimitEntry(ip: string): { count: number; resetAt: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    const newEntry = { count: 0, resetAt: now + WINDOW_MS }
    rateLimitMap.set(ip, newEntry)
    return newEntry
  }
  return entry
}

function isRateLimited(ip: string): boolean {
  const entry = getRateLimitEntry(ip)
  entry.count++
  return entry.count > RATE_LIMIT
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait before submitting again.' },
      { status: 429 }
    )
  }

  // Parse body
  let body: Partial<LeadFormData>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Validate required fields
  const validationErrors: string[] = []

  if (!body.name?.trim()) validationErrors.push('name is required')
  if (!body.email?.trim()) {
    validationErrors.push('email is required')
  } else if (!validateEmail(body.email)) {
    validationErrors.push('email is invalid')
  }
  if (!body.company?.trim()) validationErrors.push('company is required')
  if (!body.industry?.trim()) validationErrors.push('industry is required')
  if (!body.companySize?.trim()) validationErrors.push('companySize is required')
  if (!body.problems || body.problems.length === 0) validationErrors.push('at least one problem is required')
  if (!body.timeline?.trim()) validationErrors.push('timeline is required')
  if (!body.budget?.trim()) validationErrors.push('budget is required')

  if (validationErrors.length > 0) {
    return NextResponse.json(
      { error: 'Validation failed.', details: validationErrors },
      { status: 400 }
    )
  }

  // Prepare data
  const leadData: LeadFormData = {
    name: body.name!.trim(),
    company: body.company!.trim(),
    email: body.email!.trim().toLowerCase(),
    phone: body.phone?.trim() || undefined,
    industry: body.industry!,
    companySize: body.companySize!,
    problems: body.problems!,
    otherProblem: body.otherProblem?.trim() || undefined,
    timeline: body.timeline!,
    budget: body.budget!,
    message: body.message?.trim() || undefined,
    locale: body.locale ?? 'en',
    submittedAt: body.submittedAt ?? new Date().toISOString(),
    sourceUrl: body.sourceUrl ?? undefined,
  }

  // Append to Google Sheets
  try {
    await appendLeadRow(leadData)
  } catch (err) {
    console.error('Failed to append lead to Google Sheets:', err)
    return NextResponse.json(
      { error: 'Failed to save submission. Please try again or email us directly.' },
      { status: 500 }
    )
  }

  return NextResponse.json(
    { success: true, message: 'Submission received. We will be in touch shortly.' },
    { status: 200 }
  )
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}
