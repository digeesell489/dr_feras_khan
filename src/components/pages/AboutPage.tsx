"use client";

import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { CountUp } from "@/components/CountUp";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { useLanguage } from "@/lib/language";
import { HEALTHPOINT_APPOINTMENT } from "@/lib/links";
import { loc } from "@/lib/loc";

const stats = [
  { value: "25+", label: "Years in Trauma & Orthopaedics", labelAr: "عاماً في جراحة الحوادث والعظام" },
  { value: "4,500+", label: "Joint Arthroplasties", labelAr: "عمليات استبدال المفاصل" },
  { value: "40+", label: "Cadaveric AO Faculty", labelAr: "هيئة AO للتشريح" },
  { value: "100%", label: "NHS UK Fellowship Track", labelAr: "مسار زمالة NHS البريطانية" },
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
    body: "Utilization of muscle-sparing hip and knee pathways that preserve dynamic stabilizers, reducing post-operative narcotic burden.",
    bodyAr:
      "استخدام مداخل للورك والركبة تحافظ على العضلات والمثبتات الديناميكية وتقلل الحاجة للمسكنات بعد العملية.",
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
    years: "2023 — Present",
    yearsAr: "2023 — حتى الآن",
    current: true,
    title: "Consultant Orthopaedic & Trauma Surgeon",
    titleAr: "استشاري جراحة العظام والحوادث",
    place: "Healthpoint Hospital Abu Dhabi · M42 Healthcare",
    placeAr: "مستشفى هيلث بوينت أبوظبي · M42 للرعاية الصحية",
    body: "Focus on robotic-assisted and patient-specific joint replacement, complex revision hip and knee surgery, and advanced knee ligament reconstruction. Serving tertiary referral patients across the UAE and GCC.",
    bodyAr:
      "يركّز على استبدال المفاصل بمساعدة الروبوت والمخصص للمريض، وجراحة مراجعة الورك والركبة المعقدة، وإعادة بناء أربطة الركبة. يستقبل مرضى الإحالة من الإمارات والخليج.",
  },
  {
    years: "2020 — 2023",
    yearsAr: "2020 — 2023",
    title: "Consultant Orthopaedic Surgeon & Trauma Core Lead",
    titleAr: "استشاري جراحة العظام وقائد مسار الرضوض",
    place: "Sheikh Shakhbout Medical City (SSMC) in Partnership with Mayo Clinic",
    placeAr: "مدينة الشيخ شخبوط الطبية بالشراكة مع مايو كلينك",
    body: "Steered complex pelvic and acetabular trauma services and advanced arthroplasty programs during the pivotal Mayo Clinic institutional integration. Instrumental in standardizing tertiary referral pathways and trauma MDT protocols.",
    bodyAr:
      "قاد خدمات رضوض الحوض والحُق وبرامج الاستبدال المتقدمة خلال التكامل المؤسسي مع مايو كلينك، وساهم في توحيد مسارات الإحالة وبروتوكولات الفريق متعدد التخصصات.",
  },
  {
    years: "2013 — 2020",
    yearsAr: "2013 — 2020",
    title: "Substantive NHS Consultant Orthopaedic Surgeon",
    titleAr: "استشاري جراحة عظام دائم في هيئة الخدمات الصحية البريطانية",
    place: "National Health Service (NHS) Foundation Trusts, United Kingdom",
    placeAr: "صناديق هيئة الخدمات الصحية الوطنية (NHS)، المملكة المتحدة",
    body: "Provided high-volume lower-limb primary and revision arthroplasty, periprosthetic fracture fixation, and major polytrauma reconstruction. Active educational supervisor training orthopaedic registrars and surgical fellows.",
    bodyAr:
      "قدّم حجماً عالياً من استبدال الطرف السفلي الأولي والمراجعة، وتثبيت الكسور حول الزرعة، وإعادة بناء الرضوض المتعددة، مع الإشراف على تدريب الأطباء المقيمين والزملاء.",
  },
  {
    years: "2011 — 2013",
    yearsAr: "2011 — 2013",
    title: "Advanced Fellowships in Complex Arthroplasty & Trauma",
    titleAr: "زمالات متقدمة في الاستبدال المعقد والرضوض",
    place: "Prestigious Specialist Centres across the UK & Europe",
    placeAr: "مراكز تخصصية مرموقة في المملكة المتحدة وأوروبا",
    body: "Sub-specialty fellowship training in primary and complex revision hip and knee reconstruction, massive endoprosthetic replacement, and advanced pelvic-acetabular fracture stabilization.",
    bodyAr:
      "تدريب زمالة تخصصي في إعادة بناء الورك والركبة الأولية والمعقدة، والاستبدال الداخلي الواسع، وتثبيت كسور الحوض والحُق.",
  },
  {
    years: "2005 — 2011",
    yearsAr: "2005 — 2011",
    title: "Higher Specialist Surgical Training (Orthopaedics)",
    titleAr: "التدريب الجراحي التخصصي العالي (جراحة العظام)",
    place: "Mersey & Northern UK Deaneries",
    placeAr: "هيئات ميرسي وشمال المملكة المتحدة التدريبية",
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
    body: "Practicing as a consultant at Healthpoint Hospital, Zayed Sports City — the location for appointments, imaging, and surgery.",
    bodyAr: "يمارس كاستشاري في مستشفى هيلث بوينت، مدينة زايد الرياضية — موقع المواعيد والتصوير والجراحة.",
  },
];

export function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <nav className="sticky top-[5.5rem] z-40 hidden border-b border-surface-border bg-sand-tint/90 backdrop-blur-md md:block">
        <div className="page-wrap flex flex-wrap gap-x-5 gap-y-2 py-3 text-[12px] font-semibold tracking-wide text-text-secondary uppercase">
          {[
            ["#clinical-background", "Clinical Pedigree", "السجل السريري"],
            ["#surgical-philosophy", "Surgical Philosophy", "الفلسفة الجراحية"],
            ["#nh-timeline", "NHS Fellowship Path", "مسار زمالة NHS"],
            ["#academic-leadership", "AO Recon Leadership", "قيادة AO Recon"],
            ["#accreditations", "Board Certifications", "شهادات المجالس"],
            ["#facility", "Clinic Location", "موقع العيادة"],
          ].map(([href, en, ar]) => (
            <a key={href} className="hover:text-clinical-navy" href={href}>
              {loc(lang, en, ar)}
            </a>
          ))}
        </div>
      </nav>

      <section className="relative overflow-hidden bg-clinical-slate-deep py-space-3xl text-white lg:py-space-4xl" id="clinical-background">
        <div className="page-wrap relative z-10 grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
              {loc(lang, "Editorial Profile", "الملف التحريري")}
            </p>
            <h1 className="mb-4 font-headline-hero text-[2.25rem] leading-tight text-white lg:text-[3.1rem] lg:leading-[3.5rem]">
              {loc(
                lang,
                "25+ Years of UK Fellowship Rigour & Reconstructive Precision",
                "+25 عاماً من صرامة الزمالة البريطانية ودقة إعادة البناء",
              )}
            </h1>
            <div className="mb-4">
              <AuthorByline colorClass="text-sand-tint/90" />
            </div>
            <p className="mb-4 max-w-xl text-sm leading-relaxed text-sand-tint/75">
              {loc(
                lang,
                "British fellowship-trained consultant specializing in robotic-assisted and patient-specific joint replacement, complex revision hip and knee surgery, advanced knee ligament reconstruction, and trauma reconstructive surgery. More than 25 years in trauma and orthopaedics, including NHS reconstructive practice and a consultant post at SSMC in partnership with Mayo Clinic. Consultations and surgery are arranged at Healthpoint Hospital, Zayed Sports City.",
                "استشاري بزمالة بريطانية متخصص في استبدال المفاصل بمساعدة الروبوت والمخصص للمريض، وجراحات مراجعة الورك والركبة المعقدة، وإعادة بناء أربطة الركبة المتقدمة، وإعادة بناء الرضوض. أكثر من 25 عاماً في جراحة الحوادث والعظام، بما في ذلك الممارسة في NHS ومنصب استشاري في مدينة الشيخ شخبوط بالشراكة مع مايو كلينك. تُنسَّق الاستشارات والجراحة في مستشفى هيلث بوينت، مدينة زايد الرياضية.",
              )}
            </p>
            <div className="mb-6 flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="rounded-full border border-white/20 px-3 py-1">GMC UK Specialist #6037418</span>
              <span className="rounded-full border border-white/20 px-3 py-1">DoH Abu Dhabi Consultant</span>
              <span className="rounded-full border border-white/20 px-3 py-1">AO Recon Chairman MENA</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <CountUp className="font-serif text-[1.8rem] tabular-nums text-white" value={item.value} />
                  <p className="text-[11px] leading-snug text-sand-tint/60">{loc(lang, item.label, item.labelAr)}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-[13px] font-semibold text-clinical-navy" href={HEALTHPOINT_APPOINTMENT}>
                {t.book}
              </a>
              <Link className="inline-flex items-center gap-2 rounded border border-white/25 px-5 py-2.5 text-[13px] font-semibold text-white" href="#surgical-philosophy">
                {loc(lang, "Clinical Methodology", "المنهجية السريرية")}
                <ExternalArrow className="h-3.5 w-3.5 text-surgical-teal-light" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/5] bg-gradient-to-b from-sand-tint to-surface-container">
                <Image
                  src="/images/doctor-hero-card.webp"
                  alt="Dr. Feras Ya'ish"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold tracking-widest text-surgical-teal-light uppercase">
                  {loc(lang, "Clinical Registry · Verified", "السجل السريري · موثّق")}
                </p>
                <p className="font-semibold text-white">Dr. Feras Ya&apos;ish</p>
                <p className="text-sm text-sand-tint/65">FRCS (Tr &amp; Orth) UK · CCT Accredited</p>
                <p className="mt-1 text-sm text-surgical-teal-light">
                  {loc(lang, "Primary practice: Healthpoint Abu Dhabi · Zayed Sports City · M42", "العيادة الأساسية: هيلث بوينت أبوظبي · مدينة زايد الرياضية · M42")}
                </p>
                <p className="mt-2 text-xs text-sand-tint/60">
                  {loc(lang, "Former substantive: SSMC / Mayo & NHS UK · AO Foundation MENA Chairman", "سابقاً: مدينة الشيخ شخبوط / مايو وNHS · رئيس AO في المنطقة")}
                </p>
                <a className="mt-3 inline-block text-sm font-semibold text-white" href="tel:80077">800 77</a>
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
              <article key={item.years} className="grid gap-3 rounded-xl border border-surface-border bg-white p-5 md:grid-cols-[180px_1fr]">
                <div>
                  <p className="text-[12px] font-semibold tracking-wide text-surgical-teal">{loc(lang, item.years, item.yearsAr)}</p>
                  {"current" in item && item.current ? (
                    <span className="mt-2 inline-block rounded bg-surgical-teal-subtle px-2 py-0.5 text-[10px] font-bold tracking-wider text-surgical-teal uppercase">
                      {loc(lang, "Current Primary Post", "المنصب الأساسي الحالي")}
                    </span>
                  ) : null}
                </div>
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
          <p className="mb-8 max-w-3xl text-sand-tint/75">
            {loc(
              lang,
              "As Chairman of AO Recon MENA, Dr. Feras Ya'ish oversees master-level surgical curricula, cadaveric instructional labs, and biomechanical symposiums across Zurich, Davos, Dubai, and Riyadh.",
              "بصفته رئيس AO Recon للشرق الأوسط وشمال أفريقيا، يشرف الدكتور فراس يعيش على مناهج جراحية متقدمة ومختبرات تشريح وندوات ميكانيكية في زيورخ ودافوس ودبي والرياض.",
            )}
          </p>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              {
                src: "/images/practice/lecture-ao-recon.webp",
                alt: "Dr Feras Ya'ish teaching an AO Recon course on hip and knee arthroplasty",
                altAr: "الدكتور فراس يعيش يدرّس دورة AO Recon لاستبدال الورك والركبة",
                caption: "AO Recon faculty",
                captionAr: "هيئة AO Recon",
              },
              {
                src: "/images/practice/teaching-sawbone.webp",
                alt: "Dr Feras Ya'ish teaching knee reconstruction on a surgical model",
                altAr: "الدكتور فراس يعيش يدرّس إعادة بناء الركبة على نموذج جراحي",
                caption: "Hands-on instruction",
                captionAr: "تدريب عملي",
              },
              {
                src: "/images/practice/lecture-icjr.webp",
                alt: "Dr Feras Ya'ish speaking at the International Congress for Joint Reconstruction, Middle East",
                altAr: "الدكتور فراس يعيش يتحدث في المؤتمر الدولي لإعادة بناء المفاصل في الشرق الأوسط",
                caption: "ICJR Middle East",
                captionAr: "ICJR الشرق الأوسط",
              },
            ].map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image src={photo.src} alt={loc(lang, photo.alt, photo.altAr)} width={1200} height={800} className="aspect-[4/3] w-full bg-clinical-slate-deep/30 object-contain object-center" />
                <figcaption className="px-3 py-2 text-[12px] text-sand-tint/80">{loc(lang, photo.caption, photo.captionAr)}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mb-4 rounded-lg border border-clinical-gold-honorary/30 bg-clinical-gold-honorary/10 px-4 py-3 text-sm text-sand-tint/80">
            {loc(
              lang,
              "Dual UK Certificate of Completion of Training (CCT). AO Foundation Global Faculty. Peer-review contributor to The Bone & Joint Journal.",
              "شهادة إتمام تدريب بريطانية مزدوجة (CCT). هيئة AO العالمية. مراجع في مجلة Bone & Joint Journal.",
            )}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 font-serif text-3xl text-surgical-teal-light">40+</p>
              <p className="mb-2 text-[11px] tracking-wider text-surgical-teal-light uppercase">AO Recon</p>
              <h3 className="mb-2 font-headline-sm text-white">{loc(lang, "Cadaveric Masterclasses", "دورات التشريح المتقدمة")}</h3>
              <p className="text-sm text-sand-tint/70">
                {loc(
                  lang,
                  "Hands-on anatomical instruction in revision acetabular reconstruction, kinematic knee balance, and patient-specific planning.",
                  "تدريب عملي على إعادة بناء الحُق للمراجعة، وموازنة الركبة الحركية، والتخطيط المخصص للمريض.",
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
            <article className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-2 text-[11px] tracking-wider text-surgical-teal-light uppercase">BJJ</p>
              <h3 className="mb-2 font-headline-sm text-white">{loc(lang, "Peer-Review Contributor", "مساهم في التحكيم العلمي")}</h3>
              <p className="text-sm text-sand-tint/70">
                {loc(
                  lang,
                  "Evaluating global scientific clinical research submissions in arthroplasty, periprosthetic fractures, and biomechanics.",
                  "تقييم الأبحاث السريرية العالمية في استبدال المفاصل والكسور حول الزرعة والميكانيكا الحيوية.",
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
              {loc(lang, "Recovery Care at Healthpoint Abu Dhabi", "رعاية التعافي في هيلث بوينت أبوظبي")}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              {loc(
                lang,
                "All elective surgeries and tertiary joint reconstructions take place at Healthpoint Hospital, Zayed Sports City — equipped with laminar airflow operating suites, robotic navigation consoles, and dedicated recuperation wards.",
                "تُجرى كل الجراحات الاختيارية وإعادة بناء المفاصل التخصصية في مستشفى هيلث بوينت، مدينة زايد الرياضية — بغرف عمليات بتدفق هوائي صفحي ووحدات ملاحة روبوتية وأجنحة تعافٍ مخصصة.",
              )}
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                {loc(
                  lang,
                  "Surgical theatres with high-efficiency particulate air filtration",
                  "غرف عمليات بفلاتر هواء عالية الكفاءة",
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
          <div className="relative overflow-hidden rounded-2xl lg:col-span-6">
            <Image
              src="/images/clinical/or-robot-portrait.webp"
              alt="Dr Feras Ya'ish beside the Stryker Mako robotic arm in theatre"
              width={2048}
              height={1536}
              className="h-full min-h-[320px] w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-clinical-slate-deep/80 p-4 text-white backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold">Healthpoint Hospital Abu Dhabi</p>
                <p className="text-xs text-sand-tint/80">
                  {loc(lang, "Al Qiyada Street · Zayed Sports City, Al Rawdah", "شارع القيادة · مدينة زايد الرياضية، الروضة")}
                </p>
              </div>
              <a className="rounded bg-surgical-teal px-3 py-2 text-[12px] font-semibold" href="tel:80077">
                {loc(lang, "Book Visit", "احجز زيارة")}
              </a>
            </div>
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
