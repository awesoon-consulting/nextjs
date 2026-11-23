import { DraftLegalDoc, draftMetadata } from '../../_components/DraftLegalDoc'
import { privacyV5 } from '../../_legal/drafts'

export const metadata = draftMetadata(privacyV5)

export default async function GamesPrivacyV5DraftPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <DraftLegalDoc locale={locale} doc={privacyV5} />
}
