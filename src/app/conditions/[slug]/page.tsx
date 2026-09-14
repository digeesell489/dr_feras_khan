import { notFound } from "next/navigation";
import { ConditionDetail } from "@/components/pages/ConditionDetail";
import { SiteShell } from "@/components/SiteShell";
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
    <SiteShell>
      <ConditionDetail condition={condition} />
    </SiteShell>
  );
}
