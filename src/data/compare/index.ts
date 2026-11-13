import { COMPARE_NETSUITE_VS_ODOO } from './netsuite-vs-odoo'
import { COMPARE_HUBSPOT_VS_SALESFORCE } from './hubspot-vs-salesforce'
import { COMPARE_SHOPIFY_VS_WOOCOMMERCE } from './shopify-vs-woocommerce'
import { COMPARE_ZAPIER_VS_CUSTOM_INTEGRATION } from './zapier-vs-custom-integration'
import { COMPARE_SPREADSHEETS_VS_ERP } from './spreadsheets-vs-erp'
import { COMPARE_BUSINESS_CENTRAL_VS_NETSUITE } from './business-central-vs-netsuite'
import type { Comparison } from './types'

export type { Comparison, CompareFact, CompareCopy } from './types'

export const COMPARISONS: Comparison[] = [
  COMPARE_NETSUITE_VS_ODOO,
  COMPARE_HUBSPOT_VS_SALESFORCE,
  COMPARE_SHOPIFY_VS_WOOCOMMERCE,
  COMPARE_ZAPIER_VS_CUSTOM_INTEGRATION,
  COMPARE_SPREADSHEETS_VS_ERP,
  COMPARE_BUSINESS_CENTRAL_VS_NETSUITE,
]

export const getComparison = (slug: string) => COMPARISONS.find((c) => c.slug === slug)
export const getAllComparisonSlugs = () => COMPARISONS.map((c) => c.slug)
export const comparisonsForTerm = (slug: string) => COMPARISONS.filter((c) => c.relatedTerms.includes(slug))
