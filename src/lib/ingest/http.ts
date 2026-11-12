export const USER_AGENT =
  'Awesoon-data/1.0 (+https://awesoon.com; ray.rasouli@awesoontechnologies.com)'

const lastHit = new Map<string, number>()

// Set by the runner for real runs so every downloaded body is kept beside
// the normalized CSVs. Streams (the BLS bulk file) ask for a file path.
export interface Recorder {
  save(url: string, body: string): Promise<void>
  streamPath(url: string): string
}
let recorder: Recorder | null = null
export const setRecorder = (r: Recorder | null) => {
  recorder = r
}
export const getRecorder = () => recorder

interface PoliteInit extends RequestInit {
  // Minimum gap between requests to one host, from the source's published limit.
  minGapMs?: number
  timeoutMs?: number
  retries?: number
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function politeFetch(url: string, init: PoliteInit = {}): Promise<Response> {
  const { minGapMs = 1000, timeoutMs = 60_000, retries = 4, ...rest } = init
  const host = new URL(url).host
  for (let attempt = 0; ; attempt++) {
    const wait = (lastHit.get(host) ?? 0) + minGapMs - Date.now()
    if (wait > 0) await sleep(wait)
    lastHit.set(host, Date.now())
    let res: Response
    try {
      res = await fetch(url, {
        ...rest,
        headers: { 'User-Agent': USER_AGENT, Accept: '*/*', ...(rest.headers ?? {}) },
        signal: AbortSignal.timeout(timeoutMs),
      })
    } catch (e) {
      if (attempt >= retries) throw e
      await sleep(2000 * 2 ** attempt)
      continue
    }
    if ((res.status === 429 || res.status >= 500) && attempt < retries) {
      const retryAfter = Number(res.headers.get('retry-after'))
      const backoff = retryAfter > 0 ? retryAfter * 1000 : 2000 * 2 ** attempt
      await res.body?.cancel()
      await sleep(Math.min(backoff, 60_000))
      continue
    }
    if (!res.ok) {
      await res.body?.cancel()
      throw new Error(`HTTP ${res.status} for ${url}`)
    }
    return res
  }
}

export async function getJson<T>(url: string, init?: PoliteInit): Promise<T> {
  const res = await politeFetch(url, init)
  const type = res.headers.get('content-type') ?? ''
  const body = await res.text()
  await recorder?.save(url, body)
  if (!type.includes('json') && !body.trimStart().startsWith('{') && !body.trimStart().startsWith('[')) {
    throw new Error(`Expected JSON from ${url}, got ${type || 'unknown type'}`)
  }
  return JSON.parse(body) as T
}

export async function getText(url: string, init?: PoliteInit): Promise<string> {
  const body = await (await politeFetch(url, init)).text()
  await recorder?.save(url, body)
  return body
}
