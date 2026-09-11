import Image from "next/image";
import { stats } from "@/lib/content";
import { Section } from "./ui/Section";

export function Hero() {
  return (
    <Section id="about" innerClassName="py-10 md:py-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Consultant trauma &amp; orthopaedic surgeon · hip &amp; knee specialist · UAE &amp; UK
          </p>

          <h1 className="serif mt-4 max-w-[640px] text-[40px] leading-[1.08] tracking-[-0.03em] text-ink md:text-[56px]">
            Restoring Natural Mobility with Precision Orthopaedic Surgery
          </h1>

          <p className="mt-5 text-[13px] tracking-wide text-ink/80">
            Dr. Feras Ya&apos;ish · MBBS · MRCS(Ed) · FRCS (Tr&amp;Orth) · CCT (UK)
          </p>

          <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-muted">
            Specialised in robotic-assisted joint replacement, complex revision hip
            &amp; knee surgery, and advanced ligament reconstruction at Healthpoint
            Hospital, Zayed Sports City, Abu Dhabi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-navy px-5 text-[13px] font-medium text-cream-soft transition-colors hover:bg-navy-mid"
            >
              Request Appointment
            </a>
            <a
              href="tel:80077"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-line bg-transparent px-5 text-[13px] font-medium text-ink transition-colors hover:bg-white/50"
            >
              Call 800 77 (24h Phone)
            </a>
          </div>

          <p className="mt-4 text-[12px] text-muted/80">
            International patients &amp; complex revision referrals welcome.
          </p>
        </div>

        <div className="w-full">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_50px_rgba(28,24,20,0.08)]">
            <div className="flex items-center justify-center bg-navy px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/80">
              MBBS · MRCS · FRCS · CCT
            </div>
            <div className="relative aspect-[4/5] bg-[#f3efe8]">
              <Image
                src="/images/doctor-hero-card.png"
                alt="Dr. Feras Ya'ish, consultant orthopaedic surgeon"
                fill
                priority
                className="object-cover object-[center_12%]"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
            <div className="bg-navy px-4 py-3 text-center text-[12px] tracking-wide text-white/85">
              Hip &amp; Knee Surgery · Revision Arthroplasty
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.value}
            className="flex h-full flex-col justify-center rounded-xl border border-line bg-white px-5 py-4"
          >
            <p className="text-[15px] font-medium tracking-tight text-ink">
              {item.value}
            </p>
            <p className="mt-1 text-[13px] text-muted">{item.label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
