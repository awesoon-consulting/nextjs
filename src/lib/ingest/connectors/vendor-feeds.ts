import { getJson, getText } from '../http'
import { parseFeed, toDate } from '../parse'
import type { Connector, Output } from '../types'

/* eslint-disable @typescript-eslint/no-explicit-any */

// Only feeds that exist and answer without a key (checked 2026-11-12).
// No public feed found: NetSuite status and release notes (status.netsuite.com
// has no RSS, netsuite.com blocks fetches), Shopify status (shopifystatus.com
// serves no RSS or Atom), Salesforce developer changelog (403 to fetchers),
// Microsoft Dynamics 365 status (tenant-only in the admin center).

interface Feed {
  id: string
  vendor: string
  kind: 'status' | 'changelog'
  name: string
  url: string
  licence: string
}

const FEEDS: Feed[] = [
  { id: 'feed-hubspot-status', vendor: 'HubSpot', kind: 'status', name: 'HubSpot status history', url: 'https://status.hubspot.com/history.rss', licence: 'Public status page, facts quoted with link' },
  { id: 'feed-hubspot-changelog', vendor: 'HubSpot', kind: 'changelog', name: 'HubSpot developer changelog', url: 'https://developers.hubspot.com/changelog/rss.xml', licence: 'Public changelog, titles quoted with link' },
  { id: 'feed-shopify-changelog', vendor: 'Shopify', kind: 'changelog', name: 'Shopify developer changelog', url: 'https://shopify.dev/changelog/feed.xml', licence: 'Public changelog, titles quoted with link' },
  { id: 'feed-azure-status', vendor: 'Microsoft Azure', kind: 'status', name: 'Azure status (hosts Dynamics 365; empty when no incident)', url: 'https://azure.status.microsoft/en-us/status/feed/', licence: 'Public status page, facts quoted with link' },
]

const feedConnector = (f: Feed): Connector => ({
  id: f.id,
  name: f.name,
  url: f.url,
  licence: f.licence,
  attribution: `Source: ${f.name}, ${f.url}`,
  group: 'platforms',
  async run(ctx) {
    const items = parseFeed(await getText(f.url, { timeoutMs: 90_000 }))
    const keep = ctx.dry ? items.slice(0, 50) : items
    const out: Output = {
      platformChanges: keep
        .filter((i) => i.id && i.title)
        .map((i) => ({ vendor: f.vendor, kind: f.kind, externalId: i.id, title: i.title, url: i.link, published: i.published, sourceId: f.id })),
    }
    return out
  },
})

export const salesforceStatus: Connector = {
  id: 'feed-salesforce-status',
  name: 'Salesforce Trust status API',
  url: 'https://api.status.salesforce.com/v1/incidents',
  licence: 'Public status page, facts quoted with link',
  attribution: 'Source: Salesforce Trust, status.salesforce.com',
  group: 'platforms',
  async run() {
    const rows: any[] = await getJson('https://api.status.salesforce.com/v1/incidents?limit=100', { timeoutMs: 90_000 })
    return {
      platformChanges: rows.map((r) => ({
        vendor: 'Salesforce',
        kind: 'status',
        externalId: String(r.id),
        title: `${r.type ?? 'Incident'} (${r.status}) on ${(r.instanceKeys ?? []).length} instances`,
        url: `https://status.salesforce.com/incidents/${r.id}`,
        published: toDate(r.createdAt),
        sourceId: 'feed-salesforce-status',
      })),
    }
  },
}

export const vendorFeeds: Connector[] = [...FEEDS.map(feedConnector), salesforceStatus]
