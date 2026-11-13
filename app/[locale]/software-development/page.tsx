import { hubRoute } from '@/src/components/hubs/routes'

const route = hubRoute('software-development')
export const generateMetadata = route.generateMetadata
export default route.Page
