export const primaryBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-[#0A0A0A] transition-colors hover:bg-[#E5E5E5]'
export const ghostBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.08]'
export const card = 'rounded-3xl border border-white/[0.08] bg-[#111827]'
export const lift = 'transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] motion-reduce:hover:translate-y-0'
export const eyebrow = 'text-xs font-semibold tracking-wide text-[#7D9CCB]'
export const h2 = 'font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl'
export const chip = (on: boolean) =>
  `inline-flex min-h-10 items-center rounded-full border px-3.5 py-2 text-sm transition-colors ${
    on
      ? 'border-white bg-white font-semibold text-[#0A0A0A] hover:bg-[#E5E5E5]'
      : 'border-white/10 bg-white/5 text-neutral-300 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white'
  }`

export const mid = (term: string) => (/^[A-ZÀ-Ý][a-zà-ÿ]/.test(term) ? term.charAt(0).toLowerCase() + term.slice(1) : term)
