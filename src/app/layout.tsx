import type { Metadata } from "next";
import { Cairo, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, siteGraph } from "@/lib/schema";
import "./globals.css";

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
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dr. Feras Ya'ish | Consultant Orthopaedic Surgeon, Abu Dhabi",
  description:
    "UK-trained consultant orthopaedic and trauma surgeon in Abu Dhabi. Specialist in robotic-assisted and patient-specific joint replacement, complex revision hip and knee surgery, and advanced knee ligament reconstruction.",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${newsreader.variable} ${cairo.variable} scroll-smooth antialiased`}
    >
      <body className="bg-alabaster-warm font-body-md text-body-md text-on-surface">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
