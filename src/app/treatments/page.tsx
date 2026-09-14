import { TreatmentsPage } from "@/components/pages/TreatmentsPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Treatments & Procedures | Dr. Feras Ya'ish",
  description:
    "Hip and knee replacement, robotic arthroplasty, revision surgery, arthroscopy, and trauma reconstruction at Healthpoint Abu Dhabi.",
};

export default function Page() {
  return (
    <SiteShell>
      <TreatmentsPage />
    </SiteShell>
  );
}
