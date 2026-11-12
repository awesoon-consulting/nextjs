import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { siteConfig } from '@/src/config/site'

export default function FounderBand() {
  const t = useTranslations('founder')
  return (
    <section className="w-full bg-white py-[88px] dark:bg-primary" aria-labelledby="founder-name">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[280px_1fr]">
        <Image
          src={siteConfig.team.ray.photo}
          alt={t('photoAlt')}
          width={280}
          height={320}
          className="h-72 w-full max-w-[280px] rounded-3xl object-cover md:h-80"
        />
        <div>
          <blockquote className="font-heading text-2xl leading-snug font-semibold text-text-primary sm:text-3xl dark:text-white">“{t('quote')}”</blockquote>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary dark:text-neutral-300">{t('bio')}</p>
          <p id="founder-name" className="mt-6 font-heading text-base font-semibold text-text-primary dark:text-white">{t('name')}</p>
          <p className="text-sm text-text-muted dark:text-neutral-400">{t('role')}</p>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-primary dark:border-white/20 dark:text-white"
          >
            {t('linkedin')}
          </a>
        </div>
      </div>
    </section>
  )
}
