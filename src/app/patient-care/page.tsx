import { PatientCarePage } from "@/components/pages/PatientCarePage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Patient Care Guide | Dr. Feras Ya'ish",
  description:
    "Surgical care and recovery journey, pre-operative preparation, hospital stay, and rehabilitation milestones at Healthpoint Hospital.",
};

export default function Page() {
  return (
    <SiteShell>
      <PatientCarePage />
    </SiteShell>
  );
}
