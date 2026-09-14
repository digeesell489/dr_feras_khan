"use client";

import Image from "next/image";
import { CountUp } from "@/components/CountUp";
import { specialties } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Badge, Icon } from "./ui/Icons";

export function Excellence() {
  const { lang, t } = useLanguage();
  const { featured, cards } = specialties;

  return (
    <section
      className="relative w-full border-t border-surface-border bg-sand-tint/60 py-space-3xl lg:py-space-4xl"
      id="specialties"
    >
      <div className="page-wrap">
        <div className="mx-auto mb-space-2xl max-w-max-width-editorial text-center">
          <Badge>
            <Icon name="view_in_ar" className="text-[16px]" />
            {t.excellenceBadge}
          </Badge>
          <h2 className="mb-space-xs font-headline-lg text-headline-lg text-primary">{t.excellenceTitle}</h2>
          <p className="font-body-md text-body-md leading-relaxed text-text-secondary">
            {t.excellenceBody}{" "}
            <a className="font-semibold text-clinical-navy" href="/treatments">
              {t.viewAllTreatments}
            </a>
            {" · "}
            <a className="font-semibold text-clinical-navy" href="/conditions">
              {t.treatmentExplorer}
            </a>
          </p>
        </div>

        <div className="glass-card-light mb-space-2xl overflow-hidden rounded-2xl border border-white/80 p-space-md shadow-sm">
          <div className="grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-surface-border bg-clinical-slate-deep lg:col-span-7">
              <Image
                src="/images/knee-mechanics.png"
                alt={lang === "ar" ? featured.titleAr : featured.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 700px, 100vw"
              />
            </div>
            <div className="flex h-full flex-col justify-between lg:col-span-5">
              <div className="flex flex-col gap-space-xs">
                <span className="font-mono text-[10px] font-bold tracking-widest text-surgical-teal uppercase">
                  {lang === "ar" ? featured.eyebrowAr : featured.eyebrow}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  {lang === "ar" ? featured.titleAr : featured.title}
                </h3>
                <p className="font-body-sm text-body-sm leading-relaxed text-text-secondary">
                  {lang === "ar" ? featured.bodyAr : featured.body}
                </p>
                <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
                  {featured.stats.map((stat) => (
                    <div key={stat.value} className="rounded border border-surface-border bg-sand-tint p-space-xs">
                      <span className="block font-headline-sm text-sm font-bold text-primary">
                        <CountUp value={stat.value} />
                      </span>
                      <span className="text-[11px] text-text-secondary">{lang === "ar" ? stat.labelAr : stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-space-md">
                <a
                  className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-clinical-navy transition-colors hover:text-surgical-teal"
                  href="#clinic-hours"
                >
                  <span>{t.scheduleAssessment}</span>
                  <Icon name="arrow_forward" className="text-[16px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass-card-light group flex flex-col justify-between overflow-hidden rounded-xl border border-white/80 p-space-sm transition-all duration-300 hover:-translate-y-1 hover:border-surgical-teal/40"
            >
              <div className="mb-space-sm aspect-[4/3] overflow-hidden rounded-lg bg-surface-container">
                <Image
                  src={card.image}
                  alt={lang === "ar" ? card.titleAr : card.title}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <span
                  className={`mb-1 inline-block rounded px-2 py-0.5 font-mono text-[10px] uppercase ${
                    card.category === "Preservation"
                      ? "bg-surgical-teal-subtle text-surgical-teal"
                      : "bg-sand-tint text-clinical-navy"
                  }`}
                >
                  {lang === "ar" ? card.categoryAr : card.category}
                </span>
                <h4 className="mb-1 font-headline-sm text-sm font-bold text-primary">
                  {lang === "ar" ? card.titleAr : card.title}
                </h4>
                <p className="text-xs leading-relaxed text-text-secondary">{lang === "ar" ? card.bodyAr : card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
