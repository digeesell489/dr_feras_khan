import type { Metadata } from "next";
import { Cairo, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dr. Feras Ya'ish | Consultant Orthopaedic Surgeon, Abu Dhabi",
  description:
    "UK-trained consultant orthopaedic and trauma surgeon at Healthpoint Hospital, Abu Dhabi. Specialist in hip and knee replacement, revision arthroplasty, and patient-specific surgery.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${newsreader.variable} ${cairo.variable} scroll-smooth antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-alabaster-warm font-body-md text-body-md text-on-surface">
        {children}
      </body>
    </html>
  );
}
