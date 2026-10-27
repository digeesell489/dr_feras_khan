import { notFound } from "next/navigation";
import { PhysicianDetail } from "@/components/pages/PhysicianDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { breadcrumbSchema, pageSchema } from "@/lib/schema";
import { getPhysicianPage, physicianPages } from "@/lib/physicians";
import { showForPhysicians } from "@/lib/visibility";

export const dynamicParams = false;

export function generateStaticParams() {
  if (!showForPhysicians) return [];
  return physicianPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  if (!showForPhysicians) return { robots: { index: false, follow: false } };
  const { slug } = await params;
  const page = getPhysicianPage(slug);
  if (!page) return { title: "For Physicians | Dr. Feras Ya'ish" };
  return {
    title: `${page.title} | Dr. Feras Ya'ish`,
    description: page.summary,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  if (!showForPhysicians) notFound();

  const { slug } = await params;
  const page = getPhysicianPage(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "For Physicians", path: "/for-physicians" },
          { name: page.short, path: `/for-physicians/${page.slug}` },
        ])}
      />
      <JsonLd
        data={pageSchema({
          path: `/for-physicians/${page.slug}`,
          name: `${page.title} | Dr. Feras Ya'ish`,
          description: page.summary,
        })}
      />
      <SiteShell>
        <PhysicianDetail page={page} />
      </SiteShell>
    </>
  );
}
