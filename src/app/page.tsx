import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { Hospital } from "@/components/Hospital";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";
import {
  FACEBOOK_URL,
  HEALTHPOINT_PROFILE,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/lib/links";
import { showCaseExamples } from "@/lib/visibility";

const SITE_URL = "https://drferasyaishortho.com";

// Open Graph for the homepage. Title and description are the approved copy and
// match the page <title> and meta description already set in src/app/layout.tsx.
// og:image is intentionally NOT set yet: no verified absolute social-sharing image
// exists in the repo (public/images has only SVG logos). Add it here once approved:
//   images: [{ url: "https://drferasyaishortho.com/<approved-image>.jpg", width, height, alt }]
export const metadata: Metadata = {
  openGraph: {
    title: "Dr. Feras Ya'ish | Consultant Orthopaedic Surgeon, Abu Dhabi",
    description:
      "Meet Dr. Feras Ya'ish, Consultant Orthopaedic Surgeon in Abu Dhabi, specialising in robotic-assisted and patient-specific joint replacement.",
    url: `${SITE_URL}/`,
    siteName: "Dr. Feras Ya'ish",
    type: "website",
  },
};

// Organization + WebSite JSON-LD. Every value matches text the site already shows
// (name, address from the visit section, professional profiles in the footer).
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Dr. Feras Ya'ish",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Dr. Feras Ya'ish",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/fy-ortho-logo.png`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Between Gates 1 and 6, Al Qiyada Street, Zayed Sports City, Al Rawdah",
        postOfficeBoxNumber: "112308",
        postalCode: "112308",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      sameAs: [
        HEALTHPOINT_PROFILE,
        FACEBOOK_URL,
        LINKEDIN_URL,
        INSTAGRAM_URL,
        YOUTUBE_URL,
        TIKTOK_URL,
      ],
    },
  ],
};

export default function Home() {
  return (
    <SiteShell>
      <div className="flex w-full flex-col overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
          }}
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
