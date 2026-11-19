import { tapbodyDeps } from '@/src/lib/tapbody/deps'
import { handleConfirm } from '@/src/lib/tapbody/handlers'

export async function POST(request: Request) {
  return handleConfirm(request, tapbodyDeps())
}
