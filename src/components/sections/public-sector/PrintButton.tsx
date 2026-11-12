'use client'

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]"
    >
      {label}
    </button>
  )
}
