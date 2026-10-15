import { EventsPage } from "@/components/pages/EventsPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Event Image | Dr. Feras Ya'ish",
  description: "Photographs from lectures, courses, and workshops by Dr. Feras Ya'ish.",
};

export default function Page() {
  return (
    <SiteShell>
      <EventsPage />
    </SiteShell>
  );
}
