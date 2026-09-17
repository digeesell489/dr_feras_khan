export type CaseExample = {
  slug: string;
  image: string;
  code: string;
  tags: string[];
  tagsAr: string[];
  title: string;
  titleAr: string;
  body: string;
  bodyAr: string;
  presentation: string;
  presentationAr: string;
  plan: string[];
  planAr: string[];
  note: string;
  noteAr: string;
};

export const caseExamples: CaseExample[] = [
  {
    slug: "robotic-total-knee",
    image: "/images/knee-mechanics.png",
    code: "CASE #R-2024-KNEE",
    tags: ["Primary Arthroplasty", "Kinematic Alignment", "Haptic Navigation"],
    tagsAr: ["استبدال أولي", "محاذاة حركية", "ملاحة لمسية"],
    title: "Robotic Total Knee Replacement",
    titleAr: "استبدال ركبة كامل بمساعدة الروبوت",
    body: "Sub-millimeter resections ensuring balanced collateral ligament tension and physiological tracking.",
    bodyAr: "قطوع دون المليمتر تضمن توازن الأربطة الجانبية وتتبعاً فسيولوجياً.",
    presentation:
      "A patient with tricompartmental knee osteoarthritis and a constitutional varus alignment requested a more natural knee feel after replacement. Non-operative care had been exhausted.",
    presentationAr:
      "مريض بخشونة الركبة في الحجرات الثلاث ومحاذاة فحجاء دستورية رغب بإحساس أكثر طبيعية بعد الاستبدال بعد استنفاد العلاج غير الجراحي.",
    plan: [
      "Pre-operative CT modelling to restore the patient's own joint line",
      "Robotic haptic boundaries for femoral and tibial resection",
      "Dynamic ligament assessment through the arc of motion",
      "Enhanced-recovery mobilisation on the day of surgery",
    ],
    planAr: [
      "نمذجة مقطعية قبل الجراحة لاستعادة خط المفصل الخاص بالمريض",
      "حدود لمسية روبوتية لقطع الفخذ والظنبوب",
      "تقييم ديناميكي للأربطة عبر قوس الحركة",
      "تحريك مبكر في يوم الجراحة ضمن مسار التعافي المعزز",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "revision-hip",
    image: "/images/implant-revision.png",
    code: "CASE #REV-2023-HIP",
    tags: ["Revision Arthroplasty", "Trabecular Metal Augments", "Bone Loss"],
    tagsAr: ["مراجعة المفصل", "تعزيزات معدنية إسفنجية", "فقدان عظم"],
    title: "Complex Revision Hip Arthroplasty",
    titleAr: "مراجعة معقدة لاستبدال الورك",
    body: "Reconstruction of major acetabular bone loss utilizing porous trabecular titanium cones and modular stems.",
    bodyAr: "إعادة بناء فقدان عظمي حقي كبير باستخدام مخاريط تيتانيوم إسفنجية وسيقان معيارية.",
    presentation:
      "Pain and start-up limp years after primary hip replacement. Imaging showed acetabular osteolysis and a loose cup without acute infection markers.",
    presentationAr:
      "ألم وعرج عند البدء بعد سنوات من استبدال ورك أولي. أظهر التصوير انحلال عظم الحُق وارتخاء الكأس دون علامات عدوى حادة.",
    plan: [
      "Metal-reduction CT for Paprosky grading and implant inventory",
      "Aspiration protocol to exclude periprosthetic infection",
      "Trabecular titanium reconstruction of the acetabulum",
      "Modular femoral revision as required for stability and offset",
    ],
    planAr: [
      "مقطعي بتقليل المعدن لتصنيف Paprosky وجرد الزرعة",
      "بروتوكول بزل لاستبعاد العدوى حول المفصل",
      "إعادة بناء الحُق بتيتانيوم تربيقي",
      "مراجعة فخذية معيارية حسب الحاجة للاستقرار والإزاحة",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "periprosthetic-fracture",
    image: "/images/implant-trauma.png",
    code: "CASE #TR-2024-FEMUR",
    tags: ["Trauma & Malunion", "Locking Plate Fixation", "Minimally Invasive MIPO"],
    tagsAr: ["رضوض وعدم الالتئام", "تثبيت بصفيحة قافلة", "تثبيت طفيف التوغل"],
    title: "Periprosthetic Fracture Reconstruction",
    titleAr: "إعادة بناء كسر حول الزرعة",
    body: "Biological osteosynthesis for complex peri-implant femoral fracture preserving periosteal blood supply.",
    bodyAr: "تثبيت بيولوجي لكسر فخذي معقد حول الزرعة مع الحفاظ على التروية السمحاقية.",
    presentation:
      "A fall around a well-fixed femoral stem produced a peri-implant fracture. The patient needed stable fixation without unnecessary stem revision.",
    presentationAr:
      "أدى سقوط حول ساق فخذية ثابتة إلى كسر حول الزرعة. احتاج المريض تثبيتاً مستقراً دون مراجعة غير ضرورية للساق.",
    plan: [
      "Orthogonal radiographs and CT to confirm stem stability",
      "Anatomically contoured locking plate with cable supplementation",
      "MIPO technique to protect periosteal blood supply",
      "Protected weight-bearing and early joint motion",
    ],
    planAr: [
      "أشعة متعامدة ومقطعي لتأكيد ثبات الساق",
      "صفيحة قافلة بتشريح مطابق مع كابلات داعمة",
      "تثبيت طفيف التوغل لحماية التروية السمحاقية",
      "تحميل محمي وحركة مبكرة للمفصل",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "partial-knee",
    image: "/images/implant-partial.png",
    code: "CASE #UKA-2024-MED",
    tags: ["Joint Preservation", "Unicompartmental", "Cruciate-Retaining"],
    tagsAr: ["الحفاظ على المفصل", "حيز واحد", "الحفاظ على المتصالب"],
    title: "Partial Knee Replacement",
    titleAr: "استبدال الركبة الجزئي",
    body: "Isolated medial compartment resurfacing with both cruciate ligaments retained.",
    bodyAr: "إعادة تسطيح الحيز الإنسي المعزول مع الحفاظ على الرباطين المتصالبين.",
    presentation:
      "Isolated medial osteoarthritis with an intact ACL, correctable deformity, and preserved lateral and patellofemoral cartilage.",
    presentationAr:
      "خشونة إنسية معزولة مع رباط متصالب أمامي سليم وتشوه قابل للتصحيح وغضروف وحشي ورضفي محفوظ.",
    plan: [
      "Confirm single-compartment disease on weight-bearing films and MRI",
      "Resurface only the worn medial compartment",
      "Retain ACL, PCL, and healthy cartilage",
      "Accelerated mobilisation compared with total knee replacement",
    ],
    planAr: [
      "تأكيد إصابة حيز واحد بأشعة تحمل الوزن والرنين",
      "إعادة تسطيح الحيز الإنسي المتآكل فقط",
      "الحفاظ على الرباطين المتصالبين والغضروف السليم",
      "تحريك أسرع مقارنة بالاستبدال الكامل",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "acl-reconstruction",
    image: "/images/knee-mechanics.png",
    code: "CASE #ACL-2024-KNEE",
    tags: ["Knee Sports Injuries", "ACL", "Anatomical Reconstruction"],
    tagsAr: ["إصابات الركبة الرياضية", "الرباط المتصالب الأمامي", "إعادة بناء تشريحي"],
    title: "ACL Reconstruction",
    titleAr: "إعادة بناء الرباط المتصالب الأمامي",
    body: "Anatomical ACL reconstruction restoring rotational stability after a pivoting knee injury.",
    bodyAr: "إعادة بناء تشريحي للرباط المتصالب الأمامي لاستعادة الثبات الدوراني بعد إصابة محورية.",
    presentation:
      "Giving-way during cutting sport after a non-contact twist. MRI confirmed a complete ACL rupture with a repairable meniscal ramp lesion.",
    presentationAr:
      "خيانة الركبة أثناء رياضة قطع بعد التواء دون احتكاك. أكد الرنين تمزقاً كاملاً للرباط المتصالب الأمامي مع آفة حافة هلالية قابلة للإصلاح.",
    plan: [
      "Anatomical ACL reconstruction with modern fixation",
      "Meniscal ramp repair in the same sitting",
      "Criterion-based rehabilitation before running and pivoting",
      "Shared return-to-play testing with physiotherapy",
    ],
    planAr: [
      "إعادة بناء تشريحي للرباط المتصالب بتثبيت حديث",
      "إصلاح آفة حافة الهلالة في الجلسة ذاتها",
      "تأهيل وفق معايير قبل الجري والدوران",
      "اختبارات عودة للعب مشتركة مع العلاج الطبيعي",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "knee-arthroscopy",
    image: "/images/implant-knee.png",
    code: "CASE #SCOPE-2024-MEN",
    tags: ["Knee Arthroscopy", "Meniscal Repair", "Keyhole Surgery"],
    tagsAr: ["منظار الركبة", "إصلاح الهلالة", "جراحة ثقب المفتاح"],
    title: "Arthroscopic Meniscal Repair",
    titleAr: "إصلاح الهلالة بالمنظار",
    body: "Keyhole repair of a locked meniscal tear, preserving meniscal tissue rather than resecting it.",
    bodyAr: "إصلاح تمزق هلالة مقفلة بالمنظار مع الحفاظ على النسيج بدلاً من استئصاله.",
    presentation:
      "Mechanical locking and inability to fully straighten the knee after a squat. Imaging showed a displaced meniscal tear suitable for repair.",
    presentationAr:
      "قفل ميكانيكي وعجز عن فرد الركبة بعد القرفصاء. أظهر التصوير تمزق هلالة منزاحاً مناسباً للإصلاح.",
    plan: [
      "High-definition arthroscopic assessment of all compartments",
      "Repair-first strategy with all-inside or inside-out sutures",
      "Protected flexion protocol to protect the repair",
      "Progressive strengthening once healing milestones are met",
    ],
    planAr: [
      "تقييم منظاري عالي الدقة لكل الحجرات",
      "استراتيجية إصلاح أولاً بخيوط من الداخل أو الداخل-الخارج",
      "بروتوكول ثني محمي لحماية الإصلاح",
      "تقوية تدريجية بعد بلوغ محطات الالتئام",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "revision-knee",
    image: "/images/implant-revision.png",
    code: "CASE #REV-2024-KNEE",
    tags: ["Revision Arthroplasty", "Instability", "Joint-Line Restoration"],
    tagsAr: ["مراجعة المفصل", "عدم استقرار", "استعادة خط المفصل"],
    title: "Revision Total Knee Replacement",
    titleAr: "مراجعة استبدال الركبة الكامل",
    body: "Revision of a painful, unstable knee replacement with restoration of the joint line and constraint matched to ligament status.",
    bodyAr: "مراجعة استبدال ركبة مؤلم وغير مستقر مع استعادة خط المفصل وقيد يناسب حالة الأربطة.",
    presentation:
      "Recurrent giving-way and start-up pain after primary knee replacement. Work-up excluded infection and demonstrated flexion instability.",
    presentationAr:
      "خيانة متكررة وألم عند البدء بعد استبدال ركبة أولي. استبعدت الفحوصات العدوى وأظهرت عدم استقرار في الثني.",
    plan: [
      "Serial radiographs, ESR/CRP, and aspiration as indicated",
      "CT planning for rotation, size, and joint-line height",
      "Modular revision components with appropriate constraint",
      "Physiotherapy focused on quadriceps recovery and gait",
    ],
    planAr: [
      "أشعة متسلسلة وسرعة تثفل وبروتين تفاعلي وبزل حسب الحاجة",
      "تخطيط مقطعي للدوران والحجم وارتفاع خط المفصل",
      "مكوّنات مراجعة معيارية بقيد مناسب",
      "علاج طبيعي يركز على العضلة الرباعية والمشي",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
  {
    slug: "malunion-reconstruction",
    image: "/images/implant-trauma.png",
    code: "CASE #MAL-2023-TIB",
    tags: ["Trauma & Malunion", "Corrective Osteotomy", "Axis Restoration"],
    tagsAr: ["رضوض وعدم الالتئام", "قطع عظمي تصحيحي", "استعادة المحور"],
    title: "Malunion Reconstruction",
    titleAr: "إعادة بناء الالتئام المعيب",
    body: "Corrective osteotomy and stable fixation to restore mechanical axis after a malunited periarticular fracture.",
    bodyAr: "قطع عظمي تصحيحي وتثبيت مستقر لاستعادة المحور الميكانيكي بعد التئام معيب لكسر حول المفصل.",
    presentation:
      "Persistent angulation, pain, and limited walking tolerance after previous fracture treatment. Imaging confirmed a malunited periarticular fracture.",
    presentationAr:
      "انحراف وألم ونقص تحمل المشي بعد علاج كسر سابق. أكد التصوير التئاماً معيباً لكسر حول المفصل.",
    plan: [
      "Long-leg alignment views and CT for the osteotomy plan",
      "Corrective osteotomy to restore articular surface and axis",
      "Locking-plate fixation with biological soft-tissue handling",
      "Staged weight-bearing until union is confirmed",
    ],
    planAr: [
      "صور الطرف الطويل ومقطعي لخطة القطع العظمي",
      "قطع تصحيحي لاستعادة السطح المفصلي والمحور",
      "تثبيت بصفيحة قافلة مع تعامل يحافظ على الأنسجة",
      "تحميل مرحلي حتى تأكيد الالتئام",
    ],
    note: "Anonymised educational overview. Individual plans are confirmed in clinic after examination and imaging.",
    noteAr: "عرض تعليمي مجهول الهوية. تُؤكد الخطة الفردية في العيادة بعد الفحص والتصوير.",
  },
];

export function getCaseExample(slug: string) {
  return caseExamples.find((item) => item.slug === slug);
}
