"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { BookButton } from "@/components/BookButton";
import { ExternalArrow } from "@/components/ui/Icons";
import { caseExamples, type CaseExample } from "@/lib/cases";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

export function CaseExampleDetail({ item }: { item: CaseExample }) {
  const { lang, t } = useLanguage();
  const others = caseExamples.filter((entry) => entry.slug !== item.slug).slice(0, 3);
  const title = lang === "ar" ? item.titleAr : item.title;
  const body = lang === "ar" ? item.bodyAr : item.body;

  return (
    <>
      <section className="bg-clinical-slate-deep py-space-2xl text-white lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-3 text-[12px] text-sand-tint/70">
            <Link className="hover:text-white" href="/#case-examples">
              {t.casesTitle}
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span>{title}</span>
          </p>
          <p className="mb-2 font-mono text-[11px] tracking-wider text-surgical-teal-light uppercase">{item.code}</p>
          <h1 className="max-w-3xl font-headline-hero text-[2.15rem] leading-tight lg:text-[2.75rem]">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">{body}</p>
        </div>
      </section>

      <section className="py-space-3xl">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-surface-border bg-sand-tint p-3 lg:col-span-6">
            <Image
              src={item.image}
              alt={title}
              width={960}
              height={720}
              sizes="(min-width: 1024px) 560px, 100vw"
              className={`mx-auto h-auto max-h-[380px] w-auto max-w-full bg-sand-tint ${item.imageClassName ?? "object-cover object-center"}`}
            />
          </div>
          <div className="lg:col-span-6">
            <div className="mb-4 flex flex-wrap gap-1.5">
              {(lang === "ar" ? item.tagsAr : item.tags).map((tag) => (
                <span key={tag} className="rounded bg-sand-tint px-2 py-0.5 font-mono text-[10px] text-clinical-navy uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mb-2 font-headline-sm text-primary">{loc(lang, "Presentation", "العرض السريري")}</h2>
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
              {lang === "ar" ? item.presentationAr : item.presentation}
            </p>
            <h2 className="mb-2 font-headline-sm text-primary">{loc(lang, "Reconstructive plan", "خطة إعادة البناء")}</h2>
            <ul className="mb-6 space-y-2 text-sm text-text-secondary">
              {(lang === "ar" ? item.planAr : item.plan).map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <p className="mb-6 text-xs leading-relaxed text-text-secondary">{lang === "ar" ? item.noteAr : item.note}</p>
            <BookButton className="rounded bg-clinical-navy px-5 py-2.5 text-[13px] font-semibold text-white">
              {t.requestConsultation}
            </BookButton>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-[1.75rem] text-primary">{t.casesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((entry) => (
              <Link
                key={entry.slug}
                href={`/case-examples/${entry.slug}`}
                className="rounded-xl border border-surface-border bg-white p-4 transition-colors hover:border-surgical-teal/40"
              >
                <p className="mb-1 font-mono text-[11px] text-surgical-teal">{entry.code}</p>
                <p className="font-semibold text-primary">{lang === "ar" ? entry.titleAr : entry.title}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[13px] text-clinical-navy">
                  {t.viewCase}
                  <ExternalArrow className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={t.casesTitle}
        title={lang === "ar" ? `ناقش هذه الحالة مع الدكتور يعيش` : `Discuss this case example with Dr. Ya'ish`}
        body="Consultations take place at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-free 800 77."
        bodyAr="تتم الاستشارات في مستشفى هيلث بوينت، مدينة زايد الرياضية، أبوظبي. الرقم المجاني 800 77."
      />
    </>
  );
}
