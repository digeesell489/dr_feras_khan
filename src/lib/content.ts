import {
  hipReplacementXray,
  kneeArthroscopy,
  partialKneeCompartments,
  psiCtPlanning,
  revisionKneeXray,
  roboticTheatre,
  traumaMalunionXray,
} from "@/assets/clinical-images";

export const stats = [
  { icon: "clinical_notes", value: "25+ Years", valueAr: "+25 عاماً", label: "In Trauma & Orthopaedics", labelAr: "في جراحة الحوادث والعظام" },
  { icon: "school", value: "Chairman", valueAr: "رئيس", label: "Middle East AO Recon", labelAr: "AO Recon الشرق الأوسط" },
  { icon: "workspace_premium", value: "UK Trained & Practiced", valueAr: "تدريب وممارسة في المملكة المتحدة", label: "MRCS, FRCS (Orth), CCT", labelAr: "MRCS, FRCS (Orth), CCT" },
  { icon: "verified", value: "SRC Accredited", valueAr: "اعتماد SRC", label: "Surgeon of Excellence, Joint Replacement 2023", labelAr: "جرّاح تميّز، استبدال المفاصل 2023" },
];

export const approaches = [
  {
    icon: "architecture",
    title: "Conventional Joint Replacement",
    titleAr: "استبدال المفصل التقليدي",
    body: "Proven mechanical alignment and long-term registry implant geometry tailored to patient anatomy.",
    bodyAr: "محاذاة ميكانيكية مثبتة وهندسة زرعات مدعومة بالسجلات بما يناسب تشريح المريض.",
    link: "Registry-Backed Foundation",
    linkAr: "أساس مدعوم بالسجلات",
  },
  {
    icon: "precision_manufacturing",
    title: "Robotic-Assisted Surgery",
    titleAr: "الجراحة بمساعدة الروبوت",
    body: "Sub-millimeter CT-based pre-planning and haptic navigation for soft-tissue balancing and precision cuts.",
    bodyAr: "تخطيط مسبق بالأشعة المقطعية وملاحة لمسية لتوازن الأنسجة الرخوة وقطوع دقيقة.",
    link: "Haptic Boundary Verification",
    linkAr: "تحقق الحدود اللمسية",
  },
  {
    icon: "view_in_ar",
    title: "Patient-Specific Implants",
    titleAr: "زرعات مخصصة للمريض",
    body: "Custom 3D-printed resection guides and bespoke implants adapted to unique joint deformities.",
    bodyAr: "أدلة قطع مطبوعة ثلاثياً وزرعات مخصصة لتشوهات المفصل الفريدة.",
    link: "Individualized Morphology",
    linkAr: "شكل تشريحي فردي",
  },
];

type ProcedureCard = {
  image: string;
  imageAlt?: string;
  imageAltAr?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  href: string;
  category: string;
  categoryAr: string;
  title: string;
  titleAr: string;
  body: string;
  bodyAr: string;
  body2?: string;
  body2Ar?: string;
};

export const specialties = {
  featured: {
    eyebrow: "FUNCTIONAL ALIGNMENT MATRIX",
    eyebrowAr: "مصفوفة المحاذاة الوظيفية",
    title: "Individualized Joint Line Restoration",
    titleAr: "استعادة خط المفصل وفق تشريح المريض",
    body: "By pairing high-resolution computed tomography modeling with live intra-operative soft-tissue assessment, surgical cuts align with the patient’s constitutional anatomy rather than arbitrary population averages.",
    bodyAr: "بجمع نمذجة الأشعة المقطعية عالية الدقة مع تقييم الأنسجة أثناء الجراحة، تتوافق القطوع مع تشريح المريض لا مع متوسطات عامة.",
    stats: [
      { value: "±0.5 mm", label: "Resection Accuracy", labelAr: "دقة القطع" },
      { value: "100%", label: "Global Accurate Ligament Balancing", labelAr: "موازنة أربطة دقيقة شاملة" },
      { value: "Enhanced", label: "Function & Range of Motion", labelAr: "الوظيفة ومدى الحركة" },
    ],
  },
  cards: [
    {
      image: "/images/implant-knee.webp",
      href: "/treatments/total-knee-replacement",
      category: "Arthroplasty",
      categoryAr: "استبدال المفصل",
      title: "Total Knee Replacement",
      titleAr: "استبدال الركبة الكامل",
      body: "Kinematic and patient-specific implants restoring constitutional limb biomechanics.",
      bodyAr: "زرعات بمحاذاة حركية ومخصصة للمريض تعيد ميكانيكا الطرف الطبيعية.",
    },
    {
      image: psiCtPlanning.src,
      imageAlt: psiCtPlanning.alt,
      imageAltAr: psiCtPlanning.altAr,
      imageWidth: psiCtPlanning.width,
      imageHeight: psiCtPlanning.height,
      imageClassName: "object-contain object-center",
      href: "/treatments/patient-specific-knee",
      category: "Personalised Implants",
      categoryAr: "زرعات مخصصة",
      title: "Patient-Specific Knee Replacement (PSI)",
      titleAr: "استبدال الركبة المخصص للمريض (PSI)",
      body: "CT-based pre-operative planning produces patient-specific instrumentation, so femoral and tibial cuts are mapped to the individual's own anatomy before the first incision is made.",
      bodyAr: "ينتج التخطيط قبل الجراحة بالأشعة المقطعية أدوات مخصصة للمريض، فتُحدَّد قطوع الفخذ والظنبوب وفق تشريح الفرد قبل الشق الأول.",
    },
    {
      image: hipReplacementXray.src,
      imageAlt: hipReplacementXray.alt,
      imageAltAr: hipReplacementXray.altAr,
      imageWidth: hipReplacementXray.width,
      imageHeight: hipReplacementXray.height,
      imageClassName: "object-contain object-center",
      href: "/treatments/hip-replacement",
      category: "Arthroplasty",
      categoryAr: "استبدال المفصل",
      title: "Hip Replacement",
      titleAr: "استبدال الورك",
      body: "Primary total hip arthroplasty using cementless and hybrid fixation, with leg-length and offset restored to the patient's own anatomy.",
      bodyAr: "استبدال أولي كامل للورك بتثبيت غير إسمنتي أو هجين، مع إعادة طول الساق والإزاحة إلى تشريح المريض.",
    },
    {
      image: partialKneeCompartments.src,
      imageAlt: partialKneeCompartments.alt,
      imageAltAr: partialKneeCompartments.altAr,
      imageWidth: partialKneeCompartments.width,
      imageHeight: partialKneeCompartments.height,
      imageClassName: "object-contain object-center",
      href: "/treatments/partial-knee",
      category: "Preservation",
      categoryAr: "الحفاظ على المفصل",
      title: "Partial Knee Replacement",
      titleAr: "استبدال الركبة الجزئي",
      body: "Preserves healthy compartments and native cruciate ligaments.",
      bodyAr: "يحافظ على الأجزاء السليمة والأربطة المتصالبة الأصلية.",
      body2: "Quicker recovery to function representing native joint.",
      body2Ar: "تعافٍ أسرع إلى وظيفة تمثل المفصل الطبيعي.",
    },
    {
      image: roboticTheatre.src,
      imageAlt: roboticTheatre.alt,
      imageAltAr: roboticTheatre.altAr,
      imageWidth: roboticTheatre.width,
      imageHeight: roboticTheatre.height,
      href: "/treatments/robotic-arthroplasty",
      category: "Robotics",
      categoryAr: "الروبوت",
      title: "Robotic Joint Replacement",
      titleAr: "استبدال المفصل بمساعدة الروبوت",
      body: "Optical tracking with stereotactic haptic envelope bone preservation.",
      bodyAr: "تتبع بصري وغلاف لمسي يحافظ على العظم.",
    },
    {
      image: revisionKneeXray.src,
      imageAlt: revisionKneeXray.alt,
      imageAltAr: revisionKneeXray.altAr,
      imageWidth: revisionKneeXray.width,
      imageHeight: revisionKneeXray.height,
      imageClassName: "object-contain object-center",
      href: "/treatments/revision-surgery",
      category: "Complex Revision",
      categoryAr: "مراجعة معقدة",
      title: "Revision Hip & Knee Surgery",
      titleAr: "جراحة مراجعة الورك والركبة",
      body: "Trabecular metal augments, modular stems, and bone loss reconstruction.",
      bodyAr: "تعزيزات معدنية إسفنجية وسيقان معيارية وإعادة بناء فقدان العظم.",
    },
    {
      image: kneeArthroscopy.src,
      imageAlt: kneeArthroscopy.alt,
      imageAltAr: kneeArthroscopy.altAr,
      imageWidth: kneeArthroscopy.width,
      imageHeight: kneeArthroscopy.height,
      imageClassName: "object-cover object-top",
      href: "/treatments/arthroscopy",
      category: "Knee Sports Injuries",
      categoryAr: "إصابات الركبة الرياضية",
      title: "Knee Arthroscopy",
      titleAr: "منظار الركبة",
      body: "Keyhole assessment and meniscal or cartilage preservation of the knee.",
      bodyAr: "تقييم بثقب المفتاح والحفاظ على الهلالة أو غضروف الركبة.",
    },
    {
      image: "/images/knee-mechanics.webp",
      href: "/treatments/ligament-reconstruction",
      category: "Knee Sports Injuries",
      categoryAr: "إصابات الركبة الرياضية",
      title: "Knee Ligament Reconstruction",
      titleAr: "إعادة بناء أربطة الركبة",
      body: "Anatomical ACL and associated ligament reconstruction after knee sports injury.",
      bodyAr: "إعادة بناء تشريحي للرباط المتصالب الأمامي والأربطة المرتبطة بعد إصابة الركبة الرياضية.",
    },
    {
      image: traumaMalunionXray.src,
      imageAlt: traumaMalunionXray.alt,
      imageAltAr: traumaMalunionXray.altAr,
      imageWidth: traumaMalunionXray.width,
      imageHeight: traumaMalunionXray.height,
      imageClassName: "object-contain object-center",
      href: "/treatments/trauma",
      category: "Trauma",
      categoryAr: "الرضوض",
      title: "Trauma & Malunion",
      titleAr: "الرضوض وعدم الالتئام",
      body: "Minimally invasive osteosynthesis for intra-articular and periprosthetic fractures.",
      bodyAr: "تثبيت عظمي طفيف التوغل لكسور داخل المفصل وحول الزرعة.",
    },
  ] satisfies ProcedureCard[],
};

export const clinicHours = [
  { day: "Tuesday", dayAr: "الثلاثاء", time: "8:00 AM – 5:00 PM", muted: false },
  { day: "Wednesday", dayAr: "الأربعاء", time: "11:00 AM – 8:00 PM", muted: false },
  { day: "Thursday", dayAr: "الخميس", time: "8:00 AM – 5:00 PM", muted: false },
  { day: "Friday", dayAr: "الجمعة", time: "8:00 AM – 5:00 PM", muted: false },
  {
    day: "Saturday – Monday",
    dayAr: "السبت – الاثنين",
    time: "Closed (Surgical Theater & Trauma Call)",
    timeAr: "مغلق (غرف العمليات واستدعاء الرضوض)",
    muted: true,
  },
];

export const faqs = [
  {
    q: "How do I know if I need a total or partial knee replacement?",
    qAr: "كيف أعرف إن كنت أحتاج استبدال ركبة كاملاً أم جزئياً؟",
    a: "The choice depends on the anatomical pattern of articular cartilage loss and ligament integrity. When degenerative changes are confined strictly to a single compartment (usually the medial) and cruciate ligaments remain intact, a partial (unicompartmental) knee replacement preserves unaffected biological cartilage and natural joint kinematics. Total knee replacement is indicated when multiple compartments are involved or significant coronal deformity exists.",
    aAr: "يعتمد الاختيار على نمط تآكل الغضروف وسلامة الأربطة. إذا اقتصر التآكل على حيز واحد (غالباً الإنسي) وبقيت الأربطة المتصالبة سليمة، يحافظ الاستبدال الجزئي على الغضروف السليم والحركة الطبيعية. أما الاستبدال الكامل فيُفضَّل عند إصابة أكثر من حيز أو وجود تشوه إكليلي واضح.",
  },
  {
    q: "What are the clinical advantages of robotic-assisted joint surgery?",
    qAr: "ما المزايا السريرية لجراحة المفصل بمساعدة الروبوت؟",
    a: "Robotic-assisted systems utilize pre-operative 3D computed tomography (CT) modeling to formulate a patient-specific surgical plan. Intra-operatively, optical navigation sensors and haptic robotic boundary controls guide bone resections with sub-millimeter precision, safeguarding adjacent neurovascular and ligamentous soft tissues while optimizing dynamic joint balance.",
    aAr: "تعتمد الأنظمة الروبوتية على نمذجة ثلاثية الأبعاد بالأشعة المقطعية لوضع خطة خاصة بالمريض. وأثناء الجراحة توجّه الحساسات البصرية والحدود اللمسية قطوع العظم بدقة دون المليمتر مع حماية الأنسجة المجاورة وتحسين توازن المفصل.",
  },
  {
    q: "When is a revision hip or knee surgery indicated?",
    qAr: "متى تُستطب جراحة مراجعة الورك أو الركبة؟",
    a: "Revision joint surgery is indicated when an existing prosthetic implant fails due to mechanical aseptic loosening, component wear, periprosthetic infection, recurrent dislocation or instability, osteolysis (bone loss), or periprosthetic bone fractures adjacent to the prosthesis.",
    aAr: "تُستطب المراجعة عند فشل الزرعة بسبب الارتخاء العقيم، أو التآكل، أو العدوى حول المفصل، أو الخلع المتكرر، أو انحلال العظم، أو كسر حول الزرعة.",
  },
  {
    q: "What should I expect during early post-operative recovery?",
    qAr: "ماذا أتوقع في التعافي المبكر بعد الجراحة؟",
    a: "Under modern enhanced recovery pathways, early supported mobilization typically begins on the day of surgery or within 24 hours under dedicated inpatient physiotherapy guidance. Structured post-discharge rehabilitation emphasizes active range-of-motion restoration, quadriceps/gluteal activation, and gradual transition from walking aids over the initial weeks.",
    aAr: "وفق مسارات التعافي المعززة، تبدأ الحركة المدعومة عادة يوم الجراحة أو خلال 24 ساعة تحت إشراف العلاج الطبيعي. ويركز التأهيل بعد الخروج على استعادة المدى الحركي وتنشيط العضلات والانتقال التدريجي عن وسائل المساعدة.",
  },
  {
    q: "What imaging or documents should I bring to my initial consultation?",
    qAr: "ما الصور أو المستندات التي أحضرها للاستشارة الأولى؟",
    a: "Patients are advised to bring relevant diagnostic imaging (radiographs, MRI, or CT scans on disc or portal access), prior operative records or implant specifications (in cases of previous surgery), and an updated list of current medications and medical history.",
    aAr: "يُنصح بإحضار الصور التشخيصية (أشعة أو رنين أو مقطعي)، وسجلات العمليات أو مواصفات الزرعة إن وُجدت، وقائمة محدّثة بالأدوية والتاريخ المرضي.",
  },
  {
    q: "How are surgery bookings and insurance pre-approvals coordinated at Healthpoint?",
    qAr: "كيف تُنسَّق حجوزات الجراحة والموافقات التأمينية في هيلث بوينت؟",
    a: "The Healthpoint administrative and insurance concierge team liaises directly with major local and international medical insurers to process clinical pre-authorizations, verify procedural coverage, and schedule dedicated surgical theatre slots and inpatient arrangements.",
    aAr: "يتواصل فريق المواعيد والتأمين في هيلث بوينت مباشرة مع شركات التأمين المحلية والدولية لإتمام الموافقات المسبقة والتحقق من التغطية وجدولة غرف العمليات والترتيبات الإيوائية.",
  },
];
