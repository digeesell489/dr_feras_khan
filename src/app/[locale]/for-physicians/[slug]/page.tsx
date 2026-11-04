import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhysicianDetail } from "@/components/pages/PhysicianDetail";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";
import { breadcrumbSchema, pageSchema } from "@/lib/schema";
import { getPhysicianPage, physicianPages } from "@/lib/physicians";
import { showForPhysicians } from "@/lib/visibility";

export const dynamicParams = false;

export function generateStaticParams() {
  if (!showForPhysicians) return [];
  return physicianPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  if (!showForPhysicians) return { robots: { index: false, follow: false } };
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const page = getPhysicianPage(slug);
  if (!page) return { title: "For Physicians | Dr. Feras Ya'ish" };
  return withLocaleAlternates(locale, `/for-physicians/${page.slug}`, {
    title: `${page.title} | Dr. Feras Ya'ish`,
    description: page.summary,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
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
