import { roboticTheatre } from "@/assets/clinical-images";
import { educationGallery } from "@/lib/education";

export const eventMenu = [
  { href: "/events/images", short: "Event Image", shortAr: "صور الفعاليات" },
  {
    href: "/events/media",
    short: "Appearances on newspapers and media",
    shortAr: "الظهور في الصحف والإعلام",
  },
];

export const eventPhotos = [
  ...educationGallery,
  {
    image: roboticTheatre.src,
    alt: roboticTheatre.alt,
    altAr: roboticTheatre.altAr,
    fit: "object-cover object-center",
  },
];
