import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Hospital } from "@/components/Hospital";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Approach />
      <Excellence />
      <ComplexCentre />
      <PatientEducation />
      <Hospital />
      <FAQ />
    </SiteShell>
  );
}
