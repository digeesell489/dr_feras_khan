"use client";

import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

/**
 * Visible author attribution, rendered directly below a page's H1.
 * English text is the approved copy. The Arabic line reuses the doctor's name and
 * title wording already used on the site (see AboutPage timeline) — TODO: have the
 * content owner confirm the Arabic wording and that Dr. Ya'ish authored/reviewed each page.
 */
export function AuthorByline({ colorClass = "text-text-secondary" }: { colorClass?: string }) {
  const { lang } = useLanguage();

  return (
    <p className={`mt-3 text-sm font-semibold ${colorClass}`}>
      {loc(
        lang,
        "By Dr. Feras Ya'ish, Consultant Trauma & Orthopaedic Surgeon",
        "بقلم الدكتور فراس يعيش، استشاري جراحة العظام والحوادث",
      )}
    </p>
  );
}
