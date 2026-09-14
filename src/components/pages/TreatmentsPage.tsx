"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { treatmentCopy } from "@/lib/ar-copy";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";
import { treatments } from "@/lib/treatments";

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

export function TreatmentsPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-alabaster-warm py-space-2xl lg:py-space-3xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal uppercase">
            {loc(lang, "Surgical Portfolio", "المحفظة الجراحية")}
          </p>
          <h1 className="max-w-3xl font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">
            {loc(lang, "Orthopaedic Surgical Specialties & Joint Care", "تخصصات جراحة العظام ورعاية المفاصل")}
          </h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Evidence-based reconstructive procedures, tissue-sparing approaches, robotic-assisted navigation, and complex joint revision performed under consultant-led British standards at Healthpoint Abu Dhabi.",
              "إجراءات إعادة بناء مبنية على الأدلة، ونُهج تحافظ على الأنسجة، وملاحة روبوتية، ومراجعة مفاصل معقدة وفق معايير بريطانية استشارية في هيلث بوينت أبوظبي.",
            )}
          </p>
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap grid gap-5 md:grid-cols-2">
          {treatments.map((item) => {
            const copy = treatmentCopy(item, lang);
            return (
            <article key={item.slug} className="overflow-hidden rounded-2xl border border-surface-border bg-white">
              <div className="aspect-[16/10] bg-sand-tint">
                <Image src={item.image} alt={copy.title} width={800} height={500} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="mb-2 text-[11px] tracking-wider text-surgical-teal uppercase">{copy.tag}</p>
                <h2 className="mb-2 font-headline-sm text-[1.2rem] text-primary">{copy.title}</h2>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">{copy.summary}</p>
                <Link className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy" href={`/treatments/${item.slug}`}>
                  {t.viewProcedure}
                  <ExternalArrow />
                </Link>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap">
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

      <CtaBand
        eyebrow="Consultant Evaluation"
        eyebrowAr="تقييم استشاري"
        title="Schedule Your Consultant Evaluation"
        titleAr="احجز تقييمك الاستشاري"
        body="Whether you are considering primary joint arthroplasty, seeking a second opinion, or requiring complex tertiary revision surgery, consultations are unhurried and evidence-based."
        bodyAr="سواء كنت تفكر في استبدال أولي، أو رأي ثانٍ، أو مراجعة تخصصية معقدة، تتم الاستشارات بهدوء وبناءً على الأدلة."
      />
    </>
  );
}
