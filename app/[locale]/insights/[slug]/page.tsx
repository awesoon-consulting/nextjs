import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getInsightBySlug, getAllInsightSlugs } from '@/src/data/insights'
import { siteConfig } from '@/src/config/site'
import Badge from '@/src/components/ui/Badge'
import CTABlock from '@/src/components/sections/CTABlock'
import AnimateIn from '@/src/components/ui/AnimateIn'

interface InsightPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllInsightSlugs()
  return siteConfig.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  )
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getInsightBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { locale, slug } = await params
  const post = getInsightBySlug(slug)

  if (!post) notFound()

  // Split content into paragraphs/sections for rendering
  const contentLines = post.content.split('\n')

  return (
    <>
      {/* Header */}
      <section className="border-b border-neutral-200 bg-white pt-32 pb-16 dark:border-white/10 dark:bg-primary">
        <AnimateIn variant="slide-up" threshold={0.08}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/${locale}/insights`}
              className="mb-6 flex items-center gap-1 rounded text-sm text-text-muted transition-colors hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:text-neutral-400 dark:hover:text-text-inverse"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Insights
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="accent" size="sm">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </Badge>
              <span className="text-sm text-text-muted dark:text-neutral-500">
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-text-primary dark:text-text-inverse sm:text-5xl">
              {post.title}
            </h1>
            <p className="mb-6 text-lg text-text-secondary dark:text-neutral-400">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <span className="font-heading font-bold text-xs text-secondary">
                  {post.author.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary dark:text-neutral-300">
                  {post.author}
                </p>
                <time
                  dateTime={post.publishedAt}
                  className="text-xs text-text-muted dark:text-neutral-500"
                >
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="slide-up" threshold={0.03}>
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
              {contentLines.map((line, idx) => {
                if (line.startsWith('# ')) {
                  return (
                    <h1 key={idx} className="font-heading font-bold text-4xl text-text-primary mt-8 mb-4">
                      {line.slice(2)}
                    </h1>
                  )
                }
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="font-heading font-bold text-2xl text-text-primary mt-10 mb-4">
                      {line.slice(3)}
                    </h2>
                  )
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="font-heading font-semibold text-xl text-text-primary mt-8 mb-3">
                      {line.slice(4)}
                    </h3>
                  )
                }
                if (line.startsWith('- ') || line.startsWith('* ')) {
                  return (
                    <li key={idx} className="text-text-secondary leading-relaxed ml-4 list-disc">
                      {line.slice(2)}
                    </li>
                  )
                }
                if (line.trim() === '') return <br key={idx} />

                const boldRegex = /\*\*(.*?)\*\*/g
                const parts: React.ReactNode[] = []
                let lastIndex = 0
                let match
                while ((match = boldRegex.exec(line)) !== null) {
                  if (match.index > lastIndex) {
                    parts.push(line.slice(lastIndex, match.index))
                  }
                  parts.push(<strong key={match.index} className="font-semibold text-text-primary">{match[1]}</strong>)
                  lastIndex = match.index + match[0].length
                }
                if (lastIndex < line.length) {
                  parts.push(line.slice(lastIndex))
                }

                return (
                  <p key={idx} className="text-text-secondary leading-relaxed my-4">
                    {parts.length > 0 ? parts : line}
                  </p>
                )
              })}
            </div>
          </AnimateIn>

          {/* Tags */}
          <AnimateIn variant="slide-up" delay={120} threshold={0.03}>
            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </article>

      <CTABlock />
    </>
  )
}
