import type { Metadata } from "next";
import { EventsPage } from "@/components/pages/EventsPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const title =
    locale === "ar"
      ? "صور الفعاليات والمحاضرات في أبوظبي | الدكتور فراس يعيش"
      : "Event Images Gallery in Abu Dhabi | Dr. Feras Ya'ish";
  return withLocaleAlternates(locale, "/events/images", {
    title,
    description:
      "Photographs from lectures, courses, and workshops by Dr. Feras Ya'ish, including ICJR Egypt.",
    robots: { index: false, follow: true },
  });
}

export default function Page() {
  return (
    <SiteShell>
      <EventsPage />
    </SiteShell>
  );
}
