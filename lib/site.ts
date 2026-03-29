import { businessInfo } from "@/data/businessInfo";

export const landingVisibility = {
  heroHighlights: false,
  heroScrollCue: false,
  whyChooseUs: false,
  serviceContext: false,
  resultsGallery: false,
  commitment: false,
} as const;

const baseNavLinks = [
  { label: "Servicios", href: "#servicios", visible: true },
  { label: "Galería", href: "#galeria", visible: landingVisibility.resultsGallery },
  { label: "Testimonios", href: "#testimonios", visible: true },
  { label: "Ubicación", href: "#ubicacion", visible: true },
  { label: "FAQ", href: "#faq", visible: true },
] as const;

export const siteConfig = {
  name: businessInfo.name,
  shortName: "Luxe",
  locale: "es_MX",
  description:
    "Servicios de cejas, pestañas y faciales en Plaza LA FÉ. Consulta información y agenda por WhatsApp.",
  title: "Luxe Brows & Spa | Cejas, pestañas y faciales",
  socialTitle: "Luxe Brows & Spa | Cejas, pestañas y faciales",
  socialDescription:
    "Cejas, pestañas y faciales en un espacio pensado para que tu cita se sienta tranquila, cuidada y acorde a lo que te gusta.",
  ogImage: {
    path: "/images/share/og-hero.jpg",
    width: 1200,
    height: 630,
    alt: "Luxe Brows & Spa · cejas, pestañas y faciales",
  },
  navLinks: baseNavLinks.filter((link) => link.visible).map(({ label, href }) => ({ label, href })),
  keywords: [
    "cejas",
    "pestañas",
    "faciales",
    "spa",
    "brows",
    "lash lift",
    "laminado de cejas",
    "hydrafacial",
    "HIFU",
    "Plaza La Fe",
    "Ciudad Madero",
  ],
} as const;

export const whatsappMessages = {
  general: "Hola, me gustaría recibir información y agendar una cita en Luxe Brows & Spa.",
  service: (serviceName: string) =>
    `Hola, me gustaría recibir información sobre ${serviceName} y agendar una cita en Luxe Brows & Spa.`,
  location:
    "Hola, quiero ubicar fácilmente la sucursal en Plaza LA FÉ. ¿Me apoyan con la dirección?",
  booking: "Hola, deseo agendar mi cita por WhatsApp.",
  faq: "Hola, tengo una pregunta sobre sus servicios y me gustaría recibir orientación por WhatsApp.",
} as const;
