"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { BookButton } from "@/components/BookButton";
import { ExternalArrow } from "@/components/ui/Icons";
import { treatmentCopy } from "@/lib/ar-copy";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";
import { treatments, type TreatmentCategory } from "@/lib/treatments";
import { isPublishedPath } from "@/lib/visibility";

const comparison = {
  headers: ["Clinical Parameter", "Conventional Jigs", "Patient-Specific Guides (PSI)", "Robotic-Navigated (Mako / ROSA)"],
  headersAr: ["المعيار السريري", "القوالب التقليدية", "أدلة مخصصة للمريض (PSI)", "الملاحة الروبوتية (Mako / ROSA)"],
  rows: [
    ["Alignment Tolerance", "± 3.0 mm / 3.0°", "± 1.5 mm / 1.5° 3D template matched", "Sub-millimeter (± 0.5 mm / 0.5°)"],
    ["Soft-Tissue Tensioning", "Static manual tension spacers", "Static pre-cut virtual estimate", "Real-time dynamic sensor graph across ROM"],
    ["Bone Preservation", "Intramedullary alignment rod", "Extramedullary pins with cutting blocks", "No canal violation; haptic boundary protection"],
    ["Pre-Operative 3D Imaging", "Standard 2D weight-bearing X-rays", "Low-dose CT with custom 3D printed mold", "Volumetric CT reconstructed into 3D bone cloud"],
    ["Recovery Curve", "6–8 weeks independent gait", "4–6 weeks structured rehabilitation", "2–4 weeks with reduced narcotic demand"],
    ["Ideal Candidates", "Straightforward primary deformities", "Cases with retained hardware", "Complex deformities, active patients, partial knees"],
  ],
  rowsAr: [
    ["تحمل المحاذاة", "± 3.0 مم / 3.0°", "± 1.5 مم / 1.5° وفق قالب ثلاثي الأبعاد", "دون المليمتر (± 0.5 مم / 0.5°)"],
    ["توتر الأنسجة الرخوة", "فواصل توتر يدوية ثابتة", "تقدير افتراضي ثابت قبل القطع", "رسم حسّاس ديناميكي لحظي عبر مدى الحركة"],
    ["الحفاظ على العظم", "قضيب محاذاة داخل النقي", "دبابيس خارج النقي مع قوالب قطع", "دون اختراق القناة؛ حماية حدود لمسية"],
    ["تصوير ثلاثي الأبعاد قبل الجراحة", "أشعة ثنائية الأبعاد بتحمل الوزن", "مقطعي منخفض الجرعة مع قالب مطبوع", "مقطعي حجمي يُحوَّل إلى نموذج عظمي ثلاثي"],
    ["منحنى التعافي", "6–8 أسابيع لمشي مستقل", "4–6 أسابيع إعادة تأهيل منظمة", "2–4 أسابيع مع حاجة أقل للمسكنات"],
    ["المرشحون الأنسب", "تشوهات أولية بسيطة", "حالات مع معدن متبقٍ", "تشوهات معقدة، مرضى نشطون، ركبة جزئية"],
  ],
};

const pathway = [
  {
    title: "Diagnostic Evaluation & Kinematic Scan",
    titleAr: "التقييم التشخيصي والمسح الحركي",
    body: "Comprehensive 45-minute clinical examination. Weight-bearing radiographs, dynamic MRI, or volumetric low-dose CT alignment scans.",
    bodyAr: "فحص سريري شامل لمدة 45 دقيقة. أشعة تحمل وزن، أو رنين ديناميكي، أو مقطعي محاذاة منخفض الجرعة.",
  },
  {
    title: "Pre-Op 3D Templating & Planning",
    titleAr: "التخطيط والقوالب ثلاثية الأبعاد",
    body: "Sub-millimeter implant sizing, resection angle simulation, and bone-preserve strategy formulated digitally before theatre.",
    bodyAr: "تحديد حجم الزرعة وزوايا القطع واستراتيجية الحفاظ على العظم رقمياً قبل غرفة العمليات.",
  },
  {
    title: "Minimally Invasive Precision Surgery",
    titleAr: "جراحة دقيقة طفيفة التوغل",
    body: "Ultra-clean laminar airflow theatres. Muscle-sparing exposure, computer or robotic guidance, and localized multimodal pain relief.",
    bodyAr: "غرف عمليات بتدفق هوائي صفحي. كشف يحافظ على العضلات، وتوجيه حاسوبي أو روبوتي، وتسكين موضعي متعدد الوسائط.",
  },
  {
    title: "Accelerated Rehab & Long-Term Follow-up",
    titleAr: "تأهيل سريع ومتابعة طويلة",
    body: "Same-day or Day 1 mobilisation. Structured follow-up at 2 weeks, 6 weeks, 3 months, and 1 year.",
    bodyAr: "تحريك في يوم الجراحة أو اليوم التالي. متابعة منظمة في أسبوعين و6 أسابيع و3 أشهر وسنة.",
  },
];

const filters: { id: "all" | TreatmentCategory; en: string; ar: string }[] = [
  { id: "all", en: "All Specialties", ar: "كل التخصصات" },
  { id: "knee", en: "Knee Reconstruction", ar: "إعادة بناء الركبة" },
  { id: "hip", en: "Hip Arthroplasty", ar: "استبدال الورك" },
  { id: "robotic", en: "Robotic Navigation", ar: "الملاحة الروبوتية" },
  { id: "revision", en: "Complex Revision", ar: "المراجعة المعقدة" },
  { id: "sports", en: "Knee Sports Injuries", ar: "إصابات الركبة الرياضية" },
  { id: "trauma", en: "Trauma & Fractures", ar: "الرضوض والكسور" },
];

const extras: Record<
  string,
  {
    specialty: string;
    specialtyAr: string;
    badges: [string, string];
    specs: { label: string; labelAr: string; value: string; valueAr: string }[];
    cta: string;
    ctaAr: string;
    note: string;
    noteAr: string;
    href?: string;
  }
> = {
  "total-knee-replacement": {
    specialty: "Specialty Intervention 02 · Knee Joint",
    specialtyAr: "التدخل التخصصي 02 · مفصل الركبة",
    badges: ["Sub-Millimeter Balance", "Kinematic Fit"],
    specs: [
      { label: "Alignment Philosophy", labelAr: "فلسفة المحاذاة", value: "Kinematic Restoration", valueAr: "استعادة حركية" },
      { label: "Component Fixation", labelAr: "تثبيت المكوّنات", value: "Cobalt-Chrome & PEEK/Poly", valueAr: "كوبالت كروم وبولي" },
      { label: "Soft Tissue Release", labelAr: "تحرير الأنسجة", value: "Preservative / Negligible", valueAr: "حافظ / شبه معدوم" },
      { label: "Functional Target", labelAr: "الهدف الوظيفي", value: "125°+ Smooth Flexion", valueAr: "ثني سلس 125°+" },
    ],
    cta: "Book Knee Assessment",
    ctaAr: "احجز تقييم الركبة",
    note: "Digital Pre-Op Templating",
    noteAr: "قوالب رقمية قبل الجراحة",
  },
  "patient-specific-knee": {
    specialty: "Specialty Intervention · Personalised Knee Planning",
    specialtyAr: "التدخل التخصصي · تخطيط ركبة مخصص",
    badges: ["CT Planning", "Patient-Specific Guides"],
    specs: [
      { label: "Procedure", labelAr: "الإجراء", value: "Total knee replacement with PSI", valueAr: "استبدال ركبة كامل مع PSI" },
      { label: "Planning", labelAr: "التخطيط", value: "CT before the first incision", valueAr: "مقطعي قبل الشق الأول" },
      { label: "Instrumentation", labelAr: "الأدوات", value: "Guides matched to the patient's anatomy", valueAr: "أدلة مطابقة لتشريح المريض" },
      { label: "Role", labelAr: "الدور", value: "Alongside total knee replacement", valueAr: "إلى جانب استبدال الركبة الكامل" },
    ],
    cta: "Book Knee Assessment",
    ctaAr: "احجز تقييم الركبة",
    note: "PSI sits alongside total knee replacement",
    noteAr: "PSI إلى جانب استبدال الركبة الكامل",
  },
  "hip-replacement": {
    specialty: "Specialty Intervention · Hip Joint",
    specialtyAr: "التدخل التخصصي · مفصل الورك",
    badges: ["Cementless or Hybrid", "Leg-Length Restoration"],
    specs: [
      { label: "Procedure", labelAr: "الإجراء", value: "Primary Total Hip Arthroplasty", valueAr: "استبدال أولي كامل للورك" },
      { label: "Fixation", labelAr: "التثبيت", value: "Cementless or Hybrid", valueAr: "غير إسمنتي أو هجين" },
      { label: "Anatomic Target", labelAr: "الهدف التشريحي", value: "Leg length and offset", valueAr: "طول الساق والإزاحة" },
      { label: "Planning", labelAr: "التخطيط", value: "CT templating when indicated", valueAr: "تخطيط مقطعي عند الحاجة" },
    ],
    cta: "Book Hip Assessment",
    ctaAr: "احجز تقييم الورك",
    note: "Primary hip replacement",
    noteAr: "استبدال أولي للورك",
  },
  "partial-knee": {
    specialty: "Specialty Intervention 03 · Compartmental Resurfacing",
    specialtyAr: "التدخل التخصصي 03 · إعادة تسطيح الحيز",
    badges: ["Cruciate-Retaining", "Outpatient Eligible"],
    specs: [
      { label: "Native Ligaments", labelAr: "الأربطة الأصلية", value: "100% Retained", valueAr: "محفوظة بالكامل" },
      { label: "Incision Length", labelAr: "طول الشق", value: "6 - 8 cm Micro-Incised", valueAr: "شق صغير 6–8 سم" },
      { label: "Hospital Stay", labelAr: "الإقامة", value: "Day-Case / Overnight", valueAr: "يوم واحد / ليلة" },
      { label: "Normal Activity", labelAr: "النشاط الطبيعي", value: "3 - 4 Weeks", valueAr: "3 – 4 أسابيع" },
    ],
    cta: "Check Partial Eligibility",
    ctaAr: "تحقق من أهلية الجزئي",
    note: "Medial & Patellofemoral",
    noteAr: "الإنسي والرضفي الفخذي",
  },
  "robotic-arthroplasty": {
    specialty: "Specialty Intervention 04 · State-of-the-Art Navigation",
    specialtyAr: "التدخل التخصصي 04 · ملاحة متقدمة",
    badges: ["CT 3D Modeling", "Haptic Security"],
    specs: [
      { label: "Positional Precision", labelAr: "دقة الموضع", value: "±0.5 mm / 0.5°", valueAr: "±0.5 مم / 0.5°" },
      { label: "Real-Time Balancing", labelAr: "الموازنة اللحظية", value: "Dynamic Ligament Sensor", valueAr: "حسّاس أربطة ديناميكي" },
      { label: "Soft Tissue Safety", labelAr: "سلامة الأنسجة", value: "Haptic Boundary Lock", valueAr: "قفل حدود لمسي" },
      { label: "Revision Risk Reduction", labelAr: "خفض خطر المراجعة", value: "Clinically Documented", valueAr: "موثّق سريرياً" },
    ],
    cta: "Inquire About Robotic Surgery",
    ctaAr: "استفسر عن الجراحة الروبوتية",
    note: "Robotic planning when indicated",
    noteAr: "تخطيط روبوتي عند الحاجة",
  },
  "revision-surgery": {
    specialty: "Specialty Intervention 05 · High-Complexity Reconstruction",
    specialtyAr: "التدخل التخصصي 05 · إعادة بناء عالية التعقيد",
    badges: ["Tertiary Level Referral", "AO Recon Expert"],
    specs: [
      { label: "Indications Managed", labelAr: "الاستطبابات", value: "Loosening, PJI, Bone Loss", valueAr: "ارتخاء، عدوى، فقدان عظم" },
      { label: "Bone Reconstruction", labelAr: "إعادة بناء العظم", value: "Trabecular Titanium Sleeves", valueAr: "أكمام تيتانيوم تربيقية" },
      { label: "MDT Collaboration", labelAr: "التعاون المتعدد", value: "Infectious Disease & Radiology", valueAr: "العدوى والأشعة" },
      { label: "Regional Expertise", labelAr: "الخبرة الإقليمية", value: "AO Recon MENA Faculty", valueAr: "هيئة AO Recon للمنطقة" },
    ],
    cta: "Physician Referral & Case Review",
    ctaAr: "إحالة الطبيب ومراجعة الحالة",
    note: "Major Referral Center",
    noteAr: "مركز إحالة رئيسي",
    href: "/for-physicians",
  },
  arthroscopy: {
    specialty: "Specialty Intervention 06 · Knee Sports Injuries",
    specialtyAr: "التدخل التخصصي 06 · إصابات الركبة الرياضية",
    badges: ["Keyhole Surgery", "Meniscal Salvage"],
    specs: [
      { label: "Procedures", labelAr: "الإجراءات", value: "Meniscus / Cartilage", valueAr: "هلالة / غضروف" },
      { label: "Meniscal Strategy", labelAr: "استراتيجية الهلالة", value: "Preservation & All-Inside Fix", valueAr: "حفظ وتثبيت من الداخل" },
      { label: "Surgical Access", labelAr: "المدخل الجراحي", value: "4 mm HD Arthroscopy", valueAr: "منظار عالي الدقة 4 مم" },
      { label: "Recovery", labelAr: "التعافي", value: "Repair-specific protocol", valueAr: "بروتوكول حسب الإصلاح" },
    ],
    cta: "Knee Arthroscopy Assessment",
    ctaAr: "تقييم منظار الركبة",
    note: "Repair-first meniscal strategy",
    noteAr: "استراتيجية إصلاح الهلالة أولاً",
  },
  "ligament-reconstruction": {
    specialty: "Specialty Intervention 07 · Knee Sports Injuries",
    specialtyAr: "التدخل التخصصي 07 · إصابات الركبة الرياضية",
    badges: ["ACL Reconstruction", "Anatomic Kinematics"],
    specs: [
      { label: "Procedures", labelAr: "الإجراءات", value: "ACL / PCL / ALL / MPFL", valueAr: "ACL / PCL / ALL / MPFL" },
      { label: "Focus", labelAr: "التركيز", value: "Knee ligament stability", valueAr: "ثبات أربطة الركبة" },
      { label: "Associated Care", labelAr: "الرعاية المصاحبة", value: "Ramp & root repair", valueAr: "إصلاح الحافة والجذر" },
      { label: "Return to Pivot Sports", labelAr: "العودة للرياضة", value: "Criterion-based testing", valueAr: "اختبارات وفق معايير" },
    ],
    cta: "Knee Ligament Assessment",
    ctaAr: "تقييم أربطة الركبة",
    note: "Focused on knee sports injuries",
    noteAr: "مركز على إصابات الركبة الرياضية",
  },
  "patellofemoral-instability": {
    specialty: "Specialty Intervention · Kneecap Stability",
    specialtyAr: "التدخل التخصصي · ثبات الرضفة",
    badges: ["MPFL Reconstruction", "Kneecap Tracking"],
    specs: [
      { label: "Procedure", labelAr: "الإجراء", value: "Patellofemoral instability surgery", valueAr: "جراحة عدم استقرار الرضفة" },
      { label: "Stabiliser", labelAr: "المثبت", value: "MPFL reconstruction", valueAr: "إعادة بناء الرباط الرضفي الفخذي الإنسي" },
      { label: "Alignment", labelAr: "الاصطفاف", value: "Corrected only when it pulls the kneecap out", valueAr: "يُصحَّح فقط إذا سحب الرضفة خارج الميزاب" },
      { label: "Return to Pivot Sports", labelAr: "العودة للرياضة", value: "After strength and stability testing", valueAr: "بعد اختبارات القوة والثبات" },
    ],
    cta: "Kneecap Stability Assessment",
    ctaAr: "تقييم ثبات الرضفة",
    note: "For a kneecap that slips or dislocates",
    noteAr: "لرضفة تنزلق أو تخلع",
  },
  trauma: {
    specialty: "Specialty Intervention 07 · Skeletal Trauma",
    specialtyAr: "التدخل التخصصي 07 · رضوض الهيكل",
    badges: ["AO Foundation Principles", "LCP Osteosynthesis"],
    specs: [
      { label: "Clinical Focus", labelAr: "التركيز السريري", value: "Periarticular & Complex Fractures", valueAr: "كسور مفصلية ومعقدة" },
      { label: "Implant Technology", labelAr: "تقنية الزرعة", value: "Titanium Locking Compression", valueAr: "ضغط تيتانيوم قافل" },
      { label: "Deformity Correction", labelAr: "تصحيح التشوه", value: "Corrective Osteotomy", valueAr: "قطع عظمي تصحيحي" },
      { label: "Surgical Protocol", labelAr: "البروتوكول", value: "Biological Bone Preservation", valueAr: "حفظ بيولوجي للعظم" },
    ],
    cta: "Emergency / Trauma Triage Desk",
    ctaAr: "مكتب فرز الرضوض",
    note: "British Trauma Fellowship Standards",
    noteAr: "معايير زمالة الرضوض البريطانية",
    href: "tel:80077",
  },
};

export function TreatmentsPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | TreatmentCategory>("all");
  const visible = useMemo(
    () => (filter === "all" ? treatments : treatments.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="bg-sand-tint py-space-2xl lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal uppercase">
            {loc(lang, "Clinical Catalogue & Surgical Portfolio", "الكتالوج السريري والمحفظة الجراحية")}
          </p>
          <h1 className="max-w-3xl font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">
            {loc(lang, "Orthopaedic Surgical Specialties & Joint Care", "تخصصات جراحة العظام ورعاية المفاصل")}
          </h1>
          <AuthorByline showCredentials />
          <p className="mt-4 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Evidence-based reconstructive procedures, tissue-sparing approaches, robotic-assisted and patient-specific joint replacement, complex revision hip and knee surgery, and advanced knee ligament reconstruction.",
              "إجراءات إعادة بناء مبنية على الأدلة، ونُهج تحافظ على الأنسجة، وملاحة روبوتية، ومراجعة مفاصل معقدة وفق معايير بريطانية استشارية في هيلث بوينت أبوظبي.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  filter === item.id ? "bg-clinical-navy text-white shadow-sm" : "bg-white text-clinical-navy"
                }`}
              >
                {loc(lang, item.en, item.ar)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap space-y-8">
          {visible.map((item, index) => {
            const copy = treatmentCopy(item, lang);
            const meta = extras[item.slug];
            if (!meta) return null;
            const imageRight = index % 2 === 1;
            const ctaClass =
              "inline-flex items-center gap-2 rounded bg-clinical-navy px-4 py-2.5 text-[13px] font-semibold text-white";
            return (
              <article key={item.slug} className="overflow-hidden rounded-2xl border border-surface-border bg-white">
                <div className="grid items-stretch lg:grid-cols-12">
                  <Link
                    href={`/treatments/${item.slug}`}
                    className={`relative overflow-hidden bg-sand-tint lg:col-span-6 ${
                      item.imageFit === "contain" ? "h-[260px] self-center lg:h-[300px]" : "min-h-[280px] lg:min-h-[420px]"
                    } ${imageRight ? "lg:order-2" : ""}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className={item.imageFit === "contain" ? "object-contain" : "object-cover"}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className={`absolute top-4 flex flex-wrap gap-1 ${imageRight ? "right-4" : "left-4"}`}>
                      {meta.badges.map((badge) => (
                        <span key={badge} className="rounded bg-clinical-slate-deep/80 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </Link>
                  <div className={`flex flex-col justify-between p-6 lg:col-span-6 lg:p-10 ${imageRight ? "lg:order-1" : ""}`}>
                    <div>
                      <p className="mb-2 text-[11px] tracking-wider text-surgical-teal uppercase">
                        {loc(lang, meta.specialty, meta.specialtyAr)}
                      </p>
                      <Link href={`/treatments/${item.slug}`}>
                        <h2 className="mb-3 font-headline-sm text-[1.6rem] leading-tight text-primary lg:text-[2rem]">{copy.title}</h2>
                      </Link>
                      <p className="mb-6 text-sm leading-relaxed text-text-secondary">{copy.summary}</p>
                      <div className="mb-6 grid grid-cols-2 gap-3 rounded-lg bg-sand-tint p-4">
                        {meta.specs.map((spec) => (
                          <div key={spec.label}>
                            <p className="text-[11px] tracking-wide text-text-secondary uppercase">{loc(lang, spec.label, spec.labelAr)}</p>
                            <p className="text-sm font-semibold text-clinical-navy">{loc(lang, spec.value, spec.valueAr)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {meta.href?.startsWith("tel:") ? (
                        <a className={ctaClass} href={meta.href}>
                          {loc(lang, meta.cta, meta.ctaAr)}
                        </a>
                      ) : meta.href && isPublishedPath(meta.href) ? (
                        <Link className={ctaClass} href={meta.href}>
                          {loc(lang, meta.cta, meta.ctaAr)}
                        </Link>
                      ) : (
                        <BookButton className={ctaClass}>{loc(lang, meta.cta, meta.ctaAr)}</BookButton>
                      )}
                      <Link className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy" href={`/treatments/${item.slug}`}>
                        {t.viewProcedure}
                        <ExternalArrow />
                      </Link>
                    </div>
                    <p className="mt-3 text-[12px] text-text-secondary">{loc(lang, meta.note, meta.noteAr)}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
            {loc(lang, "Precision Matrix", "مصفوفة الدقة")}
          </p>
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Surgical Modality Comparison", "مقارنة الأساليب الجراحية")}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-surface-border bg-white">
            <table className="min-w-[860px] w-full text-start text-sm">
              <thead className="bg-clinical-navy text-white">
                <tr>
                  {(lang === "ar" ? comparison.headersAr : comparison.headers).map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(lang === "ar" ? comparison.rowsAr : comparison.rows).map((row) => (
                  <tr key={row[0]} className="border-t border-surface-border">
                    {row.map((cell, i) => (
                      <td key={cell} className={`px-4 py-3 ${i === 0 ? "font-semibold text-primary" : "text-text-secondary"}`}>
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

      <section className="py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-8 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Your Orthopaedic Care Pathway", "مسار رعايتك العظمية")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pathway.map((item, index) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <p className="mb-3 font-serif text-2xl text-surgical-teal">0{index + 1}</p>
                <h3 className="mb-2 font-headline-sm text-[1.05rem] text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-clinical-slate-deep py-space-3xl text-white">
        <div className="page-wrap relative z-10 grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
              {loc(lang, "Consultant Trauma & Orthopaedic Practice", "ممارسة استشارية للحوادث والعظام")}
            </p>
            <h2 className="font-headline-hero text-[2rem] leading-tight lg:text-[3rem]">
              {loc(lang, "Schedule Your Consultant Evaluation", "احجز تقييمك الاستشاري")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">
              {loc(
                lang,
                "Whether you are considering primary joint arthroplasty, seeking a second opinion, or requiring complex tertiary revision surgery, consultations are unhurried and evidence-based.",
                "سواء كنت تفكر في استبدال أولي، أو رأي ثانٍ، أو مراجعة تخصصية معقدة، تتم الاستشارات بهدوء وبناءً على الأدلة.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton className="inline-flex rounded bg-surgical-teal px-5 py-3 text-[13px] font-semibold text-white">
                {t.requestConsultation}
              </BookButton>
              <a className="inline-flex rounded border border-white/20 px-5 py-3 text-[13px] font-semibold" href="tel:80077">
                {loc(lang, "Direct Booking: 800 77", "الحجز المباشر: 800 77")}
              </a>
            </div>
          </div>
          <aside className="rounded-xl bg-clinical-navy/60 p-6 backdrop-blur-xl lg:col-span-4">
            <p className="text-[11px] tracking-wider text-surgical-teal-light uppercase">
              {loc(lang, "Direct Clinic Location", "موقع العيادة")}
            </p>
            <p className="mt-1 font-semibold">Healthpoint Abu Dhabi</p>
            <p className="mt-1 text-sm text-sand-tint/75">
              {loc(
                lang,
                "Between Gates 1–6, Al Qiyada Street, Zayed Sports City, Al Rawdah, P.O. Box 112308, Abu Dhabi, UAE",
                "بين البوابتين 1–6، شارع القيادة، مدينة زايد الرياضية، الروضة، ص.ب 112308، أبوظبي",
              )}
            </p>
            {isPublishedPath("/for-physicians") ? (
              <>
                <p className="mt-4 text-[11px] tracking-wider text-surgical-teal-light uppercase">
                  {loc(lang, "Physician Referrals", "إحالات الأطباء")}
                </p>
                <p className="mt-1 text-sm text-sand-tint/75">
                  {loc(
                    lang,
                    "Direct tertiary referral desk for hospital-to-hospital transfers, radiological review, and complex trauma triage.",
                    "مكتب إحالة تخصصي للتحويل بين المستشفيات ومراجعة الأشعة وفرز الرضوض المعقدة.",
                  )}
                </p>
                <Link className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-surgical-teal-light" href="/for-physicians">
                  {loc(lang, "Physician Referral Portal", "بوابة إحالة الأطباء")}
                  <ExternalArrow />
                </Link>
              </>
            ) : null}
            <div className="mt-4 flex justify-between text-[12px] text-sand-tint/70">
              <span>DoH Licensed Consultant</span>
              <span className="text-clinical-gold-honorary">FRCS (Tr &amp; Orth) UK</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
