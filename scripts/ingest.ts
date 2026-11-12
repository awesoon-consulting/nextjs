import { CONNECTORS } from '../src/lib/ingest/registry'
import { runMany } from '../src/lib/ingest/runner'

async function main() {
  const args = process.argv.slice(2)
  const dry = args.includes('--dry')
  const pagesArg = args.find((a) => a.startsWith('--pages='))
  const sinceArg = args.find((a) => a.startsWith('--since-days='))
  const target = args.find((a) => !a.startsWith('--'))
  if (!target) {
    console.log('Usage: npm run ingest -- <source|group|all> [--dry] [--pages=N] [--since-days=N]')
    console.log(`Groups: procurement, wages, codes, platforms. Sources: ${CONNECTORS.map((c) => c.id).join(', ')}`)
    process.exit(1)
  }
  const results = await runMany(target, {
    dry,
    maxPages: pagesArg ? Number(pagesArg.split('=')[1]) : undefined,
    sinceDays: sinceArg ? Number(sinceArg.split('=')[1]) : undefined,
  })
  console.log('\nsource'.padEnd(26) + 'status'.padEnd(10) + 'rows')
  for (const r of results) {
    const rows = Object.entries(r.rows).map(([k, v]) => `${k}=${v}`).join(' ') || '-'
    console.log(r.source.padEnd(25) + r.status.padEnd(10) + rows + (r.error ? `  ${r.error}` : '') + `  (${(r.ms / 1000).toFixed(1)}s)`)
  }
  process.exit(results.some((r) => r.status === 'failed') ? 2 : 0)
}

main()
