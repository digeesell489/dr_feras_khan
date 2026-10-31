"use client";

import Image from "next/image";
import Link from "next/link";
import { AbuLandingGallery } from "@/components/pages/AbuLandingGallery";
import { Hospital } from "@/components/Hospital";
import {
  abuLandingCopy,
  abuLandingFaqs,
  abuLandingReasons,
  abuLandingSteps,
  abuLandingTreatments,
} from "@/lib/abu-dhabi-landing";
import { HEALTHPOINT_APPOINTMENT } from "@/lib/links";
import { useLanguage } from "@/lib/language";
import "./abu-landing.css";

export function AbuDhabiLandingPage() {
  const { lang } = useLanguage();
  const c = abuLandingCopy[lang];

  return (
    <>
      <div className="abu-landing">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{c.eyebrow}</span>
              <h1>{c.h1}</h1>
              <p className="lead">{c.lead}</p>
              <p>{c.heroP2}</p>
              <div className="actions">
                <a className="btn" href={HEALTHPOINT_APPOINTMENT} target="_blank" rel="noopener noreferrer">
                  {c.requestAppt}
                </a>
                <a className="btn alt" href="#treatments">
                  {c.exploreTreatments}
                </a>
              </div>
              <div className="pills">
                <span className="pill">{c.pill1}</span>
                <span className="pill">{c.pill2}</span>
                <span className="pill">{c.pill3}</span>
              </div>
            </div>
            <figure className="portrait">
              <div className="portrait-art">
                <Image
                  src="/images/doctor-hero-card.webp"
                  alt={
                    lang === "ar"
                      ? "الدكتور فراس يعيش، استشاري جراحة الحوادث والعظام في أبوظبي"
                      : "Dr. Feras Ya'ish, Consultant Trauma and Orthopaedic Surgeon in Abu Dhabi"
                  }
                  fill
                  sizes="(min-width: 1024px) 410px, 90vw"
                  className="object-cover object-[center_12%]"
                  priority
                />
              </div>
              <figcaption>
                <strong>{lang === "ar" ? "الدكتور فراس يعيش" : "Dr. Feras Ya'ish"}</strong>
                {c.portraitCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <div className="stats">
          <div className="wrap statgrid">
            <div className="stat">
              <span className="ico">✚</span>
              <div>
                <strong>{c.stat1}</strong>
                <small>{c.stat1s}</small>
              </div>
            </div>
            <div className="stat">
              <span className="ico">⌁</span>
              <div>
                <strong>{c.stat2}</strong>
                <small>{c.stat2s}</small>
              </div>
            </div>
            <div className="stat">
              <span className="ico">◇</span>
              <div>
                <strong>{c.stat3}</strong>
                <small>{c.stat3s}</small>
              </div>
            </div>
            <div className="stat">
              <span className="ico">＋</span>
              <div>
                <strong>{c.stat4}</strong>
                <small>{c.stat4s}</small>
              </div>
            </div>
          </div>
        </div>

        <section id="about">
          <div className="wrap about">
            <figure className="visual">
              <Image
                src="/images/practice/teaching-workshop.webp"
                alt={
                  lang === "ar"
                    ? "الدكتور فراس يعيش يدرّس في ورشة جراحة عظام"
                    : "Dr. Feras Ya'ish teaching at an orthopaedic workshop"
                }
                fill
                sizes="(min-width: 900px) 420px, 100vw"
                className="object-cover object-center"
                priority
              />
              <figcaption className="visual-caption">
                <div className="big">{c.visualBig}</div>
                <p>{c.visualP}</p>
              </figcaption>
            </figure>
            <div>
              <span className="eyebrow">{c.aboutEyebrow}</span>
              <h2>{c.aboutH2}</h2>
              <p>{c.aboutP1}</p>
              <p>{c.aboutP2}</p>
              <p>{c.aboutP3}</p>
              <ul className="checks">
                <li>{c.check1}</li>
                <li>{c.check2}</li>
                <li>{c.check3}</li>
              </ul>
              <Link className="link" href="/treatments">
                {c.viewTreatments}
              </Link>
            </div>
          </div>
        </section>

        <section id="treatments" className="soft">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">{c.areasEyebrow}</span>
              <h2>{c.areasH2}</h2>
              <p>{c.areasIntro}</p>
            </div>
            <div className="grid3">
              {abuLandingTreatments.map((item) => (
                <article key={item.href} className="card treat">
                  <div className="art">
                    <Image
                      src={item.image}
                      alt={lang === "ar" ? item.titleAr : item.title}
                      width={640}
                      height={360}
                      sizes="(min-width: 900px) 340px, 100vw"
                      style={{ width: "100%", height: 160, objectFit: "cover" }}
                    />
                  </div>
                  <div className="tcopy">
                    <h3>{lang === "ar" ? item.titleAr : item.title}</h3>
                    <p>{lang === "ar" ? item.bodyAr : item.body}</p>
                    <Link className="link" href={item.href}>
                      {lang === "ar" ? item.labelAr : item.label}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="quote">{c.quote}</div>
          </div>
        </section>

        <section id="approach">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">{c.careEyebrow}</span>
              <h2>{c.careH2}</h2>
              <p>{c.careIntro}</p>
            </div>
            <div className="steps">
              {abuLandingSteps.map((item) => (
                <article className="step" key={item.title}>
                  <div className="step-media">
                    <Image
                      src={item.image}
                      alt={lang === "ar" ? item.altAr : item.alt}
                      width={640}
                      height={360}
                      sizes="(min-width: 900px) 340px, 100vw"
                      style={{ width: "100%", height: 160, objectFit: "cover" }}
                    />
                  </div>
                  <div className="step-body">
                    <h3>{lang === "ar" ? item.titleAr : item.title}</h3>
                    <p>{lang === "ar" ? item.bodyAr : item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="soft">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">{c.helpEyebrow}</span>
              <h2>{c.helpH2}</h2>
              <p>{c.helpIntro}</p>
            </div>
            <div className="grid3">
              {abuLandingReasons.map((item) => (
                <article className="card reason" key={item.title}>
                  <div className="reason-media">
                    <Image
                      src={item.image}
                      alt={lang === "ar" ? item.altAr : item.alt}
                      width={640}
                      height={360}
                      sizes="(min-width: 900px) 340px, 100vw"
                      style={{ width: "100%", height: 160, objectFit: "cover" }}
                    />
                  </div>
                  <div className="reason-body">
                    <h3>{lang === "ar" ? item.titleAr : item.title}</h3>
                    <p>{lang === "ar" ? item.bodyAr : item.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="note" style={{ marginTop: 18 }}>
              {c.urgentNote}
            </p>
          </div>
        </section>

        <section id="gallery">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">{c.galleryEyebrow}</span>
              <h2>{c.galleryH2}</h2>
              <p>{c.galleryIntro}</p>
            </div>
            <AbuLandingGallery />
          </div>
        </section>
      </div>

      <Hospital />

      <div className="abu-landing">
        <section id="faqs" className="soft">
          <div className="wrap">
            <div className="head">
              <span className="eyebrow">{c.faqEyebrow}</span>
              <h2>{c.faqH2}</h2>
              <p>{c.faqIntro}</p>
            </div>
            <div className="faq">
              {abuLandingFaqs.map((item) => (
                <details key={item.q}>
                  <summary>{lang === "ar" ? item.qAr : item.q}</summary>
                  <p>{lang === "ar" ? item.aAr : item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
