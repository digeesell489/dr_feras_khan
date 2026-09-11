import { Approach } from "@/components/Approach";
import { ComplexCentre } from "@/components/ComplexCentre";
import { Excellence } from "@/components/Excellence";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hospital } from "@/components/Hospital";
import { PatientEducation } from "@/components/PatientEducation";

export default function Home() {
  return (
    <div id="top" className="min-h-full bg-cream">
      <Header />
      <main>
        <Hero />
        <Approach />
        <Excellence />
        <ComplexCentre />
        <PatientEducation />
        <Hospital />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
