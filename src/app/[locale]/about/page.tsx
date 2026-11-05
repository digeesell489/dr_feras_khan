import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const title =
    locale === "ar"
      ? "نبذة عن الدكتور فراس يعيش | جراحة العظام في أبوظبي"
      : "About Dr. Feras Ya'ish | Orthopaedics in Abu Dhabi";
  return withLocaleAlternates(locale, "/about", {
    title,
    description:
      "About Dr. Feras Ya'ish — UK-trained consultant orthopaedic surgeon in Abu Dhabi. FRCS (Tr & Orth), CCT, and AO Recon MENA chair at Healthpoint.",
  });
}

export default function Page() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
