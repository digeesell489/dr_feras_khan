export type EducationKind = "video" | "article";

export type EducationSection = {
  h2: string;
  h2Ar: string;
  paragraphs: string[];
  paragraphsAr: string[];
};

export type EducationRelatedLink = {
  href: string;
  label: string;
  labelAr: string;
};

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
  /** Optional Arabic document title for `locale === "ar"`. */
  seoTitleAr?: string;
  /** Optional meta description override for generateMetadata. */
  seoDescription?: string;
  /** Optional in-article H2 for keyword placement (legacy single H2). */
  sectionH2?: string;
  content: string[];
  contentAr: string[];
  /** Multi-H2 body sections (preferred for content.thin expansions). */
  sections?: EducationSection[];
  relatedCare?: EducationRelatedLink[];
  videoUrl?: string;
};

/**
 * Patient-education guides. Clinical EN prose expanded for content.thin is draft /
 * UNVERIFIED pending medical review by Dr. Ya'ish — no pain-free / guarantee / world-class claims.
 */
export const educationItems: EducationItem[] = [
  {
    id: "robotic",
    kind: "video",
    image: "/images/education/youtube-karima.webp",
    duration: "14:02",
    category: "Featured Clinical Guide",
    categoryAr: "دليل سريري مميز",
    title: "Robotic-Assisted Joint Replacement Explained",
    titleAr: "استبدال المفصل بمساعدة الروبوت — شرح للمرضى",
    body: "What robotic arm guidance and 3D planning mean for hip or knee replacement with Dr. Feras Ya'ish in Abu Dhabi.",
    bodyAr: "ماذا تعني إرشاد ذراع الروبوت والتخطيط ثلاثي الأبعاد لاستبدال الورك أو الركبة مع الدكتور فراس يعيش في أبوظبي.",
    seoTitle: "Robotic Surgery Explained in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "شرح جراحة المفاصل الروبوتية في أبوظبي | د. فراس يعيش",
    seoDescription:
      "Robotic-assisted joint replacement explained for patients in Abu Dhabi — planning, theatre guidance, and consultation with Dr. Feras Ya'ish.",
    content: [
      "Robotic-assisted joint replacement in Abu Dhabi is a planning and guidance tool used during hip or knee arthroplasty. It does not replace the surgeon’s judgment; it helps map bone anatomy and set haptic boundaries before bone cuts are made.",
      "Patients often ask whether “robotic” means a machine operates alone. In this practice the consultant remains in control throughout. The system supports alignment targets and soft-tissue assessment that were defined in the pre-operative plan.",
    ],
    contentAr: [
      "استبدال المفصل بمساعدة الروبوت في أبوظبي أداة تخطيط وإرشاد أثناء رأب الورك أو الركبة. لا تحل محل حكم الجرّاح؛ بل تساعد على رسم تشريح العظم ووضع حدود لمسية قبل قطع العظم.",
      "يسأل المرضى غالباً إن كان «الروبوت» يعمل وحده. في هذه الممارسة يبقى الاستشاري مسيطراً طوال الوقت. يدعم النظام أهداف المحاذاة وتقييم الأنسجة الرخوة وفق الخطة قبل الجراحة.",
    ],
    sections: [
      {
        h2: "What Robotic-Assisted Joint Replacement Means for Patients",
        h2Ar: "ماذا يعني استبدال المفصل بمساعدة الروبوت للمرضى",
        paragraphs: [
          "Robotic platforms used in joint replacement typically combine a three-dimensional plan from CT or intra-operative registration with a robotic arm that constrains saw or burr motion inside planned envelopes. The goal is reproducible implant positioning relative to your anatomy and the surgeon’s alignment philosophy.",
          "It is educational to separate marketing language from theatre reality: robotics is one modality alongside conventional jigs and patient-specific cutting guides. Suitability depends on deformity, prior surgery, bone quality, and the reconstruction goals discussed in clinic.",
        ],
        paragraphsAr: [
          "تجمع المنصات الروبوتية عادة خطة ثلاثية الأبعاد من المقطعي أو التسجيل أثناء العملية مع ذراع تقيّد حركة المنشار ضمن حدود مخططة. الهدف هو وضع الزرعة بشكل قابل للتكرار وفق تشريحك وفلسفة المحاذاة.",
          "من المفيد فصل لغة التسويق عن واقع غرفة العمليات: الروبوت أسلوب واحد إلى جانب القوالب التقليدية والأدلة المخصصة للمريض. تعتمد الملاءمة على التشوه والجراحة السابقة وجودة العظم وأهداف إعادة البناء.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "This guide is for adults considering primary hip or knee replacement who want a plain-language overview of robotic assistance before a consultation in Abu Dhabi. It is also useful for patients comparing robotic arthroplasty with conventional or patient-specific approaches.",
          "It is not a substitute for examination, imaging review, or a personalised operative plan. Complex revision cases and infection work-ups follow different pathways.",
        ],
        paragraphsAr: [
          "هذا الدليل للبالغين الذين يفكرون في استبدال أولي للورك أو الركبة ويرغبون بشرح مبسّط للمساعدة الروبوتية قبل استشارة في أبوظبي. ويفيد أيضاً من يقارن الأسلوب الروبوتي مع التقليدي أو المخصص للمريض.",
          "ليس بديلاً عن الفحص ومراجعة الصور والخطة الجراحية الفردية. حالات المراجعة المعقدة وتقييم العدوى تتبع مسارات مختلفة.",
        ],
      },
      {
        h2: "How Care Is Planned in Abu Dhabi",
        h2Ar: "كيف تُخطَّط الرعاية في أبوظبي",
        paragraphs: [
          "Planning usually starts with history, examination, and weight-bearing radiographs. When robotic assistance is considered, additional CT planning may be arranged so the team can build a bone model and propose component sizes and targets before theatre.",
          "At Healthpoint Hospital in Abu Dhabi, Dr. Feras Ya'ish reviews whether robotic guidance, patient-specific blocks, or conventional instrumentation best fits the anatomy and goals. The modality is chosen for accuracy and soft-tissue balance — not as a default for every case.",
        ],
        paragraphsAr: [
          "يبدأ التخطيط عادة بالتاريخ والفحص وأشعة تحمل الوزن. عند دراسة المساعدة الروبوتية قد يُرتَّب تخطيط مقطعي لبناء نموذج عظمي واقتراح أحجام ومواضع قبل غرفة العمليات.",
          "في مستشفى هيلث بوينت بأبوظبي يراجع الدكتور فراس يعيش إن كان الإرشاد الروبوتي أو الكتل المخصصة أو الأدوات التقليدية أنسب للتشريح والأهداف. يُختار الأسلوب للدقة وتوازن الأنسجة لا كخيار افتراضي لكل حالة.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Recovery after robotic-assisted replacement still follows the same biological healing timeline as other modern arthroplasty pathways: early mobilisation with physiotherapy, wound care, and gradual return to walking and daily tasks.",
          "Milestones vary with fitness, other joints, and whether one or both sides are treated. Clinic follow-up checks wound healing, radiographs, and functional progress. Ask about activity goals that matter to you — prayer positions, desk work, or travel — so expectations stay realistic.",
        ],
        paragraphsAr: [
          "يبقى التعافي بعد الاستبدال بمساعدة الروبوت على خط زمني بيولوجي مشابه لمسارات رأب المفصل الحديثة: تحريك مبكر مع العلاج الطبيعي والعناية بالجرح والعودة التدريجية للمشي والمهام اليومية.",
          "تختلف المحطات بحسب اللياقة والمفاصل الأخرى وما إذا كان جانب واحد أو كلا الجانبين. تتابع العيادة الجرح والأشعة والتقدم الوظيفي. اسأل عن أهداف النشاط المهمة لك لتبقى التوقعات واقعية.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Useful questions include: Is robotic assistance recommended for my anatomy? What imaging is required beforehand? How does the plan change if registration or soft-tissue findings differ in theatre? What rehabilitation timeline is typical for my work and home setup?",
          "Also ask how robotic joint replacement relates to alternatives such as patient-specific guides if CT planning is already part of your pathway.",
        ],
        paragraphsAr: [
          "أسئلة مفيدة: هل تُوصى المساعدة الروبوتية لتشريحي؟ ما الصور المطلوبة مسبقاً؟ كيف تتغير الخطة إذا اختلف التسجيل أو الأنسجة في غرفة العمليات؟ ما جدول التأهيل المناسب لعملي ومنزلي؟",
          "واسأل أيضاً عن علاقة الاستبدال الروبوتي بالبدائل مثل الأدلة المخصصة إذا كان التخطيط المقطعي جزءاً من مسارك.",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "For procedure-level detail, see robotic arthroplasty treatment information and the education guide comparing robotic and conventional replacement. Consultations and surgery are arranged at Healthpoint Hospital, Zayed Sports City, Abu Dhabi.",
        ],
        paragraphsAr: [
          "لتفاصيل الإجراء راجع معلومات علاج رأب المفصل الروبوتي ودليل المقارنة بين الروبوتي والتقليدي. تُنسَّق الاستشارات والجراحة في مستشفى هيلث بوينت، مدينة زايد الرياضية، أبوظبي.",
        ],
      },
    ],
    relatedCare: [
      { href: "/treatments/robotic-arthroplasty", label: "Robotic arthroplasty treatment", labelAr: "علاج رأب المفصل الروبوتي" },
      {
        href: "/patient-education/robotic-vs-conventional",
        label: "Robotic vs conventional overview",
        labelAr: "نظرة على الروبوتي مقابل التقليدي",
      },
    ],
  },
  {
    id: "psi",
    kind: "video",
    image: "/images/education/linkedin-khalifa.webp",
    duration: "3:40",
    category: "Planning",
    categoryAr: "التخطيط",
    title: "Patient-Specific Knee Implant Planning (PSI)",
    titleAr: "تخطيط زرعة الركبة المخصصة للمريض (PSI)",
    body: "How CT-based guides and patient-specific blocks are used for knee replacement planning with Dr. Feras Ya'ish in Abu Dhabi.",
    bodyAr: "كيف تُستخدم الأدلة المبنية على المقطعي والكتل المخصصة لتخطيط استبدال الركبة مع الدكتور فراس يعيش في أبوظبي.",
    seoTitle: "PSI Knee Planning Guide in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "دليل تخطيط زرعة الركبة المخصصة في أبوظبي | د. فراس يعيش",
    seoDescription:
      "Patient-specific implant planning explained. How CT-based guides shape knee surgery decisions with Dr. Feras Ya'ish in Abu Dhabi at Healthpoint.",
    content: [
      "Patient-specific implant (PSI) planning uses your CT anatomy to design cutting guides that transfer a three-dimensional knee replacement plan into theatre. In Abu Dhabi, this approach is discussed when anatomy or alignment goals benefit from a personalised pre-operative model.",
      "PSI guides are not the same as a robotic arm. They are single-use blocks matched to your bone surfaces after planning; the surgeon still performs the procedure and can adjust if soft-tissue findings differ.",
    ],
    contentAr: [
      "يستخدم تخطيط الزرعة المخصصة للمريض (PSI) تشريحك المقطعي لتصميم أدلة قطع تنقل خطة استبدال الركبة ثلاثية الأبعاد إلى غرفة العمليات. في أبوظبي يُناقش هذا الأسلوب عندما يستفيد التشريح أو أهداف المحاذاة من نموذج فردي قبل الجراحة.",
      "أدلة PSI ليست ذراعاً روبوتياً. هي كتل لمرة واحدة مطابقة لأسطح عظمك بعد التخطيط؛ ويبقى الجرّاح من ينفّذ الإجراء ويمكنه التعديل إذا اختلفت الأنسجة الرخوة.",
    ],
    sections: [
      {
        h2: "What Patient-Specific Knee Implant Planning Means for Patients",
        h2Ar: "ماذا يعني تخطيط زرعة الركبة المخصصة للمرضى",
        paragraphs: [
          "PSI planning starts with imaging that maps your femur and tibia in three dimensions. Engineers and the surgical team use that model to propose component size, rotation, and cut orientation, then manufacture guides that seat on your bone in a unique orientation.",
          "The educational point is accuracy of plan transfer: the guide aims to reproduce agreed bony landmarks. Soft-tissue balance, implant choice, and whether partial or total replacement is appropriate remain clinical decisions.",
        ],
        paragraphsAr: [
          "يبدأ تخطيط PSI بتصوير يرسم الفخذ والظنبوب بثلاثة أبعاد. يستخدم الفريق النموذج لاقتراح الحجم والدوران واتجاه القطع ثم يصنع أدلة تجلس على عظمك بتوجيه فريد.",
          "النقطة التثقيفية هي دقة نقل الخطة: يهدف الدليل إلى إعادة إنتاج المعالم العظمية المتفق عليها. أما توازن الأنسجة واختيار الزرعة والاستبدال الجزئي أو الكامل فتبقى قرارات سريرية.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Adults exploring total or partial knee replacement who have been offered CT-based patient-specific planning, or who want to understand how PSI differs from robotic haptics and conventional metal jigs.",
          "Patients with prior metalwork, severe deformity, or revision needs may require a different planning pathway — that is clarified in clinic after imaging review.",
        ],
        paragraphsAr: [
          "البالغون الذين يدرسون استبدال ركبة كلياً أو جزئياً وعُرض عليهم تخطيط مخصص مبني على المقطعي، أو من يريدون فهم فرق PSI عن اللمس الروبوتي والقوالب المعدنية التقليدية.",
          "قد يحتاج من لديهم معدات سابقة أو تشوهاً شديداً أو مراجعة مساراً تخطيطياً مختلفاً — يُوضَّح ذلك في العيادة بعد مراجعة الصور.",
        ],
      },
      {
        h2: "How Patient-Specific Implant Planning Works in Abu Dhabi",
        h2Ar: "كيف يعمل تخطيط الزرعة المخصصة في أبوظبي",
        paragraphs: [
          "After clinical assessment, a planning CT may be scheduled. The dataset is used to build the model and guides; manufacturing and delivery timelines are confirmed before the theatre date so guides arrive sterilised and labelled for your case.",
          "On the day of surgery the guides seat on prepared bone surfaces. Dr. Feras Ya'ish verifies fit and alignment against the plan, then proceeds with implant trialling and fixation. Care is delivered at Healthpoint Hospital, Zayed Sports City.",
        ],
        paragraphsAr: [
          "بعد التقييم السريري قد يُجدول مقطعي تخطيطي. يُستخدم لبناء النموذج والأدلة؛ ويُؤكَّد جدول التصنيع قبل موعد غرفة العمليات حتى تصل الأدلة معقّمة وموسومة لحالتك.",
          "يوم الجراحة تجلس الأدلة على أسطح العظم المحضَّرة. يتحقق الدكتور فراس يعيش من المطابقة والمحاذاة ثم ينتقل لتجربة الزرعة والتثبيت. تُقدَّم الرعاية في مستشفى هيلث بوينت، مدينة زايد الرياضية.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Pre-operative steps add a CT visit and a short manufacturing window compared with jig-only pathways. Post-operative recovery still centres on physiotherapy, swelling control, and progressive walking — the guide itself does not shorten biology.",
          "Follow-up visits review radiographs and function. Report increasing pain, wound concerns, or calf swelling promptly rather than waiting for a routine appointment.",
        ],
        paragraphsAr: [
          "تضيف الخطوات قبل الجراحة زيارة مقطعي ونافذة تصنيع قصيرة مقارنة بمسارات القوالب وحدها. يبقى التعافي بعد العملية مركزاً على العلاج الطبيعي والتورم والمشي التدريجي — الدليل نفسه لا يختصر البيولوجيا.",
          "تراجع زيارات المتابعة الأشعة والوظيفة. أبلغ عن ألم متزايد أو مشاكل الجرح أو تورم الساق فوراً بدل انتظار الموعد الروتيني.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Ask whether PSI planning is proposed for your knee, what the CT involves, how long guides take to arrive, and when robotic assistance or conventional instrumentation would be preferred instead.",
          "Clarify partial versus total knee candidacy before committing to a planning pathway so imaging and guides match the intended procedure.",
        ],
        paragraphsAr: [
          "اسأل إن كان تخطيط PSI مقترحاً لركبتك، وما يتضمنه المقطعي، ومدة وصول الأدلة، ومتى يُفضَّل الروبوتي أو الأدوات التقليدية بدلاً منه.",
          "وضّح ملاءمة الاستبدال الجزئي مقابل الكامل قبل الالتزام بمسار التخطيط حتى تطابق الصور والأدلة الإجراء المقصود.",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "See patient-specific knee treatment pages and the robotic versus conventional education guide for modality comparisons. Book a consultation to review your imaging with Dr. Ya'ish.",
        ],
        paragraphsAr: [
          "راجع صفحات علاج الركبة المخصصة ودليل الروبوتي مقابل التقليدي للمقارنة. احجز استشارة لمراجعة صورك مع الدكتور يعيش.",
        ],
      },
    ],
    relatedCare: [
      {
        href: "/treatments/patient-specific-knee",
        label: "Patient-specific knee (PSI) treatment",
        labelAr: "علاج الركبة المخصصة للمريض (PSI)",
      },
      {
        href: "/patient-education/robotic-vs-conventional",
        label: "Robotic vs conventional overview",
        labelAr: "نظرة على الروبوتي مقابل التقليدي",
      },
    ],
  },
  {
    id: "knee-recovery",
    kind: "video",
    image: "/images/education/facebook-icjr.webp",
    duration: "5:10",
    category: "Recovery",
    categoryAr: "التعافي",
    title: "Knee Recovery After Joint Surgery",
    titleAr: "تعافي الركبة بعد جراحة المفصل",
    body: "Walking progress, physiotherapy focus, and return-to-daily-life milestones after knee surgery in Abu Dhabi.",
    bodyAr: "تقدم المشي وتركيز العلاج الطبيعي ومحطات العودة للحياة اليومية بعد جراحة الركبة في أبوظبي.",
    seoTitle: "Knee and Joint Recovery in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "تعافي الركبة بعد الجراحة في أبوظبي | الدكتور فراس يعيش",
    seoDescription:
      "Knee and joint recovery in Abu Dhabi — walking, physio & daily milestones. Book with Dr. Feras Ya'ish.",
    content: [
      "Knee recovery after surgery in Abu Dhabi is a staged process: protect the wound, restore extension and safe walking, then rebuild strength for stairs, prayer positions, and work. Timelines are individual; clinic milestones matter more than comparing yourself to another patient’s calendar.",
      "This guide covers common post-operative themes after partial or total knee replacement and related reconstructive procedures. Your written protocol from the surgical and physiotherapy team always takes priority.",
    ],
    contentAr: [
      "تعافي الركبة بعد الجراحة في أبوظبي عملية مرحلية: حماية الجرح، واستعادة الفرد والمشي الآمن، ثم بناء القوة للسلالم وأوضاع الصلاة والعمل. الجداول فردية؛ ومحطات العيادة أهم من مقارنة نفسك بتقويم مريض آخر.",
      "يغطي هذا الدليل محاور شائعة بعد الاستبدال الجزئي أو الكامل وإجراءات إعادة البناء ذات الصلة. بروتوكولك المكتوب من الفريق الجراحي والعلاج الطبيعي له الأولوية دائماً.",
    ],
    sections: [
      {
        h2: "Knee Joint Recovery Milestones in Abu Dhabi",
        h2Ar: "محطات تعافي مفصل الركبة في أبوظبي",
        paragraphs: [
          "Early recovery focuses on swelling control, straightening the knee, and transferring safely with the walking aid prescribed for you. Later phases add endurance, balance, and activity-specific drills.",
          "Pain is expected to change over weeks; sudden severe pain, fever, wound drainage, or calf swelling needs prompt clinical contact rather than waiting for the next routine visit.",
        ],
        paragraphsAr: [
          "يركز التعافي المبكر على التورم وفرد الركبة والانتقال الآمن بالمشي الموصوف. تضيف المراحل اللاحقة التحمل والتوازن وتمارين خاصة بالنشاط.",
          "يُتوقع أن يتغير الألم على أسابيع؛ الألم الشديد المفاجئ أو الحمى أو نزيز الجرح أو تورم الساق يستدعي تواصلاً سريرياً فورياً.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Patients preparing for or recovering from knee joint surgery with Dr. Feras Ya'ish in Abu Dhabi, including total and partial replacement pathways, who want a plain overview of typical milestones.",
          "Ligament reconstruction recovery (for example ACL) has different criteria — see the ACL recovery guide if that is your procedure.",
        ],
        paragraphsAr: [
          "المرضى الذين يستعدون لجراحة مفصل الركبة أو يتعافون منها مع الدكتور فراس يعيش في أبوظبي، بما في ذلك مسارات الاستبدال الكلي والجزئي، ويرغبون بنظرة مبسطة على المحطات المعتادة.",
          "تعافي إعادة بناء الأربطة (مثل الرباط المتصالب) له معايير مختلفة — راجع دليل تعافي الرباط المتصالب إن كان ذلك إجراءك.",
        ],
      },
      {
        h2: "Knee Recovery Milestones in Abu Dhabi",
        h2Ar: "محطات تعافي الركبة في أبوظبي",
        paragraphs: [
          "Typical themes include: day-of and early walking with physiotherapy; progressive range toward functional flexion for sitting and prayer; weaning walking aids when gait is safe; and graded return to desk work or driving only when your team confirms control and medication rules allow it.",
          "Care is coordinated at Healthpoint Hospital, Zayed Sports City. Bring questions about home stairs, bathroom setup, and caregiver support to pre-operative planning so the first weeks at home are safer.",
        ],
        paragraphsAr: [
          "تشمل المحاور المعتادة: المشي المبكر مع العلاج الطبيعي؛ ومدى حركي تدريجي للجلوس والصلاة؛ وتقليل وسائل المساعدة عندما يكون المشي آمناً؛ والعودة المتدرجة للعمل المكتبي أو القيادة عندما يؤكد الفريق ذلك.",
          "تُنسَّق الرعاية في مستشفى هيلث بوينت، مدينة زايد الرياضية. اطرح أسئلة عن السلالم والحمام والدعم في المنزل أثناء التخطيط قبل الجراحة.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Swelling and stiffness often fluctuate; icing, elevation guidance, and prescribed exercises help more than pushing through sharp pain. Sleep and appetite usually improve as night pain settles.",
          "Longer-term strength work continues after the wound has healed. Outdoor walking distance and recreational goals are rebuilt gradually with physiotherapy rather than sudden long hikes.",
        ],
        paragraphsAr: [
          "غالباً ما يتقلب التورم والتيبس؛ والثلج والرفع والتمارين الموصوفة تساعد أكثر من تجاوز ألم حاد. يتحسن النوم والشهية عادة مع هدوء ألم الليل.",
          "يستمر عمل القوة طويل الأمد بعد التئام الجرح. تُبنى مسافات المشي الخارجية والأهداف الترفيهية تدريجياً مع العلاج الطبيعي.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Ask which walking aid you will use, when wound review is scheduled, which warning signs need same-day contact, and how physiotherapy sessions are arranged after discharge in Abu Dhabi.",
          "Confirm medication plans for pain and clot prevention as prescribed for your case, and whether your home environment needs temporary equipment.",
        ],
        paragraphsAr: [
          "اسأل عن وسيلة المشي التي ستستخدمها، وموعد مراجعة الجرح، وعلامات الإنذار التي تستدعي تواصلاً في نفس اليوم، وكيف تُرتَّب جلسات العلاج الطبيعي بعد الخروج في أبوظبي.",
          "أكّد خطة الأدوية للألم والوقاية من الجلطات كما وُصفت لحالتك، وما إذا كان المنزل يحتاج معدات مؤقتة.",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "Explore total and partial knee treatment pages and the patient-care pathway for hospital-day and recovery logistics. Discuss your personal milestones in clinic with Dr. Ya'ish.",
        ],
        paragraphsAr: [
          "استكشف صفحات علاج الركبة الكلي والجزئي ومسار رعاية المريض لمنطق يوم المستشفى والتعافي. ناقش محطاتك الشخصية في العيادة مع الدكتور يعيش.",
        ],
      },
    ],
    relatedCare: [
      { href: "/treatments/total-knee-replacement", label: "Total knee replacement", labelAr: "استبدال الركبة الكامل" },
      { href: "/treatments/partial-knee", label: "Partial knee replacement", labelAr: "استبدال الركبة الجزئي" },
      { href: "/patient-care", label: "Patient care & recovery pathway", labelAr: "مسار رعاية المريض والتعافي" },
    ],
  },
  {
    id: "acl-recovery",
    kind: "video",
    image: "/images/knee-mechanics.webp",
    duration: "4:55",
    category: "Knee Sports Injuries",
    categoryAr: "إصابات الركبة الرياضية",
    title: "ACL Recovery After Reconstruction in Abu Dhabi",
    titleAr: "التعافي بعد إعادة بناء الرباط المتصالب — ACL recovery",
    body: "Recovery after ACL reconstruction. Educational guidance on brace use, strength milestones and criteria-based return to pivoting activities.",
    bodyAr: "التعافي بعد إعادة بناء الرباط المتصالب: إرشاد تثقيفي حول الدعامة ومحطات القوة ومعايير العودة للأنشطة المحورية.",
    seoTitle: "Recovery After ACL Surgery in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "التعافي بعد جراحة الرباط المتصالب في أبوظبي | د. فراس يعيش",
    seoDescription:
      "ACL recovery in Abu Dhabi: brace, strength, return-to-sport criteria. Learn more with Dr. Ya'ish.",
    sectionH2: "ACL Recovery Milestones in Abu Dhabi",
    content: [
      "ACL recovery in Abu Dhabi after reconstruction focuses on protecting the graft while restoring extension, quadriceps activation, and safe walking patterns in the early weeks.",
      "Running and pivoting are not calendar-based alone. Strength symmetry, hop testing, and sport-specific control are reviewed before return-to-play discussions.",
    ],
    contentAr: [
      "ACL recovery في أبوظبي بعد إعادة بناء الرباط المتصالب يركز على حماية الطعم مع استعادة الفرد وتنشيط الرباعية وأنماط مشي آمنة في الأسابيع الأولى.",
      "الجري والدوران ليسا وفق التقويم وحده. تُراجع تماثل القوة واختبارات القفز والتحكم الخاص بالرياضة قبل مناقشة العودة للعب.",
    ],
    sections: [
      {
        h2: "What ACL Recovery Means for Patients",
        h2Ar: "ماذا يعني تعافي الرباط المتصالب للمرضى",
        paragraphs: [
          "Anterior cruciate ligament (ACL) reconstruction replaces a torn ligament with a graft. Early physiotherapy protects that graft while you regain straightening and basic strength. Swelling control and gait quality matter as much as “how far you can bend.”",
          "Associated meniscal repair or cartilage work can slow early flexion goals. Your protocol is written for the reconstruction that was performed, not a generic social-media timeline.",
        ],
        paragraphsAr: [
          "تعيد إعادة بناء الرباط المتصالب الأمامي ربطاً ممزقاً بطعم. يحمي العلاج الطبيعي المبكر الطعم بينما تستعيد الفرد والقوة الأساسية. التحكم بالتورم وجودة المشي مهمان بقدر «مدى الثني».",
          "قد يبطئ إصلاح الهلالة أو عمل الغضروف أهداف الثني المبكرة. تُكتب بروتوكولك لما أُجري فعلاً لا وفق جدول وسائل التواصل.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Athletes and active adults recovering from ACL reconstruction with Dr. Feras Ya'ish in Abu Dhabi, and patients preparing for surgery who want criteria-based expectations for brace use and return to pivoting sport.",
          "If your injury also involves multi-ligament damage, the pathway is more individualised — clarify that in clinic.",
        ],
        paragraphsAr: [
          "الرياضيون والبالغون النشطون الذين يتعافون من إعادة بناء الرباط المتصالب مع الدكتور فراس يعيش في أبوظبي، والمرضى الذين يستعدون للجراحة ويرغبون بتوقعات مبنية على المعايير للدعامة والعودة للرياضة المحورية.",
          "إذا شملت الإصابة أربطة متعددة فالمسار أكثر فردية — وضّح ذلك في العيادة.",
        ],
      },
      {
        h2: "ACL Recovery Milestones in Abu Dhabi",
        h2Ar: "محطات تعافي الرباط المتصالب في أبوظبي",
        paragraphs: [
          "Early milestones often include full extension, controlled swelling, and confident walking. Mid-phase work builds strength and movement quality. Late-phase testing may include hop batteries and change-of-direction drills before sport clearance conversations.",
          "Brace use, if prescribed, follows your surgeon’s preference for graft type and concomitant repairs. Do not discard a brace early because a teammate recovered without one.",
        ],
        paragraphsAr: [
          "غالباً ما تشمل المحطات المبكرة الفرد الكامل والتورم المضبوط والمشي الواثق. يبني منتصف المرحلة القوة وجودة الحركة. قد تشمل المرحلة المتأخرة بطاريات قفز وتمارين تغيير الاتجاه قبل مناقشة العودة للرياضة.",
          "استخدام الدعامة إن وُصفت يتبع تفضيل الجرّاح لنوع الطعم والإصلاحات المصاحبة. لا تتخلَّ عن الدعامة مبكراً لأن زميلاً تعافى بدونها.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Progress is rarely linear. Fatigue, minor setbacks, and sport-season pressure are common. Communicate honestly with physiotherapy so load can be adjusted without guessing.",
          "Return-to-sport is a shared decision based on testing and confidence, not a fixed number of months alone. Some patients need longer strength work before pivoting cuts feel trustworthy.",
        ],
        paragraphsAr: [
          "نادراً ما يكون التقدم خطياً. التعب والانتكاسات البسيطة وضغط الموسم شائعة. تواصل بصدق مع العلاج الطبيعي لتعديل الحمل دون تخمين.",
          "العودة للرياضة قرار مشترك مبني على الاختبار والثقة لا على عدد أشهر ثابت وحده. يحتاج بعض المرضى عملاً أطول للقوة قبل أن تبدو القطعات المحورية موثوقة.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Ask about graft choice implications for rehab, brace duration, when jogging is appropriate, and which objective tests will guide return-to-play discussions for your sport in Abu Dhabi.",
          "Clarify how meniscal repair changes early flexion and weight-bearing so home exercises stay aligned with theatre findings.",
        ],
        paragraphsAr: [
          "اسأل عن انعكاسات اختيار الطعم على التأهيل، ومدة الدعامة، ومتى يناسب الهرولة، وأي اختبارات موضوعية ستوجّه مناقشة العودة للعب لرياضتك في أبوظبي.",
          "وضّح كيف يغيّر إصلاح الهلالة الثني المبكر وتحمل الوزن حتى تبقى تمارين المنزل متوافقة مع نتائج غرفة العمليات.",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "See ligament reconstruction treatment information, the knee sports injuries education guide, and sports knee injury condition pages for related pathways at Healthpoint.",
        ],
        paragraphsAr: [
          "راجع معلومات علاج إعادة بناء الأربطة ودليل إصابات الركبة الرياضية وصفحات حالة إصابة الركبة الرياضية للمسارات ذات الصلة في هيلث بوينت.",
        ],
      },
      {
        h2: "ACL Surgery and Ligament Reconstruction Links",
        h2Ar: "روابط جراحة الرباط المتصالب وإعادة بناء الأربطة",
        paragraphs: [
          "Surgical detail for ACL and multi-ligament reconstruction sits on the knee ligament reconstruction treatment page. Use this guide for brace, strength, and return-to-sport criteria after ACL reconstruction in Abu Dhabi.",
        ],
        paragraphsAr: [
          "التفاصيل الجراحية لإعادة بناء الرباط المتصالب ACL والإصابات متعددة الأربطة موجودة في صفحة علاج إعادة بناء أربطة الركبة. استخدم هذا الدليل للدعامة والقوة ومعايير العودة للرياضة بعد إعادة البناء في أبوظبي.",
        ],
      },
    ],
    relatedCare: [
      {
        href: "/treatments/ligament-reconstruction",
        label: "Knee ligament reconstruction, including ACL",
        labelAr: "إعادة بناء أربطة الركبة بما فيها الرباط المتصالب",
      },
      {
        href: "/patient-education/knee-sports-injuries",
        label: "Understanding knee sports injuries",
        labelAr: "فهم إصابات الركبة الرياضية",
      },
      {
        href: "/conditions/sports-knee-injury",
        label: "Sports knee injury care",
        labelAr: "رعاية إصابة الركبة الرياضية",
      },
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
    seoTitle: "Robotic vs Conventional in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "الروبوت مقابل الاستبدال التقليدي في أبوظبي | د. فراس يعيش",
    seoDescription:
      "Robotic vs conventional joint replacement in Abu Dhabi — how modalities differ and how Dr. Feras Ya'ish chooses a plan at Healthpoint.",
    content: [
      "Robotic vs conventional joint replacement decisions in Abu Dhabi start with your anatomy, prior surgery, and functional goals — not with a single technology preference.",
      "Conventional jigs, patient-specific guides, and robotic haptics each transfer a plan into bone cuts differently. None replaces surgeon judgment or soft-tissue assessment in theatre.",
    ],
    contentAr: [
      "تبدأ قرارات الاستبدال الروبوتي مقابل التقليدي في أبوظبي بتشريحك والجراحة السابقة وأهدافك الوظيفية — لا بتفضيل تقني واحد.",
      "تنقل القوالب التقليدية والأدلة المخصصة واللمس الروبوتي الخطة إلى قطع العظم بطرق مختلفة. ولا يحل أي منها محل حكم الجرّاح أو تقييم الأنسجة في غرفة العمليات.",
    ],
    sections: [
      {
        h2: "What Robotic vs Conventional Joint Replacement Means for Patients",
        h2Ar: "ماذا يعني الاستبدال الروبوتي مقابل التقليدي للمرضى",
        paragraphs: [
          "Conventional instrumentation uses standard jigs referenced to bony landmarks. Patient-specific guides bring a CT-based plan to theatre without a robotic arm. Robotic systems add real-time boundaries and balance data during the procedure.",
          "Understanding the differences helps you ask better clinic questions. Superiority claims for one modality in every knee or hip are not how this practice selects tools.",
        ],
        paragraphsAr: [
          "تستخدم الأدوات التقليدية قوالب قياسية مرتبطة بمعالم عظمية. وتنقل الأدلة المخصصة خطة مقطعية إلى غرفة العمليات دون ذراع روبوتي. وتضيف الأنظمة الروبوتية حدوداً وبيانات توازن لحظية أثناء الإجراء.",
          "فهم الفروق يساعدك على طرح أسئلة أفضل. وادعاءات تفوق أسلوب واحد لكل ركبة أو ورك ليست طريقة اختيار الأدوات هنا.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Patients comparing robotic-assisted and conventional replacement options before consultation with Dr. Feras Ya'ish in Abu Dhabi, including those already offered CT planning or PSI guides.",
          "Revision and infection cases need separate work-up; this overview focuses on primary modality education.",
        ],
        paragraphsAr: [
          "المرضى الذين يقارنون خيارات الاستبدال بمساعدة الروبوت والتقليدي قبل استشارة الدكتور فراس يعيش في أبوظبي، بما في ذلك من عُرض عليهم تخطيط مقطعي أو أدلة PSI.",
          "حالات المراجعة والعدوى تحتاج تقييماً منفصلاً؛ تركز هذه النظرة على تثقيف الأسلوب الأولي.",
        ],
      },
      {
        h2: "Robotic-Assisted vs Conventional Replacement in Abu Dhabi",
        h2Ar: "الاستبدال بمساعدة الروبوت مقابل التقليدي في أبوظبي",
        paragraphs: [
          "In clinic, imaging and examination inform whether conventional jigs suffice, whether patient-specific blocks add value, or whether robotic guidance is useful for your deformity and soft-tissue profile.",
          "Alignment philosophy, implant selection, and tissue preservation remain the priorities. Technology is matched to the case after discussion — consultation decides, not a website comparison alone.",
        ],
        paragraphsAr: [
          "في العيادة توجّه الصور والفحص إن كانت القوالب التقليدية كافية، أو إن كانت الكتل المخصصة تضيف قيمة، أو إن كان الإرشاد الروبوتي مفيداً لتشوهك وملف الأنسجة.",
          "تبقى فلسفة المحاذاة واختيار الزرعة والحفاظ على الأنسجة الأولوية. تُطابق التقنية الحالة بعد النقاش — الاستشارة تقرر لا مقارنة الموقع وحدها.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Pre-operative CT adds a planning step when PSI or certain robotic pathways are chosen. Recovery biology after the implant is seated still depends on physiotherapy and wound healing more than which jig system was used.",
          "Ask how follow-up imaging and rehab are scheduled at Healthpoint regardless of modality.",
        ],
        paragraphsAr: [
          "يضيف المقطعي قبل الجراحة خطوة تخطيط عند اختيار PSI أو بعض المسارات الروبوتية. ولا تزال بيولوجيا التعافي بعد تثبيت الزرعة تعتمد على العلاج الطبيعي والتئام الجرح أكثر من نظام القوالب.",
          "اسأل كيف تُجدول صور المتابعة والتأهيل في هيلث بوينت بغض النظر عن الأسلوب.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Which modality fits my anatomy and why? What extra imaging is required? How do you handle intra-operative findings that differ from the plan? How does this choice affect rehab milestones?",
        ],
        paragraphsAr: [
          "أي أسلوب يناسب تشريحي ولماذا؟ ما التصوير الإضافي المطلوب؟ كيف تتعاملون مع نتائج أثناء العملية تختلف عن الخطة؟ كيف يؤثر الاختيار على محطات التأهيل؟",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "Review robotic arthroplasty and patient-specific knee treatment pages, plus the PSI planning education guide, for deeper modality detail.",
        ],
        paragraphsAr: [
          "راجع صفحات علاج رأب المفصل الروبوتي والركبة المخصصة ودليل تخطيط PSI لمزيد من التفصيل.",
        ],
      },
    ],
    relatedCare: [
      { href: "/treatments/robotic-arthroplasty", label: "Robotic joint replacement", labelAr: "استبدال المفصل الروبوتي" },
      {
        href: "/treatments/patient-specific-knee",
        label: "Patient-specific knee replacement",
        labelAr: "استبدال الركبة المخصص للمريض",
      },
      { href: "/patient-education/psi", label: "PSI planning explained", labelAr: "شرح تخطيط PSI" },
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
    seoTitle: "Revision Hip and Knee Surgery Explained | Dr. Feras Ya'ish",
    seoTitleAr: "شرح جراحة مراجعة الورك والركبة | الدكتور فراس يعيش",
    seoDescription:
      "Revision hip and knee surgery explained for patients in Abu Dhabi — when it is considered and how evaluation works with Dr. Feras Ya'ish.",
    content: [
      "Revision hip and knee surgery is considered when a joint replacement becomes painful, loose, unstable, infected, or associated with fracture or bone loss. Education starts with why symptoms appear and what evaluation involves in Abu Dhabi.",
      "This guide outlines common reasons for revision and the work-up pathway. Procedure depth lives on the dedicated revision treatment page.",
    ],
    contentAr: [
      "تُدرس جراحة مراجعة الورك والركبة عندما يصبح استبدال المفصل مؤلماً أو مرتخياً أو غير مستقر أو مصاباً أو مرتبطاً بكسر أو فقدان عظم. يبدأ التثقيف بسبب الأعراض وما يتضمنه التقييم في أبوظبي.",
      "يلخّص هذا الدليل أسباب المراجعة الشائعة ومسار التقييم. وتفاصيل الإجراء في صفحة علاج المراجعة المخصصة.",
    ],
    sections: [
      {
        h2: "What Revision Hip and Knee Surgery Means for Patients",
        h2Ar: "ماذا تعني جراحة مراجعة الورك والركبة للمرضى",
        paragraphs: [
          "Revision means exchanging or reconstructing parts of a prior hip or knee replacement. It can range from isolated liner or head exchange to complex reconstruction with modular stems, augments, or staged infection protocols.",
          "Not every painful replacement needs revision. Soft-tissue problems, referred spine pain, and medical causes are considered before committing to further surgery.",
        ],
        paragraphsAr: [
          "تعني المراجعة استبدال أو إعادة بناء أجزاء من استبدال ورك أو ركبة سابق. وقد تتراوح من تبديل بطانة أو رأس معزول إلى إعادة بناء معقدة بسيقان معيارية أو معززات أو بروتوكولات عدوى مرحلية.",
          "ليست كل زرعة مؤلمة بحاجة لمراجعة. تُدرس مشاكل الأنسجة وألم العمود المحوَّل والأسباب الطبية قبل الالتزام بجراحة إضافية.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Patients with a prior hip or knee replacement who have new pain, instability, or imaging concerns, and referring clinicians seeking a clear overview before sending imaging to Dr. Feras Ya'ish in Abu Dhabi.",
          "Urgent fever, wound drainage, or inability to bear weight after trauma needs urgent assessment rather than waiting for elective education reading.",
        ],
        paragraphsAr: [
          "المرضى الذين لديهم استبدال ورك أو ركبة سابق ويواجهون ألماً جديداً أو عدم استقرار أو ملاحظات تصويرية، والأطباء المحيلون الذين يريدون نظرة واضحة قبل إرسال الصور إلى الدكتور فراس يعيش في أبوظبي.",
          "الحمى العاجلة أو نزيز الجرح أو عدم القدرة على التحميل بعد رضّ يستدعي تقييماً عاجلاً لا انتظار قراءة تثقيفية اختيارية.",
        ],
      },
      {
        h2: "When Revision Hip and Knee Surgery Is Needed in Abu Dhabi",
        h2Ar: "متى تُستطب مراجعة الورك والركبة في أبوظبي",
        paragraphs: [
          "Common indications include aseptic loosening, periprosthetic joint infection, instability or dislocation, progressive bone loss, and periprosthetic fracture. Each pathway starts with history, examination, and serial radiographs.",
          "Work-up often adds blood markers, joint aspiration when infection is possible, and metal-reduction CT. Reconstruction planning follows confirmed diagnosis — not a single clinic visit alone.",
        ],
        paragraphsAr: [
          "تشمل الاستطبابات الشائعة الارتخاء العقيم وعدوى المفصل حول الزرعة وعدم الاستقرار أو الخلع وفقدان العظم التدريجي والكسر حول الزرعة. يبدأ كل مسار بالتاريخ والفحص وأشعة متسلسلة.",
          "غالباً ما يضيف التقييم علامات دموية وبزلاً عند احتمال العدوى ومقطعياً بتقليل المعدن. ويتبع تخطيط إعادة البناء التشخيص المؤكد لا زيارة عيادة واحدة وحدها.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Evaluation can take several steps when infection testing is required. One- or two-stage infection protocols lengthen the pathway compared with aseptic revision.",
          "Recovery after revision is often slower than after primary replacement because soft tissues and bone stock may already be compromised. Physiotherapy goals are set individually.",
        ],
        paragraphsAr: [
          "قد يستغرق التقييم عدة خطوات عند الحاجة لاختبارات العدوى. وبروتوكولات العدوى بمرحلة أو مرحلتين تطيل المسار مقارنة بالمراجعة العقيمة.",
          "غالباً ما يكون التعافي بعد المراجعة أبطأ من الاستبدال الأولي لأن الأنسجة ومخزون العظم قد يكونان متأثرين. تُحدَّد أهداف العلاج الطبيعي فردياً.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "What is the working diagnosis? Which tests are still needed? Is infection reasonably excluded? What reconstruction options fit my bone loss? How should referring physicians submit imaging through the physician gateway?",
        ],
        paragraphsAr: [
          "ما التشخيص العملي؟ ما الاختبارات المتبقية؟ هل استُبعدت العدوى بشكل معقول؟ ما خيارات إعادة البناء المناسبة لفقدان العظم؟ كيف يرسل الأطباء المحيلون الصور عبر بوابة الأطباء؟",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "See revision hip and knee surgery treatment information and failed joint replacement condition pages for pathway detail at Healthpoint, Abu Dhabi.",
        ],
        paragraphsAr: [
          "راجع معلومات علاج مراجعة الورك والركبة وصفحات حالة فشل استبدال المفصل لتفاصيل المسار في هيلث بوينت أبوظبي.",
        ],
      },
    ],
    relatedCare: [
      { href: "/treatments/revision-surgery", label: "Revision hip & knee surgery", labelAr: "جراحة مراجعة الورك والركبة" },
      {
        href: "/conditions/failed-joint-replacement",
        label: "Failed or painful joint replacement",
        labelAr: "فشل أو ألم استبدال المفصل",
      },
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
    seoTitle: "Partial vs Total Knee in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "استبدال ركبة جزئي أم كامل في أبوظبي | الدكتور فراس يعيش",
    seoDescription:
      "Partial vs total knee replacement in Abu Dhabi — how compartment wear and ligaments guide the choice with Dr. Feras Ya'ish.",
    content: [
      "Partial vs total knee replacement choices in Abu Dhabi depend on how many compartments are worn and whether cruciate ligaments remain intact — not on preference for a smaller scar alone.",
      "This education guide summarises candidacy themes. Final recommendations follow examination and weight-bearing imaging with Dr. Feras Ya'ish.",
    ],
    contentAr: [
      "يعتمد الاختيار بين الاستبدال الجزئي والكامل في أبوظبي على عدد الحجرات المتآكلة وسلامة الأربطة المتصالبة — لا على تفضيل ندبة أصغر وحدها.",
      "يلخّص هذا الدليل محاور الملاءمة. وتأتي التوصيات النهائية بعد الفحص وأشعة تحمل الوزن مع الدكتور فراس يعيش.",
    ],
    sections: [
      {
        h2: "What Partial vs Total Knee Replacement Means for Patients",
        h2Ar: "ماذا يعني الاستبدال الجزئي مقابل الكامل للمرضى",
        paragraphs: [
          "Partial (unicompartmental) replacement resurfaces the worn compartment while keeping healthy cartilage and ligaments when criteria are met. Total replacement addresses multi-compartment disease or deformity that cannot be corrected while retaining native ligaments.",
          "Neither option is universally “better.” Matching the procedure to the disease pattern matters more than marketing labels.",
        ],
        paragraphsAr: [
          "يستبدل الاستبدال الجزئي (حيز واحد) الحيز المتآكل مع الإبقاء على الغضروف والأربطة السليمة عند تحقق المعايير. ويعالج الاستبدال الكامل مرض عدة حجرات أو تشوهاً لا يمكن تصحيحه مع الإبقاء على الأربطة الأصلية.",
          "لا خيار «أفضل» عالمياً. مطابقة الإجراء لنمط المرض أهم من تسميات التسويق.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Adults with knee osteoarthritis considering surgery in Abu Dhabi who have been told they might be candidates for partial or total replacement and want a clear comparison before clinic.",
          "Inflammatory arthritis patterns and prior ligament injury may steer decisions — bring prior MRI and operative notes when available.",
        ],
        paragraphsAr: [
          "البالغون المصابون بخشونة الركبة الذين يفكرون بالجراحة في أبوظبي وقيل لهم إنهم قد يلائمون الاستبدال الجزئي أو الكامل ويريدون مقارنة واضحة قبل العيادة.",
          "قد توجّه أنماط التهاب المفاصل وإصابة الأربطة السابقة القرارات — أحضر الرنين السابق وتقارير العمليات إن وُجدت.",
        ],
      },
      {
        h2: "Choosing Partial or Total Knee Replacement in Abu Dhabi",
        h2Ar: "اختيار الاستبدال الجزئي أو الكامل في أبوظبي",
        paragraphs: [
          "Partial knee replacement is considered when arthritis is largely confined to one compartment and the ACL is intact. Total knee replacement is indicated when several compartments are involved or deformity cannot be corrected while keeping native ligaments.",
          "Patient-specific and robotic planning can support either procedure when they improve accuracy for that anatomy. The decision is made after examination and weight-bearing imaging, not from a single MRI report alone.",
        ],
        paragraphsAr: [
          "يُدرس الاستبدال الجزئي عندما تقتصر الخشونة غالباً على حيز واحد ويكون الرباط المتصالب سليماً. ويُستطب الكامل عند إصابة عدة حجرات أو عندما لا يمكن تصحيح التشوه مع الإبقاء على الأربطة الأصلية.",
          "يمكن أن يدعم التخطيط المخصص أو الروبوتي أيّاً من الإجراءين عند تحسين الدقة. يُتخذ القرار بعد الفحص وأشعة تحمل الوزن لا من تقرير رنين واحد.",
        ],
      },
      {
        h2: "What to Expect Over Time",
        h2Ar: "ماذا تتوقع مع الوقت",
        paragraphs: [
          "Recovery themes overlap — early walking, physiotherapy, and swelling control — but activity progression is individual. If arthritis later progresses in other compartments after partial replacement, conversion to total may be discussed; that risk is part of candidacy counselling.",
          "Ask how follow-up imaging is used to monitor the replaced and non-replaced compartments over time.",
        ],
        paragraphsAr: [
          "تتداخل محاور التعافي — المشي المبكر والعلاج الطبيعي والتحكم بالتورم — لكن تقدم النشاط فردي. إذا تقدمت الخشونة لاحقاً في حجرات أخرى بعد الجزئي قد تُناقش التحويل إلى كامل؛ وذلك جزء من مشورة الملاءمة.",
          "اسأل كيف تُستخدم صور المتابعة لمراقبة الحجرات المستبدلة وغير المستبدلة مع الوقت.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Is my wear limited to one compartment? Is my ACL competent? What deformity correction is required? How would conversion risk be monitored if I choose partial replacement?",
        ],
        paragraphsAr: [
          "هل يقتصر التآكل على حيز واحد؟ هل الرباط المتصالب كفء؟ ما تصحيح التشوه المطلوب؟ كيف يُراقب خطر التحويل إذا اخترت الاستبدال الجزئي؟",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "Compare partial knee and total knee replacement treatment pages for procedure detail at Healthpoint Hospital, Abu Dhabi.",
        ],
        paragraphsAr: [
          "قارن صفحات علاج الاستبدال الجزئي والكامل لتفاصيل الإجراء في مستشفى هيلث بوينت أبوظبي.",
        ],
      },
    ],
    relatedCare: [
      { href: "/treatments/partial-knee", label: "Partial knee replacement", labelAr: "استبدال الركبة الجزئي" },
      { href: "/treatments/total-knee-replacement", label: "Total knee replacement", labelAr: "استبدال الركبة الكامل" },
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
    seoTitle: "Knee Sports Injuries in Abu Dhabi | Dr. Feras Ya'ish",
    seoTitleAr: "فهم إصابات الركبة الرياضية في أبوظبي | الدكتور فراس يعيش",
    seoDescription:
      "Knee sports injuries in Abu Dhabi — ACL, meniscus, and instability education with Dr. Feras Ya'ish at Healthpoint.",
    content: [
      "Knee sports injuries in Abu Dhabi commonly involve the ACL, meniscus, and patellofemoral stabilisers. This guide focuses on the knee rather than general sports medicine.",
      "Dr. Ya'ish's sports practice centres on ligament reconstruction, meniscal repair, and arthroscopic cartilage work — with non-operative options when structures and goals allow.",
    ],
    contentAr: [
      "غالباً ما تشمل إصابات الركبة الرياضية في أبوظبي الرباط المتصالب والهلالة ومثبتات الرضفة. يركز هذا الدليل على الركبة لا على الطب الرياضي العام.",
      "تركز ممارسة الدكتور يعيش الرياضية على إعادة بناء الأربطة وإصلاح الهلالة وعمل الغضروف بالمنظار — مع خيارات غير جراحية عندما تسمح البنى والأهداف.",
    ],
    sections: [
      {
        h2: "What Knee Sports Injuries Mean for Patients",
        h2Ar: "ماذا تعني إصابات الركبة الرياضية للمرضى",
        paragraphs: [
          "A pop, swelling, and giving-way after a pivoting injury should be assessed clinically. MRI is used when the examination and history suggest ligament or meniscal injury that would change management.",
          "Not every knee sports injury needs surgery. Repair versus reconstruction, and the rehabilitation timetable, depend on the structures involved and the sports or prayer positions you need to return to.",
        ],
        paragraphsAr: [
          "الطقطقة والتورم والخيانة بعد إصابة محورية تستدعي تقييماً سريرياً. ويُستخدم الرنين عندما يوحي الفحص والتاريخ بإصابة رباط أو هلالة تغيّر الخطة.",
          "ليست كل إصابة ركبة رياضية بحاجة لجراحة. يعتمد الإصلاح مقابل إعادة البناء وجدول التأهيل على البنى المصابة والرياضات أو أوضاع الصلاة التي تحتاج العودة إليها.",
        ],
      },
      {
        h2: "Who This Guide Is For",
        h2Ar: "لمن هذا الدليل",
        paragraphs: [
          "Athletes, recreational players, and active adults in Abu Dhabi with suspected ACL, meniscal, or instability problems who want a structured overview before seeing Dr. Feras Ya'ish.",
          "Bring previous imaging and a list of sports demands so planning can be specific.",
        ],
        paragraphsAr: [
          "الرياضيون واللاعبون الترفيهيون والبالغون النشطون في أبوظبي مع اشتباه بإصابة الرباط المتصالب أو الهلالة أو عدم الاستقرار ويرغبون بنظرة منظمة قبل زيارة الدكتور فراس يعيش.",
          "أحضر صورك السابقة وقائمة متطلبات الرياضة لتصبح الخطة محددة.",
        ],
      },
      {
        h2: "Common Knee Sports Injuries in Abu Dhabi",
        h2Ar: "إصابات الركبة الرياضية الشائعة في أبوظبي",
        paragraphs: [
          "ACL rupture, meniscal tears, and patellofemoral instability are frequent themes. Combined injuries change both surgical planning and rehab pace.",
          "Early protection, swelling control, and accurate diagnosis matter more than rushing into theatre without a clear structural map.",
        ],
        paragraphsAr: [
          "تمزق الرباط المتصالب وتمزقات الهلالة وعدم استقرار الرضفة محاور شائعة. وتغيّر الإصابات المشتركة التخطيط الجراحي ووتيرة التأهيل.",
          "الحماية المبكرة والتحكم بالتورم والتشخيص الدقيق أهم من الاستعجال إلى غرفة العمليات دون خريطة بنيوية واضحة.",
        ],
      },
      {
        h2: "Recovery and Return to Sport",
        h2Ar: "التعافي والعودة للرياضة",
        paragraphs: [
          "Return-to-sport timelines are criteria-based. Strength, hop testing, and movement quality guide clearance conversations. Calendar dates alone are incomplete.",
          "See the ACL recovery education guide for reconstruction-specific milestones after ligament surgery.",
        ],
        paragraphsAr: [
          "جداول العودة للرياضة مبنية على المعايير. توجّه القوة واختبارات القفز وجودة الحركة مناقشات الإذن. وتواريخ التقويم وحدها غير مكتملة.",
          "راجع دليل تعافي الرباط المتصالب لمحطات خاصة بإعادة البناء بعد جراحة الأربطة.",
        ],
      },
      {
        h2: "Questions to Ask in Clinic",
        h2Ar: "أسئلة لطرحها في العيادة",
        paragraphs: [
          "Which structures are injured? Is MRI needed now? Is repair or reconstruction more appropriate? What non-operative trial is reasonable before surgery?",
        ],
        paragraphsAr: [
          "ما البنى المصابة؟ هل الرنين مطلوب الآن؟ هل الإصلاح أو إعادة البناء أنسب؟ ما التجربة غير الجراحية المعقولة قبل الجراحة؟",
        ],
      },
      {
        h2: "Related Care at Healthpoint",
        h2Ar: "رعاية ذات صلة في هيلث بوينت",
        paragraphs: [
          "Explore knee arthroscopy and ligament reconstruction treatments, the ACL recovery guide, and sports knee injury condition pages for related pathways.",
        ],
        paragraphsAr: [
          "استكشف علاجات منظار الركبة وإعادة بناء الأربطة ودليل تعافي الرباط المتصالب وصفحات حالة إصابة الركبة الرياضية للمسارات ذات الصلة.",
        ],
      },
    ],
    relatedCare: [
      { href: "/treatments/arthroscopy", label: "Knee arthroscopy", labelAr: "منظار الركبة" },
      { href: "/treatments/ligament-reconstruction", label: "Ligament reconstruction", labelAr: "إعادة بناء الأربطة" },
      { href: "/patient-education/acl-recovery", label: "ACL recovery guide", labelAr: "دليل تعافي الرباط المتصالب" },
      {
        href: "/conditions/sports-knee-injury",
        label: "Knee sports injuries & instability",
        labelAr: "إصابات الركبة الرياضية وعدم الاستقرار",
      },
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
