"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { conditionCopy, presentationCopy, regionCopy } from "@/lib/ar-copy";
import {
  conditions as conditionPages,
  type ConditionPresentation,
  type ConditionRegion,
} from "@/lib/conditions";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

const anatomies: ConditionRegion[] = ["Hip Joint", "Knee Joint", "Trauma & Other"];

const presentations: ConditionPresentation[] = [
  "Osteoarthritis / Joint degeneration",
  "Failed previous surgery",
  "Sports injury / instability",
  "Fracture / malunion",
];

const portfolio = [
  { anatomy: "Hip Joint" as const, title: "Primary Total Hip Replacement", titleAr: "استبدال الورك الكامل الأولي", body: "Precision replacement of the arthritic femoral head and acetabular socket with modern dual-mobility or ceramic bearings.", bodyAr: "استبدال دقيق لرأس الفخذ والحُق بأسطح ثنائية الحركة أو سيراميك حديثة.", href: "/treatments/hip-replacement" },
  { anatomy: "Knee Joint" as const, title: "Total Knee Arthroplasty", titleAr: "استبدال الركبة الكامل", body: "Complete resurfacing with anatomical kinematic alignment to re-establish natural soft-tissue tension balance.", bodyAr: "إعادة تسطيح كاملة بمحاذاة حركية تشريحية لاستعادة توازن الأنسجة الرخوة.", href: "/treatments/knee-replacement" },
  { anatomy: "Knee Joint" as const, title: "Robotic-Assisted Joint Replacement", titleAr: "استبدال المفصل بمساعدة الروبوت", body: "Pre-computed 3D CT surgical modeling paired with intra-operative haptic guidance for sub-millimeter resection accuracy.", bodyAr: "نمذجة مقطعية ثلاثية الأبعاد مع توجيه لمسي أثناء الجراحة لدقة قطع دون المليمتر.", href: "/treatments/robotic-arthroplasty" },
  { anatomy: "Knee Joint" as const, title: "Unicompartmental (Partial) Knee", titleAr: "استبدال الركبة الجزئي", body: "Isolated resurfacing of only the worn compartment, preserving cruciate ligaments and proprioception.", bodyAr: "إعادة تسطيح الحيز المتآكل فقط مع الحفاظ على الأربطة المتصالبة والإحساس العميق.", href: "/treatments/partial-knee" },
  { anatomy: "Hip Joint" as const, title: "Revision Joint Arthroplasty", titleAr: "مراجعة استبدال المفصل", body: "Extraction of failed, loose, or infected implants with bone augments, modular stems, and hinged reconstruction.", bodyAr: "إزالة الزرعات الفاشلة أو المرتخية أو المصابة مع دعائم عظمية وسيقان معيارية وإعادة بناء مفصلية.", href: "/treatments/revision-surgery" },
  { anatomy: "Knee Joint" as const, title: "Knee Arthroscopy & Ligament Repair", titleAr: "منظار الركبة وإصلاح الأربطة", body: "Minimally invasive ACL/PCL reconstruction, meniscal preservation sutures, and cartilage restoring debridement.", bodyAr: "إعادة بناء الرباط المتصالب طفيفة التوغل، وخيوط الحفاظ على الهلالة، وتنظيف الغضروف.", href: "/treatments/arthroscopy" },
  { anatomy: "Trauma & Other" as const, title: "Complex Trauma & Malunion Repair", titleAr: "إصلاح الرضوض المعقدة والالتئام المعيب", body: "ORIF for complex articular fractures, pelvic trauma stabilization, and surgical revision of non-healing bones.", bodyAr: "تثبيت مفتوح للكسور المفصلية المعقدة، واستقرار رضوض الحوض، ومراجعة العظام غير الملتئمة.", href: "/treatments/trauma" },
];

const questions = [
  "Which alignment philosophy do you recommend for my anatomy — kinematic or mechanical?",
  "Am I a candidate for partial rather than total knee replacement?",
  "Will robotic navigation change my recovery timeline?",
  "What implant bearing (ceramic, polyethylene, dual-mobility) is most appropriate?",
  "How is pain managed on the day of surgery and in the first 48 hours?",
  "When can I walk independently, drive, and return to sport or prayer positions?",
];

const questionsAr = [
  "أي فلسفة محاذاة تناسب تشريحي — حركية أم ميكانيكية؟",
  "هل أنا مرشح لاستبدال جزئي بدلاً من الكامل؟",
  "هل تغيّر الملاحة الروبوتية جدول تعافي؟",
  "ما سطح الزرعة الأنسب (سيراميك، بولي إيثيلين، ثنائي الحركة)؟",
  "كيف يُدار الألم يوم الجراحة وفي أول 48 ساعة؟",
  "متى أستطيع المشي المستقل والقيادة والعودة للرياضة أو أوضاع الصلاة؟",
];

export function ConditionsPage() {
  const { lang, t } = useLanguage();
  const [anatomy, setAnatomy] = useState<ConditionRegion>("Knee Joint");
  const [presentation, setPresentation] = useState<ConditionPresentation>(presentations[0]);
  const [checked, setChecked] = useState<string[]>([]);
  const questionList = lang === "ar" ? questionsAr : questions;

  const filtered = useMemo(
    () => portfolio.filter((item) => item.anatomy === anatomy),
    [anatomy],
  );

  const matchedConditions = useMemo(() => {
    const exact = conditionPages.filter(
      (item) => item.region === anatomy && item.presentation === presentation,
    );
    if (exact.length) return exact;
    return conditionPages.filter((item) => item.presentation === presentation);
  }, [anatomy, presentation]);

  return (
    <>
      <section className="relative overflow-hidden bg-clinical-navy py-space-3xl text-white">
        <div className="page-wrap grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
              {loc(lang, "Evidence-led joint reconstruction · Healthpoint Abu Dhabi", "إعادة بناء المفاصل المبنية على الأدلة · هيلث بوينت أبوظبي")}
            </p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">
              {loc(lang, "Precision Orthopaedic Surgical Solutions", "حلول جراحة عظام دقيقة")}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand-tint/75">
              {loc(
                lang,
                "Comprehensive diagnostic analysis, individualized biomechanical modeling, and advanced arthroplasty techniques curated by UK-trained Consultant Dr. Feras Ya'ish.",
                "تحليل تشخيصي شامل ونمذجة ميكانيكية فردية وتقنيات استبدال متقدمة بإشراف الاستشاري البريطاني التدريب الدكتور فراس يعيش.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded bg-white px-4 py-2.5 text-[13px] font-semibold text-clinical-navy" href="#treatment-explorer">
                {t.launchExplorer}
              </a>
              <a className="rounded border border-white/25 px-4 py-2.5 text-[13px] font-semibold" href="#technique-comparison">
                {t.compareModalities}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-3xl" id="treatment-explorer">
        <div className="page-wrap">
          <h2 className="mb-2 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Interactive Treatment Explorer", "مستكشف العلاج التفاعلي")}
          </h2>
          <p className="mb-6 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Select your anatomical focus and clinical presentation to discover evidence-based intervention pathways.",
              "اختر التركيز التشريحي والعرض السريري لاكتشاف مسارات التدخل المبنية على الأدلة.",
            )}
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {anatomies.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAnatomy(item)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold ${
                  anatomy === item ? "bg-clinical-navy text-white" : "border border-surface-border bg-white text-clinical-navy"
                }`}
              >
                {regionCopy(item, lang)}
              </button>
            ))}
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {presentations.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPresentation(item)}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                  presentation === item ? "bg-surgical-teal text-white" : "bg-sand-tint text-text-secondary"
                }`}
              >
                {presentationCopy(item, lang)}
              </button>
            ))}
          </div>
          <p className="mb-6 rounded-lg border border-surgical-teal/20 bg-surgical-teal-subtle px-4 py-3 text-sm text-clinical-navy">
            {lang === "ar" ? (
              <>
                ملاحظة سريرية: هذه معلومات تثقيفية عامة لـ <strong>{regionCopy(anatomy, lang)}</strong> مع عرض{" "}
                <strong>{presentationCopy(presentation, lang)}</strong>. الاستشارة الحضورية والتصوير هما ما يحددان ما يناسبك.
              </>
            ) : (
              <>
                Clinical notice: this is general educational information for <strong>{anatomy}</strong> with a presentation of{" "}
                <strong>{presentation}</strong>. Only an in-person consultation and radiographic evaluation can determine what is appropriate for you.
              </>
            )}
          </p>
          {matchedConditions.length ? (
            <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {matchedConditions.map((item) => (
                <article key={item.slug} className="rounded-xl border border-surgical-teal/25 bg-white p-5">
                  <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{regionCopy(item.region, lang)}</p>
                  <h3 className="mb-2 font-headline-sm text-primary">{conditionCopy(item, lang).short}</h3>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">{conditionCopy(item, lang).summary}</p>
                  <Link
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy"
                    href={`/conditions/${item.slug}`}
                  >
                    {t.conditionGuide}
                    <ExternalArrow />
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                <Link className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy" href={item.href}>
                  {t.clinicalGuide}
                  <ExternalArrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-space-3xl" id="conditions-we-treat">
        <div className="page-wrap">
          <h2 className="mb-2 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Conditions we treat", "الحالات التي نعالجها")}
          </h2>
          <p className="mb-6 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Educational guides for the hip, knee, sports, and trauma presentations most often referred to Dr. Ya'ish.",
              "أدلة تثقيفية لحالات الورك والركبة والرياضة والرضوض الأكثر إحالة للدكتور يعيش.",
            )}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {conditionPages.map((item) => {
              const copy = conditionCopy(item, lang);
              return (
              <Link
                key={item.slug}
                href={`/conditions/${item.slug}`}
                className="rounded-xl border border-surface-border bg-alabaster-warm p-5 transition hover:border-surgical-teal/40"
              >
                <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{regionCopy(item.region, lang)}</p>
                <h3 className="mb-2 font-headline-sm text-primary">{copy.short}</h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-text-secondary">{copy.summary}</p>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Surgical & Reconstructive Portfolio", "المحفظة الجراحية وإعادة البناء")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <p className="mb-2 text-[11px] tracking-wider text-surgical-teal uppercase">{regionCopy(item.anatomy, lang)}</p>
                <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                <Link className="text-[13px] font-semibold text-clinical-navy" href={item.href}>
                  {t.exploreTechnique}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-3xl" id="technique-comparison">
        <div className="page-wrap">
          <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Technique Comparison Table", "جدول مقارنة التقنيات")}
          </h2>
          <p className="mb-6 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Orthopaedic surgery utilizes distinct operational methodologies depending on bone anatomy, previous surgeries, and biomechanical stability requirements.",
              "تستخدم جراحة العظام أساليب مختلفة حسب تشريح العظم والجراحات السابقة ومتطلبات الاستقرار الميكانيكي.",
            )}
          </p>
          <div className="overflow-x-auto rounded-xl border border-surface-border bg-white">
            <table className="min-w-[720px] w-full text-start text-sm">
              <thead className="bg-clinical-navy text-white">
                <tr>
                  {(lang === "ar"
                    ? ["التركيز", "التقليدي", "بمساعدة الروبوت", "مخصص للمريض", "المراجعة / الإنقاذ"]
                    : ["Focus", "Conventional", "Robotic-Assisted", "Patient-Specific", "Revision / Salvage"]
                  ).map((h) => (
                    <th key={h} className="px-4 py-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                {(lang === "ar"
                  ? [
                      ["الدقة", "قوالب يدوية ±3 مم", "لمسي ±0.5 مم", "طباعة ثلاثية ±1.5 مم", "إعادة بناء بساق / مخروط"],
                      ["الأنسجة الرخوة", "فواصل ثابتة", "رسم حسّاس مباشر", "تقدير قبل القطع", "تقييد حسب الحاجة"],
                      ["الأنسب لـ", "مفاصل أولية بسيطة", "مرضى نشطون وركبة جزئية", "معدن متبقٍ", "ارتخاء، عدوى، فقدان عظم"],
                    ]
                  : [
                      ["Accuracy", "Manual jigs ±3 mm", "Haptic ±0.5 mm", "3D printed ±1.5 mm", "Stem / cone reconstruction"],
                      ["Soft tissue", "Static spacers", "Live sensor graph", "Pre-cut estimate", "Constraint as required"],
                      ["Best for", "Straightforward primary joints", "Active patients, partial knees", "Retained hardware", "Loosening, PJI, bone loss"],
                    ]
                ).map((row) => (
                  <tr key={row[0]} className="border-t border-surface-border">
                    {row.map((cell, i) => (
                      <td key={cell} className={`px-4 py-3 ${i === 0 ? "font-semibold text-primary" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/60 py-space-3xl">
        <div className="page-wrap grid gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Consultation Question Builder", "منشئ أسئلة الاستشارة")}
            </h2>
            <p className="mb-6 text-text-secondary">
              {loc(
                lang,
                "Preparing tailored clinical questions in advance ensures you and Dr. Ya'ish cover the diagnostic and post-operative aspects most meaningful to your lifestyle. Zero tracking — selections stay in your browser.",
                "تحضير أسئلة سريرية مسبقاً يضمن تغطية الجوانب التشخيصية وبعد العملية الأهم لنمط حياتك مع الدكتور يعيش. بلا تتبع — تبقى الاختيارات في متصفحك.",
              )}
            </p>
            <ul className="space-y-3">
              {questionList.map((q, index) => {
                const on = checked.includes(String(index));
                return (
                  <li key={index}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-surface-border bg-white p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() =>
                          setChecked((prev) => (on ? prev.filter((x) => x !== String(index)) : [...prev, String(index)]))
                        }
                        className="mt-0.5"
                      />
                      <span>{q}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <aside className="rounded-2xl bg-clinical-navy p-6 text-white lg:col-span-5">
            <p className="mb-2 text-[11px] tracking-widest text-surgical-teal-light uppercase">
              {loc(lang, "Your list", "قائمتك")}
            </p>
            <h3 className="mb-4 font-headline-sm text-white">
              {lang === "ar"
                ? `${checked.length} ${checked.length === 1 ? "سؤال محدد" : "أسئلة محددة"}`
                : `${checked.length} question${checked.length === 1 ? "" : "s"} selected`}
            </h3>
            {checked.length ? (
              <ul className="mb-6 space-y-2 text-sm text-sand-tint/80">
                {checked.map((id) => (
                  <li key={id}>• {questionList[Number(id)]}</li>
                ))}
              </ul>
            ) : (
              <p className="mb-6 text-sm text-sand-tint/70">
                {loc(lang, "Tick questions on the left to build a personal consultation list.", "حدد الأسئلة على اليسار لبناء قائمة استشارة شخصية.")}
              </p>
            )}
            <BookButton className="inline-flex rounded bg-white px-4 py-2.5 text-[13px] font-semibold text-clinical-navy">
              {t.requestConsultation}
            </BookButton>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="Assessment"
        eyebrowAr="التقييم"
        title="Arrange an Orthopaedic Assessment"
        titleAr="رتّب تقييماً لجراحة العظام"
        body="Consultations take place at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-Free UAE: 800 77."
        bodyAr="تتم الاستشارات في مستشفى هيلث بوينت، مدينة زايد الرياضية، أبوظبي. الرقم المجاني في الإمارات: 800 77."
      />
    </>
  );
}
