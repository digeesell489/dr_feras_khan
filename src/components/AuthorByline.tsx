"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

/**
 * Visible author attribution, rendered directly below a page's H1.
 * English text is the approved copy. The Arabic line reuses the doctor's name and
 * title wording already used on the site (see AboutPage timeline) — TODO: have the
 * content owner confirm the Arabic wording and that Dr. Ya'ish authored/reviewed each page.
 *
 * Crawlable authorship: `<address>` + `rel="author"` link to the About hub.
 * Credentials default on so treatment/condition details inherit the strip.
 */
export function AuthorByline({
  colorClass = "text-text-secondary",
  credentialsClass,
  showCredentials = true,
}: {
  colorClass?: string;
  /** Contrast-safe class for the credentials strip (defaults from colorClass context). */
  credentialsClass?: string;
  showCredentials?: boolean;
}) {
  const { lang } = useLanguage();
  const aboutHref = lang === "ar" ? "/ar/about" : "/about";
  const credentialsTone =
    credentialsClass ??
    (colorClass.includes("sand-tint") ? "text-sand-tint/70" : "text-text-secondary");

  return (
    <address className="mt-3 not-italic">
      <p className={`text-sm font-semibold ${colorClass}`}>
        <Link href={aboutHref} rel="author" className="text-inherit no-underline hover:underline">
          {loc(
            lang,
            "By Dr. Feras Ya'ish, Consultant Trauma & Orthopaedic Surgeon",
            "بقلم الدكتور فراس يعيش، استشاري جراحة العظام والحوادث",
          )}
        </Link>
      </p>
      {showCredentials ? (
        <p className={`mt-2 max-w-2xl text-xs font-semibold tracking-wide ${credentialsTone}`}>
          {loc(
            lang,
            "UK-trained · FRCS (Tr & Orth) · CCT · DoH Abu Dhabi Consultant · Healthpoint Hospital",
            // UNVERIFIED pending content-owner Arabic review
            "تدريب بريطاني · FRCS (Tr & Orth) · CCT · استشاري معتمد من دائرة الصحة أبوظبي · مستشفى هيلث بوينت",
          )}
        </p>
      ) : null}
    </address>
  );
}
