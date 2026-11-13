export default function TermDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3 sm:auto-cols-fr sm:grid-flow-col">
      {steps.map((s, i) => (
        <li key={i} className="ps-msg relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-col sm:items-start" style={{ animationDelay: `${i * 90}ms` }}>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00AEEF]/15 font-heading text-sm font-bold text-[#7FD6F7]">{i + 1}</span>
          <span className="text-sm font-semibold text-white">{s}</span>
          {i < steps.length - 1 && (
            <svg className="absolute top-1/2 -right-3 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#00AEEF] sm:block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  )
}
