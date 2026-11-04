import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseExamplesIndex } from "@/components/pages/CaseExamplesIndex";
import { SiteShell } from "@/components/SiteShell";
import { showCaseExamples } from "@/lib/visibility";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/case-examples", {
  title: "Case Examples | Dr. Feras Ya'ish",
  description: "Anonymised educational overviews of hip, knee, sports, and trauma reconstructions.",
  robots: showCaseExamples ? undefined : { index: false, follow: false },
});
}

export default function Page() {
  // Unpublished until showCaseExamples is flipped to true in src/lib/visibility.ts
  if (!showCaseExamples) notFound();

  return (
    <SiteShell>
      <CaseExamplesIndex />
    </SiteShell>
  );
}
