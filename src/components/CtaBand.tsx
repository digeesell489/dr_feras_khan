"use client";

import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ArrowIcon } from "./ui/Icons";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

export function CtaBand({
  eyebrow,
  title,
  body,
  eyebrowAr,
  titleAr,
  bodyAr,
}: {
  eyebrow: string;
  title: string;
  body: string;
  eyebrowAr?: string;
  titleAr?: string;
  bodyAr?: string;
}) {
  const { lang, t } = useLanguage();

  return (
    <section className="w-full bg-clinical-navy py-space-2xl text-white">
      <div className="page-wrap grid gap-space-lg lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
            {loc(lang, eyebrow, eyebrowAr ?? eyebrow)}
          </p>
          <h2 className="font-headline-md text-headline-md text-white">{loc(lang, title, titleAr ?? title)}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-sand-tint/75">{loc(lang, body, bodyAr ?? body)}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row lg:col-span-5 lg:justify-end">
          <BookButton className="inline-flex items-center justify-center gap-2 rounded bg-surgical-teal px-5 py-3 text-[13px] font-semibold text-white hover:bg-surgical-teal-light">
            {t.requestConsultation}
            <ArrowIcon className="h-4 w-4" />
          </BookButton>
          <Link
            className="inline-flex items-center justify-center rounded border border-white/25 px-5 py-3 text-[13px] font-semibold text-white hover:bg-white/10"
            href="/patient-care"
          >
            {t.patientCareGuide}
          </Link>
        </div>
      </div>
    </section>
  );
}
