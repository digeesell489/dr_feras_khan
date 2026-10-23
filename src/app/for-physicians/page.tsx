import { ForPhysiciansPage } from "@/components/pages/ForPhysiciansPage";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "For Physicians | Tertiary Referral Gateway — Dr. Feras Ya'ish",
  description:
    "Tertiary orthopaedic referral gateway for PJI, revision arthroplasty, periprosthetic fracture, and complex trauma.",
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "For Physicians", path: "/for-physicians" },
        ])}
      />
      <SiteShell>
        <ForPhysiciansPage />
      </SiteShell>
    </>
  );
}
