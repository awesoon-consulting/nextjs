import { LegalDocPage, legalMetadata } from '../_components/LegalDoc'
import { gamesTerms } from '../_legal/docs'

export const metadata = legalMetadata(gamesTerms)

export default async function GamesTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LegalDocPage locale={locale} doc={gamesTerms} />
}
