import { DraftLegalDoc, draftMetadata } from '../../_components/DraftLegalDoc'
import { towerDraftRules } from '../../_legal/drafts'

export const metadata = draftMetadata(towerDraftRules)

export default async function TowerDraftRulesDraftPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <DraftLegalDoc locale={locale} doc={towerDraftRules} />
}
