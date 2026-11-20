import { ownvaneDeps } from '@/src/lib/ownvane/deps'
import { handleConfirm } from '@/src/lib/ownvane/handlers'

export async function POST(request: Request) {
  return handleConfirm(request, ownvaneDeps())
}
