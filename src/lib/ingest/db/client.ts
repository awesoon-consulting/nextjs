import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

let db: ReturnType<typeof drizzle<typeof schema>> | null = null

// The Vercel Supabase integration sets POSTGRES_URL, not DATABASE_URL.
export function databaseUrl() {
  const raw = process.env.DATABASE_URL || process.env.POSTGRES_URL
  if (!raw) return null
  const url = new URL(raw)
  for (const p of ['supa', 'pgbouncer', 'sslmode']) url.searchParams.delete(p)
  return url.toString()
}

// Null until a database URL exists; callers fall back to local snapshots.
export function getDb() {
  const url = databaseUrl()
  if (!url) return null
  // Supabase's transaction pooler hangs on pipelined queries, so send one at a time.
  if (!db) db = drizzle(postgres(url, { max: 1, max_pipeline: 1, prepare: false, ssl: 'require' }), { schema })
  return db
}
