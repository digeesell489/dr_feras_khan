import { notFound } from "next/navigation";
import { TreatmentDetail } from "@/components/pages/TreatmentDetail";
import { SiteShell } from "@/components/SiteShell";
import { getTreatment, treatments } from "@/lib/treatments";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatments | Dr. Feras Ya'ish" };
  return {
    title: `${treatment.title} | Dr. Feras Ya'ish`,
    description: treatment.summary,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  return (
    <SiteShell>
      <TreatmentDetail treatment={treatment} />
    </SiteShell>
  );
}
