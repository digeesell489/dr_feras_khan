/**
 * Feature flags for sections that stay in the codebase but are unpublished.
 *
 * Flip to `true` when you want to feature these URLs again:
 * - /case-examples and /case-examples/*
 * - /for-physicians and /for-physicians/*
 *
 * While false: pages return 404, links are hidden, robots.txt disallows, and
 * sitemap excludes them so they do not show on screen or get crawled.
 */
export const showCaseExamples = false;
export const showForPhysicians = false;

export function isPublishedPath(href: string): boolean {
  if (href === "/case-examples" || href.startsWith("/case-examples/")) {
    return showCaseExamples;
  }
  if (href === "/for-physicians" || href.startsWith("/for-physicians/")) {
    return showForPhysicians;
  }
  return true;
}
