"use client";

import Image from "next/image";
import { caseStudies } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export function ComplexCentre() {
  const { lang, t } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900 py-space-3xl text-on-primary lg:py-space-4xl"
      id="case-studies"
    >
      <div className="page-wrap relative z-10">
        <div className="mb-space-2xl max-w-max-width-editorial">
          <div className="mb-space-xs inline-flex items-center gap-space-xs rounded border border-white/15 bg-white/10 px-space-sm py-1 font-label-md text-label-md tracking-wider text-surgical-teal-light uppercase">
            <span className="h-2 w-2 rounded-full bg-surgical-teal-light" />
            {t.casesBadge}
          </div>
          <h2 className="mb-space-xs font-headline-lg text-headline-lg text-on-primary">{t.casesTitle}</h2>
          <p className="font-body-md text-body-md leading-relaxed text-sand-tint/80">{t.casesBody}</p>
        </div>

        <div className="mb-space-md grid grid-cols-1 gap-space-lg md:grid-cols-3">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="glass-card-dark flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 transition-all hover:border-surgical-teal/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-clinical-slate-deep">
                <Image
                  src={item.image}
                  alt={lang === "ar" ? item.titleAr : item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 340px, 100vw"
                />
                <div className="absolute top-2 start-2 rounded border border-white/10 bg-clinical-slate-deep/80 px-2 py-0.5 font-mono text-[10px] text-surgical-teal-light">
                  {item.code}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-space-md">
                <div>
                  <div className="mb-space-xs flex flex-wrap gap-1.5">
                    {(lang === "ar" ? item.tagsAr : item.tags).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-surgical-teal-light uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-space-xs font-headline-sm text-headline-sm text-on-primary">
                    {lang === "ar" ? item.titleAr : item.title}
                  </h3>
                  <p className="mb-space-md font-body-sm text-xs leading-relaxed text-sand-tint/80">
                    {lang === "ar" ? item.bodyAr : item.body}
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-surgical-teal-light hover:underline"
                  href="#clinic-hours"
                >
                  <span>{t.readAudit}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-mono text-[11px] text-sand-tint/60">{t.casesNote}</p>
      </div>
    </section>
  );
}
