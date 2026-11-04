import type { Metadata } from "next";
import { ConditionsPage } from "@/components/pages/ConditionsPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/conditions", {
  title: "Conditions & Treatments Explorer | Dr. Feras Ya'ish",
  description:
    "Interactive orthopaedic treatment explorer for hip, knee, trauma, and revision pathways.",
});
}

export default function Page() {
  return (
    <SiteShell>
      <ConditionsPage />
    </SiteShell>
  );
}
