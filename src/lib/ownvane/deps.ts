import { createRateLimiter } from '../tapbody/rate-limit'
import type { Deps } from './handlers'
import { readOwnvaneEnv } from './env'

const limited = createRateLimiter(10, 60 * 60 * 1000)

export function ownvaneDeps(): Deps {
  return { env: readOwnvaneEnv(), fetch, limited }
}
