export type EducationKind = "video" | "article";

export type EducationItem = {
  id: string;
  kind: EducationKind;
  image: string;
  duration?: string;
  category: string;
  categoryAr: string;
  title: string;
  titleAr: string;
  body: string;
  bodyAr: string;
  content: string[];
  contentAr: string[];
  videoUrl?: string;
};

export const educationItems: EducationItem[] = [
  {
    id: "robotic",
    kind: "video",
    image: "/images/practice/mako-briefing.jpeg",
    videoUrl: "https://www.youtube.com/watch?v=w_M7h4Ig6m4",
    duration: "4:15",
    category: "Featured Clinical Guide",
    categoryAr: "دليل سريري مميز",
    title: "Robotic Knee Replacement Explained",
    titleAr: "شرح استبدال الركبة الروبوتي",
    body: "An in-depth explanation of how pre-operative CT modeling correlates with intra-operative haptic feedback to customize surgical cuts to constitutional anatomy.",
    bodyAr: "شرح لكيفية ارتباط نمذجة الأشعة المقطعية قبل الجراحة بالتغذية اللمسية أثناء العملية لتخصيص القطوع وفق تشريح المريض.",
    content: [
      "Robotic-assisted joint replacement begins with a low-dose CT scan that is reconstructed into a three-dimensional model of the patient's own bone.",
      "In theatre, optical tracking and haptic boundaries help the surgeon keep resections within the planned envelope, protecting ligaments and remaining bone.",
      "The system does not replace surgical judgement. Dr. Ya'ish still selects alignment philosophy, implant geometry, and soft-tissue balance to suit the individual.",
      "This guide is educational and does not replace an in-person consultation or review of your own imaging.",
    ],
    contentAr: [
      "يبدأ استبدال المفصل بمساعدة الروبوت بأشعة مقطعية منخفضة الجرعة تُحوَّل إلى نموذج ثلاثي الأبعاد لعظم المريض.",
      "في غرفة العمليات يساعد التتبع البصري والحدود اللمسية الجرّاح على إبقاء القطوع ضمن الخطة مع حماية الأربطة والعظم المتبقي.",
      "لا يغني النظام عن الحكم الجراحي. يختار الدكتور يعيش فلسفة المحاذاة وشكل الزرعة وتوازن الأنسجة بما يناسب كل مريض.",
      "هذا الدليل للتثقيف ولا يغني عن استشارة حضورية أو مراجعة صورك الخاصة.",
    ],
  },
  {
    id: "psi",
    kind: "video",
    image: "/images/clinical/psi-ct-planning.png",
    videoUrl: "https://lnkd.in/p/eG4Erhty",
    duration: "3:40",
    category: "Planning",
    categoryAr: "التخطيط",
    title: "Patient-Specific Surgery",
    titleAr: "جراحة مخصصة للمريض",
    body: "Custom 3D-printed resection guides and bespoke planning protocols.",
    bodyAr: "أدلة قطع مطبوعة ثلاثياً وبروتوكولات تخطيط مخصصة.",
    content: [
      "Patient-specific instrumentation uses a 3D plan of the joint to produce cutting guides matched to that patient's anatomy.",
      "The aim is to restore the individual's joint line and morphology rather than applying a one-size-fits-all mechanical template.",
      "Robotic assistance and patient-specific guides are complementary tools. The approach is chosen to suit the patient, not the other way around.",
    ],
    contentAr: [
      "تستخدم الأدوات المخصصة للمريض خطة ثلاثية الأبعاد لصنع أدلة قطع مطابقة لتشريحه.",
      "الهدف استعادة خط المفصل وشكل العظم لدى ذلك المريض لا فرض قالب ميكانيكي واحد للجميع.",
      "المساعدة الروبوتية والأدلة المخصصة أدوات متكاملة. يُختار النهج ليناسب المريض لا العكس.",
    ],
  },
  {
    id: "knee-recovery",
    kind: "video",
    image: "/images/implant-knee.png",
    videoUrl: "https://www.facebook.com/reel/1340395331004480",
    duration: "5:10",
    category: "Recovery",
    categoryAr: "التعافي",
    title: "Recovery After Knee Replacement",
    titleAr: "التعافي بعد استبدال الركبة",
    body: "Day-by-day mobilisation protocols, swelling management, and physical therapy milestones.",
    bodyAr: "بروتوكولات الحركة يوماً بيوم، وإدارة التورم، ومعالم العلاج الطبيعي.",
    content: [
      "Most patients begin supported walking on the day of surgery or within 24 hours under physiotherapy guidance.",
      "Early goals include full extension, swelling control, and safe indoor walking with the prescribed aid.",
      "Milestones at 2 weeks, 6 weeks, 3 months, and 1 year are used to check wound healing, motion, and implant tracking.",
      "Return to driving, work, and recreation is individual and is confirmed in clinic.",
    ],
    contentAr: [
      "يبدأ معظم المرضى المشي المدعوم يوم الجراحة أو خلال 24 ساعة تحت إشراف العلاج الطبيعي.",
      "تشمل الأهداف المبكرة الفرد الكامل والسيطرة على التورم والمشي الآمن داخل المنزل بالوسيلة الموصوفة.",
      "تُستخدم محطات أسبوعين و6 أسابيع و3 أشهر وسنة لمتابعة الجرح والحركة وتتبع الزرعة.",
      "العودة للقيادة والعمل والترفيه فردية وتُؤكد في العيادة.",
    ],
  },
  {
    id: "acl-recovery",
    kind: "video",
    image: "/images/knee-mechanics.png",
    duration: "4:55",
    category: "Knee Sports Injuries",
    categoryAr: "إصابات الركبة الرياضية",
    title: "Recovery After ACL Reconstruction",
    titleAr: "التعافي بعد إعادة بناء الرباط المتصالب",
    body: "Brace use, strength milestones, and criterion-based return to pivoting activity after ligament reconstruction.",
    bodyAr: "استخدام الدعامة ومحطات القوة ومعايير العودة للنشاط المحوري بعد إعادة بناء الرباط.",
    content: [
      "After ACL reconstruction, early physiotherapy protects the graft while restoring extension and quadriceps activation.",
      "Running and pivoting are not calendar-based alone. Strength, hop testing, and sport-specific control are required.",
      "Associated meniscal repair may slow the early flexion protocol. Your plan is written for the reconstruction that was performed.",
    ],
    contentAr: [
      "بعد إعادة بناء الرباط المتصالب يحمي العلاج الطبيعي المبكر الطعم مع استعادة الفرد وتنشيط العضلة الرباعية.",
      "الجري والدوران ليسا وفق التقويم وحده. تُطلب القوة واختبارات القفز والتحكم الخاص بالرياضة.",
      "قد يبطئ إصلاح الهلالة المصاحب بروتوكول الثني المبكر. تُكتب خطتك وفق ما أُجري فعلاً.",
    ],
  },
  {
    id: "robotic-vs-conventional",
    kind: "article",
    image: "/images/education-ct.png",
    category: "Article",
    categoryAr: "مقال",
    title: "Robotic-Assisted and Patient-Specific Joint Replacement",
    titleAr: "استبدال المفصل الروبوتي والمخصص للمريض",
    body: "How CT planning, robotics, and conventional jigs are selected according to anatomy and goals.",
    bodyAr: "كيف يُختار التخطيط المقطعي والروبوت والقوالب التقليدية وفق التشريح والأهداف.",
    content: [
      "Conventional, patient-specific, and robotic-assisted joint replacement are all used in Dr. Ya'ish's practice.",
      "Robotic systems add intra-operative haptic boundaries and real-time balance data. Patient-specific guides bring a 3D plan into theatre without a robotic arm.",
      "Neither tool is used for its own sake. Alignment philosophy, implant choice, and tissue preservation remain the clinical priorities.",
      "A consultation reviews your imaging and functional goals before recommending a modality.",
    ],
    contentAr: [
      "يُستخدم في ممارسة الدكتور يعيش الاستبدال التقليدي والمخصص للمريض وبمساعدة الروبوت.",
      "تضيف الأنظمة الروبوتية حدوداً لمسية وبيانات توازن لحظية. وتنقل الأدلة المخصصة خطة ثلاثية الأبعاد إلى غرفة العمليات دون ذراع روبوتي.",
      "لا تُستخدم أي أداة لذاتها. تبقى فلسفة المحاذاة واختيار الزرعة والحفاظ على الأنسجة الأولوية السريرية.",
      "تراجع الاستشارة صورك وأهدافك الوظيفية قبل التوصية بأسلوب معيّن.",
    ],
  },
  {
    id: "revision-explained",
    kind: "article",
    image: "/images/implant-revision.png",
    category: "Article",
    categoryAr: "مقال",
    title: "When Complex Revision Hip and Knee Surgery Is Needed",
    titleAr: "متى تُستطب جراحة مراجعة الورك والركبة المعقدة",
    body: "Loosening, infection, instability, bone loss, and periprosthetic fracture as reasons for revision.",
    bodyAr: "الارتخاء والعدوى وعدم الاستقرار وفقدان العظم والكسر حول الزرعة كأسباب للمراجعة.",
    content: [
      "Revision surgery is considered when a hip or knee replacement is painful, loose, unstable, infected, or associated with fracture or bone loss.",
      "Work-up typically includes serial radiographs, blood markers, aspiration when infection is possible, and metal-reduction CT.",
      "Reconstruction may use modular stems, trabecular metal cones, and one- or two-stage infection protocols.",
      "Referring physicians can submit imaging through the physician gateway. Patients can request a consultant review in clinic.",
    ],
    contentAr: [
      "تُدرس المراجعة عندما يكون استبدال الورك أو الركبة مؤلماً أو مرتخياً أو غير مستقر أو مصاباً أو مرتبطاً بكسر أو فقدان عظم.",
      "يشمل التقييم عادة أشعة متسلسلة وعلامات دموية وبزلاً عند احتمال العدوى ومقطعياً بتقليل المعدن.",
      "قد تستخدم إعادة البناء سيقاناً معيارية ومخاريط معدنية تربيقية وبروتوكول مرحلة أو مرحلتين للعدوى.",
      "يمكن للأطباء المحيلين إرسال الصور عبر بوابة الأطباء. ويمكن للمرضى طلب مراجعة استشارية في العيادة.",
    ],
  },
  {
    id: "partial-vs-total",
    kind: "article",
    image: "/images/implant-knee.png",
    category: "Article",
    categoryAr: "مقال",
    title: "Partial or Total Knee Replacement?",
    titleAr: "استبدال ركبة جزئي أم كامل؟",
    body: "How compartment wear and ligament integrity guide the choice between partial and total knee replacement.",
    bodyAr: "كيف يوجّه تآكل الحيز وسلامة الأربطة الاختيار بين الاستبدال الجزئي والكامل.",
    content: [
      "Partial knee replacement is considered when arthritis is confined to one compartment and the cruciate ligaments are intact.",
      "Total knee replacement is indicated when several compartments are involved or deformity cannot be corrected while keeping native ligaments.",
      "Patient-specific and robotic planning can be used for either procedure when they improve accuracy for that anatomy.",
      "The decision is made after examination and weight-bearing imaging, not from a single MRI report alone.",
    ],
    contentAr: [
      "يُدرس الاستبدال الجزئي عندما تقتصر الخشونة على حيز واحد وتكون الأربطة المتصالبة سليمة.",
      "يُستطب الاستبدال الكامل عند إصابة عدة حجرات أو عندما لا يمكن تصحيح التشوه مع الإبقاء على الأربطة الأصلية.",
      "يمكن استخدام التخطيط المخصص أو الروبوتي لأي من الإجراءين عندما يحسّن الدقة لذلك التشريح.",
      "يُتخذ القرار بعد الفحص وأشعة تحمل الوزن لا من تقرير رنين واحد وحده.",
    ],
  },
  {
    id: "knee-sports-injuries",
    kind: "article",
    image: "/images/knee-mechanics.png",
    category: "Article",
    categoryAr: "مقال",
    title: "Understanding Knee Sports Injuries",
    titleAr: "فهم إصابات الركبة الرياضية",
    body: "ACL rupture, meniscal tears, and instability — focused on the knee rather than general sports medicine.",
    bodyAr: "تمزق الرباط المتصالب وتمزقات الهلالة وعدم الاستقرار — بتركيز على الركبة لا على الطب الرياضي العام.",
    content: [
      "Dr. Ya'ish's sports practice is focused on knee sports injuries: ACL and other ligament reconstruction, meniscal repair, and arthroscopic cartilage work.",
      "A pop, swelling, and giving-way after a pivoting injury should be assessed clinically and with MRI when indicated.",
      "Not every knee sports injury needs surgery. Repair versus reconstruction, and the rehabilitation timetable, depend on the structures involved.",
      "Bring previous imaging and a list of sports or prayer positions you need to return to so the plan can be specific.",
    ],
    contentAr: [
      "تركز ممارسة الدكتور يعيش الرياضية على إصابات الركبة: إعادة بناء الرباط المتصالب والأربطة الأخرى، وإصلاح الهلالة، وعمل الغضروف بالمنظار.",
      "الطقطقة والتورم والخيانة بعد إصابة محورية تستدعي تقييماً سريرياً ورنيناً عند الحاجة.",
      "ليست كل إصابة ركبة رياضية بحاجة لجراحة. يعتمد الإصلاح مقابل إعادة البناء وجدول التأهيل على البنى المصابة.",
      "أحضر صورك السابقة وقائمة الرياضات أو أوضاع الصلاة التي تحتاج العودة إليها لتصبح الخطة محددة.",
    ],
  },
];

export const educationVideos = educationItems.filter((item) => item.kind === "video");
export const educationArticles = educationItems.filter((item) => item.kind === "article");

export function getEducationItem(id: string) {
  return educationItems.find((item) => item.id === id);
}

export const educationGallery = [
  { image: "/images/practice/portrait.jpeg", alt: "Dr Feras Ya'ish", altAr: "الدكتور فراس يعيش", fit: "object-cover object-[center_20%]" },
  { image: "/images/practice/surgical-team.jpeg", alt: "Dr Feras Ya'ish with the surgical team", altAr: "الدكتور فراس يعيش مع الفريق الجراحي", fit: "object-cover object-[center_24%]" },
  { image: "/images/practice/teaching-sawbone.jpeg", alt: "Dr Feras Ya'ish teaching knee reconstruction on a surgical model", altAr: "الدكتور فراس يعيش يدرّس إعادة بناء الركبة على نموذج جراحي", fit: "object-cover object-[center_35%]" },
  { image: "/images/practice/mako-briefing.jpeg", alt: "Stryker Mako robotic arm during a surgical briefing", altAr: "ذراع سترايكر ماكو الروبوتية أثناء إحاطة جراحية", fit: "object-cover object-center" },
  { image: "/images/practice/lecture-gulf-knee.jpeg", alt: "Dr Feras Ya'ish lecturing at the Emirates Orthopaedic Society Gulf Knee Course", altAr: "الدكتور فراس يعيش يحاضر في دورة الخليج للركبة لجمعية الإمارات لجراحة العظام", fit: "object-cover object-[center_22%]" },
  { image: "/images/practice/faculty-ao-sharjah.jpeg", alt: "AO Recon faculty at a joint preservation and replacement course", altAr: "هيئة AO Recon في دورة الحفاظ على المفصل واستبداله", fit: "object-cover object-center" },
  { image: "/images/practice/lecture-icjr.jpeg", alt: "Dr Feras Ya'ish speaking at the International Congress for Joint Reconstruction", altAr: "الدكتور فراس يعيش يتحدث في المؤتمر الدولي لإعادة بناء المفاصل", fit: "object-cover object-[32%_center]" },
  { image: "/images/practice/teaching-workshop.jpeg", alt: "Hands-on knee reconstruction workshop", altAr: "ورشة عملية لإعادة بناء الركبة", fit: "object-cover object-[center_42%]" },
  { image: "/images/practice/lecture-ao-recon.jpeg", alt: "Dr Feras Ya'ish lecturing at the AO Recon total knee arthroplasty course", altAr: "الدكتور فراس يعيش يحاضر في دورة AO Recon لاستبدال الركبة", fit: "object-contain object-center" },
  { image: "/images/clinical/or-robot-portrait.jpeg", alt: "Dr Feras Ya'ish beside the Stryker Mako robotic arm in theatre", altAr: "الدكتور فراس يعيش بجانب ذراع سترايكر ماكو الروبوتية في غرفة العمليات", fit: "object-cover object-[center_30%]" },
];
