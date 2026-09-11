import Image from "next/image";
import { caseStudies } from "@/lib/content";
import { Section, SectionHeader } from "./ui/Section";

export function ComplexCentre() {
  return (
    <Section id="complex" className="bg-navy text-cream-soft">
      <SectionHeader
        dark
        badge="Documented techniques & clinical cases"
        title="Clinical Case Studies"
        subtitle="Documented techniques and operative executions of complex primary, revision, and periarticular trauma reconstructions."
      />

      <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121c2e]"
          >
            <div className="relative aspect-[16/11] bg-[#0a1220]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 340px, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 text-[18px] font-medium leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-[13px] leading-6 text-white/55">{item.body}</p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#7dba9e]">
                View case study →
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[640px] text-center text-[11px] leading-5 text-white/35">
        Images are conceptual and show implant product systems. No patient faces
        or identifiable clinical data.
      </p>
    </Section>
  );
}
