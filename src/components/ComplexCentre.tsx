"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { caseExamples } from "@/lib/cases";
import { useLanguage } from "@/lib/language";

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

export function ComplexCentre() {
  const { lang, t } = useLanguage();
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, caseExamples.length - visible);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = window.setInterval(goNext, 5500);
    return () => window.clearInterval(timer);
  }, [goNext, paused, maxIndex]);

  return (
    <section
      className="relative w-full overflow-hidden bg-slate-900 py-space-3xl text-on-primary lg:py-space-4xl"
      id="case-examples"
    >
      <div className="page-wrap relative z-10">
        <div className="mb-space-2xl flex flex-col gap-space-md md:flex-row md:items-end md:justify-between">
          <div className="max-w-max-width-editorial">
            <div className="mb-space-xs inline-flex items-center gap-space-xs rounded border border-white/15 bg-white/10 px-space-sm py-1 font-label-md text-label-md tracking-wider text-surgical-teal-light uppercase">
              <span className="h-2 w-2 rounded-full bg-surgical-teal-light" />
              {t.casesBadge}
            </div>
            <h2 className="mb-space-xs font-headline-lg text-headline-lg text-on-primary">{t.casesTitle}</h2>
            <p className="font-body-md text-body-md leading-relaxed text-sand-tint/80">{t.casesBody}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label={lang === "ar" ? "الحالة السابقة" : "Previous cases"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-surgical-teal/50 hover:bg-surgical-teal/20"
            >
              <svg className="h-5 w-5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6 9 12l6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={lang === "ar" ? "الحالة التالية" : "Next cases"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-surgical-teal/50 hover:bg-surgical-teal/20"
            >
              <svg className="h-5 w-5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="-mx-2 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              width: `${(caseExamples.length / visible) * 100}%`,
              transform: lang === "ar" ? `translateX(${index * (100 / caseExamples.length)}%)` : `translateX(-${index * (100 / caseExamples.length)}%)`,
            }}
          >
            {caseExamples.map((item) => (
              <div
                key={item.slug}
                className="box-border shrink-0 px-2"
                style={{ width: `${100 / caseExamples.length}%` }}
              >
                <Link
                  href={`/case-examples/${item.slug}`}
                  className="glass-card-dark flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 transition-all hover:border-surgical-teal/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-clinical-slate-deep">
                    <Image
                      src={item.image}
                      alt={lang === "ar" ? item.titleAr : item.title}
                      fill
                      className={item.imageClassName ?? "object-cover object-center"}
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 50vw, 100vw"
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
                    <span className="inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-surgical-teal-light">
                      <span>{t.readAudit}</span>
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-space-md flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
            <button
              key={dot}
              type="button"
              aria-label={lang === "ar" ? `شريحة ${dot + 1}` : `Slide ${dot + 1}`}
              onClick={() => setIndex(dot)}
              className={`h-2 rounded-full transition-all ${
                index === dot ? "w-6 bg-surgical-teal-light" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <p className="text-center font-mono text-[11px] text-sand-tint/60">{t.casesNote}</p>
      </div>
    </section>
  );
}
