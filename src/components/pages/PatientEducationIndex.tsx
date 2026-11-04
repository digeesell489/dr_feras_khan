"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { educationItems } from "@/lib/education";
import { useLanguage } from "@/lib/language";

export function PatientEducationIndex() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-clinical-navy py-space-3xl text-white lg:py-space-4xl">
        <div className="page-wrap max-w-max-width-editorial">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">{t.eduBadge}</p>
          <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">{t.eduTitle}</h1>
          <p className="mt-4 text-sm leading-relaxed text-sand-tint/75">{t.eduBody}</p>
        </div>
      </section>

      <section className="py-space-3xl">
        <div className="page-wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {educationItems.map((item) => {
            const title = lang === "ar" ? item.titleAr : item.title;
            const body = lang === "ar" ? item.bodyAr : item.body;
            const category = lang === "ar" ? item.categoryAr : item.category;

            return (
              <Link
                key={item.id}
                href={`/patient-education/${item.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition hover:border-surgical-teal/40"
              >
                <div className="relative aspect-video bg-clinical-slate-deep">
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  />
                  {item.kind === "video" && item.duration ? (
                    <span className="absolute end-2 bottom-2 rounded bg-clinical-slate-deep/85 px-2 py-0.5 text-[11px] font-semibold text-white">
                      {item.duration}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1 text-[11px] tracking-[0.16em] text-surgical-teal uppercase">{category}</p>
                  <h2 className="mb-2 font-headline-sm text-[1.2rem] leading-snug text-primary">{title}</h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">{body}</p>
                  <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy">
                    {t.viewProcedure}
                    <ExternalArrow className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBand
        eyebrow={t.eduTitle}
        title={lang === "ar" ? "ناقش دليلاً في العيادة" : "Discuss a guide in clinic"}
        body="Consultations take place at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-free 800 77."
        bodyAr="تتم الاستشارات في مستشفى هيلث بوينت، مدينة زايد الرياضية، أبوظبي. الرقم المجاني 800 77."
      />
    </>
  );
}
