import { tapbodyDeps } from '@/src/lib/tapbody/deps'
import { handleUnsubscribe } from '@/src/lib/tapbody/handlers'

export async function POST(request: Request) {
  return handleUnsubscribe(request, tapbodyDeps())
}
