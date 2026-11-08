'use client'

/**
 * @file     TrackedEmailLink.tsx
 * @layer    src > components > ui
 * @readme   ./README.md
 * @purpose  Email link that fires GA4 + Google Ads conversion on click
 * @depends  src/lib/analytics.ts
 */

import { trackEmailClick } from '@/src/lib/analytics'

interface TrackedEmailLinkProps {
  email: string
  className?: string
}

export default function TrackedEmailLink({ email, className }: TrackedEmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => trackEmailClick()}
    >
      {email}
    </a>
  )
}
