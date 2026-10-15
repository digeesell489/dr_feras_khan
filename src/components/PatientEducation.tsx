"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { educationGallery, educationVideos } from "@/lib/education";
import { useLanguage } from "@/lib/language";
import { Badge, CloseIcon, Icon } from "./ui/Icons";

const gallery = educationGallery.slice(0, 10);

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

export function PatientEducation() {
  const { lang, t } = useLanguage();
  const featured = educationVideos[0];
  const playlist = educationVideos.slice(1);
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, gallery.length - visible);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
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

  const showPrev = useCallback(() => {
    setOpen((current) => (current === null ? current : (current - 1 + gallery.length) % gallery.length));
  }, []);

  const showNext = useCallback(() => {
    setOpen((current) => (current === null ? current : (current + 1) % gallery.length));
  }, []);

  useEffect(() => {
    if (paused || open !== null || maxIndex === 0) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(goNext, 4500);
    return () => window.clearInterval(timer);
  }, [goNext, paused, open, maxIndex]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, showNext, showPrev]);

  return (
    <section
      className="relative w-full border-b border-surface-border bg-sand-tint/60 py-space-3xl lg:py-space-4xl"
      id="patient-education"
    >
      <div className="page-wrap">
        <div className="mx-auto mb-space-2xl max-w-max-width-editorial text-center">
          <Badge>
            <Icon name="play_circle" className="text-[16px]" />
            {t.eduBadge}
          </Badge>
          <h2 className="mb-space-xs font-headline-lg text-headline-lg text-primary">{t.eduTitle}</h2>
          <p className="font-body-md text-body-md text-text-secondary">{t.eduBody}</p>
        </div>

        <p className="mb-space-md font-label-md text-label-md font-bold tracking-wider text-clinical-navy uppercase">
          {t.educationVideos}
        </p>
        <div className="mb-space-2xl grid grid-cols-1 gap-space-lg lg:grid-cols-12">
          <a
            href={featured.videoUrl ?? `/patient-education/${featured.id}`}
            {...(featured.videoUrl ? { target: "_blank", rel: "noreferrer" } : {})}
            className="glass-card-light flex flex-col justify-between overflow-hidden rounded-2xl border border-white/80 p-space-xs lg:col-span-7"
          >
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-clinical-slate-deep">
              <Image
                src={featured.image}
                alt={lang === "ar" ? featured.titleAr : featured.title}
                fill
                className="object-cover opacity-60"
                sizes="(min-width: 1024px) 700px, 100vw"
              />
              {featured.duration ? (
                <div className="absolute top-3 end-3 rounded bg-clinical-slate-deep/90 px-2 py-0.5 font-mono text-[11px] text-white">
                  {featured.duration}
                </div>
              ) : null}
              <div className="absolute flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-clinical-navy/90 text-on-primary shadow-lg transition-transform hover:scale-110">
                <Icon name="play_arrow" className="text-[32px] text-surgical-teal-light" />
              </div>
            </div>
            <div className="p-space-md">
              <span className="mb-2 inline-block rounded bg-surgical-teal-subtle px-2 py-0.5 text-[10px] font-bold text-surgical-teal uppercase">
                {lang === "ar" ? featured.categoryAr : featured.category}
              </span>
              <h3 className="mb-space-xs font-headline-md text-headline-md text-primary">
                {lang === "ar" ? featured.titleAr : featured.title}
              </h3>
              <p className="font-body-sm text-body-sm leading-relaxed text-text-secondary">
                {lang === "ar" ? featured.bodyAr : featured.body}
              </p>
            </div>
          </a>

          <div className="flex flex-col gap-space-md lg:col-span-5">
            {playlist.map((item) => {
              const cardClass =
                "glass-card-light flex items-center gap-space-sm rounded-xl border border-white/80 p-space-sm text-start transition-colors hover:border-surgical-teal/40";
              const cardBody = (
                <>
                  <span className="relative flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-900">
                    <Image src={item.image} alt="" fill className="object-cover opacity-60" sizes="96px" />
                    <Icon name="play_circle" className="absolute text-[24px] text-surgical-teal-light" />
                    {item.duration ? (
                      <span className="absolute end-1 bottom-1 rounded bg-black/60 px-1 font-mono text-[9px] text-white">
                        {item.duration}
                      </span>
                    ) : null}
                  </span>
                  <span>
                    <span className="mb-1 block font-headline-sm text-sm font-semibold text-primary">
                      {lang === "ar" ? item.titleAr : item.title}
                    </span>
                    <span className="block text-xs leading-snug text-text-secondary">
                      {lang === "ar" ? item.bodyAr : item.body}
                    </span>
                  </span>
                </>
              );

              return item.videoUrl ? (
                <a key={item.id} href={item.videoUrl} target="_blank" rel="noreferrer" className={cardClass}>
                  {cardBody}
                </a>
              ) : (
                <Link key={item.id} href={`/patient-education/${item.id}`} className={cardClass}>
                  {cardBody}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-surface-border pt-space-xl">
          <div className="mb-space-md flex flex-col items-start justify-between gap-space-sm sm:flex-row sm:items-center">
            <span className="font-label-md text-label-md font-bold tracking-wider text-clinical-navy uppercase">
              {t.eduGallery}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                className="font-label-md text-label-md font-semibold text-surgical-teal hover:underline"
                href="/events/images"
              >
                {t.viewAll}
              </Link>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={lang === "ar" ? "الصورة السابقة" : "Previous photo"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-clinical-navy transition hover:border-surgical-teal/50 hover:text-surgical-teal"
                >
                  <svg className="h-5 w-5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6 9 12l6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={lang === "ar" ? "الصورة التالية" : "Next photo"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-clinical-navy transition hover:border-surgical-teal/50 hover:text-surgical-teal"
                >
                  <svg className="h-5 w-5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(gallery.length / visible) * 100}%`,
                transform: lang === "ar" ? `translateX(${index * (100 / gallery.length)}%)` : `translateX(-${index * (100 / gallery.length)}%)`,
              }}
            >
              {gallery.map((item, itemIndex) => (
                <div key={item.image} className="box-border shrink-0 px-1.5" style={{ width: `${100 / gallery.length}%` }}>
                  <button
                    type="button"
                    onClick={() => setOpen(itemIndex)}
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/80 bg-surface-container"
                    aria-label={lang === "ar" ? item.altAr : item.alt}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className={item.fit}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-clinical-slate-deep/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <Icon name="visibility" className="text-[22px]" />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            {gallery.map((item, dot) => (
              <button
                key={item.image}
                type="button"
                aria-label={lang === "ar" ? `الصورة ${dot + 1}` : `Photo ${dot + 1}`}
                aria-current={dot === index ? "true" : undefined}
                onClick={() => setIndex(Math.min(dot, maxIndex))}
                className={`h-2 rounded-full transition-all ${dot === index ? "w-6 bg-surgical-teal" : "w-2 bg-clinical-navy/25"}`}
              />
            ))}
          </div>
        </div>
        {open !== null ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-clinical-slate-deep/92 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={lang === "ar" ? gallery[open].altAr : gallery[open].alt}
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label={lang === "ar" ? "إغلاق" : "Close"}
              className="absolute top-4 end-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label={lang === "ar" ? "الصورة السابقة" : "Previous photo"}
              className="absolute start-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:start-6"
            >
              <svg className="h-5 w-5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6 9 12l6 6" />
              </svg>
            </button>
            <figure className="relative h-[78vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
              <Image
                src={gallery[open].image}
                alt={lang === "ar" ? gallery[open].altAr : gallery[open].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <figcaption className="absolute inset-x-0 -bottom-8 text-center text-sm text-white/80">
                {open + 1} / {gallery.length}
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label={lang === "ar" ? "الصورة التالية" : "Next photo"}
              className="absolute end-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:end-6"
            >
              <svg className="h-5 w-5 rtl:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
