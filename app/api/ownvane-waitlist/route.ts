import { ownvaneDeps } from '@/src/lib/ownvane/deps'
import { handleSignup } from '@/src/lib/ownvane/handlers'

export async function POST(request: Request) {
  return handleSignup(request, ownvaneDeps())
}
