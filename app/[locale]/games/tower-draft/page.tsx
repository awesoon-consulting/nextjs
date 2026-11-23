import { TowerDraftDoc, towerDraftMetadata } from '../_components/TowerDraftDoc'

export const generateMetadata = () => towerDraftMetadata('home')

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <TowerDraftDoc doc="home" locale={locale} />
}
