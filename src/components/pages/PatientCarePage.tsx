"use client";

import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { useLanguage } from "@/lib/language";
import { loc, locList } from "@/lib/loc";

const phases = [
  {
    n: "01",
    title: "The Initial Clinical Assessment",
    titleAr: "التقييم السريري الأولي",
    body: "Your journey begins with an exhaustive biomechanical consultation. Dr. Ya'ish conducts physical mobility exams, dynamic load analysis, and in-depth diagnostic imaging reviews.",
    bodyAr:
      "تبدأ الرحلة باستشارة ميكانيكية شاملة. يُجري الدكتور يعيش فحص الحركة وتحليل التحميل ومراجعة التصوير التشخيصي بالتفصيل.",
    points: [
      {
        title: "Precision Biomechanical Scan",
        titleAr: "مسح ميكانيكي دقيق",
        body: "Kinematic assessment evaluating pelvic tilt, limb alignment, joint contractures, and gait mechanics prior to surgical templating.",
        bodyAr: "تقييم حركي لميل الحوض ومحاذاة الطرف وتقلصات المفصل وميكانيكا المشي قبل التخطيط الجراحي.",
      },
      {
        title: "Shared Decision Making",
        titleAr: "قرار مشترك",
        body: "Unrushed discussion reviewing surgical versus conservative alternatives, implant material biology, and personalized functional goals.",
        bodyAr: "نقاش غير متعجل يقارن الخيارات الجراحية والمحافظة، وبيولوجيا مواد الزرعة، والأهداف الوظيفية الشخصية.",
      },
      {
        title: "Medical Optimization",
        titleAr: "تهيئة طبية",
        body: "Cardiology clearance, glycemic stabilization, and hemoglobin optimization to minimize peri-operative infection risks.",
        bodyAr: "موافقة قلبية واستقرار سكر الدم وتحسين الهيموغلوبين لتقليل خطر العدوى حول العملية.",
      },
      {
        title: "Pre-habilitation Protocol",
        titleAr: "بروتوكول التأهيل المسبق",
        body: "Targeted quadriceps and abductor conditioning prescribed 3 weeks prior to surgery to accelerate postoperative recovery.",
        bodyAr: "تمارين موجهة للعضلة الرباعية والمبعدات قبل الجراحة بثلاثة أسابيع لتسريع التعافي.",
      },
    ],
  },
];

const prep = [
  "Raise frequently used items to waist height; remove loose rugs",
  "Install a stable shower chair and non-slip bathroom mats",
  "Arrange a ground-floor sleeping area for the first 7–10 days",
  "Confirm a family companion for hospital discharge transport",
  "Complete pre-admission bloods, ECG, and anesthesia review",
];

const prepAr = [
  "ارفع الأدوات المستخدمة يومياً إلى مستوى الخصر وأزل السجاد السائب",
  "ثبّت كرسياً آمناً للاستحمام وحصائر مانعة للانزلاق",
  "جهّز مكان نوم في الطابق الأرضي لأول 7–10 أيام",
  "أكد مرافقاً عائلياً للنقل عند الخروج من المستشفى",
  "أكمل تحاليل القبول وتخطيط القلب ومراجعة التخدير",
];

const milestones = [
  {
    week: "Week 0–2",
    weekAr: "الأسبوع 0–2",
    title: "Tissue Healing & Independent Walking",
    titleAr: "التئام الأنسجة والمشي المستقل",
    body: "Wound care, walker or crutches, and early range-of-motion under physiotherapy.",
    bodyAr: "العناية بالجرح والمشاية أو العكازات ونطاق حركة مبكر تحت إشراف العلاج الطبيعي.",
  },
  {
    week: "Week 3–6",
    weekAr: "الأسبوع 3–6",
    title: "Endurance & Driving Resumption",
    titleAr: "التحمل واستئناف القيادة",
    body: "Progression off walking aids, stair practice, and typically driving once safe to perform an emergency stop.",
    bodyAr: "التقدم للتخلص من مساعدات المشي، وتمارين السلالم، والقيادة عادة بعد القدرة الآمنة على التوقف الطارئ.",
  },
  {
    week: "Month 2–4",
    weekAr: "الشهر 2–4",
    title: "Strength & Active Recreation",
    titleAr: "القوة والنشاط الترفيهي",
    body: "Quadriceps and gluteal loading, swimming or cycling, and return to desk or light occupational work.",
    bodyAr: "تحميل الرباعية والألوية، والسباحة أو الدراجة، والعودة للعمل المكتبي أو الخفيف.",
  },
  {
    week: "Month 6–12",
    weekAr: "الشهر 6–12",
    title: "Unrestricted Functional Freedom",
    titleAr: "حرية وظيفية غير مقيدة",
    body: "Golf, hiking, prayer positions, and most recreational sport as cleared in clinic.",
    bodyAr: "الغولف والمشي وأوضاع الصلاة ومعظم الرياضات الترفيهية بعد موافقة العيادة.",
  },
];

const glossary = [
  {
    term: "Arthroplasty",
    termAr: "استبدال المفصل",
    body: "Surgical reconstruction or replacement of a diseased joint using precision biocompatible implants.",
    bodyAr: "إعادة بناء أو استبدال مفصل مريض بزرعات دقيقة متوافقة حيوياً.",
  },
  {
    term: "Kinematic Alignment",
    termAr: "المحاذاة الحركية",
    body: "Aligning the replacement to recreate your natural, pre-arthritic joint line rather than an arbitrary 90° mechanical axis.",
    bodyAr: "محاذاة الزرعة لإعادة خط المفصل الطبيعي قبل الخشونة بدلاً من محور ميكانيكي 90 درجة.",
  },
  {
    term: "Unicompartmental Knee",
    termAr: "استبدال الركبة الجزئي",
    body: "Partial knee replacement: only the damaged medial or lateral compartment is resurfaced, leaving cruciate ligaments untouched.",
    bodyAr: "استبدال جزئي: يُعاد تسطيح الحيز المتضرر فقط مع الإبقاء على الأربطة المتصالبة.",
  },
  {
    term: "Direct Anterior Hip (DAA)",
    termAr: "استبدال الورك الأمامي المباشر",
    body: "Hip replacement from the front, working between natural muscle planes without detaching muscles from the femur.",
    bodyAr: "استبدال الورك من الأمام بين مستويات العضلات الطبيعية دون فصلها عن الفخذ.",
  },
  {
    term: "Osteotomy",
    termAr: "قطع العظم",
    body: "Joint-preserving reshaping of bone to shift load away from damaged cartilage onto healthier surfaces.",
    bodyAr: "إعادة تشكيل العظم للحفاظ على المفصل ونقل الحمل عن الغضروف المتضرر.",
  },
  {
    term: "Biocompatibility",
    termAr: "التوافق الحيوي",
    body: "The ability of titanium, cobalt chrome, or ceramic prosthetics to coexist safely within bone and tissue.",
    bodyAr: "قدرة زرعات التيتانيوم أو الكوبالت كروم أو السيراميك على التعايش الآمن داخل العظم والأنسجة.",
  },
];

const questions = [
  "What implant and bearing surface do you recommend for my age and activity?",
  "Will my surgery be conventional, patient-specific, or robotic-assisted?",
  "What is the expected length of stay at Healthpoint?",
  "When can I walk, climb stairs, drive, and return to work?",
  "How are blood clots, infection, and stiffness prevented?",
  "Who is my nurse liaison before and after admission?",
];

const questionsAr = [
  "ما الزرعة وسطح الاحتكاك المناسبان لعمري ومستوى نشاطي؟",
  "هل ستكون الجراحة تقليدية أم مخصصة أم بمساعدة الروبوت؟",
  "ما مدة الإقامة المتوقعة في هيلث بوينت؟",
  "متى أستطيع المشي وصعود السلالم والقيادة والعودة للعمل؟",
  "كيف تُمنع الجلطات والعدوى والتيبس؟",
  "من منسق التمريض قبل القبول وبعده؟",
];

export function PatientCarePage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-alabaster-warm py-space-3xl">
        <div className="page-wrap grid items-end gap-space-lg lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal uppercase">
              {loc(lang, "Patient Care Guide", "دليل رعاية المريض")}
            </p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">
              {loc(lang, "Your Surgical Care & Recovery Journey", "رحلة الرعاية الجراحية والتعافي")}
            </h1>
            <p className="mt-4 max-w-2xl text-text-secondary">
              {loc(
                lang,
                "Clear, step-by-step guidance from initial diagnostic evaluation through advanced robotic intervention and post-operative rehabilitation at Healthpoint Hospital Abu Dhabi.",
                "إرشاد واضح خطوة بخطوة من التقييم التشخيصي حتى التدخل الروبوتي وإعادة التأهيل بعد العملية في مستشفى هيلث بوينت أبوظبي.",
              )}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-4">
            <div className="rounded-xl border border-surface-border bg-white p-4">
              <p className="text-[11px] tracking-wider text-text-secondary uppercase">
                {loc(lang, "Nurse liaison", "منسق التمريض")}
              </p>
              <p className="font-serif text-2xl text-primary">24/7</p>
            </div>
            <div className="rounded-xl border border-surface-border bg-white p-4">
              <p className="text-[11px] tracking-wider text-text-secondary uppercase">
                {loc(lang, "Typical walk", "المشي المعتاد")}
              </p>
              <p className="font-serif text-2xl text-primary">{loc(lang, "Day 0", "اليوم 0")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-8 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "The 5 Distinct Phases of Your Care", "المراحل الخمس لرعايتك")}
          </h2>
          {phases.map((phase) => (
            <article key={phase.title} className="mb-8">
              <p className="text-[12px] font-semibold tracking-widest text-surgical-teal">{phase.n}</p>
              <h3 className="mb-3 font-headline-sm text-[1.4rem] text-primary">{loc(lang, phase.title, phase.titleAr)}</h3>
              <p className="mb-5 max-w-3xl text-text-secondary">{loc(lang, phase.body, phase.bodyAr)}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {phase.points.map((point) => (
                  <div key={point.title} className="rounded-xl border border-surface-border bg-white p-5">
                    <h4 className="mb-2 font-semibold text-primary">{loc(lang, point.title, point.titleAr)}</h4>
                    <p className="text-sm text-text-secondary">{loc(lang, point.body, point.bodyAr)}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="grid gap-5 lg:grid-cols-2" id="pathway-prep">
            <article className="rounded-2xl bg-clinical-navy p-6 text-white">
              <h3 className="mb-3 font-headline-sm text-white">{loc(lang, "Pre-Operative Preparation", "التحضير قبل العملية")}</h3>
              <p className="mb-4 text-sm text-sand-tint/75">
                {loc(
                  lang,
                  "Thorough preparation at home and clinical pre-clearance guarantee smooth hospital admission and safe discharge.",
                  "التحضير الجيد في المنزل والموافقات الطبية يضمنان قبولاً سلساً وخروجاً آمناً من المستشفى.",
                )}
              </p>
              <ul className="space-y-2 text-sm text-sand-tint/85">
                {locList(lang, prep, prepAr).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            <article className="overflow-hidden rounded-2xl border border-surface-border bg-white">
              <Image src="/images/education-or.png" alt="Healthpoint surgical suite" width={900} height={560} className="h-56 w-full object-cover" />
              <div className="p-5" id="pathway-hospital">
                <h3 className="mb-2 font-headline-sm text-primary">
                  {loc(lang, "The Day of Surgery at Healthpoint Hospital", "يوم الجراحة في مستشفى هيلث بوينت")}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {loc(
                    lang,
                    "Surgical suites configured with robotic navigation and HEPA air purification. From day admissions to the sterile theatre, comfort and security remain paramount.",
                    "غرف عمليات بملاحة روبوتية وتنقية هواء HEPA. من قبول اليوم الواحد إلى غرفة العمليات المعقمة تبقى الراحة والأمان أولوية.",
                  )}
                </p>
              </div>
            </article>
          </div>

          <div className="mt-5 grid items-center gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-surface-border bg-white p-6">
              <h3 className="mb-2 font-headline-sm text-primary">
                {loc(lang, "In-Hospital Recovery & VIP Amenities", "التعافي داخل المستشفى وخدمات VIP")}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {loc(
                  lang,
                  "Healthpoint provides a five-star clinical environment designed to minimize anxiety, foster rest, and deliver attentive orthopaedic rehabilitation care — including sunlit spaces for gentle mobility strolls.",
                  "يوفر هيلث بوينت بيئة سريرية فاخرة تقلل القلق وتعزز الراحة وتقدم إعادة تأهيل عظمية دقيقة — مع مساحات مشمسة للمشي الخفيف.",
                )}
              </p>
            </article>
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/education-lounge.png" alt="Patient recovery lounge" width={900} height={560} className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl" id="pathway-milestones">
        <div className="page-wrap">
          <h3 className="mb-6 font-headline-lg text-[1.8rem] text-primary">
            {loc(lang, "Post-Operative Rehabilitation Milestones", "محطات إعادة التأهيل بعد العملية")}
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <article key={item.week} className="rounded-xl border border-surface-border bg-white p-5">
                <p className="mb-2 text-[11px] tracking-wider text-surgical-teal uppercase">{loc(lang, item.week, item.weekAr)}</p>
                <h4 className="mb-2 font-semibold text-primary">{loc(lang, item.title, item.titleAr)}</h4>
                <p className="text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-3xl" id="consultation-checklist">
        <div className="page-wrap grid gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Questions to Ask Your Orthopaedic Surgeon", "أسئلة لطرحها على جرّاح العظام")}
            </h2>
            <p className="mb-6 text-text-secondary">
              {loc(
                lang,
                "Dr. Ya'ish encourages informed decision-making. Use this checklist during your consultation at Healthpoint.",
                "يشجع الدكتور يعيش اتخاذ القرار المستنير. استخدم هذه القائمة خلال استشارتك في هيلث بوينت.",
              )}
            </p>
            <ul className="space-y-3">
              {locList(lang, questions, questionsAr).map((q) => (
                <li key={q} className="rounded-lg border border-surface-border bg-white p-3 text-sm">
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-surface-border bg-white p-6 lg:col-span-5">
            <h3 className="mb-3 font-headline-sm text-primary">{loc(lang, "Consultation etiquette", "آداب الاستشارة")}</h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {loc(
                lang,
                "Bring prior imaging on disc or portal access, implant stickers from previous surgery if relevant, and an updated medication list. Dedicated clinical nurse liaison is assigned to guide you before, during, and after surgical admission.",
                "أحضر التصوير السابق على قرص أو عبر البوابة، وملصقات الزرعة من جراحة سابقة إن وُجدت، وقائمة أدوية محدّثة. يُخصص منسق تمريض سريري لإرشادك قبل القبول وأثناءه وبعده.",
              )}
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-sand-tint/60 py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-8 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Plain-Language Orthopaedic Glossary", "معجم عظام بلغة مبسطة")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {glossary.map((item) => (
              <article key={item.term} className="rounded-xl border border-surface-border bg-white p-5">
                <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.term, item.termAr)}</h3>
                <p className="text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-3xl" id="insurance-desk">
        <div className="page-wrap grid gap-space-lg lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Insurance Coverage & Hospital Access", "التغطية التأمينية ودخول المستشفى")}
            </h2>
            <p className="text-text-secondary">
              {loc(
                lang,
                "Consultations and surgeries are delivered at Healthpoint Hospital Abu Dhabi, accredited by the Joint Commission International (JCI). Prior authorization is managed by Healthpoint's insurance clearance desk before surgical admission.",
                "تُقدَّم الاستشارات والجراحات في مستشفى هيلث بوينت أبوظبي المعتمد من اللجنة الدولية المشتركة (JCI). تُدار الموافقات المسبقة عبر مكتب التأمين قبل القبول الجراحي.",
              )}
            </p>
          </div>
          <aside className="rounded-2xl bg-clinical-navy p-6 text-white lg:col-span-5">
            <h3 className="mb-2 font-headline-sm">{loc(lang, "Plan Your Hospital Arrival", "خطط لوصولك إلى المستشفى")}</h3>
            <p className="mb-4 text-sm text-sand-tint/75">
              {loc(lang, "Zayed Sports City, Al Rawdah, Abu Dhabi. Toll-free 800 77.", "مدينة زايد الرياضية، الروضة، أبوظبي. الرقم المجاني 800 77.")}
            </p>
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
