"use client";

import Image from "next/image";
import Link from "next/link";
import { educationArticles, educationGallery, educationVideos } from "@/lib/education";
import { INSTAGRAM_URL } from "@/lib/links";
import { useLanguage } from "@/lib/language";
import { Badge, Icon } from "./ui/Icons";

export function PatientEducation() {
  const { lang, t } = useLanguage();
  const featured = educationVideos[0];
  const playlist = educationVideos.slice(1);

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
          <Link
            href={`/patient-education/${featured.id}`}
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
          </Link>

          <div className="flex flex-col gap-space-md lg:col-span-5">
            {playlist.map((item) => (
              <Link
                key={item.id}
                href={`/patient-education/${item.id}`}
                className="glass-card-light flex items-center gap-space-sm rounded-xl border border-white/80 p-space-sm text-start transition-colors hover:border-surgical-teal/40"
              >
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
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-space-2xl">
          <p className="mb-space-md font-label-md text-label-md font-bold tracking-wider text-clinical-navy uppercase">
            {t.educationArticles}
          </p>
          <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
            {educationArticles.map((item) => (
              <Link
                key={item.id}
                href={`/patient-education/${item.id}`}
                className="glass-card-light overflow-hidden rounded-xl border border-white/80 p-space-sm transition-all hover:-translate-y-1 hover:border-surgical-teal/40"
              >
                <div className="relative mb-space-sm aspect-[16/10] overflow-hidden rounded-lg bg-surface-container">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="280px" />
                </div>
                <span className="mb-1 inline-block rounded bg-sand-tint px-2 py-0.5 font-mono text-[10px] text-clinical-navy uppercase">
                  {lang === "ar" ? item.categoryAr : item.category}
                </span>
                <h3 className="mb-1 font-headline-sm text-sm font-bold text-primary">
                  {lang === "ar" ? item.titleAr : item.title}
                </h3>
                <p className="text-xs leading-relaxed text-text-secondary">{lang === "ar" ? item.bodyAr : item.body}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-surface-border pt-space-xl">
          <div className="mb-space-md flex flex-col items-center justify-between gap-space-sm sm:flex-row">
            <span className="font-label-md text-label-md font-bold tracking-wider text-clinical-navy uppercase">
              {t.eduGallery}
            </span>
            <a
              className="flex items-center gap-1 font-label-md text-label-md font-semibold text-surgical-teal hover:underline"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>{t.followIg}</span>
              <Icon name="open_in_new" className="text-[16px]" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-space-sm md:grid-cols-4">
            {educationGallery.map((item) => (
              <div
                key={item.alt}
                className="group relative aspect-square overflow-hidden rounded-xl border border-white/80 bg-surface-container"
              >
                <Image
                  src={item.image}
                  alt={lang === "ar" ? item.altAr : item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 280px, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-clinical-slate-deep/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Icon name="visibility" className="text-[22px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
