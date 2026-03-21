import { useTranslations } from 'next-intl'
import Card from '@/src/components/ui/Card'

interface TeamMember {
  name: string
  title: string
  bio: string
  initials: string
}

const team: TeamMember[] = [
  {
    name: 'Sarah Chen',
    title: 'Operations Lead',
    bio: 'Former VP of Operations at a $80M industrial distributor. Led 3 ERP implementations and 2 WMS deployments. Obsessed with process design that actually sticks.',
    initials: 'SC',
  },
  {
    name: 'Marcus Webb',
    title: 'Systems Architect',
    bio: '15 years designing and integrating operational tech stacks for mid-market manufacturers. Has connected more ERPs, WMSes, and CRMs than he can count.',
    initials: 'MW',
  },
  {
    name: 'Priya Nair',
    title: 'Implementation Lead',
    bio: 'Former operations manager who moved to consulting after fixing her own company\'s broken systems. Specializes in change management and user adoption.',
    initials: 'PN',
  },
]

export default function TeamGrid() {
  const t = useTranslations('about.team')

  return (
    <section className="py-24 bg-surface" aria-labelledby="team-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="team-title"
            className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} variant="bordered" className="text-center">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-xl text-secondary">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-3">{member.title}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
