'use client'

export default function AskButton({ text, className, children }: { text?: string; className: string; children: React.ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new CustomEvent('glossary-ask', { detail: text ?? '' }))}>
      {children}
    </button>
  )
}
