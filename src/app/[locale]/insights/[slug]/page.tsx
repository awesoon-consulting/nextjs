import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getInsightBySlug, getAllInsightSlugs } from '@/src/data/insights'
import { getSolutionBySlug } from '@/src/data/solutions'
import { siteConfig } from '@/src/config/site'
import Badge from '@/src/components/ui/Badge'
import CTABlock from '@/src/components/sections/CTABlock'

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
      <section className="bg-primary pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/insights`}
            className="text-sm text-neutral-400 hover:text-text-inverse transition-colors flex items-center gap-1 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
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
            <span className="text-neutral-500 text-sm">{post.readingTime} min read</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-inverse leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-neutral-400 text-lg mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
              <span className="font-heading font-bold text-xs text-secondary">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-300">{post.author}</p>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-neutral-500"
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
      </section>

      {/* Article Content */}
      <article className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-neutral max-w-none">
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

              // Handle bold text (**text**)
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

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {post.relatedSolutionSlugs.length > 0 && (
            <div className="mt-12 border-t border-neutral-200 pt-8">
              <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
                Related Solutions
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {post.relatedSolutionSlugs.map((solutionSlug) => {
                  const solution = getSolutionBySlug(solutionSlug)
                  if (!solution) return null

                  return (
                    <Link
                      key={solutionSlug}
                      href={`/${locale}/solutions/${solutionSlug}`}
                      className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      <p className="font-medium text-text-primary">{solution.problemHeadline}</p>
                      <p className="mt-2 text-sm text-text-secondary">
                        {solution.seoSummary}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {post.relatedSlugs.length > 0 && (
            <div className="mt-12 border-t border-neutral-200 pt-8">
              <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
                Keep Reading
              </h2>
              <div className="space-y-3">
                {post.relatedSlugs.map((relatedSlug) => {
                  const relatedPost = getInsightBySlug(relatedSlug)
                  if (!relatedPost) return null

                  return (
                    <Link
                      key={relatedSlug}
                      href={`/${locale}/insights/${relatedSlug}`}
                      className="block rounded-xl border border-neutral-200 p-4 transition-colors hover:border-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      <p className="font-medium text-text-primary">{relatedPost.title}</p>
                      <p className="mt-2 text-sm text-text-secondary">{relatedPost.excerpt}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTABlock />
    </>
  )
}
