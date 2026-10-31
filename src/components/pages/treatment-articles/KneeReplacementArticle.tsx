import Link from "next/link";

/**
 * Long-form Total Knee Replacement copy (approved treatment page).
 * Clinical wording kept as provided; SiteShell supplies site chrome.
 */
export function KneeReplacementArticle() {
  return (
    <section className="py-space-3xl">
      <div className="page-wrap max-w-4xl space-y-10">
        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">What Is Total Knee Replacement Surgery?</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            Total knee replacement surgery, also known as <strong className="font-semibold text-primary">total knee arthroplasty</strong>, replaces
            damaged cartilage and underlying bone surfaces with artificial components. The knee is formed by the thigh bone (femur), shin bone
            (tibia) and kneecap (patella). Arthritis can damage the protective cartilage, causing pain, swelling and stiffness.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            During a <strong className="font-semibold text-primary">full knee replacement</strong>, the surgeon removes damaged joint surfaces and
            positions artificial components, usually made of metal and medical-grade plastic. The kneecap may also be resurfaced when clinically
            appropriate. The aim is to reduce arthritis-related pain and improve activities such as walking, standing and climbing stairs.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">When Is Total Knee Replacement Recommended?</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            Total knee replacement may be recommended when advanced arthritis causes persistent pain and limits daily activities despite
            appropriate non-surgical treatment.
          </p>
          <ul className="mb-3 list-disc space-y-1.5 ps-5 text-base text-text-secondary">
            <li>Advanced knee osteoarthritis affecting multiple joint compartments.</li>
            <li>Persistent pain while walking, standing or resting.</li>
            <li>Knee stiffness, swelling and reduced movement.</li>
            <li>Persistent pain, stiffness, swelling or reduced movement.</li>
            <li>Difficulty climbing stairs or getting up from a chair.</li>
            <li>Inflammatory arthritis causing joint damage.</li>
            <li>Limited improvement with physiotherapy, medication or injections.</li>
          </ul>
          <p className="text-base leading-relaxed text-text-secondary">
            Tricompartmental knee osteoarthritis affects all three compartments of the knee and can cause significant cartilage damage and
            mobility limitations. Before recommending surgery, the surgeon evaluates symptoms, examination findings and imaging results.{" "}
            <a
              className="font-semibold text-surgical-teal underline-offset-2 hover:underline"
              href="https://www.nice.org.uk/guidance/ng226"
              target="_blank"
              rel="noopener noreferrer"
            >
              NICE guidance on osteoarthritis
            </a>{" "}
            recommends considering joint replacement when symptoms substantially affect quality of life and non-surgical management has not been
            effective or is unsuitable.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">Who Is a Suitable Candidate for Total Knee Replacement?</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            A suitable candidate is generally someone with significant knee joint damage, persistent symptoms and difficulty performing daily
            activities despite appropriate treatment. Patients with advanced osteoarthritis, inflammatory arthritis, severe stiffness, joint
            deformity or reduced mobility may be considered.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            Not everyone with knee pain requires surgery. Suitability depends on joint degeneration, overall health, symptoms and treatment goals.
            Assessment may include medical history, knee stability, range of motion, walking ability and X-rays. Age alone does not determine
            whether someone is suitable for surgery.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">Total Knee Replacement Procedure and Surgical Approach</h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            The <strong className="font-semibold text-primary">total knee replacement procedure</strong> involves removing damaged joint surfaces
            and positioning artificial components to restore knee function. The surgical approach is planned according to the patient&apos;s anatomy
            and condition. Dr. Ya&apos;ish considers constitutional joint-line and alignment requirements, 3D imaging and robotic assistance where
            indicated, ligament and soft-tissue balance, and implant selection based on individual requirements.
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">Conventional Knee Replacement</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Conventional knee replacement uses established surgical techniques to remove damaged joint surfaces and position artificial
            components. The surgeon assesses alignment and ligament balance to support stability and movement.
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">Kinematic and Constitutional Alignment</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Kinematic alignment aims to restore the patient&apos;s natural joint-line orientation rather than applying the same alignment to every
            knee. This approach considers individual differences in bone shape, joint alignment and ligament tension.
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">Soft-Tissue Balancing</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Soft-tissue balancing involves assessing the ligaments and supporting structures around the knee. Appropriate balance helps support
            joint stability and movement after surgery.
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">Robotic-Assisted Surgical Planning</h3>
          <p className="text-base leading-relaxed text-text-secondary">
            Three-dimensional imaging and robotic-assisted technology may be used in selected cases to support surgical planning and bone
            preparation. Where indicated, robotic assistance can help define haptic resection boundaries and guide implant positioning, while
            clinical decisions remain with the surgeon.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">Knee Replacement Implants and Patient-Specific Planning</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            Artificial knee implants replace damaged joint surfaces and are selected according to the patient&apos;s anatomy, joint condition and
            functional requirements. A typical implant includes metal components covering the ends of the femur and tibia, with a medical-grade
            plastic spacer between them. The kneecap may also be resurfaced when required.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            Dr. Ya&apos;ish considers joint alignment, ligament function, bone anatomy and activity level when planning implant positioning.
            Patient-specific planning aims to create a stable, balanced joint and support functional movement.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">Total Knee Replacement with Dr. Feras Ya&apos;ish</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            Dr. Feras Ya&apos;ish is a Consultant Trauma and Orthopaedic Surgeon with over 25 years of experience. His qualifications include MBBS,
            MRCS (Ed), FRCS (Tr &amp; Orth) and UK Certificate of Completion of Training (CCT).
          </p>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            His surgical interests include primary and complex joint replacement, revision hip and knee surgery, robotic-assisted procedures and
            reconstructive orthopaedics. His approach to{" "}
            <strong className="font-semibold text-primary">total knee replacement surgery</strong> considers each patient&apos;s anatomy, joint
            alignment and soft-tissue characteristics. Where appropriate, he incorporates kinematic and patient-specific planning principles.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            A consultation helps patients understand their condition and whether surgery is suitable for their individual needs.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">Recovery After Total Knee Replacement</h2>
          <p className="mb-3 text-base leading-relaxed text-text-secondary">
            Recovery involves early mobilisation, pain management and physiotherapy to restore knee movement, strength and everyday function. The
            timeline varies depending on general health, muscle strength and individual progress.
          </p>
          <ul className="mb-3 list-disc space-y-1.5 ps-5 text-base text-text-secondary">
            <li>
              <strong className="font-semibold text-primary">Early recovery:</strong> Assisted walking and prescribed knee movements.
            </li>
            <li>
              <strong className="font-semibold text-primary">Around 2 weeks:</strong> Wound review, swelling management and exercises.
            </li>
            <li>
              <strong className="font-semibold text-primary">Around 6 weeks:</strong> Progress towards improved walking and knee movement.
            </li>
            <li>
              <strong className="font-semibold text-primary">Around 3 months:</strong> Continued improvement in strength, balance and mobility.
            </li>
            <li>
              <strong className="font-semibold text-primary">Around 1 year:</strong> Further improvements may occur as the patient adapts to the
              artificial joint.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-text-secondary">
            Dr. Ya&apos;ish&apos;s recovery pathway includes walking on the same day or first day after surgery when clinically appropriate,
            supported by dedicated orthopaedic physiotherapy. The{" "}
            <a
              className="font-semibold text-surgical-teal underline-offset-2 hover:underline"
              href="https://www.nhs.uk/tests-and-treatments/knee-replacement/recovery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NHS knee replacement recovery guidance
            </a>{" "}
            explains that full recovery can take several months or longer. Patients should follow their surgeon&apos;s and physiotherapist&apos;s
            instructions throughout rehabilitation.
          </p>
        </article>

        <article>
          <h2 className="mb-4 font-headline-lg text-[1.75rem] text-primary">Total Knee Replacement in Abu Dhabi</h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Patients considering <strong className="font-semibold text-primary">total knee replacement in Abu Dhabi</strong> can arrange an
            orthopaedic consultation with Dr. Feras Ya&apos;ish at Healthpoint Hospital. Patients looking for{" "}
            <strong className="font-semibold text-primary">total knee replacement in UAE</strong> can also consult Dr. Ya&apos;ish to discuss their
            knee condition, surgical options and individual treatment requirements.
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">Consultation at Healthpoint Hospital</h3>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Dr. Feras Ya&apos;ish sees patients at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Consultations include an assessment of knee
            pain, mobility, previous treatments and relevant imaging findings.
          </p>
          <h3 className="mb-2 text-base font-semibold text-primary">Appointment and Contact Information</h3>
          <p className="mb-2 text-base leading-relaxed text-text-secondary">
            <strong className="font-semibold text-primary">Location:</strong> Healthpoint Hospital, Zayed Sports City, Abu Dhabi, UAE.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            <strong className="font-semibold text-primary">Appointment:</strong>{" "}
            <a
              className="font-semibold text-surgical-teal underline-offset-2 hover:underline"
              href="https://healthpoint.ae/request-appointment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request a Consultation
            </a>
            . You can also explore the{" "}
            <Link className="font-semibold text-surgical-teal underline-offset-2 hover:underline" href="/patient-care">
              patient care and recovery pathway
            </Link>
            .
          </p>
        </article>

        <p className="border-t border-surface-border pt-6 text-sm text-text-secondary">
          Patient information references:{" "}
          <a
            className="text-surgical-teal underline-offset-2 hover:underline"
            href="https://www.nice.org.uk/guidance/ng226"
            target="_blank"
            rel="noopener noreferrer"
          >
            NICE osteoarthritis guidance
          </a>
          {" · "}
          <a
            className="text-surgical-teal underline-offset-2 hover:underline"
            href="https://www.nhs.uk/tests-and-treatments/knee-replacement/recovery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NHS knee replacement recovery
          </a>
          {" · "}
          <a
            className="text-surgical-teal underline-offset-2 hover:underline"
            href="https://www.orthoinfo.org/treatment/total-knee-replacement/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AAOS total knee replacement
          </a>
          .
        </p>
      </div>
    </section>
  );
}
