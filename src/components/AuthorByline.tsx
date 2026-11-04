"use client";

import { useLanguage } from "@/lib/language";
import { loc } from "@/lib/loc";

/**
 * Visible author attribution, rendered directly below a page's H1.
 * English text is the approved copy. The Arabic line reuses the doctor's name and
 * title wording already used on the site (see AboutPage timeline) — TODO: have the
 * content owner confirm the Arabic wording and that Dr. Ya'ish authored/reviewed each page.
 */
export function AuthorByline({
  colorClass = "text-text-secondary",
  credentialsClass,
  showCredentials = false,
}: {
  colorClass?: string;
  /** Contrast-safe class for the credentials strip (defaults from colorClass context). */
  credentialsClass?: string;
  showCredentials?: boolean;
}) {
  const { lang } = useLanguage();
  const credentialsTone =
    credentialsClass ??
    (colorClass.includes("sand-tint") ? "text-sand-tint/70" : "text-text-secondary");

  return (
    <div className="mt-3">
      <p className={`text-sm font-semibold ${colorClass}`}>
        {loc(
          lang,
          "By Dr. Feras Ya'ish, Consultant Trauma & Orthopaedic Surgeon",
          "بقلم الدكتور فراس يعيش، استشاري جراحة العظام والحوادث",
        )}
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
    </div>
  );
}
