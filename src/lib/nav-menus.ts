/**
 * Slim header-nav labels only. Kept separate from treatments/conditions/events
 * modules so the client Header bundle does not pull clinical image metadata or
 * gallery payloads. Keep short/shortAr in sync with the full content modules.
 */

export type NavMenuItem = {
  slug: string;
  short: string;
  shortAr: string;
};

export type EventNavItem = {
  href: string;
  short: string;
  shortAr: string;
};

export const treatmentNav: NavMenuItem[] = [
  {
    slug: "total-knee-replacement",
    short: "Total Knee Replacement",
    shortAr: "استبدال الركبة الكامل",
  },
  {
    slug: "patient-specific-knee",
    short: "Patient-Specific Knee Replacement (PSI)",
    shortAr: "استبدال الركبة المخصص للمريض (PSI)",
  },
  {
    slug: "hip-replacement",
    short: "Hip Replacement",
    shortAr: "استبدال الورك",
  },
  {
    slug: "partial-knee",
    short: "Partial Knee Replacement",
    shortAr: "استبدال الركبة الجزئي",
  },
  {
    slug: "robotic-arthroplasty",
    short: "Robotic Joint Replacement",
    shortAr: "الجراحة الروبوتية",
  },
  {
    slug: "revision-surgery",
    short: "Revision Hip & Knee Surgery",
    shortAr: "جراحة مراجعة الورك والركبة",
  },
  {
    slug: "arthroscopy",
    short: "Knee Arthroscopy",
    shortAr: "منظار الركبة",
  },
  {
    slug: "ligament-reconstruction",
    short: "Knee Ligament Reconstruction",
    shortAr: "إعادة بناء أربطة الركبة",
  },
  {
    slug: "patellofemoral-instability",
    short: "Patellofemoral Instability Surgery",
    shortAr: "جراحة عدم استقرار الرضفة",
  },
  {
    slug: "trauma",
    short: "Trauma & Malunion",
    shortAr: "الكسور وإعادة البناء",
  },
];

export const conditionNav: NavMenuItem[] = [
  {
    slug: "hip-osteoarthritis",
    short: "Hip Osteoarthritis",
    shortAr: "خشونة الورك",
  },
  {
    slug: "knee-osteoarthritis",
    short: "Knee Osteoarthritis",
    shortAr: "خشونة الركبة",
  },
  {
    slug: "avascular-necrosis",
    short: "Avascular Necrosis",
    shortAr: "نخر رأس الفخذ",
  },
  {
    slug: "hip-dysplasia",
    short: "Hip Dysplasia",
    shortAr: "خلل تنسج الورك",
  },
  {
    slug: "failed-joint-replacement",
    short: "Failed Joint Replacement",
    shortAr: "فشل المفصل الصناعي",
  },
  {
    slug: "sports-knee-injury",
    short: "Knee Sports Injuries",
    shortAr: "إصابات الركبة الرياضية",
  },
  {
    slug: "fracture-malunion",
    short: "Fracture & Malunion",
    shortAr: "الكسور وعدم الالتئام",
  },
];

export const eventNav: EventNavItem[] = [
  { href: "/events/images", short: "Event Image", shortAr: "صور الفعاليات" },
  {
    href: "/events/media",
    short: "Appearances on newspapers and media",
    shortAr: "الظهور في الصحف والإعلام",
  },
];
