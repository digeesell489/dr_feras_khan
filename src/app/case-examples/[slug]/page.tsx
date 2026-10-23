import { notFound } from "next/navigation";
import { CaseExampleDetail } from "@/components/pages/CaseExampleDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { pageSchema } from "@/lib/schema";
import { caseExamples, getCaseExample } from "@/lib/cases";
import { showCaseExamples } from "@/lib/visibility";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseExamples.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseExample(slug);
  if (!item) return { title: "Case Examples | Dr. Feras Ya'ish" };
  return {
    title: `${item.title} | Dr. Feras Ya'ish`,
    description: item.body,
    robots: showCaseExamples ? undefined : { index: false, follow: false },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCaseExample(slug);
  if (!item) notFound();

  return (
    <>
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
