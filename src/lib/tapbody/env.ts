import { siteConfig } from '@/src/config/site'
import type { Env } from './waitlist'

export function readTapbodyEnv(): Env {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SECRET_KEY
  const resendKey = process.env.RESEND_API_KEY
  const missing = [
    !supabaseUrl && 'SUPABASE_URL',
    !supabaseKey && 'SUPABASE_SECRET_KEY',
    !resendKey && 'RESEND_API_KEY',
  ].filter(Boolean)
  if (missing.length) throw new Error(`Missing environment variables: ${missing.join(', ')}`)
  return {
    supabaseUrl: supabaseUrl!,
    supabaseKey: supabaseKey!,
    resendKey: resendKey!,
    from: process.env.TAPBODY_WAITLIST_FROM ?? 'TapBody <waitlist@awesoontechnologies.com>',
    notifyTo: process.env.TAPBODY_WAITLIST_NOTIFY_TO ?? 'awesoonmarketing@gmail.com',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url,
    senderAddress: siteConfig.contact.address,
    contactEmail: siteConfig.contact.email,
  }
}
