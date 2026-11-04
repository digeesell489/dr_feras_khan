import type { Metadata } from "next";
import { TreatmentsPage } from "@/components/pages/TreatmentsPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/treatments", {
    title: "Treatments & Procedures | Dr. Feras Ya'ish",
    description:
      "Hip and knee treatments in Abu Dhabi: total and partial replacement, robotic arthroplasty, revision, arthroscopy, ligaments, and trauma care.",
  });
}

export default function Page() {
  return (
    <SiteShell>
      <TreatmentsPage />
    </SiteShell>
  );
}
