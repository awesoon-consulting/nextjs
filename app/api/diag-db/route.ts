import { NextResponse } from 'next/server'
import { count } from 'drizzle-orm'
import { getDb } from '@/src/lib/ingest/db/client'
import { awards } from '@/src/lib/ingest/db/schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  const db = getDb()
  if (!db) return NextResponse.json({ status: 'no db url' })
  try {
    const [r] = await db.select({ n: count() }).from(awards)
    return NextResponse.json({ status: `db ok, ${r.n} awards` })
  } catch (e) {
    const err = e as { name?: string; code?: string }
    return NextResponse.json({ status: 'error', name: err.name, code: err.code })
  }
}
