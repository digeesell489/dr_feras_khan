export const HEALTHPOINT_MAPS =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Healthpoint Hospital Zayed Sports City Abu Dhabi");

export const HEALTHPOINT_LOCATION = "https://healthpoint.ae/patients-visitors/location-operating-hours/";
export const HEALTHPOINT_PROFILE = "https://healthpoint.ae/our-doctors/dr-feras-ya-ish/";
export const HEALTHPOINT_APPOINTMENT = "https://healthpoint.ae/request-appointment/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61595379916426";
export const INSTAGRAM_URL = "https://www.instagram.com/drferasyaish/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/dr-feras-ya-ish-61237ab6/";
export const YOUTUBE_URL = "https://www.youtube.com/@DrFerasYaish";
export const TIKTOK_URL = "https://www.tiktok.com/@dr.feras.yaish";
export const DOCTIFY_URL = "https://www.doctify.com/en-ae/practice/healthpoint-hospital";

export const professionalLinks = [
  { label: "Facebook", href: FACEBOOK_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "YouTube", href: YOUTUBE_URL },
  { label: "TikTok", href: TIKTOK_URL },
  { label: "Doctify", href: DOCTIFY_URL },
  { label: "Healthpoint", href: HEALTHPOINT_PROFILE },
] as const;
