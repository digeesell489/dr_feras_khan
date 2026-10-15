/**
 * Client photographs and radiographs from the 13 Oct 2026 feedback deck.
 * The open surgical-field photo is not included. It is not used on the public site.
 */

export type ClinicalImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  altAr: string;
};

export const orRobotPortrait: ClinicalImage = {
  src: "/images/clinical/or-robot-portrait.webp",
  width: 1600,
  height: 1200,
  alt: "Dr Feras Ya'ish beside the Stryker Mako robotic arm in theatre",
  altAr: "الدكتور فراس يعيش بجانب ذراع سترايكر ماكو الروبوتية في غرفة العمليات",
};

export const roboticTheatre: ClinicalImage = {
  src: "/images/clinical/mako-theatre.webp",
  width: 1600,
  height: 1200,
  alt: "Stryker Mako robotic arm positioned in theatre with the intra-operative navigation display",
  altAr: "ذراع سترايكر ماكو الروبوتية في غرفة العمليات مع شاشة الملاحة أثناء الجراحة",
};

export const psiCtPlanning: ClinicalImage = {
  src: "/images/clinical/psi-ct-planning.webp",
  width: 1024,
  height: 778,
  alt: "CT-based patient-specific knee replacement planning in axial, sagittal, coronal and 3D views",
  altAr: "تخطيط استبدال ركبة مخصص للمريض بالأشعة المقطعية في مقاطع محورية وسهمية وإكليلية وثلاثية الأبعاد",
};

export const partialKneeCompartments: ClinicalImage = {
  src: "/images/clinical/partial-knee-compartments.webp",
  width: 1536,
  height: 1024,
  alt: "Anatomical comparison of a knee with medial compartment arthritis and the same knee after partial knee replacement",
  altAr: "مقارنة تشريحية لركبة بخشونة الحيز الإنسي والركبة نفسها بعد الاستبدال الجزئي",
};

export const hipReplacementXray: ClinicalImage = {
  src: "/images/clinical/hip-replacement-xray.webp",
  width: 739,
  height: 714,
  alt: "Radiograph showing bilateral total hip replacements",
  altAr: "صورة شعاعية لاستبدال الورك الكامل في الجانبين",
};

export const revisionKneeXray: ClinicalImage = {
  src: "/images/clinical/revision-knee-xray.webp",
  width: 405,
  height: 913,
  alt: "Radiograph of a revision total knee replacement with long-stem femoral and tibial components",
  altAr: "صورة شعاعية لاستبدال ركبة مراجَع بسيقان فخذية وظنبوبية طويلة",
};

export const kneeArthroscopy: ClinicalImage = {
  src: "/images/clinical/knee-arthroscopy.webp",
  width: 1536,
  height: 1024,
  alt: "Knee arthroscopy showing the arthroscope camera and surgical instrument with the real-time view inside the joint",
  altAr: "منظار الركبة يُظهر الكاميرا والأداة الجراحية مع المشهد المباشر داخل المفصل",
};

export const traumaMalunionXray: ClinicalImage = {
  src: "/images/clinical/trauma-malunion-xray.webp",
  width: 492,
  height: 830,
  alt: "Radiograph of internal fixation with an intramedullary nail and periarticular plate construct",
  altAr: "صورة شعاعية لتثبيت داخلي بمسمار نخاعي وصفيحة حول المفصل",
};
