/**
 * Root page,  redirects to default locale.
 * The middleware handles locale routing, so this should rarely be hit.
 * If accessed directly (e.g., / without locale), redirect to /en.
 */
import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/en')
}
