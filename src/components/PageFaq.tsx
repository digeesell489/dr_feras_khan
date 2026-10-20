"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { pageFaqs, type PageFaq as PageFaqItem } from "@/lib/page-faqs";
import { Icon } from "./ui/Icons";

export function PageFaq({ slug }: { slug: string }) {
  const items: PageFaqItem[] = pageFaqs[slug] ?? [];
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(0);

  if (!items.length) return null;

  return (
    <section className="border-t border-surface-border bg-white py-space-3xl">
      <div className="page-wrap">
        <h2 className="mb-6 font-headline-lg text-[1.75rem] text-primary">{t.faqTitle}</h2>
        <div className="flex max-w-3xl flex-col gap-3">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl border border-surface-border bg-alabaster-warm">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-start"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="font-headline-sm text-base font-semibold text-primary">
                    {lang === "ar" ? item.qAr : item.q}
                  </span>
                  <Icon
                    name="expand_more"
                    className={`shrink-0 text-[22px] text-clinical-navy transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <div className="px-4 pb-4 text-sm leading-relaxed text-text-secondary">
                    {lang === "ar" ? item.aAr : item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
