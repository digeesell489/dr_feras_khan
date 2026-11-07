import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, stripLocale } from "@/lib/locale";

const PUBLIC_FILE = /\.[^/]+$/;

/** Permanently removed sections — 410 tells crawlers to drop them from the index. */
const GONE_PREFIXES = ["/for-physicians"] as const;

function isGonePath(pathname: string): boolean {
  const logical = stripLocale(pathname).replace(/\/$/, "") || "/";
  return GONE_PREFIXES.some(
    (prefix) => logical === prefix || logical.startsWith(`${prefix}/`),
  );
}

function goneResponse(): NextResponse {
  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isGonePath(pathname)) {
    return goneResponse();
  }

  const segment = pathname.split("/")[1];
  const hasLocalePrefix = locales.includes(segment as (typeof locales)[number]);

  // English is unprefixed (as-needed). Strip accidental `/en` URLs.
  if (segment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return NextResponse.redirect(url);
  }

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // Rewrite bare paths to the internal `/en/...` segment tree.
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
