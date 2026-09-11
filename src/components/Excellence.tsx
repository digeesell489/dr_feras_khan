import Image from "next/image";
import { specialties } from "@/lib/content";
import { Section, SectionHeader } from "./ui/Section";

export function Excellence() {
  const { featured, cards } = specialties;

  return (
    <Section id="techniques">
      <SectionHeader
        badge="Surgical workflows & mechanics"
        title="Operative Specialties & Joint Mechanics"
        subtitle="State-of-the-art prosthetic design and biological restoration delivered through evidence-based surgical programmes."
      />

      <article className="mt-10 grid overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_rgba(28,24,20,0.04)] md:grid-cols-2">
        <div className="relative min-h-[280px] bg-[#eef3f6] md:min-h-full">
          <Image
            src="/images/knee-mechanics.png"
            alt="Three-dimensional knee joint with anatomical landmarks"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 550px, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#3d7a64]">
            {featured.eyebrow}
          </p>
          <h3 className="serif mt-3 text-[28px] leading-[1.15] tracking-tight md:text-[34px]">
            {featured.title}
          </h3>
          <p className="mt-4 text-[14px] leading-7 text-muted">{featured.body}</p>
          <div className="mt-7 grid grid-cols-2 gap-6 border-t border-line pt-6">
            {featured.stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-[13px] font-medium tracking-wide text-ink">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.12em] text-muted">
            {featured.link} →
          </p>
        </div>
      </article>

      <div className="mt-5 grid items-stretch gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_rgba(28,24,20,0.04)]"
          >
            <div className="relative aspect-[4/3] bg-[#f3efe8]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 340px, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                {card.category}
              </p>
              <h3 className="mt-2 text-[17px] font-medium tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-6 text-muted">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
