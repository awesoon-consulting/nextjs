'use client'

export default function AskButton({ text, label, className }: { text: string; label: string; className?: string }) {
  function onClick() {
    const el = document.getElementById('hub-assistant')
    el?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' })
    window.dispatchEvent(new CustomEvent('hub-ask', { detail: text }))
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  )
}
