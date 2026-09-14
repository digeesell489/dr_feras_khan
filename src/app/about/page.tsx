import { AboutPage } from "@/components/pages/AboutPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "About Dr. Feras Ya'ish | Consultant Trauma & Orthopaedic Surgeon",
  description:
    "UK-trained consultant orthopaedic surgeon at Healthpoint Hospital, Abu Dhabi. FRCS (Tr & Orth), CCT, Chairman AO Recon MENA.",
};

export default function Page() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
