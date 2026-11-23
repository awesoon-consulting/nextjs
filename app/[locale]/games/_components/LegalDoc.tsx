import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { siteConfig } from '@/src/config/site'
import type { LegalDoc } from '../_legal/docs'

const linkClass = 'text-[#7D9CCB] underline underline-offset-4 hover:text-[#FAFAFA]'

export function legalMetadata(doc: LegalDoc): Metadata {
  return { title: doc.title, description: doc.lead }
}

export function LegalDocPage({ locale, doc }: { locale: string; doc: LegalDoc }) {
  setRequestLocale(locale)
  return (
    <div className="min-h-screen bg-surface pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-heading font-bold text-4xl text-text-primary mb-2">{doc.title}</h1>
        <p className="text-sm text-text-muted mb-12">{doc.updated}</p>

        <div className="prose prose-neutral max-w-none space-y-10 text-text-secondary">
          <section aria-labelledby="legal-intro">
            <h2 id="legal-intro" className="sr-only">
              {doc.title}
            </h2>
            <p className="text-lg text-text-primary font-semibold">{doc.lead}</p>
            {doc.short && (
              <ol className="mt-3 list-decimal pl-6 space-y-2">
                {doc.short.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ol>
            )}
            {doc.note && <p className="mt-3 text-sm text-text-muted">{doc.note}</p>}
          </section>

          {doc.sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`legal-${s.id}`}>
              <h2 id={`legal-${s.id}`} className="font-heading font-bold text-2xl text-text-primary mb-4">
                {s.h}
              </h2>
              {s.p?.map((para, i) => (
                <p key={i} className="mt-3 first:mt-0">
                  {para}
                </p>
              ))}
              {s.table && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        {s.table.head.map((h) => (
                          <th key={h} className="text-left align-top pr-4 pb-2 text-text-primary">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, i) => (
                        <tr key={i} className="border-t border-text-muted/30">
                          {row.map((cell, j) => (
                            <td key={j} className="align-top pr-4 py-2">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.after?.map((para, i) => (
                <p key={i} className="mt-3">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <section aria-labelledby="legal-contact">
            <h2 id="legal-contact" className="font-heading font-bold text-2xl text-text-primary mb-4">
              Contact
            </h2>
            <p>
              Awesoon Technologies Inc., {siteConfig.contact.address}. Email{' '}
              <a href={`mailto:${siteConfig.contact.gamesEmail}`} className={linkClass}>
                {siteConfig.contact.gamesEmail}
              </a>
              . Our Privacy officer reads every privacy request sent to this address.
            </p>
            <p className="mt-3">
              {doc.links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && ' · '}
                  <Link href={`/${locale}${l.href}`} className={linkClass}>
                    {l.label}
                  </Link>
                </span>
              ))}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
