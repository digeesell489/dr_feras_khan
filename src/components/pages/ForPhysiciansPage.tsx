"use client";

import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { CtaBand } from "@/components/CtaBand";
import { PhysicianReferralForm } from "@/components/PhysicianReferralForm";
import { ExternalArrow } from "@/components/ui/Icons";
import { physicianCopy } from "@/lib/ar-copy";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";
import { physicianPages, referralCriteria } from "@/lib/physicians";

export function ForPhysiciansPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-sand-tint py-space-3xl lg:py-space-4xl">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] tracking-wider text-clinical-navy uppercase shadow-sm">
              {loc(lang, "Consultant Tertiary Referral Gateway", "بوابة التحويل التخصصي للاستشاري")}
            </p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight text-primary lg:text-[3rem]">
              {loc(lang, "Tertiary Orthopaedic Referral Gateway", "بوابة التحويل التخصصي لجراحة العظام")}
            </h1>
            <AuthorByline />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
              {loc(
                lang,
                "Expedited clinical triage for complex primary arthroplasty, failed or infected prostheses, periprosthetic fractures, and severe articular trauma — dedicated to orthopaedic surgeons, rheumatologists, emergency physicians, and musculoskeletal specialists.",
                "فرز سريري سريع لاستبدال المفصل المعقد، والزرعات الفاشلة أو المصابة، والكسور حول الزرعة، والرضوض المفصلية الشديدة — مخصص لجراحي العظام وأطباء الروماتيزم والطوارئ واختصاصيي الجهاز العضلي الهيكلي.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded bg-surgical-teal px-4 py-2.5 text-[13px] font-semibold text-white" href="tel:80077">
                {t.urgentHotline}
              </a>
              <a className="rounded bg-clinical-navy px-4 py-2.5 text-[13px] font-semibold text-white" href="#case-submission">
                {loc(lang, "Submit Cross-Sectional Imaging", "أرسل التصوير المقطعي")}
              </a>
              <Link className="rounded border border-clinical-navy/20 bg-white px-4 py-2.5 text-[13px] font-semibold text-clinical-navy" href="/for-physicians/case-submission">
                {loc(lang, "Open dedicated case form", "افتح نموذج الحالة المخصص")}
              </Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-surface-border bg-white p-5 shadow-sm lg:col-span-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] tracking-widest text-text-secondary uppercase">
                {loc(lang, "Direct Referral Desk", "مكتب الإحالة المباشر")}
              </p>
              <span className="rounded bg-surgical-teal-subtle px-2 py-0.5 text-[11px] font-semibold text-surgical-teal">
                {loc(lang, "Live Triage", "فرز مباشر")}
              </span>
            </div>
            <p className="font-serif text-4xl text-clinical-navy">&lt; 4 Hours</p>
            <p className="mt-1 text-sm text-text-secondary">
              {loc(lang, "PJI & Vancouver B2/B3 surgical triage review turnaround", "مدة مراجعة فرز PJI وVancouver B2/B3")}
            </p>
            <div className="mt-4 space-y-2 rounded-lg bg-sand-tint p-3 text-sm">
              <p className="flex justify-between gap-3">
                <span className="text-text-secondary">{loc(lang, "Consultant In-Charge:", "الاستشاري المسؤول:")}</span>
                <span className="font-semibold text-clinical-navy">Dr. Feras Ya&apos;ish</span>
              </p>
              <p className="flex justify-between gap-3">
                <span className="text-text-secondary">{loc(lang, "Academic Affiliation:", "الانتماء الأكاديمي:")}</span>
                <span className="font-semibold text-clinical-navy">AO Recon Faculty MENA</span>
              </p>
              <p className="flex justify-between gap-3">
                <span className="text-text-secondary">{loc(lang, "Direct Physician Desk:", "مكتب الطبيب المباشر:")}</span>
                <a className="font-semibold text-surgical-teal" href="mailto:ortho.mdt@healthpoint.ae">ortho.mdt@healthpoint.ae</a>
              </p>
            </div>
            <p className="mt-3 text-xs text-text-secondary">
              {loc(lang, "DoH Malpractice & Inter-Facility Transfer Compliant", "متوافق مع تحويل المنشآت ومعايير دائرة الصحة")}
            </p>
          </aside>
        </div>
      </section>

      <section className="py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Physician pathways", "مسارات الأطباء")}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {physicianPages.map((item) => {
              const copy = physicianCopy(item, lang);
              return (
              <Link
                key={item.slug}
                href={`/for-physicians/${item.slug}`}
                className="rounded-xl border border-surface-border bg-white p-5 transition hover:border-surgical-teal/40"
              >
                <p className="mb-1 text-[11px] tracking-wider text-surgical-teal uppercase">{copy.eyebrow}</p>
                <h3 className="mb-2 font-headline-sm text-primary">{copy.short}</h3>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">{copy.summary}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy">
                  {loc(lang, "Open guide", "افتح الدليل")}
                  <ExternalArrow />
                </span>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/70 py-space-3xl">
        <div className="page-wrap">
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Tertiary Scope of Practice & Referral Criteria", "نطاق الممارسة التخصصي ومعايير الإحالة")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {referralCriteria.map((item) => (
              <article key={item.title} className="rounded-xl border border-surface-border bg-white p-5">
                <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                <p className="mb-3 text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {(lang === "ar" ? item.pointsAr : item.points).map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { img: "/images/implant-revision.webp", cap: "Revision arthroplasty stems", capAr: "سيقان استبدال المراجعة" },
              { img: "/images/trabecular-titanium.webp", cap: "Trabecular osseointegration", capAr: "اندماج عظمي تربيقي" },
              { img: "/images/implant-trauma.webp", cap: "Periprosthetic cable plating", capAr: "صفائح وكابلات حول الزرعة" },
            ].map((item) => (
              <figure key={item.cap} className="overflow-hidden rounded-xl border border-surface-border bg-white">
                <Image src={item.img} alt={loc(lang, item.cap, item.capAr)} width={640} height={420} className="h-40 w-full object-cover" />
                <figcaption className="p-3 text-sm text-text-secondary">{loc(lang, item.cap, item.capAr)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-space-3xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal uppercase">
            {loc(lang, "Standardized Transfer Pathways", "مسارات التحويل المعيارية")}
          </p>
          <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "Expedited Physician Escalation Protocol", "بروتوكول التصعيد الطبي السريع")}
          </h2>
          <p className="mb-8 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Streamlined criteria for inter-hospital transfer from public, private, and military facilities across Abu Dhabi, Dubai, and the Northern Emirates.",
              "معايير مبسطة للتحويل بين المستشفيات من المنشآت الحكومية والخاصة والعسكرية عبر أبوظبي ودبي والإمارات الشمالية.",
            )}
          </p>
          <div className="grid gap-space-xl lg:grid-cols-12">
            <div className="flex flex-col gap-space-md lg:col-span-7">
              {[
                {
                  n: "1",
                  title: "Immediate Telephonic Triage",
                  titleAr: "فرز هاتفي فوري",
                  tag: "Available 24/7",
                  tagAr: "متاح على مدار الساعة",
                  body: "Direct phone triage via Healthpoint Transfer Coordinator at 800 77. For acute periprosthetic fractures, vascular compromise, or acute joint sepsis, the on-call consultant engages within 15 minutes.",
                  bodyAr: "فرز هاتفي مباشر عبر منسق التحويل في هيلث بوينت على 800 77. للكسور حول الزرعة أو القصور الوعائي أو إنتان المفصل الحاد يتواصل الاستشاري المناوب خلال 15 دقيقة.",
                },
                {
                  n: "2",
                  title: "Secure DICOM & PACS Gateway",
                  titleAr: "بوابة DICOM وPACS الآمنة",
                  tag: "Cloud Encryption",
                  tagAr: "تشفير سحابي",
                  body: "Upload CT angiograms, calibrated full-leg alignment films, MRI metal-reduction sequences, and sequential radiographs through the encrypted PACS receiver.",
                  bodyAr: "ارفع صور الأشعة المقطعية الوعائية وأفلام المحاذاة ومعالجة الرنين لتقليل المعدن والأشعة المتسلسلة عبر مستقبل PACS المشفر.",
                },
                {
                  n: "3",
                  title: "Pre-Transfer Medical Optimization",
                  titleAr: "تحسين طبي قبل التحويل",
                  tag: "MDT Clearance",
                  tagAr: "موافقة الفريق المتعدد",
                  body: "Joint aspiration analysis, systemic optimization, and anticoagulation bridge protocol before inter-facility ambulance transfer.",
                  bodyAr: "تحليل بزل المفصل والتحسين الجهازي وبروتوكول جسور مضادات التخثر قبل نقل الإسعاف بين المنشآت.",
                },
                {
                  n: "4",
                  title: "Direct Theatre / Inpatient Bed Access",
                  titleAr: "دخول مباشر لغرفة العمليات أو السرير",
                  tag: "Express Admission",
                  tagAr: "قبول سريع",
                  body: "Patients bypass emergency holding and admit directly to the Orthopaedic Surgical Inpatient Wing or laminar-flow theatres.",
                  bodyAr: "يتجاوز المرضى انتظار الطوارئ ويُقبلون مباشرة في جناح جراحة العظام أو غرف العمليات ذات التدفق الصفحي.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-space-md rounded-xl border border-surface-border bg-white p-space-lg shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clinical-navy font-bold text-white">
                    {step.n}
                  </div>
                  <div>
                    <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary">{loc(lang, step.title, step.titleAr)}</h3>
                      <span className="rounded bg-surgical-teal-subtle px-2 py-0.5 text-[11px] font-semibold text-surgical-teal">
                        {loc(lang, step.tag, step.tagAr)}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">{loc(lang, step.body, step.bodyAr)}</p>
                  </div>
                </div>
              ))}
            </div>
            <aside className="flex flex-col justify-between rounded-xl bg-clinical-navy p-space-xl text-white lg:col-span-5">
              <div>
                <p className="mb-3 text-[11px] tracking-wider text-surgical-teal-light uppercase">
                  {loc(lang, "Diagnostic Prerequisite", "المتطلبات التشخيصية")}
                </p>
                <h3 className="mb-3 font-headline-md text-headline-md text-white">
                  {loc(lang, "Imaging & Lab Workup Checklist", "قائمة التصوير والتحاليل")}
                </h3>
                <ul className="space-y-3 text-sm text-sand-tint/80">
                  <li>
                    <strong className="text-white">{loc(lang, "Orthogonal radiographs:", "أشعة متعامدة:")}</strong>{" "}
                    {loc(lang, "True AP pelvis, shoot-through lateral, calibrated magnification marker.", "حوض أمامي خلفي حقيقي، جانبي نافذ، وعلامة تكبير معايرة.")}
                  </li>
                  <li>
                    <strong className="text-white">{loc(lang, "Weight-bearing alignment:", "محاذاة بتحمل الوزن:")}</strong>{" "}
                    {loc(lang, "Bilateral long-leg views for hip-to-ankle mechanical axis.", "إطلالات الساق الطويلة ثنائية الجانب لمحور الورك إلى الكاحل.")}
                  </li>
                  <li>
                    <strong className="text-white">{loc(lang, "Metal-suppression CT:", "مقطعي بتقليل المعدن:")}</strong>{" "}
                    {loc(lang, "Volumetric CT with MARS for Paprosky/AORI grading.", "مقطعي حجمي مع MARS لتصنيف Paprosky/AORI.")}
                  </li>
                  <li>
                    <strong className="text-white">{loc(lang, "Synovial biomarkers:", "مؤشرات زليلية:")}</strong>{" "}
                    {loc(lang, "Aspiration cell count, % PMN, CRP and ESR.", "عدد الخلايا في البزل ونسبة العدلات وCRP وESR.")}
                  </li>
                </ul>
              </div>
              <a className="mt-6 text-sm font-semibold text-surgical-teal-light hover:underline" href="tel:80077">
                {loc(lang, "Need radiological guidance? Speak to Rad Consultant", "هل تحتاج إرشاداً شعاعياً؟ تحدث مع استشاري الأشعة")}
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-sand-tint/50 py-space-3xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-clinical-gold-honorary uppercase">
            {loc(lang, "Academic Rigour & Surgical Education", "الصرامة الأكاديمية والتعليم الجراحي")}
          </p>
          <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
            {loc(lang, "AO Recon Faculty & Clinical Fellowship Sessions", "هيئة AO Recon وجلسات الزمالة السريرية")}
          </h2>
          <p className="mb-8 max-w-2xl text-text-secondary">
            {loc(
              lang,
              "Dr. Feras Ya'ish regularly convenes accredited CME, hands-on anatomical cadaveric arthroplasty courses, and interactive tertiary case panels across the Middle East.",
              "يعقد الدكتور فراس يعيش بانتظام تعليماً طبياً مستمراً معتمداً ودورات تشريح جثث لاستبدال المفصل ولجان حالات تخصصية عبر الشرق الأوسط.",
            )}
          </p>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              {
                src: "/images/practice/lecture-gulf-knee.jpeg",
                alt: "Dr Feras Ya'ish lecturing at the Emirates Orthopaedic Society Gulf Knee Course",
                altAr: "الدكتور فراس يعيش يحاضر في دورة الخليج للركبة",
                position: "object-center",
              },
              {
                src: "/images/practice/teaching-sawbone.webp",
                alt: "Dr Feras Ya'ish teaching knee reconstruction on a surgical model",
                altAr: "الدكتور فراس يعيش يدرّس إعادة بناء الركبة على نموذج جراحي",
                position: "object-top",
              },
              {
                src: "/images/practice/faculty-ao-sharjah.webp",
                alt: "AO Recon faculty at a joint preservation and replacement course",
                altAr: "هيئة AO Recon في دورة الحفاظ على المفصل واستبداله",
                position: "object-center",
              },
            ].map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-xl border border-surface-border bg-white">
                <Image src={photo.src} alt={loc(lang, photo.alt, photo.altAr)} width={1200} height={800} className={`h-52 w-full object-cover ${photo.position}`} />
              </figure>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                tag: "Cadaveric Lab · Dubai",
                tagAr: "مختبر جثث · دبي",
                cme: "14 CME Hrs",
                title: "AO Recon Masterclass: Complex Revision Total Knee",
                titleAr: "دورة AO Recon: مراجعة الركبة المعقدة",
                body: "Cadaver dissection covering bone-defect augmentation with titanium metaphyseal cones, line-to-line stem fixation, and rotating-hinge kinematic balance.",
                bodyAr: "تشريح جثث يغطي تعزيز عيوب العظم بمخاريط تيتانيوم كردوسية وتثبيت الساق ومحاذاة المفصل المفصلي الدوار.",
                meta: "November 22–23, 2025",
                metaAr: "22–23 نوفمبر 2025",
              },
              {
                tag: "Clinical Webinar",
                tagAr: "ندوة سريرية",
                cme: "3 CME Hrs",
                title: "Managing Periprosthetic Fractures Around Stable Stems",
                titleAr: "تدبير الكسور حول الزرعة مع سيقان ثابتة",
                body: "Interactive round-table on Vancouver B1 vs B2 differentiation, cable-plate constructs, and minimally invasive submuscular bridge techniques.",
                bodyAr: "طاولة مستديرة حول التفريق بين Vancouver B1 وB2 وبناء الصفائح والكابلات والتقنيات طفيفة التوغل.",
                meta: "Monthly series",
                metaAr: "سلسلة شهرية",
              },
              {
                tag: "Hospital Fellowship",
                tagAr: "زمالة المستشفى",
                cme: "Fellowship Credit",
                title: "Visiting Surgeon Observer Programme at Healthpoint",
                titleAr: "برنامج مراقبة الجرّاح الزائر في هيلث بوينت",
                body: "Theatre immersion in robotic and patient-specific knee reconstruction, complex revision, and trauma under Dr. Ya'ish's mentorship.",
                bodyAr: "حضور غرفة العمليات في استبدال الورك الأمامي وإعادة بناء الركبة الروبوتية والمراجعة المعقدة تحت إشراف الدكتور يعيش.",
                meta: "Healthpoint Abu Dhabi",
                metaAr: "هيلث بوينت أبوظبي",
              },
            ].map((item) => (
              <article key={item.title} className="flex flex-col justify-between rounded-xl border border-surface-border bg-white p-5">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded bg-sand-tint px-2 py-0.5 text-[11px] font-semibold text-clinical-navy">{loc(lang, item.tag, item.tagAr)}</span>
                    <span className="text-[11px] font-bold text-surgical-teal">{item.cme}</span>
                  </div>
                  <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, item.title, item.titleAr)}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-text-secondary">{loc(lang, item.body, item.bodyAr)}</p>
                  <p className="text-xs text-text-secondary">{loc(lang, item.meta, item.metaAr)}</p>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-clinical-navy"
                    href="/for-physicians/ao-recon-faculty"
                  >
                    {loc(lang, "Open academic guide", "افتح الدليل الأكاديمي")}
                    <ExternalArrow />
                  </Link>
                  <a className="rounded bg-sand-tint px-3 py-2 text-center text-[12px] font-semibold text-clinical-navy" href="#case-submission">
                    {loc(lang, "Request syllabus / observer placement", "اطلب المنهج أو مقعد المراقبة")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-tint py-space-3xl" id="case-submission">
        <div className="page-wrap grid items-start gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal uppercase">
              {loc(lang, "Direct Transmission", "الإرسال المباشر")}
            </p>
            <h2 className="mb-3 font-headline-lg text-headline-lg text-primary">
              {loc(lang, "Secure Physician Referral Gateway", "بوابة إحالة الأطباء الآمنة")}
            </h2>
            <p className="mb-6 text-sm text-text-secondary">
              {loc(
                lang,
                "Submit diagnostic data, pathology workup, and imaging links directly for immediate clinical evaluation by Dr. Feras Ya'ish.",
                "أرسل البيانات التشخيصية والتحاليل وروابط التصوير للتقييم السريري المباشر من الدكتور فراس يعيش.",
              )}
            </p>
            <div className="mb-4 rounded-xl border border-surface-border bg-white p-5">
              <h3 className="mb-2 font-headline-sm text-primary">{loc(lang, "Referral Coordinator Hotline", "خط منسق الإحالة")}</h3>
              <p className="mb-3 text-sm text-text-secondary">
                {loc(lang, "For direct hospital-to-hospital transfer authorization and insurance clearance coordination:", "لتفويض التحويل بين المستشفيات وتنسيق موافقة التأمين:")}
              </p>
              <a className="text-xl font-semibold text-clinical-navy" href="tel:80077">800 77</a>
              <p className="mt-1 text-xs text-text-secondary">{loc(lang, "Toll-Free Healthpoint Central Dispatch (Ext 4022)", "الرقم المجاني لمركز هيلث بوينت (تحويلة 4022)")}</p>
            </div>
            <div className="rounded-xl bg-clinical-slate-deep p-5 text-white">
              <p className="mb-2 text-[11px] tracking-wider text-surgical-teal-light uppercase">
                {loc(lang, "Data Protection Compliance", "الامتثال لحماية البيانات")}
              </p>
              <p className="text-sm text-sand-tint/80">
                {loc(
                  lang,
                  "All clinical records uploaded via this portal adhere to UAE Federal Law No. 2 of 2019 concerning Health Data Protection and DoH Abu Dhabi Health Information Exchange (Malaffi) standards.",
                  "تلتزم السجلات السريرية عبر هذه البوابة بالقانون الاتحادي الإماراتي رقم 2 لسنة 2019 ومعايير تبادل المعلومات الصحية في دائرة الصحة (ملفي).",
                )}
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <PhysicianReferralForm />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Co-management"
        eyebrowAr="الإدارة المشتركة"
        title="Need an MDT opinion or observer placement?"
        titleAr="هل تحتاج رأي فريق متعدد التخصصات أو مقعد مراقبة؟"
        body="Use the case submission gateway or call 800 77 for hospital-to-hospital transfer authorization and insurance clearance coordination."
        bodyAr="استخدم بوابة إرسال الحالة أو اتصل على 800 77 لتفويض التحويل بين المستشفيات وتنسيق موافقة التأمين."
      />
    </>
  );
}
