import type { Metadata } from "next";
import { PatientEducationIndex } from "@/components/pages/PatientEducationIndex";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";
import { breadcrumbSchema, pageSchema } from "@/lib/schema";

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/patient-education", {
    title: "Patient Education | Dr. Feras Ya'ish",
    description:
      "Patient education guides on robotic joint replacement, ACL recovery, revision surgery, and rehabilitation with Dr. Feras Ya'ish in Abu Dhabi.",
  });
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Patient Education", path: "/patient-education" },
        ])}
      />
      <JsonLd
        data={pageSchema({
          path: "/patient-education",
          name: "Patient Education | Dr. Feras Ya'ish",
          description:
            "Patient education guides on robotic joint replacement, ACL recovery, revision surgery, and rehabilitation with Dr. Feras Ya'ish in Abu Dhabi.",
        })}
      />
      <SiteShell>
        <PatientEducationIndex />
      </SiteShell>
    </>
  );
}
