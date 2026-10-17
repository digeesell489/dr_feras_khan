"use client";

import Image from "next/image";
import Link from "next/link";
import { caseExamples } from "@/lib/cases";
import { useLanguage } from "@/lib/language";

export function CaseExamplesIndex() {
  const { lang, t } = useLanguage();

  return (
    <section className="bg-sand-tint/60 py-space-3xl lg:py-space-4xl">
      <div className="page-wrap">
        <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal uppercase">
          {lang === "ar" ? "الدكتور فراس يعيش" : "Dr. Feras Ya'ish"}
        </p>
        <h1 className="mb-8 font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">{t.casesTitle}</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseExamples.map((item) => (
            <Link
              key={item.slug}
              href={`/case-examples/${item.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition hover:border-surgical-teal/40"
            >
              <div className="relative aspect-[4/3] bg-sand-tint">
                <Image
                  src={item.image}
                  alt={lang === "ar" ? item.titleAr : item.title}
                  fill
                  className={item.imageClassName ?? "object-cover object-center"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 font-mono text-[11px] text-surgical-teal">{item.code}</p>
                <h2 className="mb-2 font-headline-sm text-primary">{lang === "ar" ? item.titleAr : item.title}</h2>
                <p className="text-sm leading-relaxed text-text-secondary">{lang === "ar" ? item.bodyAr : item.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy">
                  {t.viewCase}
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
