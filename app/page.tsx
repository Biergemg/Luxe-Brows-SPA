import { Hero } from "@/components/sections/Hero";
import { ServiciosBento } from "@/components/sections/ServiciosBento";
import { Testimonios } from "@/components/sections/Testimonios";
import { UbicacionFacilidades } from "@/components/sections/UbicacionFacilidades";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ServiciosBento />
      <Testimonios />
      <UbicacionFacilidades />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
