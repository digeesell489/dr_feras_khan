import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { Hospital } from "@/components/Hospital";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";
import { HEALTHPOINT_PROFILE, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/links";
import { showCaseExamples } from "@/lib/visibility";

const SITE_URL = "https://drferasyaishortho.com";

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
        url: `${SITE_URL}/images/logo.svg`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Zayed Sports City, Al Rawdah",
        postOfficeBoxNumber: "112323",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL, HEALTHPOINT_PROFILE],
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
