"use client";

import { useState } from "react";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

const glossary = [
  {
    term: "Arthroplasty",
    termAr: "استبدال المفصل",
    tag: "Surgical Procedure",
    tagAr: "إجراء جراحي",
    body: "The surgical reconstruction or complete replacement of a diseased, degenerated, or arthritic joint using precision biocompatible synthetic components (implants).",
    bodyAr: "إعادة بناء أو استبدال مفصل مريض أو متآكل بزرعات دقيقة متوافقة حيوياً.",
  },
  {
    term: "Kinematic Alignment",
    termAr: "المحاذاة الحركية",
    tag: "Philosophy",
    tagAr: "فلسفة",
    body: "A patient-specific surgical approach where the replacement joint is aligned to recreate your body's natural, pre-arthritic anatomical joint line rather than an arbitrary 90° mechanical axis.",
    bodyAr: "محاذاة الزرعة لإعادة خط المفصل الطبيعي قبل الخشونة بدلاً من محور ميكانيكي 90 درجة.",
  },
  {
    term: "Unicompartmental Knee",
    termAr: "استبدال الركبة الجزئي",
    tag: "Partial Arthroplasty",
    tagAr: "استبدال جزئي",
    body: "Commonly referred to as a partial knee replacement. Only the damaged inner (medial) or outer (lateral) compartment is resurfaced, leaving your healthy cruciate ligaments untouched.",
    bodyAr: "استبدال جزئي: يُعاد تسطيح الحيز المتضرر فقط مع الإبقاء على الأربطة المتصالبة.",
  },
  {
    term: "Direct Anterior Hip (DAA)",
    termAr: "استبدال الورك الأمامي المباشر",
    tag: "Minimally Invasive",
    tagAr: "طفيف التوغل",
    body: "An advanced hip replacement incision performed from the front of the hip. The surgeon works between natural muscle planes without detaching or cutting muscles from the femur.",
    bodyAr: "استبدال الورك من الأمام بين مستويات العضلات الطبيعية دون فصلها عن الفخذ.",
  },
  {
    term: "Osteotomy",
    termAr: "قطع العظم",
    tag: "Joint Preservation",
    tagAr: "حفظ المفصل",
    body: "A joint-preserving procedure where bone is precisely reshaped or realigned to shift weight-bearing loads away from a damaged cartilage area onto healthier joint surfaces.",
    bodyAr: "إعادة تشكيل العظم للحفاظ على المفصل ونقل الحمل عن الغضروف المتضرر.",
  },
  {
    term: "Biocompatibility",
    termAr: "التوافق الحيوي",
    tag: "Material Science",
    tagAr: "علم المواد",
    body: "The capability of surgical prosthetics (titanium alloy, cobalt chrome, oxinium ceramic) to coexist safely within human bone and tissue without triggering adverse immunogenic responses.",
    bodyAr: "قدرة زرعات التيتانيوم أو الكوبالت كروم أو السيراميك على التعايش الآمن داخل العظم والأنسجة.",
  },
];

const questions = [
  {
    q: "What surgical approach best suits my individual pelvic or knee anatomy?",
    qAr: "أي نهج جراحي يناسب تشريح الحوض أو الركبة لدي؟",
    hint: "E.g., Direct Anterior vs. Posterior Hip Arthroplasty, or Robotic Kinematic vs. Mechanical Knee alignment.",
    hintAr: "مثل النهج الأمامي مقابل الخلفي للورك، أو المحاذاة الحركية الروبوتية مقابل الميكانيكية للركبة.",
  },
  {
    q: "What specific implant materials and bearing surfaces will be utilized?",
    qAr: "ما مواد الزرعة وأسطح الاحتكاك التي ستُستخدم؟",
    hint: "Clarify ceramic-on-crosslinked polyethylene wear rates and biocompatibility with your physical lifestyle.",
    hintAr: "وضّح معدلات تآكل السيراميك على البولي إيثيلين المتشابك وتوافقها مع نمط حياتك.",
  },
  {
    q: "What is the hospital's infection and complication management protocol?",
    qAr: "ما بروتوكول المستشفى لإدارة العدوى والمضاعفات؟",
    hint: "Review laminar airflow theatre standards, antibiotic prophylaxis, and sterile wound closure techniques.",
    hintAr: "راجع معايير غرف التدفق الصفحي والوقاية بالمضادات وتقنيات إغلاق الجرح المعقم.",
  },
  {
    q: "What anaesthetic modality is recommended for my physiological profile?",
    qAr: "أي أسلوب تخدير يناسب وضعي الفسيولوجي؟",
    hint: "Explore spinal block with localized sensory catheter infusions versus general anaesthesia alternatives.",
    hintAr: "استكشف التخدير النخاعي مع قسطرة حسية موضعية مقابل التخدير العام.",
  },
  {
    q: "When will I be able to drive, return to flight travel, and resume sports?",
    qAr: "متى أستطيع القيادة والسفر جواً واستئناف الرياضة؟",
    hint: "Set concrete milestones based on whether left or right side surgery is being performed.",
    hintAr: "حدّد محطات واضحة حسب الجانب الأيمن أو الأيسر للجراحة.",
  },
  {
    q: "What happens if I experience unexpected pain or swelling after discharge?",
    qAr: "ماذا لو ظهر ألم أو تورم غير متوقع بعد الخروج؟",
    hint: "Confirm the 24/7 direct telephone contact numbers for the Healthpoint orthopaedic nursing team.",
    hintAr: "أكد أرقام الاتصال المباشرة على مدار الساعة لفريق تمريض العظام في هيلث بوينت.",
  },
];

const insurers = [
  "Thiqa (Full Direct Coverage)",
  "Daman Enhanced",
  "ADNIC (Abu Dhabi National)",
  "NextCare (Gold / VIP)",
  "Bupa Global",
  "MetLife Alico",
  "Cigna International",
  "Al Buhaira / Saico",
];

export function PatientCarePage() {
  const { lang } = useLanguage();
  const [checked, setChecked] = useState<string[]>([]);

  return (
    <>
      <section className="relative overflow-hidden bg-sand-tint py-space-3xl lg:py-space-4xl">
        <div className="page-wrap grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] tracking-wider text-clinical-navy uppercase shadow-sm">
              {loc(lang, "Comprehensive Clinical Pathway · Healthpoint Abu Dhabi", "مسار سريري شامل · هيلث بوينت أبوظبي")}
            </p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">
              {loc(lang, "Your Surgical Care & Recovery Journey", "رحلة الرعاية الجراحية والتعافي")}
            </h1>
            <p className="mt-4 max-w-2xl text-text-secondary">
              {loc(
                lang,
                "Clear, step-by-step guidance curated by Dr. Feras Ya'ish from your initial diagnostic evaluation through advanced robotic intervention and compassionate post-operative rehabilitation at Healthpoint Hospital Abu Dhabi.",
                "إرشاد واضح خطوة بخطوة من التقييم التشخيصي حتى التدخل الروبوتي وإعادة التأهيل بعد العملية في مستشفى هيلث بوينت أبوظبي.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                ["#pathway-prep", "Pre-Op Preparation", "التحضير قبل العملية"],
                ["#pathway-hospital", "Hospital Amenities", "خدمات المستشفى"],
                ["#pathway-milestones", "Recovery Milestones", "محطات التعافي"],
                ["#consultation-checklist", "Checklist & Questions", "القائمة والأسئلة"],
                ["#insurance-desk", "Insurance & Coverage", "التأمين والتغطية"],
              ].map(([href, en, ar]) => (
                <a key={href} className="rounded-lg bg-white px-3 py-2 text-[12px] font-semibold text-clinical-navy shadow-sm" href={href}>
                  {loc(lang, en, ar)}
                </a>
              ))}
            </div>
          </div>
          <aside className="rounded-xl border border-surface-border bg-white p-6 shadow-sm lg:col-span-5">
            <div className="mb-4 flex items-center justify-between rounded-t-xl bg-sand-tint px-1 py-2">
              <p className="text-[11px] font-bold tracking-wider text-clinical-navy uppercase">
                {loc(lang, "Standard of Excellence", "معيار التميز")}
              </p>
              <span className="rounded bg-clinical-navy px-2 py-0.5 text-[10px] font-semibold text-white">
                {loc(lang, "UK Fellowship Certified", "زمالة بريطانية معتمدة")}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-serif text-4xl text-primary">98.4%</p>
                <p className="text-[12px] text-text-secondary">{loc(lang, "Joint Stability & Preservation Rate", "معدل استقرار المفصل والحفاظ عليه")}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">{loc(lang, "Day 0", "اليوم 0")}</p>
                <p className="text-[12px] text-text-secondary">{loc(lang, "Ambulation Milestone Protocol", "بروتوكول المشي المبكر")}</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-surgical-teal-subtle p-4">
              <p className="font-headline-sm text-sm text-clinical-navy">{loc(lang, "Direct Patient Care Coordinator", "منسق رعاية المريض المباشر")}</p>
              <p className="mt-1 text-sm text-text-secondary">
                {loc(lang, "Dedicated clinical nurse liaison assigned to guide you before, during, and after surgical admission.", "منسق تمريض سريري مخصص لإرشادك قبل القبول وأثناءه وبعده.")}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-space-3xl lg:py-space-4xl">
        <div className="page-wrap">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
                {loc(lang, "Structured Clinical Path", "مسار سريري منظم")}
              </p>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {loc(lang, "The 5 Distinct Phases of Your Care", "المراحل الخمس لرعايتك")}
              </h2>
            </div>
            <p className="max-w-md text-sm text-text-secondary">
              {loc(
                lang,
                "Structured around internationally recognized orthopaedic protocols designed for predictable surgical outcomes, minimal discomfort, and swift return to active life.",
                "منظمة وفق بروتوكولات عظمية دولية لنتائج متوقعة وانزعاج أقل وعودة سريعة للحياة النشطة.",
              )}
            </p>
          </div>

          <article className="mb-10 grid items-center gap-8 rounded-xl border border-surface-border bg-white p-6 lg:grid-cols-12 lg:p-10" id="pathway-prep">
            <div className="lg:col-span-4">
              <p className="mb-2 text-[12px] font-semibold tracking-widest text-surgical-teal">
                1 · {loc(lang, "Diagnostic & Planning", "التشخيص والتخطيط")}
              </p>
              <h3 className="mb-3 font-headline-sm text-[1.4rem] text-primary">
                {loc(lang, "The Initial Clinical Assessment", "التقييم السريري الأولي")}
              </h3>
              <p className="mb-4 text-sm text-text-secondary">
                {loc(
                  lang,
                  "Your journey begins with an exhaustive biomechanical consultation. Dr. Ya'ish conducts physical mobility exams, dynamic load analysis, and in-depth diagnostic imaging reviews.",
                  "تبدأ الرحلة باستشارة ميكانيكية شاملة. يُجري الدكتور يعيش فحص الحركة وتحليل التحميل ومراجعة التصوير التشخيصي بالتفصيل.",
                )}
              </p>
              <div className="rounded-lg bg-sand-tint p-4 text-sm text-text-secondary">
                <p className="mb-2 font-bold text-clinical-navy">{loc(lang, "What to bring to your consultation:", "ماذا تحضر للاستشارة:")}</p>
                <ul className="list-disc space-y-1 ps-4">
                  <li>{loc(lang, "High-resolution MRI, CT, and dynamic weight-bearing X-rays (disc or cloud portal)", "رنين ومقطعي وأشعة تحمل وزن عالية الدقة")}</li>
                  <li>{loc(lang, "Comprehensive list of existing medications, supplements, and anticoagulant regimens", "قائمة الأدوية والمكملات ومضادات التخثر")}</li>
                  <li>{loc(lang, "Loose, comfortable sportswear enabling unrestricted range-of-motion examination", "ملابس رياضية مريحة لفحص مدى الحركة")}</li>
                  <li>{loc(lang, "Insurance card (Thiqa, Daman Enhanced, ADNIC) and Emirates ID", "بطاقة التأمين وهوية الإمارات")}</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:col-span-8">
              {[
                ["Precision Biomechanical Scan", "مسح ميكانيكي دقيق", "Kinematic assessment evaluating pelvic tilt, limb alignment, joint contractures, and gait mechanics prior to surgical templating.", "تقييم حركي لميل الحوض ومحاذاة الطرف وتقلصات المفصل وميكانيكا المشي قبل التخطيط الجراحي."],
                ["Shared Decision Making", "قرار مشترك", "Unrushed discussion reviewing surgical versus conservative alternatives, implant material biology, and personalized functional goals.", "نقاش غير متعجل يقارن الخيارات الجراحية والمحافظة وبيولوجيا مواد الزرعة والأهداف الوظيفية."],
                ["Medical Optimization", "تهيئة طبية", "Cardiology clearance, glycemic stabilization, and hemoglobin optimization to minimize peri-operative infection risks.", "موافقة قلبية واستقرار سكر الدم وتحسين الهيموغلوبين لتقليل خطر العدوى."],
                ["Pre-habilitation Protocol", "بروتوكول التأهيل المسبق", "Targeted quadriceps and abductor conditioning prescribed 3 weeks prior to surgery to accelerate postoperative recovery.", "تمارين موجهة للعضلة الرباعية والمبعدات قبل الجراحة بثلاثة أسابيع لتسريع التعافي."],
              ].map(([title, titleAr, body, bodyAr]) => (
                <div key={title} className="rounded-lg bg-sand-tint p-5">
                  <h4 className="mb-2 font-semibold text-primary">{loc(lang, title, titleAr)}</h4>
                  <p className="text-sm text-text-secondary">{loc(lang, body, bodyAr)}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="mb-10 grid gap-5 lg:grid-cols-12">
            <article className="flex flex-col justify-between rounded-xl bg-clinical-navy p-6 text-white lg:col-span-5 lg:p-10">
              <div>
                <p className="mb-2 text-[12px] font-semibold tracking-widest text-surgical-teal-light">
                  2 · {loc(lang, "Home & Body Readiness", "جاهزية المنزل والجسم")}
                </p>
                <h3 className="mb-3 font-headline-sm text-[1.4rem]">{loc(lang, "Pre-Operative Preparation", "التحضير قبل العملية")}</h3>
                <p className="mb-4 text-sm text-sand-tint/80">
                  {loc(
                    lang,
                    "Thorough preparation at home and clinical pre-clearance guarantee smooth hospital admission and safe discharge back into your home environment.",
                    "التحضير الجيد في المنزل والموافقات الطبية يضمنان قبولاً سلساً وخروجاً آمناً.",
                  )}
                </p>
                <ul className="space-y-2 text-sm text-sand-tint/90">
                  <li>• {loc(lang, "Chlorhexidine skin cleansing wash protocol the night before and morning of surgery", "غسيل كلورهيكسيدين مساء اليوم السابق وصباح الجراحة")}</li>
                  <li>• {loc(lang, "Fasting: nil by mouth 6 hours for solids, 2 hours for clear water", "صيام: لا شيء بالفم 6 ساعات للصلب وساعتان للماء")}</li>
                  <li>• {loc(lang, "Home modification: clear throw rugs, secure stair railings, ground-floor recovery sleeping", "تعديل المنزل: أزل السجاد وثبّت الدرابزين وجهّز نوماً أرضياً")}</li>
                </ul>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-surgical-teal-light">{loc(lang, "Pre-Op Admission Coordinator", "منسق القبول قبل العملية")}</span>
                <a className="font-bold" href="tel:80077">800 77</a>
              </div>
            </article>
            <article className="rounded-xl border border-surface-border bg-white p-6 lg:col-span-7 lg:p-10">
              <h4 className="mb-2 font-headline-sm text-primary">{loc(lang, "Home Ergonomics & Recovery Setup Guide", "دليل تجهيز المنزل للتعافي")}</h4>
              <p className="mb-4 text-sm text-text-secondary">
                {loc(lang, "Prepare your household at least 7 days before admission for independent, hazard-free mobility upon discharge.", "جهّز المنزل قبل القبول بسبعة أيام على الأقل لحركة مستقلة وآمنة بعد الخروج.")}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Elevated Seating", "جلوس مرتفع", "Use chairs with firm armrests and seat height of 45–50cm to avoid deep hip flexion beyond 90 degrees.", "كراسٍ بمساند وارتفاع 45–50 سم لتجنب ثني الورك العميق."],
                  ["Bathroom Modifications", "تعديلات الحمام", "Install temporary non-slip mats, raised toilet seat adapters, and non-permanent grab bars.", "حصائر مانعة للانزلاق ومقعد مرحاض مرتفع ومقابض مؤقتة."],
                  ["Cryotherapy & Ice Packs", "كمادات باردة", "Stock gel packs or arrange a recirculating knee cryo-cuff to regulate post-operative swelling.", "جهّز كمادات جل أو جهاز تبريد للركبة للسيطرة على التورم."],
                  ["Discharge Transportation", "النقل عند الخروج", "Designate a family member or Healthpoint concierge for a passenger-seat ride home.", "حدد مرافقاً عائلياً أو خدمة الكونسيرج لمقعد الراكب."],
                ].map(([title, titleAr, body, bodyAr]) => (
                  <div key={title} className="rounded-lg bg-sand-tint p-4">
                    <p className="mb-1 text-sm font-semibold text-clinical-navy">{loc(lang, title, titleAr)}</p>
                    <p className="text-sm text-text-secondary">{loc(lang, body, bodyAr)}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="mb-10 overflow-hidden rounded-xl border border-surface-border bg-white" id="pathway-dayof">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[320px] lg:col-span-6">
                <Image src="/images/education-or.png" alt="Ultra-clean laminar air flow theatres at Healthpoint" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-clinical-slate-deep/80 via-transparent to-transparent p-6 text-white">
                  <p className="text-[11px] font-bold tracking-wider text-surgical-teal-light uppercase">
                    {loc(lang, "Ultra-Clean Laminar Air Flow Theatres", "غرف عمليات بتدفق هوائي صفحي فائق النظافة")}
                  </p>
                  <p className="mt-1 text-sm">
                    {loc(lang, "Surgical suites configured with robotic Stryker Mako technology and HEPA air purification exceeding international standards.", "غرف عمليات بتقنية ماكو الروبوتية وتنقية HEPA تفوق المعايير الدولية.")}
                  </p>
                </div>
              </div>
              <div className="p-6 lg:col-span-6 lg:p-10">
                <p className="mb-2 text-[12px] font-semibold tracking-widest text-surgical-teal">
                  3 · {loc(lang, "Surgical Execution", "التنفيذ الجراحي")}
                </p>
                <h3 className="mb-3 font-headline-sm text-[1.4rem] text-primary">
                  {loc(lang, "The Day of Surgery at Healthpoint Hospital", "يوم الجراحة في مستشفى هيلث بوينت")}
                </h3>
                <p className="mb-5 text-sm text-text-secondary">
                  {loc(lang, "From reception in the day admissions suite to your arrival in the sterile theatre, your comfort and security remain paramount.", "من قبول اليوم الواحد إلى غرفة العمليات المعقمة تبقى الراحة والأمان أولوية.")}
                </p>
                <ol className="space-y-4 text-sm">
                  <li>
                    <p className="font-semibold text-primary">{loc(lang, "01 · Pre-Op Anaesthetic Huddle", "01 · اجتماع التخدير قبل العملية")}</p>
                    <p className="text-text-secondary">{loc(lang, "Customized spinal anaesthesia paired with localized sensory-only nerve blocks (adductor canal / PENG) prevents grogginess while preserving motor strength.", "تخدير نخاعي مخصص مع إحصار حسي موضعي يحافظ على القوة الحركية دون دوخة.")}</p>
                  </li>
                  <li>
                    <p className="font-semibold text-primary">{loc(lang, "02 · Robotic-Assisted Precision Implantation", "02 · زرع دقيق بمساعدة الروبوت")}</p>
                    <p className="text-text-secondary">{loc(lang, "Haptic robotic boundaries align components within 0.5mm accuracy for minimal soft-tissue trauma and zero muscle cutting in Direct Anterior hip access.", "حدود لمسية روبوتية تحاذي المكوّنات بدقة 0.5 مم دون قطع عضلات في النهج الأمامي.")}</p>
                  </li>
                  <li>
                    <p className="font-semibold text-primary">{loc(lang, "03 · Day 0 Rapid Mobilization", "03 · تحريك سريع في اليوم 0")}</p>
                    <p className="text-text-secondary">{loc(lang, "Within 3 to 4 hours, physiotherapists assist you in standing and walking your first steps, reducing DVT risk and accelerating recovery confidence.", "خلال 3 إلى 4 ساعات يساعدك العلاج الطبيعي على الوقوف والمشي لتقليل الجلطات وتعزيز الثقة.")}</p>
                  </li>
                </ol>
              </div>
            </div>
          </article>

          <article className="mb-10 overflow-hidden rounded-xl border border-surface-border bg-white" id="pathway-hospital">
            <div className="grid lg:grid-cols-12">
              <div className="order-2 p-6 lg:order-1 lg:col-span-6 lg:p-10">
                <p className="mb-2 text-[12px] font-semibold tracking-widest text-surgical-teal">
                  4 · {loc(lang, "Post-Surgical Inpatient Care", "الرعاية الداخلية بعد الجراحة")}
                </p>
                <h3 className="mb-3 font-headline-sm text-[1.4rem] text-primary">
                  {loc(lang, "In-Hospital Recovery & VIP Amenities", "التعافي داخل المستشفى وخدمات VIP")}
                </h3>
                <p className="mb-5 text-sm text-text-secondary">
                  {loc(
                    lang,
                    "Healthpoint Hospital provides a five-star clinical environment designed to minimize anxiety, foster tranquil rest, and deliver attentive orthopaedic rehabilitation care.",
                    "يوفر هيلث بوينت بيئة سريرية فاخرة تقلل القلق وتعزز الراحة وتقدم إعادة تأهيل عظمية دقيقة.",
                  )}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Private En-Suite Rooms", "غرف خاصة بحمام", "Acoustically isolated suites with panoramic skyline views of Zayed Sports City, ensuite walk-in showers, and dedicated family seating.", "أجنحة معزولة صوتياً بإطلالة على مدينة زايد ودش داخلي ومقاعد للعائلة."],
                    ["Round-The-Clock Specialist Care", "رعاية تخصصية على مدار الساعة", "Orthopaedic-certified nurses and resident physicians monitoring vitals, dressings, and pain scales 24 hours a day.", "تمريض عظام وأطباء مقيمون يراقبون العلامات الحيوية والضمادات والألم على مدار الساعة."],
                    ["Nutritional Optimization", "تحسين غذائي", "Chef-curated gourmet clinical meals enriched with high-protein and collagen precursors to optimize wound healing.", "وجبات سريرية غنية بالبروتين ومقدمات الكولاجين لالتئام الجرح."],
                    ["In-Room Physiotherapy Gym", "علاج طبيعي في الغرفة", "Twice-daily bedside sessions featuring gait retraining, gentle stairs navigation, and progressive joint extension.", "جلستان يومياً لإعادة المشي وصعود السلالم وتمديد المفصل التدريجي."],
                  ].map(([title, titleAr, body, bodyAr]) => (
                    <div key={title} className="rounded-lg bg-sand-tint p-3">
                      <p className="text-sm font-bold text-clinical-navy">{loc(lang, title, titleAr)}</p>
                      <p className="text-sm text-text-secondary">{loc(lang, body, bodyAr)}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-text-secondary">
                  {loc(lang, "Average inpatient stay: 24 to 48 hours for total joint replacement.", "متوسط الإقامة: 24 إلى 48 ساعة لاستبدال المفصل الكامل.")}
                </p>
              </div>
              <div className="relative order-1 min-h-[320px] lg:order-2 lg:col-span-6">
                <Image src="/images/education-lounge.png" alt="Panoramic wellness and family lounges at Healthpoint" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-clinical-slate-deep/80 via-transparent to-transparent p-6 text-white">
                  <p className="text-[11px] font-bold tracking-wider text-surgical-teal-light uppercase">
                    {loc(lang, "Panoramic Wellness & Family Lounges", "صالات عافية عائلية بإطلالة بانورامية")}
                  </p>
                  <p className="mt-1 text-sm">
                    {loc(lang, "Sunlit, open-plan spaces designed to enhance patient wellbeing and facilitate gentle mobility strolls.", "مساحات مشمسة مفتوحة لتعزيز العافية والمشي الخفيف.")}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-surface-border bg-white p-6 lg:p-10" id="pathway-milestones">
            <p className="mb-2 text-[12px] font-semibold tracking-widest text-surgical-teal">
              5 · {loc(lang, "Long-Term Restoration", "الاستعادة طويلة الأمد")}
            </p>
            <h3 className="mb-3 font-headline-sm text-[1.4rem] text-primary">
              {loc(lang, "Post-Operative Rehabilitation Milestones", "محطات إعادة التأهيل بعد العملية")}
            </h3>
            <p className="mb-6 max-w-2xl text-sm text-text-secondary">
              {loc(lang, "Functional recovery is a phased progression as your reconstructed joint integrates with skeletal anatomy.", "التعافي الوظيفي تقدم مرحلي مع اندماج المفصل المعاد بناؤه في التشريح العظمي.")}
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["Weeks 1 – 2", "الأسبوع 1 – 2", "Tissue Healing & Independent Walking", "التئام الأنسجة والمشي المستقل", ["Staple / waterproof dressing removal at Day 12 to 14", "Transition from bilateral crutches to single cane", "Knee extension 0° and flexion 90°+", "Unassisted walking around the house"], ["إزالة الضماد في اليوم 12–14", "الانتقال من عكازين إلى عصا واحدة", "تمديد الركبة 0° وثني 90°+", "مشي مستقل داخل المنزل"], "Clinical Check: Day 14 Follow-up", "مراجعة اليوم 14"],
                ["Weeks 3 – 6", "الأسبوع 3 – 6", "Endurance & Driving Resumption", "التحمل واستئناف القيادة", ["Resumption of driving after emergency braking test", "Return to sedentary office work", "Stationary cycling on low resistance", "Cessation of walking canes"], ["استئناف القيادة بعد اختبار التوقف الطارئ", "العودة للعمل المكتبي", "دراجة ثابتة بمقاومة منخفضة", "التوقف عن عصا المشي"], "Clinical Check: Week 6 X-Ray Review", "مراجعة أشعة الأسبوع 6"],
                ["Months 2 – 3", "الشهر 2 – 3", "Strength & Active Recreation", "القوة والنشاط الترفيهي", ["Swimming once incision is sealed", "Golf driving range and 3–5 km walks", "Full restoration of proprioception", "Discontinuation of routine analgesics"], ["سباحة بعد التئام الشق", "غولف ومشي 3–5 كم", "استعادة الإحساس العميق", "إيقاف المسكنات الروتينية"], "Clinical Check: Month 3 Gait Evaluation", "تقييم المشي في الشهر 3"],
                ["Months 6 – 12", "الشهر 6 – 12", "Unrestricted Functional Freedom", "حرية وظيفية غير مقيدة", ["Padel, hiking, skiing with consultant approval", "Complete osseointegration of the implant", "Forgotten Joint Score reaching optimal thresholds", "Annual surveillance imaging scheduled"], ["بادل ومشي وتزلج بعد الموافقة", "اندماج عظمي كامل للزرعة", "درجة المفصل المنسي المثلى", "تصوير سنوي للمتابعة"], "Clinical Check: 1-Year Milestone Audit", "تدقيق السنة الأولى"],
              ].map((item) => {
                const [week, weekAr, title, titleAr, points, pointsAr, check, checkAr] = item as [
                  string, string, string, string, string[], string[], string, string,
                ];
                return (
                  <article key={week} className="flex flex-col justify-between rounded-xl bg-sand-tint p-5">
                    <div>
                      <p className="mb-3 inline-block rounded bg-clinical-navy px-2 py-1 text-[11px] font-semibold text-white">
                        {loc(lang, week, weekAr)}
                      </p>
                      <h4 className="mb-3 font-semibold text-primary">{loc(lang, title, titleAr)}</h4>
                      <ul className="list-disc space-y-1 ps-4 text-sm text-text-secondary">
                        {(lang === "ar" ? pointsAr : points).map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-4 rounded bg-white p-2 text-[11px] font-semibold text-clinical-navy">{loc(lang, check, checkAr)}</p>
                  </article>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-sand-tint py-space-3xl" id="consultation-checklist">
        <div className="page-wrap grid gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-3 inline-flex rounded-full bg-surgical-teal-subtle px-3 py-1 text-[11px] font-semibold tracking-wider text-surgical-teal uppercase">
              {loc(lang, "Patient Empowerment Tool", "أداة تمكين المريض")}
            </p>
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Questions to Ask Your Orthopaedic Surgeon", "أسئلة لطرحها على جرّاح العظام")}
            </h2>
            <p className="mb-6 text-text-secondary">
              {loc(
                lang,
                "Dr. Feras Ya'ish actively encourages patients to be informed decision-makers. Use this interactive checklist during your consultation at Healthpoint to record key clarifications.",
                "يشجع الدكتور يعيش اتخاذ القرار المستنير. استخدم هذه القائمة خلال استشارتك في هيلث بوينت.",
              )}
            </p>
            <div className="rounded-xl border border-surface-border bg-white p-5">
              <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, "Preparation Advice", "نصيحة التحضير")}</h3>
              <p className="mb-4 text-sm text-text-secondary">
                {loc(lang, "Check items off as you discuss them. You can print this personalized list ahead of your visit.", "أشّر على البنود أثناء النقاش. يمكنك طباعة قائمتك قبل الزيارة.")}
              </p>
              <div className="flex gap-2">
                <button className="rounded bg-clinical-navy px-4 py-2 text-[12px] font-semibold text-white" type="button" onClick={() => window.print()}>
                  {loc(lang, "Print Checklist", "اطبع القائمة")}
                </button>
                <button className="rounded bg-sand-tint px-4 py-2 text-[12px] font-semibold text-clinical-navy" type="button" onClick={() => setChecked([])}>
                  {loc(lang, "Reset Selection", "إعادة التحديد")}
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-surface-border bg-white p-6 lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-headline-sm text-primary">{loc(lang, "Consultation Checklist", "قائمة الاستشارة")}</h3>
              <span className="rounded-full bg-surgical-teal-subtle px-2 py-1 text-[11px] font-bold text-surgical-teal">
                {lang === "ar" ? `${checked.length} من 6 نوقشت` : `${checked.length} of 6 Discussed`}
              </span>
            </div>
            <ul className="space-y-3">
              {questions.map((item, index) => {
                const on = checked.includes(String(index));
                return (
                  <li key={item.q}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-sand-tint p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => setChecked((prev) => (on ? prev.filter((x) => x !== String(index)) : [...prev, String(index)]))}
                        className="mt-0.5"
                      />
                      <span>
                        <span className="block font-semibold text-clinical-navy">{loc(lang, item.q, item.qAr)}</span>
                        <span className="text-text-secondary">{loc(lang, item.hint, item.hintAr)}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-8 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Plain-Language Orthopaedic Glossary", "معجم عظام بلغة مبسطة")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {glossary.map((item) => (
              <article key={item.term} className="rounded-xl border border-surface-border bg-white p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-headline-sm text-primary">{loc(lang, item.term, item.termAr)}</h3>
                  <span className="rounded bg-surgical-teal-subtle px-2 py-0.5 text-[10px] font-semibold text-surgical-teal">
                    {loc(lang, item.tag, item.tagAr)}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint py-space-3xl" id="insurance-desk">
        <div className="page-wrap grid items-center gap-space-lg lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-wider text-clinical-navy uppercase shadow-sm">
              Healthpoint Hospital Zayed Sports City
            </p>
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Insurance Coverage & Hospital Access", "التغطية التأمينية ودخول المستشفى")}
            </h2>
            <p className="mb-5 text-text-secondary">
              {loc(
                lang,
                "Dr. Feras Ya'ish delivers consultations and surgeries at Healthpoint Hospital Abu Dhabi, accredited by the Joint Commission International (JCI). We work seamlessly with major UAE and international health insurance providers.",
                "تُقدَّم الاستشارات والجراحات في مستشفى هيلث بوينت أبوظبي المعتمد من اللجنة الدولية المشتركة (JCI). نعمل مع كبرى شركات التأمين الإماراتية والدولية.",
              )}
            </p>
            <p className="mb-3 text-[12px] font-bold tracking-wider text-clinical-navy uppercase">
              {loc(lang, "Approved Major Insurance Networks:", "شبكات التأمين الرئيسية المعتمدة:")}
            </p>
            <div className="flex flex-wrap gap-2">
              {insurers.map((name) => (
                <span key={name} className="rounded-lg bg-white px-3 py-1.5 text-[12px] font-semibold text-clinical-navy shadow-sm">
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              {loc(lang, "*Prior authorization for surgery is managed directly by Healthpoint's insurance clearance desk prior to your scheduled surgical admission date.", "*تُدار الموافقات المسبقة عبر مكتب التأمين في هيلث بوينت قبل موعد القبول الجراحي.")}
            </p>
          </div>
          <aside className="rounded-2xl bg-clinical-navy p-6 text-white lg:col-span-5">
            <p className="mb-2 text-[11px] tracking-widest text-surgical-teal-light uppercase">
              {loc(lang, "Patient Concierge Service", "خدمة الكونسيرج للمريض")}
            </p>
            <h3 className="mb-4 font-headline-sm">{loc(lang, "Plan Your Hospital Arrival", "خطط لوصولك إلى المستشفى")}</h3>
            <ul className="mb-5 space-y-3 text-sm text-sand-tint/80">
              <li>
                <strong className="text-white">{loc(lang, "Healthpoint Hospital", "مستشفى هيلث بوينت")}</strong>
                <br />
                {loc(lang, "Zayed Sports City, Al Rawdah, Abu Dhabi, UAE", "مدينة زايد الرياضية، الروضة، أبوظبي")}
              </li>
              <li>
                <strong className="text-white">{loc(lang, "Complimentary Valet Parking", "صف سيارات مجاني")}</strong>
                <br />
                {loc(lang, "Available at the main hospital VIP entrance 24/7. Wheelchair escort available immediately upon curbside arrival.", "متاح عند المدخل التنفيذي على مدار الساعة مع مرافقة كرسي متحرك.")}
              </li>
            </ul>
            <a className="inline-flex rounded bg-surgical-teal px-4 py-2.5 text-[13px] font-semibold" href="tel:80077">
              {loc(lang, "Call Appointments Desk: 800 77", "اتصل بمكتب المواعيد: 800 77")}
            </a>
          </aside>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        eyebrowAr="الخطوة التالية"
        title="Ready to begin your care pathway?"
        titleAr="هل أنت جاهز لبدء مسار رعايتك؟"
        body="Request a consultant evaluation and a nurse liaison will help coordinate imaging, insurance, and admission."
        bodyAr="اطلب تقييماً استشارياً وسيتولى منسق التمريض تنسيق التصوير والتأمين والقبول."
      />
    </>
  );
}
