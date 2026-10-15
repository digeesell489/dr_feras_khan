import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HomeCta } from "@/components/HomeCta";
import { Hospital } from "@/components/Hospital";
import { PatientEducation } from "@/components/PatientEducation";
import { SiteShell } from "@/components/SiteShell";
import { showCaseExamples } from "@/lib/visibility";

export default function Home() {
  return (
    <SiteShell>
      <div className="flex w-full flex-col overflow-hidden">
        <Hero />
        <Approach />
        <Excellence />
        {showCaseExamples ? <ComplexCentre /> : null}
        <PatientEducation />
        <Hospital />
        <FAQ />
        <HomeCta />
      </div>
    </SiteShell>
  );
}
