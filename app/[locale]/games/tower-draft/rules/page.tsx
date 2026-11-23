import { LegalDocPage, legalMetadata } from '../../_components/LegalDoc'
import { towerDraftRules } from '../../_legal/docs'

export const metadata = legalMetadata(towerDraftRules)

export default async function TowerDraftRulesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LegalDocPage locale={locale} doc={towerDraftRules} />
}
