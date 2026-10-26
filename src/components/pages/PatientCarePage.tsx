"use client";

import Image from "next/image";
import { AuthorByline } from "@/components/AuthorByline";
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
    term: "Knee Ligament Reconstruction",
    termAr: "إعادة بناء أربطة الركبة",
    tag: "Knee Sports Injuries",
    tagAr: "إصابات الركبة الرياضية",
    body: "Anatomical reconstruction of the ACL and associated knee ligaments after rupture, restoring stability for daily function and return to sport when appropriate.",
    bodyAr: "إعادة بناء تشريحي للرباط المتصالب الأمامي والأربطة المرتبطة بعد التمزق لاستعادة الثبات للحياة اليومية والرياضة عند المناسبة.",
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

export function PatientCarePage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-sand-tint py-space-3xl lg:py-space-4xl">
        <div className="page-wrap grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] tracking-wider text-clinical-navy uppercase shadow-sm">
              {loc(lang, "Comprehensive Clinical Pathway", "مسار سريري شامل")}
            </p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">
              {loc(lang, "Your Surgical Care & Recovery Journey", "رحلة الرعاية الجراحية والتعافي")}
            </h1>
            <AuthorByline />
            <p className="mt-4 max-w-2xl text-text-secondary">
              {loc(
                lang,
                "Clear, step-by-step guidance curated by Dr. Feras Ya'ish from your initial diagnostic evaluation through robotic-assisted or patient-specific joint replacement and structured post-operative rehabilitation. Appointments and surgery are arranged at Healthpoint Hospital, Zayed Sports City.",
                "إرشاد واضح خطوة بخطوة من التقييم التشخيصي حتى التدخل الروبوتي وإعادة التأهيل بعد العملية في مستشفى هيلث بوينت أبوظبي.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                ["#pathway-prep", "Pre-Op Preparation", "التحضير قبل العملية"],
                ["#pathway-hospital", "Hospital Amenities", "خدمات المستشفى"],
                ["#pathway-milestones", "Recovery Milestones", "محطات التعافي"],
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
                <Image src="/images/education-or.webp" alt="Ultra-clean laminar air flow theatres at Healthpoint" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
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
                  {loc(lang, "The Day of Surgery", "يوم الجراحة")}
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
                    <p className="text-text-secondary">{loc(lang, "Haptic robotic boundaries align components within 0.5mm accuracy for minimal soft-tissue trauma when robotic assistance is selected.", "حدود لمسية روبوتية تحاذي المكوّنات بدقة 0.5 مم مع أقل رض للأنسجة عند اختيار المساعدة الروبوتية.")}</p>
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
                  {loc(lang, "In-Hospital Recovery", "التعافي داخل المستشفى")}
                </h3>
                <p className="mb-5 text-sm text-text-secondary">
                  {loc(
                    lang,
                    "Inpatient recovery is arranged in a calm clinical environment with dedicated orthopaedic rehabilitation. Appointments and admission are coordinated at Healthpoint Hospital.",
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
                <Image src="/images/healthpoint-building.webp" alt="Healthpoint Hospital, Zayed Sports City, Abu Dhabi" fill className="object-cover object-center" sizes="(min-width: 1024px) 50vw, 100vw" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-clinical-slate-deep/80 via-transparent to-transparent p-6 text-white">
                  <p className="text-[11px] font-bold tracking-wider text-surgical-teal-light uppercase">
                    {loc(lang, "Healthpoint Hospital Abu Dhabi", "مستشفى هيلث بوينت أبوظبي")}
                  </p>
                  <p className="mt-1 text-sm">
                    {loc(lang, "Zayed Sports City, Abu Dhabi.", "مدينة زايد الرياضية، أبوظبي.")}
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
