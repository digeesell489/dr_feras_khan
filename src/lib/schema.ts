import {
  FACEBOOK_URL,
  HEALTHPOINT_PROFILE,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/lib/links";

export const SITE_URL = "https://drferasyaishortho.com";
export const PHYSICIAN_ID = `${SITE_URL}/#physician`;
export const HOSPITAL_ID = `${SITE_URL}/#hospital`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdNode = Record<string, unknown>;

// Clinic address exactly as printed on the site (Hospital section, contact page, footer).
const CLINIC_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Between Gates 1 and 6, Al Qiyada Street, Zayed Sports City, Al Rawdah",
  postalCode: "112308",
  addressLocality: "Abu Dhabi",
  addressCountry: "AE",
};

// Clinic hours exactly as shown on the site (src/lib/content.ts clinicHours, Tue–Fri).
// Sat–Mon is omitted on purpose: the site lists it as "Closed (Surgical Theater & Trauma Call)",
// which is not a clinic opening time, so it must not be marked up as opening hours.
const CLINIC_OPENING_HOURS = [
  { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:00", closes: "20:00" },
];

// Credentials exactly as printed on the site (hero: "MBBS · MRCS (Ed) · FRCS (Tr & Orth) · CCT (UK)";
// licence line: "DOH Licensed Consultant"). No licence number is on the site, so none is added.
const CREDENTIALS = [
  { "@type": "EducationalOccupationalCredential", name: "MBBS", credentialCategory: "degree" },
  { "@type": "EducationalOccupationalCredential", name: "MRCS (Ed)", credentialCategory: "professional certification" },
  { "@type": "EducationalOccupationalCredential", name: "FRCS (Tr & Orth)", credentialCategory: "professional certification" },
  { "@type": "EducationalOccupationalCredential", name: "CCT (UK)", credentialCategory: "certificate" },
  { "@type": "EducationalOccupationalCredential", name: "DOH Licensed Consultant", credentialCategory: "license" },
];

/**
 * Site-wide entities, emitted once from the root layout so every URL carries valid JSON-LD.
 * Only facts already visible on the site are used (name, title, hospital, address, toll-free number,
 * profiles, clinic hours, credentials).
 * TODO (blocked, do not add until verified): `geo` on the Physician/Hospital node (needs confirmed
 * latitude/longitude, e.g. from the Google Business Profile); `alumniOf` (UK training institution not on the site).
 */
export function siteGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": PHYSICIAN_ID,
        name: "Dr. Feras Ya'ish",
        alternateName: "Dr. Feras Ya'ish, Consultant Trauma & Orthopaedic Surgeon",
        url: SITE_URL,
        // Photo already used in the homepage hero. Confirm it is the approved headshot and that the file exists in public/ before release.
        image: `${SITE_URL}/images/doctor-cutout.webp`,
        description:
          "UK-trained consultant orthopaedic and trauma surgeon in Abu Dhabi. Specialist in robotic-assisted and patient-specific joint replacement, complex revision hip and knee surgery, and advanced knee ligament reconstruction.",
        medicalSpecialty: ["Musculoskeletal", "Surgical"],
        telephone: "800 77",
        address: CLINIC_ADDRESS,
        openingHoursSpecification: CLINIC_OPENING_HOURS,
        hasCredential: CREDENTIALS,
        worksFor: { "@id": HOSPITAL_ID },
        workLocation: { "@id": HOSPITAL_ID },
        areaServed: { "@type": "Country", name: "United Arab Emirates" },
        knowsLanguage: ["en", "ar"],
        sameAs: [
          HEALTHPOINT_PROFILE,
          FACEBOOK_URL,
          LINKEDIN_URL,
          INSTAGRAM_URL,
          YOUTUBE_URL,
          TIKTOK_URL,
        ],
      },
      {
        "@type": "Hospital",
        "@id": HOSPITAL_ID,
        name: "Healthpoint Hospital",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Between Gates 1 and 6, Al Qiyada Street, Zayed Sports City, Al Rawdah",
          postalCode: "112308",
          addressLocality: "Abu Dhabi",
          addressCountry: "AE",
        },
        telephone: "800 77",

      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "Dr. Feras Ya'ish",
        inLanguage: ["en", "ar"],
        publisher: { "@id": PHYSICIAN_ID },
      },
    ],
  };
}

type PageInput = {
  path: string;
  name: string;
  description: string;
  type?: string;
  about?: JsonLdNode;
};

/**
 * BreadcrumbList for a page. Names must match the visible breadcrumb trail on the page.
 * The last item is the current page.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** A single page node that points at the site-wide Physician. `about` must describe visible page content. */
export function pageSchema({ path, name, description, type = "WebPage", about }: PageInput): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": PHYSICIAN_ID },
    ...(about ? { about } : {}),
  };
}
