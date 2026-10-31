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
    body: "Established techniques continue to offer excellent results for many patients. Conventional joint replacement replaces worn joint surfaces with well-proven implants. Implant selection and alignment are adapted to your anatomy, with long-term performance and your everyday activity kept firmly in mind.",
    bodyAr: "تواصل الأساليب الراسخة تحقيق نتائج ممتازة لكثير من المرضى. يستبدل استبدال المفصل التقليدي الأسطح المتآكلة بزرعات مثبتة. يُكيَّف اختيار الزرعة والمحاذاة مع تشريحك، مع مراعاة الأداء طويل الأمد ونشاطك اليومي.",
    link: "Proven Techniques",
    linkAr: "أساليب مثبتة",
  },
  {
    icon: "precision_manufacturing",
    title: "Robotic-Assisted Surgery",
    titleAr: "الجراحة بمساعدة الروبوت",
    body: "Robotic-assisted surgery begins with a CT scan and a detailed plan prepared before the operation. During surgery, navigation technology helps Dr. Ya'ish assess bone preparation, implant positioning and soft-tissue balance. The technology supports his clinical judgement and does not replace it.",
    bodyAr: "تبدأ الجراحة بمساعدة الروبوت بأشعة مقطعية وخطة مفصّلة قبل العملية. أثناء الجراحة تساعد تقنية الملاحة الدكتور يعيش على تقييم تحضير العظم وموضع الزرعة وتوازن الأنسجة الرخوة. تدعم التقنية حكمه السريري ولا تحل محله.",
    link: "Planning & Navigation",
    linkAr: "التخطيط والملاحة",
  },
  {
    icon: "view_in_ar",
    title: "Patient-Specific Implants",
    titleAr: "زرعات مخصصة للمريض",
    body: "Not every joint follows the standard pattern. Patient-specific implants and instruments are designed around your individual anatomy. Customised 3D-printed resection guides and selected implant solutions may help address complex deformities and anatomical variations.",
    bodyAr: "ليس كل مفصل يتبع النمط القياسي. تُصمَّم الزرعات والأدوات المخصصة حول تشريحك الفردي. قد تساعد أدلة القطع المطبوعة ثلاثياً وحلول الزرعات المختارة في معالجة التشوهات المعقدة والاختلافات التشريحية.",
    link: "Individual Anatomy",
    linkAr: "تشريح فردي",
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
    eyebrow: "JOINT ALIGNMENT",
    eyebrowAr: "محاذاة المفصل",
    title: "Individualized Joint Line Restoration",
    titleAr: "استعادة خط المفصل وفق تشريح المريض",
    body: "Each knee has its own natural alignment and movement. Rather than relying only on standard population measurements, individualized joint line restoration uses CT-based anatomical modelling and assessment during surgery. This allows the plan to respect your natural joint structure and soft-tissue balance.",
    bodyAr: "لكل ركبة محاذاة وحركة طبيعية خاصة بها. بدلاً من الاعتماد فقط على قياسات عامة، تستخدم استعادة خط المفصل الفردي نمذجة تشريحية بالأشعة المقطعية وتقييماً أثناء الجراحة، ليحترم التخطيط بنية مفصلك الطبيعية وتوازن الأنسجة الرخوة.",
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
      body: "When arthritis or another condition has significantly damaged the knee, total knee replacement can replace the worn joint surfaces and relieve pain. Implant selection and alignment planning take your anatomy and functional needs into account.",
      bodyAr: "عندما تلحق الخشونة أو حالة أخرى ضرراً كبيراً بالركبة، يمكن لاستبدال الركبة الكامل أن يستبدل الأسطح المتآكلة ويخفف الألم. يأخذ اختيار الزرعة وتخطيط المحاذاة تشريحك واحتياجاتك الوظيفية في الحسبان.",
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
      body: "Patient-specific knee replacement uses CT-based planning before surgery to create customised surgical guides. These guides map the femoral and tibial bone cuts to your individual anatomy.",
      bodyAr: "يستخدم استبدال الركبة المخصص تخطيطاً بالأشعة المقطعية قبل الجراحة لإنشاء أدلة جراحية مخصصة. ترسم هذه الأدلة قطوع عظم الفخذ والظنبوب وفق تشريحك الفردي.",
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
      body: "Hip replacement involves replacing the damaged parts of the hip joint with artificial components. Dr. Ya'ish performs primary total hip arthroplasty using cementless and hybrid fixation. He pays careful attention to leg length, joint offset and anatomical alignment, as these all influence how the hip feels and functions after surgery.",
      bodyAr: "يشمل استبدال الورك تبديل الأجزاء التالفة بمكوّنات صناعية. يجري الدكتور يعيش استبدالاً أولياً كاملاً بتثبيت غير إسمنتي أو هجين، مع اهتمام بطول الساق وإزاحة المفصل والمحاذاة التشريحية لما لذلك من أثر في الإحساس والوظيفة بعد الجراحة.",
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
      body: "A partial knee replacement may be appropriate when damage is limited to one compartment of the knee and the remaining joint is healthy. The aim is to preserve as much of your natural cartilage and ligaments as is clinically appropriate.",
      bodyAr: "قد يناسب الاستبدال الجزئي عندما يقتصر الضرر على حيز واحد وتكون بقية المفصل سليمة. الهدف الحفاظ على أكبر قدر مناسب سريرياً من الغضروف والأربطة الطبيعية.",
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
      body: "Robotic joint replacement combines surgical planning, optical tracking and navigation technology. It provides additional information on alignment and soft-tissue balance while the bone is prepared and the implant is positioned.",
      bodyAr: "يجمع استبدال المفصل الروبوتي بين التخطيط الجراحي والتتبع البصري وتقنية الملاحة. يوفّر معلومات إضافية عن المحاذاة وتوازن الأنسجة الرخوة أثناء تحضير العظم وموضع الزرعة.",
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
      body: "A previous joint replacement can occasionally develop problems over time. Revision hip and knee surgery is designed to address these. Depending on the condition, it may involve replacing components, managing bone loss and using specialised implants such as modular stems and trabecular metal augments.",
      bodyAr: "قد تظهر مشكلات مع الوقت في استبدال مفصل سابق. صُمِّمت مراجعة الورك والركبة لمعالجتها، وقد تشمل تبديل المكوّنات وتدبير فقدان العظم واستخدام زرعات متخصصة مثل السيقان المعيارية والتعزيزات المعدنية الإسفنجية.",
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
      body: "Knee arthroscopy is a minimally invasive procedure. A small camera and fine instruments allow the surgeon to examine the inside of the knee and treat selected meniscal, cartilage and other joint conditions.",
      bodyAr: "منظار الركبة إجراء طفيف التوغل. تتيح كاميرا صغيرة وأدوات دقيقة فحص داخل الركبة وعلاج حالات هلالية وغضروفية ومفصلية مختارة.",
    },
    {
      image: "/images/knee-mechanics.webp",
      href: "/treatments/ligament-reconstruction",
      category: "Knee Sports Injuries",
      categoryAr: "إصابات الركبة الرياضية",
      title: "Knee Ligament Reconstruction",
      titleAr: "إعادة بناء أربطة الركبة",
      body: "Following a significant ligament injury, often sustained during sport, knee ligament reconstruction can restore stability to the joint. Anatomical ACL and associated ligament techniques are selected according to the injury pattern and your functional requirements.",
      bodyAr: "بعد إصابة رباط مهمة، غالباً أثناء الرياضة، يمكن لإعادة بناء أربطة الركبة أن تستعيد ثبات المفصل. تُختار تقنيات الرباط المتصالب والأربطة المرتبطة وفق نمط الإصابة ومتطلباتك الوظيفية.",
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
      body: "Orthopaedic trauma care addresses fractures and injuries affecting bones and joints. For selected intra-articular and periprosthetic fractures, treatment may include minimally invasive fixation. Malunion management focuses on fractures that have healed in an abnormal position and require correction.",
      bodyAr: "تعالج رعاية رضوض العظام الكسور والإصابات التي تصيب العظام والمفاصل. قد يشمل علاج كسور داخل المفصل وحول الزرعة تثبيتاً طفيف التوغل. ويركز تدبير الالتئام المعيب على الكسور التي التأمت في وضع غير طبيعي وتحتاج تصحيحاً.",
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
    time: "Closed for outpatient consultations (surgical theatre and trauma call)",
    timeAr: "مغلق للاستشارات الخارجية (غرف العمليات واستدعاء الرضوض)",
    muted: true,
  },
];

export const faqs = [
  {
    q: "What does an orthopedic consultant in UAE do?",
    qAr: "ماذا يفعل استشاري العظام في الإمارات؟",
    a: "An orthopedic consultant in UAE is a senior specialist who diagnoses and treats conditions of the bones, joints and ligaments. Dr. Ya'ish's work includes joint replacement, revision surgery, sports injuries and trauma care.",
    aAr: "استشاري العظام في الإمارات أخصائي كبير يشخص ويعالج حالات العظام والمفاصل والأربطة. يشمل عمل الدكتور يعيش استبدال المفاصل وجراحة المراجعة وإصابات الرياضة ورعاية الرضوض.",
  },
  {
    q: "How does robotic joint replacement differ from conventional surgery?",
    qAr: "كيف يختلف استبدال المفصل الروبوتي عن الجراحة التقليدية؟",
    a: "Both approaches replace damaged joint surfaces. Robotic joint replacement adds CT-based planning and navigation, which helps the surgeon assess bone preparation, implant position and soft-tissue balance during the operation.",
    aAr: "يستبدل كلا النهجين الأسطح المفصلية التالفة. يضيف الاستبدال الروبوتي تخطيطاً بالأشعة المقطعية وملاحة تساعد الجرّاح على تقييم تحضير العظم وموضع الزرعة وتوازن الأنسجة الرخوة أثناء العملية.",
  },
  {
    q: "When is revision hip and knee surgery needed?",
    qAr: "متى تُحتاج جراحة مراجعة الورك والركبة؟",
    a: "It is considered when an earlier joint replacement has developed a problem. Depending on the cause, treatment may involve replacing components, managing bone loss or using specialised implants.",
    aAr: "تُدرس عندما تظهر مشكلة في استبدال مفصل سابق. حسب السبب قد يشمل العلاج تبديل المكوّنات أو تدبير فقدان العظم أو استخدام زرعات متخصصة.",
  },
  {
    q: "Should I have a partial or a total knee replacement?",
    qAr: "هل أحتاج استبدالاً جزئياً أم كاملاً للركبة؟",
    a: "This depends on how much of the knee is affected. When damage is limited to one compartment, a partial replacement may be suitable. When arthritis affects the joint more widely, total knee replacement is usually the more appropriate option. A consultation and imaging will confirm the best choice.",
    aAr: "يعتمد ذلك على مدى إصابة الركبة. عندما يقتصر الضرر على حيز واحد قد يناسب الجزئي. وعندما تصيب الخشونة المفصل على نطاق أوسع غالباً يكون الاستبدال الكامل الأنسب. تؤكد الاستشارة والتصوير الخيار الأفضل.",
  },
  {
    q: "How can I book an appointment with an orthopedic surgeon in UAE at Healthpoint?",
    qAr: "كيف أحجز موعداً مع جرّاح عظام في الإمارات في هيلث بوينت؟",
    a: "You can call the toll-free concierge on 800 77, telephone the hospital on +971 2 492 9000 or message through WhatsApp on the website. Outpatient clinics run from Tuesday to Friday.",
    aAr: "يمكنك الاتصال بالمركز المجاني على 800 77 أو بالمستشفى على +971 2 492 9000 أو عبر واتساب في الموقع. عيادات العيادات الخارجية من الثلاثاء إلى الجمعة.",
  },
];
