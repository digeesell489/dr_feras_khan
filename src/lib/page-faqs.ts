export type PageFaq = {
  q: string;
  qAr: string;
  a: string;
  aAr: string;
};

export const pageFaqs: Record<string, PageFaq[]> = {
  "total-knee-replacement": [
    {
      q: "Who is a suitable candidate for total knee replacement?",
      qAr: "من هو المرشح المناسب لاستبدال الركبة الكامل؟",
      a: "Patients with severe knee osteoarthritis, inflammatory arthritis or persistent pain despite non-surgical treatment may be suitable candidates following clinical assessment.",
      aAr: "قد يناسب المرضى الذين يعانون خشونة شديدة في الركبة أو التهاباً مفصلياً أو ألماً مستمراً رغم العلاج غير الجراحي، بعد التقييم السريري.",
    },
    {
      q: "What is patient-specific knee replacement?",
      qAr: "ما هو استبدال الركبة المخصص للمريض؟",
      a: "It is an approach that considers an individual's anatomy and joint alignment when planning implant positioning and surgery.",
      aAr: "نهج يراعي تشريح الفرد ومحاذاة المفصل عند تخطيط موضع الزرعة والجراحة.",
    },
    {
      q: "Is robotic assistance used during surgery?",
      qAr: "هل تُستخدم المساعدة الروبوتية أثناء الجراحة؟",
      a: "Robotic-assisted technology may be used in selected cases to support surgical planning and bone preparation.",
      aAr: "قد تُستخدم التقنية بمساعدة الروبوت في حالات مختارة لدعم التخطيط الجراحي وتحضير العظم.",
    },
    {
      q: "How soon can I walk after knee replacement?",
      qAr: "متى أستطيع المشي بعد استبدال الركبة؟",
      a: "Many patients begin assisted walking on the same day or the day after surgery, when clinically appropriate.",
      aAr: "يبدأ كثير من المرضى المشي بمساعدة في يوم الجراحة أو اليوم التالي، عند الملاءمة السريرية.",
    },
    {
      q: "How long does recovery take after total knee replacement?",
      qAr: "كم يستغرق التعافي بعد استبدال الركبة الكامل؟",
      a: "Initial recovery takes several weeks, while strength and mobility may continue improving over several months and up to a year.",
      aAr: "يستغرق التعافي الأولي عدة أسابيع، وقد تستمر القوة والحركة في التحسن على مدى أشهر وحتى سنة.",
    },
    {
      q: "How should I sleep after total knee replacement surgery?",
      qAr: "كيف أنام بعد جراحة استبدال الركبة الكامل؟",
      a: "Follow your surgeon's advice on sleeping positions and leg support. Avoid keeping a pillow directly under the knee for prolonged periods unless advised.",
      aAr: "اتبع نصيحة الجرّاح بشأن وضعيات النوم ودعم الساق. تجنّب وضع وسادة مباشرة تحت الركبة لفترات طويلة ما لم يُنصح بذلك.",
    },
    {
      q: "Is total knee replacement performed as an outpatient procedure?",
      qAr: "هل يُجرى استبدال الركبة الكامل كإجراء يومي دون مبيت؟",
      a: "Some patients may be discharged on the same day, while others require an overnight stay. This depends on their health and recovery progress.",
      aAr: "قد يُخرج بعض المرضى في اليوم نفسه، بينما يحتاج آخرون للمبيت. يعتمد ذلك على الصحة وتقدّم التعافي.",
    },
    {
      q: "Why do muscle spasms occur after total knee replacement?",
      qAr: "لماذا تحدث تشنجات عضلية بعد استبدال الركبة الكامل؟",
      a: "Muscle spasms may be related to swelling, muscle fatigue or changes in movement during recovery. Inform your clinical team if they are severe or persistent.",
      aAr: "قد ترتبط التشنجات بالتورم أو إجهاد العضلات أو تغيّر الحركة أثناء التعافي. أخبر فريقك الطبي إذا كانت شديدة أو مستمرة.",
    },
    {
      q: "What is the usual protocol after total knee replacement surgery?",
      qAr: "ما البروتوكول المعتاد بعد جراحة استبدال الركبة الكامل؟",
      a: "It generally includes pain management, early walking, wound care, prescribed exercises and physiotherapy.",
      aAr: "يشمل عادة إدارة الألم والمشي المبكر والعناية بالجرح وتمارين موصوفة والعلاج الطبيعي.",
    },
    {
      q: "How much does total knee replacement surgery cost?",
      qAr: "كم تكلفة جراحة استبدال الركبة الكامل؟",
      a: "The cost depends on the implant, hospital stay, surgical requirements and rehabilitation. Contact the hospital for an individual estimate.",
      aAr: "تعتمد التكلفة على الزرعة والإقامة بالمستشفى ومتطلبات الجراحة والتأهيل. تواصل مع المستشفى لتقدير فردي.",
    },
  ],
  "patient-specific-knee": [
    {
      q: "What is patient-specific knee replacement (PSI)?",
      qAr: "ما هو استبدال الركبة المخصص للمريض (PSI)؟",
      a: "PSI uses CT-based planning and customised cutting guides to map bone cuts to the patient's anatomy before surgery.",
      aAr: "يستخدم PSI التخطيط بالأشعة المقطعية وأدلة قطع مخصصة لرسم قطوع العظم وفق تشريح المريض قبل الجراحة.",
    },
    {
      q: "Is PSI a different type of knee replacement surgery?",
      qAr: "هل PSI نوع مختلف من جراحة استبدال الركبة؟",
      a: "No. PSI is a pre-operative planning method used alongside total knee replacement.",
      aAr: "لا. PSI أسلوب تخطيط قبل الجراحة يُستخدم إلى جانب استبدال الركبة الكامل.",
    },
    {
      q: "Who may benefit from PSI?",
      qAr: "من قد يستفيد من PSI؟",
      a: "It may be suitable for patients whose knee anatomy requires more individualised surgical planning.",
      aAr: "قد يناسب المرضى الذين يحتاج تشريح ركبتهم تخطيطاً جراحياً أكثر تخصيصاً.",
    },
    {
      q: "How does PSI differ from robotic-assisted knee replacement?",
      qAr: "كيف يختلف PSI عن استبدال الركبة بمساعدة الروبوت؟",
      a: "PSI uses customised cutting guides based on CT scans, while robotic assistance uses technology to guide surgical execution. The choice depends on the patient and surgical plan.",
      aAr: "يستخدم PSI أدلة قطع مخصصة مبنية على الأشعة المقطعية، بينما تستخدم المساعدة الروبوتية التقنية لتوجيه تنفيذ الجراحة. يعتمد الاختيار على المريض والخطة الجراحية.",
    },
    {
      q: "What is the recovery time after PSI-assisted knee replacement?",
      qAr: "ما مدة التعافي بعد استبدال الركبة بمساعدة PSI؟",
      a: "Recovery follows the total knee replacement pathway, with walking often beginning on the day of surgery or the following day, supported by physiotherapy.",
      aAr: "يتبع التعافي مسار استبدال الركبة الكامل، وغالباً يبدأ المشي يوم الجراحة أو اليوم التالي بدعم العلاج الطبيعي.",
    },
  ],
  "hip-replacement": [
    {
      q: "Who needs a hip replacement?",
      qAr: "من يحتاج استبدال الورك؟",
      a: "Patients with hip osteoarthritis or persistent pain that limits walking, sleep, and daily activities may benefit from hip replacement.",
      aAr: "قد يستفيد المرضى الذين يعانون خشونة الورك أو ألماً مستمراً يحدّ من المشي والنوم والأنشطة اليومية.",
    },
    {
      q: "What is the difference between cementless and hybrid hip replacement?",
      qAr: "ما الفرق بين استبدال الورك غير الإسمنتي والهجين؟",
      a: "Cementless fixation relies on bone growing onto the implant, while hybrid fixation combines cemented and cementless components.",
      aAr: "يعتمد التثبيت غير الإسمنتي على نمو العظم على الزرعة، بينما يجمع التثبيت الهجين بين مكوّنات إسمنتية وغير إسمنتية.",
    },
    {
      q: "How is leg length maintained during hip replacement?",
      qAr: "كيف يُحافظ على طول الساق أثناء استبدال الورك؟",
      a: "Surgical planning aims to restore the patient's natural leg length and femoral offset for improved hip mechanics.",
      aAr: "يهدف التخطيط الجراحي إلى استعادة طول الساق الطبيعي وإزاحة الفخذ لتحسين ميكانيكا الورك.",
    },
    {
      q: "How soon can I walk after hip replacement?",
      qAr: "متى أستطيع المشي بعد استبدال الورك؟",
      a: "Many patients begin walking with support on the day of surgery or within 24 hours, guided by their physiotherapy team.",
      aAr: "يبدأ كثير من المرضى المشي بمساعدة يوم الجراحة أو خلال 24 ساعة، بتوجيه فريق العلاج الطبيعي.",
    },
    {
      q: "What does recovery after hip replacement involve?",
      qAr: "ماذا يشمل التعافي بعد استبدال الورك؟",
      a: "Recovery includes physiotherapy, gait training, strengthening exercises, and follow-up appointments to assess healing and implant position.",
      aAr: "يشمل العلاج الطبيعي وتدريب المشي وتمارين التقوية ومواعيد المتابعة لتقييم الالتئام وموضع الزرعة.",
    },
  ],
  "partial-knee": [
    {
      q: "What is a partial knee replacement?",
      qAr: "ما هو استبدال الركبة الجزئي؟",
      a: "It replaces only the damaged compartment of the knee while preserving healthy cartilage and other joint structures.",
      aAr: "يستبدل الحيز التالف فقط من الركبة مع الحفاظ على الغضروف السليم وبقية بنى المفصل.",
    },
    {
      q: "Who is suitable for partial knee replacement?",
      qAr: "من يناسب استبدال الركبة الجزئي؟",
      a: "Patients with arthritis limited to one knee compartment, intact ACL and PCL ligaments, and a correctable deformity may be suitable candidates.",
      aAr: "قد يناسب المرضى الذين تقتصر الخشونة لديهم على حيز واحد، مع سلامة الرباطين المتصالبين الأمامي والخلفي، وتشوه قابل للتصحيح.",
    },
    {
      q: "How is partial knee replacement different from total knee replacement?",
      qAr: "كيف يختلف الاستبدال الجزئي عن استبدال الركبة الكامل؟",
      a: "Partial replacement treats only the affected compartment, whereas total replacement addresses the damaged joint surfaces across the knee.",
      aAr: "يعالج الجزئي الحيز المصاب فقط، بينما يتناول الكامل الأسطح المفصلية التالفة في الركبة.",
    },
    {
      q: "Is recovery faster after partial knee replacement?",
      qAr: "هل التعافي أسرع بعد الاستبدال الجزئي؟",
      a: "Recovery is typically faster than after total knee replacement, although individual outcomes vary.",
      aAr: "يكون التعافي عادة أسرع من استبدال الركبة الكامل، مع اختلاف النتائج بين المرضى.",
    },
    {
      q: "Can I return to walking and climbing stairs after surgery?",
      qAr: "هل أعود للمشي وصعود الدرج بعد الجراحة؟",
      a: "Many patients gradually resume walking and stair climbing with rehabilitation, depending on healing and their surgeon's guidance.",
      aAr: "يستأنف كثير من المرضى المشي وصعود الدرج تدريجياً مع التأهيل، حسب الالتئام وتوجيه الجرّاح.",
    },
  ],
  "robotic-arthroplasty": [
    {
      q: "What is robotic joint replacement?",
      qAr: "ما هو استبدال المفصل الروبوتي؟",
      a: "It uses robotic-arm technology, 3D imaging, and surgical planning to help guide precise implant positioning during hip or knee replacement.",
      aAr: "يستخدم تقنية الذراع الروبوتية والتصوير ثلاثي الأبعاد والتخطيط الجراحي للمساعدة في توجيه موضع الزرعة بدقة أثناء استبدال الورك أو الركبة.",
    },
    {
      q: "Who may benefit from robotic joint replacement?",
      qAr: "من قد يستفيد من استبدال المفصل الروبوتي؟",
      a: "It may be suitable for patients undergoing hip or knee replacement, including selected partial replacements and complex deformity cases.",
      aAr: "قد يناسب المرضى الذين يخضعون لاستبدال الورك أو الركبة، بما في ذلك حالات جزئية مختارة وتشوهات معقدة.",
    },
    {
      q: "How does robotic assistance improve surgical precision?",
      qAr: "كيف تحسّن المساعدة الروبوتية دقة الجراحة؟",
      a: "It provides real-time tracking and haptic boundaries that help the surgeon follow the planned bone resections and implant positioning.",
      aAr: "توفّر تتبعاً لحظياً وحدوداً لمسية تساعد الجرّاح على اتباع قطوع العظم وموضع الزرعة المخطط لهما.",
    },
    {
      q: "Does robotic joint replacement mean the surgery is performed by a robot?",
      qAr: "هل يعني الاستبدال الروبوتي أن الروبوت يجري الجراحة؟",
      a: "No. The surgeon remains in control throughout the procedure, using robotic technology as a guidance tool.",
      aAr: "لا. يبقى الجرّاح مسيطراً طوال الإجراء، وتُستخدم التقنية الروبوتية أداة توجيه.",
    },
    {
      q: "How long does recovery take after robotic joint replacement?",
      qAr: "كم يستغرق التعافي بعد الاستبدال الروبوتي؟",
      a: "Recovery varies by patient and procedure. Many patients gradually regain independent walking over the first few weeks with appropriate physiotherapy.",
      aAr: "يختلف التعافي حسب المريض والإجراء. يستعيد كثير من المرضى المشي المستقل تدريجياً خلال الأسابيع الأولى مع العلاج الطبيعي المناسب.",
    },
  ],
  "revision-surgery": [
    {
      q: "What is revision hip or knee surgery?",
      qAr: "ما هي جراحة مراجعة الورك أو الركبة؟",
      a: "It is a procedure to repair or replace a previously implanted hip or knee prosthesis when complications or implant failure occur.",
      aAr: "إجراء لإصلاح أو استبدال زرعة ورك أو ركبة سابقة عند حدوث مضاعفات أو فشل الزرعة.",
    },
    {
      q: "When is revision joint surgery needed?",
      qAr: "متى تُحتاج جراحة مراجعة المفصل؟",
      a: "It may be required for implant loosening, bone loss, instability, recurrent dislocation, infection, or fractures around the implant.",
      aAr: "قد تُحتاج عند ارتخاء الزرعة أو فقدان العظم أو عدم الاستقرار أو الخلع المتكرر أو العدوى أو الكسور حول الزرعة.",
    },
    {
      q: "How is revision surgery different from primary joint replacement?",
      qAr: "كيف تختلف المراجعة عن الاستبدال الأولي؟",
      a: "Revision surgery is often more complex because it may involve bone reconstruction, specialised implants, and management of previous surgical complications.",
      aAr: "غالباً ما تكون المراجعة أكثر تعقيداً لأنها قد تشمل إعادة بناء العظم وزرعات متخصصة ومعالجة مضاعفات الجراحة السابقة.",
    },
    {
      q: "How is infection around a joint replacement treated?",
      qAr: "كيف تُعالج العدوى حول استبدال المفصل؟",
      a: "Treatment depends on the infection and may involve antibiotics, implant exchange, and a one-stage or two-stage surgical approach.",
      aAr: "يعتمد العلاج على العدوى وقد يشمل المضادات الحيوية وتبديل الزرعة ونهجاً جراحياً بمرحلة واحدة أو مرحلتين.",
    },
    {
      q: "How long does recovery take after revision surgery?",
      qAr: "كم يستغرق التعافي بعد جراحة المراجعة؟",
      a: "Recovery varies with the complexity of reconstruction, bone quality, and infection status. Hospital stay, weight-bearing, and physiotherapy are tailored to each patient.",
      aAr: "يختلف التعافي حسب تعقيد إعادة البناء وجودة العظم وحالة العدوى. تُكيَّف الإقامة والتحميل والعلاج الطبيعي لكل مريض.",
    },
  ],
  arthroscopy: [
    {
      q: "What is knee arthroscopy?",
      qAr: "ما هو منظار الركبة؟",
      a: "Knee arthroscopy is a minimally invasive procedure that uses a small camera and specialised instruments to diagnose and treat problems inside the knee joint.",
      aAr: "إجراء طفيف التوغل يستخدم كاميرا صغيرة وأدوات متخصصة لتشخيص مشكلات داخل مفصل الركبة وعلاجها.",
    },
    {
      q: "Who may need knee arthroscopy?",
      qAr: "من قد يحتاج منظار الركبة؟",
      a: "It may be recommended for selected meniscal tears, cartilage injuries, mechanical locking, or persistent knee symptoms following an injury.",
      aAr: "قد يُنصح به لتمزقات هلالية مختارة أو إصابات غضروف أو انقفال ميكانيكي أو أعراض ركبة مستمرة بعد إصابة.",
    },
    {
      q: "How is knee arthroscopy performed?",
      qAr: "كيف يُجرى منظار الركبة؟",
      a: "The surgeon inserts a small camera and instruments through tiny incisions to examine and treat the affected area while preserving healthy tissue.",
      aAr: "يُدخل الجرّاح كاميرا صغيرة وأدوات عبر شقوق دقيقة لفحص المنطقة المصابة وعلاجها مع الحفاظ على النسيج السليم.",
    },
    {
      q: "How long does recovery take after knee arthroscopy?",
      qAr: "كم يستغرق التعافي بعد منظار الركبة؟",
      a: "Recovery depends on the procedure performed. Some patients return to desk work within days, while meniscal repairs may require a longer rehabilitation period.",
      aAr: "يعتمد التعافي على الإجراء. يعود بعض المرضى للعمل المكتبي خلال أيام، بينما قد يحتاج إصلاح الهلالة فترة تأهيل أطول.",
    },
    {
      q: "When can I return to running after knee arthroscopy?",
      qAr: "متى أعود للجري بعد منظار الركبة؟",
      a: "Running should resume only when healing, strength, and functional testing indicate readiness, particularly after meniscal repair.",
      aAr: "يُستأنف الجري فقط عندما يدل الالتئام والقوة والاختبارات الوظيفية على الجاهزية، خصوصاً بعد إصلاح الهلالة.",
    },
  ],
  "ligament-reconstruction": [
    {
      q: "What is knee ligament reconstruction?",
      qAr: "ما هي إعادة بناء أربطة الركبة؟",
      a: "It is a surgical procedure that rebuilds a damaged ligament, such as the ACL, to improve knee stability and function.",
      aAr: "إجراء جراحي يعيد بناء رباط تالف، مثل الرباط المتصالب الأمامي، لتحسين ثبات الركبة ووظيفتها.",
    },
    {
      q: "When is ACL reconstruction recommended?",
      qAr: "متى تُنصح بإعادة بناء الرباط المتصالب الأمامي؟",
      a: "It may be recommended for ACL tears causing recurrent knee instability, particularly in patients who wish to return to pivoting sports or demanding activities.",
      aAr: "قد تُنصح عند تمزقات تسبب عدم استقرار متكرر، خصوصاً لمن يرغب بالعودة لرياضات المحور أو الأنشطة المتطلبة.",
    },
    {
      q: "Which grafts are used for ACL reconstruction?",
      qAr: "ما الطعوم المستخدمة في إعادة بناء الرباط المتصالب؟",
      a: "Grafts may be taken from the patient's own tissue or selected from donor tissue, depending on individual needs and surgical suitability.",
      aAr: "قد تُؤخذ من نسيج المريض نفسه أو تُختار من نسيج متبرع، حسب الحاجة الفردية والملاءمة الجراحية.",
    },
    {
      q: "How long does recovery take after ACL reconstruction?",
      qAr: "كم يستغرق التعافي بعد إعادة بناء الرباط المتصالب؟",
      a: "Recovery takes several months and varies with the injury, graft choice, and rehabilitation progress. Returning to sport requires meeting specific functional criteria.",
      aAr: "يستغرق عدة أشهر ويختلف حسب الإصابة واختيار الطعم وتقدم التأهيل. تتطلب العودة للرياضة استيفاء معايير وظيفية محددة.",
    },
    {
      q: "When can I return to sports after ligament reconstruction?",
      qAr: "متى أعود للرياضة بعد إعادة بناء الأربطة؟",
      a: "Return to sport depends on strength, knee stability, functional testing, and medical clearance. Running and pivoting activities should resume only when the patient meets the required milestones.",
      aAr: "تعتمد العودة على القوة وثبات الركبة والاختبارات الوظيفية والتصريح الطبي. يُستأنف الجري وأنشطة المحور فقط عند بلوغ المحطات المطلوبة.",
    },
  ],
  "patellofemoral-instability": [
    {
      q: "What is patellofemoral instability?",
      qAr: "ما هو عدم استقرار الرضفة الفخذية؟",
      a: "It occurs when the kneecap moves out of its normal groove, sometimes causing repeated dislocations or a feeling that the knee may give way.",
      aAr: "يحدث عندما تخرج الرضفة من ميزابها الطبيعي، وقد يسبب خلعاً متكرراً أو إحساساً بأن الركبة قد تخون.",
    },
    {
      q: "When is surgery recommended for kneecap instability?",
      qAr: "متى تُنصح الجراحة لعدم استقرار الرضفة؟",
      a: "Surgery may be considered for recurrent dislocations or persistent instability, depending on the underlying cause and the patient's symptoms.",
      aAr: "قد تُدرس عند الخلع المتكرر أو عدم الاستقرار المستمر، حسب السبب الكامن وأعراض المريض.",
    },
    {
      q: "What is MPFL reconstruction?",
      qAr: "ما هي إعادة بناء الرباط الرضفي الفخذي الإنسي؟",
      a: "It is a procedure that rebuilds the medial patellofemoral ligament, which helps keep the kneecap stable within its groove.",
      aAr: "إجراء يعيد بناء هذا الرباط الذي يساعد على إبقاء الرضفة ثابتة داخل ميزابها.",
    },
    {
      q: "Is bone realignment always necessary?",
      qAr: "هل تصحيح اصطفاف العظم ضروري دائماً؟",
      a: "No. Tibial tubercle realignment is considered only when bone alignment contributes significantly to the instability.",
      aAr: "لا. يُدرس تصحيح حديبة الظنبوب فقط عندما يسهم الاصطفاف العظمي بشكل مهم في عدم الاستقرار.",
    },
    {
      q: "What is recovery like after patellofemoral instability surgery?",
      qAr: "كيف يكون التعافي بعد جراحة عدم استقرار الرضفة؟",
      a: "Recovery typically involves a brace, protected knee bending, and physiotherapy to rebuild quadriceps strength and stability. Return to sport depends on functional testing and medical clearance.",
      aAr: "يشمل عادة دعامة وثنياً محمياً للركبة وعلاجاً طبيعياً لإعادة قوة العضلة الرباعية والثبات. تعتمد العودة للرياضة على الاختبارات الوظيفية والتصريح الطبي.",
    },
  ],
  trauma: [
    {
      q: "What is trauma and malunion reconstruction?",
      qAr: "ما هي إعادة بناء الرضوض والالتئام المعيب؟",
      a: "It involves treating complex fractures and correcting bones that have healed incorrectly or failed to heal after an injury.",
      aAr: "تشمل علاج الكسور المعقدة وتصحيح العظام التي التأمت بشكل غير صحيح أو لم تلتئم بعد الإصابة.",
    },
    {
      q: "Who may need reconstructive trauma surgery?",
      qAr: "من قد يحتاج جراحة رضوض إعادة بنائية؟",
      a: "Patients with complex fractures, open injuries, non-unions, malunions, or fractures around existing joint implants may require specialised surgical care.",
      aAr: "قد يحتاجها المرضى ذوو الكسور المعقدة أو الإصابات المفتوحة أو عدم الالتئام أو الالتئام المعيب أو الكسور حول زرعات المفصل.",
    },
    {
      q: "What is the difference between non-union and malunion?",
      qAr: "ما الفرق بين عدم الالتئام والالتئام المعيب؟",
      a: "Non-union occurs when a fracture fails to heal, while malunion occurs when a broken bone heals in an incorrect position.",
      aAr: "عدم الالتئام يعني أن الكسر لم يلتئم، والالتئام المعيب يعني أن العظم المكسور التأَم في موضع غير صحيح.",
    },
    {
      q: "How are complex fractures treated?",
      qAr: "كيف تُعالج الكسور المعقدة؟",
      a: "Treatment may involve locking plates, intramedullary nails, minimally invasive fixation, and staged reconstruction, depending on the injury.",
      aAr: "قد يشمل العلاج صفائح قافلة أو مسامير داخل النقي أو تثبيتاً طفيف التوغل أو إعادة بناء على مراحل، حسب الإصابة.",
    },
    {
      q: "How long does recovery take after fracture reconstruction?",
      qAr: "كم يستغرق التعافي بعد إعادة بناء الكسر؟",
      a: "Recovery depends on fracture severity, bone healing, and the procedure performed. Weight-bearing and physiotherapy are tailored to each patient.",
      aAr: "يعتمد على شدة الكسر والتئام العظم والإجراء. يُكيَّف التحميل والعلاج الطبيعي لكل مريض.",
    },
  ],
  "hip-osteoarthritis": [
    {
      q: "What is hip osteoarthritis?",
      qAr: "ما هي خشونة الورك؟",
      a: "Hip osteoarthritis is a progressive condition in which the cartilage cushioning the hip joint wears down, causing pain, stiffness, and reduced mobility.",
      aAr: "حالة متقدمة يتآكل فيها الغضروف الذي يبطّن مفصل الورك، فيسبب ألماً وتيبساً ونقصاً في الحركة.",
    },
    {
      q: "What are the common symptoms of hip osteoarthritis?",
      qAr: "ما الأعراض الشائعة لخشونة الورك؟",
      a: "Symptoms include groin pain, morning stiffness, difficulty putting on socks or shoes, limping, and pain during walking or at night.",
      aAr: "تشمل ألم المغبن وتيبس الصباح وصعوبة ارتداء الجوارب أو الحذاء والعرج وألماً عند المشي أو ليلاً.",
    },
    {
      q: "How is hip osteoarthritis diagnosed?",
      qAr: "كيف تُشخَّص خشونة الورك؟",
      a: "Diagnosis typically involves a clinical examination, assessment of walking and hip movement, and X-rays of the pelvis and hip.",
      aAr: "يشمل التشخيص عادة فحصاً سريرياً وتقييم المشي وحركة الورك وأشعة للحوض والورك.",
    },
    {
      q: "Can hip osteoarthritis be treated without surgery?",
      qAr: "هل يمكن علاج خشونة الورك دون جراحة؟",
      a: "Yes. Depending on its severity, treatment may include physiotherapy, activity modification, and appropriate pain management.",
      aAr: "نعم. حسب الشدة قد يشمل العلاج الطبيعي وتعديل النشاط وإدارة الألم المناسبة.",
    },
    {
      q: "When is hip replacement recommended for osteoarthritis?",
      qAr: "متى يُنصح باستبدال الورك للخشونة؟",
      a: "Hip replacement may be considered when persistent pain and stiffness significantly affect daily activities despite appropriate non-surgical treatment.",
      aAr: "قد يُدرس عندما يؤثر الألم والتيبس المستمران بشكل واضح في الأنشطة اليومية رغم العلاج غير الجراحي المناسب.",
    },
  ],
  "knee-osteoarthritis": [
    {
      q: "What is knee osteoarthritis?",
      qAr: "ما هي خشونة الركبة؟",
      a: "Knee osteoarthritis is a degenerative condition in which the cartilage cushioning the knee joint gradually wears down, causing pain, stiffness, and reduced mobility.",
      aAr: "حالة تنكسية يتآكل فيها تدريجياً الغضروف الذي يبطّن مفصل الركبة، فيسبب ألماً وتيبساً ونقصاً في الحركة.",
    },
    {
      q: "What are the common symptoms of knee osteoarthritis?",
      qAr: "ما الأعراض الشائعة لخشونة الركبة؟",
      a: "Symptoms include knee pain during activity, swelling, stiffness after sitting, difficulty climbing stairs, and reduced walking tolerance.",
      aAr: "تشمل ألم الركبة أثناء النشاط والتورم والتيبس بعد الجلوس وصعوبة صعود الدرج ونقص القدرة على المشي.",
    },
    {
      q: "How is knee osteoarthritis diagnosed?",
      qAr: "كيف تُشخَّص خشونة الركبة؟",
      a: "Diagnosis typically involves a clinical examination and weight-bearing X-rays to assess cartilage loss, joint changes, and limb alignment.",
      aAr: "يشمل التشخيص عادة فحصاً سريرياً وأشعة بتحمل الوزن لتقييم فقدان الغضروف وتغيرات المفصل واصطفاف الطرف.",
    },
    {
      q: "Can knee osteoarthritis be treated without surgery?",
      qAr: "هل يمكن علاج خشونة الركبة دون جراحة؟",
      a: "Yes. Depending on severity, treatment may include activity modification, physiotherapy, pain management, and injections where appropriate.",
      aAr: "نعم. حسب الشدة قد يشمل تعديل النشاط والعلاج الطبيعي وإدارة الألم والحقن عند المناسبة.",
    },
    {
      q: "When is knee replacement recommended for osteoarthritis?",
      qAr: "متى يُنصح باستبدال الركبة للخشونة؟",
      a: "Knee replacement may be considered when persistent pain and stiffness significantly limit daily activities despite appropriate non-surgical treatment. Partial or total replacement depends on the extent of joint damage.",
      aAr: "قد يُدرس عندما يحدّ الألم والتيبس المستمران من الأنشطة اليومية رغم العلاج غير الجراحي المناسب. يعتمد الجزئي أو الكامل على مدى تلف المفصل.",
    },
  ],
  "avascular-necrosis": [
    {
      q: "What is avascular necrosis of the femoral head?",
      qAr: "ما هو النخر اللاوعائي لرأس الفخذ؟",
      a: "It is a condition in which reduced blood supply causes bone tissue in the hip joint to deteriorate, potentially leading to femoral head collapse.",
      aAr: "حالة يؤدي فيها نقص التروية إلى تدهور نسيج العظم في مفصل الورك، وقد ينتهي بانهيار رأس الفخذ.",
    },
    {
      q: "What are the common symptoms of avascular necrosis?",
      qAr: "ما الأعراض الشائعة للنخر اللاوعائي؟",
      a: "Symptoms include deep groin pain, discomfort during weight-bearing, restricted hip rotation, and a progressive limp.",
      aAr: "تشمل ألماً عميقاً في المغبن وانزعاجاً عند التحميل وتحدد دوران الورك وعرجاً متزايداً.",
    },
    {
      q: "How is avascular necrosis diagnosed?",
      qAr: "كيف يُشخَّص النخر اللاوعائي؟",
      a: "MRI is particularly useful for detecting early-stage disease before changes become visible on X-rays.",
      aAr: "الرنين المغناطيسي مفيد خصوصاً لكشف المرحلة المبكرة قبل ظهور التغيرات على الأشعة.",
    },
    {
      q: "Can avascular necrosis be treated without hip replacement?",
      qAr: "هل يمكن علاج النخر اللاوعائي دون استبدال الورك؟",
      a: "Yes. Depending on the stage and extent of damage, monitoring or procedures such as core decompression may be considered before the femoral head collapses.",
      aAr: "نعم. حسب المرحلة ومدى الضرر قد تُدرس المراقبة أو إجراءات مثل تخفيف الضغط المركزي قبل انهيار رأس الفخذ.",
    },
    {
      q: "When is hip replacement necessary for avascular necrosis?",
      qAr: "متى يُحتاج استبدال الورك في النخر اللاوعائي؟",
      a: "Total hip replacement is generally considered when the femoral head has collapsed and significant pain or secondary arthritis affects daily activities.",
      aAr: "يُدرس الاستبدال الكامل عادة عندما ينهار رأس الفخذ ويؤثر الألم الواضح أو الخشونة الثانوية في الأنشطة اليومية.",
    },
  ],
  "hip-dysplasia": [
    {
      q: "What are hip dysplasia and femoroacetabular impingement?",
      qAr: "ما هما خلل تنسج الورك والانحشار الفخذي الحقي؟",
      a: "Hip dysplasia occurs when the socket does not adequately cover the femoral head, while femoroacetabular impingement involves abnormal contact between the hip bones during movement.",
      aAr: "يحدث خلل التنسج عندما لا يغطّي التجويف رأس الفخذ بشكل كافٍ، بينما يعني الانحشار تماساً غير طبيعي بين عظام الورك أثناء الحركة.",
    },
    {
      q: "What are the common symptoms of these conditions?",
      qAr: "ما الأعراض الشائعة لهذه الحالات؟",
      a: "Symptoms may include groin pain during activity, stiffness after sitting, catching sensations, and reduced hip mobility.",
      aAr: "قد تشمل ألم المغبن أثناء النشاط وتيبساً بعد الجلوس وإحساساً بالتعليق ونقص حركة الورك.",
    },
    {
      q: "How are hip dysplasia and structural impingement diagnosed?",
      qAr: "كيف يُشخَّص خلل التنسج والانحشار البنيوي؟",
      a: "Evaluation typically involves a clinical examination and specialised pelvic X-rays. CT scans may be used to assess bone structure and joint coverage.",
      aAr: "يشمل التقييم عادة فحصاً سريرياً وأشعة حوض متخصصة. قد يُستخدم المقطعي لتقييم بنية العظم وتغطية المفصل.",
    },
    {
      q: "Can hip dysplasia and impingement be treated without joint replacement?",
      qAr: "هل يمكن العلاج دون استبدال المفصل؟",
      a: "Yes. Depending on the severity and joint condition, treatment may include activity modification, physiotherapy, or joint-preserving surgery.",
      aAr: "نعم. حسب الشدة وحالة المفصل قد يشمل تعديل النشاط أو العلاج الطبيعي أو جراحة تحافظ على المفصل.",
    },
    {
      q: "When is hip replacement considered for these conditions?",
      qAr: "متى يُدرس استبدال الورك لهذه الحالات؟",
      a: "Hip replacement may be considered when significant cartilage damage or advanced arthritis causes persistent pain and limits daily activities.",
      aAr: "قد يُدرس عند تلف غضروفي واضح أو خشونة متقدمة تسبب ألماً مستمراً وتحدّ من الأنشطة اليومية.",
    },
  ],
  "failed-joint-replacement": [
    {
      q: "What causes pain after hip or knee replacement?",
      qAr: "ما أسباب الألم بعد استبدال الورك أو الركبة؟",
      a: "Pain may result from implant loosening, bone loss, instability, infection, or a fracture around the implant.",
      aAr: "قد ينتج الألم عن ارتخاء الزرعة أو فقدان العظم أو عدم الاستقرار أو العدوى أو كسر حول الزرعة.",
    },
    {
      q: "Is persistent pain after joint replacement normal?",
      qAr: "هل الألم المستمر بعد استبدال المفصل طبيعي؟",
      a: "Some discomfort is expected during recovery, but persistent, worsening, or newly developing pain should be evaluated by an orthopaedic specialist.",
      aAr: "يُتوقع بعض الانزعاج أثناء التعافي، لكن الألم المستمر أو المتزايد أو الجديد يستدعي تقييم أخصائي العظام.",
    },
    {
      q: "How is a painful joint replacement diagnosed?",
      qAr: "كيف يُقيَّم استبدال المفصل المؤلم؟",
      a: "Evaluation may include X-rays, blood tests for inflammation, joint aspiration when infection is suspected, and specialised CT scans.",
      aAr: "قد يشمل التقييم أشعة وتحاليل التهاب وبزل المفصل عند اشتباه العدوى ومقطعياً متخصصاً.",
    },
    {
      q: "Does a painful joint replacement always require revision surgery?",
      qAr: "هل يحتاج الاستبدال المؤلم دائماً جراحة مراجعة؟",
      a: "No. Treatment depends on the underlying cause and may involve non-surgical management or revision surgery when necessary.",
      aAr: "لا. يعتمد العلاج على السبب وقد يشمل تدبيراً غير جراحي أو مراجعة عند الضرورة.",
    },
    {
      q: "When should I seek medical attention for a painful joint replacement?",
      qAr: "متى أطلب العناية الطبية لاستبدال مؤلم؟",
      a: "Seek prompt medical assessment for increasing pain, warmth, drainage, or recurrent instability. Sudden severe pain after a fall, or suspected infection with fever, requires urgent evaluation.",
      aAr: "اطلب تقييماً سريعاً عند زيادة الألم أو الدفء أو الإفرازات أو عدم الاستقرار المتكرر. الألم الشديد المفاجئ بعد سقوط، أو اشتباه عدوى مع حمى، يستدعي تقييماً عاجلاً.",
    },
  ],
  "sports-knee-injury": [
    {
      q: "What are common knee sports injuries?",
      qAr: "ما إصابات الركبة الرياضية الشائعة؟",
      a: "Common injuries include ACL tears, meniscal tears, cartilage damage, and injuries affecting multiple knee ligaments.",
      aAr: "تشمل تمزق الرباط المتصالب الأمامي وتمزق الهلالة وتلف الغضروف وإصابات عدة أربطة في الركبة.",
    },
    {
      q: "What are the signs of a knee ligament or meniscal injury?",
      qAr: "ما علامات إصابة رباط الركبة أو الهلالة؟",
      a: "Symptoms may include swelling after injury, a feeling that the knee gives way, locking, catching, or difficulty fully straightening the knee.",
      aAr: "قد تشمل تورماً بعد الإصابة وإحساساً بخيانة الركبة والانقفال والتعليق أو صعوبة فرد الركبة بالكامل.",
    },
    {
      q: "How are knee sports injuries diagnosed?",
      qAr: "كيف تُشخَّص إصابات الركبة الرياضية؟",
      a: "Diagnosis typically involves a clinical examination, ligament stability tests, and MRI scans to assess the ligaments, menisci, and cartilage.",
      aAr: "يشمل التشخيص عادة فحصاً سريرياً واختبارات ثبات الأربطة ورنيناً لتقييم الأربطة والهلالة والغضروف.",
    },
    {
      q: "Do all knee sports injuries require surgery?",
      qAr: "هل تحتاج كل إصابات الركبة الرياضية جراحة؟",
      a: "No. Treatment depends on the injury, its severity, and activity goals. Some injuries can be managed with physiotherapy and activity modification.",
      aAr: "لا. يعتمد العلاج على الإصابة وشدتها وأهداف النشاط. يمكن تدبير بعضها بالعلاج الطبيعي وتعديل النشاط.",
    },
    {
      q: "When can I return to sports after a knee injury?",
      qAr: "متى أعود للرياضة بعد إصابة الركبة؟",
      a: "Return depends on healing, knee stability, strength, and functional testing. A structured rehabilitation plan helps determine when it is safe to resume sports.",
      aAr: "تعتمد العودة على الالتئام وثبات الركبة والقوة والاختبارات الوظيفية. تساعد خطة تأهيل منظمة على تحديد وقت استئناف الرياضة بأمان.",
    },
  ],
  "fracture-malunion": [
    {
      q: "What is the difference between a fracture, non-union, and malunion?",
      qAr: "ما الفرق بين الكسر وعدم الالتئام والالتئام المعيب؟",
      a: "A fracture is a break in the bone. Non-union occurs when the bone fails to heal, while malunion occurs when it heals in an incorrect position.",
      aAr: "الكسر هو انقطاع في العظم. عدم الالتئام يعني أن العظم لم يلتئم، والالتئام المعيب يعني أنه التأَم في موضع غير صحيح.",
    },
    {
      q: "What are the signs of a serious fracture?",
      qAr: "ما علامات الكسر الخطير؟",
      a: "Severe pain, visible deformity, inability to bear weight, or an open wound after an injury may indicate a serious fracture requiring urgent medical attention.",
      aAr: "الألم الشديد أو التشوه الظاهر أو العجز عن التحميل أو جرح مفتوح بعد الإصابة قد يدل على كسر خطير يحتاج عناية طبية عاجلة.",
    },
    {
      q: "How are complex fractures diagnosed?",
      qAr: "كيف تُشخَّص الكسور المعقدة؟",
      a: "Assessment may include X-rays, CT scans for fractures involving the joint, and evaluation of the surrounding soft tissues and blood supply.",
      aAr: "قد يشمل التقييم أشعة ومقطعياً للكسور التي تشمل المفصل وتقييم الأنسجة الرخوة والتروية المحيطة.",
    },
    {
      q: "How are non-unions and malunions treated?",
      qAr: "كيف يُعالج عدم الالتئام والالتئام المعيب؟",
      a: "Treatment depends on the bone, severity, and previous treatment. It may involve corrective surgery, stable fixation, bone grafting, or other reconstructive procedures.",
      aAr: "يعتمد العلاج على العظم والشدة والعلاج السابق. قد يشمل جراحة تصحيحية أو تثبيتاً مستقراً أو طعماً عظمياً أو إجراءات إعادة بناء أخرى.",
    },
    {
      q: "What is a periprosthetic fracture?",
      qAr: "ما هو الكسر حول الزرعة؟",
      a: "It is a fracture occurring around an existing joint replacement. Treatment depends on the fracture pattern, implant stability, and the condition of the surrounding bone.",
      aAr: "كسر يحدث حول استبدال مفصل موجود. يعتمد العلاج على نمط الكسر وثبات الزرعة وحالة العظم المحيط.",
    },
  ],
};
