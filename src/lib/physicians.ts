export type PhysicianPage = {
  slug: string;
  short: string;
  shortAr: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
};

export const physicianPages: PhysicianPage[] = [
  {
    slug: "urgent-escalation",
    short: "Urgent Escalation",
    shortAr: "التصعيد العاجل",
    title: "Urgent Trauma Escalation Protocol",
    eyebrow: "Standardized transfer pathways",
    summary:
      "Streamlined inter-hospital transfer from public, private, and military facilities across Abu Dhabi, Dubai, and the Northern Emirates — for periprosthetic fracture, vascular compromise, and acute joint sepsis.",
    image: "/images/implant-trauma.webp",
  },
  {
    slug: "ao-recon-faculty",
    short: "AO Recon Faculty",
    shortAr: "هيئة AO Recon",
    title: "AO Recon Faculty & Clinical Fellowship",
    eyebrow: "Academic rigour & surgical education",
    summary:
      "Accredited CME, cadaveric arthroplasty courses, and interactive tertiary case panels convened by Dr. Feras Ya'ish across the Middle East, plus a visiting surgeon observer programme.",
    image: "/images/practice/lecture-ao-recon.webp",
  },
  {
    slug: "case-submission",
    short: "Case Submission",
    shortAr: "إرسال الحالة",
    title: "Secure Physician Case Submission",
    eyebrow: "Direct transmission",
    summary:
      "Submit diagnostic data, pathology workup, and imaging links for evaluation by Dr. Ya'ish. Records are handled under UAE Federal Law No. 2 of 2019 and DoH Malaffi standards.",
    image: "/images/implant-revision.webp",
  },
];

export function getPhysicianPage(slug: string) {
  return physicianPages.find((item) => item.slug === slug);
}

export const referralCriteria = [
  {
    title: "Periprosthetic Joint Infection (PJI)",
    titleAr: "عدوى المفصل حول الزرعة",
    body: "Evidence-based surgical intervention for acute, chronic, and recalcitrant prosthetic infections of the hip and knee, co-managed under antimicrobial stewardship.",
    bodyAr: "تدخل جراحي مبني على الأدلة لعدوى الزرعة الحادة والمزمنة والمعندة في الورك والركبة، بالتعاون مع برنامج المضادات الحيوية.",
    points: [
      "DAIR candidate: acute onset or early postoperative infection with well-fixed components.",
      "One-stage exchange: susceptible low-virulence pathogen and intact soft-tissue envelope.",
      "Two-stage protocol: articulating antibiotic spacer, targeted therapy, then replantation.",
    ],
    pointsAr: [
      "مرشح DAIR: عدوى حادة أو مبكرة بعد العملية مع مكوّنات ثابتة.",
      "تبديل بمرحلة واحدة: ممرض منخفض الضراوة وأنسجة رخوة سليمة.",
      "بروتوكول مرحلتين: فاصل مضاد حيوي متحرك ثم علاج موجّه ثم إعادة الزرع.",
    ],
  },
  {
    title: "Aseptic Loosening & Massive Osteolysis",
    titleAr: "ارتخاء عقيم وانحلال عظمي واسع",
    body: "End-stage mechanical failure requiring advanced biological fixation, metaphyseal sleeves, and customized 3D-printed trabecular titanium restoration.",
    bodyAr: "فشل ميكانيكي نهائي يتطلب تثبيتاً بيولوجياً متقدماً وأكماماً كردوسية وترميماً تيتانيومياً مطبوعاً ثلاثياً.",
    points: [
      "Paprosky Type III defects: custom acetabular reconstruction and fluted modular stems.",
      "AORI Type 2/3 bone loss: metaphyseal cones, modular augments, and structural allograft.",
      "Highly porous trabecular metal scaffolds in osteopenic host bone.",
    ],
    pointsAr: [
      "عيوب Paprosky من النوع الثالث: إعادة بناء حُق مخصص وسيقان معيارية محززة.",
      "فقدان عظم AORI 2/3: مخاريط كردوسية ودعائم معيارية وطعم عظمي بنيوي.",
      "سقالات معدنية تربيقية عالية المسامية في عظم ضعيف الكثافة.",
    ],
  },
  {
    title: "Recurrent Instability & Extensor Disruption",
    titleAr: "عدم استقرار متكرر وتمزق الباسط",
    body: "Salvage arthroplasty for chronic hip dislocation, impingement malalignment, collateral ligament insufficiency, and catastrophic patellar tendon rupture.",
    bodyAr: "استبدال إنقاذي لخلع الورك المزمن، وسوء المحاذاة الاصطدامي، وقصور الأربطة الجانبية، وتمزق وتر الرضفة الكارثي.",
    points: [
      "Constrained or dual-mobility reconstruction after failed primary bearings.",
      "Extensor mechanism allograft or mesh reconstruction where indicated.",
      "Correction of rotation, offset, and joint-line height on CT planning.",
    ],
    pointsAr: [
      "إعادة بناء مقيدة أو ثنائية الحركة بعد فشل السطوح الأولية.",
      "طعم أو شبكة لآلية الباسط عند الحاجة.",
      "تصحيح الدوران والإزاحة وارتفاع خط المفصل بالتخطيط المقطعي.",
    ],
  },
  {
    title: "Periprosthetic Fractures & Articular Trauma",
    titleAr: "كسور حول الزرعة ورضوض مفصلية",
    body: "Urgent surgical stabilization and revision fixation for fractures surrounding stable or loose implants and catastrophic articular trauma.",
    bodyAr: "تثبيت جراحي عاجل ومراجعة للكسور حول الزرعات الثابتة أو المرتخية والرضوض المفصلية الكارثية.",
    points: [
      "Vancouver B2/B3: modular bypass femoral revision with cable-plate fixation.",
      "Distal femoral periprosthetic: locked plating with or without retrograde nailing.",
      "Elderly acetabular fracture: acute THA with cup-cage osteosynthesis when indicated.",
    ],
    pointsAr: [
      "فانكوفر B2/B3: مراجعة فخذية معيارية مع تثبيت صفيحة وكابلات.",
      "كسر بعيد حول زرعة الركبة: صفائح قافلة مع أو بدون مسمار راجع.",
      "كسر حُق لدى كبار السن: استبدال ورك حاد مع قفص عند الحاجة.",
    ],
  },
];

export const escalationSteps = [
  {
    title: "Immediate Telephonic Triage",
    titleAr: "فرز هاتفي فوري",
    tag: "Available 24/7",
    tagAr: "متاح 24/7",
    body: "Direct phone triage via Healthpoint Transfer Coordinator at 800 77. For acute periprosthetic fractures, vascular compromise, or joint sepsis, the on-call consultant engages within 15 minutes.",
    bodyAr:
      "فرز هاتفي مباشر عبر منسق التحويل في هيلث بوينت على 800 77. للكسور الحادة حول الزرعة أو التهديد الوعائي أو إنتان المفصل يتدخل الاستشاري المناوب خلال 15 دقيقة.",
  },
  {
    title: "Secure DICOM & PACS Gateway",
    titleAr: "بوابة DICOM و PACS الآمنة",
    tag: "Cloud encryption",
    tagAr: "تشفير سحابي",
    body: "Upload CT angiograms, calibrated EOS alignment films, MRI metal-reduction sequences, and sequential radiographs through encrypted PACS.",
    bodyAr: "ارفع تصوير الأوعية المقطعي وأفلام المحاذاة المعيارية وتسلسلات الرنين بتقليل المعدن والأشعة المتسلسلة عبر PACS مشفّر.",
  },
  {
    title: "Pre-Transfer Medical Optimization",
    titleAr: "التهيئة الطبية قبل التحويل",
    tag: "MDT clearance",
    tagAr: "موافقة الفريق المتعدد",
    body: "Joint aspiration analysis (synovial WBC, % PMN, alpha-defensin), systemic optimization, and anticoagulation bridge protocol prior to inter-facility transfer.",
    bodyAr: "تحليل بزل المفصل (كريات بيض زليلي، نسبة PMN، ألفا ديفينسين)، وتهيئة جهازية، وبروتوكول جسر مضادات التخثر قبل التحويل.",
  },
  {
    title: "Direct Theatre / Inpatient Bed Access",
    titleAr: "دخول مباشر لغرفة العمليات أو السرير",
    tag: "Express admission",
    tagAr: "قبول سريع",
    body: "Patients bypass emergency holding and admit directly to the Orthopaedic Surgical Inpatient Wing or laminar-flow theatres when indicated.",
    bodyAr: "يتجاوز المرضى انتظار الطوارئ ويُقبلون مباشرة في جناح جراحة العظام أو غرف التدفق الصفحي عند الحاجة.",
  },
];

export const workupChecklist = [
  {
    title: "Orthogonal radiographs",
    titleAr: "أشعة متعامدة",
    body: "True AP pelvis (low beam centered on symphysis), shoot-through lateral, calibrated magnification marker.",
    bodyAr: "حوض أمامي خلفي حقيقي، جانبي نافذ، وعلامة تكبير معيّرة.",
  },
  {
    title: "Weight-bearing alignment",
    titleAr: "محاذاة بتحمل الوزن",
    body: "Bilateral long-leg telemetric views (hip-to-ankle mechanical axis).",
    bodyAr: "صور الطرف الطويل الثنائية (المحور الميكانيكي من الورك إلى الكاحل).",
  },
  {
    title: "Metal-suppression CT",
    titleAr: "مقطعي بتقليل المعدن",
    body: "Sub-millimeter volumetric CT with MARS for Paprosky / AORI grading.",
    bodyAr: "مقطعي حجمي دون المليمتر بتقنية MARS لتصنيف Paprosky / AORI.",
  },
  {
    title: "Synovial biomarkers",
    titleAr: "علامات زليلية",
    body: "Aspiration: cell count, % PMN, CRP and ESR as clinically indicated.",
    bodyAr: "البزل: تعداد الخلايا ونسبة PMN والبروتين التفاعلي وسرعة التثفل حسب الحاجة.",
  },
];

export const facultySessions = [
  {
    tag: "Cadaveric lab · Dubai",
    tagAr: "مختبر تشريح · دبي",
    credit: "14 CME hrs",
    creditAr: "14 ساعة تعليم طبي",
    title: "AO Recon Masterclass: Complex Revision Total Knee",
    titleAr: "دورة AO Recon المتقدمة: مراجعة الركبة المعقدة",
    body: "Cadaver dissection covering bone defect augmentation with titanium metaphyseal cones, line-to-line stem fixation, and rotating hinge balance.",
    bodyAr: "تشريح يغطي دعم عيوب العظم بمخاريط تيتانيوم كردوسية، وتثبيت الساق، وموازنة المفصل الدوار.",
    meta: ["Regional programme dates via the referral desk", "Chairs: Dr. Feras Ya'ish & international faculty"],
    metaAr: ["مواعيد البرنامج الإقليمي عبر مكتب الإحالة", "الرئاسة: الدكتور فراس يعيش وهيئة دولية"],
  },
  {
    tag: "Clinical webinar",
    tagAr: "ندوة سريرية",
    credit: "3 CME hrs",
    creditAr: "3 ساعات تعليم طبي",
    title: "Managing Periprosthetic Fractures Around Stable Stems",
    titleAr: "تدبير الكسور حول السيقان الثابتة",
    body: "Interactive round-table examining Vancouver B1 vs B2 differentiation, cable plate constructs, and submuscular bridge techniques.",
    bodyAr: "طاولة مستديرة تفرّق بين فانكوفر B1 وB2 وتقنيات الصفائح والكابلات والجسر تحت العضلي.",
    meta: ["Monthly series for trainees and specialists", "Audience: orthopaedic trainees & consultants"],
    metaAr: ["سلسلة شهرية للمتدربين والأخصائيين", "الجمهور: متدربي واستشاريي العظام"],
  },
  {
    tag: "Hospital fellowship",
    tagAr: "زمالة مستشفى",
    credit: "Observer credit",
    creditAr: "ساعات مراقبة",
    title: "Visiting Surgeon Observer Programme",
    titleAr: "برنامج مراقبة الجرّاح الزائر في هيلث بوينت",
    body: "Direct operating theatre immersion in robotic and patient-specific reconstruction, complex revision cases, and trauma.",
    bodyAr: "حضور مباشر في غرفة العمليات لاستبدال الورك الأمامي وإعادة بناء الركبة الروبوتية وحالات المراجعة المعقدة.",
    meta: ["Healthpoint Hospital, Zayed Sports City", "Duration: 2 to 4 weeks (rotating)"],
    metaAr: ["مستشفى هيلث بوينت، مدينة زايد الرياضية", "المدة: 2 إلى 4 أسابيع (بالتناوب)"],
  },
];
