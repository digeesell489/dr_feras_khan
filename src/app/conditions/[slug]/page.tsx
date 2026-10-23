import { notFound } from "next/navigation";
import { ConditionDetail } from "@/components/pages/ConditionDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { pageSchema } from "@/lib/schema";
import { conditions, getCondition } from "@/lib/conditions";

export const dynamicParams = false;

export function generateStaticParams() {
  return conditions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) return { title: "Conditions | Dr. Feras Ya'ish" };
  return {
    title: `${condition.title} | Dr. Feras Ya'ish`,
    description: condition.summary,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  return (
    <>
      <JsonLd
        data={pageSchema({
          path: `/conditions/${condition.slug}`,
          name: `${condition.title} | Dr. Feras Ya'ish`,
          description: condition.summary,
          type: "MedicalWebPage",
          about: { "@type": "MedicalCondition", name: condition.title, description: condition.summary },
        })}
      />
      <SiteShell>
        <ConditionDetail condition={condition} />
      </SiteShell>
    </>
  );
}
