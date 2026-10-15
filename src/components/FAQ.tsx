"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Badge, Icon } from "./ui/Icons";

export function FAQ() {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section
      className="cv-auto relative w-full border-t border-surface-border bg-sand-tint/50 py-space-3xl lg:py-space-4xl"
      id="faq"
    >
      <div className="page-wrap">
        <div className="mx-auto mb-space-2xl max-w-xl text-center">
          <Badge>
            <span className="h-2 w-2 rounded-full bg-surgical-teal" />
            {t.faqBadge}
          </Badge>
          <h2 className="mb-space-xs font-headline-lg text-headline-lg text-primary">{t.faqTitle}</h2>
          <p className="font-body-md text-body-md text-text-secondary">{t.faqBody}</p>
        </div>

        <div className="mx-auto flex max-w-xl flex-col gap-space-sm">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="glass-card-light overflow-hidden rounded-xl border border-white/80">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-space-md p-space-md text-start"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="font-headline-sm text-base font-semibold text-primary">
                    {lang === "ar" ? item.qAr : item.q}
                  </span>
                  <Icon
                    name="expand_more"
                    className={`text-[22px] text-clinical-navy transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <div className="p-space-md pt-0 font-body-md text-body-sm leading-relaxed text-text-secondary">
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
