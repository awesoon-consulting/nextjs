'use client'

import { useEffect, useRef, useState } from 'react'

interface TeaserVideoProps {
  label: string
  pauseLabel: string
  playLabel: string
}

// Autoplays muted only when the visitor has not asked for reduced motion, and always offers a pause.
export default function TeaserVideo({ label, pauseLabel, playLabel }: TeaserVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Start after the page has painted so the video never competes with the first view.
    const start = () => window.setTimeout(() => video.play().then(() => setPlaying(true), () => setPlaying(false)), 1200)
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  function toggle() {
    const video = ref.current
    if (!video) return
    if (video.paused) video.play().then(() => setPlaying(true), () => setPlaying(false))
    else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="td-phone relative mx-auto w-[16rem] sm:w-[19rem] lg:w-[21rem]">
      <video
        ref={ref}
        className="block aspect-[9/16] w-full rounded-[1.6rem] bg-[#0F3B73] object-cover"
        poster="/images/games/tower-draft/teaser-poster.webp"
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        width={720}
        height={1280}
      >
        <source src="/videos/tower-draft/teaser.webm" type="video/webm" />
        <source src="/videos/tower-draft/teaser.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? pauseLabel : playLabel}
        className="absolute -right-4 -top-4 grid h-11 w-11 place-items-center rounded-full bg-[#0F3B73] text-white ring-2 ring-[#EAF2FF]/70 shadow-lg transition hover:bg-[#0F3B73] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC14D]"
      >
        {playing ? (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="3" y="2" width="3.5" height="12" rx="1" />
            <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 2.5v11a1 1 0 0 0 1.5.86l9-5.5a1 1 0 0 0 0-1.72l-9-5.5A1 1 0 0 0 4 2.5Z" />
          </svg>
        )}
      </button>
    </div>
  )
}
