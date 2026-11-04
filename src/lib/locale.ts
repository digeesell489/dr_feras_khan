import type { Metadata } from "next";
import { SITE_URL } from "@/lib/schema";
import type { Lang } from "@/lib/loc";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "ar";
}

export function toLang(locale: string | undefined | null): Lang {
  return locale === "ar" ? "ar" : "en";
}

/** Remove a leading `/en` or `/ar` segment from a pathname (hash/query untouched). */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  const base = match?.[1] ?? pathname;
  const query = match?.[2] ?? "";
  const hash = match?.[3] ?? "";
  const stripped = base.replace(/^\/(ar|en)(?=\/|$)/, "");
  const normalized = stripped === "" ? "/" : stripped;
  return `${normalized}${query}${hash}`;
}

/**
 * Build a public URL path for a locale.
 * English uses no prefix; Arabic uses `/ar`.
 */
export function localizedPath(locale: Locale | Lang, path: string): string {
  const match = path.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/);
  const base = stripLocale(match?.[1] ?? path);
  const query = match?.[2] ?? "";
  const hash = match?.[3] ?? "";
  const normalized = base === "/" ? "" : base;
  if (locale === "ar") {
    return `/ar${normalized}${query}${hash}` || `/ar${query}${hash}`;
  }
  return `${normalized || "/"}${query}${hash}`;
}

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Reciprocal hreflang + canonical for a logical (locale-stripped) path. */
export function localeAlternates(locale: Locale | Lang, pathWithoutLocale: string): Metadata["alternates"] {
  const logical = stripLocale(pathWithoutLocale);
  const enPath = localizedPath("en", logical);
  const arPath = localizedPath("ar", logical);
  const canonicalPath = localizedPath(locale, logical);
  return {
    canonical: absoluteUrl(canonicalPath),
    languages: {
      en: absoluteUrl(enPath),
      ar: absoluteUrl(arPath),
      "x-default": absoluteUrl(enPath),
    },
  };
}

export function withLocaleAlternates(
  locale: Locale | Lang,
  pathWithoutLocale: string,
  meta: Metadata = {},
): Metadata {
  return {
    ...meta,
    alternates: {
      ...meta.alternates,
      ...localeAlternates(locale, pathWithoutLocale),
    },
  };
}
