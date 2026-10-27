import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";
import { educationItems } from "@/lib/education";
import { treatments } from "@/lib/treatments";

// Force a static sitemap.xml artifact at build time (Hostinger/standalone).
export const dynamic = "force-static";

// TODO: confirm the canonical host (apex vs www) matches the live site's preferred domain.
const SITE_URL = "https://drferasyaishortho.com";

/**
 * Indexable pages only. Deliberately excluded while unpublished
 * (see src/lib/visibility.ts — flip flags to feature again):
 * - /for-physicians/*
 * - /case-examples/*
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/treatments",
    "/conditions",
    "/patient-care",
    "/events",
    "/events/images",
    "/events/media",
    "/contact",
  ];

  const paths = [
    ...staticPaths,
    ...treatments.map((item) => `/treatments/${item.slug}`),
    ...conditions.map((item) => `/conditions/${item.slug}`),
    ...educationItems.map((item) => `/patient-education/${item.id}`),
  ];

  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));
}
