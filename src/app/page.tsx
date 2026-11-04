import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { Hospital } from "@/components/Hospital";
import { JsonLd } from "@/components/JsonLd";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";
import { pageSchema } from "@/lib/schema";
import { showCaseExamples } from "@/lib/visibility";

const SITE_URL = "https://drferasyaishortho.com";
const HOME_DESCRIPTION =
  "Orthopedic surgeon in Abu Dhabi — Dr. Feras Ya'ish at Healthpoint. Book a consultation today.";

// Open Graph for the homepage. Title matches H1; description matches root meta (meta.weak).
// og:image is intentionally NOT set yet: no verified absolute social-sharing image
// exists in the repo (public/images has only SVG logos). Add it here once approved.
export const metadata: Metadata = {
  description: HOME_DESCRIPTION,
  openGraph: {
    title: "Dr. Feras Ya'ish, Orthopedic Surgeon in Abu Dhabi",
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: "Dr. Feras Ya'ish",
    type: "website",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <div className="flex w-full flex-col overflow-x-clip">
        <JsonLd
          data={pageSchema({
            path: "/",
            name: "Dr. Feras Ya'ish, Orthopedic Surgeon in Abu Dhabi",
            description: HOME_DESCRIPTION,
          })}
        />
        <Hero />
        <Approach />
        <Excellence />
        {showCaseExamples ? <ComplexCentre /> : null}
        <PatientEducation />
        <Hospital />
        <FAQ />
        <HomeCta />
      </div>
    </SiteShell>
  );
}
