import { PatientCarePage } from "@/components/pages/PatientCarePage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Patient Care Guide | Dr. Feras Ya'ish",
  description:
    "Your surgical care journey in Abu Dhabi: pre-operative preparation, hospital stay, and rehabilitation milestones with Dr. Feras Ya'ish at Healthpoint.",
};

export default function Page() {
  return (
    <SiteShell>
      <PatientCarePage />
    </SiteShell>
  );
}
