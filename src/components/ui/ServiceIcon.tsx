const ICONS: Record<string, string> = {
  systemsSupport: 'M4 5h16v5H4zM4 14h16v5H4zM8 7.5h.01M8 16.5h.01',
  crmSupport: 'M16 19v-1a4 4 0 00-8 0v1M12 11a3 3 0 100-6 3 3 0 000 6zM20 19v-1a3 3 0 00-2-2.8M4 19v-1a3 3 0 012-2.8',
  erpSupport: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5',
  ecommerceSupport: 'M3 4h2l2 11h11l2-8H6.2M9 20h.01M17 20h.01',
  consultation: 'M9 11l3 3 8-8M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9',
  programming: 'M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12',
  automation: 'M5 7h4v4H5zM15 13h4v4h-4zM9 9h3a2 2 0 012 2v4h1',
  design: 'M12 3a9 9 0 100 18c1 0 1.5-.7 1.5-1.5 0-.4-.2-.7-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16a5 5 0 005-5c0-4.4-4-8-9-8zM7.5 11.5h.01M10 7.5h.01M15 7.5h.01',
  advertising: 'M4 10v4a1 1 0 001 1h2l5 4V5L7 9H5a1 1 0 00-1 1zM16 8a5 5 0 010 8',
}

export default function ServiceIcon({ id, className = '' }: { id: string; className?: string }) {
  return (
    <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-white dark:bg-white/10 ${className}`} aria-hidden="true">
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d={ICONS[id]} />
      </svg>
    </span>
  )
}

