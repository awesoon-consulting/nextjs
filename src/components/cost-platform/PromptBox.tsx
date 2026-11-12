'use client'

import { useState } from 'react'

export default function PromptBox({ prompt, copy, copied }: { prompt: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-5">
      <p className="text-[15px] leading-relaxed text-neutral-200">{prompt}</p>
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(prompt)
          setDone(true)
          setTimeout(() => setDone(false), 2000)
        }}
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]"
      >
        <span aria-live="polite">{done ? copied : copy}</span>
      </button>
    </div>
  )
}
