import { notFound } from "next/navigation";
import { CaseExampleDetail } from "@/components/pages/CaseExampleDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { breadcrumbSchema, pageSchema } from "@/lib/schema";
import { caseExamples, getCaseExample } from "@/lib/cases";
import { showCaseExamples } from "@/lib/visibility";

export const dynamicParams = false;

export function generateStaticParams() {
  // No HTML routes while unpublished — URLs 404 and stay out of the crawl surface.
  if (!showCaseExamples) return [];
  return caseExamples.map((item) => ({ slug: item.slug }));
}

// Page-specific SEO titles where the default `${title} | brand` would duplicate another URL.
const seoTitleOverrides: Record<string, string> = {
  "partial-knee": "Partial Knee Replacement Case Example | Dr. Feras Ya'ish",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  if (!showCaseExamples) return { robots: { index: false, follow: false } };
  const { slug } = await params;
  const item = getCaseExample(slug);
  if (!item) return { title: "Case Examples | Dr. Feras Ya'ish" };
  return {
    title: seoTitleOverrides[slug] ?? `${item.title} | Dr. Feras Ya'ish`,
    description: item.body,
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  if (!showCaseExamples) notFound();

  const { slug } = await params;
  const item = getCaseExample(slug);
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Examples", path: "/case-examples" },
          { name: item.title, path: `/case-examples/${item.slug}` },
        ])}
      />
      <JsonLd
        data={pageSchema({
          path: `/case-examples/${item.slug}`,
          name: `${item.title} | Dr. Feras Ya'ish`,
          description: item.body,
        })}
      />
      <SiteShell>
        <CaseExampleDetail item={item} />
      </SiteShell>
    </>
  );
}
