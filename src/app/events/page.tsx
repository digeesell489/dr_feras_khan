import { EventsHub } from "@/components/pages/EventsHub";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Events, Photographs and Media Appearances | Dr. Feras Ya'ish",
  description: "Event photographs and newspaper and media appearances by Dr. Feras Ya'ish.",
};

export default function Page() {
  return (
    <SiteShell>
      <EventsHub />
    </SiteShell>
  );
}
