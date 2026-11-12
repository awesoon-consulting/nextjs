import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

let db: ReturnType<typeof drizzle<typeof schema>> | null = null

// Null until DATABASE_URL exists; callers fall back to local snapshots.
export function getDb() {
  if (!process.env.DATABASE_URL) return null
  if (!db) db = drizzle(postgres(process.env.DATABASE_URL, { max: 1, prepare: false }), { schema })
  return db
}
