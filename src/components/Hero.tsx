"use client";

import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { ExternalArrow, Icon } from "./ui/Icons";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section
        className="relative w-full overflow-hidden bg-alabaster-warm bg-grid-pattern py-space-2xl lg:py-space-4xl"
        id="about"
      >
        <div className="pointer-events-none absolute -top-12 start-10 h-96 w-96 opacity-[0.05]">
          <svg fill="none" height="100%" stroke="#1B365D" strokeWidth="1.2" viewBox="0 0 200 200" width="100%">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="30" strokeDasharray="2 2" />
            <line x1="100" x2="100" y1="0" y2="200" />
            <line x1="0" x2="200" y1="100" y2="100" />
          </svg>
        </div>

        <div className="page-wrap relative z-10">
          <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12 lg:gap-space-2xl">
            <div className="flex flex-col items-start lg:col-span-7">
              <div className="mb-space-sm inline-flex items-center gap-space-xs rounded border border-surface-border bg-sand-tint/90 px-space-sm py-1 font-label-md text-label-md uppercase tracking-wider text-primary shadow-xs backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-surgical-teal" />
                {t.heroBadge}
              </div>
              <h1 className="mb-space-xs font-headline-hero text-headline-hero-mobile tracking-tight text-primary lg:text-headline-hero lg:leading-[1.1]">
                {t.heroTitle}
              </h1>
              <p className="mb-space-md font-label-lg text-label-lg font-semibold tracking-wide text-surgical-teal">
                Dr. Feras Ya&apos;ish · MBBS · MRCS (Ed) · FRCS (Tr &amp; Orth) · CCT (UK)
              </p>
              <div className="glass-card-light relative mb-space-lg overflow-hidden rounded-xl border border-white/60 p-space-md">
                <p className="font-body-lg text-body-lg leading-relaxed text-text-primary">{t.heroLead}</p>
              </div>
              <div className="mb-space-md flex w-full flex-wrap items-center gap-space-md sm:w-auto">
                <BookButton className="inline-flex w-full items-center justify-center gap-space-xs rounded bg-clinical-navy px-space-lg py-space-sm font-label-lg text-label-lg text-on-primary shadow-sm transition-all duration-300 hover:bg-clinical-slate-deep sm:w-auto">
                  <span>{t.requestAppointment}</span>
                  <ExternalArrow />
                </BookButton>
                <a
                  className="inline-flex w-full items-center justify-center gap-space-xs rounded border border-clinical-navy/40 px-space-lg py-space-sm font-label-lg text-label-lg text-clinical-navy transition-all duration-300 hover:border-clinical-navy hover:bg-clinical-navy/5 sm:w-auto"
                  href="tel:80077"
                >
                  <Icon name="call" className="text-[18px]" />
                  <span>{t.callTollFree}</span>
                </a>
              </div>
              <a
                className="inline-flex items-center gap-1.5 font-label-md text-xs text-text-secondary transition-colors hover:text-surgical-teal"
                href="#holistic-approach"
              >
                <Icon name="expand_circle_down" className="text-[16px]" />
                <span>{t.heroExplore}</span>
              </a>
            </div>

            <div className="relative flex flex-col items-center lg:col-span-5">
              <div className="glass-card-light relative w-full overflow-hidden rounded-2xl border border-white/80 p-space-xs shadow-[0_16px_48px_rgba(15,32,39,0.12)]">
                <div className="relative flex items-end justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-sand-tint via-surface-container to-sand-tint pt-space-xl">
                  <Image
                    src="/images/doctor-hero-card.png"
                    alt="Dr. Feras Ya'ish"
                    width={340}
                    height={425}
                    priority
                    className="aspect-[4/5] w-full max-w-[340px] object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-clinical-slate-deep/80 via-transparent to-transparent" />
                </div>
                <div className="absolute top-space-md end-space-md flex items-center gap-1.5 rounded border border-white/20 bg-clinical-slate-deep/85 px-space-xs py-1 font-mono text-[10px] tracking-widest text-on-primary uppercase shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-surgical-teal-light" />
                  <span>UK CCT · DOH LIC: 12480 · 20+ Yrs</span>
                </div>
                <div className="absolute inset-x-space-md bottom-space-md flex items-center justify-between rounded-xl border border-white/15 bg-clinical-navy/95 p-space-sm text-on-primary shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-surgical-teal-light" />
                      <span className="font-label-md text-label-md font-bold tracking-wider text-surgical-teal-light uppercase">
                        Healthpoint Abu Dhabi
                      </span>
                    </div>
                    <span className="mt-0.5 block font-body-sm text-[0.82rem] text-sand-tint">{t.heroCampus}</span>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surgical-teal/40 bg-surgical-teal/20">
                    <Icon name="verified" className="text-[20px] text-surgical-teal-light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full border-y border-surface-border bg-sand-tint/70 py-space-lg">
        <div className="page-wrap">
          <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.value} className="glass-card-light flex items-center gap-space-sm rounded-xl border border-white/80 p-space-md">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    item.icon === "clinical_notes"
                      ? "bg-surgical-teal-subtle text-surgical-teal"
                      : "bg-sand-tint text-clinical-navy"
                  }`}
                >
                  <Icon name={item.icon} className="text-[22px]" />
                </div>
                <div>
                  <span className="block font-headline-sm text-sm leading-snug font-bold text-primary">
                    <CountUp value={lang === "ar" ? item.valueAr : item.value} />
                  </span>
                  <span className="block font-body-sm text-xs leading-tight text-text-secondary">
                    {lang === "ar" ? item.labelAr : item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
