import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EducationDetail } from "@/components/pages/EducationDetail";
import { SiteShell } from "@/components/SiteShell";
import { educationItems, getEducationItem } from "@/lib/education";
import { isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";

export const dynamicParams = false;

export function generateStaticParams() {
  return educationItems.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const item = getEducationItem(slug);
  if (!item) return { title: "Patient Education | Dr. Feras Ya'ish" };
  return withLocaleAlternates(locale, `/patient-education/${item.id}`, {
    title: item.seoTitle ?? `${item.title} | Dr. Feras Ya'ish`,
    description: item.seoDescription ?? item.body,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const item = getEducationItem(slug);
  if (!item) notFound();

  return (
    <SiteShell>
      <EducationDetail item={item} />
    </SiteShell>
  );
}
