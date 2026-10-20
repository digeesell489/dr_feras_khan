"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageFaq } from "@/components/PageFaq";
import { BookButton } from "@/components/BookButton";
import { ExternalArrow } from "@/components/ui/Icons";
import { treatmentCopy } from "@/lib/ar-copy";
import { useLanguage } from "@/lib/language";
import { treatments, type Treatment } from "@/lib/treatments";

export function TreatmentDetail({ treatment }: { treatment: Treatment }) {
  const { lang, t } = useLanguage();
  const copy = treatmentCopy(treatment, lang);
  const others = treatments.filter((item) => item.slug !== treatment.slug);

  return (
    <>
      <section className="bg-alabaster-warm py-space-2xl lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-3 text-[12px] text-text-secondary">
            <Link className="hover:text-clinical-navy" href="/treatments">
              {t.treatmentsCrumbs}
            </Link>
            <span className="mx-2 text-outline-variant">/</span>
            <span>{copy.short}</span>
          </p>
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">{copy.tag}</p>
          <h1 className="max-w-3xl font-headline-hero text-[2.15rem] leading-tight text-primary lg:text-[2.75rem]">
            {copy.title}
          </h1>
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-surface-border bg-sand-tint p-3 lg:col-span-6">
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              width={960}
              height={720}
              sizes="(min-width: 1024px) 560px, 100vw"
              className={
                treatment.imageFit === "contain"
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
              <Link className="rounded border border-clinical-navy/30 px-5 py-2.5 text-[13px] font-semibold text-clinical-navy" href="/patient-care">
                {t.recoveryPathway}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-3 font-headline-sm text-primary">{t.whoFor}</h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              {copy.who.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-3 font-headline-sm text-primary">{t.surgicalApproach}</h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              {copy.approach.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-3 font-headline-sm text-primary">{t.recovery}</h2>
            <ul className="space-y-2 text-sm text-text-secondary">
              {copy.recovery.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <PageFaq slug={treatment.slug} />

      <section className="py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-[1.75rem] text-primary">{t.relatedProcedures}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/treatments/${item.slug}`}
                className="rounded-xl border border-surface-border bg-white p-4 transition-colors hover:border-surgical-teal/40"
              >
                <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{treatmentCopy(item, lang).tag}</p>
                <p className="font-semibold text-primary">{treatmentCopy(item, lang).short}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[13px] text-clinical-navy">
                  {t.viewProcedure}
                  <ExternalArrow className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={copy.tag}
        title={lang === "ar" ? `ناقش ${copy.short} مع الدكتور يعيش` : `Discuss ${copy.short} with Dr. Ya'ish`}
        body="Consultations take place at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-free 800 77."
        bodyAr="تتم الاستشارات في مستشفى هيلث بوينت، مدينة زايد الرياضية، أبوظبي. الرقم المجاني 800 77."
      />
    </>
  );
}
