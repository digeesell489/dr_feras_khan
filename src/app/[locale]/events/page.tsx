import type { Metadata } from "next";
import { EventsHub } from "@/components/pages/EventsHub";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const title =
    locale === "ar"
      ? "الفعاليات والصور والظهور الإعلامي | الدكتور فراس يعيش"
      : "Events, Photographs and Media Appearances | Dr. Feras Ya'ish";
  return withLocaleAlternates(locale, "/events", {
    title,
    description: "Event photographs and newspaper and media appearances by Dr. Feras Ya'ish.",
  });
}

export default function Page() {
  return (
    <SiteShell>
      <EventsHub />
    </SiteShell>
  );
}
