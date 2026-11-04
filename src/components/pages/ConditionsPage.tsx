"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { BookButton } from "@/components/BookButton";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { conditionCopy, regionCopy } from "@/lib/ar-copy";
import {
  conditions as conditionPages,
  type ConditionPresentation,
  type ConditionRegion,
} from "@/lib/conditions";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

type Concern = "chronic" | "sports" | "revision" | "opinion";
type AreaFilter = "all" | "hip" | "knee" | "trauma";
type IntentFilter = "all" | "replacement" | "preservation" | "revision";

const anatomies: { id: ConditionRegion; body: string; bodyAr: string }[] = [
  {
    id: "Hip Joint",
    body: "Osteoarthritis, femoral head necrosis, hip dysplasia, groin stiffness, and past hip surgery concerns.",
    bodyAr: "خشونة الورك، نخر رأس الفخذ، خلل التنسج، تيبس المغبن، ومخاوف جراحة الورك السابقة.",
  },
  {
    id: "Knee Joint",
    body: "Compartmental wear, meniscal tears, ACL instability, robotic alignment, and joint replacement revision.",
    bodyAr: "تآكل الحجرات، تمزق الهلالة، عدم استقرار الرباط المتصالب، المحاذاة الروبوتية، ومراجعة الاستبدال.",
  },
  {
    id: "Trauma & Other",
    body: "Acute peri-articular fractures, non-union malalignments, prosthetic dislocation, and specialized opinions.",
    bodyAr: "كسور مفصلية حادة، التواء غير ملتئم، خلع الزرعة، وآراء تخصصية.",
  },
];

const concerns: { id: Concern; title: string; titleAr: string; body: string; bodyAr: string }[] = [
  {
    id: "chronic",
    title: "Ongoing Pain & Stiffness",
    titleAr: "ألم وتيبس مستمران",
    body: "Gradual onset, mobility restriction, bone-on-bone sensation, night discomfort.",
    bodyAr: "بداية تدريجية، تقييد الحركة، إحساس عظم على عظم، وعدم راحة ليلية.",
  },
  {
    id: "sports",
    title: "Sports / Knee Injury",
    titleAr: "إصابة الركبة الرياضية",
    body: "Sudden twist, pop, joint instability, ligament tear, or traumatic impact.",
    bodyAr: "التواء مفاجئ، طقطقة، عدم استقرار المفصل، تمزق رباط، أو صدمة.",
  },
  {
    id: "revision",
    title: "A Previous Replacement That Isn't Right",
    titleAr: "استبدال سابق غير مناسب",
    body: "Persistent post-implant pain, loosening, mechanical clunking, or infection concern.",
    bodyAr: "ألم مستمر بعد الزرعة، ارتخاء، صوت ميكانيكي، أو قلق من العدوى.",
  },
  {
    id: "opinion",
    title: "Not Sure / Second Opinion",
    titleAr: "غير متأكد / رأي ثانٍ",
    body: "Seeking UK-trained surgical confirmation before proceeding with recommended procedure.",
    bodyAr: "طلب تأكيد جراحي بريطاني التدريب قبل المضي في الإجراء المقترح.",
  },
];

function concernToPresentation(concern: Concern): ConditionPresentation | null {
  if (concern === "chronic") return "Osteoarthritis / Joint degeneration";
  if (concern === "sports") return "Sports injury / instability";
  if (concern === "revision") return "Failed previous surgery";
  return null;
}

const portfolio = [
  { area: "hip" as const, intent: "revision" as const, anatomy: "Hip Joint" as const, title: "Revision Hip & Knee Surgery", titleAr: "مراجعة الورك والركبة", body: "Extraction of failed, loose, or infected implants with bone augments, modular stems, and hinged reconstruction.", bodyAr: "إزالة الزرعات الفاشلة أو المرتخية أو المصابة مع دعائم عظمية وسيقان معيارية وإعادة بناء مفصلية.", href: "/treatments/revision-surgery", tags: ["PJI Protocols", "Trabecular Cones"] },
  { area: "knee" as const, intent: "replacement" as const, anatomy: "Knee Joint" as const, title: "Total Knee Arthroplasty", titleAr: "استبدال الركبة الكامل", body: "Complete resurfacing with anatomical kinematic alignment to re-establish natural soft-tissue tension balance.", bodyAr: "إعادة تسطيح كاملة بمحاذاة حركية تشريحية لاستعادة توازن الأنسجة الرخوة.", href: "/treatments/total-knee-replacement", tags: ["Kinematic Alignment", "Rapid Recovery"] },
  { area: "knee" as const, intent: "replacement" as const, anatomy: "Knee Joint" as const, title: "Robotic-Assisted Joint Replacement", titleAr: "استبدال المفصل بمساعدة الروبوت", body: "Pre-computed 3D CT surgical modeling paired with intra-operative haptic guidance for sub-millimeter resection accuracy.", bodyAr: "نمذجة مقطعية ثلاثية الأبعاد مع توجيه لمسي أثناء الجراحة لدقة قطع دون المليمتر.", href: "/treatments/robotic-arthroplasty", tags: ["Haptic Guidance", "3D CT Plan"] },
  { area: "knee" as const, intent: "preservation" as const, anatomy: "Knee Joint" as const, title: "Unicompartmental (Partial) Knee", titleAr: "استبدال الركبة الجزئي", body: "Isolated resurfacing of only the worn compartment, preserving cruciate ligaments and proprioception.", bodyAr: "إعادة تسطيح الحيز المتآكل فقط مع الحفاظ على الأربطة المتصالبة والإحساس العميق.", href: "/treatments/partial-knee", tags: ["Ligament Sparing", "Day Case"] },
  { area: "knee" as const, intent: "preservation" as const, anatomy: "Knee Joint" as const, title: "Knee Ligament Reconstruction", titleAr: "إعادة بناء أربطة الركبة", body: "Anatomical ACL reconstruction and associated ligament repair after knee sports injury.", bodyAr: "إعادة بناء تشريحي للرباط المتصالب وإصلاح الأربطة المرتبطة بعد إصابة الركبة الرياضية.", href: "/treatments/ligament-reconstruction", tags: ["ACL", "Knee Sports Injuries"] },
  { area: "knee" as const, intent: "preservation" as const, anatomy: "Knee Joint" as const, title: "Knee Arthroscopy", titleAr: "منظار الركبة", body: "Minimally invasive meniscal preservation, cartilage work, and keyhole assessment of the knee.", bodyAr: "حفظ الهلالة طفيف التوغل وعمل الغضروف وتقييم الركبة بثقب المفتاح.", href: "/treatments/arthroscopy", tags: ["Meniscal Salvage", "Keyhole"] },
  { area: "trauma" as const, intent: "preservation" as const, anatomy: "Trauma & Other" as const, title: "Complex Trauma & Malunion Repair", titleAr: "إصلاح الرضوض المعقدة والالتئام المعيب", body: "ORIF for complex articular fractures, pelvic trauma stabilization, and surgical revision of non-healing bones.", bodyAr: "تثبيت مفتوح للكسور المفصلية المعقدة، واستقرار رضوض الحوض، ومراجعة العظام غير الملتئمة.", href: "/treatments/trauma", tags: ["LCP Fixation", "Malunion"] },
];

const mandated = [
  {
    q: "What are my non-surgical alternatives before considering joint replacement?",
    qAr: "ما البدائل غير الجراحية قبل التفكير في استبدال المفصل؟",
    hint: "Explores targeted physiotherapy, hyaluronic acid viscosupplementation, PRP, weight management, and activity modification.",
    hintAr: "يشمل العلاج الطبيعي الموجه، وحقن الهيالورونيك، والبلازما، وإدارة الوزن، وتعديل النشاط.",
  },
  {
    q: "How does my specific anatomy impact the choice between partial and total knee replacement?",
    qAr: "كيف يؤثر تشريحي على الاختيار بين استبدال الركبة الجزئي والكامل؟",
    hint: "Assesses anterior cruciate ligament integrity, patellofemoral cartilage condition, and angular limb deformity degrees.",
    hintAr: "يقيّم سلامة الرباط المتصالب الأمامي وغضروف الرضفة ودرجة تشوه الطرف.",
  },
  {
    q: "What surgical approach and implant design are recommended for my activity goals?",
    qAr: "أي نهج جراحي وتصميم زرعة يناسب أهداف نشاطي؟",
    hint: "Evaluates ceramic-on-crosslinked-polyethylene bearings, robotic or patient-specific planning, and return to activity.",
    hintAr: "يقيّم سطوح السيراميك والتخطيط الروبوتي أو المخصص للمريض والعودة للنشاط.",
  },
  {
    q: "What does the post-operative physiotherapy pathway look like?",
    qAr: "كيف يبدو مسار العلاج الطبيعي بعد العملية في هيلث بوينت؟",
    hint: "Covers same-day mobilization protocol, inpatient recovery milestones, and outpatient rehabilitation duration.",
    hintAr: "يشمل التحريك في يوم الجراحة ومحطات التعافي داخل المستشفى ومدة التأهيل الخارجي.",
  },
  {
    q: "If this is a revision, what were the contributing factors to my previous joint failure?",
    qAr: "إن كانت مراجعة، ما عوامل فشل المفصل السابق؟",
    hint: "Addresses polyethylene wear debris, aseptic component loosening, infection markers, or ligamentous imbalance.",
    hintAr: "يتناول تآكل البولي إيثيلين وارتخاء المكوّنات وعلامات العدوى أو اختلال الأربطة.",
  },
];

const techniqueRows = [
  {
    dim: "What the approach is",
    dimAr: "ما هو الأسلوب",
    robotic: "A surgeon-controlled robotic arm system that integrates real-time optical tracking arrays to guide bone resection saw blades within strict pre-defined haptic safety envelopes.",
    roboticAr: "ذراع روبوتي يتحكم به الجرّاح مع تتبع بصري لحظي لتوجيه شفرات القطع ضمن حدود لمسية آمنة محددة مسبقاً.",
    psi: "Single-use sterile surgical cutting blocks manufactured specifically for the patient's exact bone contours using pre-operative high-resolution imaging.",
    psiAr: "قوالب قطع معقمة لمرة واحدة تُصنع وفق محيط عظم المريض من تصوير عالي الدقة قبل الجراحة.",
    conventional: "Standardized modular surgical instrumentation guided by femoral intramedullary rods, extramedullary tibial guides, and mechanical caliper measurements.",
    conventionalAr: "أدوات معيارية موجَّهة بقضبان داخل نقي الفخذ وأدلة قصبة خارج النقي وقياسات فرجار ميكانيكية.",
  },
  {
    dim: "Pre-operative planning required",
    dimAr: "التخطيط المطلوب قبل الجراحة",
    robotic: "Low-dose volumetric CT scan of the hip, knee, and ankle joints converted into an interactive 3D virtual bone model for digital implant pre-sizing.",
    roboticAr: "مقطعي حجمي منخفض الجرعة للورك والركبة والكاحل يُحوَّل إلى نموذج عظمي ثلاثي لتقدير حجم الزرعة.",
    psi: "Comprehensive specialized pre-operative MRI or thin-slice CT scan, requiring 2 to 4 weeks of engineering lead time for additive block manufacturing.",
    psiAr: "رنين أو مقطعي رقيق الشرائح قبل الجراحة، مع مهلة هندسية 2 إلى 4 أسابيع لطباعة القوالب.",
    conventional: "Standard calibrated weight-bearing long-leg radiographs and orthogonal views; digital templating performed directly on calibrated digital X-rays.",
    conventionalAr: "أشعة ساق طويلة معايرة بتحمل الوزن وإطلالات متعامدة؛ قوالب رقمية مباشرة على الأشعة.",
  },
  {
    dim: "Surgical execution mechanism",
    dimAr: "آلية التنفيذ الجراحي",
    robotic: "Continuous dynamic intra-operative feedback; tracker pins assess real-time gap balance through the full range of motion before any bone cuts are completed.",
    roboticAr: "تغذية راجعة ديناميكية أثناء الجراحة؛ دبابيس التتبع تقيّم توازن الفراغ عبر مدى الحركة قبل إتمام القطع.",
    psi: "Custom polymer jigs are physically keyed directly onto the patient's osteophytes and articular bone surfaces to orient conventional saw blades.",
    psiAr: "قوالب بوليمر مخصصة تُثبَّت على بروزات العظم والأسطح المفصلية لتوجيه شفرات المنشار التقليدية.",
    conventional: "Surgeon assesses soft tissue laxity manually using tensioners and spacer blocks, aligning standard metal cutting blocks with anatomical bony landmarks.",
    conventionalAr: "يقيّم الجرّاح رخاوة الأنسجة يدوياً بالشدادات والفواصل ويحاذي قوالب القطع المعدنية مع المعالم العظمية.",
  },
  {
    dim: "Ideal anatomical indications",
    dimAr: "الاستطبابات التشريحية الأنسب",
    robotic: "Complex coronal/sagittal deformities, extra-articular femoral shaft curvature, retained hardware obstructing intramedullary canals, partial knees.",
    roboticAr: "تشوهات إكليلية/سهمية معقدة، انحناء عمود الفخذ خارج المفصل، معدن متبقٍ يسد القناة، وركبة جزئية.",
    psi: "Patients with previous femoral hardware or intramedullary nails where standard rods cannot be safely inserted; predictable anatomy.",
    psiAr: "مرضى بمعدن فخذي سابق أو مسامير داخل النقي حيث لا يمكن إدخال القضبان بأمان؛ تشريح متوقع.",
    conventional: "Standard severe joint degeneration, severe bone defects where custom jigs cannot seat reliably, or urgent trauma reconstruction settings.",
    conventionalAr: "تآكل مفصلي شديد معياري، عيوب عظمية لا تستقر عليها القوالب المخصصة، أو إعادة بناء رضّي عاجل.",
  },
];

export function ConditionsPage() {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [anatomy, setAnatomy] = useState<ConditionRegion | null>(null);
  const [concern, setConcern] = useState<Concern | null>(null);
  const [area, setArea] = useState<AreaFilter>("all");
  const [intent, setIntent] = useState<IntentFilter>("all");
  const [checked, setChecked] = useState<string[]>(["0", "1", "2", "3", "4"]);
  const [custom, setCustom] = useState("");
  const [extras, setExtras] = useState<string[]>([]);

  const questionList = useMemo(
    () => [
      ...mandated.map((item) => loc(lang, item.q, item.qAr)),
      ...extras,
    ],
    [lang, extras],
  );

  const matchedConditions = useMemo(() => {
    if (!anatomy) return [];
    const presentation = concern ? concernToPresentation(concern) : null;
    if (concern === "opinion" || !presentation) {
      const byRegion = conditionPages.filter((item) => item.region === anatomy);
      return byRegion.length ? byRegion : conditionPages;
    }
    const exact = conditionPages.filter((item) => item.region === anatomy && item.presentation === presentation);
    if (exact.length) return exact;
    const byPresentation = conditionPages.filter((item) => item.presentation === presentation);
    if (byPresentation.length) return byPresentation;
    return conditionPages.filter((item) => item.region === anatomy);
  }, [anatomy, concern]);

  const filteredPortfolio = useMemo(
    () => portfolio.filter((item) => (area === "all" || item.area === area) && (intent === "all" || item.intent === intent)),
    [area, intent],
  );

  function selectJoint(id: ConditionRegion) {
    setAnatomy(id);
    setStep(2);
  }

  function selectConcern(id: Concern) {
    setConcern(id);
    setStep(3);
  }

  async function copySummary() {
    const selected = checked.map((id) => questionList[Number(id)]).filter(Boolean);
    const text = selected.join("\n• ");
    try {
      await navigator.clipboard.writeText(text ? `• ${text}` : "");
    } catch {
      /* clipboard may be blocked */
    }
  }

  const pill = (active: boolean) =>
    `rounded px-3 py-1.5 text-[12px] font-semibold ${active ? "bg-clinical-navy text-white" : "bg-sand-tint text-text-secondary"}`;

  return (
    <>
      <section className="relative overflow-hidden bg-clinical-navy py-space-3xl text-white">
        <div className="page-wrap grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
              {loc(lang, "Evidence-led joint reconstruction", "إعادة بناء المفاصل المبنية على الأدلة")}
            </p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">
              {loc(lang, "Precision Orthopaedic Surgical Solutions", "حلول جراحة عظام دقيقة")}
            </h1>
            <AuthorByline colorClass="text-sand-tint/90" showCredentials />
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
          <div className="relative overflow-hidden rounded-xl bg-clinical-navy shadow-xl lg:col-span-5">
            <Image
              src="/images/education-or.webp"
              alt={loc(lang, "Consultant orthopaedic practice", "ممارسة استشارية لجراحة العظام")}
              width={900}
              height={640}
              className="h-80 w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinical-slate-deep via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-white/10 p-space-md backdrop-blur-md">
              <span className="font-label-md text-label-md text-white">
                {loc(lang, "Consultant Orthopaedic Practice", "ممارسة استشارية لجراحة العظام")}
              </span>
              <span className="font-label-md text-label-md text-surgical-teal-light">Zayed Sports City</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint py-space-3xl" id="treatment-explorer">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
            {loc(lang, "Guided Clinical Pathway", "مسار سريري موجَّه")}
          </p>
          <h2 className="mb-2 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Interactive Treatment Explorer", "مستكشف العلاج التفاعلي")}
          </h2>
          <p className="mb-8 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Select your anatomical focus and clinical presentation to discover evidence-based intervention pathways and educational procedural briefs.",
              "اختر التركيز التشريحي والعرض السريري لاكتشاف مسارات التدخل المبنية على الأدلة.",
            )}
          </p>
          <div className="rounded-xl border border-surface-border bg-white p-5 md:p-8">
            <div className="mb-6 grid grid-cols-3 gap-2">
              {[
                [1, "Anatomical Focus", "التركيز التشريحي"],
                [2, "Clinical Concern", "القلق السريري"],
                [3, "Curated Recommendations", "التوصيات المختارة"],
              ].map(([n, en, ar]) => (
                <div
                  key={n}
                  className={`flex items-center gap-2 rounded p-2 ${step === n ? "bg-surgical-teal-subtle text-surgical-teal" : "bg-sand-tint text-text-secondary"}`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${step === n ? "bg-surgical-teal text-white" : "bg-white"}`}>
                    {n}
                  </span>
                  <span className="hidden text-[12px] font-bold sm:inline">{loc(lang, String(en), String(ar))}</span>
                </div>
              ))}
            </div>

            {step === 1 ? (
              <div>
                <p className="mb-4 font-headline-sm text-primary">{loc(lang, "Step 1: Which joint or clinical concern?", "الخطوة 1: أي مفصل أو قلق سريري؟")}</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {anatomies.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectJoint(item.id)}
                      className="rounded-lg bg-sand-tint p-5 text-start transition hover:bg-surgical-teal-subtle"
                    >
                      <h3 className="mb-2 font-headline-sm text-primary">{regionCopy(item.id, lang)}</h3>
                      <p className="text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-headline-sm text-primary">{loc(lang, "Step 2: What brings you here?", "الخطوة 2: ما الذي أتى بك؟")}</p>
                  <button className="text-[12px] font-semibold text-surgical-teal" type="button" onClick={() => setStep(1)}>
                    {loc(lang, "Back to Step 1", "العودة للخطوة 1")}
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {concerns.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectConcern(item.id)}
                      className="rounded-lg bg-sand-tint p-4 text-start transition hover:bg-surgical-teal-subtle"
                    >
                      <h3 className="mb-1 text-sm font-semibold text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                      <p className="text-sm text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="font-headline-sm text-primary">{loc(lang, "Step 3: Curated Clinical Information", "الخطوة 3: معلومات سريرية مختارة")}</p>
                  <button className="text-[12px] font-semibold text-surgical-teal" type="button" onClick={() => setStep(2)}>
                    {loc(lang, "Back to Step 2", "العودة للخطوة 2")}
                  </button>
                </div>
                <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {matchedConditions.map((item) => (
                    <article key={item.slug} className="rounded-xl border border-surgical-teal/25 bg-sand-tint p-5">
                      <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{regionCopy(item.region, lang)}</p>
                      <h3 className="mb-2 font-headline-sm text-primary">{conditionCopy(item, lang).short}</h3>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">{conditionCopy(item, lang).summary}</p>
                      <Link className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy" href={`/conditions/${item.slug}`}>
                        {t.conditionGuide}
                        <ExternalArrow />
                      </Link>
                    </article>
                  ))}
                </div>
                <button
                  className="text-[12px] font-semibold text-text-secondary"
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setAnatomy(null);
                    setConcern(null);
                  }}
                >
                  {loc(lang, "Restart Explorer", "أعد تشغيل المستكشف")}
                </button>
              </div>
            ) : null}

            <p className="mt-6 rounded-lg bg-surface-container px-4 py-3 text-sm text-text-secondary">
              {lang === "ar" ? (
                <>
                  <strong className="text-primary">ملاحظة سريرية:</strong> هذه معلومات تثقيفية عامة. لا تقدّم نصيحة طبية أو تشخيصاً أو تقييماً للأهلية. الاستشارة الحضورية والتصوير هما ما يحددان ما يناسبك.
                </>
              ) : (
                <>
                  <strong className="text-primary">Clinical Notice:</strong> This is general educational information. It does not provide medical advice, diagnosis, or candidacy scoring. Only an in-person clinical consultation and radiographic evaluation can determine what is appropriate for you.
                </>
              )}
            </p>
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

      <section className="bg-alabaster-warm py-space-3xl">
        <div className="page-wrap">
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-[11px] tracking-wider text-surgical-teal uppercase">
                {loc(lang, "Procedural Directory", "دليل الإجراءات")}
              </p>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {loc(lang, "Surgical & Reconstructive Portfolio", "المحفظة الجراحية وإعادة البناء")}
              </h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="mb-1 text-[12px] font-semibold text-text-secondary">{loc(lang, "Filter by Joint Focus:", "تصفية حسب المفصل:")}</p>
                <div className="flex flex-wrap gap-1">
                  {(["all", "hip", "knee", "trauma"] as const).map((id) => (
                    <button key={id} type="button" className={pill(area === id)} onClick={() => setArea(id)}>
                      {id === "all" ? loc(lang, "All", "الكل") : id === "hip" ? loc(lang, "Hip", "الورك") : id === "knee" ? loc(lang, "Knee", "الركبة") : loc(lang, "Trauma", "الرضوض")}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-1 text-[12px] font-semibold text-text-secondary">{loc(lang, "Filter by Surgical Intent:", "تصفية حسب القصد الجراحي:")}</p>
                <div className="flex flex-wrap gap-1">
                  {(["all", "replacement", "preservation", "revision"] as const).map((id) => (
                    <button key={id} type="button" className={pill(intent === id)} onClick={() => setIntent(id)}>
                      {id === "all"
                        ? loc(lang, "All Intents", "كل المقاصد")
                        : id === "replacement"
                          ? loc(lang, "Replacement", "الاستبدال")
                          : id === "preservation"
                            ? loc(lang, "Preservation & Repair", "الحفظ والإصلاح")
                            : loc(lang, "Revision", "المراجعة")}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPortfolio.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-surface-border bg-white p-5 transition hover:border-surgical-teal/40"
              >
                <p className="mb-2 text-[11px] tracking-wider text-surgical-teal uppercase">{regionCopy(item.anatomy, lang)}</p>
                <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="mb-3 text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                <div className="mb-4 flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded bg-sand-tint px-2 py-0.5 text-[11px] text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[13px] font-semibold text-clinical-navy">{t.exploreTechnique}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint py-space-3xl" id="technique-comparison">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
            {loc(lang, "Objective Surgical Engineering", "هندسة جراحية موضوعية")}
          </p>
          <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Technique Comparison Table", "جدول مقارنة التقنيات")}
          </h2>
          <p className="mb-6 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Orthopaedic surgery utilizes distinct operational methodologies depending on patient-specific bone anatomy, previous surgeries, and biomechanical stability requirements.",
              "تستخدم جراحة العظام أساليب مختلفة حسب تشريح العظم والجراحات السابقة ومتطلبات الاستقرار الميكانيكي.",
            )}
          </p>
          <div className="overflow-x-auto rounded-xl border border-surface-border bg-white">
            <table className="min-w-[920px] w-full text-start text-sm">
              <thead className="bg-clinical-navy text-white">
                <tr>
                  <th className="px-4 py-3">{loc(lang, "Evaluation Dimension", "بعد التقييم")}</th>
                  <th className="bg-primary-container px-4 py-3">
                    {loc(lang, "Robotic-Assisted Arthroplasty", "الاستبدال بمساعدة الروبوت")}
                    <span className="mt-1 block text-[11px] font-normal text-surgical-teal-light">
                      {loc(lang, "Haptic boundary & 3D tracking", "حدود لمسية وتتبع ثلاثي")}
                    </span>
                  </th>
                  <th className="px-4 py-3">
                    {loc(lang, "Patient-Specific Instrumentation (PSI)", "أدوات مخصصة للمريض")}
                    <span className="mt-1 block text-[11px] font-normal text-white/70">
                      {loc(lang, "Custom 3D-printed cutting jigs", "قوالب قطع مطبوعة ثلاثياً")}
                    </span>
                  </th>
                  <th className="px-4 py-3">
                    {loc(lang, "Precision Conventional Technique", "التقنية التقليدية الدقيقة")}
                    <span className="mt-1 block text-[11px] font-normal text-white/70">
                      {loc(lang, "Anatomical intramedullary alignment", "محاذاة داخل النقي")}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                {techniqueRows.map((row) => (
                  <tr key={row.dim} className="border-t border-surface-border">
                    <td className="bg-sand-tint px-4 py-3 font-semibold text-primary">{loc(lang, row.dim, row.dimAr)}</td>
                    <td className="bg-surgical-teal-subtle/40 px-4 py-3">{loc(lang, row.robotic, row.roboticAr)}</td>
                    <td className="px-4 py-3">{loc(lang, row.psi, row.psiAr)}</td>
                    <td className="px-4 py-3">{loc(lang, row.conventional, row.conventionalAr)}</td>
                  </tr>
                ))}
                <tr className="border-t border-surface-border">
                  <td className="bg-sand-tint px-4 py-3 font-semibold text-primary">{loc(lang, "Technique Consensus", "توافق التقنية")}</td>
                  <td className="bg-surgical-teal-subtle/40 px-4 py-3 font-semibold text-clinical-navy">
                    {loc(lang, "Technique suitability is evaluated and agreed with the patient during consultation.", "يُقيَّم ملاءمة التقنية بالاتفاق مع المريض أثناء الاستشارة.")}
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    {loc(lang, "Technique suitability is evaluated and agreed with the patient during consultation.", "يُقيَّم ملاءمة التقنية بالاتفاق مع المريض أثناء الاستشارة.")}
                  </td>
                  <td className="px-4 py-3 font-semibold">
                    {loc(lang, "Technique suitability is evaluated and agreed with the patient during consultation.", "يُقيَّم ملاءمة التقنية بالاتفاق مع المريض أثناء الاستشارة.")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-text-secondary">
            {loc(lang, "Platform and technology availability confirmed at the time of consultation.", "يُؤكد توفر المنصة والتقنية عند الاستشارة.")}
          </p>
        </div>
      </section>

      <section className="bg-alabaster-warm py-space-3xl">
        <div className="page-wrap grid gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
              {loc(lang, "Patient Empowerment", "تمكين المريض")}
            </p>
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Consultation Question Builder", "منشئ أسئلة الاستشارة")}
            </h2>
            <p className="mb-6 text-text-secondary">
              {loc(
                lang,
                "Preparing tailored clinical questions in advance ensures you and Dr. Ya'ish thoroughly cover the diagnostic and post-operative aspects most meaningful to your lifestyle.",
                "تحضير أسئلة سريرية مسبقاً يضمن تغطية الجوانب التشخيصية وبعد العملية الأهم لنمط حياتك مع الدكتور يعيش.",
              )}
            </p>
            <div className="mb-4 rounded-lg border border-surface-border bg-white p-4">
              <p className="mb-1 text-sm font-semibold text-primary">{loc(lang, "100% Client-Side Privacy", "خصوصية كاملة في المتصفح")}</p>
              <p className="text-sm text-text-secondary">
                {loc(lang, "Zero data tracking, no cookies saved, and no account required. Your selections remain strictly within your local browser.", "بلا تتبع أو ملفات تعريف أو حساب. تبقى اختياراتك في متصفحك فقط.")}
              </p>
            </div>
            <div className="rounded-lg bg-sand-tint p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-primary">{loc(lang, "Selected for Consultation", "محدد للاستشارة")}</span>
                <span className="rounded-full bg-surgical-teal px-2 py-0.5 text-[11px] font-semibold text-white">
                  {lang === "ar" ? `${checked.length} محدد` : `${checked.length} Selected`}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded bg-clinical-navy px-3 py-2 text-[12px] font-semibold text-white" type="button" onClick={copySummary}>
                  {loc(lang, "Copy Summary", "انسخ الملخص")}
                </button>
                <button className="rounded bg-white px-3 py-2 text-[12px] font-semibold text-clinical-navy" type="button" onClick={() => window.print()}>
                  {loc(lang, "Print List", "اطبع القائمة")}
                </button>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-surface-border bg-white p-6 lg:col-span-7">
            <p className="mb-4 text-[11px] tracking-wider text-text-secondary uppercase">
              {loc(lang, "Mandated Clinical Checklist", "قائمة سريرية إلزامية")}
            </p>
            <ul className="space-y-3">
              {mandated.map((item, index) => {
                const on = checked.includes(String(index));
                return (
                  <li key={item.q}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-sand-tint p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() =>
                          setChecked((prev) => (on ? prev.filter((x) => x !== String(index)) : [...prev, String(index)]))
                        }
                        className="mt-0.5"
                      />
                      <span>
                        <span className="block font-semibold text-primary">{loc(lang, item.q, item.qAr)}</span>
                        <span className="text-text-secondary">{loc(lang, item.hint, item.hintAr)}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
              {extras.map((q, i) => {
                const id = String(mandated.length + i);
                const on = checked.includes(id);
                return (
                  <li key={q}>
                    <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-sand-tint p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => setChecked((prev) => (on ? prev.filter((x) => x !== id) : [...prev, id]))}
                        className="mt-0.5"
                      />
                      <span className="font-semibold text-primary">{q}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex gap-2">
              <input
                className="flex-1 rounded border border-surface-border bg-sand-tint px-3 py-2 text-sm"
                placeholder={loc(lang, "e.g. How soon can I travel by air following surgery?", "مثال: متى أستطيع السفر جواً بعد الجراحة؟")}
                value={custom}
                onChange={(event) => setCustom(event.target.value)}
              />
              <button
                className="rounded bg-clinical-navy px-3 py-2 text-[12px] font-semibold text-white"
                type="button"
                onClick={() => {
                  const value = custom.trim();
                  if (!value) return;
                  setExtras((prev) => [...prev, value]);
                  setChecked((prev) => [...prev, String(mandated.length + extras.length)]);
                  setCustom("");
                }}
              >
                {loc(lang, "Add", "أضف")}
              </button>
            </div>
            <BookButton className="mt-5 inline-flex rounded bg-surgical-teal px-4 py-2.5 text-[13px] font-semibold text-white">
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
