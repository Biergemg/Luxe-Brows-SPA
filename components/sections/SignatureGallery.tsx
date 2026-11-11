import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";

const images = [
  { src: "/images/carrusel/tinte-cejas.jpeg", title: "Diseño de cejas" },
  { src: "/images/carrusel/shaping-cejas.jpeg", title: "Shaping de cejas" },
  { src: "/images/carrusel/diseno-cejas.jpeg", title: "Pigmentación de cejas" },
  { src: "/images/carrusel/laminacion-cejas.jpeg", title: "Laminación de cejas" },
  { src: "/images/carrusel/laminacion-con-tinte.jpeg", title: "Laminación con tinte" },
  { src: "/images/carrusel/epilacion-cejas-cera-hilo.jpeg", title: "Epilación de cejas" },
  { src: "/images/carrusel/lash-lift.jpeg", title: "Lash lift" },
  { src: "/images/carrusel/faciales-tratamientos.jpeg", title: "Tratamientos faciales" },
  { src: "/images/carrusel/epilacion-corporal.jpeg", title: "Epilación corporal" },
  { src: "/images/carrusel/hair-care.jpeg", title: "Hair care" },
  { src: "/images/carrusel/body-sculpt-masaje.jpeg", title: "Body sculpt" }
];

export function SignatureGallery() {
  return (
    <section id="galeria" className="overflow-hidden bg-[#e7ddd0] py-24 md:py-32" aria-labelledby="galeria-title">
      <div className="luxe-container">
        <div data-reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="luxe-eyebrow mb-5 text-[#694a30]">Nuestro universo</p>
            <h2 id="galeria-title" className="luxe-serif max-w-2xl text-[clamp(3rem,5vw,5rem)] leading-[1.08] tracking-[-.055em]">Cada detalle <em>importa.</em></h2>
          </div>
          <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="luxe-link self-start text-[#493c32]">Ver Instagram <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div role="region" aria-label="Galería de publicaciones de Luxe Brows & Spa" tabIndex={0} className="luxe-mobile-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 md:gap-6 md:px-[max(3rem,calc((100vw-1380px)/2))]">
        {images.map((item, index) => (
          <div key={item.src} className="group w-[240px] flex-none snap-start sm:w-[300px] md:w-[340px]">
            <div className="luxe-image-frame relative aspect-[4/5]">
              <Image src={item.src} alt={item.title + " · contenido original Luxe Brows & Spa"} fill sizes="(max-width:768px) 240px, 340px" className="object-cover" loading="lazy" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#2c221a]/15 pt-3">
              <span className="text-sm text-[#40352d]">{item.title}</span>
              <span className="text-xs text-[#68492f]">{String(index + 1).padStart(2,"0")}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="luxe-container mt-3 text-xs tracking-[.1em] text-[#584b40]">Desliza para explorar la galería completa →</div>
    </section>
  );
}
