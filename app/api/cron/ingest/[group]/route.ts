import { timingSafeEqual } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { runMany } from '@/src/lib/ingest/runner'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 300

const GROUPS = new Set(['procurement', 'wages', 'codes', 'platforms'])

function authorized(req: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret) return false
  const given = Buffer.from(req.headers.get('authorization') ?? '')
  const expected = Buffer.from(`Bearer ${secret}`)
  return given.length === expected.length && timingSafeEqual(given, expected)
}

export async function GET(req: NextRequest, ctx: RouteContext<'/api/cron/ingest/[group]'>) {
  if (!authorized(req)) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const { group } = await ctx.params
  if (!GROUPS.has(group)) return NextResponse.json({ error: 'unknown group' }, { status: 404 })
  const results = await runMany(group, { dry: false })
  const failed = results.filter((r) => r.status === 'failed').length
  return NextResponse.json({ group, failed, results }, { status: failed === results.length ? 500 : 200 })
}
