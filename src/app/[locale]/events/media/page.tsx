import type { Metadata } from "next";
import { EventMediaPage } from "@/components/pages/EventMediaPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const title =
    locale === "ar"
      ? "الظهور في الصحف ووسائل الإعلام | الدكتور فراس يعيش"
      : "Appearances on newspapers and media | Dr. Feras Ya'ish";
  return withLocaleAlternates(locale, "/events/media", {
    title,
    description:
      "Media appearances by Dr. Feras Ya'ish in Abu Dhabi: newspaper, television, and press coverage of orthopaedic care and joint surgery stories.",
  });
}

export default function Page() {
  return (
    <SiteShell>
      <EventMediaPage />
    </SiteShell>
  );
}
