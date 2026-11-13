import { solutions } from './solutions'
import { spokePath } from './hub-map'

export const OLD_SOLUTION_SLUGS = solutions.map((s) => s.slug)

export function solutionRedirects() {
  return OLD_SOLUTION_SLUGS.flatMap((slug) => [
    { source: `/solutions/${slug}`, destination: `/en${spokePath(slug)}`, statusCode: 301 as const },
    { source: `/:locale(en|fr|es)/solutions/${slug}`, destination: `/:locale${spokePath(slug)}`, statusCode: 301 as const },
  ])
}
