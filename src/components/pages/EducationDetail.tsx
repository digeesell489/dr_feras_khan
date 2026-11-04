"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { BookButton } from "@/components/BookButton";
import { ExternalArrow } from "@/components/ui/Icons";
import { educationItems, type EducationItem } from "@/lib/education";
import { useLanguage } from "@/lib/language";

export function EducationDetail({ item }: { item: EducationItem }) {
  const { lang, t } = useLanguage();
  const title = lang === "ar" ? item.titleAr : item.title;
  const body = lang === "ar" ? item.bodyAr : item.body;
  const others = educationItems.filter((entry) => entry.id !== item.id).slice(0, 3);

  return (
    <>
      <section className="bg-alabaster-warm py-space-2xl lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-3 text-[12px] text-text-secondary">
            <Link className="hover:text-clinical-navy" href="/#patient-education">
              {t.eduTitle}
            </Link>
            <span className="mx-2 text-outline-variant">/</span>
            <span>{title}</span>
          </p>
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
            {lang === "ar" ? item.categoryAr : item.category}
          </p>
          <h1 className="max-w-3xl font-headline-hero text-[2.15rem] leading-tight text-primary lg:text-[2.75rem]">
            {title}
          </h1>
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-white lg:col-span-6">
            <div className="relative aspect-video bg-clinical-slate-deep">
              <Image src={item.image} alt={title} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
              {item.kind === "video" && item.videoUrl ? (
                <a
                  className="absolute inset-0 flex items-center justify-center bg-clinical-slate-deep/20"
                  href={item.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={title}
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-clinical-navy/90 text-surgical-teal-light">
                    ▶
                  </span>
                </a>
              ) : item.kind === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center bg-clinical-slate-deep/20">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-clinical-navy/90 text-surgical-teal-light">
                    ▶
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="mb-4 text-base leading-relaxed text-text-secondary">{body}</p>
            {lang === "en" && item.sectionH2 ? (
              <h2 className="mb-3 font-headline-sm text-primary">{item.sectionH2}</h2>
            ) : null}
            <div className="space-y-3 text-sm leading-relaxed text-text-secondary">
              {(lang === "ar" ? item.contentAr : item.content).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6">
              <BookButton className="rounded bg-clinical-navy px-5 py-2.5 text-[13px] font-semibold text-white">
                {t.requestConsultation}
              </BookButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-[1.75rem] text-primary">{t.eduTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((entry) => {
              const className =
                "rounded-xl border border-surface-border bg-white p-4 transition-colors hover:border-surgical-teal/40";
              const card = (
                <>
                  <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">
                    {lang === "ar" ? entry.categoryAr : entry.category}
                  </p>
                  <p className="font-semibold text-primary">{lang === "ar" ? entry.titleAr : entry.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[13px] text-clinical-navy">
                    {entry.kind === "video" ? t.viewVideo : t.viewArticle}
                    <ExternalArrow className="h-3 w-3" />
                  </span>
                </>
              );
              return entry.videoUrl ? (
                <a key={entry.id} href={entry.videoUrl} target="_blank" rel="noreferrer" className={className}>
                  {card}
                </a>
              ) : (
                <Link key={entry.id} href={`/patient-education/${entry.id}`} className={className}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={t.eduTitle}
        title={lang === "ar" ? "ناقش هذا الدليل في العيادة" : "Discuss this guide in clinic"}
        body="Consultations take place at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-free 800 77."
        bodyAr="تتم الاستشارات في مستشفى هيلث بوينت، مدينة زايد الرياضية، أبوظبي. الرقم المجاني 800 77."
      />
    </>
  );
}
