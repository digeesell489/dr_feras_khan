"use client";

import Image from "next/image";
import { AuthorByline } from "@/components/AuthorByline";
import { ExternalArrow } from "@/components/ui/Icons";
import { mediaAppearances } from "@/lib/media-appearances";
import { useLanguage } from "@/lib/language";

export function EventMediaPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="bg-clinical-navy py-space-3xl text-white lg:py-space-4xl">
        <div className="page-wrap">
          <p className="mb-2 text-[11px] tracking-[0.2em] text-surgical-teal-light uppercase">
            {lang === "ar" ? "الفعاليات" : "Events"}
          </p>
          <h1 className="max-w-3xl font-headline-hero text-[2.25rem] leading-tight lg:text-[3rem]">
            {lang === "ar" ? "الظهور في الصحف والإعلام" : "Appearances on newspapers and media"}
          </h1>
          <AuthorByline colorClass="text-sand-tint/90" showCredentials />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-sand-tint/75">
            {lang === "ar"
              ? "مقابلات الدكتور فراس يعيش وتغطيته في الصحف والتلفزيون ووسائل الإعلام."
              : "Newspaper, television, and media appearances by Dr. Feras Ya'ish."}
          </p>
        </div>
      </section>

      <section className="bg-sand-tint/60 py-space-3xl">
        <div className="page-wrap grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaAppearances.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition hover:border-surgical-teal/40"
            >
              <div className="relative aspect-[16/9] bg-white">
                <Image src={item.image} alt={item.imageAlt} fill className="object-contain object-center" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-semibold tracking-wider text-surgical-teal uppercase">
                  {lang === "ar" ? item.sourceAr : item.source}
                  <span className="mx-2 text-outline">·</span>
                  {lang === "ar" ? item.dateAr : item.date}
                </p>
                <h2 className="mt-2 font-headline-sm text-[1.25rem] leading-snug text-primary">
                  {lang === "ar" ? item.titleAr : item.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {lang === "ar" ? item.bodyAr : item.body}
                </p>
                <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded bg-clinical-navy px-4 py-2.5 text-[13px] font-semibold text-white">
                  {lang === "ar" ? "اقرأ المزيد" : "Read more"}
                  <ExternalArrow />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
