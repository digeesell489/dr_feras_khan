import { ConditionsPage } from "@/components/pages/ConditionsPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "Conditions & Treatments Explorer | Dr. Feras Ya'ish",
  description:
    "Interactive orthopaedic treatment explorer for hip, knee, trauma, and revision pathways.",
};

export default function Page() {
  return (
    <SiteShell>
      <ConditionsPage />
    </SiteShell>
  );
}
