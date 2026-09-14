"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ExternalArrow } from "@/components/ui/Icons";
import { physicianCopy } from "@/lib/ar-copy";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";
import { physicianPages, referralCriteria } from "@/lib/physicians";

export function ForPhysiciansPage() {
  const { lang, t } = useLanguage();

  return (
    <>
      <section className="bg-clinical-slate-deep py-space-3xl text-white lg:py-space-4xl">
        <div className="page-wrap grid items-center gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-2 text-[11px] tracking-[0.2em] text-clinical-gold-honorary uppercase">{t.physiciansCrumbs}</p>
            <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">
              {loc(lang, "Tertiary Orthopaedic Referral Gateway", "بوابة التحويل التخصصي لجراحة العظام")}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">
              {loc(
                lang,
                "Expedited clinical triage for complex primary arthroplasty, failed or infected prostheses, periprosthetic fractures, and severe articular trauma — dedicated to orthopaedic surgeons, rheumatologists, emergency physicians, and musculoskeletal specialists.",
                "فرز سريري سريع لاستبدال المفصل المعقد، والزرعات الفاشلة أو المصابة، والكسور حول الزرعة، والرضوض المفصلية الشديدة — مخصص لجراحي العظام وأطباء الروماتيزم والطوارئ واختصاصيي الجهاز العضلي الهيكلي.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="rounded bg-surgical-teal px-4 py-2.5 text-[13px] font-semibold text-white" href="/for-physicians/case-submission">
                {t.submitCase}
              </Link>
              <a className="rounded border border-white/25 px-4 py-2.5 text-[13px] font-semibold" href="tel:80077">
                {t.urgentHotline}
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-4">
            <p className="text-[11px] tracking-widest text-surgical-teal-light uppercase">
              {loc(lang, "On-call engagement", "استجابة المناوبة")}
            </p>
            <p className="font-serif text-4xl text-white">&lt; 4 Hours</p>
            <p className="mt-2 text-sm text-sand-tint/70">
              {loc(
                lang,
                "Typical case review window after complete imaging transfer. Life- or limb-threatening cases: dial 800 77 now.",
                "نافذة مراجعة الحالة المعتادة بعد اكتمال نقل التصوير. للحالات المهددة للحياة أو الطرف: اتصل الآن على 800 77.",
              )}
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
              { img: "/images/implant-revision.png", cap: "Revision arthroplasty stems", capAr: "سيقان استبدال المراجعة" },
              { img: "/images/implant-robotic.png", cap: "Trabecular osseointegration", capAr: "اندماج عظمي تربيقي" },
              { img: "/images/implant-trauma.png", cap: "Periprosthetic cable plating", capAr: "صفائح وكابلات حول الزرعة" },
            ].map((item) => (
              <figure key={item.cap} className="overflow-hidden rounded-xl border border-surface-border bg-white">
                <Image src={item.img} alt={loc(lang, item.cap, item.capAr)} width={640} height={420} className="h-40 w-full object-cover" />
                <figcaption className="p-3 text-sm text-text-secondary">{loc(lang, item.cap, item.capAr)}</figcaption>
              </figure>
            ))}
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
