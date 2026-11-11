import { Hero } from "@/components/sections/Hero";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { SignatureInterlude } from "@/components/sections/SignatureInterlude";
import { ServiciosBento } from "@/components/sections/ServiciosBento";
import { Testimonios } from "@/components/sections/Testimonios";
import { SignatureGallery } from "@/components/sections/SignatureGallery";
import { UbicacionFacilidades } from "@/components/sections/UbicacionFacilidades";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <EditorialIntro />
      <SignatureInterlude />
      <ServiciosBento />
      <Testimonios />
      <SignatureGallery />
      <UbicacionFacilidades />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
