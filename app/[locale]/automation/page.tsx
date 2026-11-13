import { hubRoute } from '@/src/components/hubs/routes'

const route = hubRoute('automation')
export const generateMetadata = route.generateMetadata
export default route.Page
