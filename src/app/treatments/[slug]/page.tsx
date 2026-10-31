import { notFound } from "next/navigation";
import { TreatmentDetail } from "@/components/pages/TreatmentDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { pageSchema } from "@/lib/schema";
import { getTreatment, treatments } from "@/lib/treatments";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

// Page-specific SEO titles where the default `${title} | brand` would duplicate another URL.
const seoTitleOverrides: Record<string, string> = {
  "partial-knee": "Partial Knee Replacement Treatment | Dr. Feras Ya'ish",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatments | Dr. Feras Ya'ish" };
  return {
    title: seoTitleOverrides[slug] ?? `${treatment.title} | Dr. Feras Ya'ish`,
    description: treatment.seoDescription ?? treatment.summary,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  return (
    <>
      <JsonLd
        data={pageSchema({
          path: `/treatments/${treatment.slug}`,
          name: `${treatment.title} | Dr. Feras Ya'ish`,
          description: treatment.seoDescription ?? treatment.summary,
          type: "MedicalWebPage",
          about: {
            "@type": "MedicalProcedure",
            name: treatment.title,
            description: treatment.seoDescription ?? treatment.summary,
          },
        })}
      />
      <SiteShell>
        <TreatmentDetail treatment={treatment} />
      </SiteShell>
    </>
  );
}
