"use client";

import Image from "next/image";
import { useState } from "react";
import { educationGallery, educationVideos } from "@/lib/content";
import { Section, SectionHeader } from "./ui/Section";

export function PatientEducation() {
  const [activeId, setActiveId] = useState(educationVideos[0].id);
  const active = educationVideos.find((item) => item.id === activeId) ?? educationVideos[0];
  const playlist = educationVideos.filter((item) => item.id !== active.id);

  return (
    <Section id="education">
      <SectionHeader
        badge="Surgical workflows & recovery"
        title="Patient Education"
        subtitle="Structured explanations of surgical workflows, joint mechanics, and post-operative physical recovery pathways."
      />

      <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_rgba(28,24,20,0.04)]">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
          <button
            type="button"
            className="relative min-h-[260px] bg-[#12343c] text-left lg:min-h-[360px]"
            aria-label={`Play ${active.title}`}
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 700px, 100vw"
            />
            <span className="absolute left-5 top-5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white">
              {active.duration}
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3d7a64] text-white shadow-lg">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M5 3.5v9l8-4.5-8-4.5Z" />
                </svg>
              </span>
            </span>
          </button>

          <div className="flex min-h-0 flex-col divide-y divide-line">
            {playlist.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="flex min-h-[120px] flex-1 items-center gap-4 p-5 text-left transition-colors hover:bg-cream-soft"
              >
                <span className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-[#eef3f6]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-medium tracking-tight">
                    {item.title}
                  </span>
                  <span className="mt-1 line-clamp-2 block text-[12px] leading-5 text-muted">
                    {item.body}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-line px-6 py-6 md:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
            {active.category}
          </p>
          <h3 className="mt-2 text-[22px] font-medium tracking-tight">{active.title}</h3>
          <p className="mt-2 max-w-[720px] text-[14px] leading-7 text-muted">{active.body}</p>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
          Surgical workflows &amp; educational resources
        </p>
        <p className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-[#3d7a64] sm:block">
          Physical recovery and hospital
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 items-stretch gap-3 md:grid-cols-4">
        {educationGallery.map((item) => (
          <div key={item.alt} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 250px, 50vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
