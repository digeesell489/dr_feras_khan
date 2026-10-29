import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { clinicHours } from "@/lib/content";
import { educationGallery } from "@/lib/education";
import { HEALTHPOINT_APPOINTMENT, HEALTHPOINT_MAPS } from "@/lib/links";
import {
  SITE_ADDRESS_EN,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  SITE_PHONE_INTERNATIONAL_DISPLAY,
  SITE_PHONE_INTERNATIONAL_HREF,
} from "@/lib/site";
import "./abu-landing.css";

const galleryItems = educationGallery.slice(0, 8);

const treatments = [
  {
    title: "Knee Replacement Surgery",
    body: "Knee replacement may be considered when advanced joint damage causes ongoing pain, stiffness, and difficulty with everyday activities. Assessment helps determine whether total knee replacement or another option is suitable.",
    href: "/treatments/knee-replacement",
    label: "Explore knee replacement →",
    image: "/images/implant-knee.webp",
  },
  {
    title: "Hip Replacement Surgery",
    body: "Hip replacement may be an option when significant joint damage affects walking, movement, or quality of life. Consultation covers diagnosis, alternatives, surgical considerations, and recovery expectations.",
    href: "/treatments/hip-replacement",
    label: "Explore hip replacement →",
    image: "/images/clinical/hip-replacement-xray.webp",
  },
  {
    title: "Robotic Joint Replacement",
    body: "Robotic-assisted technology can support planning and guide aspects of selected joint replacement procedures. Suitability depends on the patient's condition and clinical assessment.",
    href: "/treatments/robotic-arthroplasty",
    label: "Explore robotic arthroplasty →",
    image: "/images/clinical/mako-theatre.webp",
  },
  {
    title: "Revision Hip and Knee Surgery",
    body: "Revision surgery may be needed when a previous joint replacement develops complications, such as loosening, wear, or infection. Careful investigation helps guide next steps.",
    href: "/treatments/revision-surgery",
    label: "Explore revision surgery →",
    image: "/images/clinical/revision-knee-xray.webp",
  },
  {
    title: "Knee Ligament Reconstruction and Arthroscopy",
    body: "Ligament reconstruction may be considered for selected injuries that cause persistent instability. Arthroscopy is a minimally invasive technique used for certain knee conditions.",
    href: "/treatments/ligament-reconstruction",
    label: "Explore ligament reconstruction →",
    image: "/images/knee-mechanics.webp",
  },
  {
    title: "Patient-Specific and Partial Knee Replacement",
    body: "Patient-specific planning and partial knee replacement may suit selected patients depending on anatomy, the location of joint damage, and clinical findings.",
    href: "/treatments/patient-specific-knee",
    label: "Explore patient-specific knee replacement →",
    image: "/images/clinical/partial-knee-compartments.webp",
  },
  {
    title: "Trauma and Malunion Treatment",
    body: "Orthopaedic trauma care addresses injuries affecting bones and joints. Malunion treatment may be considered when a fracture heals in a position that affects alignment or function.",
    href: "/treatments/trauma",
    label: "Explore trauma treatment →",
    image: "/images/clinical/trauma-malunion-xray.webp",
  },
  {
    title: "Knee Arthroscopy",
    body: "Knee arthroscopy uses small incisions and a camera to assess or treat selected problems inside the joint. The appropriate approach depends on the diagnosis.",
    href: "/treatments/arthroscopy",
    label: "Explore arthroscopy →",
    image: "/images/clinical/knee-arthroscopy.webp",
  },
  {
    title: "Patellofemoral Instability",
    body: "Repeated kneecap instability can affect comfort and confidence during movement. Assessment helps identify contributing factors and discuss appropriate management options.",
    href: "/treatments/patellofemoral-instability",
    label: "Explore patellofemoral treatment →",
    image: "/images/landing/hip-knee.webp",
  },
] as const;

const approachSteps = [
  {
    title: "01 · Assessment",
    body: "Discuss symptoms, medical history, movement limitations, and relevant investigations.",
    image: "/images/landing/step-assessment.webp",
    alt: "Orthopaedic assessment tools and knee model",
  },
  {
    title: "02 · Treatment discussion",
    body: "Review suitable options, which may include rehabilitation, other non-surgical care, or surgery.",
    image: "/images/landing/step-discussion.webp",
    alt: "Doctor explaining joint treatment options to a patient",
  },
  {
    title: "03 · Planning and follow-up",
    body: "Where treatment is indicated, discuss preparation, recovery, rehabilitation, and follow-up.",
    image: "/images/landing/step-followup.webp",
    alt: "Recovery planning and rehabilitation materials",
  },
] as const;

const consultReasons = [
  {
    title: "Persistent hip or knee pain",
    body: "Ongoing pain, stiffness, or discomfort that limits walking, sleep, or routine activities may need assessment.",
    image: "/images/landing/card-pain.webp",
    alt: "Person holding a painful knee",
  },
  {
    title: "Instability or restricted movement",
    body: "Repeated knee giving-way, reduced range of motion, or difficulty bearing weight can warrant further evaluation.",
    image: "/images/landing/card-instability.webp",
    alt: "Person checking knee stability",
  },
  {
    title: "Injury or previous surgery concerns",
    body: "Symptoms after an injury or a problem affecting a previous joint replacement should be discussed with a clinician.",
    image: "/images/landing/card-injury.webp",
    alt: "Follow-up care after injury or joint surgery",
  },
] as const;

const faqs = [
  {
    q: "How do I choose the best orthopedic doctor in Abu Dhabi?",
    a: "Consider the doctor's qualifications, experience relevant to your condition, and options available for assessment and treatment. Discuss potential benefits, risks, alternatives, and recovery expectations. The right choice depends on your individual medical needs.",
  },
  {
    q: "What conditions does an orthopedic specialist treat?",
    a: "Orthopaedic specialists assess conditions affecting bones, joints, ligaments, tendons, and related structures. Depending on their practice, this may include arthritis, joint damage, ligament injuries, fractures, and problems requiring reconstructive surgery.",
  },
  {
    q: "Does Dr. Feras Ya'ish perform robotic joint replacement?",
    a: "Robotic-assisted joint replacement is among Dr. Feras Ya'ish's areas of surgical interest. Whether this technique is appropriate depends on the patient's condition, clinical assessment, and the technology and services available for the planned procedure.",
  },
  {
    q: "Where can I consult Dr. Feras Ya'ish in Abu Dhabi?",
    a: "Dr. Feras Ya'ish practises at Healthpoint Hospital in Abu Dhabi. Contact the hospital or use official appointment booking options to confirm current availability and consultation details.",
  },
  {
    q: "When should I consider hip or knee replacement surgery?",
    a: "Joint replacement may be considered when significant joint damage causes persistent pain and reduced function, particularly when suitable non-surgical treatments have not provided sufficient relief. A clinical assessment is necessary to determine whether surgery is appropriate.",
  },
] as const;

export function AbuDhabiLandingPage() {
  return (
    <div className="abu-landing">
      <header className="top">
        <div className="wrap nav">
          <Link className="brand" href="/">
            <Image
              src="/images/fy-ortho-logo.png"
              alt="Dr. Feras Ya'ish Ortho — Hip & Knee Surgery"
              width={722}
              height={192}
              className="brand-logo"
              priority
            />
          </Link>
          <nav className="links" aria-label="Landing sections">
            <a href="#about">About</a>
            <a href="#treatments">Treatments</a>
            <a href="#approach">Approach</a>
            <a href="#gallery">Gallery</a>
            <a href="#location">Location</a>
            <a href="#faqs">FAQs</a>
            <a
              className="btn"
              href={HEALTHPOINT_APPOINTMENT}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a consultation ↗
            </a>
          </nav>
        </div>
      </header>

      <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Consultant Trauma &amp; Orthopaedics</span>
            <h1>Expert Orthopedic Doctor in Abu Dhabi</h1>
            <p className="lead">
              Dr. Feras Ya&apos;ish is a Consultant Trauma and Orthopaedic Surgeon in Abu Dhabi, UAE with experience in
              complex reconstructive procedures, robotic-assisted joint replacement, hip and knee replacement, and
              orthopaedic trauma care.
            </p>
            <p>
              Get an individualized assessment of joint pain, mobility concerns, or an orthopaedic injury, with treatment
              options explained according to your condition and goals.
            </p>
            <div className="actions">
              <a
                className="btn"
                href={HEALTHPOINT_APPOINTMENT}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request an appointment ↗
              </a>
              <a className="btn alt" href="#treatments">
                Explore treatments ↓
              </a>
            </div>
            <div className="pills">
              <span className="pill">✓ 25+ years&apos; experience</span>
              <span className="pill">✓ 4,500+ joint arthroplasties</span>
              <span className="pill">✓ Hip &amp; knee expertise</span>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-art">
              <Image
                src="/images/doctor-cutout.webp"
                alt="Dr. Feras Ya'ish, Consultant Trauma and Orthopaedic Surgeon in Abu Dhabi"
                fill
                sizes="(min-width: 1024px) 410px, 90vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
            <figcaption>
              <strong>Dr. Feras Ya&apos;ish</strong>
              Consultant Trauma and Orthopaedic Surgeon · Abu Dhabi
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="stats">
        <div className="wrap statgrid">
          <div className="stat">
            <span className="ico">✚</span>
            <div>
              <strong>Joint replacement</strong>
              <small>Hip and knee procedures</small>
            </div>
          </div>
          <div className="stat">
            <span className="ico">⌁</span>
            <div>
              <strong>Robotic-assisted surgery</strong>
              <small>Technology-supported planning</small>
            </div>
          </div>
          <div className="stat">
            <span className="ico">◇</span>
            <div>
              <strong>Patient-specific options</strong>
              <small>Individualized assessment</small>
            </div>
          </div>
          <div className="stat">
            <span className="ico">＋</span>
            <div>
              <strong>Trauma &amp; reconstruction</strong>
              <small>Complex orthopaedic care</small>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="wrap about">
          <figure className="visual">
            <Image
              src="/images/doctor-about.webp"
              alt="Dr. Feras Ya'ish, Consultant Trauma and Orthopaedic Surgeon"
              fill
              sizes="(min-width: 900px) 420px, 100vw"
              className="object-contain object-top"
            />
            <figcaption className="visual-caption">
              <div className="big">Experience guided by individual needs.</div>
              <p>Orthopaedic assessment, clear treatment discussions, and a plan shaped around the patient.</p>
            </figcaption>
          </figure>
          <div>
            <span className="eyebrow">About the doctor</span>
            <h2>Meet Dr. Feras Ya&apos;ish, Consultant Trauma &amp; Orthopaedic Surgeon in Abu Dhabi</h2>
            <p>
              Dr. Feras Ya&apos;ish is a Consultant Trauma and Orthopaedic doctor in Abu Dhabi with more than 25 years of
              experience in trauma and orthopaedics. His clinical interests include joint replacement, revision hip and
              knee surgery, knee ligament reconstruction, robotic-assisted joint replacement, and reconstructive
              procedures.
            </p>
            <p>
              His experience includes more than 4,500 joint arthroplasty procedures and contributions to orthopaedic
              education and surgical training. During a consultation, he considers symptoms, medical history, examination
              findings, and functional goals before discussing suitable options.
            </p>
            <p>
              Patients looking for an orthopedic specialist in Abu Dhabi can discuss persistent joint pain, movement
              limitations, previous surgery, or an injury and learn whether further investigations or treatment may be
              appropriate.
            </p>
            <ul className="checks">
              <li>Assessment of hip and knee conditions</li>
              <li>Discussion of surgical and non-surgical options where appropriate</li>
              <li>Explanation of expected recovery and rehabilitation</li>
            </ul>
            <Link className="link" href="/treatments">
              View all treatments →
            </Link>
          </div>
        </div>
      </section>

      <section id="treatments" className="soft">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Areas of expertise</span>
            <h2>Orthopedic doctor in Abu Dhabi for Hip and Knee Conditions</h2>
            <p>
              Joint pain and mobility problems can have different causes. Treatment depends on diagnosis, the extent of
              joint damage, overall health, and the patient&apos;s goals. Explore Dr. Ya&apos;ish&apos;s treatment areas
              below.
            </p>
          </div>
          <div className="grid3">
            {treatments.map((item) => (
              <article key={item.href} className="card treat">
                <div className="art">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={360}
                    sizes="(min-width: 900px) 340px, 100vw"
                    style={{ width: "100%", height: 160, objectFit: "cover" }}
                  />
                </div>
                <div className="tcopy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link className="link" href={item.href}>
                    {item.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="quote">“The right treatment begins with understanding the person, not only the joint.”</div>
        </div>
      </section>

      <section id="approach">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Patient-centred care</span>
            <h2>A Personalized Approach to Orthopedic Treatment</h2>
            <p>
              Choosing an orthopedic doctor in Abu Dhabi means understanding your diagnosis, available options, and what
              each option may involve. Treatment decisions should be based on clinical assessment rather than a procedure
              alone.
            </p>
          </div>
          <div className="steps">
            {approachSteps.map((item) => (
              <article className="step" key={item.title}>
                <div className="step-media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={640}
                    height={360}
                    sizes="(min-width: 900px) 340px, 100vw"
                    style={{ width: "100%", height: 160, objectFit: "cover" }}
                  />
                </div>
                <div className="step-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Know when to seek help</span>
            <h2>When Should You Consult an Orthopedic Surgeon in Abu Dhabi?</h2>
            <p>
              An orthopaedic assessment may help when symptoms persist, affect mobility, or interfere with everyday
              activities.
            </p>
          </div>
          <div className="grid3">
            {consultReasons.map((item) => (
              <article className="card reason" key={item.title}>
                <div className="reason-media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={640}
                    height={360}
                    sizes="(min-width: 900px) 340px, 100vw"
                    style={{ width: "100%", height: 160, objectFit: "cover" }}
                  />
                </div>
                <div className="reason-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="note" style={{ marginTop: 18 }}>
            Sudden severe pain after an injury, a visibly deformed joint, or a hot, swollen joint accompanied by fever
            may require urgent medical attention.
          </p>
        </div>
      </section>

      <section id="gallery">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Practice &amp; teaching</span>
            <h2>Clinical Practice Gallery</h2>
            <p>
              Selected photographs from clinic, theatre, and orthopaedic teaching settings that reflect Dr. Ya&apos;ish&apos;s
              day-to-day practice and education work.
            </p>
          </div>
          <div
            className="gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gridAutoRows: 150,
              gap: 12,
              marginTop: 28,
            }}
          >
            {galleryItems.map((item, index) => {
              const wide = index === 0;
              return (
                <figure
                  key={item.image}
                  className={`gallery-item${wide ? " gallery-item-wide" : ""}`}
                  style={{
                    margin: 0,
                    height: wide ? 312 : 150,
                    borderRadius: 14,
                    overflow: "hidden",
                    gridColumn: wide ? "span 2" : undefined,
                    gridRow: wide ? "span 2" : undefined,
                    background: "#eef6f4",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={wide ? 900 : 450}
                    height={wide ? 700 : 350}
                    sizes={wide ? "(min-width: 900px) 560px, 100vw" : "(min-width: 900px) 270px, 50vw"}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%" }}
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section id="location">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Visit the clinic</span>
            <h2>Consultation at Healthpoint Hospital, Abu Dhabi</h2>
            <p>
              Dr. Feras Ya&apos;ish practises at Healthpoint Hospital in Abu Dhabi, UAE. Contact the hospital or use
              official appointment options to confirm clinic availability and timings before visiting.
            </p>
          </div>
          <div className="locgrid">
            <div className="hours">
              <h3>Clinic Hours &amp; Appointments</h3>
              <p>Consultation schedules may vary. Please confirm the latest availability directly with the hospital.</p>
              {clinicHours.map((item) => (
                <div className="rowline" key={item.day}>
                  <b>{item.day}</b>
                  <span>{item.time}</span>
                </div>
              ))}
              <div className="rowline">
                <b>Location</b>
                <span>{SITE_ADDRESS_EN}</span>
              </div>
              <div className="rowline">
                <b>Phone</b>
                <span>
                  <a href={SITE_PHONE_HREF}>{SITE_PHONE_DISPLAY}</a>
                  {" · "}
                  <a href={SITE_PHONE_INTERNATIONAL_HREF}>{SITE_PHONE_INTERNATIONAL_DISPLAY}</a>
                </span>
              </div>
              <p className="note" style={{ marginTop: 15 }}>
                <a className="link" href={HEALTHPOINT_MAPS} target="_blank" rel="noreferrer">
                  Open in Google Maps →
                </a>
              </p>
            </div>
            <div className="hospital">
              <h3>Healthpoint Hospital</h3>
              <div className="hospital-art">
                <Image
                  src="/images/healthpoint-building.webp"
                  alt="Healthpoint Hospital, Zayed Sports City, Abu Dhabi"
                  fill
                  sizes="(min-width: 900px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
              <p>
                A consultation can help clarify the cause of symptoms and identify next steps based on the clinical
                findings.
              </p>
              <BookButton className="btn">Request an appointment ↗</BookButton>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="soft">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Patient information</span>
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about orthopaedic consultations and treatment options.</p>
          </div>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="cta">
        <div className="wrap ctarow">
          <div>
            <h2>Discuss Your Orthopaedic Concerns</h2>
            <p>
              Arrange a consultation to discuss your symptoms, understand your options, and plan the next step with Dr.
              Feras Ya&apos;ish.
            </p>
          </div>
          <a
            className="btn"
            href={HEALTHPOINT_APPOINTMENT}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact the clinic ↗
          </a>
        </div>
      </section>
      </main>

      <footer className="landing-foot">
        <div className="wrap foot">
          <div>
            <strong>Dr. Feras Ya&apos;ish</strong>
            <br />
            Consultant Trauma and Orthopaedic Surgeon
          </div>
          <div>
            <Link href="/">Official website</Link>
            {" · "}
            <a href="#treatments">Treatments</a>
            {" · "}
            <a href="#gallery">Gallery</a>
            {" · "}
            <a href="#faqs">FAQs</a>
          </div>
          <div>© {new Date().getFullYear()} Dr. Feras Ya&apos;ish</div>
        </div>
      </footer>
    </div>
  );
}

export const abuDhabiFaqs = faqs;
