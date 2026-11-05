"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { LongformSection } from "@/lib/clinical-longform";

/** Render optional markdown-style [label](/path) links in longform paragraphs. */
function renderParagraph(paragraph: string): ReactNode[] {
  const parts = paragraph.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      return (
        <Link
          key={`${href}-${index}`}
          className="font-semibold text-clinical-navy hover:text-surgical-teal"
          href={href}
        >
          {label}
        </Link>
      );
    }
    return <span key={`text-${index}`}>{part}</span>;
  });
}

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
                <p key={paragraph.slice(0, 64)}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
