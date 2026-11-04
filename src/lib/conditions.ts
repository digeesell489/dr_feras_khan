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
  /** Optional document title override for generateMetadata. */
  seoTitle?: string;
  /** Optional meta description override for generateMetadata. */
  seoDescription?: string;
  /** Optional keyworded H2 override for the symptoms card. */
  h2Symptoms?: string;
  /** Optional keyworded H2 override for the evaluation card. */
  h2Evaluation?: string;
  symptoms: string[];
  evaluation: string[];
  treatments: { href: string; label: string }[];
};

export const conditions: Condition[] = [
  {
    slug: "hip-osteoarthritis",
    region: "Hip Joint",
    presentation: "Osteoarthritis / Joint degeneration",
    title: "Hip Osteoarthritis in Abu Dhabi",
    short: "Hip Osteoarthritis",
    shortAr: "خشونة الورك",
    image: hipReplacementXray.src,
    imageFit: "contain",
    summary:
      "Hip osteoarthritis in Abu Dhabi presents as progressive cartilage wear of the femoral head and acetabulum. Patients typically describe groin stiffness, night pain, and reduced walking distance before joint-preserving care or reconstruction is planned.",
    seoTitle: "Hip Osteoarthritis in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Hip osteoarthritis care in Abu Dhabi — from preservation to replacement. Book a consultation.",
    h2Symptoms: "Hip Osteoarthritis Symptoms in Abu Dhabi",
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
      { href: "/treatments/hip-replacement", label: "Hip Replacement" },
      { href: "/treatments/robotic-arthroplasty", label: "Robotic Joint Replacement" },
      { href: "/treatments/revision-surgery", label: "Revision Hip & Knee Surgery" },
      { href: "/patient-care", label: "Care & recovery pathway" },
    ],
  },
  {
    slug: "knee-osteoarthritis",
    region: "Knee Joint",
    presentation: "Osteoarthritis / Joint degeneration",
    title: "Knee Osteoarthritis in Abu Dhabi",
    short: "Knee Osteoarthritis",
    shortAr: "خشونة الركبة",
    image: "/images/implant-knee.webp",
    summary:
      "Knee osteoarthritis in Abu Dhabi may affect the medial, lateral, or patellofemoral surfaces. Care ranges from activity modification and injections to partial or total knee replacement, with robotic assistance when precise alignment is required.",
    seoTitle: "Knee Osteoarthritis in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Knee osteoarthritis treatment in Abu Dhabi — partial or total options. Book a consultation.",
    h2Evaluation: "Knee Osteoarthritis Evaluation in Abu Dhabi",
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
      { href: "/treatments/total-knee-replacement", label: "Kinematic Total Knee" },
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
    image: "/images/hip-anatomy.webp",
    summary:
      "Avascular necrosis (osteonecrosis) interrupts blood supply to the femoral head. Collapse of the head leads to secondary arthritis. Early stages may be observed or decompressed; established collapse is typically treated with total hip reconstruction planned to the patient's anatomy.",
    seoTitle: "Avascular Necrosis Treatment in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Avascular necrosis femoral head care in Abu Dhabi with Dr. Feras Ya'ish. Request an assessment.",
    h2Symptoms: "Avascular Necrosis of the Femoral Head Symptoms in Abu Dhabi",
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
      { href: "/treatments/hip-replacement", label: "Hip Replacement" },
      { href: "/treatments/robotic-arthroplasty", label: "Robotic Joint Replacement" },
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
    image: "/images/hip-anatomy.webp",
    summary:
      "Acetabular dysplasia and femoroacetabular impingement alter load across the hip from a young age. Some patients present with groin stiffness and early arthritis. Reconstruction must restore coverage and offset; replacement, when required, is planned to the patient's anatomy rather than a generic cup position.",
    seoTitle: "Hip Dysplasia Treatment in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Hip dysplasia care in Abu Dhabi for coverage and early arthritis. Book with Dr. Feras Ya'ish.",
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
      { href: "/treatments/hip-replacement", label: "Hip Replacement" },
      { href: "/treatments/revision-surgery", label: "Revision Hip & Knee Surgery" },
      { href: "/conditions", label: "Conditions explorer" },
    ],
  },
  {
    slug: "failed-joint-replacement",
    region: "Trauma & Other",
    presentation: "Failed previous surgery",
    title: "Failed or Painful Joint Replacement in Abu Dhabi",
    short: "Failed Joint Replacement",
    shortAr: "فشل المفصل الصناعي",
    image: revisionKneeXray.src,
    imageFit: "contain",
    summary:
      "Failed joint replacement care in Abu Dhabi addresses pain after hip or knee replacement from loosening, osteolysis, instability, fracture, or periprosthetic joint infection, using metal-reduction CT, aspiration protocols, and modular reconstruction when indicated.",
    seoTitle: "Failed Joint Replacement in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Failed joint replacement assessment in Abu Dhabi for painful implants. Request a revision review.",
    h2Evaluation: "Failed Joint Replacement Evaluation in Abu Dhabi",
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
      { href: "/treatments/trauma", label: "Periprosthetic fracture care" },
    ],
  },
  {
    slug: "sports-knee-injury",
    region: "Knee Joint",
    presentation: "Sports injury / instability",
    title: "Sports Knee Injury & Instability in Abu Dhabi",
    short: "Knee Sports Injuries",
    shortAr: "إصابات الركبة الرياضية",
    image: "/images/knee-mechanics.webp",
    summary:
      "Sports knee injury treatment in Abu Dhabi covers ACL rupture, meniscal tears, ramp lesions, and multi-ligament injury with anatomical arthroscopic reconstruction and repair-first meniscal surgery when appropriate.",
    seoTitle: "Sports Knee Injuries in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Sports knee injury care in Abu Dhabi for ACL and meniscus tears. Book with Dr. Feras Ya'ish.",
    h2Symptoms: "Sports Knee Injury Symptoms in Abu Dhabi",
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
      { href: "/treatments/patellofemoral-instability", label: "Patellofemoral Instability Surgery" },
      { href: "/patient-care", label: "Rehabilitation milestones" },
      { href: "/treatments/partial-knee", label: "Partial knee if arthritis coexists" },
    ],
  },
  {
    slug: "fracture-malunion",
    region: "Trauma & Other",
    presentation: "Fracture / malunion",
    title: "Fractures, Non-union & Malunion in Abu Dhabi",
    short: "Fracture & Malunion",
    shortAr: "الكسور وعدم الالتئام",
    image: traumaMalunionXray.src,
    imageFit: "contain",
    summary:
      "Fracture malunion and non-union care in Abu Dhabi addresses high-energy periarticular fractures, open injuries, and established healing failure with anatomical reduction and stable fixation on a tertiary trauma pathway.",
    seoTitle: "Fracture Malunion Care in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "Fracture malunion and non-union care in Abu Dhabi. Request trauma reconstruction advice.",
    h2Evaluation: "Fracture Malunion Evaluation in Abu Dhabi",
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
    ],
  },
];

export function getCondition(slug: string) {
  return conditions.find((item) => item.slug === slug);
}
