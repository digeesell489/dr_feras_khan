import type { Metadata } from "next";
import { AbuDhabiLandingPage } from "@/components/pages/AbuDhabiLandingPage";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { abuLandingFaqs } from "@/lib/abu-dhabi-landing";
import { SITE_URL } from "@/lib/schema";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

const PATH = "/orthopedic-doctor-in-abu-dhabi";
const PAGE_URL = `${SITE_URL}${PATH}`;
const TITLE = "Expert Orthopedic Doctor in Abu Dhabi | Dr. Feras Ya'ish";
const DESCRIPTION =
  "Consult Dr. Feras Ya'ish, orthopedic doctor in Abu Dhabi, for expert hip and knee care, joint replacement and advanced surgical treatments.";
const LOGO_URL = `${SITE_URL}/images/fy-ortho-logo.png`;
const DOCTOR_IMAGE_URL = `${SITE_URL}/images/doctor-about.webp`;

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  return withLocaleAlternates(locale, "/orthopedic-doctor-in-abu-dhabi", {
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
    images: [
      {
        url: DOCTOR_IMAGE_URL,
        alt: "Dr. Feras Ya'ish, Consultant Trauma and Orthopaedic Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DOCTOR_IMAGE_URL],
  },
});
}

const landingGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Dr. Feras Ya'ish",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      image: LOGO_URL,
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#healthpoint-hospital`,
      name: "Healthpoint Hospital",
      image: LOGO_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Between Gates 1-6, Al Qiyada Street, Zayed Sports City, Al Rawdah",
        addressLocality: "Abu Dhabi",
        addressRegion: "Abu Dhabi",
        addressCountry: "AE",
      },
      telephone: "+971 800 77",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
            "https://schema.org/Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
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

const faqGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  url: PAGE_URL,
  mainEntity: abuLandingFaqs.map((item) => ({
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
      <JsonLd data={faqGraph} />
      <SiteShell>
        <AbuDhabiLandingPage />
      </SiteShell>
    </>
  );
}
