"use client";

import { useLanguage, type Lang } from "@/lib/language";

export function LanguageToggle({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang, setLang } = useLanguage();

  const shell =
    variant === "dark"
      ? "border-white/15 bg-white/5"
      : "border-surface-border bg-sand-tint/80";
  const idle = variant === "dark" ? "text-sand-tint/70 hover:text-white" : "text-text-secondary hover:text-clinical-navy";

  function select(next: Lang) {
    setLang(next);
  }

  return (
    <div className={`flex items-center rounded-full border px-1 py-1 text-[11px] font-semibold ${shell}`} role="group" aria-label="Language">
      <button
        type="button"
        className={`rounded-full px-2.5 py-0.5 transition-colors ${
          lang === "en" ? "bg-clinical-navy text-white" : idle
        }`}
        aria-pressed={lang === "en"}
        onClick={() => select("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`rounded-full px-2.5 py-0.5 transition-colors ${
          lang === "ar" ? "bg-clinical-navy text-white" : idle
        }`}
        aria-pressed={lang === "ar"}
        onClick={() => select("ar")}
      >
        AR
      </button>
    </div>
  );
}
