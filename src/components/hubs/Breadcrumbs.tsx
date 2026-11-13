import Link from 'next/link'

export default function Breadcrumbs({ items, locale, label = 'Breadcrumb' }: { items: { name: string; path: string }[]; locale: string; label?: string }) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-400">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-neutral-300">
                {it.name}
              </span>
            ) : (
              <Link href={`/${locale}${it.path}`} className="rounded hover:text-white">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
