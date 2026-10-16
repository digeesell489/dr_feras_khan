"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CloseIcon } from "@/components/ui/Icons";
import { eventGalleries } from "@/lib/events";
import { useLanguage } from "@/lib/language";

export function EventsPage() {
  const { lang } = useLanguage();
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const photos = eventGalleries[tab].photos;

  const showPrev = useCallback(() => {
    setOpen((current) => (current === null ? current : (current - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const showNext = useCallback(() => {
    setOpen((current) => (current === null ? current : (current + 1) % photos.length));
  }, [photos.length]);

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
    <>
      <section className="bg-clinical-navy py-space-3xl text-white lg:py-space-4xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
            {lang === "ar" ? "الدكتور فراس يعيش" : "Dr. Feras Ya'ish"}
          </p>
          <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">
            {lang === "ar" ? "صور الفعاليات" : "Event Images"}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">
            {lang === "ar"
              ? "صور المحاضرات والدورات وورش العمل. مرّر المؤشر على الصورة ليظهر اسم الفعالية، وانقر للتكبير."
              : "Photographs from lectures, courses, and workshops. Hover a photo to see the event name, and click to enlarge it."}
          </p>
        </div>
      </section>

      <section className="bg-sand-tint/60 py-space-3xl">
        <div className="page-wrap">
          <div className="mb-6 flex flex-wrap gap-2" role="tablist">
            {eventGalleries.map((gallery, galleryIndex) => {
              const selected = galleryIndex === tab;
              return (
                <button
                  key={gallery.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setTab(galleryIndex);
                    setOpen(null);
                  }}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    selected
                      ? "bg-clinical-navy text-white"
                      : "border border-clinical-navy/15 bg-white text-clinical-navy hover:border-clinical-navy/40"
                  }`}
                >
                  {lang === "ar" ? gallery.labelAr : gallery.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((item, itemIndex) => {
              const name = lang === "ar" ? item.altAr : item.alt;
              return (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setOpen(itemIndex)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/80 bg-white text-start"
                  aria-label={name}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-clinical-navy/90 via-clinical-navy/55 to-transparent px-3 pt-10 pb-3 text-sm leading-snug text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-clinical-slate-deep/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lang === "ar" ? photos[open].altAr : photos[open].alt}
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
              src={photos[open].image}
              alt={lang === "ar" ? photos[open].altAr : photos[open].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <figcaption className="absolute inset-x-0 -bottom-8 text-center text-sm text-white/80">
              {lang === "ar" ? photos[open].altAr : photos[open].alt}
              <span className="mx-2 text-white/50">·</span>
              {open + 1} / {photos.length}
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
    </>
  );
}
