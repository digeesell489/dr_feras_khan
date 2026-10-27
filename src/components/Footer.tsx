"use client";

import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { LanguageToggle } from "@/components/LanguageToggle";
import { WhatsAppButton, WhatsAppIcon, whatsappHref } from "@/components/WhatsAppFloat";
import { professionalLinks } from "@/lib/links";
import { useLanguage } from "@/lib/language";
import {
  ArrowIcon,
  CallIcon,
  ClockIcon,
  DoctifyIcon,
  ExternalArrow,
  FacebookIcon,
  HealthpointIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoMark,
  PinIcon,
  TikTokIcon,
  YouTubeIcon,
} from "./ui/Icons";

const portalIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  Doctify: DoctifyIcon,
  Healthpoint: HealthpointIcon,
} as const;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="cv-auto relative w-full overflow-hidden bg-clinical-slate-deep text-sand-tint" id="footer">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-clinical-gold-honorary to-transparent" />

      <div className="page-wrap relative z-10 pt-space-3xl pb-24 sm:pb-space-2xl">
        <div className="mb-space-2xl flex flex-col items-start justify-between gap-space-lg border-b border-white/10 pb-space-2xl lg:flex-row lg:items-end">
          <div className="min-w-0">
            <p className="mb-3 text-[11px] tracking-[0.22em] text-clinical-gold-honorary uppercase">{t.footerEyebrow}</p>
            <h2 className="max-w-xl font-headline-lg text-[2rem] leading-tight text-white md:text-headline-lg">{t.footerTitle}</h2>
            <p className="mt-3 max-w-lg font-body-sm text-body-sm leading-relaxed text-sand-tint/70">{t.footerBody}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row sm:flex-nowrap sm:items-center">
            <BookButton className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-surgical-teal px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-surgical-teal-light sm:w-auto">
              {t.requestAppt}
              <ArrowIcon className="h-4 w-4" />
            </BookButton>
            <a
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              href="tel:80077"
            >
              <CallIcon className="h-4 w-4" />
              {t.call}
            </a>
            <WhatsAppButton className="inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#25D366]/50 px-5 py-3 text-[13px] font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10 sm:w-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-space-xl pb-space-2xl sm:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-3">
            <div className="flex flex-col items-start gap-3">
              <Link href="/">
                <LogoMark
                  variant="onDark"
                  loading="lazy"
                  className="h-14 w-auto max-w-[260px] object-contain object-left sm:h-16"
                />
              </Link>
              <p className="text-[11px] leading-relaxed tracking-wide text-sand-tint/60">
                MBBS · MRCS · FRCS (Tr &amp; Orth) · CCT (UK)
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-sand-tint/70">{t.bio}</p>
            <div className="flex items-center gap-2 text-[11px] tracking-wide text-clinical-gold-honorary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-surgical-teal" />
              {t.licensed}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-[11px] font-bold tracking-[0.16em] text-white uppercase">{t.colPractice}</p>
            <ul className="flex flex-col gap-2.5">
              {t.footerPractice.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-sand-tint/70 transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-[11px] font-bold tracking-[0.16em] text-white uppercase">{t.colCare}</p>
            <ul className="flex flex-col gap-2.5">
              {t.footerCare.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-sand-tint/70 transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-[11px] font-bold tracking-[0.16em] text-white uppercase">{t.colEvents}</p>
            <ul className="flex flex-col gap-2.5">
              {t.footerEvents.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-sand-tint/70 transition-colors hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 lg:col-span-3">
            <p className="mb-4 text-[11px] font-bold tracking-[0.16em] text-white uppercase">{t.colVisit}</p>
            <div className="mb-3 flex items-start gap-2 text-sm leading-snug text-sand-tint/80">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-surgical-teal-light" />
              <span className="min-w-0 whitespace-pre-line">{t.visitAddress}</span>
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-sand-tint/80">
              <CallIcon className="h-4 w-4 shrink-0 text-surgical-teal-light" />
              <a className="font-semibold text-white hover:text-surgical-teal-light" href="tel:80077">
                800 77
              </a>
              <span className="text-white/30">·</span>
              <a className="text-sand-tint/80 hover:text-white" href="tel:+97124929000">
                +971 2 492 9000
              </a>
              <a
                className="text-[#25D366] hover:text-white"
                href={whatsappHref(t.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                aria-label={t.whatsapp}
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-start gap-2 text-sm text-sand-tint/70">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-surgical-teal-light" />
              <span className="min-w-0">{t.clinicHoursShort}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2 text-sm text-sand-tint/55">
            <span className="me-1 font-semibold text-sand-tint/80">{t.portals}</span>
            {professionalLinks.map((item) => {
              const PortalIcon = portalIcons[item.label as keyof typeof portalIcons];
              return (
                <a
                  key={item.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sand-tint/80 transition-colors hover:border-surgical-teal/50 hover:text-white"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  title={item.label}
                >
                  <PortalIcon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[12px] font-semibold text-sand-tint/50">{t.language}</span>
            <LanguageToggle variant="dark" />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5 text-[12px] text-sand-tint/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.disclaimer}</p>
          <p className="whitespace-nowrap">
            © {new Date().getFullYear()} Dr. Feras Ya&apos;ish · {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:hidden">
      <div className="flex items-center gap-2 rounded-2xl border border-white/80 bg-white/95 p-2 shadow-[0_-8px_30px_rgba(15,32,39,0.12)] backdrop-blur-md">
        <a
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-clinical-navy/20 py-2.5 text-xs font-semibold text-clinical-navy"
          href="tel:80077"
        >
          <CallIcon className="h-4 w-4" />
          {t.call}
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full border border-[#25D366]/40 px-3 py-2.5 text-[#128C7E]"
          href={whatsappHref(t.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          aria-label={t.whatsapp}
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
        <BookButton className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-clinical-navy py-2.5 text-xs font-semibold text-white">
          {t.bookShort}
          <ExternalArrow className="h-3 w-3 text-surgical-teal-light" />
        </BookButton>
      </div>
    </div>
  );
}
