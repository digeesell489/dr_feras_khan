"use client";

import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

const stats = [
  { value: "22+", label: "Years Reconstructive Practice", labelAr: "سنوات ممارسة إعادة البناء" },
  { value: "4,500+", label: "Primary & Revision Joints", labelAr: "مفاصل أولية ومراجعات" },
  { value: "40+", label: "International Faculty Roles", labelAr: "أدوار هيئة دولية" },
  { value: "100%", label: "Consultant-Led Surgery", labelAr: "جراحة بإشراف استشاري" },
];

const philosophy = [
  {
    title: "Kinematic Alignment",
    titleAr: "المحاذاة الحركية",
    body: "Restoring the individual patient's pre-arthritic constitutional joint line rather than imposing an artificial neutral axis, eliminating ligament strain and accelerating physiological adaptation.",
    bodyAr:
      "استعادة خط المفصل الطبيعي للمريض قبل الخشونة بدلاً من فرض محور محايد اصطناعي، بما يقلل إجهاد الأربطة ويسرّع التكيف الوظيفي.",
  },
  {
    title: "Tissue-Sparing Portals",
    titleAr: "مداخل تحافظ على الأنسجة",
    body: "Utilization of the muscle-sparing Direct Anterior Hip approach and true subvastus knee pathways that preserve dynamic stabilizers, drastically minimizing post-operative narcotic burden.",
    bodyAr:
      "استخدام النهج الأمامي المباشر للورك ومسارات تحت المتسعة للركبة التي تحافظ على المثبتات الديناميكية وتقلل الحاجة للمسكنات بعد العملية.",
  },
  {
    title: "Sub-Millimeter Navigation",
    titleAr: "ملاحة دون المليمتر",
    body: "Robotic stereotactic haptic boundaries combined with dynamic intra-operative sensory feedback to deliver prosthetic longevity and micro-precise joint balancing without soft tissue compromise.",
    bodyAr:
      "حدود لمسية روبوتية مع تغذية راجعة أثناء الجراحة لتحقيق توازن دقيق للمفصل وطول عمر الزرعة دون الإضرار بالأنسجة الرخوة.",
  },
  {
    title: "Early Weight-Bearing",
    titleAr: "تحميل مبكر للوزن",
    body: "Multimodal anesthetic pathways and tranexamic acid protocols facilitating full independent ambulation within 3 to 6 hours post-operatively, preventing venous thromboembolism.",
    bodyAr:
      "مسارات تخدير متعددة الوسائط وبروتوكولات حمض الترانيكساميك تتيح المشي المستقل خلال 3 إلى 6 ساعات بعد العملية للوقاية من الجلطات الوريدية.",
  },
];

const timeline = [
  {
    years: "2018 — Present",
    yearsAr: "2018 — حتى الآن",
    title: "Consultant Orthopaedic & Trauma Surgeon",
    titleAr: "استشاري جراحة العظام والحوادث",
    place: "Healthpoint Hospital Abu Dhabi · M42 Healthcare",
    placeAr: "مستشفى هيلث بوينت أبوظبي · M42 للرعاية الصحية",
    body: "Leading direct anterior hip arthroplasty, robotic-assisted total knee replacement, and specialized revision joint services. Serving tertiary referral patients across the UAE and GCC requiring advanced biological salvage and revision reconstruction.",
    bodyAr:
      "يقود استبدال الورك بالنهج الأمامي، واستبدال الركبة بمساعدة الروبوت، وخدمات المراجعة التخصصية. يستقبل مرضى الإحالة من الإمارات والخليج لحالات الإنقاذ البيولوجي وإعادة البناء المعقدة.",
  },
  {
    years: "2015 — 2018",
    yearsAr: "2015 — 2018",
    title: "Consultant Orthopaedic Surgeon & Trauma Core Lead",
    titleAr: "استشاري جراحة العظام وقائد مسار الرضوض",
    place: "Sheikh Shakhbout Medical City (SSMC) in Partnership with Mayo Clinic",
    placeAr: "مدينة الشيخ شخبوط الطبية بالشراكة مع مايو كلينك",
    body: "Steered complex pelvic and acetabular trauma services and advanced arthroplasty programs during the pivotal Mayo Clinic institutional integration. Instrumental in standardizing tertiary referral pathways and trauma MDT protocols.",
    bodyAr:
      "قاد خدمات رضوض الحوض والحُق وبرامج الاستبدال المتقدمة خلال التكامل المؤسسي مع مايو كلينك، وساهم في توحيد مسارات الإحالة وبروتوكولات الفريق متعدد التخصصات.",
  },
  {
    years: "2008 — 2015",
    yearsAr: "2008 — 2015",
    title: "Substantive NHS Consultant Orthopaedic Surgeon",
    titleAr: "استشاري جراحة عظام دائم في هيئة الخدمات الصحية البريطانية",
    place: "National Health Service (NHS) Foundation Trusts, United Kingdom",
    placeAr: "صناديق هيئة الخدمات الصحية الوطنية (NHS)، المملكة المتحدة",
    body: "Provided high-volume lower-limb primary and revision arthroplasty, periprosthetic fracture fixation, and major polytrauma reconstruction. Active educational supervisor training orthopaedic registrars and surgical fellows.",
    bodyAr:
      "قدّم حجماً عالياً من استبدال الطرف السفلي الأولي والمراجعة، وتثبيت الكسور حول الزرعة، وإعادة بناء الرضوض المتعددة، مع الإشراف على تدريب الأطباء المقيمين والزملاء.",
  },
  {
    years: "2006 — 2008",
    yearsAr: "2006 — 2008",
    title: "Advanced Fellowships in Complex Arthroplasty & Trauma",
    titleAr: "زمالات متقدمة في الاستبدال المعقد والرضوض",
    place: "Prestigious Specialist Centres across the UK & Europe",
    placeAr: "مراكز تخصصية مرموقة في المملكة المتحدة وأوروبا",
    body: "Sub-specialty fellowship training in primary and complex revision hip and knee reconstruction, massive endoprosthetic replacement, and advanced pelvic-acetabular fracture stabilization.",
    bodyAr:
      "تدريب زمالة تخصصي في إعادة بناء الورك والركبة الأولية والمعقدة، والاستبدال الداخلي الواسع، وتثبيت كسور الحوض والحُق.",
  },
  {
    years: "2000 — 2006",
    yearsAr: "2000 — 2006",
    title: "Higher Specialist Surgical Training (Orthopaedics)",
    titleAr: "التدريب الجراحي التخصصي العالي (جراحة العظام)",
    place: "Deanery & Royal Colleges, United Kingdom",
    placeAr: "الهيئات التدريبية والكليات الملكية، المملكة المتحدة",
    body: "Rigorous six-year UK surgical rotation culminating in FRCS (Tr & Orth) and subsequent Certificate of Completion of Training (CCT).",
    bodyAr: "دورة جراحية بريطانية صارمة لست سنوات انتهت بـ FRCS (Tr & Orth) ثم شهادة إتمام التدريب (CCT).",
  },
];

const credentials = [
  {
    title: "FRCS (Tr & Orth)",
    body: "Fellow of the Intercollegiate Specialty Board in Trauma and Orthopaedic Surgery, awarded upon passing the UK exit examinations.",
    bodyAr: "زميل المجلس التخصصي المشترك في جراحة الحوادث والعظام بعد اجتياز امتحانات التخرج البريطانية.",
  },
  {
    title: "CCT Accredited",
    titleAr: "اعتماد CCT",
    body: "Certificate of Completion of Training in the United Kingdom, placed permanently on the Specialist Register with substantive consultant eligibility.",
    bodyAr: "شهادة إتمام التدريب في المملكة المتحدة مع التسجيل الدائم في سجل الأخصائيين وأهلية الاستشاري.",
  },
  {
    title: "Chairman, AO Recon MENA",
    titleAr: "رئيس AO Recon للشرق الأوسط وشمال أفريقيا",
    body: "Elected chair for the Middle East & North Africa steering committee advancing international surgical standards in hip and knee reconstruction.",
    bodyAr: "رئيس منتخب للجنة الشرق الأوسط وشمال أفريقيا لتطوير المعايير الجراحية الدولية في إعادة بناء الورك والركبة.",
  },
  {
    title: "Consultant License",
    titleAr: "رخصة استشاري",
    body: "Licensed Tier-1 Consultant Orthopaedic and Trauma Surgeon delivering complex inpatient surgical operations and specialized outpatient triage.",
    bodyAr: "استشاري مرخّص من الدرجة الأولى لجراحة العظام والحوادث يقدم العمليات المعقدة والفرز التخصصي للعيادات.",
  },
  {
    title: "Surgeon of Excellence",
    titleAr: "جرّاح تميّز",
    body: "SRC (USA) recognition for meeting rigorous international safety benchmarks and high patient volume standards in joint arthroplasty.",
    bodyAr: "اعتماد SRC (الولايات المتحدة) لتحقيق معايير السلامة الدولية وحجم الحالات العالي في استبدال المفاصل.",
  },
  {
    title: "Healthpoint Hospital",
    titleAr: "مستشفى هيلث بوينت",
    body: "Practicing within Abu Dhabi's premier centre for orthopaedic medicine and sports surgery, adjacent to Zayed Sports City.",
    bodyAr: "يمارس في أحد أبرز مراكز جراحة العظام والرياضة في أبوظبي، بجوار مدينة زايد الرياضية.",
  },
];

export function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-clinical-slate-deep py-space-3xl text-white lg:py-space-4xl" id="clinical-background">
        <div className="page-wrap relative z-10 grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
              {loc(lang, "Consultant Trauma & Orthopaedic Surgeon", "استشاري جراحة الحوادث والعظام")}
            </p>
            <h1 className="mb-4 font-headline-hero text-[2.25rem] leading-tight text-white lg:text-[3.1rem] lg:leading-[3.5rem]">
              {loc(
                lang,
                "Two Decades of UK Fellowship Rigour & Reconstructive Precision",
                "عقدان من صرامة الزمالة البريطانية ودقة إعادة البناء",
              )}
            </h1>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-sand-tint/75">
              {loc(
                lang,
                "British fellowship-trained consultant specializing in primary and revision hip and knee arthroplasty, robotic-assisted surgical intervention, complex trauma reconstructive surgery, and sports joint reconstruction.",
                "استشاري بزمالة بريطانية متخصص في استبدال الورك والركبة الأولي والمراجعة، والجراحة بمساعدة الروبوت، وإعادة بناء الرضوض المعقدة، وجراحة المفاصل الرياضية.",
              )}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <CountUp className="font-serif text-[1.8rem] tabular-nums text-white" value={item.value} />
                  <p className="text-[11px] leading-snug text-sand-tint/60">{loc(lang, item.label, item.labelAr)}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-[13px] font-semibold text-clinical-navy" href="tel:80077">
                {t.book} · 800 77
              </a>
              <Link className="inline-flex items-center gap-2 rounded border border-white/25 px-5 py-2.5 text-[13px] font-semibold text-white" href="/treatments">
                {t.nav["/treatments"].label}
                <ExternalArrow className="h-3.5 w-3.5 text-surgical-teal-light" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src="/images/doctor-hero-card.png"
                alt="Dr. Feras Ya'ish"
                width={720}
                height={860}
                className="h-auto w-full object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-white">Dr. Feras Ya&apos;ish</p>
                <p className="text-sm text-sand-tint/65">FRCS (Tr &amp; Orth) · CCT (UK)</p>
                <p className="mt-1 text-sm text-surgical-teal-light">
                  {loc(lang, "Healthpoint Hospital, Abu Dhabi", "مستشفى هيلث بوينت، أبوظبي")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-space-3xl lg:py-space-4xl" id="surgical-philosophy">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
            {loc(lang, "Philosophy & Technique", "الفلسفة والتقنية")}
          </p>
          <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Preserve Biology, Perfect Kinematics", "حافظ على البيولوجيا وأتقن الحركة")}
          </h2>
          <p className="mb-space-xl max-w-3xl text-text-secondary">
            {loc(
              lang,
              "Technology should never override native soft-tissue biology. Dr. Ya'ish's philosophy anchors every intervention in patient-specific kinematic restitution rather than rigid mechanical compromise.",
              "لا ينبغي للتقنية أن تتجاوز بيولوجيا الأنسجة الرخوة. ترتكز فلسفة الدكتور يعيش على استعادة الحركة وفق تشريح كل مريض لا على حلول ميكانيكية جامدة.",
            )}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl lg:py-space-4xl" id="nh-timeline">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
            {loc(lang, "Experience & Training", "الخبرة والتدريب")}
          </p>
          <h2 className="mb-space-xl font-headline-lg text-headline-lg text-primary">
            {loc(lang, "A Structured UK & International Surgical Track", "مسار جراحي منظم بريطاني ودولي")}
          </h2>
          <div className="space-y-5">
            {timeline.map((item) => (
              <article key={item.years} className="grid gap-3 rounded-xl border border-surface-border bg-white p-5 md:grid-cols-[160px_1fr]">
                <p className="text-[12px] font-semibold tracking-wide text-surgical-teal">{loc(lang, item.years, item.yearsAr)}</p>
                <div>
                  <h3 className="font-headline-sm text-[1.05rem] text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                  <p className="mb-2 text-sm font-semibold text-clinical-navy">{loc(lang, item.place, item.placeAr)}</p>
                  <p className="text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-clinical-navy py-space-3xl text-white" id="academic-leadership">
        <div className="page-wrap">
          <h2 className="mb-3 font-headline-lg text-headline-lg text-white">
            {loc(lang, "Educating the Next Generation of Joint Surgeons", "تأهيل الجيل التالي من جرّاحي المفاصل")}
          </h2>
          <p className="mb-space-xl max-w-3xl text-sand-tint/75">
            {loc(
              lang,
              "As Chairman of AO Recon MENA, Dr. Feras Ya'ish oversees master-level surgical curricula, cadaveric instructional labs, and biomechanical symposiums across Zurich, Davos, Dubai, and Riyadh.",
              "بصفته رئيس AO Recon للشرق الأوسط وشمال أفريقيا، يشرف الدكتور فراس يعيش على مناهج جراحية متقدمة ومختبرات تشريح وندوات ميكانيكية في زيورخ ودافوس ودبي والرياض.",
            )}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-[11px] tracking-wider text-surgical-teal-light uppercase">AO Recon</p>
              <h3 className="mb-2 font-headline-sm text-white">{loc(lang, "Cadaveric Masterclasses", "دورات التشريح المتقدمة")}</h3>
              <p className="text-sm text-sand-tint/70">
                {loc(
                  lang,
                  "Hands-on anatomical instruction in Direct Anterior Hip, revision acetabular cups, and modern sensor-guided knee balance.",
                  "تدريب عملي على النهج الأمامي للورك، وأصداف الحُق للمراجعة، وموازنة الركبة الموجَّهة بالحساسات.",
                )}
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-[11px] tracking-wider text-clinical-gold-honorary uppercase">SRC</p>
              <h3 className="mb-2 font-headline-sm text-white">{loc(lang, "Surgeon of Excellence", "جرّاح تميّز")}</h3>
              <p className="text-sm text-sand-tint/70">
                {loc(
                  lang,
                  "Accredited by the Surgical Review Corporation (USA) as an international Surgeon of Excellence in Joint Replacement.",
                  "معتمد من Surgical Review Corporation (الولايات المتحدة) كجرّاح تميّز دولي في استبدال المفاصل.",
                )}
              </p>
            </article>
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-[11px] tracking-wider text-surgical-teal-light uppercase">ICJR ME</p>
              <h3 className="mb-2 font-headline-sm text-white">{loc(lang, "Scientific Committees", "اللجان العلمية")}</h3>
              <p className="text-sm text-sand-tint/70">
                {loc(
                  lang,
                  "Scientific program committee faculty for the International Congress for Joint Reconstruction Middle East.",
                  "عضو هيئة البرنامج العلمي للمؤتمر الدولي لإعادة بناء المفاصل في الشرق الأوسط.",
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-space-3xl lg:py-space-4xl" id="accreditations">
        <div className="page-wrap">
          <h2 className="mb-space-xl font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Verified Fellowships & Board Licenses", "زمالات معتمدة ورخص مجالس")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.title, item.titleAr ?? item.title)}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/80 py-space-3xl" id="facility">
        <div className="page-wrap grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-2 text-[11px] tracking-[0.18em] text-surgical-teal uppercase">
              {loc(lang, "Practice Location", "موقع العيادة")}
            </p>
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "World-Class Recovery at Healthpoint Abu Dhabi", "تعافٍ عالمي المستوى في هيلث بوينت أبوظبي")}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              {loc(
                lang,
                "All elective surgeries and tertiary joint reconstructions take place at Healthpoint Hospital, Zayed Sports City — equipped with laminar airflow operating suites, robotic navigation consoles, and luxurious recuperation wings.",
                "تُجرى كل الجراحات الاختيارية وإعادة بناء المفاصل التخصصية في مستشفى هيلث بوينت، مدينة زايد الرياضية — بغرف عمليات بتدفق هوائي صفحي ووحدات ملاحة روبوتية وأجنحة تعافٍ فاخرة.",
              )}
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                {loc(
                  lang,
                  "Ultra-clean surgical theatres with high-efficiency particulate air filtration",
                  "غرف عمليات فائقة النظافة بفلاتر هواء عالية الكفاءة",
                )}
              </li>
              <li>
                {loc(
                  lang,
                  "Dedicated orthopaedic rehabilitation gym and step-down physiotherapy",
                  "صالة إعادة تأهيل عظمية مخصصة وعلاج طبيعي متدرج",
                )}
              </li>
              <li>
                {loc(
                  lang,
                  "Executive patient suites designed for restorative family accompaniment",
                  "أجنحة مرضى تنفيذية تتيح مرافقة العائلة أثناء التعافي",
                )}
              </li>
            </ul>
            <Link className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-clinical-navy" href="/patient-care">
              {t.patientCareGuide}
              <ExternalArrow />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl lg:col-span-6">
            <Image src="/images/education-lounge.png" alt="Healthpoint Hospital recovery environment" width={960} height={720} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Appointments"
        eyebrowAr="المواعيد"
        title="Schedule an In-Person Consultation or Second Opinion"
        titleAr="احجز استشارة حضورية أو رأياً ثانياً"
        body="Whether you require diagnostic evaluation for chronic joint degeneration, a review of previous surgery, or management of complex post-traumatic malunion, consultations are consultant-led at Healthpoint Hospital."
        bodyAr="سواء احتجت تقييماً تشخيصياً لتآكل المفصل، أو مراجعة جراحة سابقة، أو علاج التئام معيب بعد الرض، تتم الاستشارات بإشراف استشاري في مستشفى هيلث بوينت."
      />
    </>
  );
}
