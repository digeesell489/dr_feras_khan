"use client";

import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CallIcon, ClockIcon, ExternalArrow, PinIcon } from "@/components/ui/Icons";
import { clinicHours } from "@/lib/content";
import { loc } from "@/lib/loc";
import { useLanguage } from "@/lib/language";

const mapQuery = "Healthpoint Hospital Zayed Sports City Abu Dhabi";
const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export function ContactPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-clinical-navy py-space-3xl text-white lg:py-space-4xl">
        <div className="page-wrap grid items-end gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">{t.contactEyebrow}</p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">{t.contactTitle}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">{t.contactLead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded bg-white px-4 py-2.5 text-[13px] font-semibold text-clinical-navy" href="tel:80077">
                {t.call}
              </a>
              <a className="rounded border border-white/25 px-4 py-2.5 text-[13px] font-semibold" href="#enquiry">
                {t.enquiry}
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-4">
            <p className="text-[11px] tracking-widest text-clinical-gold-honorary uppercase">{t.tollFreeUae}</p>
            <a className="mt-1 block font-serif text-4xl text-white" href="tel:80077">
              800 77
            </a>
            <p className="mt-2 text-sm text-sand-tint/70">{t.internationalDesk}</p>
          </aside>
        </div>
      </section>

      <section className="py-space-3xl">
        <div className="page-wrap grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <CallIcon className="mb-3 h-5 w-5 text-surgical-teal" />
            <h2 className="mb-1 font-headline-sm text-primary">{t.callCard}</h2>
            <a className="block text-sm font-semibold text-clinical-navy" href="tel:80077">
              800 77
            </a>
            <a className="mt-1 block text-sm text-text-secondary" href="tel:+97124929000">
              +971 2 492 9000
            </a>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <PinIcon className="mb-3 h-5 w-5 text-surgical-teal" />
            <h2 className="mb-1 font-headline-sm text-primary">{t.visitCard}</h2>
            <p className="whitespace-pre-line text-sm leading-relaxed text-text-secondary">{t.visitAddress}</p>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <ClockIcon className="mb-3 h-5 w-5 text-surgical-teal" />
            <h2 className="mb-1 font-headline-sm text-primary">{t.clinicHoursCard}</h2>
            <p className="text-sm text-text-secondary">{t.tueFriClinics}</p>
            <p className="mt-1 text-sm text-text-secondary">{t.satMonTheatre}</p>
          </article>
          <article className="rounded-xl border border-surface-border bg-white p-5">
            <h2 className="mb-1 font-headline-sm text-primary">{t.referringDoctors}</h2>
            <p className="mb-3 text-sm text-text-secondary">{t.referringDoctorsBody}</p>
            <Link className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy" href="/for-physicians">
              {t.physicianGateway}
              <ExternalArrow />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl" id="enquiry">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="rounded-2xl border border-surface-border bg-white p-6 lg:col-span-7">
            <h2 className="mb-2 font-headline-lg text-[1.75rem] text-primary">{t.enquiry}</h2>
            <p className="mb-6 text-sm text-text-secondary">{t.formDisclaimer}</p>
            <EnquiryForm />
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-surface-border bg-white p-6">
              <h2 className="mb-4 font-headline-sm text-primary">{t.clinicHoursTitle}</h2>
              <div className="divide-y divide-surface-border">
                {clinicHours.map((item) => (
                  <div key={item.day} className="flex items-start justify-between gap-3 py-2.5 text-sm">
                    <span className={`font-semibold ${item.muted ? "text-text-secondary" : "text-primary"}`}>
                      {lang === "ar" ? item.dayAr : item.day}
                    </span>
                    <span className={`max-w-[55%] text-end ${item.muted ? "text-outline italic" : "text-text-secondary"}`}>
                      {lang === "ar" && item.timeAr ? item.timeAr : item.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-text-secondary">{t.hoursNote}</p>
            </div>
            <a
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-clinical-navy px-4 py-3 text-[13px] font-semibold text-white"
              href="tel:80077"
            >
              <CallIcon className="h-4 w-4" />
              {t.requestAppointment} — 800 77
            </a>
          </div>
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-headline-lg text-[1.75rem] text-primary">
                {loc(lang, "How to find us", "كيف تصل إلينا")}
              </h2>
              <p className="mt-1 text-sm text-text-secondary">{t.address}</p>
            </div>
            <a
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              {t.openMaps}
              <ExternalArrow />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-white">
            <iframe
              title="Healthpoint Hospital Abu Dhabi map"
              src={mapEmbed}
              className="h-[320px] w-full border-0 lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Healthpoint Hospital"
        eyebrowAr="مستشفى هيلث بوينت"
        title="Ready to arrange an orthopaedic assessment?"
        titleAr="هل أنت جاهز لترتيب تقييم عظام؟"
        body="Consultations and surgery are delivered at Healthpoint Hospital, Zayed Sports City. Toll-free across the UAE: 800 77."
        bodyAr="تتم الاستشارات والجراحة في مستشفى هيلث بوينت، مدينة زايد الرياضية. الرقم المجاني في الإمارات: 800 77."
      />
    </>
  );
}
