import { spokeRoute } from '@/src/components/hubs/routes'

const route = spokeRoute('consulting')
export const dynamicParams = false
export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
