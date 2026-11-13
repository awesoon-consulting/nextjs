// Gate for the SEO hub move: every old /solutions URL must 301 to its spoke,
// and every sitemap URL must return 200. Run against a started build.
const base = process.argv[2] ?? 'http://localhost:4400'
const map = {
  'ai-operations': '/automation/ai-operations',
  'ops-outgrown-tools': '/consulting/ops-outgrown-tools',
  'spreadsheet-operations': '/automation/spreadsheet-operations',
  'system-integration': '/automation/system-integration',
  'erp-implementation': '/erp-crm/erp-implementation',
  'crm-implementation': '/erp-crm/crm-implementation',
  'api-integrations': '/automation/api-integrations',
  'vendor-management': '/consulting/software-selection',
  'custom-api-development': '/software-development/custom-api-development',
  'ecommerce-development': '/software-development/ecommerce-development',
  'systems-audit': '/consulting/systems-audit',
  'mobile-warehouse-barcoding': '/automation/mobile-warehouse-barcoding',
  'project-management': '/consulting/project-management',
  'operational-process-foundations': '/consulting/operational-process-foundations',
}
let fail = 0
const cases = Object.entries(map).flatMap(([slug, to]) => [
  [`/solutions/${slug}`, `/en${to}`],
  ...['en', 'fr', 'es'].map((l) => [`/${l}/solutions/${slug}`, `/${l}${to}`]),
])
for (const [from, to] of cases) {
  const r = await fetch(base + from, { redirect: 'manual' })
  const loc = new URL(r.headers.get('location') ?? '', base).pathname
  const ok = r.status === 301 && loc === to
  if (!ok) fail++
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${r.status} ${from} -> ${loc}${ok ? '' : ` (want 301 ${to})`}`)
}
const xml = await (await fetch(base + '/sitemap.xml')).text()
const urls = [...new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname))]
let bad = 0
for (const p of urls) {
  const r = await fetch(base + p, { redirect: 'manual' })
  if (r.status !== 200) {
    bad++
    console.log(`FAIL ${r.status} ${p}`)
  }
}
console.log(`redirects: ${cases.length - fail}/${cases.length} ok; sitemap: ${urls.length - bad}/${urls.length} return 200`)
process.exit(fail || bad ? 1 : 0)
