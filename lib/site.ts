import { businessInfo } from "@/data/businessInfo";

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
    path: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Luxe Brows & Spa · cejas, pestañas y faciales",
  },
  navLinks: [
    { label: "Servicios", href: "#servicios" },
    { label: "Galería", href: "#galeria" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "FAQ", href: "#faq" },
  ],
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
