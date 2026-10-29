import type { Metadata } from "next";
import { AbuDhabiLandingPage, abuDhabiFaqs } from "@/components/pages/AbuDhabiLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { SITE_URL } from "@/lib/schema";

const PATH = "/orthopedic-doctor-in-abu-dhabi";
const PAGE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Orthopedic Doctor in Abu Dhabi | Dr. Feras Ya'ish";
const DESCRIPTION =
  "Orthopedic doctor in Abu Dhabi, Dr. Feras Ya'ish, offers specialist assessment for hip and knee conditions, joint replacement and orthopaedic surgery.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Dr. Feras Ya'ish",
    type: "website",
  },
};

/** Opening hours match the published clinic schedule shown on the page. */
const landingGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Dr. Feras Ya'ish",
      url: `${SITE_URL}/`,
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#healthpoint-hospital`,
      name: "Healthpoint Hospital",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Between Gates 1-6, Al Qiyada Street, Zayed Sports City, Al Rawdah",
        addressLocality: "Abu Dhabi",
        addressRegion: "Abu Dhabi",
        addressCountry: "AE",
      },
      telephone: "+971 2 492 9000",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Tuesday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Wednesday",
          opens: "11:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Thursday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "https://schema.org/Friday",
          opens: "08:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Orthopedic Doctor in Abu Dhabi",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  url: PAGE_URL,
  mainEntity: abuDhabiFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={landingGraph} />
      <JsonLd data={faqSchema} />
      <SiteShell>
        <AbuDhabiLandingPage />
      </SiteShell>
    </>
  );
}
