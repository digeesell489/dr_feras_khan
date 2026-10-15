import { EventMediaPage } from "@/components/pages/EventMediaPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Appearances on newspapers and media | Dr. Feras Ya'ish",
  description: "Newspaper, television, and media appearances by Dr. Feras Ya'ish.",
};

export default function Page() {
  return (
    <SiteShell>
      <EventMediaPage />
    </SiteShell>
  );
}
