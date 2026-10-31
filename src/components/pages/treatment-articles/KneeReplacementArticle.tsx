"use client";

import Link from "next/link";
import { kneeReplacementArticleCopy } from "@/lib/knee-replacement-article";
import { useLanguage } from "@/lib/language";

/**
 * Long-form Total Knee Replacement copy (approved treatment page).
 * Clinical wording kept as provided; SiteShell supplies site chrome.
 */
export function KneeReplacementArticle() {
  const { lang } = useLanguage();
  const c = kneeReplacementArticleCopy[lang];

  return (
    <section className="py-space-3xl">
      <div className="page-wrap max-w-4xl space-y-10">
        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.whatH2}</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            {c.whatP1Before}
            <strong className="font-semibold text-primary">{c.whatP1Strong}</strong>
            {c.whatP1After}
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            {c.whatP2Before}
            <strong className="font-semibold text-primary">{c.whatP2Strong}</strong>
            {c.whatP2After}
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.whenH2}</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">{c.whenP1}</p>
          <ul className="mb-3 list-disc space-y-1.5 ps-5 text-base text-text-secondary">
            {c.whenBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-base leading-relaxed text-text-secondary">
            {c.whenP2Before}
            <a
              className="font-semibold text-surgical-teal underline-offset-2 hover:underline"
              href="https://www.nice.org.uk/guidance/ng226"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.niceLink}
            </a>
            {c.whenP2After}
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.whoH2}</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">{c.whoP1}</p>
          <p className="text-base leading-relaxed text-text-secondary">{c.whoP2}</p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.procH2}</h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            {c.procP1Before}
            <strong className="font-semibold text-primary">{c.procP1Strong}</strong>
            {c.procP1After}
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">{c.convH3}</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">{c.convP}</p>
          <h3 className="mb-2 text-base font-semibold text-primary">{c.kinH3}</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">{c.kinP}</p>
          <h3 className="mb-2 text-base font-semibold text-primary">{c.softH3}</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">{c.softP}</p>
          <h3 className="mb-2 text-base font-semibold text-primary">{c.robH3}</h3>
          <p className="text-base leading-relaxed text-text-secondary">{c.robP}</p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.implantH2}</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">{c.implantP1}</p>
          <p className="text-base leading-relaxed text-text-secondary">{c.implantP2}</p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.doctorH2}</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">{c.doctorP1}</p>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            {c.doctorP2Before}
            <strong className="font-semibold text-primary">{c.doctorP2Strong}</strong>
            {c.doctorP2After}
          </p>
          <p className="text-base leading-relaxed text-text-secondary">{c.doctorP3}</p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.recoveryH2}</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">{c.recoveryP1}</p>
          <ul className="mb-3 list-disc space-y-1.5 ps-5 text-base text-text-secondary">
            {c.recoveryItems.map((item) => (
              <li key={item.label}>
                <strong className="font-semibold text-primary">{item.label}</strong>
                {item.text}
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed text-text-secondary">
            {c.recoveryP2Before}
            <a
              className="font-semibold text-surgical-teal underline-offset-2 hover:underline"
              href="https://www.nhs.uk/tests-and-treatments/knee-replacement/recovery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.nhsLink}
            </a>
            {c.recoveryP2After}
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">{c.abuH2}</h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            {c.abuP1Before}
            <strong className="font-semibold text-primary">{c.abuP1Strong1}</strong>
            {c.abuP1Mid}
            <strong className="font-semibold text-primary">{c.abuP1Strong2}</strong>
            {c.abuP1After}
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">{c.consultH3}</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">{c.consultP}</p>
          <h3 className="mb-2 text-base font-semibold text-primary">{c.apptH3}</h3>
          <p className="mb-2 text-base leading-relaxed text-text-secondary">
            <strong className="font-semibold text-primary">{c.locationLabel}</strong>
            {c.locationValue}
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            <strong className="font-semibold text-primary">{c.apptLabel}</strong>{" "}
            <a
              className="font-semibold text-surgical-teal underline-offset-2 hover:underline"
              href="https://healthpoint.ae/request-appointment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.requestConsult}
            </a>
            {c.apptMid}
            <Link className="font-semibold text-surgical-teal underline-offset-2 hover:underline" href="/patient-care">
              {c.careLink}
            </Link>
            {c.apptEnd}
          </p>
        </article>

        <p className="border-t border-surface-border pt-6 text-sm text-text-secondary">
          {c.refPrefix}
          <a
            className="text-surgical-teal underline-offset-2 hover:underline"
            href="https://www.nice.org.uk/guidance/ng226"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.refNice}
          </a>
          {" · "}
          <a
            className="text-surgical-teal underline-offset-2 hover:underline"
            href="https://www.nhs.uk/tests-and-treatments/knee-replacement/recovery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.refNhs}
          </a>
          {" · "}
          <a
            className="text-surgical-teal underline-offset-2 hover:underline"
            href="https://www.orthoinfo.org/treatment/total-knee-replacement/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.refAaos}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
