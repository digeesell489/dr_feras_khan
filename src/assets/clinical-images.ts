/**
 * Clinical image manifest. Every src below is a file that exists in public/images.
 * The client theatre and radiograph files were not in the project, so these use the
 * on-site photographs until those files are added.
 * orSurgeonOperating is not rendered. It is an open surgical field.
 */

export type ClinicalImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  altAr: string;
};

export const orSurgeonOperating: ClinicalImage = {
  src: "/images/clinical/03-or-surgeon-operating.jpg",
  width: 1600,
  height: 1067,
  alt: "Open surgical field during orthopaedic surgery",
  altAr: "حقل جراحي مفتوح أثناء جراحة العظام",
};

export const orRobotPortrait: ClinicalImage = {
  src: "/images/education-or.png",
  width: 1600,
  height: 900,
  alt: "Robotic-assisted surgery in the Healthpoint operating theatre",
  altAr: "جراحة بمساعدة الروبوت في غرفة عمليات هيلث بوينت",
};

export const roboticTheatre: ClinicalImage = {
  src: "/images/education-or.png",
  width: 1600,
  height: 900,
  alt: "Stryker Mako robotic arm in theatre with the intra-operative navigation display",
  altAr: "ذراع سترايكر ماكو الروبوتية في غرفة العمليات مع شاشة الملاحة أثناء الجراحة",
};

export const psiCtPlanning: ClinicalImage = {
  src: "/images/education-ct.png",
  width: 1600,
  height: 1000,
  alt: "Anatomical planning view of the knee used for patient-specific replacement",
  altAr: "عرض تخطيطي تشريحي للركبة لاستبدال مخصص للمريض",
};

export const partialKneeCompartments: ClinicalImage = {
  src: "/images/implant-partial.png",
  width: 1600,
  height: 1000,
  alt: "Partial knee replacement implant",
  altAr: "زرعة استبدال الركبة الجزئي",
};

export const hipReplacementXray: ClinicalImage = {
  src: "/images/implant-hip.png",
  width: 1600,
  height: 1000,
  alt: "Hip replacement implant",
  altAr: "زرعة استبدال الورك",
};

export const revisionKneeXray: ClinicalImage = {
  src: "/images/implant-revision.png",
  width: 1600,
  height: 1000,
  alt: "Revision knee replacement components",
  altAr: "مكونات استبدال الركبة المراجَع",
};

export const kneeArthroscopy: ClinicalImage = {
  src: "/images/knee-mechanics.png",
  width: 1600,
  height: 1000,
  alt: "Knee joint anatomy relevant to arthroscopy",
  altAr: "تشريح مفصل الركبة المرتبط بالمنظار",
};

export const traumaMalunionXray: ClinicalImage = {
  src: "/images/implant-trauma.png",
  width: 1600,
  height: 1000,
  alt: "Trauma fixation plate used for fracture and malunion reconstruction",
  altAr: "صفيحة تثبيت للرضوض وإعادة بناء الالتئام المعيب",
};
