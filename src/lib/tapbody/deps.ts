import type { Deps } from './handlers'
import { readTapbodyEnv } from './env'
import { createRateLimiter } from './rate-limit'

const limited = createRateLimiter(10, 60 * 60 * 1000)

export function tapbodyDeps(): Deps {
  return { env: readTapbodyEnv(), fetch, limited }
}
