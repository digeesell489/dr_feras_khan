import { EventMediaPage } from "@/components/pages/EventMediaPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Appearances on newspapers and media | Dr. Feras Ya'ish",
  description:
    "Media appearances by Dr. Feras Ya'ish in Abu Dhabi: newspaper, television, and press coverage of orthopaedic care and joint surgery stories.",
};

export default function Page() {
  return (
    <SiteShell>
      <EventMediaPage />
    </SiteShell>
  );
}
