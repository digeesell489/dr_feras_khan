import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ForPhysiciansPage } from "@/components/pages/ForPhysiciansPage";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { breadcrumbSchema } from "@/lib/schema";
import { showForPhysicians } from "@/lib/visibility";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/for-physicians", {
  title: "For Physicians | Tertiary Referral Gateway — Dr. Feras Ya'ish",
  description:
    "Tertiary orthopaedic referral gateway for PJI, revision arthroplasty, periprosthetic fracture, and complex trauma.",
});
}

export default function Page() {
  // Unpublished until showForPhysicians is flipped to true in src/lib/visibility.ts
  if (!showForPhysicians) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "For Physicians", path: "/for-physicians" },
        ])}
      />
      <SiteShell>
        <ForPhysiciansPage />
      </SiteShell>
    </>
  );
}
