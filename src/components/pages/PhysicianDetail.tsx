"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PhysicianReferralForm } from "@/components/PhysicianReferralForm";
import { ExternalArrow } from "@/components/ui/Icons";
import { physicianCopy } from "@/lib/ar-copy";
import { loc } from "@/lib/loc";
import { useLanguage } from "@/lib/language";
import {
  escalationSteps,
  facultySessions,
  physicianPages,
  workupChecklist,
  type PhysicianPage,
} from "@/lib/physicians";

export function PhysicianDetail({ page }: { page: PhysicianPage }) {
  const { lang, t } = useLanguage();
  const copy = physicianCopy(page, lang);
  const others = physicianPages.filter((item) => item.slug !== page.slug);

  return (
    <>
      <section className="bg-clinical-slate-deep py-space-2xl text-white lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-3 text-[12px] text-sand-tint/70">
            <Link className="hover:text-white" href="/for-physicians">
              {t.physiciansCrumbs}
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span>{copy.short}</span>
          </p>
          <p className="mb-2 text-[11px] tracking-[0.18em] text-clinical-gold-honorary uppercase">{copy.eyebrow}</p>
          <h1 className="max-w-3xl font-headline-hero text-[2.15rem] leading-tight lg:text-[2.75rem]">{copy.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">{copy.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded bg-surgical-teal px-4 py-2.5 text-[13px] font-semibold text-white" href="tel:80077">
              {t.urgentHotline}
            </a>
            {page.slug !== "case-submission" ? (
              <Link
                className="rounded border border-white/25 px-4 py-2.5 text-[13px] font-semibold"
                href="/for-physicians/case-submission"
              >
                {t.submitCase}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {page.slug === "urgent-escalation" ? <EscalationBody image={page.image} /> : null}
      {page.slug === "ao-recon-faculty" ? <FacultyBody image={page.image} /> : null}
      {page.slug === "case-submission" ? <SubmissionBody /> : null}

      <section className="py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-[1.75rem] text-primary">{t.otherPathways}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/for-physicians/${item.slug}`}
                className="rounded-xl border border-surface-border bg-white p-5 hover:border-surgical-teal/40"
              >
                <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{physicianCopy(item, lang).eyebrow}</p>
                <p className="font-semibold text-primary">{physicianCopy(item, lang).short}</p>
              </Link>
            ))}
            <Link href="/for-physicians" className="rounded-xl border border-surface-border bg-white p-5 hover:border-surgical-teal/40">
              <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{t.hub}</p>
              <p className="inline-flex items-center gap-1 font-semibold text-primary">
                {t.gateway}
                <ExternalArrow className="h-3 w-3" />
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Physician desk"
        eyebrowAr="مكتب الأطباء"
        title="Need an MDT opinion or observer placement?"
        titleAr="هل تحتاج رأي فريق متعدد التخصصات أو مقعد مراقبة؟"
        body="Call 800 77 for hospital-to-hospital transfer authorization and insurance clearance coordination."
        bodyAr="اتصل على 800 77 لتفويض التحويل بين المستشفيات وتنسيق موافقة التأمين."
      />
    </>
  );
}

function EscalationBody({ image }: { image: string }) {
  const { lang, t } = useLanguage();
  return (
    <section className="py-space-3xl">
      <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Four-step transfer protocol", "بروتوكول التحويل من أربع خطوات")}
          </h2>
          <div className="space-y-4">
            {escalationSteps.map((item, i) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-semibold text-surgical-teal">0{i + 1}</p>
                  <span className="rounded bg-surgical-teal-subtle px-2 py-0.5 text-[11px] font-semibold text-surgical-teal">
                    {loc(lang, item.tag, item.tagAr)}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="mb-4 overflow-hidden rounded-2xl border border-surface-border">
            <Image src={image} alt={loc(lang, "Periprosthetic trauma reconstruction", "إعادة بناء رضوض حول الزرعة")} width={900} height={560} className="h-48 w-full object-cover" />
          </div>
          <div className="rounded-2xl bg-clinical-navy p-6 text-white">
            <p className="mb-2 text-[11px] tracking-widest text-surgical-teal-light uppercase">
              {loc(lang, "Diagnostic prerequisite", "متطلب تشخيصي")}
            </p>
            <h3 className="mb-4 font-headline-sm text-white">{loc(lang, "Imaging & lab workup", "التصوير والعمل المخبري")}</h3>
            <ul className="space-y-3 text-sm text-sand-tint/80">
              {workupChecklist.map((item) => (
                <li key={item.title}>
                  <span className="font-semibold text-white">{loc(lang, item.title, item.titleAr)}.</span> {loc(lang, item.body, item.bodyAr)}
                </li>
              ))}
            </ul>
            <a className="mt-5 inline-flex text-[13px] font-semibold text-surgical-teal-light" href="tel:80077">
              {t.speakCoordinator}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FacultyBody({ image }: { image: string }) {
  const { lang, t } = useLanguage();
  return (
    <section className="py-space-3xl">
      <div className="page-wrap">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            {
              src: image,
              alt: "Dr Feras Ya'ish teaching an AO Recon course on hip and knee arthroplasty",
              altAr: "الدكتور فراس يعيش يدرّس دورة AO Recon لاستبدال الورك والركبة",
              position: "object-top",
            },
            {
              src: "/images/practice/teaching-workshop.webp",
              alt: "Surgeons gathered around a knee model during an AO reconstruction workshop",
              altAr: "جرّاحون حول نموذج ركبة في ورشة إعادة بناء تابعة لـ AO",
              position: "object-center",
            },
            {
              src: "/images/practice/faculty-ao-sharjah.webp",
              alt: "AO Recon faculty at the University of Sharjah clinical training centre",
              altAr: "هيئة AO Recon في مركز التدريب السريري بجامعة الشارقة",
              position: "object-center",
            },
          ].map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl border border-surface-border bg-sand-tint">
              <Image src={photo.src} alt={loc(lang, photo.alt, photo.altAr)} width={1024} height={768} className={`h-56 w-full object-cover lg:h-64 ${photo.position}`} />
            </figure>
          ))}
        </div>
        <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
          {loc(lang, "Faculty sessions & observerships", "جلسات الهيئة وبرامج المراقبة")}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {facultySessions.map((item) => (
            <article key={item.title} className="flex flex-col rounded-xl border border-surface-border bg-white p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded bg-sand-tint px-2 py-0.5 text-[11px] font-semibold text-clinical-navy">{loc(lang, item.tag, item.tagAr)}</span>
                <span className="text-[11px] font-bold text-surgical-teal">{loc(lang, item.credit, item.creditAr)}</span>
              </div>
              <h3 className="mb-2 font-headline-sm text-[1.05rem] text-primary">{loc(lang, item.title, item.titleAr)}</h3>
              <p className="mb-4 flex-1 text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              <ul className="space-y-1 text-xs text-text-secondary">
                {(lang === "ar" ? item.metaAr : item.meta).map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
              <Link
                className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy"
                href="/for-physicians/case-submission"
              >
                {t.registerInterest}
                <ExternalArrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubmissionBody() {
  const { lang } = useLanguage();
  return (
    <section className="bg-sand-tint/60 py-space-3xl">
      <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
        <div className="rounded-2xl bg-clinical-navy p-6 text-white lg:col-span-5">
          <h2 className="mb-3 font-headline-sm text-white">{loc(lang, "Referral coordinator hotline", "خط منسق الإحالة")}</h2>
          <p className="mb-4 text-sm text-sand-tint/75">
            {loc(
              lang,
              "For hospital-to-hospital transfer authorization and insurance clearance, call the Healthpoint transfer desk. This static form prepares the dossier — it does not replace a live transfer call.",
              "لتفويض التحويل بين المستشفيات وموافقة التأمين، اتصل بمكتب تحويل هيلث بوينت. هذا النموذج يجهّز الملف ولا يغني عن مكالمة التحويل المباشرة.",
            )}
          </p>
          <p className="text-sm">
            {loc(lang, "Hotline", "الخط الساخن")}{" "}
            <a className="font-semibold text-surgical-teal-light" href="tel:80077">
              800 77
            </a>
          </p>
          <p className="mt-3 text-sm text-sand-tint/70">{loc(lang, "Physician desk: ortho.mdt@healthpoint.ae", "مكتب الأطباء: ortho.mdt@healthpoint.ae")}</p>
        </div>
        <div className="lg:col-span-7">
          <PhysicianReferralForm />
        </div>
      </div>
    </section>
  );
}
