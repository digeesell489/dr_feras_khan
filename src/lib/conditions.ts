import { hipReplacementXray, revisionKneeXray, traumaMalunionXray } from "@/assets/clinical-images";

export type ConditionRegion = "Hip Joint" | "Knee Joint" | "Trauma & Other";
export type ConditionPresentation =
  | "Osteoarthritis / Joint degeneration"
  | "Failed previous surgery"
  | "Sports injury / instability"
  | "Fracture / malunion";

export type Condition = {
  slug: string;
  region: ConditionRegion;
  presentation: ConditionPresentation;
  title: string;
  short: string;
  shortAr: string;
  image: string;
  imageFit?: "cover" | "contain";
  summary: string;
  symptoms: string[];
  evaluation: string[];
  treatments: { href: string; label: string }[];
};

export const conditions: Condition[] = [
  {
    slug: "hip-osteoarthritis",
    region: "Hip Joint",
    presentation: "Osteoarthritis / Joint degeneration",
    title: "Hip Osteoarthritis",
    short: "Hip Osteoarthritis",
    shortAr: "خشونة الورك",
    image: hipReplacementXray.src,
    imageFit: "contain",
    summary:
      "Osteoarthritis of the hip is progressive cartilage wear of the femoral head and acetabulum. Patients typically describe groin stiffness, night pain, and reduced walking distance. Dr. Ya'ish evaluates constitutional anatomy before recommending joint-preserving care or patient-specific / robotic hip reconstruction.",
    symptoms: [
      "Groin, buttock, or lateral hip pain that worsens with walking",
      "Morning stiffness and difficulty putting on socks or shoes",
      "Limping and reduced stride length",
      "Pain at rest or at night in later stages",
    ],
    evaluation: [
      "Clinical examination of gait, flexion contracture, and limb length",
      "Weight-bearing radiographs of the pelvis and hip",
      "CT templating when arthroplasty or dysplasia is being considered",
    ],
    treatments: [
      { href: "/treatments/robotic-arthroplasty", label: "Robotic Joint Replacement" },
      { href: "/treatments/revision-surgery", label: "Revision Hip & Knee Surgery" },
      { href: "/patient-care", label: "Care & recovery pathway" },
    ],
  },
  {
    slug: "knee-osteoarthritis",
    region: "Knee Joint",
    presentation: "Osteoarthritis / Joint degeneration",
    title: "Knee Osteoarthritis",
    short: "Knee Osteoarthritis",
    shortAr: "خشونة الركبة",
    image: "/images/implant-knee.png",
    summary:
      "Compartmental wear of the knee may affect the medial, lateral, or patellofemoral surfaces. Treatment ranges from activity modification and injections to partial or kinematically aligned total knee replacement, with robotic assistance when precision alignment is required.",
    symptoms: [
      "Activity-related knee pain and swelling",
      "Stiffness after sitting, difficulty with stairs or prayer positions",
      "Bow-leg or knock-knee deformity as cartilage collapses",
      "Night pain and reduced walking tolerance",
    ],
    evaluation: [
      "Weight-bearing radiographs including long-leg alignment views",
      "Assessment of ACL integrity and remaining cartilage compartments",
      "3D CT planning if partial, kinematic, or robotic arthroplasty is considered",
    ],
    treatments: [
      { href: "/treatments/partial-knee", label: "Partial Knee Replacement" },
      { href: "/treatments/knee-replacement", label: "Kinematic Total Knee" },
      { href: "/treatments/robotic-arthroplasty", label: "Robotic Arthroplasty" },
    ],
  },
  {
    slug: "avascular-necrosis",
    region: "Hip Joint",
    presentation: "Osteoarthritis / Joint degeneration",
    title: "Avascular Necrosis of the Femoral Head",
    short: "Avascular Necrosis",
    shortAr: "نخر رأس الفخذ",
    image: "/images/hip-anatomy.png",
    summary:
      "Avascular necrosis (osteonecrosis) interrupts blood supply to the femoral head. Collapse of the head leads to secondary arthritis. Early stages may be observed or decompressed; established collapse is typically treated with total hip reconstruction planned to the patient's anatomy.",
    symptoms: [
      "Deep groin pain, often in younger or steroid-exposed patients",
      "Pain with rotation and weight-bearing",
      "Progressive limp as the femoral head collapses",
    ],
    evaluation: [
      "MRI is the most sensitive study before radiographic collapse",
      "Staging of head involvement to decide preservation versus replacement",
      "Medical review of steroid, alcohol, or clotting risk factors",
    ],
    treatments: [
      { href: "/treatments/robotic-arthroplasty", label: "Robotic Joint Replacement" },
      { href: "/treatments/robotic-arthroplasty", label: "Robotic Hip Arthroplasty" },
      { href: "/patient-care", label: "Pre-operative optimisation" },
    ],
  },
  {
    slug: "hip-dysplasia",
    region: "Hip Joint",
    presentation: "Osteoarthritis / Joint degeneration",
    title: "Hip Dysplasia & Structural Impingement",
    short: "Hip Dysplasia",
    shortAr: "خلل تنسج الورك",
    image: "/images/hip-anatomy.png",
    summary:
      "Acetabular dysplasia and femoroacetabular impingement alter load across the hip from a young age. Some patients present with groin stiffness and early arthritis. Reconstruction must restore coverage and offset; replacement, when required, is planned to the patient's anatomy rather than a generic cup position.",
    symptoms: [
      "Activity-related groin pain in younger adults",
      "Catching or stiffness after sitting",
      "Early osteoarthritis on the dysplastic side",
    ],
    evaluation: [
      "Specialised pelvic radiographs and, when needed, CT coverage measurements",
      "Exclusion of extra-articular causes of groin pain",
      "Shared decision between joint preservation and arthroplasty",
    ],
    treatments: [
      { href: "/treatments/robotic-arthroplasty", label: "Patient-specific planning" },
      { href: "/treatments/revision-surgery", label: "Revision Hip & Knee Surgery" },
      { href: "/conditions", label: "Conditions explorer" },
    ],
  },
  {
    slug: "failed-joint-replacement",
    region: "Trauma & Other",
    presentation: "Failed previous surgery",
    title: "Failed or Painful Joint Replacement",
    short: "Failed Joint Replacement",
    shortAr: "فشل المفصل الصناعي",
    image: revisionKneeXray.src,
    imageFit: "contain",
    summary:
      "Pain after hip or knee replacement may come from loosening, osteolysis, instability, fracture, or periprosthetic joint infection. Dr. Ya'ish provides a tertiary revision pathway with metal-reduction CT, aspiration protocols, and modular reconstruction.",
    symptoms: [
      "Start-up pain or pain that never settled after primary surgery",
      "Recurrent dislocation or a sense of giving way",
      "Warmth, drainage, or night pain suggesting infection",
      "Sudden pain after a fall around an implant",
    ],
    evaluation: [
      "Serial radiographs compared with the original post-operative films",
      "ESR, CRP, and joint aspiration when infection is possible",
      "CT with metal artefact reduction for bone-loss grading",
    ],
    treatments: [
      { href: "/treatments/revision-surgery", label: "Revision Hip & Knee Surgery" },
      { href: "/for-physicians", label: "Physician referral gateway" },
      { href: "/treatments/trauma", label: "Periprosthetic fracture care" },
    ],
  },
  {
    slug: "sports-knee-injury",
    region: "Knee Joint",
    presentation: "Sports injury / instability",
    title: "Knee Sports Injuries & Instability",
    short: "Knee Sports Injuries",
    shortAr: "إصابات الركبة الرياضية",
    image: "/images/knee-mechanics.png",
    summary:
      "ACL rupture, meniscal tears, ramp lesions, and multi-ligament injury are treated with anatomical arthroscopic reconstruction and repair-first meniscal surgery. The goal is a stable, proprioceptive knee for sport and daily prayer or work demands.",
    symptoms: [
      "Giving way during cutting, pivoting, or landing",
      "Swelling after injury and difficulty fully straightening the knee",
      "Locking or catching from a meniscal tear",
      "Ongoing instability after a previous sports injury",
    ],
    evaluation: [
      "Clinical ligament testing and assessment of alignment",
      "MRI for ACL/PCL, meniscus, and cartilage",
      "Discussion of graft choice and return-to-sport criteria",
    ],
    treatments: [
      { href: "/treatments/arthroscopy", label: "Knee Arthroscopy" },
      { href: "/treatments/ligament-reconstruction", label: "Knee Ligament Reconstruction" },
      { href: "/patient-care", label: "Rehabilitation milestones" },
      { href: "/treatments/partial-knee", label: "Partial knee if arthritis coexists" },
    ],
  },
  {
    slug: "fracture-malunion",
    region: "Trauma & Other",
    presentation: "Fracture / malunion",
    title: "Fractures, Non-union & Malunion",
    short: "Fracture & Malunion",
    shortAr: "الكسور وعدم الالتئام",
    image: traumaMalunionXray.src,
    imageFit: "contain",
    summary:
      "High-energy periarticular fractures, open injuries, and established non-unions or malunions require anatomical reduction and stable fixation. Prosthetic dislocation and periprosthetic fractures are managed on a tertiary trauma pathway.",
    symptoms: [
      "Acute deformity, inability to bear weight, or an open wound after trauma",
      "Persistent pain or angulation after previous fracture treatment",
      "Sudden pain and inability to walk around a hip or knee replacement",
    ],
    evaluation: [
      "Trauma series radiographs and CT for intra-articular fragments",
      "Vascular and soft-tissue assessment in high-energy injuries",
      "Planning for MIPO, locking plates, or revision stems as indicated",
    ],
    treatments: [
      { href: "/treatments/trauma", label: "Trauma & Malunion Reconstruction" },
      { href: "/treatments/revision-surgery", label: "Revision if the implant is involved" },
      { href: "/for-physicians/urgent-escalation", label: "Urgent physician escalation" },
    ],
  },
];

export function getCondition(slug: string) {
  return conditions.find((item) => item.slug === slug);
}
