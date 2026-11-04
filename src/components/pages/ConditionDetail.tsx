"use client";

import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { ClinicalLongform } from "@/components/ClinicalLongform";
import { CtaBand } from "@/components/CtaBand";
import { PageFaq } from "@/components/PageFaq";
import { BookButton } from "@/components/BookButton";
import { ExternalArrow } from "@/components/ui/Icons";
import { conditionCopy, hrefCopy, regionCopy } from "@/lib/ar-copy";
import { getConditionLongform } from "@/lib/clinical-longform";
import { conditions, type Condition } from "@/lib/conditions";
import { useLanguage } from "@/lib/language";

export function ConditionDetail({ condition }: { condition: Condition }) {
  const { lang, t } = useLanguage();
  const copy = conditionCopy(condition, lang);
  const longform = lang === "en" ? getConditionLongform(condition.slug) : [];
  const others = conditions.filter((item) => item.slug !== condition.slug).slice(0, 3);

  return (
    <>
      <section className="bg-alabaster-warm py-space-2xl lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-3 text-[12px] text-text-secondary">
            <Link className="hover:text-clinical-navy" href="/conditions">
              {t.conditionsCrumbs}
            </Link>
            <span className="mx-2 text-outline-variant">/</span>
            <span>{copy.short}</span>
          </p>
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">{regionCopy(condition.region, lang)}</p>
          <h1 className="max-w-3xl font-headline-hero text-[2.15rem] leading-tight text-primary lg:text-[2.75rem]">
            {copy.title}
          </h1>
          <AuthorByline />
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-surface-border bg-sand-tint p-3 lg:col-span-6">
            <Image
              src={condition.image}
              alt={copy.title}
              width={960}
              height={720}
              sizes="(min-width: 1024px) 560px, 100vw"
              className={
                condition.imageFit === "contain"
                  ? "mx-auto h-auto max-h-[380px] w-auto max-w-full object-contain"
                  : "h-auto w-full object-cover"
              }
            />
          </div>
          <div className="lg:col-span-6">
            <p className="text-base leading-relaxed text-text-secondary">{copy.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton className="rounded bg-clinical-navy px-5 py-2.5 text-[13px] font-semibold text-white">
                {t.requestConsultation}
              </BookButton>
              <Link className="rounded border border-clinical-navy/30 px-5 py-2.5 text-[13px] font-semibold text-clinical-navy" href="/treatments">
                {t.viewTreatments}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-3 font-headline-sm text-primary">
              {lang === "en" && condition.h2Symptoms ? condition.h2Symptoms : t.typicalSymptoms}
            </h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              {copy.symptoms.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-3 font-headline-sm text-primary">
              {lang === "en" && condition.h2Evaluation ? condition.h2Evaluation : t.howWeEvaluate}
            </h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              {copy.evaluation.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-3 font-headline-sm text-primary">{t.relatedCare}</h2>
            <ul className="space-y-2 text-sm">
              {condition.treatments.map((item) => (
                <li key={item.href}>
                  <Link className="inline-flex items-center gap-1 font-semibold text-clinical-navy" href={item.href}>
                    {hrefCopy(item.href, item.label, lang)}
                    <ExternalArrow className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <ClinicalLongform sections={longform} />

      <PageFaq slug={condition.slug} />

      <section className="py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-[1.75rem] text-primary">{t.otherConditions}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/conditions/${item.slug}`}
                className="rounded-xl border border-surface-border bg-white p-4 hover:border-surgical-teal/40"
              >
                <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{regionCopy(item.region, lang)}</p>
                <p className="font-semibold text-primary">{conditionCopy(item, lang).short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={regionCopy(condition.region, lang)}
        title={lang === "ar" ? `تقييم ${copy.short}` : `Assessment for ${condition.short}`}
        body="This page is educational and does not diagnose. An in-person consultation and imaging at Healthpoint Hospital determine the appropriate pathway."
        bodyAr="هذه الصفحة تثقيفية ولا تشخّص. الاستشارة الحضورية والتصوير في مستشفى هيلث بوينت هما ما يحددان المسار المناسب."
      />
    </>
  );
}
