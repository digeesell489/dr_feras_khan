import Link from "next/link";
import { Cairo, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  preload: false,
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "400", "600"],
  style: ["normal", "italic"],
  preload: false,
  display: "swap",
});

export const metadata = {
  title: "Page not found | Dr. Feras Ya'ish",
  robots: { index: false, follow: true },
};

/** Root not-found must include html/body because the root layout is a pass-through. */
export default function NotFound() {
  return (
    <html lang="en" className={`${jakarta.variable} ${newsreader.variable} ${cairo.variable} antialiased`}>
      <body className="bg-alabaster-warm font-body-md text-body-md text-on-surface">
        <main className="page-wrap py-space-2xl">
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
        </main>
      </body>
    </html>
  );
}
