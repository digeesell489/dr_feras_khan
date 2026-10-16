export const eventMenu = [
  { href: "/events/images", short: "Event Image", shortAr: "صور الفعاليات" },
  {
    href: "/events/media",
    short: "Appearances on newspapers and media",
    shortAr: "الظهور في الصحف والإعلام",
  },
];

type Caption = { alt: string; altAr: string };

const captions = {
  eioc: {
    alt: "12th Emirates International Orthopaedic Congress",
    altAr: "المؤتمر الدولي الثاني عشر لجراحة العظام في الإمارات",
  },
  eos: {
    alt: "13th Emirates Orthopaedic Society Meeting",
    altAr: "الاجتماع الثالث عشر لجمعية الإمارات لجراحة العظام",
  },
  icjr11: {
    alt: "11th ICJR Middle East",
    altAr: "المؤتمر الدولي الحادي عشر لإعادة بناء المفاصل، الشرق الأوسط",
  },
  icjr9: {
    alt: "9th ICJR Middle East",
    altAr: "المؤتمر الدولي التاسع لإعادة بناء المفاصل، الشرق الأوسط",
  },
  icjrMe: {
    alt: "ICJR Middle East",
    altAr: "المؤتمر الدولي لإعادة بناء المفاصل، الشرق الأوسط",
  },
  chennai: {
    alt: "AO Recon Course, Principles of Knee Arthroplasty, Chennai",
    altAr: "دورة AO Recon لمبادئ استبدال الركبة، تشيناي",
  },
  sharjah: {
    alt: "AO Recon Course, University of Sharjah",
    altAr: "دورة AO Recon، جامعة الشارقة",
  },
  jakarta: {
    alt: "AO Recon Seminar, Jakarta",
    altAr: "ندوة AO Recon، جاكرتا",
  },
  indonesia: {
    alt: "23rd Indonesian Orthopaedic Association Congress",
    altAr: "المؤتمر الوطني الثالث والعشرون لجمعية جراحة العظام الإندونيسية",
  },
  davos: {
    alt: "AO Recon Knee Course, Davos",
    altAr: "دورة AO Recon للركبة، دافوس",
  },
  davosFaculty: {
    alt: "AO Davos Courses",
    altAr: "دورات AO في دافوس",
  },
  berlin: {
    alt: "AO Course, Charité Berlin",
    altAr: "دورة AO، شاريتيه برلين",
  },
  ao: {
    alt: "AO Recon course",
    altAr: "دورة AO Recon",
  },
  mako: {
    alt: "Stryker Mako briefing",
    altAr: "إحاطة سترايكر ماكو",
  },
  workshop: {
    alt: "Hands-on workshop",
    altAr: "ورشة عملية",
  },
  faculty: {
    alt: "Faculty discussion",
    altAr: "نقاش الهيئة العلمية",
  },
  panel: {
    alt: "Panel discussion",
    altAr: "جلسة حوار",
  },
  team: {
    alt: "Surgical team",
    altAr: "الفريق الجراحي",
  },
  lecture: {
    alt: "Conference lecture",
    altAr: "محاضرة مؤتمر",
  },
  course: {
    alt: "Course session",
    altAr: "جلسة علمية",
  },
  healthpoint: {
    alt: "Healthpoint, Abu Dhabi",
    altAr: "هيلث بوينت، أبوظبي",
  },
  jordan: {
    alt: "1st Jordanian Arthroplasty Conference",
    altAr: "المؤتمر الأردني الأول لجراحة المفاصل",
  },
  egypt: {
    alt: "ICJR Egypt",
    altAr: "ICJR مصر",
  },
} satisfies Record<string, Caption>;

function photo(id: string, caption: Caption) {
  return { image: `/images/events/${id}.webp`, ...caption };
}

export const eventGalleries = [
  {
    id: "images",
    label: "Event Images",
    labelAr: "صور الفعاليات",
    photos: [
      photo("e-08", captions.eioc),
      photo("e-16", captions.eioc),
      photo("e-19", captions.eioc),
      photo("e-34", captions.eioc),
      photo("e-41", captions.eioc),
      photo("e-44", captions.eioc),
      photo("e-47", captions.eioc),
      photo("e-55", captions.eioc),
      photo("e-61", captions.eioc),
      photo("e-10", captions.eos),
      photo("e-15", captions.eos),
      photo("e-25", captions.eos),
      photo("e-28", captions.eos),
      photo("e-33", captions.eos),
      photo("e-46", captions.eos),
      photo("e-57", captions.eos),
      photo("e-06", captions.icjr11),
      photo("e-43", captions.icjr9),
      photo("e-07", captions.icjrMe),
      photo("e-21", captions.icjrMe),
      photo("e-52", captions.icjrMe),
      photo("e-62", captions.icjrMe),
      photo("e-18", captions.chennai),
      photo("e-37", captions.chennai),
      photo("e-05", captions.sharjah),
      photo("e-50", captions.jakarta),
      photo("e-35", captions.davos),
      photo("e-36", captions.davos),
      photo("e-53", captions.davosFaculty),
      photo("e-60", captions.berlin),
      photo("e-03", captions.ao),
      photo("e-22", captions.ao),
      photo("e-27", captions.ao),
      photo("e-29", captions.ao),
      photo("e-32", captions.ao),
      photo("e-38", captions.ao),
      photo("e-49", captions.ao),
      photo("e-58", captions.ao),
      photo("e-39", captions.indonesia),
      photo("e-51", captions.jordan),
      photo("e-31", captions.mako),
      photo("e-02", captions.workshop),
      photo("e-09", captions.workshop),
      photo("e-42", captions.workshop),
      photo("e-54", captions.workshop),
      photo("e-12", captions.faculty),
      photo("e-14", captions.faculty),
      photo("e-13", captions.panel),
      photo("e-23", captions.panel),
      photo("e-24", captions.panel),
      photo("e-17", captions.team),
      photo("e-40", captions.lecture),
      photo("e-30", captions.course),
      photo("e-45", captions.healthpoint),
    ],
  },
  {
    id: "icjr-egypt",
    label: "ICJR Egypt",
    labelAr: "ICJR مصر",
    photos: [
      photo("icjr-01", captions.egypt),
      photo("icjr-02", captions.egypt),
      photo("icjr-03", captions.egypt),
      photo("icjr-04", captions.egypt),
      photo("icjr-05", captions.egypt),
      photo("icjr-06", captions.egypt),
      photo("icjr-07", captions.egypt),
      photo("icjr-08", captions.egypt),
      photo("icjr-09", captions.egypt),
      photo("icjr-10", captions.egypt),
      photo("icjr-11", captions.egypt),
      photo("e-63", captions.egypt),
    ],
  },
];
