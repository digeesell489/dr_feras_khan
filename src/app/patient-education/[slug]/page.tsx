import { notFound } from "next/navigation";
import { EducationDetail } from "@/components/pages/EducationDetail";
import { SiteShell } from "@/components/SiteShell";
import { educationItems, getEducationItem } from "@/lib/education";

export const dynamicParams = false;

export function generateStaticParams() {
  return educationItems.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getEducationItem(slug);
  if (!item) return { title: "Patient Education | Dr. Feras Ya'ish" };
  return {
    title: `${item.title} | Dr. Feras Ya'ish`,
    description: item.body,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getEducationItem(slug);
  if (!item) notFound();

  return (
    <SiteShell>
      <EducationDetail item={item} />
    </SiteShell>
  );
}
