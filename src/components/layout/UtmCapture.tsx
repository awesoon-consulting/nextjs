'use client'

/**
 * @file     UtmCapture.tsx
 * @layer    src > components > layout
 * @readme   ./README.md
 * @purpose  Invisible component that captures UTM params on first page load
 * @depends  src/lib/utm.ts
 */

import { useEffect } from 'react'
import { captureUtmParams } from '@/src/lib/utm'

export default function UtmCapture() {
  useEffect(() => {
    captureUtmParams()
  }, [])

  return null
}
