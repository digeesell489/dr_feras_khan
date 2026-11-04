import type { Metadata } from "next";
import { Cairo, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { isLocale, locales, type Locale } from "@/lib/locale";
import { SITE_URL, siteGraph } from "@/lib/schema";
import "../globals.css";

const GA_MEASUREMENT_ID = "G-MD8H243F2D";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  // Body/UI font: the hero lead paragraph and buttons render in it above the fold,
  // so preload it to avoid a late font swap re-triggering LCP.
  preload: true,
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
  // Hero H1 uses Newsreader (font-headline-hero); preload to reduce text LCP.
  preload: true,
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dr. Feras Ya'ish | Consultant Orthopaedic Surgeon, Abu Dhabi",
  description:
    "Orthopedic surgeon in Abu Dhabi — Dr. Feras Ya'ish at Healthpoint. Book a consultation today.",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${jakarta.variable} ${newsreader.variable} ${cairo.variable} scroll-smooth antialiased`}
    >
      <body className="bg-alabaster-warm font-body-md text-body-md text-on-surface">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
