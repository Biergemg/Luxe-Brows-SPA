import { Hero } from "@/components/sections/Hero";
import { ConfianzaUbicacion } from "@/components/sections/ConfianzaUbicacion";
import { ServiciosBento } from "@/components/sections/ServiciosBento";
import { AutoridadTecnica } from "@/components/sections/AutoridadTecnica";
import { GaleriaResultados } from "@/components/sections/GaleriaResultados";
import { CompromisoLuxe } from "@/components/sections/CompromisoLuxe";
import { ProcesoAtencion } from "@/components/sections/ProcesoAtencion";
import { Testimonios } from "@/components/sections/Testimonios";
import { UbicacionFacilidades } from "@/components/sections/UbicacionFacilidades";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";
import { landingVisibility } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {landingVisibility.whyChooseUs ? <ConfianzaUbicacion /> : null}
      <ServiciosBento />
      {landingVisibility.serviceContext ? <AutoridadTecnica /> : null}
      {landingVisibility.resultsGallery ? <GaleriaResultados /> : null}
      {landingVisibility.commitment ? <CompromisoLuxe /> : null}
      <ProcesoAtencion />
      <Testimonios />
      <UbicacionFacilidades />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
