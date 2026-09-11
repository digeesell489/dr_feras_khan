import { approaches } from "@/lib/content";
import { Section, SectionHeader } from "./ui/Section";

const icons = [
  <svg key="joint" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="robot" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="5" y="7" width="14" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="9.5" cy="12" r="1.2" fill="currentColor" />
    <circle cx="14.5" cy="12" r="1.2" fill="currentColor" />
    <path d="M12 7V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="implant" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7 17 17 7M9 7h8v8"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeader
        badge="Clinical philosophy"
        title="A Holistic Approach to Joint Replacement"
        subtitle="Surgical technique and implant geometry are selected individually based on joint structure, alignment, tissue integrity, and functional goals."
      />

      <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
        {approaches.map((item, index) => (
          <article
            key={item.title}
            className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_10px_30px_rgba(28,24,20,0.04)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6f2] text-[#3d7a64]">
              {icons[index]}
            </span>
            <h3 className="mt-5 text-[18px] font-medium leading-snug tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 flex-1 text-[14px] leading-7 text-muted">{item.body}</p>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
              {item.link} →
            </p>
          </article>
        ))}
      </div>

      <p className="serif mx-auto mt-10 max-w-[520px] text-center text-[18px] leading-7 text-ink/80 italic">
        “The approach is chosen to suit the patient — not the other way around.”
      </p>
    </Section>
  );
}
