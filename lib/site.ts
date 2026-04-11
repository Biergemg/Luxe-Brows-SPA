import { businessInfo } from "@/data/businessInfo";

export const bookingLink = "https://colavo.link/ujFlxf6";

export const siteConfig = {
  name: businessInfo.name,
  shortName: "Luxe",
  locale: "es_MX",
  description:
    "Centro de cosmiatría avanzada especializado en tratamientos premium de cejas, pestañas, faciales, corporal y capilar en Plaza LA FÉ.",
  title: "Luxe Brows & Spa | Cejas, pestañas y cosmiatría avanzada",
  socialTitle: "Donde la belleza se eleva y la innovación comienza | Luxe Brows & Spa",
  socialDescription:
    "Centro de cosmiatría avanzada especializado en tratamientos premium de cejas y pestañas. Explora servicios, horarios y ubicación.",
  ogImage: {
    path: "/images/share/og-hero.jpg",
    width: 1200,
    height: 630,
    alt: "Donde la belleza se eleva y la innovación comienza · Luxe Brows & Spa",
  },
  navLinks: [
    { label: "Servicios", href: "#servicios" },
    { label: "Horarios", href: "#horarios" },
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
    "hair reset ciudad madero",
    "botox capilar ciudad madero",
    "taninoplastia ciudad madero",
    "plaza la fe",
    "luxe brows spa",
    "ciudad madero",
    "tampico",
  ],
} as const;

export const whatsappMessages = {
  general: "Hola, me gustaría recibir información y agendar una cita en Luxe Brows & Spa.",
  service: (serviceName: string) =>
    `Hola ! Requiero información sobre ${serviceName} antes de reservar mi cita.`,
  location:
    "Hola, quiero ubicar fácilmente la sucursal en Plaza LA FÉ. ¿Me apoyan con la dirección?",
  booking: "Hola, quiero orientación antes de reservar mi cita en línea. ¿Me apoyan?",
  faq: "Hola, tengo una pregunta sobre sus servicios y me gustaría recibir orientación por WhatsApp.",
} as const;
