import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getLocalizedGames } from '@/src/data/games'

const TOKENS = [
  ['tokenGround', '#0A0A0A'],
  ['tokenSurface', '#111827'],
  ['tokenText', '#FAFAFA'],
  ['tokenAccent', '#7D9CCB'],
  ['tokenBand', '#0F1D33'],
] as const

const SHOTS = ['stack-snap', 'idle-bakery', 'dodge-rush']

export default async function DesignProof({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'designPage.proof' })
  const games = getLocalizedGames(locale)
  const shots = SHOTS.map((s) => games.find((g) => g.slug === s)!).map((g) => ({ ...g.screenshots[0], name: g.name }))

  return (
    <section className="w-full bg-[#0B1322] py-24" aria-labelledby="proof-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="proof-title" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-300">{t('subtitle')}</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="design-lift flex flex-col rounded-3xl border border-white/[0.08] bg-[#111827] p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">{t('siteTitle')}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-300">{t('siteText')}</p>
            <p className="mt-7 text-xs font-semibold text-[#7D9CCB]">{t('tokensLabel')}</p>
            <ul className="mt-3 grid grid-cols-5 gap-2">
              {TOKENS.map(([k, hex]) => (
                <li key={k}>
                  <span className="block aspect-square rounded-xl ring-1 ring-white/15" style={{ background: hex }} aria-hidden="true" />
                  <span className="mt-2 block truncate text-xs text-neutral-200">{t(k)}</span>
                  <span className="block font-mono text-[11px] text-neutral-400">{hex}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-white/[0.08] pt-6 lg:mt-auto">
              <div>
                <p className="font-heading text-4xl font-bold text-white">Aa</p>
                <p className="mt-1 text-xs text-neutral-400">Sora</p>
              </div>
              <div>
                <p className="font-body text-4xl text-white">Aa</p>
                <p className="mt-1 text-xs text-neutral-400">Inter</p>
              </div>
              <span className="flex h-10 w-20 items-center justify-center rounded-full bg-white text-[#0A0A0A]" aria-hidden="true">→</span>
              <span className="h-12 w-16 rounded-2xl border border-white/[0.08] bg-[#0A0A0A]" aria-hidden="true" />
            </div>
          </article>

          <article className="design-lift flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111827] p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">{t('gamesTitle')}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-300">{t('gamesText')}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {games.map((g) => (
                <li key={g.slug}>
                  <Image src={g.icon} alt={g.name} width={44} height={44} className="h-11 w-11 rounded-xl" />
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {shots.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  width={880}
                  height={1912}
                  sizes="(min-width: 1024px) 160px, 30vw"
                  className={`h-auto w-full rounded-2xl ring-1 ring-white/10 ${i === 1 ? 'translate-y-0' : 'translate-y-4'}`}
                />
              ))}
            </div>
            <Link href={`/${locale}/games`} className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-white underline-offset-4 hover:underline">
              {t('gamesLink')}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
