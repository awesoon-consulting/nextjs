import {
  pgTable,
  text,
  integer,
  numeric,
  timestamp,
  boolean,
  jsonb,
  serial,
  primaryKey,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core'

export const sources = pgTable('sources', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  url: text('url').notNull(),
  licence: text('licence').notNull(),
  attribution: text('attribution').notNull(),
  keyed: boolean('keyed').notNull().default(false),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const ingestRuns = pgTable(
  'ingest_runs',
  {
    id: serial('id').primaryKey(),
    sourceId: text('source_id').notNull(),
    startedAt: timestamp('started_at', { withTimezone: true }).notNull(),
    finishedAt: timestamp('finished_at', { withTimezone: true }),
    rows: integer('rows').notNull().default(0),
    status: text('status').notNull(),
    error: text('error'),
    rawFileRef: text('raw_file_ref'),
  },
  (t) => [index('ingest_runs_source_idx').on(t.sourceId, t.startedAt)],
)

export const buyers = pgTable(
  'buyers',
  {
    id: serial('id').primaryKey(),
    country: text('country').notNull(),
    name: text('name').notNull(),
    externalId: text('external_id'),
    sourceId: text('source_id').notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex('buyers_country_name_uq').on(t.country, t.name)],
)

// categoryCodes: { UNSPSC: [...], CPV: [...], NAICS: [...], PSC: [...], GSIN: [...] }
// categories: our portal category slugs matched at ingest (see category-map.ts)
const noticeColumns = {
  id: serial('id').primaryKey(),
  sourceId: text('source_id').notNull(),
  externalId: text('external_id').notNull(),
  country: text('country').notNull(),
  title: text('title').notNull(),
  buyer: text('buyer'),
  categoryCodes: jsonb('category_codes').$type<Record<string, string[]>>().notNull(),
  categories: jsonb('categories').$type<string[]>().notNull(),
  value: numeric('value'),
  currency: text('currency'),
  status: text('status'),
  url: text('url'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}

export const tenders = pgTable(
  'tenders',
  {
    ...noticeColumns,
    published: timestamp('published', { withTimezone: true }),
    closes: timestamp('closes', { withTimezone: true }),
  },
  (t) => [
    uniqueIndex('tenders_source_ext_uq').on(t.sourceId, t.externalId),
    index('tenders_country_closes_idx').on(t.country, t.closes),
  ],
)

export const awards = pgTable(
  'awards',
  {
    ...noticeColumns,
    supplier: text('supplier'),
    awarded: timestamp('awarded', { withTimezone: true }),
  },
  (t) => [
    uniqueIndex('awards_source_ext_uq').on(t.sourceId, t.externalId),
    index('awards_country_awarded_idx').on(t.country, t.awarded),
  ],
)

export const wages = pgTable(
  'wages',
  {
    id: serial('id').primaryKey(),
    sourceId: text('source_id').notNull(),
    country: text('country').notNull(),
    region: text('region').notNull(),
    occupationCode: text('occupation_code').notNull(),
    occupationName: text('occupation_name').notNull(),
    median: numeric('median'),
    mean: numeric('mean'),
    unit: text('unit').notNull(),
    currency: text('currency').notNull(),
    period: text('period').notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex('wages_uq').on(t.sourceId, t.region, t.occupationCode, t.unit, t.period)],
)

export const codes = pgTable(
  'codes',
  {
    scheme: text('scheme').notNull(),
    code: text('code').notNull(),
    title: text('title').notNull(),
    parent: text('parent'),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.scheme, t.code] })],
)

export const codeCrosswalk = pgTable(
  'code_crosswalk',
  {
    fromScheme: text('from_scheme').notNull(),
    fromCode: text('from_code').notNull(),
    toScheme: text('to_scheme').notNull(),
    toCode: text('to_code').notNull(),
    sourceId: text('source_id').notNull(),
  },
  (t) => [primaryKey({ columns: [t.fromScheme, t.fromCode, t.toScheme, t.toCode] })],
)

export const platformsApi = pgTable('platforms_api', {
  name: text('name').primaryKey(),
  apisGuruId: text('apis_guru_id').notNull(),
  auth: jsonb('auth').$type<string[]>().notNull(),
  webhooks: boolean('webhooks').notNull(),
  specUrl: text('spec_url').notNull(),
  version: text('version'),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const platformChanges = pgTable(
  'platform_changes',
  {
    id: serial('id').primaryKey(),
    vendor: text('vendor').notNull(),
    kind: text('kind').notNull(),
    externalId: text('external_id').notNull(),
    title: text('title').notNull(),
    url: text('url'),
    published: timestamp('published', { withTimezone: true }),
    sourceId: text('source_id').notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex('platform_changes_uq').on(t.sourceId, t.externalId)],
)

// Website inquiries. RLS on with no policies: only the server connection reads or writes.
export const leads = pgTable(
  'leads',
  {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    submittedAt: timestamp('submitted_at', { withTimezone: true }).notNull(),
    name: text('name').notNull(),
    company: text('company').notNull(),
    email: text('email').notNull(),
    phone: text('phone'),
    industry: text('industry').notNull(),
    companySize: text('company_size').notNull(),
    problems: jsonb('problems').$type<string[]>().notNull().default([]),
    otherProblem: text('other_problem'),
    timeline: text('timeline').notNull(),
    budget: text('budget').notNull(),
    message: text('message'),
    locale: text('locale').notNull(),
    sourceUrl: text('source_url'),
    utmSource: text('utm_source'),
    utmMedium: text('utm_medium'),
    utmCampaign: text('utm_campaign'),
    utmTerm: text('utm_term'),
    utmContent: text('utm_content'),
    landingPage: text('landing_page'),
    referrer: text('referrer'),
    ipHash: text('ip_hash'),
    userAgent: text('user_agent'),
    status: text('status').notNull().default('new'),
  },
  (t) => [
    uniqueIndex('leads_email_submitted_uq').on(t.email, t.submittedAt),
    index('leads_created_idx').on(t.createdAt),
  ],
).enableRLS()
