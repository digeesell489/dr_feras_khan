import Image from "next/image";
import Link from "next/link";
import { AbuLandingGallery } from "@/components/pages/AbuLandingGallery";
import { Hospital } from "@/components/Hospital";
import { HEALTHPOINT_APPOINTMENT } from "@/lib/links";
import "./abu-landing.css";

const treatments = [
  {
    title: "Knee Replacement Surgery",
    body: "If joint pain, stiffness, and normal function continue because of severe joint damage, a knee replacement might be recommended. Assessment is used to decide if total knee replacement or another treatment option is appropriate.",
    href: "/treatments/total-knee-replacement",
    label: "Explore knee replacement →",
    image: "/images/implant-knee.webp",
  },
  {
    title: "Hip Replacement Surgery",
    body: "If there is a lot of damage to the hip joint, this can cause problems with walking, moving around or living life to the fullest, then hip replacement might be considered. Diagnosis and alternatives, surgical considerations, and recovery expectations are discussed.",
    href: "/treatments/hip-replacement",
    label: "Explore hip replacement →",
    image: "/images/clinical/hip-replacement-xray.webp",
  },
  {
    title: "Robotic Joint Replacement",
    body: "For selected joint replacement procedures, the use of robotic-assisted technology can aid in planning and directing the various parts of the procedure. Appropriateness is subject to the clinical judgement and condition of the patient.",
    href: "/treatments/robotic-arthroplasty",
    label: "Explore robotic arthroplasty →",
    image: "/images/clinical/mako-theatre.webp",
  },
  {
    title: "Revision Hip and Knee Surgery",
    body: "If there is a complication with the initial replacement surgery (such as infection, wear or loosening), revision surgery may be required. Next steps are informed by careful investigation.",
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
    body: "For selected patients, depending on anatomy, the location of joint damage and clinical findings, patient-specific planning and/or partial knee replacement may be appropriate.",
    href: "/treatments/patient-specific-knee",
    label: "Explore patient-specific knee replacement →",
    image: "/images/clinical/partial-knee-compartments.webp",
  },
  {
    title: "Trauma and Malunion Treatment",
    body: "Orthopedic trauma care is for the treatment of injuries to bones and joints. Malunion treatment may be indicated if the fracture has healed in a misaligned position that affects alignment or function.",
    href: "/treatments/trauma",
    label: "Explore trauma treatment →",
    image: "/images/clinical/trauma-malunion-xray.webp",
  },
  {
    title: "Knee Arthroscopy",
    body: "Arthroscopy of the knee or Knee Arthroscopy is a procedure that provides an inside look at the knee joint and treats some specific problems using tiny incisions and a camera. The correct management is dependent on the diagnosis.",
    href: "/treatments/arthroscopy",
    label: "Explore arthroscopy →",
    image: "/images/clinical/knee-arthroscopy.webp",
  },
  {
    title: "Patellofemoral Instability",
    body: "Patellofemoral instability can have an impact on comfort and confidence while moving. Assessment can assist in determining possible contributing factors and the discussion of management options.",
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
    a: "Qualifications, experience, specialization, and treatment options are some of the factors to take into account when selecting an orthopedic physician. As an expert orthopedic and trauma consultant in Abu Dhabi, Dr. Feras Ya'ish offers personalized consultation for orthopaedic problems and treatment options for the hips and knees.",
  },
  {
    q: "What conditions does an orthopedic specialist treat?",
    a: "An orthopedic specialist assesses and treats conditions affecting bones, joints, ligaments, and other parts of the musculoskeletal system. Treatment will be based on the diagnosis and the patient's specific needs.",
  },
  {
    q: "Does Dr. Feras Ya'ish perform robotic joint replacement?",
    a: "Yes, Dr. Feras Ya'ish has 25+ years of experience treating patients for joint replacements and performs a robotic-assisted surgical approach when clinically needed. Appropriateness is at the discretion of patient status and evaluation.",
  },
  {
    q: "Where can I consult Dr. Feras Ya'ish in Abu Dhabi?",
    a: "The consultation will be at Healthpoint Hospital, Al Qiyada Street, Zayed Sports City, Al Rawdah, Abu Dhabi, UAE, between Gates 1-6. The hospital contact number is +971 800 77.",
  },
  {
    q: "When should I consider hip or knee replacement surgery?",
    a: "You should consider hip or knee replacement surgery if joint damage or arthritis has caused long-term pain and affected your ability to do everyday tasks. It may be worth considering, especially if other treatments have not been effective. An orthopedic consultation can help determine suitable options.",
  },
] as const;

export function AbuDhabiLandingPage() {
  return (
    <>
    <div className="abu-landing">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Consultant Trauma &amp; Orthopaedics</span>
            <h1>Expert Orthopedic Doctor in Abu Dhabi</h1>
            <p className="lead">
              Dr. Feras Ya&apos;ish is a Consultant Trauma and Orthopedic doctor in Abu Dhabi, UAE who has also been
              involved in complex reconstructive procedures, Robotic-assisted Joint Replacement, Hip and Knee Replacement
              and Orthopaedic Trauma care.
            </p>
            <p>
              Have a personal evaluation of joint pain, mobility issues or an orthopedic injury and understand the
              treatment options based on your condition and your goals.
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
                src="/images/doctor-hero-card.webp"
                alt="Dr. Feras Ya'ish, Consultant Trauma and Orthopaedic Surgeon in Abu Dhabi"
                fill
                sizes="(min-width: 1024px) 410px, 90vw"
                className="object-cover object-[center_12%]"
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
              src="/images/practice/teaching-workshop.webp"
              alt="Dr. Feras Ya'ish teaching at an orthopaedic workshop"
              fill
              sizes="(min-width: 900px) 420px, 100vw"
              className="object-cover object-center"
              priority
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
              Dr. Feras Ya&apos;ish is a Consultant Trauma and Orthopedics surgeon in Abu Dhabi with over 25 years&apos;
              experience in Orthopedics and Trauma. He specializes in complex surgeries including joint replacements, hip
              and knee surgery, knee ligament reconstruction, sports related traumas, robotic-assisted total replacement
              surgery and reconstructive surgery.
            </p>
            <p>
              He has performed over 4,500 joint arthroplasty surgeries and procedures and has been involved in
              orthopaedic education and surgical training. As an expert orthopedic consultant, he looks at your symptoms,
              medical history, exam findings, and functional goals to determine appropriate options.
            </p>
            <p>
              Patients seeking an orthopedic surgeon in Abu Dhabi will be able to talk about any ongoing joint pain,
              mobility issues, prior surgery, or injury, and determine if any additional tests or care might be
              beneficial.
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
              Joint pain and mobility issues may be caused by various factors. Treatment will be based on the diagnosis,
              severity of joint damage, general health, and patient&apos;s expectations. Check out some of Dr.
              Ya&apos;ish&apos;s treatment areas below.
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
              When selecting an expert orthopedic doctor in Abu Dhabi, it is essential to make sure that you know what
              your diagnosis is, the choices that are available, and what each option might entail. Treatment should not
              be based solely on a procedure, but rather on a clinical evaluation.
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
              If symptoms continue, are affecting mobility or affecting daily activities, an assessment by an orthopedic
              specialist in Abu Dhabi can be helpful.
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
              Selected photographs chosen from the clinic, theatre, and orthopedic teaching environment to illustrate Dr.
              Feras Ya&apos;ish&apos;s practice and education work as a specialist orthopedic doctor in Abu Dhabi, UAE.
            </p>
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

      </div>
    </>
  );
}

export const abuDhabiFaqs = faqs;
