import { flagshipPlatforms, solutionPlatforms, supportPlatforms } from '../../../data/platforms'
import { getJson } from '../http'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

// Platforms whose APIs.guru key is not their homepage domain.
const ALIASES: Record<string, string> = {
  'Google Sheets': 'googleapis.com:sheets',
  Jira: 'atlassian.com:jira',
  Docker: 'docker.com:engine',
}

function ourPlatforms() {
  const all = [...flagshipPlatforms, ...Object.values(solutionPlatforms).flat(), ...Object.values(supportPlatforms).flat()]
  const byName = new Map<string, string>()
  for (const p of all) byName.set(p.name, new URL(p.url).hostname.replace(/^www\./, ''))
  return byName
}

function authTypes(spec: any): string[] {
  const schemes = { ...(spec.components?.securitySchemes ?? {}), ...(spec.securityDefinitions ?? {}) }
  return [...new Set(Object.values(schemes).map((s: any) => (s.type === 'http' ? `http-${s.scheme}` : s.type)).filter(Boolean))] as string[]
}

function hasWebhooks(spec: any): boolean {
  if (spec.webhooks && Object.keys(spec.webhooks).length) return true
  if (spec['x-webhooks']) return true
  return Object.values(spec.paths ?? {}).some((p: any) => Object.values(p ?? {}).some((op: any) => op && typeof op === 'object' && op.callbacks))
}

export const apisGuru: Connector = {
  id: 'apis-guru',
  name: 'APIs.guru OpenAPI directory',
  url: 'https://apis.guru/',
  licence: 'Directory under CC0 1.0; each spec keeps its owner\'s terms',
  attribution: 'API facts from the APIs.guru OpenAPI directory (CC0) and the vendors\' published OpenAPI specs.',
  group: 'platforms',
  async run(ctx) {
    const list: Record<string, any> = await getJson('https://api.apis.guru/v2/list.json', { timeoutMs: 120_000 })
    const out: Output = { platformsApi: [] }
    const unmatched: string[] = []
    for (const [name, domain] of ourPlatforms()) {
      const key =
        (ALIASES[name] && list[ALIASES[name]] ? ALIASES[name] : undefined) ??
        Object.keys(list).find((k) => k === domain) ??
        Object.keys(list).find((k) => k.split(':')[0] === domain)
      if (!key) {
        unmatched.push(name)
        continue
      }
      const entry = list[key]
      const v = entry.versions[entry.preferred]
      const specUrl: string = v.swaggerUrl
      const spec: any = await getJson(specUrl, { minGapMs: 500, timeoutMs: 120_000 })
      out.platformsApi!.push({ name, apisGuruId: key, auth: authTypes(spec), webhooks: hasWebhooks(spec), specUrl, version: entry.preferred })
    }
    ctx.log(`apis-guru: no directory entry for ${unmatched.length} platforms: ${unmatched.join(', ')}`)
    return out
  },
}
