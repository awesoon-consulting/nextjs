import { readdir, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { and, eq, getTableColumns } from 'drizzle-orm'
import { getDb } from '../src/lib/ingest/db/client'
import { ingestRuns } from '../src/lib/ingest/db/schema'
import { parseCsv } from '../src/lib/ingest/parse'
import { CONNECTORS } from '../src/lib/ingest/registry'
import { DATA_DIR, TABLES, upsert, upsertSource } from '../src/lib/ingest/sink'
import type { Output, Rows } from '../src/lib/ingest/types'

/* eslint-disable @typescript-eslint/no-explicit-any */

// Loads every <source>/latest/*.csv and ingest_runs.csv into Postgres.
// Upserts on each table's natural key, so re-running changes nothing.

function decode(table: keyof Rows, row: Record<string, string>) {
  const cols = getTableColumns(TABLES[table].table) as Record<string, any>
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(row)) {
    const col = cols[k]
    if (!col) continue
    if (v === '') out[k] = null
    else if (col.columnType === 'PgJsonb') out[k] = JSON.parse(v)
    else if (col.columnType === 'PgTimestamp') out[k] = new Date(v)
    else if (col.columnType === 'PgBoolean') out[k] = v === 'true'
    else if (col.columnType === 'PgInteger' || col.columnType === 'PgSerial') out[k] = Number(v)
    else out[k] = v
  }
  return out
}

async function main() {
  const db = getDb()
  if (!db) {
    console.log('DATABASE_URL is not set; nothing to import.')
    process.exit(1)
  }
  for (const c of CONNECTORS) await upsertSource(c)
  console.log(`sources: ${CONNECTORS.length} rows`)
  const byFile = Object.fromEntries(Object.entries(TABLES).map(([k, v]) => [`${v.file}.csv`, k as keyof Rows]))
  for (const source of await readdir(DATA_DIR)) {
    const latest = path.join(DATA_DIR, source, 'latest')
    if (!existsSync(latest)) continue
    for (const file of await readdir(latest)) {
      const table = byFile[file]
      if (!table) continue
      const rows = parseCsv(await readFile(path.join(latest, file), 'utf8')).map((r) => decode(table, r))
      const n = await upsert({ [table]: rows } as Output)
      console.log(`${source}/${file}: ${n} rows`)
    }
  }
  const runsFile = path.join(DATA_DIR, 'ingest_runs.csv')
  if (existsSync(runsFile)) {
    let added = 0
    for (const r of parseCsv(await readFile(runsFile, 'utf8'))) {
      const startedAt = new Date(r.startedAt)
      const seen = await db
        .select({ id: ingestRuns.id })
        .from(ingestRuns)
        .where(and(eq(ingestRuns.sourceId, r.sourceId), eq(ingestRuns.startedAt, startedAt)))
      if (seen.length) continue
      await db.insert(ingestRuns).values({
        sourceId: r.sourceId,
        startedAt,
        finishedAt: r.finishedAt ? new Date(r.finishedAt) : null,
        rows: Number(r.rows || 0),
        status: r.status,
        error: r.error || null,
        rawFileRef: r.rawFileRef || null,
      })
      added++
    }
    console.log(`ingest_runs.csv: ${added} new runs`)
  }
  process.exit(0)
}

main()
