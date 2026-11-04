"use client";

import type { LongformSection } from "@/lib/clinical-longform";

/** Renders educational long-form H2 sections for treatment/condition depth. */
export function ClinicalLongform({ sections }: { sections: LongformSection[] }) {
  if (!sections.length) return null;

  return (
    <section className="border-t border-surface-border bg-alabaster-warm py-space-3xl">
      <div className="page-wrap max-w-3xl space-y-10">
        {sections.map((section) => (
          <article key={section.h2}>
            <h2 className="mb-4 font-headline-lg text-[1.55rem] leading-snug text-primary lg:text-[1.75rem]">
              {section.h2}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
