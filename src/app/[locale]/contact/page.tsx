import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const title =
    locale === "ar"
      ? "التواصل وحجز المواعيد في أبوظبي | الدكتور فراس يعيش"
      : "Contact & Appointments in Abu Dhabi | Dr. Feras Ya'ish";
  return withLocaleAlternates(locale, "/contact", {
    title,
    description:
      "Book a consultation with Dr. Feras Ya'ish at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-free 800 77.",
  });
}

export default function Page() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
