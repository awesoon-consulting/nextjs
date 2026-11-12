import s from './work.module.css'

export default function FlowDiagram({ steps, title }: { steps: { label: string; note: string }[]; title: string }) {
  const n = steps.length
  const cycle = 6
  return (
    <figure className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6 sm:p-8">
      <figcaption className="font-heading text-lg font-semibold text-white">{title}</figcaption>
      <div className="relative mt-6">
        <div className="absolute top-5 right-5 left-5 hidden h-px bg-white/10 md:block" aria-hidden="true">
          <div className={`${s.flowBar} h-px bg-[#00AEEF]`} />
        </div>
        <ol className="relative grid gap-3" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))` }}>
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4 md:block">
              <span
                className={`${s.flowStep} relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0A0A0A] font-heading text-sm font-semibold text-white`}
                style={{ animationDelay: `${(i * cycle * 0.85) / n}s` }}
              >
                {i + 1}
              </span>
              <div className="md:mt-4">
                <p className="font-heading text-base font-semibold text-white">{step.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-300">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}
