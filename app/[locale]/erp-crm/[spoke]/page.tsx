import { spokeRoute } from '@/src/components/hubs/routes'

const route = spokeRoute('erp-crm')
export const dynamicParams = false
export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
