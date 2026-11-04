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
  /** Optional document title override for generateMetadata. */
  seoTitle?: string;
  /** Optional meta description override for generateMetadata. */
  seoDescription?: string;
  /** Optional in-article H2 for keyword placement. */
  sectionH2?: string;
  content: string[];
  contentAr: string[];
  videoUrl?: string;
};

export const educationItems: EducationItem[] = [
  {
    id: "robotic",
    kind: "video",
    image: "/images/education/youtube-karima.webp",
    videoUrl: "https://www.youtube.com/watch?v=w_M7h4Ig6m4",
    duration: "14:02",
    category: "Featured Clinical Guide",
    categoryAr: "دليل سريري مميز",
    title: "Dr. Feras Ya'ish | Orthopedic Surgeon in UAE | Sheikh Shakhbout Medical City, Abu Dhabi",
    titleAr: "د. فراس يعيش | جرّاح عظام في الإمارات | مدينة الشيخ شخبوط الطبية أبوظبي",
    body: "Karima's story. A patient account following bilateral knee replacement, including her experience of walking the next day.",
    bodyAr: "قصة كريمة: حساب مريضة بعد استبدال الركبتين، بما في ذلك تجربتها في المشي في اليوم التالي.",
    content: [
      "Follow Karima's story. She overcame her fears thanks to her trust in Dr. Feras Ya'ish, consultant orthopaedic surgeon at Sheikh Shakhbout Medical City, in partnership with SEHA and Mayo Clinic. He performed a successful replacement of both knee joints, and with the physiotherapy team she was walking the day after surgery.",
    ],
    contentAr: [
      "تابعوا معنا قصة كريمة التي تغلبت على مخاوفها بفضل ثقتها بخبرة الدكتور فراس يعيش، استشاري جراحة العظام في مدينة الشيخ شخبوط الطبية بالشركة مع شركة \"صحة\" ومايو كلينك، ليجري لها جراحة ناجحة لتبديل مفصلي ركبتيها، وبدعم فريق العلاج الطبيعي تمكنت من المشي في اليوم التالي من الجراحة.",
    ],
  },
  {
    id: "psi",
    kind: "video",
    image: "/images/education/linkedin-khalifa.webp",
    videoUrl: "https://lnkd.in/p/eG4Erhty",
    duration: "3:40",
    category: "Planning",
    categoryAr: "التخطيط",
    title: "After years of surgeries and ongoing knee pain, Khalifa Al Qamzi had almost learned to live with the discomfort.",
    titleAr: "بعد سنوات من الجراحات وألم الركبة المستمر، كان خليفة القمزي قد أوشك أن يتعايش مع هذا الانزعاج.",
    body: "Khalifa Al Qamzi's recovery. A description of his return to walking after knee surgery at Healthpoint.",
    bodyAr: "تعافي خليفة القمزي: وصف لعودته للمشي بعد جراحة الركبة في هيلث بوينت.",
    seoDescription:
      "Patient-specific implant planning explained. How CT-based guides shape knee surgery decisions with Dr. Feras Ya'ish in Abu Dhabi at Healthpoint.",
    content: [
      "After years of surgeries and ongoing knee pain, Khalifa Al Qamzi had almost learned to live with the discomfort. But with the right care and the right doctor, things can change. Under the care of Dr. Firas and the Orthopedics team at Healthpoint, Khalifa found not just relief, but renewed confidence in his movement. Just days after surgery, he is already back on his feet — walking stronger, steadier, and with a better quality of life.",
    ],
    contentAr: [
      "بعد سنوات من الجراحات وألم الركبة المستمر، كان خليفة القمزي قد أوشك أن يتعايش مع هذا الانزعاج. لكن مع الرعاية المناسبة والطبيب المناسب يمكن أن يتغير الأمر. تحت رعاية الدكتور فراس وفريق جراحة العظام في هيلث بوينت، وجد خليفة ليس الراحة فحسب، بل ثقة متجددة في حركته. بعد أيام فقط من الجراحة عاد إلى الوقوف على قدميه، يمشي بقوة وثبات أكبر وبجودة حياة أفضل.",
    ],
  },
  {
    id: "knee-recovery",
    kind: "video",
    image: "/images/education/facebook-icjr.webp",
    videoUrl: "https://www.facebook.com/reel/1340395331004480",
    duration: "5:10",
    category: "Recovery",
    categoryAr: "التعافي",
    title: "A huge thank you to our esteemed speaker, Dr. Feras Yaish, for his invaluable contribution to the 8th ICJR Egypt.",
    titleAr: "شكر كبير لمتحدثنا الكريم الدكتور فراس يعيش على مساهمته القيّمة في المؤتمر الدولي الثامن لجراحة المفاصل في مصر.",
    body: "Clinical presentations. Dr. Ya'ish's professional contributions, including the 8th ICJR Egypt meeting held on 11 to 13 September 2025.",
    bodyAr: "عروض سريرية: مساهمات الدكتور يعيش المهنية، بما في ذلك اجتماع ICJR مصر الثامن من 11 إلى 13 سبتمبر 2025.",
    seoDescription:
      "Knee recovery milestones after joint surgery in Abu Dhabi — walking progress, physiotherapy, and return to daily life with Dr. Feras Ya'ish.",
    content: [
      "A huge thank you to our esteemed speaker, Dr. Feras Yaish, for his invaluable contribution to the 8th ICJR Egypt. Date: 11th–13th of September, 2025. Venue: Triumph Luxury Hotel, New Cairo, Egypt.",
    ],
    contentAr: [
      "شكر كبير لمتحدثنا الكريم الدكتور فراس يعيش على مساهمته القيّمة في المؤتمر الدولي الثامن لجراحة المفاصل في مصر. التاريخ: 11–13 سبتمبر 2025. المكان: فندق تريومف لاكشري، القاهرة الجديدة، مصر.",
    ],
  },
  {
    id: "acl-recovery",
    kind: "video",
    image: "/images/knee-mechanics.webp",
    duration: "4:55",
    category: "Knee Sports Injuries",
    categoryAr: "إصابات الركبة الرياضية",
    title: "Recovery After ACL Reconstruction",
    titleAr: "التعافي بعد إعادة بناء الرباط المتصالب",
    body: "Recovery after ACL reconstruction. Educational guidance on brace use, strength milestones and criteria-based return to pivoting activities.",
    bodyAr: "التعافي بعد إعادة بناء الرباط المتصالب: إرشاد تثقيفي حول الدعامة ومحطات القوة ومعايير العودة للأنشطة المحورية.",
    seoTitle: "Recovery After ACL Surgery in Abu Dhabi | Dr. Feras Ya'ish",
    seoDescription:
      "ACL recovery in Abu Dhabi: brace, strength, return-to-sport criteria. Learn more with Dr. Ya'ish.",
    sectionH2: "ACL Recovery Milestones in Abu Dhabi",
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
    image: "/images/education-ct.webp",
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
    image: "/images/implant-revision.webp",
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
    image: "/images/implant-knee.webp",
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
    image: "/images/knee-mechanics.webp",
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
  { image: "/images/practice/portrait.webp", alt: "Dr Feras Ya'ish", altAr: "الدكتور فراس يعيش", fit: "object-cover object-[center_20%]" },
  { image: "/images/practice/surgical-team.webp", alt: "Dr Feras Ya'ish with the surgical team", altAr: "الدكتور فراس يعيش مع الفريق الجراحي", fit: "object-cover object-[center_24%]" },
  { image: "/images/practice/teaching-sawbone.webp", alt: "Dr Feras Ya'ish teaching knee reconstruction on a surgical model", altAr: "الدكتور فراس يعيش يدرّس إعادة بناء الركبة على نموذج جراحي", fit: "object-cover object-[center_35%]" },
  { image: "/images/practice/mako-briefing.webp", alt: "Stryker Mako robotic arm during a surgical briefing", altAr: "ذراع سترايكر ماكو الروبوتية أثناء إحاطة جراحية", fit: "object-cover object-center" },
  { image: "/images/practice/lecture-gulf-knee.webp", alt: "Dr Feras Ya'ish lecturing at the Emirates Orthopaedic Society Gulf Knee Course", altAr: "الدكتور فراس يعيش يحاضر في دورة الخليج للركبة لجمعية الإمارات لجراحة العظام", fit: "object-cover object-[center_22%]" },
  { image: "/images/practice/faculty-ao-sharjah.webp", alt: "AO Recon faculty at a joint preservation and replacement course", altAr: "هيئة AO Recon في دورة الحفاظ على المفصل واستبداله", fit: "object-cover object-center" },
  { image: "/images/practice/lecture-icjr.webp", alt: "Dr Feras Ya'ish speaking at the International Congress for Joint Reconstruction", altAr: "الدكتور فراس يعيش يتحدث في المؤتمر الدولي لإعادة بناء المفاصل", fit: "object-cover object-[32%_center]" },
  { image: "/images/practice/teaching-workshop.webp", alt: "Hands-on knee reconstruction workshop", altAr: "ورشة عملية لإعادة بناء الركبة", fit: "object-cover object-[center_42%]" },
  { image: "/images/practice/lecture-ao-recon.webp", alt: "Dr Feras Ya'ish lecturing at the AO Recon total knee arthroplasty course", altAr: "الدكتور فراس يعيش يحاضر في دورة AO Recon لاستبدال الركبة", fit: "object-contain object-center" },
  { image: "/images/clinical/or-robot-portrait.webp", alt: "Dr Feras Ya'ish beside the Stryker Mako robotic arm in theatre", altAr: "الدكتور فراس يعيش بجانب ذراع سترايكر ماكو الروبوتية في غرفة العمليات", fit: "object-cover object-[center_30%]" },
];
