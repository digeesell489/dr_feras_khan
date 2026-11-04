import { TreatmentsPage } from "@/components/pages/TreatmentsPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Treatments & Procedures | Dr. Feras Ya'ish",
  description:
    "Hip and knee treatments in Abu Dhabi: total and partial replacement, robotic arthroplasty, revision, arthroscopy, ligaments, and trauma care.",
};

export default function Page() {
  return (
    <SiteShell>
      <TreatmentsPage />
    </SiteShell>
  );
}
