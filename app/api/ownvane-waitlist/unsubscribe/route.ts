import { ownvaneDeps } from '@/src/lib/ownvane/deps'
import { handleUnsubscribe } from '@/src/lib/ownvane/handlers'

export async function POST(request: Request) {
  return handleUnsubscribe(request, ownvaneDeps())
}
