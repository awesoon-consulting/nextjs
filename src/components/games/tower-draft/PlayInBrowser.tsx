'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PlayInBrowserProps {
  src: string
  frameTitle: string
  startLabel: string
  fullLabel: string
  posterAlt: string
}

// The game is about 1 MB, so it loads only when the visitor asks for it.
export default function PlayInBrowser({ src, frameTitle, startLabel, fullLabel, posterAlt }: PlayInBrowserProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="td-phone relative w-[17.5rem] sm:w-[20rem] lg:w-[23rem]">
        {open ? (
          <iframe
            src={src}
            title={frameTitle}
            allow="fullscreen"
            className="block aspect-[390/780] w-full rounded-[1.6rem] bg-[#134C98]"
          />
        ) : (
          <div className="relative aspect-[390/780] w-full overflow-hidden rounded-[1.6rem] bg-[#134C98]">
            <Image
              src="/images/games/tower-draft/hero-town.webp"
              alt={posterAlt}
              fill
              sizes="320px"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 grid place-items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="td-gold rounded-full px-7 py-3.5 font-[family-name:var(--font-td-head)] text-base"
              >
                {startLabel}
              </button>
            </div>
          </div>
        )}
      </div>
      <a
        href={src}
        className="rounded text-sm font-semibold text-[#EAF2FF] underline decoration-[#FFC14D] decoration-2 underline-offset-4 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC14D]"
      >
        {fullLabel}
      </a>
    </div>
  )
}
