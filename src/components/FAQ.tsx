"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Section, SectionHeader } from "./ui/Section";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeader
        badge="Questions"
        title="Frequently Asked Questions"
        subtitle="Clear answers on joint replacement, surgical technique, recovery, and complex revision care."
      />

      <div className="mt-10 border-t border-line">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="border-b border-line">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="text-[16px] tracking-tight md:text-[18px]">
                  {item.q}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-muted">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="max-w-[720px] pb-6 text-[15px] leading-7 text-muted">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
