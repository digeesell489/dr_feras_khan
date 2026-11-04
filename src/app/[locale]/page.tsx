import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { Hospital } from "@/components/Hospital";
import { JsonLd } from "@/components/JsonLd";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";
import { absoluteUrl, isLocale, withLocaleAlternates, type Locale } from "@/lib/locale";
import { pageSchema } from "@/lib/schema";
import { showCaseExamples } from "@/lib/visibility";

const HOME_DESCRIPTION_EN =
  "Orthopedic surgeon in Abu Dhabi — Dr. Feras Ya'ish at Healthpoint. Book a consultation today.";

const homeCopy = {
  en: {
    title: "Dr. Feras Ya'ish | Consultant Orthopaedic Surgeon, Abu Dhabi",
    description: HOME_DESCRIPTION_EN,
    ogTitle: "Dr. Feras Ya'ish, Orthopedic Surgeon in Abu Dhabi",
    ogDescription: HOME_DESCRIPTION_EN,
  },
  // Draft Arabic SEO copy grounded in dictionary.ar (content-owner review still pending).
  ar: {
    title: "الدكتور فراس يعيش | استشاري جراحة العظام، أبوظبي",
    description:
      "جرّاح عظام مدرَّب في المملكة المتحدة في أبوظبي. متخصص في استبدال المفاصل بمساعدة الروبوت والمخصص للمريض، وجراحة مراجعة الورك والركبة، وإعادة بناء أربطة الركبة في مستشفى هيلث بوينت.",
    ogTitle: "الدكتور فراس يعيش، جرّاح عظام في الإمارات",
    ogDescription:
      "جرّاح عظام مدرَّب في المملكة المتحدة بخبرة تزيد على 25 عاماً. استبدال المفاصل بمساعدة الروبوت، وجراحة المراجعة، وإعادة بناء أربطة الركبة في مستشفى هيلث بوينت، أبوظبي.",
  },
} as const;

type PageParams = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const copy = homeCopy[locale];

  return withLocaleAlternates(locale, "/", {
    title: copy.title,
    description: copy.description,
    openGraph: {
      title: copy.ogTitle,
      description: copy.ogDescription,
      url: absoluteUrl(locale === "ar" ? "/ar" : "/"),
      siteName: "Dr. Feras Ya'ish",
      type: "website",
      locale: locale === "ar" ? "ar" : "en",
    },
  });
}

export default async function Home({ params }: { params: PageParams }) {
  const { locale: localeParam } = await params;
  const locale: Locale = isLocale(localeParam) ? localeParam : "en";
  const copy = homeCopy[locale];

  return (
    <SiteShell>
      <div className="flex w-full flex-col overflow-x-clip">
        <JsonLd
          data={pageSchema({
            path: locale === "ar" ? "/ar" : "/",
            name: copy.ogTitle,
            description: copy.description,
          })}
        />
        <Hero />
        <Approach />
        <Excellence />
        {showCaseExamples ? <ComplexCentre /> : null}
        <PatientEducation />
        <Hospital />
        <FAQ />
        <HomeCta />
      </div>
    </SiteShell>
  );
}
