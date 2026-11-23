import { LegalDocPage, legalMetadata } from '../_components/LegalDoc'
import { privacyPolicy } from '../_legal/docs'

export const metadata = legalMetadata(privacyPolicy)

export default async function GamesPrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LegalDocPage locale={locale} doc={privacyPolicy} />
}
