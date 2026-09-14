export type Treatment = {
  slug: string;
  tag: string;
  title: string;
  short: string;
  shortAr: string;
  image: string;
  summary: string;
  who: string[];
  approach: string[];
  recovery: string[];
};

export const treatments: Treatment[] = [
  {
    slug: "hip-replacement",
    tag: "Hip Arthroplasty",
    title: "Total & Direct Anterior Hip Replacement",
    short: "Direct Anterior Hip",
    shortAr: "استبدال الورك الأمامي",
    image: "/images/implant-hip.png",
    summary:
      "Utilizing the internervous, intermuscular Direct Anterior Approach (DAA) to access the hip joint without detaching or incising gluteal muscle structures. Coupled with high-grade delta ceramic articulations and porous titanium osseointegration sleeves to promote frictionless biomechanics and long-term durability.",
    who: [
      "End-stage hip osteoarthritis with groin or lateral hip pain",
      "Avascular necrosis of the femoral head",
      "Inflammatory arthritis affecting the hip",
      "Patients seeking muscle-sparing recovery and earlier independent walking",
    ],
    approach: [
      "Direct Anterior Approach through the internervous interval — no gluteal detachment",
      "Pre-operative templating and, where indicated, robotic or navigation assistance",
      "Ceramic-on-polyethylene or dual-mobility bearings selected for stability and wear",
      "Porous titanium acetabular shells for biological osseointegration",
      "Tranexamic acid and multimodal anaesthesia to reduce blood loss and narcotic need",
    ],
    recovery: [
      "Independent mobilisation typically within 3–6 hours",
      "Most patients discharge with a structured physiotherapy plan within 1–3 days",
      "Driving usually resumes once an emergency stop is safe",
      "Clinic review at 2 weeks, 6 weeks, 3 months, and 1 year",
    ],
  },
  {
    slug: "knee-replacement",
    tag: "Knee Arthroplasty",
    title: "Kinematically Aligned Total Knee Arthroplasty (TKA)",
    short: "Total Knee (Kinematic)",
    shortAr: "استبدال الركبة الكامل",
    image: "/images/implant-knee.png",
    summary:
      "Moving past rigid mechanical alignment, Dr. Ya'ish implements kinematic alignment protocols calibrated to replicate each patient's constitutional joint line and soft-tissue envelope. This physiological philosophy eliminates unnatural tightness and restores a natural, pain-free arc of flexion.",
    who: [
      "Tricompartmental knee osteoarthritis",
      "Failed non-operative care (physiotherapy, injections, activity modification)",
      "Inflammatory arthritis of the knee",
      "Patients wanting a more natural knee feel after replacement",
    ],
    approach: [
      "Constitutional joint-line restoration rather than a forced 90° mechanical axis",
      "3D imaging and, where indicated, robotic haptic resection boundaries",
      "Ligament-sparing soft-tissue balancing across the full range of motion",
      "Modern bearing surfaces selected for activity level and longevity",
    ],
    recovery: [
      "Same-day or day-1 walking with dedicated orthopaedic physiotherapy",
      "Reduced tightness compared with classic mechanical alignment in suitable patients",
      "Structured milestones at 2 weeks, 6 weeks, 3 months, and 1 year",
    ],
  },
  {
    slug: "partial-knee",
    tag: "Joint Preservation",
    title: "Partial (Unicompartmental) Knee Replacement",
    short: "Partial Knee",
    shortAr: "استبدال الركبة الجزئي",
    image: "/images/implant-partial.png",
    summary:
      "Ideal for isolated medial or lateral compartment osteoarthritis. By resurfacing solely the worn articulating compartment, both the Anterior Cruciate Ligament (ACL) and Posterior Cruciate Ligament (PCL) remain fully intact, preserving proprioceptive feedback and a more natural knee.",
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
    title: "Robotic-Assisted Joint Arthroplasty",
    short: "Robotic Joint Replacement",
    shortAr: "الجراحة الروبوتية",
    image: "/images/implant-robotic.png",
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
    title: "Complex Revision Hip & Knee Surgery",
    short: "Revision Hip & Knee",
    shortAr: "جراحة المراجعة",
    image: "/images/implant-revision.png",
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
    tag: "Sports Knee",
    title: "Arthroscopy & Multi-Ligament Reconstruction",
    short: "Knee Arthroscopy",
    shortAr: "منظار الركبة",
    image: "/images/knee-mechanics.png",
    summary:
      "Minimally invasive keyhole surgery for athletic injuries in professional and recreational sports. High-definition arthroscopic anatomical ACL/PCL reconstruction, ramp-lesion meniscal repair, root re-anchoring, and matrix-induced cartilage preservation.",
    who: [
      "ACL or PCL rupture",
      "Meniscal tear, ramp lesion, or root avulsion",
      "Recurrent instability after previous sports injury",
      "Focal cartilage injury suitable for preservation techniques",
    ],
    approach: [
      "Anatomical ligament reconstruction with modern fixation",
      "Meniscal repair preferred over resection whenever tissue quality allows",
      "Cartilage restoration or debridement matched to lesion type",
      "Early protected motion to avoid stiffness",
    ],
    recovery: [
      "Brace and crutches protocols vary by repair type",
      "Running and pivoting sport only after strength and hop testing",
      "Shared plan with physiotherapy and, for professionals, team medical staff",
    ],
  },
  {
    slug: "trauma",
    tag: "Trauma",
    title: "Major Orthopaedic Trauma & Malunion Reconstruction",
    short: "Trauma & Malunion",
    shortAr: "الكسور وإعادة البناء",
    image: "/images/implant-trauma.png",
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
      "Coordination with Healthpoint trauma and ICU pathways",
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
