import { ForPhysiciansPage } from "@/components/pages/ForPhysiciansPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "For Physicians | Tertiary Referral Gateway — Dr. Feras Ya'ish",
  description:
    "Tertiary orthopaedic referral gateway for PJI, revision arthroplasty, periprosthetic fracture, and complex trauma.",
};

export default function Page() {
  return (
    <SiteShell>
      <ForPhysiciansPage />
    </SiteShell>
  );
}
