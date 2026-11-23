import { TowerDraftDoc, towerDraftMetadata } from '../../_components/TowerDraftDoc'

export const generateMetadata = () => towerDraftMetadata('support')

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <TowerDraftDoc doc="support" locale={locale} />
}
