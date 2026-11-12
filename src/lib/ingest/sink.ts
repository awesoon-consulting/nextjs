import { appendFile, copyFile, mkdir, writeFile } from 'node:fs/promises'
import { appendFileSync, existsSync, mkdirSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { gzipSync } from 'node:zlib'
import { getTableColumns, sql } from 'drizzle-orm'
import type { PgTable } from 'drizzle-orm/pg-core'
import { getDb } from './db/client'
import * as s from './db/schema'
import type { Recorder } from './http'
import type { Connector, Output, Rows } from './types'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const TABLES: { [K in keyof Rows]: { table: PgTable; key: string[]; file: string } } = {
  buyers: { table: s.buyers, key: ['country', 'name'], file: 'buyers' },
  tenders: { table: s.tenders, key: ['sourceId', 'externalId'], file: 'tenders' },
  awards: { table: s.awards, key: ['sourceId', 'externalId'], file: 'awards' },
  wages: { table: s.wages, key: ['sourceId', 'region', 'occupationCode', 'unit', 'period'], file: 'wages' },
  codes: { table: s.codes, key: ['scheme', 'code'], file: 'codes' },
  codeCrosswalk: { table: s.codeCrosswalk, key: ['fromScheme', 'fromCode', 'toScheme', 'toCode'], file: 'code_crosswalk' },
  platformsApi: { table: s.platformsApi, key: ['name'], file: 'platforms_api' },
  platformChanges: { table: s.platformChanges, key: ['sourceId', 'externalId'], file: 'platform_changes' },
}

function dedupe(rows: any[], key: string[]) {
  const m = new Map<string, any>()
  for (const r of rows) m.set(key.map((k) => r[k]).join('\u0000'), r)
  return [...m.values()]
}

// Vercel functions can only write to the temp dir; there files only prove
// the run happened. Locally they are the store until DATABASE_URL is set.
export const DATA_DIR = process.env.VERCEL
  ? path.join(os.tmpdir(), 'awesoon-data')
  : process.env.DATA_DIR || '/Users/rayrasouli/Desktop/Awesoon/data'

const cell = (v: unknown) => {
  if (v === null || v === undefined) return ''
  const str = v instanceof Date ? v.toISOString() : typeof v === 'object' ? JSON.stringify(v) : String(v)
  return /[",\n\r]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str
}

export function toCsv(rows: any[]): string {
  const cols = [...new Set(rows.flatMap((r) => Object.keys(r)))]
  return [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\n') + '\n'
}

export const runStamp = (d: Date) => d.toISOString().slice(0, 16).replace(':', '') + 'Z'

export function rawRecorder(c: Connector, started: Date): Recorder {
  const dir = path.join(DATA_DIR, c.id, runStamp(started), 'raw')
  let n = 0
  const name = (url: string) => {
    const base = new URL(url).pathname.split('/').filter(Boolean).pop() || 'index'
    return path.join(dir, `${String(++n).padStart(4, '0')}-${base.replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 80)}.gz`)
  }
  return {
    async save(url, body) {
      await mkdir(dir, { recursive: true })
      const file = name(url)
      await writeFile(file, gzipSync(body))
      await appendFile(path.join(dir, 'urls.txt'), `${path.basename(file)}\t${url}\n`)
    },
    streamPath(url) {
      mkdirSync(dir, { recursive: true })
      const file = name(url)
      appendFileSync(path.join(dir, 'urls.txt'), `${path.basename(file)}\t${url}\n`)
      return file
    },
  }
}

export async function writeCsvRun(c: Connector, out: Output, started: Date): Promise<string> {
  const runDir = path.join(DATA_DIR, c.id, runStamp(started))
  const latestDir = path.join(DATA_DIR, c.id, 'latest')
  await mkdir(runDir, { recursive: true })
  await mkdir(latestDir, { recursive: true })
  for (const [name, raw] of Object.entries(out) as [keyof Rows, any[]][]) {
    if (!raw?.length) continue
    const { key, file } = TABLES[name]
    const target = path.join(runDir, `${file}.csv`)
    await writeFile(target, toCsv(dedupe(raw, key)), 'utf8')
    await copyFile(target, path.join(latestDir, `${file}.csv`))
  }
  await writeFile(path.join(latestDir, 'RUN.txt'), `${runStamp(started)}\n`)
  return runDir
}

export async function appendRunLog(row: Record<string, unknown>) {
  await mkdir(DATA_DIR, { recursive: true })
  const file = path.join(DATA_DIR, 'ingest_runs.csv')
  const cols = ['sourceId', 'startedAt', 'finishedAt', 'rows', 'status', 'error', 'rawFileRef']
  if (!existsSync(file)) await writeFile(file, cols.join(',') + '\n')
  await appendFile(file, cols.map((c) => cell(row[c])).join(',') + '\n')
}

export async function writeReadme(connectors: Connector[]) {
  await mkdir(DATA_DIR, { recursive: true })
  const lines = [
    '# Awesoon data store (local, until Postgres exists)',
    '',
    'Written by `npm run ingest` in the awesoon.com repo. Nothing here is deleted by the tool; each run adds a folder.',
    '',
    '## Layout',
    '',
    '- `<source>/<run>/` one run, named by its UTC start (`2026-11-12T1850Z`). One CSV per table, UTF-8, header row.',
    '- `<source>/<run>/raw/` every file downloaded for that run, gzipped, with `urls.txt` mapping file to URL.',
    '- `<source>/latest/` a copy of the newest run\'s CSVs; `RUN.txt` names the run it came from.',
    '- `ingest_runs.csv` one line per run: source, start, finish, rows, status, error, run folder.',
    '',
    'Load into Postgres once DATABASE_URL is set: `npm run db:migrate` then `npm run ingest:import-csv` (reads every `latest/` folder, safe to re-run).',
    '',
    '## Tables',
    '',
    '- `tenders.csv` open and recent tender notices in our portal categories. `categoryCodes` and `categories` are JSON.',
    '- `awards.csv` contract awards in our categories, with value, currency, supplier and buyer.',
    '- `buyers.csv` buying organisations seen in tenders or awards.',
    '- `wages.csv` wage or earnings figures by region and occupation; `unit` says hourly, weekly or annual.',
    '- `codes.csv` classification codes (scheme, code, title, parent).',
    '- `code_crosswalk.csv` code pairs across schemes (GSIN to UNSPSC).',
    '- `platforms_api.csv` API facts per platform from APIs.guru and the vendor spec.',
    '- `platform_changes.csv` vendor status incidents and changelog entries.',
    '',
    '## Sources and licence lines',
    '',
    '| Folder | Source | Licence | Attribution |',
    '|---|---|---|---|',
    ...connectors.filter((c) => !c.envKey).map((c) => `| \`${c.id}\` | [${c.name}](${c.url}) | ${c.licence} | ${c.attribution} |`),
    '',
  ]
  await writeFile(path.join(DATA_DIR, 'README.md'), lines.join('\n'))
}

const BATCH = 500

export async function upsert(out: Output): Promise<number> {
  const db = getDb()
  if (!db) throw new Error('upsert called without DATABASE_URL')
  let n = 0
  for (const [name, raw] of Object.entries(out) as [keyof Rows, any[]][]) {
    if (!raw?.length) continue
    const { table, key } = TABLES[name]
    const cols = getTableColumns(table) as Record<string, any>
    const rows = dedupe(raw, key)
    const target = key.map((k) => cols[k])
    const set = Object.fromEntries(
      Object.keys(rows[0])
        .filter((k) => !key.includes(k))
        .map((k) => [k, sql.raw(`excluded."${cols[k].name}"`)]),
    )
    for (let i = 0; i < rows.length; i += BATCH) {
      const chunk = rows.slice(i, i + BATCH)
      const q = db.insert(table).values(chunk)
      await (Object.keys(set).length ? q.onConflictDoUpdate({ target, set }) : q.onConflictDoNothing({ target }))
      n += chunk.length
    }
  }
  return n
}

export async function upsertSource(c: Connector) {
  const db = getDb()
  if (!db) return
  const row = { id: c.id, name: c.name, url: c.url, licence: c.licence, attribution: c.attribution, keyed: !!c.envKey }
  await db.insert(s.sources).values(row).onConflictDoUpdate({ target: s.sources.id, set: { ...row, updatedAt: new Date() } })
}
