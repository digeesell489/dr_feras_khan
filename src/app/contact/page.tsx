import { ContactPage } from "@/components/pages/ContactPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Contact & Appointments | Dr. Feras Ya'ish",
  description:
    "Book a consultation with Dr. Feras Ya'ish at Healthpoint Hospital, Zayed Sports City, Abu Dhabi. Toll-free 800 77.",
};

export default function Page() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
