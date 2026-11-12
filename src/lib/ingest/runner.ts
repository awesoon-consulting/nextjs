import { eq } from 'drizzle-orm'
import { getDb } from './db/client'
import { ingestRuns } from './db/schema'
import { CONNECTORS } from './registry'
import { setRecorder } from './http'
import { appendRunLog, rawRecorder, upsert, upsertSource, writeCsvRun, writeReadme } from './sink'
import type { Connector, Group, Output } from './types'

export interface RunResult {
  source: string
  status: 'ok' | 'skipped' | 'failed' | 'dry'
  rows: Record<string, number>
  error?: string
  ref?: string
  ms: number
}

const count = (out: Output) =>
  Object.fromEntries(Object.entries(out).map(([k, v]) => [k, (v as unknown[]).length]))

export function select(target: string): Connector[] {
  if (target === 'all') return CONNECTORS
  const byGroup = CONNECTORS.filter((c) => c.group === (target as Group))
  if (byGroup.length) return byGroup
  const one = CONNECTORS.filter((c) => c.id === target)
  if (!one.length) throw new Error(`Unknown source or group "${target}". Known: ${CONNECTORS.map((c) => c.id).join(', ')}`)
  return one
}

export interface RunOpts {
  dry: boolean
  maxPages?: number
  sinceDays?: number
  log?: (m: string) => void
}

export async function runOne(c: Connector, opts: RunOpts): Promise<RunResult> {
  const log = opts.log ?? ((m: string) => console.log(`[ingest] ${m}`))
  const started = new Date()
  const db = opts.dry ? null : getDb()
  let runId: number | null = null
  if (db) {
    await upsertSource(c)
    const [row] = await db.insert(ingestRuns).values({ sourceId: c.id, startedAt: started, status: 'running' }).returning({ id: ingestRuns.id })
    runId = row.id
  }
  const fileMode = !opts.dry && !db
  const finish = async (status: string, rows: number, error?: string, ref?: string) => {
    if (fileMode) await appendRunLog({ sourceId: c.id, startedAt: started, finishedAt: new Date(), rows, status, error, rawFileRef: ref })
    if (db && runId !== null)
      await db.update(ingestRuns).set({ finishedAt: new Date(), status, rows, error: error ?? null, rawFileRef: ref ?? null }).where(eq(ingestRuns.id, runId))
  }
  if (c.envKey && !process.env[c.envKey]) {
    log(`${c.id}: skipped, ${c.envKey} is not set`)
    await finish('skipped', 0, `${c.envKey} not set`)
    return { source: c.id, status: 'skipped', rows: {}, ms: Date.now() - started.getTime() }
  }
  if (fileMode) setRecorder(rawRecorder(c, started))
  try {
    const out = await c.run({ dry: opts.dry, maxPages: opts.maxPages ?? (opts.dry ? 2 : 50), sinceDays: opts.sinceDays, log })
    const rows = count(out)
    const total = Object.values(rows).reduce((a, b) => a + b, 0)
    if (opts.dry) return { source: c.id, status: 'dry', rows, ms: Date.now() - started.getTime() }
    let ref: string | undefined
    if (db) await upsert(out)
    else ref = await writeCsvRun(c, out, started)
    setRecorder(null)
    await finish('ok', total, undefined, ref)
    return { source: c.id, status: 'ok', rows, ref, ms: Date.now() - started.getTime() }
  } catch (e) {
    setRecorder(null)
    const error = e instanceof Error ? `${e.message}${e.cause ? ` (${String((e.cause as Error).message ?? e.cause)})` : ''}` : String(e)
    log(`${c.id}: failed, ${error}`)
    await finish('failed', 0, error)
    return { source: c.id, status: 'failed', rows: {}, error, ms: Date.now() - started.getTime() }
  }
}

export async function runMany(target: string, opts: RunOpts) {
  const results: RunResult[] = []
  if (!opts.dry && !getDb()) await writeReadme(CONNECTORS)
  for (const c of select(target)) results.push(await runOne(c, opts))
  return results
}
