import Image from "next/image";
import { clinicHours } from "@/lib/content";
import { Section, SectionHeader } from "./ui/Section";

export function Hospital() {
  return (
    <Section id="hospital">
      <SectionHeader
        badge="Consultations & hospital"
        title="Clinic Hours & Location"
        subtitle="Outpatient clinic appointments and elective surgery coordinated at Healthpoint Hospital."
      />

      <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
        <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_10px_30px_rgba(28,24,20,0.04)] md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6f2] text-[#3d7a64]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 5v3.2l2 1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className="text-[17px] font-medium tracking-tight">
              Consultation Operating Hours
            </h3>
          </div>

          <div className="mt-6 flex-1 divide-y divide-line">
            {clinicHours.map((item) => (
              <div key={item.day} className="flex items-center justify-between gap-4 py-3.5">
                <p className="text-[14px] text-ink">{item.day}</p>
                <p className="text-right text-[13px] text-muted">{item.time}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-cream-soft px-4 py-4">
            <p className="text-[13px] font-medium text-ink">
              Operating Theatre &amp; Emergency Care
            </p>
            <p className="mt-1 text-[13px] leading-6 text-muted">
              Elective lists and emergency cover continue through theatre days
              and weekends, coordinated through Healthpoint Hospital 24/7.
            </p>
          </div>
        </article>

        <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[0_10px_30px_rgba(28,24,20,0.04)] md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef6f2] text-[#3d7a64]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M8 14s5-4.2 5-8A5 5 0 0 0 3 6c0 3.8 5 8 5 8Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
                <circle cx="8" cy="6" r="1.4" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#3d7a64]">
                National &amp; international
              </p>
              <h3 className="text-[17px] font-medium tracking-tight">
                Healthpoint Hospital
              </h3>
            </div>
          </div>

          <p className="mt-4 text-[14px] leading-6 text-muted">
            Zayed Sports City, Al Rawdah, P.O. Box 112222, Abu Dhabi, United Arab
            Emirates
          </p>

          <div className="relative mt-5 flex-1 overflow-hidden rounded-xl">
            <div className="relative min-h-[180px] h-full">
              <Image
                src="/images/education-lounge.png"
                alt="Healthpoint Hospital interior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
            <p>800 77</p>
            <p>+971 2 492 9000</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-navy px-5 text-[13px] font-medium text-cream-soft transition-colors hover:bg-navy-mid"
            >
              Request an Appointment
            </a>
            <a
              href="tel:80077"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-line px-5 text-[13px] font-medium text-ink transition-colors hover:bg-cream-soft"
            >
              Call 800 77
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}
