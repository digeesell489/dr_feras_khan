import type { Metadata } from "next";
import { AbuDhabiLandingPage, abuDhabiFaqs } from "@/components/pages/AbuDhabiLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageSchema, SITE_URL } from "@/lib/schema";

const PATH = "/orthopedic-doctor-in-abu-dhabi";
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
    url: `${SITE_URL}${PATH}`,
    siteName: "Dr. Feras Ya'ish",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Orthopedic Doctor in Abu Dhabi", path: PATH },
        ])}
      />
      <JsonLd
        data={pageSchema({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
        })}
      />
      <JsonLd data={faqSchema} />
      <AbuDhabiLandingPage />
    </>
  );
}
