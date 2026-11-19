import { tapbodyDeps } from '@/src/lib/tapbody/deps'
import { handleSignup } from '@/src/lib/tapbody/handlers'

export async function POST(request: Request) {
  return handleSignup(request, tapbodyDeps())
}
