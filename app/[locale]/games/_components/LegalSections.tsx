export type LegalSection = { id: string; h: string; p: string[] }

export function LegalSections({
  sections,
  idPrefix,
}: {
  sections: LegalSection[]
  idPrefix: string
}) {
  return sections.map((section) => (
    <section key={section.id} aria-labelledby={`${idPrefix}-${section.id}`}>
      <h2
        id={`${idPrefix}-${section.id}`}
        className="font-heading font-bold text-2xl text-text-primary mb-4"
      >
        {section.h}
      </h2>
      {section.p.map((para, i) => (
        <p key={i} className="mt-3 first:mt-0">
          {para}
        </p>
      ))}
    </section>
  ))
}
