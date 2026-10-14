"use client";

import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { clinicHours } from "@/lib/content";
import { HEALTHPOINT_LOCATION, HEALTHPOINT_MAPS } from "@/lib/links";
import { useLanguage } from "@/lib/language";
import { Badge, ExternalArrow, Icon } from "./ui/Icons";

export function Hospital() {
  const { lang, t } = useLanguage();

  return (
    <section className="relative w-full bg-alabaster-warm py-space-3xl lg:py-space-4xl" id="clinic-hours">
      <div className="page-wrap">
        <div className="mx-auto mb-space-2xl max-w-max-width-editorial text-center">
          <Badge tone="sand">
            <span className="h-2 w-2 rounded-full bg-surgical-teal" />
            {t.clinicBadge}
          </Badge>
          <h2 className="mb-space-xs font-headline-lg text-headline-lg text-primary">{t.clinicTitle}</h2>
          <p className="font-body-md text-body-md text-text-secondary">{t.clinicBody}</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-space-xl lg:grid-cols-12">
          <div className="glass-card-light rounded-2xl border border-white/80 p-space-lg shadow-sm lg:col-span-6">
            <h3 className="mb-space-md flex items-center gap-2 font-headline-sm text-headline-sm text-primary">
              <Icon name="schedule" className="text-[22px] text-surgical-teal" />
              <span>{t.clinicHoursTitle}</span>
            </h3>
            <div className="mb-space-md divide-y divide-surface-border/60">
              {clinicHours.map((item) => (
                <div
                  key={item.day}
                  className={`flex items-center justify-between py-2.5 text-body-sm ${item.muted ? "text-text-secondary" : ""}`}
                >
                  <span className={`font-semibold ${item.muted ? "" : "text-primary"}`}>
                    {lang === "ar" ? item.dayAr : item.day}
                  </span>
                  <span className={`font-mono ${item.muted ? "text-outline italic" : "text-text-secondary"}`}>
                    {lang === "ar" && item.timeAr ? item.timeAr : item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-surface-border/60 bg-sand-tint/70 p-space-sm text-xs leading-relaxed text-text-secondary">
              <span className="mb-0.5 block font-semibold text-primary">{t.theatreTitle}</span>
              {t.theatreBody}
            </div>
          </div>

          <div className="glass-card-light flex flex-col justify-between rounded-2xl border border-white/80 p-space-lg shadow-sm lg:col-span-6">
            <div className="mb-space-md">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded bg-surgical-teal-subtle px-2 py-0.5 font-label-md text-[11px] font-bold text-surgical-teal uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-surgical-teal" />
                {t.m42}
              </div>
              <h3 className="mb-space-xs font-headline-sm text-headline-sm text-primary">Healthpoint Hospital</h3>
              <p className="mb-space-md font-body-sm leading-relaxed text-text-secondary">{t.address}</p>
              <div className="group relative mb-space-md h-72 overflow-hidden rounded-xl border border-surface-border">
                <Image
                  src="/images/practice/surgical-team.jpeg"
                  alt="Dr Feras Ya'ish with the surgical team"
                  fill
                  className="object-cover object-[center_28%] transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-clinical-slate-deep/80 via-clinical-slate-deep/20 to-transparent p-space-sm">
                  <span className="font-label-md text-xs font-bold text-white">Healthpoint Hospital Abu Dhabi</span>
                  <span className="text-[11px] text-sand-tint">{t.campusLine}</span>
                </div>
              </div>
              <div className="mb-space-md flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                <Icon name="call" className="text-[18px] text-surgical-teal" />
                <span className="font-semibold text-primary">{t.tollFree}</span>
                <a className="font-mono font-bold text-clinical-navy transition-colors hover:text-surgical-teal" href="tel:80077">
                  800 77
                </a>
                <span className="text-outline-variant">|</span>
                <WhatsAppButton className="inline-flex items-center gap-1.5 font-semibold text-[#128C7E] hover:underline" />
              </div>
              <div className="mb-space-md flex flex-wrap gap-3 text-sm">
                <a
                  className="inline-flex items-center gap-1 font-semibold text-clinical-navy hover:text-surgical-teal"
                  href={HEALTHPOINT_MAPS}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="location_on" className="text-[16px]" />
                  {t.openMaps}
                </a>
                <a
                  className="inline-flex items-center gap-1 font-semibold text-clinical-navy hover:text-surgical-teal"
                  href={HEALTHPOINT_LOCATION}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="open_in_new" className="text-[16px]" />
                  {t.locationLink}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm sm:flex-row">
              <BookButton className="inline-flex flex-1 items-center justify-center gap-1.5 rounded bg-clinical-navy px-space-md py-space-xs text-center font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-clinical-slate-deep">
                <span>{t.requestAppointment}</span>
                <ExternalArrow />
              </BookButton>
              <a
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded border border-clinical-navy/40 px-space-md py-space-xs text-center font-label-lg text-label-lg text-clinical-navy transition-all hover:border-clinical-navy hover:bg-clinical-navy/5"
                href="tel:80077"
              >
                <Icon name="call" className="text-[17px]" />
                <span>{t.call}</span>
              </a>
              <WhatsAppButton className="inline-flex flex-1 items-center justify-center gap-1.5 rounded border border-[#25D366]/40 bg-[#25D366]/10 px-space-md py-space-xs text-center font-label-lg text-label-lg text-[#128C7E] transition-all hover:border-[#25D366]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
