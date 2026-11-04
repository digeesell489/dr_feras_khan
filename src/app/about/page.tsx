import { AboutPage } from "@/components/pages/AboutPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata = {
  title: "About Dr. Feras Ya'ish | Consultant Trauma & Orthopaedic Surgeon",
  description:
    "About Dr. Feras Ya'ish — UK-trained consultant orthopaedic surgeon in Abu Dhabi. FRCS (Tr & Orth), CCT, and AO Recon MENA chair at Healthpoint.",
};

export default function Page() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
