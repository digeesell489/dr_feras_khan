import type { Metadata } from "next";
import { PatientCarePage } from "@/components/pages/PatientCarePage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const title =
    locale === "ar"
      ? "دليل رعاية المريض الجراحية في أبوظبي | د. فراس يعيش"
      : "Patient Care Guide in Abu Dhabi | Dr. Feras Ya'ish";
  return withLocaleAlternates(locale, "/patient-care", {
    title,
    description:
      "Your surgical care journey in Abu Dhabi: pre-operative preparation, hospital stay, and rehabilitation milestones with Dr. Feras Ya'ish at Healthpoint.",
  });
}

export default function Page() {
  return (
    <SiteShell>
      <PatientCarePage />
    </SiteShell>
  );
}
