export type AbuLandingFaq = { q: string; qAr: string; a: string; aAr: string };

export const abuLandingTreatments = [
  {
    href: "/treatments/total-knee-replacement",
    image: "/images/implant-knee.webp",
    title: "Knee Replacement Surgery",
    titleAr: "جراحة استبدال الركبة",
    body: "If joint pain, stiffness, and normal function continue because of severe joint damage, a knee replacement might be recommended. Assessment is used to decide if total knee replacement or another treatment option is appropriate.",
    bodyAr:
      "إذا استمر ألم الركبة والتيبس وضعف الوظيفة بسبب تلف مفصلي شديد، قد يُنصح باستبدال الركبة. يُستخدم التقييم لتحديد ما إذا كان الاستبدال الكامل أو خيار علاجي آخر مناسباً.",
    label: "Explore knee replacement →",
    labelAr: "استكشف استبدال الركبة ←",
  },
  {
    href: "/treatments/hip-replacement",
    image: "/images/clinical/hip-replacement-xray.webp",
    title: "Hip Replacement Surgery",
    titleAr: "جراحة استبدال الورك",
    body: "If there is a lot of damage to the hip joint, this can cause problems with walking, moving around or living life to the fullest, then hip replacement might be considered. Diagnosis and alternatives, surgical considerations, and recovery expectations are discussed.",
    bodyAr:
      "إذا كان تلف مفصل الورك كبيراً ويسبب مشكلات في المشي أو الحركة أو جودة الحياة، فقد يُدرس استبدال الورك. تُناقش التشخيص والبدائل والاعتبارات الجراحية وتوقعات التعافي.",
    label: "Explore hip replacement →",
    labelAr: "استكشف استبدال الورك ←",
  },
  {
    href: "/treatments/robotic-arthroplasty",
    image: "/images/clinical/mako-theatre.webp",
    title: "Robotic Joint Replacement",
    titleAr: "استبدال المفصل بمساعدة الروبوت",
    body: "For selected joint replacement procedures, the use of robotic-assisted technology can aid in planning and directing the various parts of the procedure. Appropriateness is subject to the clinical judgement and condition of the patient.",
    bodyAr:
      "في إجراءات استبدال مفصل مختارة، يمكن أن تساعد التقنية بمساعدة الروبوت في التخطيط وتوجيه أجزاء من الإجراء. تعتمد الملاءمة على الحكم السريري وحالة المريض.",
    label: "Explore robotic arthroplasty →",
    labelAr: "استكشف الاستبدال الروبوتي ←",
  },
  {
    href: "/treatments/revision-surgery",
    image: "/images/clinical/revision-knee-xray.webp",
    title: "Revision Hip and Knee Surgery",
    titleAr: "جراحة مراجعة الورك والركبة",
    body: "If there is a complication with the initial replacement surgery (such as infection, wear or loosening), revision surgery may be required. Next steps are informed by careful investigation.",
    bodyAr:
      "إذا حدثت مضاعفة بعد الاستبدال الأولي (مثل العدوى أو التآكل أو الارتخاء)، قد تُحتاج جراحة مراجعة. تُحدَّد الخطوات التالية بعد تحقيق دقيق.",
    label: "Explore revision surgery →",
    labelAr: "استكشف جراحة المراجعة ←",
  },
  {
    href: "/treatments/ligament-reconstruction",
    image: "/images/knee-mechanics.webp",
    title: "Knee Ligament Reconstruction and Arthroscopy",
    titleAr: "إعادة بناء أربطة الركبة والمنظار",
    body: "Ligament reconstruction may be considered for selected injuries that cause persistent instability. Arthroscopy is a minimally invasive technique used for certain knee conditions.",
    bodyAr:
      "قد تُدرس إعادة بناء الأربطة لإصابات مختارة تسبب عدم استقرار مستمر. المنظار تقنية طفيفة التوغل تُستخدم لبعض حالات الركبة.",
    label: "Explore ligament reconstruction →",
    labelAr: "استكشف إعادة بناء الأربطة ←",
  },
  {
    href: "/treatments/patient-specific-knee",
    image: "/images/clinical/partial-knee-compartments.webp",
    title: "Patient-Specific and Partial Knee Replacement",
    titleAr: "استبدال الركبة المخصص والجزئي",
    body: "For selected patients, depending on anatomy, the location of joint damage and clinical findings, patient-specific planning and/or partial knee replacement may be appropriate.",
    bodyAr:
      "لمرضى مختارين، حسب التشريح وموضع تلف المفصل والنتائج السريرية، قد يناسب التخطيط المخصص و/أو استبدال الركبة الجزئي.",
    label: "Explore patient-specific knee replacement →",
    labelAr: "استكشف الاستبدال المخصص ←",
  },
  {
    href: "/treatments/trauma",
    image: "/images/clinical/trauma-malunion-xray.webp",
    title: "Trauma and Malunion Treatment",
    titleAr: "علاج الرضوض والالتئام المعيب",
    body: "Orthopedic trauma care is for the treatment of injuries to bones and joints. Malunion treatment may be indicated if the fracture has healed in a misaligned position that affects alignment or function.",
    bodyAr:
      "رعاية رضوض العظام لعلاج إصابات العظام والمفاصل. قد يُستطب علاج الالتئام المعيب إذا التأَم الكسر في وضع غير محاذٍ يؤثر في الاصطفاف أو الوظيفة.",
    label: "Explore trauma treatment →",
    labelAr: "استكشف علاج الرضوض ←",
  },
  {
    href: "/treatments/arthroscopy",
    image: "/images/clinical/knee-arthroscopy.webp",
    title: "Knee Arthroscopy",
    titleAr: "منظار الركبة",
    body: "Arthroscopy of the knee or Knee Arthroscopy is a procedure that provides an inside look at the knee joint and treats some specific problems using tiny incisions and a camera. The correct management is dependent on the diagnosis.",
    bodyAr:
      "منظار الركبة إجراء يتيح النظر داخل المفصل وعلاج مشكلات محددة عبر شقوق صغيرة وكاميرا. يعتمد التدبير الصحيح على التشخيص.",
    label: "Explore arthroscopy →",
    labelAr: "استكشف المنظار ←",
  },
  {
    href: "/treatments/patellofemoral-instability",
    image: "/images/landing/hip-knee.webp",
    title: "Patellofemoral Instability",
    titleAr: "عدم استقرار الرضفة الفخذية",
    body: "Patellofemoral instability can have an impact on comfort and confidence while moving. Assessment can assist in determining possible contributing factors and the discussion of management options.",
    bodyAr:
      "قد يؤثر عدم استقرار الرضفة الفخذية في الراحة والثقة أثناء الحركة. يساعد التقييم على تحديد العوامل المساهمة ومناقشة خيارات التدبير.",
    label: "Explore patellofemoral treatment →",
    labelAr: "استكشف علاج عدم استقرار الرضفة ←",
  },
] as const;

export const abuLandingSteps = [
  {
    title: "01 · Assessment",
    titleAr: "01 · التقييم",
    body: "Discuss symptoms, medical history, movement limitations, and relevant investigations.",
    bodyAr: "مناقشة الأعراض والتاريخ المرضي وقيود الحركة والفحوصات ذات الصلة.",
    image: "/images/landing/step-assessment.webp",
    alt: "Orthopaedic assessment tools and knee model",
    altAr: "أدوات تقييم العظام ونموذج للركبة",
  },
  {
    title: "02 · Treatment discussion",
    titleAr: "02 · مناقشة العلاج",
    body: "Review suitable options, which may include rehabilitation, other non-surgical care, or surgery.",
    bodyAr: "مراجعة الخيارات المناسبة، وقد تشمل التأهيل أو رعاية غير جراحية أخرى أو الجراحة.",
    image: "/images/landing/step-discussion.webp",
    alt: "Doctor explaining joint treatment options to a patient",
    altAr: "طبيب يشرح خيارات علاج المفصل للمريض",
  },
  {
    title: "03 · Planning and follow-up",
    titleAr: "03 · التخطيط والمتابعة",
    body: "Where treatment is indicated, discuss preparation, recovery, rehabilitation, and follow-up.",
    bodyAr: "عند الحاجة للعلاج، تُناقش التحضير والتعافي والتأهيل والمتابعة.",
    image: "/images/landing/step-followup.webp",
    alt: "Recovery planning and rehabilitation materials",
    altAr: "مواد تخطيط التعافي والتأهيل",
  },
] as const;

export const abuLandingReasons = [
  {
    title: "Persistent hip or knee pain",
    titleAr: "ألم مستمر في الورك أو الركبة",
    body: "Ongoing pain, stiffness, or discomfort that limits walking, sleep, or routine activities may need assessment.",
    bodyAr: "الألم أو التيبس أو الانزعاج المستمر الذي يحدّ من المشي أو النوم أو الأنشطة اليومية قد يحتاج تقييماً.",
    image: "/images/landing/card-pain.webp",
    alt: "Person holding a painful knee",
    altAr: "شخص يمسك ركبة مؤلمة",
  },
  {
    title: "Instability or restricted movement",
    titleAr: "عدم استقرار أو تقييد الحركة",
    body: "Repeated knee giving-way, reduced range of motion, or difficulty bearing weight can warrant further evaluation.",
    bodyAr: "خيانة الركبة المتكررة أو نقص مدى الحركة أو صعوبة التحميل قد تستدعي تقييماً إضافياً.",
    image: "/images/landing/card-instability.webp",
    alt: "Person checking knee stability",
    altAr: "شخص يتحقق من ثبات الركبة",
  },
  {
    title: "Injury or previous surgery concerns",
    titleAr: "مخاوف بعد إصابة أو جراحة سابقة",
    body: "Symptoms after an injury or a problem affecting a previous joint replacement should be discussed with a clinician.",
    bodyAr: "الأعراض بعد إصابة أو مشكلة تؤثر في استبدال مفصل سابق ينبغي مناقشتها مع طبيب.",
    image: "/images/landing/card-injury.webp",
    alt: "Follow-up care after injury or joint surgery",
    altAr: "متابعة بعد إصابة أو جراحة مفصل",
  },
] as const;

export const abuLandingFaqs: AbuLandingFaq[] = [
  {
    q: "How do I choose the best orthopedic doctor in Abu Dhabi?",
    qAr: "كيف أختار أفضل طبيب عظام في أبوظبي؟",
    a: "Qualifications, experience, specialization, and treatment options are some of the factors to take into account when selecting an orthopedic physician. As an expert orthopedic and trauma consultant in Abu Dhabi, Dr. Feras Ya'ish offers personalized consultation for orthopaedic problems and treatment options for the hips and knees.",
    aAr:
      "المؤهلات والخبرة والتخصص وخيارات العلاج من العوامل التي تُؤخذ في الحسبان عند اختيار طبيب عظام. بصفته استشارياً خبيراً في العظام والرضوض في أبوظبي، يقدّم الدكتور فراس يعيش استشارة مخصصة لمشكلات العظام وخيارات علاج الورك والركبة.",
  },
  {
    q: "What conditions does an orthopedic specialist treat?",
    qAr: "ما الحالات التي يعالجها أخصائي العظام؟",
    a: "An orthopedic specialist assesses and treats conditions affecting bones, joints, ligaments, and other parts of the musculoskeletal system. Treatment will be based on the diagnosis and the patient's specific needs.",
    aAr:
      "يقيّم أخصائي العظام ويعالج حالات تصيب العظام والمفاصل والأربطة وأجزاء أخرى من الجهاز العضلي الهيكلي. يعتمد العلاج على التشخيص واحتياجات المريض.",
  },
  {
    q: "Does Dr. Feras Ya'ish perform robotic joint replacement?",
    qAr: "هل يجري الدكتور فراس يعيش استبدال المفصل بمساعدة الروبوت؟",
    a: "Yes, Dr. Feras Ya'ish has 25+ years of experience treating patients for joint replacements and performs a robotic-assisted surgical approach when clinically needed. Appropriateness is at the discretion of patient status and evaluation.",
    aAr:
      "نعم، لدى الدكتور فراس يعيش خبرة تزيد على 25 عاماً في استبدال المفاصل، ويجري نهجاً بمساعدة الروبوت عند الحاجة السريرية. تعتمد الملاءمة على حالة المريض والتقييم.",
  },
  {
    q: "Where can I consult Dr. Feras Ya'ish in Abu Dhabi?",
    qAr: "أين يمكنني استشارة الدكتور فراس يعيش في أبوظبي؟",
    a: "The consultation will be at Healthpoint Hospital, Al Qiyada Street, Zayed Sports City, Al Rawdah, Abu Dhabi, UAE, between Gates 1-6. The hospital contact number is +971 800 77.",
    aAr:
      "تكون الاستشارة في مستشفى هيلث بوينت، شارع القيادة، مدينة زايد الرياضية، الروضة، أبوظبي، الإمارات، بين البوابتين 1–6. رقم التواصل مع المستشفى هو +971 800 77.",
  },
  {
    q: "When should I consider hip or knee replacement surgery?",
    qAr: "متى أفكر في جراحة استبدال الورك أو الركبة؟",
    a: "You should consider hip or knee replacement surgery if joint damage or arthritis has caused long-term pain and affected your ability to do everyday tasks. It may be worth considering, especially if other treatments have not been effective. An orthopedic consultation can help determine suitable options.",
    aAr:
      "فكّر في استبدال الورك أو الركبة إذا سبب تلف المفصل أو الخشونة ألماً طويل الأمد وأثر في قدرتك على أداء المهام اليومية، خصوصاً إذا لم تنجح علاجات أخرى. تساعد استشارة العظام على تحديد الخيارات المناسبة.",
  },
];

export const abuLandingCopy = {
  en: {
    eyebrow: "Consultant Trauma & Orthopaedics",
    h1: "Expert Orthopedic Doctor in Abu Dhabi",
    lead: "Dr. Feras Ya'ish is a Consultant Trauma and Orthopedic doctor in Abu Dhabi, UAE who has also been involved in complex reconstructive procedures, Robotic-assisted Joint Replacement, Hip and Knee Replacement and Orthopaedic Trauma care.",
    heroP2:
      "Have a personal evaluation of joint pain, mobility issues or an orthopedic injury and understand the treatment options based on your condition and your goals.",
    requestAppt: "Request an appointment ↗",
    exploreTreatments: "Explore treatments ↓",
    pill1: "✓ 25+ years' experience",
    pill2: "✓ 4,500+ joint arthroplasties",
    pill3: "✓ Hip & knee expertise",
    portraitCaption: "Consultant Trauma and Orthopaedic Surgeon · Abu Dhabi",
    stat1: "Joint replacement",
    stat1s: "Hip and knee procedures",
    stat2: "Robotic-assisted surgery",
    stat2s: "Technology-supported planning",
    stat3: "Patient-specific options",
    stat3s: "Individualized assessment",
    stat4: "Trauma & reconstruction",
    stat4s: "Complex orthopaedic care",
    visualBig: "Experience guided by individual needs.",
    visualP: "Orthopaedic assessment, clear treatment discussions, and a plan shaped around the patient.",
    aboutEyebrow: "About the doctor",
    aboutH2: "Meet Dr. Feras Ya'ish, Consultant Trauma & Orthopaedic Surgeon in Abu Dhabi",
    aboutP1:
      "Dr. Feras Ya'ish is a Consultant Trauma and Orthopedics surgeon in Abu Dhabi with over 25 years' experience in Orthopedics and Trauma. He specializes in complex surgeries including joint replacements, hip and knee surgery, knee ligament reconstruction, sports related traumas, robotic-assisted total replacement surgery and reconstructive surgery.",
    aboutP2:
      "He has performed over 4,500 joint arthroplasty surgeries and procedures and has been involved in orthopaedic education and surgical training. As an expert orthopedic consultant, he looks at your symptoms, medical history, exam findings, and functional goals to determine appropriate options.",
    aboutP3:
      "Patients seeking an orthopedic surgeon in Abu Dhabi will be able to talk about any ongoing joint pain, mobility issues, prior surgery, or injury, and determine if any additional tests or care might be beneficial.",
    check1: "Assessment of hip and knee conditions",
    check2: "Discussion of surgical and non-surgical options where appropriate",
    check3: "Explanation of expected recovery and rehabilitation",
    viewTreatments: "View all treatments →",
    areasEyebrow: "Areas of expertise",
    areasH2: "Orthopedic doctor in Abu Dhabi for Hip and Knee Conditions",
    areasIntro:
      "Joint pain and mobility issues may be caused by various factors. Treatment will be based on the diagnosis, severity of joint damage, general health, and patient's expectations. Check out some of Dr. Ya'ish's treatment areas below.",
    quote: "“The right treatment begins with understanding the person, not only the joint.”",
    careEyebrow: "Patient-centred care",
    careH2: "A Personalized Approach to Orthopedic Treatment",
    careIntro:
      "When selecting an expert orthopedic doctor in Abu Dhabi, it is essential to make sure that you know what your diagnosis is, the choices that are available, and what each option might entail. Treatment should not be based solely on a procedure, but rather on a clinical evaluation.",
    helpEyebrow: "Know when to seek help",
    helpH2: "When Should You Consult an Orthopedic Surgeon in Abu Dhabi?",
    helpIntro:
      "If symptoms continue, are affecting mobility or affecting daily activities, an assessment by an orthopedic specialist in Abu Dhabi can be helpful.",
    urgentNote:
      "Sudden severe pain after an injury, a visibly deformed joint, or a hot, swollen joint accompanied by fever may require urgent medical attention.",
    galleryEyebrow: "Practice & teaching",
    galleryH2: "Clinical Practice Gallery",
    galleryIntro:
      "Selected photographs chosen from the clinic, theatre, and orthopedic teaching environment to illustrate Dr. Feras Ya'ish's practice and education work as a specialist orthopedic doctor in Abu Dhabi, UAE.",
    faqEyebrow: "Patient information",
    faqH2: "Frequently Asked Questions",
    faqIntro: "Answers to common questions about orthopaedic consultations and treatment options.",
  },
  ar: {
    eyebrow: "استشاري جراحة الحوادث والعظام",
    h1: "طبيب عظام خبير في أبوظبي",
    lead: "الدكتور فراس يعيش استشاري جراحة الحوادث والعظام في أبوظبي، الإمارات، وله مشاركة في الإجراءات الترميمية المعقدة واستبدال المفاصل بمساعدة الروبوت واستبدال الورك والركبة ورعاية رضوض العظام.",
    heroP2:
      "احصل على تقييم شخصي لألم المفصل أو مشكلات الحركة أو إصابة عظمية، وافهم خيارات العلاج وفق حالتك وأهدافك.",
    requestAppt: "طلب موعد ↗",
    exploreTreatments: "استكشف العلاجات ↓",
    pill1: "✓ خبرة أكثر من 25 عاماً",
    pill2: "✓ أكثر من 4,500 استبدال مفصل",
    pill3: "✓ خبرة في الورك والركبة",
    portraitCaption: "استشاري جراحة الحوادث والعظام · أبوظبي",
    stat1: "استبدال المفصل",
    stat1s: "إجراءات الورك والركبة",
    stat2: "جراحة بمساعدة الروبوت",
    stat2s: "تخطيط مدعوم بالتقنية",
    stat3: "خيارات مخصصة للمريض",
    stat3s: "تقييم فردي",
    stat4: "الرضوض وإعادة البناء",
    stat4s: "رعاية عظام معقدة",
    visualBig: "خبرة موجّهة باحتياجات الفرد.",
    visualP: "تقييم عظمي ومناقشات علاجية واضحة وخطة تُبنى حول المريض.",
    aboutEyebrow: "عن الطبيب",
    aboutH2: "تعرّف على الدكتور فراس يعيش، استشاري جراحة الحوادث والعظام في أبوظبي",
    aboutP1:
      "الدكتور فراس يعيش استشاري جراحة الحوادث والعظام في أبوظبي بخبرة تزيد على 25 عاماً في جراحة العظام والرضوض. يتخصص في الجراحات المعقدة بما في ذلك استبدال المفاصل وجراحة الورك والركبة وإعادة بناء أربطة الركبة ورضوض الرياضة واستبدال المفاصل بمساعدة الروبوت والجراحة الترميمية.",
    aboutP2:
      "أجرى أكثر من 4,500 عملية استبدال مفصل، وشارك في تعليم جراحة العظام والتدريب الجراحي. بصفته استشارياً خبيراً ينظر إلى أعراضك وتاريخك المرضي ونتائج الفحص وأهدافك الوظيفية لتحديد الخيارات المناسبة.",
    aboutP3:
      "يمكن لمن يبحث عن جرّاح عظام في أبوظبي مناقشة ألم المفصل المستمر أو مشكلات الحركة أو جراحة سابقة أو إصابة، ومعرفة ما إذا كانت فحوصات أو رعاية إضافية مفيدة.",
    check1: "تقييم حالات الورك والركبة",
    check2: "مناقشة الخيارات الجراحية وغير الجراحية عند المناسبة",
    check3: "شرح التعافي المتوقع والتأهيل",
    viewTreatments: "عرض كل العلاجات ←",
    areasEyebrow: "مجالات الخبرة",
    areasH2: "طبيب عظام في أبوظبي لحالات الورك والركبة",
    areasIntro:
      "قد تنجم مشكلات ألم المفصل والحركة عن عوامل متعددة. يعتمد العلاج على التشخيص وشدة تلف المفصل والصحة العامة وتوقعات المريض. اطّلع على بعض مجالات علاج الدكتور يعيش أدناه.",
    quote: "«يبدأ العلاج الصحيح بفهم الشخص، لا المفصل وحده.»",
    careEyebrow: "رعاية تتمحور حول المريض",
    careH2: "نهج مخصص لعلاج العظام",
    careIntro:
      "عند اختيار طبيب عظام خبير في أبوظبي، من الضروري أن تعرف تشخيصك والخيارات المتاحة وما قد يتضمنه كل خيار. لا ينبغي أن يعتمد العلاج على الإجراء وحده، بل على تقييم سريري.",
    helpEyebrow: "اعرف متى تطلب المساعدة",
    helpH2: "متى تستشير جرّاح عظام في أبوظبي؟",
    helpIntro:
      "إذا استمرت الأعراض أو أثرت في الحركة أو الأنشطة اليومية، فقد يساعد تقييم أخصائي عظام في أبوظبي.",
    urgentNote:
      "الألم الشديد المفاجئ بعد إصابة، أو مفصل مشوّه ظاهرياً، أو مفصل ساخن متورّم مع حمى قد يحتاج عناية طبية عاجلة.",
    galleryEyebrow: "الممارسة والتعليم",
    galleryH2: "معرض الممارسة السريرية",
    galleryIntro:
      "صور مختارة من العيادة وغرفة العمليات وبيئة تعليم العظام لتوضيح ممارسة الدكتور فراس يعيش وعمله التعليمي كطبيب عظام متخصص في أبوظبي، الإمارات.",
    faqEyebrow: "معلومات للمرضى",
    faqH2: "الأسئلة الشائعة",
    faqIntro: "إجابات عن أسئلة شائعة حول استشارات العظام وخيارات العلاج.",
  },
} as const;
