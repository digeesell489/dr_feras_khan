import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/about", {
    title: "About Dr. Feras Ya'ish | Consultant Trauma & Orthopaedic Surgeon",
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
