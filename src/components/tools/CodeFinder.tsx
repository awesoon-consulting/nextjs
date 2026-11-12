'use client'

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useLocale, useMessages, useTranslations } from 'next-intl'
import { SCHEMES, buildSearcher, type CodeIndex, type Scheme, type Searcher } from '@/src/lib/tools/codeSearch'
import ResultCard from './ResultCard'
import { chipClass, fieldClass, ghostBtn } from './styles'

type Msgs = { tools: { finder: { tries: string[] } } }

export default function CodeFinder() {
  const t = useTranslations('tools.finder')
  const locale = useLocale()
  const tries = (useMessages() as unknown as Msgs).tools.finder.tries
  const params = useSearchParams()
  const [query, setQuery] = useState(() => params.get('q') ?? '')
  const [searcher, setSearcher] = useState<Searcher | null>(null)
  const [runs, setRuns] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState('')

  useEffect(() => {
    let live = true
    import('@/src/data/procurement-codes.json').then((m) => {
      if (!live) return
      const index = m.default as unknown as CodeIndex
      setSearcher(buildSearcher(index))
      setRuns(index.runs)
    })
    return () => {
      live = false
    }
  }, [])

  const q = query.trim()
  const results = useMemo(() => (searcher && q.length > 1 ? searcher.search(q) : null), [searcher, q])
  const found = results ? SCHEMES.filter((s) => results[s].length) : []

  async function copy(text: string, label: string) {
    await navigator.clipboard.writeText(text)
    setCopied(label)
    window.setTimeout(() => setCopied(''), 1800)
  }

  const allCodes = results ? found.map((s) => `${s}: ${results[s].map((h) => h.code).join(', ')}`).join('\n') : ''
  const shareUrl = `/${locale}/tools/procurement-code-finder?q=${encodeURIComponent(q)}`

  return (
    <div className="flex flex-col gap-6">
      <div className="tl-rise rounded-3xl border border-white/[0.08] bg-[#0D1117] p-6 sm:p-8">
        <label htmlFor="finder-q" className="font-semibold text-white">
          {t('inputLabel')}
        </label>
        <div className="relative mt-2.5">
          <input
            id="finder-q"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('placeholder')}
            autoComplete="off"
            className={`${fieldClass} min-h-14 pr-24 text-lg`}
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="absolute top-1/2 right-2 min-h-10 -translate-y-1/2 rounded-full px-4 text-sm text-neutral-300 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7D9CCB]">
              {t('clear')}
            </button>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label={t('tryLabel')}>
          <span className="mr-1 text-sm text-neutral-400">{t('tryLabel')}</span>
          {tries.map((s) => (
            <button key={s} type="button" aria-pressed={q.toLowerCase() === s.toLowerCase()} onClick={() => setQuery(s)} className={chipClass(q.toLowerCase() === s.toLowerCase())}>
              {s}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-400">
          {t('scope')} {t('naics')}
        </p>
      </div>

      <div aria-live="polite" className="sr-only">
        {!searcher ? t('loading') : results ? (found.length ? t('results', { query: q }) : t('none')) : ''}
        {copied}
      </div>

      {!searcher && q.length > 1 && <p className="text-neutral-300">{t('loading')}</p>}

      {results && !found.length && <p className="tl-rise rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-neutral-200">{t('none')}</p>}

      {results && found.length > 0 && (
        <>
          <h2 className="font-heading text-2xl font-semibold text-white">{t('results', { query: q })}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SCHEMES.map((s: Scheme, i) => (
              <section key={s} className="tl-rise flex flex-col rounded-3xl border border-white/[0.08] bg-[#111827] p-6" style={{ animationDelay: `${i * 60}ms` }} aria-labelledby={`sch-${s}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 id={`sch-${s}`} className="font-heading text-xl font-semibold text-white">
                    {t(`schemes.${s}.name`)}
                  </h3>
                  <span className="text-sm text-neutral-300">{t(`schemes.${s}.where`)}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{t(`schemes.${s}.explain`)}</p>
                {results[s].length ? (
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {results[s].map((h) => (
                      <li key={h.code} className="flex items-start justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                        <div className="min-w-0">
                          <p className="font-mono text-lg font-semibold tracking-wide text-white">{h.code}</p>
                          <p className="text-sm text-neutral-200">{h.title}</p>
                          {h.linked && (
                            <p className="mt-1 text-xs text-neutral-400">{t(s === 'GSIN' ? 'linked' : 'linkedGsin', { codes: h.linked.slice(0, 3).join(', ') })}</p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => copy(h.code, t('copiedCode', { code: h.code }))}
                          aria-label={`${t('copy')} ${s} ${h.code}`}
                          className="min-h-11 flex-shrink-0 rounded-full border border-white/20 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D9CCB]"
                        >
                          {copied === t('copiedCode', { code: h.code }) ? '✓' : t('copy')}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm text-neutral-400">{t('noneScheme')}</p>
                )}
              </section>
            ))}
          </div>

          <div className="tl-rise rounded-3xl bg-[#0F1D33] p-6 text-white sm:p-8">
            <p className="text-xs font-semibold tracking-[0.06em] text-neutral-300 uppercase">{t('cardLabel')}</p>
            <p className="mt-2 font-heading text-2xl font-semibold">{q}</p>
            <dl className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {found.map((s) => (
                <div key={s} className="rounded-2xl bg-white/[0.06] p-4">
                  <dt className="text-[13px] text-neutral-300">{s}</dt>
                  <dd className="mt-1 font-mono text-lg font-semibold">{results[s][0].code}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => copy(allCodes, t('copiedAll'))} className={ghostBtn}>
                {copied === t('copiedAll') ? t('copiedAll') : t('copyAll')}
              </button>
            </div>
            <p className="mt-4 text-[13px] text-neutral-300">{t('check')}</p>
          </div>

          <ResultCard tool="finder" toolName={t('meta.title')} summary={`${t('summary', { query: q })}: ${found.map((s) => `${s} ${results[s][0].code}`).join(', ')}`} shareUrl={shareUrl} />
        </>
      )}

      <div className="rounded-3xl border border-white/[0.08] p-6 text-[13px] leading-relaxed text-neutral-300 sm:p-8">
        <h2 className="mb-2 font-heading text-base font-semibold text-white">{t('sourceTitle')}</h2>
        <ul className="flex flex-col gap-1.5">
          {(['UNSPSC', 'PSC', 'CPV'] as const).map((s) => (
            <li key={s}>{t(`sources.${s}`)}</li>
          ))}
        </ul>
        {runs.GSIN && <p className="mt-2">{t('fetched', { date: runs.GSIN.slice(0, 10) })}</p>}
      </div>
    </div>
  )
}
