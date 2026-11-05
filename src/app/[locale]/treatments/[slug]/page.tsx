import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TreatmentDetail } from "@/components/pages/TreatmentDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";
import { pageFaqs } from "@/lib/page-faqs";
import { pageSchema, SITE_URL } from "@/lib/schema";
import { getTreatment, treatments } from "@/lib/treatments";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

function totalKneeReplacementGraph() {
  const path = "/treatments/total-knee-replacement";
  const pageUrl = `${SITE_URL}${path}`;
  const faqs = pageFaqs["total-knee-replacement"] ?? [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Dr. Feras Ya'ish Ortho",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/fy-ortho-logo.png`,
        },
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${pageUrl}#medicalbusiness`,
        name: "Healthpoint Hospital",
        url: "https://healthpoint.ae/",
        telephone: "800 77",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Between Gates 1 and 6, Al Qiyada Street, Zayed Sports City, Al Rawdah",
          addressLocality: "Abu Dhabi",
          addressRegion: "Abu Dhabi",
          addressCountry: "AE",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "800 77",
          contactType: "appointments",
          availableLanguage: ["English", "Arabic"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Treatments",
            item: `${SITE_URL}/treatments`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Total Knee Replacement",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatments | Dr. Feras Ya'ish" };
  const title =
    locale === "ar"
      ? (treatment.seoTitleAr ?? treatment.seoTitle ?? `${treatment.title} | Dr. Feras Ya'ish`)
      : (treatment.seoTitle ?? `${treatment.title} | Dr. Feras Ya'ish`);
  const description = treatment.seoDescription ?? treatment.summary;
  return withLocaleAlternates(locale, `/treatments/${treatment.slug}`, {
    title,
    description,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const description = treatment.seoDescription ?? treatment.summary;
  const jsonLd =
    treatment.slug === "total-knee-replacement"
      ? totalKneeReplacementGraph()
      : pageSchema({
          path: `/treatments/${treatment.slug}`,
          name: `${treatment.title} | Dr. Feras Ya'ish`,
          description,
          type: "MedicalWebPage",
          about: {
            "@type": "MedicalProcedure",
            name: treatment.title,
            description,
          },
        });

  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteShell>
        <TreatmentDetail treatment={treatment} />
      </SiteShell>
    </>
  );
}
