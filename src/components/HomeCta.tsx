"use client";

import { BookButton } from "@/components/BookButton";
import { WhatsAppButton } from "@/components/WhatsAppFloat";
import { useLanguage } from "@/lib/language";
import { Icon } from "./ui/Icons";

export function HomeCta() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-clinical-navy py-space-2xl text-on-primary">
      <div className="page-wrap relative z-10 flex flex-col items-start justify-between gap-space-lg lg:flex-row lg:items-center">
        <div className="min-w-0 max-w-xl">
          <span className="mb-1 block font-mono text-xs tracking-widest text-surgical-teal-light uppercase">
            {t.homeCtaEyebrow}
          </span>
          <h2 className="mb-1 font-headline-md text-headline-md text-white">{t.homeCtaTitle}</h2>
          <p className="font-body-sm leading-relaxed text-sand-tint/80">{t.homeCtaBody}</p>
        </div>
        <div className="flex w-full max-w-full shrink-0 flex-nowrap items-center gap-2 overflow-x-auto lg:w-auto">
          <BookButton className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded bg-surgical-teal px-5 py-3 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-surgical-teal-light">
            <span>{t.requestAppt}</span>
            <Icon name="arrow_forward" className="text-[18px]" />
          </BookButton>
          <a
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded border border-white/30 px-5 py-3 text-[13px] font-semibold text-white transition-all hover:bg-white/10"
            href="tel:80077"
          >
            <Icon name="call" className="text-[18px]" />
            <span>{t.call}</span>
          </a>
          <WhatsAppButton className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded border border-[#25D366]/50 px-5 py-3 text-[13px] font-semibold text-[#25D366] transition-all hover:bg-[#25D366]/10" />
        </div>
      </div>
    </section>
  );
}
