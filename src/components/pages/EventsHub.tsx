"use client";

import Link from "next/link";
import { eventMenu } from "@/lib/events";
import { useLanguage } from "@/lib/language";

const copy = {
  images: {
    body: "Photographs from lectures, courses, and workshops.",
    bodyAr: "صور المحاضرات والدورات وورش العمل.",
  },
  media: {
    body: "Newspaper, television, and other media appearances.",
    bodyAr: "الظهور في الصحف والتلفزيون ووسائل الإعلام.",
  },
};

export function EventsHub() {
  const { lang } = useLanguage();

  return (
    <section className="bg-clinical-navy py-space-3xl text-white lg:py-space-4xl">
      <div className="page-wrap">
        <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
          {lang === "ar" ? "الدكتور فراس يعيش" : "Dr. Feras Ya'ish"}
        </p>
        <h1 className="font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">
          {lang === "ar" ? "الفعاليات" : "Events"}
        </h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {eventMenu.map((item) => {
            const detail = item.href.endsWith("/images") ? copy.images : copy.media;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h2 className="font-headline-sm text-[1.35rem]">{lang === "ar" ? item.shortAr : item.short}</h2>
                <p className="mt-2 text-sm text-sand-tint/75">{lang === "ar" ? detail.bodyAr : detail.body}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
