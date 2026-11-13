import { hubRoute } from '@/src/components/hubs/routes'

const route = hubRoute('erp-crm')
export const generateMetadata = route.generateMetadata
export default route.Page
