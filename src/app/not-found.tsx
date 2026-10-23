import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Page not found | Dr. Feras Ya'ish",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="page-wrap py-space-2xl">
        <h1 className="font-headline-md text-headline-md text-on-surface">Page not found</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">
          The page you requested does not exist or has moved. You can return to the homepage, browse treatments, or
          contact the clinic.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded bg-surgical-teal px-5 py-3 text-[13px] font-semibold text-white hover:bg-surgical-teal-light"
            href="/"
          >
            Go to homepage
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded border border-clinical-navy/25 px-5 py-3 text-[13px] font-semibold text-clinical-navy hover:bg-clinical-navy/5"
            href="/treatments"
          >
            Treatments
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded border border-clinical-navy/25 px-5 py-3 text-[13px] font-semibold text-clinical-navy hover:bg-clinical-navy/5"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
