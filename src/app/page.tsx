import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { Hospital } from "@/components/Hospital";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <div className="flex w-full flex-col overflow-hidden">
        <Hero />
        <Approach />
        <Excellence />
        <ComplexCentre />
        <PatientEducation />
        <Hospital />
        <FAQ />
        <HomeCta />
      </div>
    </SiteShell>
  );
}
