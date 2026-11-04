import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";
import { absoluteUrl, localizedPath } from "@/lib/locale";
import { treatments } from "@/lib/treatments";

// Force a static sitemap.xml artifact at build time (Hostinger/standalone).
export const dynamic = "force-static";

/**
 * Indexable pages only. Deliberately excluded while unpublished
 * (see src/lib/visibility.ts — flip flags to feature again):
 * - /for-physicians/*
 * - /case-examples/*
 *
 * Route list and priorities align with the approved sitemap for the live site.
 * Each English path has a peer Arabic URL under `/ar` for hreflang parity.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-30T05:55:26.000Z");

  const staticEntries: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/treatments", priority: 0.8 },
    ...treatments.map((item) => ({ path: `/treatments/${item.slug}`, priority: 0.8 })),
    { path: "/conditions", priority: 0.8 },
    ...conditions.map((item) => ({ path: `/conditions/${item.slug}`, priority: 0.8 })),
    { path: "/patient-care", priority: 0.8 },
    { path: "/events", priority: 0.8 },
    // Gallery listing — lower priority; do not treat as article SEO (content.thin waiver)
    { path: "/events/images", priority: 0.4 },
    { path: "/events/media", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/patient-education/acl-recovery", priority: 0.8 },
    { path: "/orthopedic-doctor-in-abu-dhabi", priority: 0.8 },
  ];

  return staticEntries.flatMap(({ path, priority }) => {
    const enPath = localizedPath("en", path);
    const arPath = localizedPath("ar", path);
    const languages = {
      en: absoluteUrl(enPath),
      ar: absoluteUrl(arPath),
    };

    return [
      {
        url: absoluteUrl(enPath),
        lastModified,
        priority,
        alternates: { languages },
      },
      {
        url: absoluteUrl(arPath),
        lastModified,
        priority: Math.max(0.5, priority - 0.1),
        alternates: { languages },
      },
    ];
  });
}
