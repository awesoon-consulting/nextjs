import { sql } from 'drizzle-orm'
import { siteConfig } from '@/src/config/site'
import { getDb } from '@/src/lib/ingest/db/client'
import type { Env } from './waitlist'

// The site's Postgres connection (set on Vercel by the Supabase integration) runs the three waitlist functions.
// The REST settings are only a fallback for local runs.
async function callFunction(fn: string, args: Record<string, unknown>): Promise<unknown[]> {
  const db = getDb()
  if (!db) throw new Error('No database URL configured for the Ownvane waitlist.')
  let rows
  if (fn === 'ownvane_waitlist_signup') {
    rows = await db.execute(
      sql`select * from public.ownvane_waitlist_signup(${args.p_email as string}, ${args.p_region as string}, ${args.p_first_name as string | null}, ${args.p_source as string | null}, ${args.p_locale as string | null}, ${args.p_consent_version as string})`
    )
  } else if (fn === 'ownvane_waitlist_confirm') {
    rows = await db.execute(sql`select * from public.ownvane_waitlist_confirm(${args.p_token as string}::uuid)`)
  } else if (fn === 'ownvane_waitlist_unsubscribe') {
    rows = await db.execute(sql`select * from public.ownvane_waitlist_unsubscribe(${args.p_token as string}::uuid)`)
  } else {
    throw new Error(`Unknown waitlist function ${fn}`)
  }
  return Array.from(rows as unknown as Iterable<unknown>)
}

function hasDatabase() {
  return Boolean(process.env.DATABASE_URL || process.env.POSTGRES_URL)
}

// The migration is applied on the live database (Nov 19, 2026), so the list is on unless OWNVANE_WAITLIST_ENABLED=0 switches it off.
export function ownvaneWaitlistReady(): boolean {
  const restReady = Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY)
  return process.env.OWNVANE_WAITLIST_ENABLED !== '0' && Boolean(process.env.RESEND_API_KEY) && (hasDatabase() || restReady)
}

export function readOwnvaneEnv(): Env {
  if (!ownvaneWaitlistReady()) throw new Error('Ownvane waitlist needs RESEND_API_KEY and a database connection.')
  return {
    supabaseUrl: process.env.SUPABASE_URL ?? '',
    supabaseKey: process.env.SUPABASE_SECRET_KEY ?? '',
    resendKey: process.env.RESEND_API_KEY!,
    from: process.env.OWNVANE_WAITLIST_FROM ?? 'Ownvane <waitlist@awesoontechnologies.com>',
    notifyTo: process.env.OWNVANE_WAITLIST_NOTIFY_TO ?? 'awesoonmarketing@gmail.com',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url,
    senderAddress: siteConfig.contact.address,
    contactEmail: siteConfig.contact.email,
    call: hasDatabase() ? callFunction : undefined,
  }
}
