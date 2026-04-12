import { useTranslations } from 'next-intl'
import Card from '@/src/components/ui/Card'
import AnimateIn from '@/src/components/ui/AnimateIn'

interface TeamMember {
  name: string
  title: string
  bio: string
  initials: string
}

const team: TeamMember[] = [
  {
    name: 'Ching Ho',
    title: 'Project Manager & ERP/CRM Consultant',
    bio: 'Spent nearly a decade managing operations, supply chain, and IT across multiple locations and 50+ person teams before moving into ERP systems leadership. Brings real operational experience from the floor to the system — not just configuration knowledge, but an understanding of how businesses actually run day to day.',
    initials: 'CH',
  },
  {
    name: 'Ray Rasouli',
    title: 'Software Engineer & Solution Developer',
    bio: 'Full-stack developer who has built and replaced entire platforms from the ground up — from e-commerce migrations and ERP integrations to AI-assisted data pipelines and internal automation tools. Owns everything from database design to cloud infrastructure, with a focus on eliminating manual workflows and giving operations teams systems they can actually rely on.',
    initials: 'RR',
  },
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
                <div className="w-20 h-20 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-xl text-secondary">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent dark:text-neutral-300 mb-3">{member.title}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </Card>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
