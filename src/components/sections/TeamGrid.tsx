import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Card from '@/src/components/ui/Card'
import AnimateIn from '@/src/components/ui/AnimateIn'
import { siteConfig } from '@/src/config/site'

interface TeamMember {
  name: string
  key: 'ching' | 'ray'
  photo: string
  linkedin: string
}

const team: TeamMember[] = [
  { name: 'Ching Ho', key: 'ching', photo: siteConfig.team.ching.photo, linkedin: siteConfig.team.ching.linkedin },
  { name: 'Ray Rasouli', key: 'ray', photo: siteConfig.team.ray.photo, linkedin: siteConfig.team.ray.linkedin },
]

export default function TeamGrid() {
  const t = useTranslations('about.team')

  return (
    <section className="py-24 bg-surface" aria-labelledby="team-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="text-center mb-16">
            <h2
              id="team-title"
              className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4"
            >
              {t('title')}
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, idx) => (
            <AnimateIn key={member.name} variant="slide-up" delay={idx * 90} threshold={0.04}>
              <Card variant="bordered" className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/20 mx-auto mb-4">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent dark:text-neutral-300 mb-3">{t(`members.${member.key}.title`)}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{t(`members.${member.key}.bio`)}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0A66C2] hover:text-[#004182] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
