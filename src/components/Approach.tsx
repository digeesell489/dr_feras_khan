"use client";

import { approaches } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Badge, Icon } from "./ui/Icons";

export function Approach() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative w-full bg-alabaster-warm py-space-3xl lg:py-space-4xl" id="holistic-approach">
      <div className="page-wrap">
        <div className="mx-auto mb-space-2xl max-w-max-width-editorial text-center">
          <Badge>
            <Icon name="biotech" className="text-[16px]" />
            {t.approachBadge}
          </Badge>
          <h2 className="mb-space-md font-headline-lg text-headline-lg text-primary">{t.approachTitle}</h2>
          <p className="font-body-lg text-body-lg leading-relaxed text-text-secondary">{t.approachBody}</p>
        </div>

        <div className="mb-space-xl grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {approaches.map((item, index) => (
            <div
              key={item.title}
              className="glass-card-light group flex flex-col justify-between rounded-2xl border border-white/80 p-space-lg transition-all duration-300 hover:-translate-y-1 hover:border-surgical-teal/50"
            >
              <div
                className={`mb-space-md flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                  index === 1
                    ? "bg-surgical-teal-subtle text-surgical-teal group-hover:bg-surgical-teal group-hover:text-on-primary"
                    : "bg-sand-tint text-clinical-navy group-hover:bg-clinical-navy group-hover:text-on-primary"
                }`}
              >
                <Icon name={item.icon} className="text-[24px]" />
              </div>
              <div>
                <h3 className="mb-space-sm font-headline-md text-headline-md text-primary">
                  {lang === "ar" ? item.titleAr : item.title}
                </h3>
                <p className="font-body-md text-body-md leading-relaxed text-text-secondary">
                  {lang === "ar" ? item.bodyAr : item.body}
                </p>
              </div>
              <div className="mt-space-md border-t border-surface-border/60 pt-space-sm">
                <span className="font-label-md text-[11px] font-semibold tracking-wider text-text-secondary uppercase">
                  {lang === "ar" ? item.linkAr : item.link}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-xl rounded-xl border border-surgical-teal/20 bg-surgical-teal-subtle/80 px-space-md py-space-sm text-center">
          <p className="font-headline-md text-[1.25rem] font-medium text-surgical-teal italic">{t.approachQuote}</p>
        </div>
      </div>
    </section>
  );
}
