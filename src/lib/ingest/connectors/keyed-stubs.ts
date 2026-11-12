import type { Connector, Group } from '../types'

// Keyed sources: wired into the runner now, they no-op until their env var
// is set. Each gets a real fetch in the PR that adds its key.
const stub = (id: string, name: string, url: string, envKey: string, group: Group): Connector => ({
  id,
  name,
  url,
  licence: 'See source terms',
  attribution: `Source: ${name}`,
  group,
  envKey,
  async run(ctx) {
    if (!process.env[envKey]) {
      ctx.log(`${id}: skipped, ${envKey} is not set`)
      return {}
    }
    ctx.log(`${id}: ${envKey} is set but this connector is a stub; nothing fetched`)
    return {}
  },
})

export const keyedStubs: Connector[] = [
  stub('sam-gov', 'SAM.gov Opportunities API', 'https://open.gsa.gov/api/get-opportunities-public-api/', 'SAM_GOV_API_KEY', 'procurement'),
  stub('bls-v2', 'BLS Public Data API v2', 'https://www.bls.gov/developers/', 'BLS_API_KEY', 'wages'),
  stub('census', 'U.S. Census Data API', 'https://www.census.gov/data/developers.html', 'CENSUS_API_KEY', 'wages'),
  stub('search-console', 'Google Search Console API', 'https://developers.google.com/webmaster-tools', 'GOOGLE_SEARCH_CONSOLE_CREDENTIALS', 'platforms'),
  stub('google-ads', 'Google Ads API', 'https://developers.google.com/google-ads/api', 'GOOGLE_ADS_DEVELOPER_TOKEN', 'platforms'),
  stub('bing-webmaster', 'Bing Webmaster API', 'https://learn.microsoft.com/en-us/bingwebmaster/', 'BING_WEBMASTER_API_KEY', 'platforms'),
]
