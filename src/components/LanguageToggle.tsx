"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language";
import { localizedPath, stripLocale } from "@/lib/locale";

export function LanguageToggle({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang } = useLanguage();
  const pathname = usePathname() || "/";
  const logicalPath = stripLocale(pathname);
  const enPath = localizedPath("en", logicalPath);
  const arPath = localizedPath("ar", logicalPath);

  const shell =
    variant === "dark"
      ? "border-white/15 bg-white/5"
      : "border-surface-border bg-sand-tint/80";
  const idle = variant === "dark" ? "text-sand-tint/70 hover:text-white" : "text-text-secondary hover:text-clinical-navy";

  return (
    <div className={`flex items-center rounded-full border px-1 py-1 text-[11px] font-semibold ${shell}`} role="group" aria-label="Language">
      <Link
        href={enPath}
        hrefLang="en"
        className={`rounded-full px-2.5 py-0.5 transition-colors ${
          lang === "en" ? "bg-clinical-navy text-white" : idle
        }`}
        aria-pressed={lang === "en"}
        prefetch={false}
      >
        EN
      </Link>
      <Link
        href={arPath}
        hrefLang="ar"
        className={`rounded-full px-2.5 py-0.5 transition-colors ${
          lang === "ar" ? "bg-clinical-navy text-white" : idle
        }`}
        aria-pressed={lang === "ar"}
        prefetch={false}
      >
        AR
      </Link>
    </div>
  );
}
