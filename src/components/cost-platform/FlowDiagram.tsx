export default function FlowDiagram({ a, b, catA, catB, layer, layerSub, retry, label }: { a: string; b: string; catA: string; catB: string; layer: string; layerSub: string; retry: string; label: string }) {
  const node = 'rounded-2xl border border-white/12 bg-[#0A0A0A] px-5 py-4 text-center'
  const arrow = (
    <div className="flex items-center justify-center py-1 sm:px-1 sm:py-0" aria-hidden="true">
      <svg className="h-8 w-8 rotate-90 text-[#9DB6DC] sm:h-6 sm:w-14 sm:rotate-0" viewBox="0 0 56 24" fill="none">
        <path className="cp-flow" d="M2 12h46" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M44 6l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
  return (
    <figure aria-label={label}>
      <style>{'@keyframes cpflow{to{stroke-dashoffset:-24}}.cp-flow{animation:cpflow .9s linear infinite}@media (prefers-reduced-motion:reduce){.cp-flow{animation:none}}'}</style>
      <div className="grid items-center sm:grid-cols-[1fr_auto_1.3fr_auto_1fr]">
        <div className={node}>
          <p className="font-heading text-lg font-semibold text-white">{a}</p>
          <p className="mt-1 text-sm text-neutral-400">{catA}</p>
        </div>
        {arrow}
        <div className="rounded-2xl border border-[#9DB6DC]/40 bg-[#0F1D33] px-5 py-4 text-center">
          <p className="font-heading text-lg font-semibold text-white">{layer}</p>
          <p className="mt-1 text-sm text-neutral-300">{layerSub}</p>
        </div>
        {arrow}
        <div className={node}>
          <p className="font-heading text-lg font-semibold text-white">{b}</p>
          <p className="mt-1 text-sm text-neutral-400">{catB}</p>
        </div>
      </div>
      <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-400">
        <svg className="h-4 w-4 text-[#9DB6DC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M5.5 15a7 7 0 0011.9 2.5M18.5 9A7 7 0 006.6 6.5" />
        </svg>
        {retry}
      </figcaption>
    </figure>
  )
}
