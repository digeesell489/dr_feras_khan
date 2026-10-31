import {
  hipReplacementXray,
  kneeArthroscopy,
  partialKneeCompartments,
  psiCtPlanning,
  revisionKneeXray,
  roboticTheatre,
  traumaMalunionXray,
} from "@/assets/clinical-images";

export type TreatmentCategory = "knee" | "hip" | "robotic" | "revision" | "sports" | "trauma";

export type Treatment = {
  slug: string;
  tag: string;
  title: string;
  short: string;
  shortAr: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  category: TreatmentCategory;
  summary: string;
  /** Extra hero paragraphs after `summary` (English long-form pages). */
  summaryExtra?: string[];
  /** Optional SEO title override for generateMetadata. */
  seoTitle?: string;
  /** Optional SEO description override for generateMetadata. */
  seoDescription?: string;
  /** Prefer these related treatment slugs on the detail page when set. */
  relatedSlugs?: string[];
  who: string[];
  approach: string[];
  recovery: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "total-knee-replacement",
    tag: "Knee Arthroplasty",
    title: "Total Knee Replacement",
    short: "Total Knee Replacement",
    shortAr: "استبدال الركبة الكامل",
    image: "/images/implant-knee.webp",
    imageAlt: "Total knee replacement implant showing artificial knee joint components",
    category: "knee",
    summary:
      "Persistent knee pain, stiffness and difficulty walking can affect everyday life. When these symptoms are caused by advanced arthritis and do not improve with non-surgical treatment, total knee replacement may be considered. The procedure replaces damaged joint surfaces with artificial components to help reduce pain, improve movement and restore knee function.",
    summaryExtra: [
      "Dr. Feras Ya'ish follows an individualised approach, considering each patient's anatomy, joint alignment and soft-tissue balance when planning surgery. Where appropriate, his surgical planning incorporates kinematic and patient-specific principles to support a balanced and functional knee.",
    ],
    seoTitle: "Expert Total Knee Replacement in UAE by Dr. Feras Ya'ish",
    seoDescription:
      "Explore total knee replacement with Dr. Feras Ya'ish in Abu Dhabi, UAE. Learn about surgery, recovery and treatment options.",
    relatedSlugs: ["patient-specific-knee", "hip-replacement", "partial-knee"],
    who: [
      "Tricompartmental knee osteoarthritis",
      "Limited improvement with non-operative care",
      "Inflammatory arthritis of the knee",
      "Persistent pain and mobility limitations",
    ],
    approach: [
      "Constitutional joint-line and alignment assessment",
      "3D imaging and robotic assistance where indicated",
      "Ligament and soft-tissue balancing",
      "Implant selection based on individual requirements",
    ],
    recovery: [
      "Early assisted walking when clinically appropriate",
      "Dedicated orthopaedic physiotherapy",
      "Milestones reviewed at 2 weeks, 6 weeks, 3 months and 1 year",
    ],
  },
  {
    slug: "patient-specific-knee",
    tag: "Personalised Implants",
    title: "Patient-Specific Knee Replacement (PSI)",
    short: "Patient-Specific Knee Replacement (PSI)",
    shortAr: "استبدال الركبة المخصص للمريض (PSI)",
    image: psiCtPlanning.src,
    imageAlt: psiCtPlanning.alt,
    imageFit: "contain",
    category: "knee",
    summary:
      "CT-based pre-operative planning produces patient-specific instrumentation, so femoral and tibial cuts are mapped to the individual's own anatomy before the first incision is made. PSI sits alongside total knee replacement; it is the planning method, not a different operation.",
    who: [
      "Patients planned for total knee replacement whose bone shape needs cuts mapped in advance",
      "Knees where a one-size-fits-all mechanical template would not match the individual's anatomy",
      "Cases in which robotic assistance and patient-specific guides are weighed as complementary tools",
    ],
    approach: [
      "A CT plan of the knee produces cutting guides matched to that patient's anatomy",
      "Femoral and tibial cuts are mapped before the first incision",
      "The aim is the individual's joint line and morphology, used with total knee replacement",
      "The approach is chosen to suit the patient, alongside conventional or robotic planning",
    ],
    recovery: [
      "Same-day or day-1 walking with dedicated orthopaedic physiotherapy",
      "The recovery pathway follows the total knee replacement plan",
      "Structured milestones at 2 weeks, 6 weeks, 3 months, and 1 year",
    ],
  },
  {
    slug: "hip-replacement",
    tag: "Hip Arthroplasty",
    title: "Hip Replacement",
    short: "Hip Replacement",
    shortAr: "استبدال الورك",
    image: hipReplacementXray.src,
    imageAlt: hipReplacementXray.alt,
    imageFit: "contain",
    category: "hip",
    summary:
      "Primary total hip arthroplasty using cementless and hybrid fixation, with leg-length and offset restored to the patient's own anatomy.",
    who: [
      "Hip osteoarthritis limiting walking, sleep, or daily activity",
      "Failed non-operative care of the hip",
      "Patients who need leg length and offset restored to their own anatomy",
    ],
    approach: [
      "Cementless or hybrid fixation selected for bone quality",
      "Restoration of leg length and femoral offset",
      "CT templating, and robotic assistance when precision alignment is required",
      "Muscle-sparing exposure in an ultra-clean theatre",
    ],
    recovery: [
      "Supported walking on the day of surgery or within 24 hours",
      "Physiotherapy for gait, hip precautions, and strength",
      "Clinic review to confirm wound healing, leg length, and implant position",
    ],
  },
  {
    slug: "partial-knee",
    tag: "Joint Preservation",
    title: "Partial Knee Replacement",
    short: "Partial Knee Replacement",
    shortAr: "استبدال الركبة الجزئي",
    image: partialKneeCompartments.src,
    imageAlt: partialKneeCompartments.alt,
    imageFit: "contain",
    category: "knee",
    summary:
      "Ideal for isolated medial or lateral compartment osteoarthritis. By resurfacing solely the worn articulating compartment, both the Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) remain fully intact, preserving proprioceptive feedback and a more natural knee. Quicker recovery to function representing native joint.",
    who: [
      "Isolated medial or lateral compartment wear",
      "Intact ACL and PCL with a correctable deformity",
      "Patients wishing to keep native ligaments and a smaller incision",
    ],
    approach: [
      "Resurfacing only the damaged compartment",
      "Preservation of both cruciate ligaments and healthy cartilage",
      "Robotic or patient-specific guides when anatomy and hardware allow",
      "Careful exclusion of inflammatory arthritis and multi-compartment disease",
    ],
    recovery: [
      "Typically faster than total knee replacement",
      "Earlier return to stairs, prayer positions, and recreational walking",
      "Follow-up to confirm implant tracking and remaining compartment health",
    ],
  },
  {
    slug: "robotic-arthroplasty",
    tag: "Robotics",
    title: "Robotic Joint Replacement",
    short: "Robotic Joint Replacement",
    shortAr: "الجراحة الروبوتية",
    image: roboticTheatre.src,
    imageAlt: roboticTheatre.alt,
    category: "robotic",
    summary:
      "Next-generation robotic arm stereotactic guidance combined with high-resolution pre-operative 3D-CT modeling. Surgeon-controlled haptic boundaries prevent inadvertent soft-tissue damage, keeping femoral and tibial component positioning within 0.5 mm and 0.5 degrees of planned alignment.",
    who: [
      "Primary hip or knee replacement where sub-millimeter accuracy is desired",
      "Partial knee replacement requiring precise compartment isolation",
      "Complex constitutional deformity in active patients",
    ],
    approach: [
      "Low-dose volumetric CT reconstructed into a 3D bone model",
      "Intra-operative optical tracking and haptic resection envelope",
      "No obligatory intramedullary canal violation for alignment rods",
      "Dynamic ligament assessment across the arc of motion",
    ],
    recovery: [
      "Often 2–4 weeks to independent daily gait with reduced narcotic demand",
      "Same enhanced-recovery pathway as conventional arthroplasty",
      "Imaging and clinic review to confirm planned alignment",
    ],
  },
  {
    slug: "revision-surgery",
    tag: "Tertiary Revision",
    title: "Revision Hip & Knee Surgery",
    short: "Revision Hip & Knee Surgery",
    shortAr: "جراحة مراجعة الورك والركبة",
    image: revisionKneeXray.src,
    imageAlt: revisionKneeXray.alt,
    imageFit: "contain",
    category: "revision",
    summary:
      "Specialized referral pathway for previously operated joints with aseptic loosening, osteolysis, structural bone loss, instability, or periprosthetic joint infection (PJI). Uses modular revision stems, titanium trabecular 3D cones, custom acetabular augments, and hinge knee systems.",
    who: [
      "Painful or loose hip or knee replacements",
      "Suspected or confirmed periprosthetic joint infection",
      "Recurrent dislocation or extensor mechanism failure",
      "Periprosthetic fracture around a stem or implant",
    ],
    approach: [
      "MDT planning with infectious diseases and, when needed, vascular surgery",
      "Paprosky / AORI bone-loss grading from metal-reduction CT",
      "Modular stems, metaphyseal cones, and custom augments as required",
      "One- or two-stage protocols for infection",
    ],
    recovery: [
      "Length of stay and weight-bearing depend on reconstruction complexity",
      "Protected mobilisation with specialist physiotherapy",
      "Longer surveillance for infection and implant stability",
    ],
  },
  {
    slug: "arthroscopy",
    tag: "Knee Sports Injuries",
    title: "Knee Arthroscopy",
    short: "Knee Arthroscopy",
    shortAr: "منظار الركبة",
    image: kneeArthroscopy.src,
    imageAlt: kneeArthroscopy.alt,
    imageFit: "contain",
    category: "sports",
    summary:
      "Minimally invasive keyhole surgery for meniscal tears, cartilage lesions, and mechanical locking of the knee. High-definition arthroscopy allows targeted repair or debridement while protecting healthy tissue.",
    who: [
      "Meniscal tear, ramp lesion, or root avulsion",
      "Mechanical locking, catching, or swelling after injury",
      "Focal cartilage injury suitable for preservation techniques",
      "Diagnostic assessment of the knee when imaging is inconclusive",
    ],
    approach: [
      "4 mm high-definition arthroscopic portals",
      "Meniscal repair preferred over resection whenever tissue quality allows",
      "Cartilage restoration or debridement matched to lesion type",
      "Early protected motion to avoid stiffness",
    ],
    recovery: [
      "Brace and crutches protocols vary by repair type",
      "Desk work often resumes within days when the meniscus is not repaired",
      "Running and pivoting only after strength and hop testing when repair is performed",
    ],
  },
  {
    slug: "ligament-reconstruction",
    tag: "Knee Sports Injuries",
    title: "Knee Ligament Reconstruction, including ACL",
    short: "Knee Ligament Reconstruction",
    shortAr: "إعادة بناء أربطة الركبة",
    image: "/images/knee-mechanics.webp",
    imageAlt: "Knee ligament anatomy including the ACL",
    category: "sports",
    summary:
      "Anatomical reconstruction of the anterior cruciate ligament (ACL) and associated knee ligaments after rupture or multi-ligament injury. The goal is a stable, proprioceptive knee for daily function, prayer, work, and return to sport when appropriate.",
    who: [
      "ACL rupture with giving-way during cutting, pivoting, or landing",
      "PCL or combined ligament injury",
      "Recurrent instability after a previous knee sports injury",
      "Patients needing a structured return-to-play plan",
    ],
    approach: [
      "Anatomical ACL reconstruction with modern fixation",
      "Addressing ramp lesions, meniscal roots, and associated ligament injury in the same sitting when indicated",
      "Graft choice discussed according to age, sport, and tissue quality",
      "Early protected motion with a criterion-based rehabilitation plan",
    ],
    recovery: [
      "Brace and crutches protocols vary by reconstruction type",
      "Running and pivoting sport only after strength and hop testing",
      "Shared plan with physiotherapy and, for professionals, team medical staff",
    ],
  },
  {
    slug: "patellofemoral-instability",
    tag: "Knee Sports Injuries",
    title: "Patellofemoral Instability Surgery",
    short: "Patellofemoral Instability Surgery",
    shortAr: "جراحة عدم استقرار الرضفة",
    image: "/images/knee-mechanics.webp",
    imageAlt: "Knee anatomy showing the structures that guide the kneecap",
    category: "sports",
    summary:
      "Surgery for a kneecap that slips or repeatedly dislocates. The stabilising ligament is restored, and bone alignment is corrected only when it is pulling the patella out of its groove.",
    who: [
      "A kneecap that dislocates or repeatedly gives way",
      "Instability after a first dislocation when the stabilising ligament has failed",
      "Apprehension with twisting, stairs, or sport",
    ],
    approach: [
      "Assessment of tracking, limb alignment, and the medial patellofemoral ligament",
      "MPFL reconstruction to restore the checkrein that holds the kneecap",
      "Tibial tubercle realignment only when bone alignment is pulling the kneecap out of its groove",
      "Arthroscopy when cartilage or meniscal injury needs attention at the same time",
    ],
    recovery: [
      "A brace and protected bending in the early weeks",
      "Physiotherapy for quadriceps control and confidence in the kneecap",
      "Return to pivoting sport after strength and stability testing",
    ],
  },
  {
    slug: "trauma",
    tag: "Trauma",
    title: "Trauma & Malunion Reconstruction",
    short: "Trauma & Malunion",
    shortAr: "الكسور وإعادة البناء",
    image: traumaMalunionXray.src,
    imageAlt: traumaMalunionXray.alt,
    imageFit: "contain",
    category: "trauma",
    summary:
      "Treatment of high-energy intra-articular fractures, open injuries, periarticular disruptions, and established non-unions or malunions. Rigid internal fixation uses anatomically contoured titanium locking compression plates (LCP) and minimally invasive plate osteosynthesis (MIPO).",
    who: [
      "Acute periarticular or periprosthetic fractures",
      "Open fractures requiring staged reconstruction",
      "Non-union or malunion after previous fixation",
      "Hospital-to-hospital tertiary trauma transfer",
    ],
    approach: [
      "Damage-control then definitive reconstruction as physiology allows",
      "Anatomically contoured locking plates and MIPO where indicated",
      "Restoration of articular surface and mechanical axis",
      "Coordination with hospital trauma and ICU pathways",
    ],
    recovery: [
      "Weight-bearing status is fracture-specific",
      "Early physiotherapy to protect joint motion",
      "Planned removal of metalwork only when clinically indicated",
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((item) => item.slug === slug);
}
