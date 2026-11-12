export const primaryBtn =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB]'
export const ghostBtn =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB]'
export const chipClass = (on: boolean) =>
  `inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB] ${
    on
      ? 'border-white bg-white font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]'
      : 'border-white/10 bg-white/5 text-neutral-300 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white'
  }`
export const fieldClass =
  'min-h-12 w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-base text-white placeholder:text-neutral-400 hover:border-white/20 focus-visible:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB]'

export const TOOL_CSS = `
@keyframes tl-rise { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }
@keyframes tl-pop { from { opacity: .4; transform: scale(.985) } to { opacity: 1; transform: none } }
@keyframes tl-blink { 0%, 100% { opacity: .25 } 50% { opacity: 1 } }
.tl-rise { animation: tl-rise 420ms cubic-bezier(.2,.7,.2,1) both }
.tl-pop { animation: tl-pop 320ms ease both }
.tl-dot { animation: tl-blink 1s infinite }
.tl-card { transition: transform 200ms ease, border-color 200ms ease, background-color 200ms ease }
.tl-card:hover { transform: translateY(-3px) }
.tl-bar { transition: width 420ms cubic-bezier(.2,.7,.2,1) }
input[type=range].tl-range { accent-color: #7D9CCB; width: 100%; height: 44px; cursor: pointer }
@media (prefers-reduced-motion: reduce) {
  .tl-rise, .tl-pop, .tl-dot { animation: none }
  .tl-card, .tl-bar { transition: none }
  .tl-card:hover { transform: none }
}
`
