export const stats = [
  { icon: "clinical_notes", value: "20+ Years", valueAr: "+20 عاماً", label: "In Trauma & Orthopaedics", labelAr: "في جراحة الحوادث والعظام" },
  { icon: "school", value: "Chairman", valueAr: "رئيس", label: "AO Recon MENA", labelAr: "AO Recon الشرق الأوسط وشمال أفريقيا" },
  { icon: "workspace_premium", value: "FRCS (Orth)", valueAr: "FRCS (Orth)", label: "UK-Trained Fellowship", labelAr: "زمالة بريطانية معتمدة" },
  { icon: "verified", value: "SRC Accredited", valueAr: "اعتماد SRC", label: "Surgeon of Excellence, 2023", labelAr: "جرّاح تميّز، 2023" },
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

export const specialties = {
  featured: {
    eyebrow: "Kinematic Alignment Matrix",
    eyebrowAr: "مصفوفة المحاذاة الحركية",
    title: "Individualized Joint Line Restoration",
    titleAr: "استعادة خط المفصل وفق تشريح المريض",
    body: "By pairing high-resolution computed tomography modeling with live intra-operative soft-tissue assessment, surgical cuts align with the patient’s constitutional anatomy rather than arbitrary population averages.",
    bodyAr: "بجمع نمذجة الأشعة المقطعية عالية الدقة مع تقييم الأنسجة أثناء الجراحة، تتوافق القطوع مع تشريح المريض لا مع متوسطات عامة.",
    stats: [
      { value: "±0.5 mm", label: "Resection Accuracy", labelAr: "دقة القطع" },
      { value: "100%", label: "Cruciate & Collateral Balance", labelAr: "توازن الأربطة المتصالبة والجانبية" },
    ],
  },
  cards: [
    {
      image: "/images/implant-hip.png",
      category: "Arthroplasty",
      categoryAr: "استبدال المفصل",
      title: "Primary Hip Replacement",
      titleAr: "استبدال الورك الأولي",
      body: "Direct anterior and posterior approaches with high-crosslink ceramic bearings.",
      bodyAr: "نهج أمامي مباشر وخلفي مع سطوح سيراميك عالية الترابط.",
    },
    {
      image: "/images/implant-knee.png",
      category: "Arthroplasty",
      categoryAr: "استبدال المفصل",
      title: "Total Knee Replacement",
      titleAr: "استبدال الركبة الكامل",
      body: "Kinematic alignment implants restoring constitutional limb biomechanics.",
      bodyAr: "زرعات بمحاذاة حركية تعيد ميكانيكا الطرف الطبيعية.",
    },
    {
      image: "/images/implant-partial.png",
      category: "Preservation",
      categoryAr: "الحفاظ على المفصل",
      title: "Partial (Unicompartmental) Knee",
      titleAr: "استبدال الركبة الجزئي",
      body: "Preserves healthy compartments and native cruciate ligaments.",
      bodyAr: "يحافظ على الأجزاء السليمة والأربطة المتصالبة الأصلية.",
    },
    {
      image: "/images/implant-robotic.png",
      category: "Robotics",
      categoryAr: "الروبوت",
      title: "Robotic-Assisted Surgery",
      titleAr: "الجراحة بمساعدة الروبوت",
      body: "Optical tracking with stereotactic haptic envelope bone preservation.",
      bodyAr: "تتبع بصري وغلاف لمسي يحافظ على العظم.",
    },
    {
      image: "/images/implant-revision.png",
      category: "Complex Revision",
      categoryAr: "مراجعة معقدة",
      title: "Revision Hip & Knee Surgery",
      titleAr: "جراحة مراجعة الورك والركبة",
      body: "Trabecular metal augments, modular stems, and bone loss reconstruction.",
      bodyAr: "تعزيزات معدنية إسفنجية وسيقان معيارية وإعادة بناء فقدان العظم.",
    },
    {
      image: "/images/implant-trauma.png",
      category: "Trauma",
      categoryAr: "الرضوض",
      title: "Complex Trauma & Fractures",
      titleAr: "الرضوض والكسور المعقدة",
      body: "Minimally invasive osteosynthesis for intra-articular and periprosthetic fractures.",
      bodyAr: "تثبيت عظمي طفيف التوغل لكسور داخل المفصل وحول الزرعة.",
    },
  ],
};

export const caseStudies = [
  {
    image: "/images/knee-mechanics.png",
    code: "CASE #R-2024-KNEE",
    tags: ["Primary Arthroplasty", "Kinematic Alignment", "Haptic Navigation"],
    tagsAr: ["استبدال أولي", "محاذاة حركية", "ملاحة لمسية"],
    title: "Robotic Total Knee Replacement",
    titleAr: "استبدال ركبة كامل بمساعدة الروبوت",
    body: "Sub-millimeter resections ensuring balanced collateral ligament tension and physiological tracking.",
    bodyAr: "قطوع دون المليمتر تضمن توازن الأربطة الجانبية وتتبعاً فسيولوجياً.",
  },
  {
    image: "/images/implant-revision.png",
    code: "CASE #REV-2023-HIP",
    tags: ["Revision Arthroplasty", "Trabecular Metal Augments", "Posterior Approach"],
    tagsAr: ["مراجعة المفصل", "تعزيزات معدنية إسفنجية", "نهج خلفي"],
    title: "Complex Revision Hip Arthroplasty",
    titleAr: "مراجعة معقدة لاستبدال الورك",
    body: "Reconstruction of major acetabular bone loss utilizing porous trabecular titanium cones and modular stems.",
    bodyAr: "إعادة بناء فقدان عظمي حقي كبير باستخدام مخاريط تيتانيوم إسفنجية وسيقان معيارية.",
  },
  {
    image: "/images/implant-trauma.png",
    code: "CASE #TR-2024-FEMUR",
    tags: ["Trauma & Malunion", "Locking Plate Fixation", "Minimally Invasive MIPO"],
    tagsAr: ["رضوض وعدم الالتئام", "تثبيت بصفيحة قافلة", "تثبيت طفيف التوغل"],
    title: "Periprosthetic Fracture Reconstruction",
    titleAr: "إعادة بناء كسر حول الزرعة",
    body: "Biological osteosynthesis for complex peri-implant femoral fracture preserving periosteal blood supply.",
    bodyAr: "تثبيت بيولوجي لكسر فخذي معقد حول الزرعة مع الحفاظ على التروية السمحاقية.",
  },
];

export const educationVideos = [
  {
    id: "robotic",
    image: "/images/education-robotic.png",
    duration: "4:15",
    category: "Featured Clinical Guide",
    categoryAr: "دليل سريري مميز",
    title: "Robotic Knee Replacement Explained",
    titleAr: "شرح استبدال الركبة الروبوتي",
    body: "An in-depth explanation of how pre-operative CT modeling correlates with intra-operative haptic feedback to customize surgical cuts to constitutional anatomy.",
    bodyAr: "شرح لكيفية ارتباط نمذجة الأشعة المقطعية قبل الجراحة بالتغذية اللمسية أثناء العملية لتخصيص القطوع وفق تشريح المريض.",
  },
  {
    id: "psi",
    image: "/images/implant-partial.png",
    duration: "3:40",
    category: "Planning",
    categoryAr: "التخطيط",
    title: "Patient-Specific Surgery",
    titleAr: "جراحة مخصصة للمريض",
    body: "Custom 3D-printed resection guides and bespoke planning protocols.",
    bodyAr: "أدلة قطع مطبوعة ثلاثياً وبروتوكولات تخطيط مخصصة.",
  },
  {
    id: "knee-recovery",
    image: "/images/implant-knee.png",
    duration: "5:10",
    category: "Recovery",
    categoryAr: "التعافي",
    title: "Recovery After Knee Replacement",
    titleAr: "التعافي بعد استبدال الركبة",
    body: "Day-by-day mobilization protocols, swelling management, and physical therapy milestones.",
    bodyAr: "بروتوكولات الحركة يوماً بيوم، وإدارة التورم، ومعالم العلاج الطبيعي.",
  },
  {
    id: "hip-recovery",
    image: "/images/implant-hip.png",
    duration: "4:55",
    category: "Recovery",
    categoryAr: "التعافي",
    title: "Recovery After Hip Replacement",
    titleAr: "التعافي بعد استبدال الورك",
    body: "Early weight-bearing guidelines, precautions, and functional rehabilitation progress.",
    bodyAr: "إرشادات التحميل المبكر، والاحتياطات، وتقدم إعادة التأهيل الوظيفي.",
  },
];

export const educationGallery = [
  { image: "/images/education-robotic.png", alt: "Surgical technology insight", altAr: "تقنية جراحية" },
  { image: "/images/education-ct.png", alt: "Biomechanical joint anatomy education", altAr: "تشريح المفصل" },
  { image: "/images/education-or.png", alt: "Healthpoint surgical theatre", altAr: "غرفة عمليات هيلث بوينت" },
  { image: "/images/education-lounge.png", alt: "Patient recovery environment", altAr: "بيئة تعافي المريض" },
];

export const clinicHours = [
  { day: "Tuesday", dayAr: "الثلاثاء", time: "8:00 AM – 5:00 PM", muted: false },
  { day: "Wednesday", dayAr: "الأربعاء", time: "11:00 AM – 7:00 PM", muted: false },
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
