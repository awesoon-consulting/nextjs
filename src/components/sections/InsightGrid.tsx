import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { insights } from '@/src/data/insights'
import Card from '@/src/components/ui/Card'
import Badge from '@/src/components/ui/Badge'

interface InsightGridProps {
  limit?: number
}

export default function InsightGrid({ limit }: InsightGridProps) {
  const t = useTranslations('insights')
  const locale = useLocale()

  const posts = limit ? insights.slice(0, limit) : insights

  if (posts.length === 0) {
    return (
      <section className="py-24 bg-surface" aria-labelledby="insights-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-secondary">{t('noPosts')}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-surface" aria-labelledby="insights-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="insights-title"
            className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/insights/${post.slug}`}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xl"
            >
              <Card variant="bordered" hover className="h-full flex flex-col group-hover:border-secondary/40 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="default" size="sm">
                    {t(`categories.${post.category}` as Parameters<typeof t>[0])}
                  </Badge>
                  <span className="text-xs text-text-muted">{post.readingTime} min read</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-text-muted"
                  >
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="text-sm font-medium text-accent flex items-center group-hover:gap-1 transition-all">
                    {t('readMore')}
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
