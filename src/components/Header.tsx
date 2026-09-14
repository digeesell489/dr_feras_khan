"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookButton } from "@/components/BookButton";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/lib/language";
import { conditions } from "@/lib/conditions";
import { siteNav } from "@/lib/nav";
import { physicianPages } from "@/lib/physicians";
import { treatments } from "@/lib/treatments";
import { CallIcon, CloseIcon, ExternalArrow, LogoMark, MenuIcon } from "./ui/Icons";

export function Header() {
  const pathname = usePathname();
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  const [physiciansOpen, setPhysiciansOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setTreatmentsOpen(false);
    setConditionsOpen(false);
    setPhysiciansOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="page-wrap pt-3">
        <div
          className={`grid h-[68px] grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border px-3 transition-all duration-300 sm:px-5 lg:grid-cols-[1fr_auto_1fr] ${
            scrolled
              ? "border-white/80 bg-white/88 shadow-[0_12px_40px_rgba(27,54,93,0.12)] backdrop-blur-xl"
              : "border-white/70 bg-alabaster-warm/80 shadow-[0_8px_28px_rgba(27,54,93,0.06)] backdrop-blur-md"
          }`}
        >
          <Link className="flex min-w-0 items-center gap-2.5 justify-self-start" href="/">
            <LogoMark className="h-10 w-10 shrink-0" />
            <span className="flex min-w-0 flex-col">
              <span className="font-headline-sm text-[1.05rem] leading-none tracking-tight text-primary">
                Dr. Feras Ya&apos;ish
              </span>
              <span className="mt-1 hidden whitespace-nowrap text-[10px] tracking-[0.12em] text-text-secondary uppercase sm:block">
                {t.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center justify-center justify-self-center lg:flex">
            {siteNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.href === "/treatments" || item.href === "/conditions" || item.href === "/for-physicians") {
                const items = item.href === "/treatments" ? treatments : item.href === "/conditions" ? conditions : physicianPages;
                const allLabel =
                  item.href === "/treatments" ? t.allTreatments : item.href === "/conditions" ? t.allConditions : t.allPhysicians;
                const baseHref = item.href;

                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={baseHref}
                      className={`relative flex items-center gap-1 whitespace-nowrap px-2 py-1 text-[13px] font-semibold tracking-wide transition-colors ${
                        isActive ? "text-clinical-navy" : "text-on-surface-variant hover:text-clinical-navy"
                      }`}
                    >
                      {t.nav[item.href]?.short ?? item.short}
                      <svg className="h-3 w-3 opacity-70" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                      <span
                        className={`absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full transition-opacity ${
                          isActive ? "bg-surgical-teal opacity-100" : "opacity-0"
                        }`}
                      />
                    </Link>
                    <div className="invisible absolute start-0 top-full z-50 min-w-[260px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-surface-border bg-white py-2 shadow-[0_16px_40px_rgba(27,54,93,0.12)]">
                        <Link
                          href={baseHref}
                          className="block px-4 py-2 text-[13px] font-semibold text-clinical-navy hover:bg-sand-tint"
                        >
                          {allLabel}
                        </Link>
                        {items.map((entry) => (
                          <Link
                            key={entry.slug}
                            href={`${baseHref}/${entry.slug}`}
                            className={`block px-4 py-2 text-[13px] hover:bg-sand-tint ${
                              pathname === `${baseHref}/${entry.slug}`
                                ? "font-semibold text-clinical-navy"
                                : "text-text-secondary"
                            }`}
                          >
                            {lang === "ar" ? entry.shortAr : entry.short}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative whitespace-nowrap px-2 py-1 text-[13px] font-semibold tracking-wide transition-colors ${
                    isActive ? "text-clinical-navy" : "text-on-surface-variant hover:text-clinical-navy"
                  }`}
                >
                  {t.nav[item.href]?.short ?? item.short}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full transition-opacity ${
                      isActive ? "bg-surgical-teal opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <a
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-clinical-navy/20 text-clinical-navy transition-colors hover:bg-clinical-navy hover:text-white sm:inline-flex"
              href="tel:80077"
              aria-label="Call 800 77"
            >
              <CallIcon className="h-4 w-4" />
            </a>
            <BookButton className="hidden items-center gap-1.5 rounded-full bg-clinical-navy px-3.5 py-2 text-[12px] font-semibold whitespace-nowrap text-white shadow-sm transition-all hover:bg-clinical-slate-deep sm:inline-flex sm:text-[13px]">
              {t.book}
              <ExternalArrow />
            </BookButton>
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-clinical-navy/20 bg-sand-tint text-clinical-navy lg:hidden"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="page-wrap pt-2 lg:hidden">
          <nav className="overflow-hidden rounded-2xl border border-white/70 bg-clinical-slate-deep p-5 text-white shadow-[0_20px_50px_rgba(15,32,39,0.28)]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-[11px] tracking-[0.18em] text-surgical-teal-light uppercase">{t.navigate}</p>
              <LanguageToggle variant="dark" />
            </div>
            {siteNav.map((item) => (
              <div key={item.href} className="border-b border-white/10 last:border-b-0">
                {item.href === "/treatments" || item.href === "/conditions" || item.href === "/for-physicians" ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 font-headline-sm text-[1.35rem] text-white"
                      onClick={() => {
                        if (item.href === "/treatments") setTreatmentsOpen((v) => !v);
                        else if (item.href === "/conditions") setConditionsOpen((v) => !v);
                        else setPhysiciansOpen((v) => !v);
                      }}
                    >
                      {t.nav[item.href]?.label ?? item.label}
                      <span
                        className={`text-surgical-teal-light transition ${
                          (item.href === "/treatments"
                            ? treatmentsOpen
                            : item.href === "/conditions"
                              ? conditionsOpen
                              : physiciansOpen)
                            ? "rotate-90"
                            : ""
                        }`}
                      >
                        →
                      </span>
                    </button>
                    {(item.href === "/treatments"
                      ? treatmentsOpen
                      : item.href === "/conditions"
                        ? conditionsOpen
                        : physiciansOpen) ? (
                      <div className="mb-3 space-y-1 pb-2">
                        <Link href={item.href} className="block py-1.5 text-sm text-surgical-teal-light">
                          {item.href === "/treatments"
                            ? t.allTreatments
                            : item.href === "/conditions"
                              ? t.allConditions
                              : t.allPhysicians}
                        </Link>
                        {(item.href === "/treatments"
                          ? treatments
                          : item.href === "/conditions"
                            ? conditions
                            : physicianPages
                        ).map((entry) => (
                          <Link
                            key={entry.slug}
                            href={`${item.href}/${entry.slug}`}
                            className="block py-1.5 text-sm text-sand-tint/80"
                          >
                            {lang === "ar" ? entry.shortAr : entry.short}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3.5 font-headline-sm text-[1.35rem] text-white"
                  >
                    {t.nav[item.href]?.label ?? item.label}
                    <span className="text-surgical-teal-light">→</span>
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 py-2.5 text-[13px] font-semibold"
                href="tel:80077"
              >
                <CallIcon className="h-4 w-4" />
                {t.call}
              </a>
              <BookButton
                className="inline-flex items-center justify-center gap-2 rounded-full bg-surgical-teal py-2.5 text-[13px] font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {t.bookNow}
              </BookButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
