import { DraftLegalDoc, draftMetadata } from '../../_components/DraftLegalDoc'
import { termsV3 } from '../../_legal/drafts'

export const metadata = draftMetadata(termsV3)

export default async function GamesTermsV3DraftPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <DraftLegalDoc locale={locale} doc={termsV3} />
}
