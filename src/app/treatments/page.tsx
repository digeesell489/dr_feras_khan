import { TreatmentsPage } from "@/components/pages/TreatmentsPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Treatments & Procedures | Dr. Feras Ya'ish",
  description:
    "Total knee replacement, partial knee replacement, robotic joint replacement, revision hip and knee surgery, knee arthroscopy, knee ligament reconstruction, and trauma reconstruction.",
};

export default function Page() {
  return (
    <SiteShell>
      <TreatmentsPage />
    </SiteShell>
  );
}
