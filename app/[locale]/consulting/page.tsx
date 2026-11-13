import { hubRoute } from '@/src/components/hubs/routes'

const route = hubRoute('consulting')
export const generateMetadata = route.generateMetadata
export default route.Page
