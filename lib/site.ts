import { businessInfo } from "@/data/businessInfo";

export const siteConfig = {
  name: businessInfo.name,
  shortName: "Luxe",
  locale: "es_MX",
  description:
    "Cejas, pestañas y faciales en Plaza LA FÉ, Ciudad Madero. Diseño personalizado, higiene impecable y agenda rápida por WhatsApp.",
  title: "Luxe Brows & Spa | Cejas, pestañas y faciales en Ciudad Madero",
  socialTitle: "Luxe Brows & Spa | Cejas, pestañas y faciales en Ciudad Madero",
  socialDescription:
    "Agenda cejas, pestañas y faciales en Ciudad Madero. Revisa servicios, precios, ubicación y reserva por WhatsApp.",
  ogImage: {
    path: "/images/share/og-hero.jpg",
    width: 1200,
    height: 630,
    alt: "Luxe Brows & Spa en Plaza LA FÉ · cejas, pestañas y faciales",
  },
  navLinks: [
    { label: "Servicios", href: "#servicios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "FAQ", href: "#faq" },
  ],
  keywords: [
    "cejas ciudad madero",
    "pestañas ciudad madero",
    "faciales ciudad madero",
    "spa ciudad madero",
    "cejas plaza la fe",
    "faciales plaza la fe",
    "diseño de cejas ciudad madero",
    "laminado de cejas ciudad madero",
    "lash lift ciudad madero",
    "hydrafacial ciudad madero",
    "lash lift",
    "laminado de cejas",
    "hydrafacial",
    "plaza la fe",
    "luxe brows spa",
    "ciudad madero",
    "tampico",
  ],
} as const;

export const whatsappMessages = {
  general: "Hola, me gustaría recibir información y agendar una cita en Luxe Brows & Spa.",
  service: (serviceName: string) =>
    `Hola, me gustaría recibir información sobre ${serviceName} y agendar una cita en Luxe Brows & Spa.`,
  location:
    "Hola, quiero ubicar fácilmente la sucursal en Plaza LA FÉ. ¿Me apoyan con la dirección?",
  booking: "Hola, quiero agendar mi cita por WhatsApp. ¿Qué horarios tienen disponibles?",
  faq: "Hola, tengo una pregunta sobre sus servicios y me gustaría recibir orientación por WhatsApp.",
} as const;
