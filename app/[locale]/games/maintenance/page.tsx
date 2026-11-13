import { renderSpoke, spokeMetadata } from '@/src/components/hubs/routes'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return spokeMetadata('maintenance', locale)
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return renderSpoke('maintenance', locale)
}
