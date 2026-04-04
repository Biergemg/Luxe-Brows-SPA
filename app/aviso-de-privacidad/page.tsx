import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { businessInfo } from "@/data/businessInfo";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Luxe Brows & Spa",
  description:
    "Conoce cómo Luxe Brows & Spa recaba, usa, resguarda y atiende solicitudes relacionadas con datos personales.",
  alternates: {
    canonical: "/aviso-de-privacidad",
  },
};

const updatedAt = "29 de marzo de 2026";

const sections = [
  {
    title: "Responsable del tratamiento",
    paragraphs: [
      `${businessInfo.name}, con domicilio en ${businessInfo.address.fullAddress}, es responsable del tratamiento de los datos personales que recaba a través de este sitio, por WhatsApp, redes sociales y medios de contacto relacionados con la agenda y prestación de servicios.`,
      "Este aviso se emite de conformidad con la legislación mexicana aplicable en materia de protección de datos personales.",
    ],
  },
  {
    title: "Datos que podemos recabar",
    items: [
      "Nombre y datos de contacto, como número telefónico, WhatsApp o perfiles desde los cuales solicitas información o citas.",
      "Datos relacionados con agenda, confirmación de citas, recordatorios, seguimiento post-servicio y control interno de clientas y prospectos.",
      "Información que compartas de manera voluntaria sobre disponibilidad, preferencias, historial de atención o necesidades relacionadas con el servicio.",
      "Datos técnicos básicos de navegación y uso del sitio, cuando correspondan herramientas de seguridad, medición o mejora operativa.",
    ],
  },
  {
    title: "Finalidades primarias",
    items: [
      "Atender solicitudes de información, contacto, ubicación y agenda.",
      "Confirmar, organizar, reprogramar o dar seguimiento a citas.",
      "Enviar recordatorios automáticos o mensajes relacionados con tu reserva.",
      "Brindar orientación previa y seguimiento posterior a los servicios.",
      "Mantener control administrativo, operativo y de calidad sobre clientas, prospectos y servicios agendados.",
    ],
  },
  {
    title: "Finalidades secundarias",
    paragraphs: [
      "De manera adicional, la información podrá utilizarse para compartir novedades, disponibilidad, promociones o comunicaciones relacionadas con Luxe Brows & Spa. Si no deseas este tratamiento secundario, puedes solicitarlo por los medios indicados en este aviso.",
    ],
  },
  {
    title: "Proveedores tecnológicos y transferencias",
    paragraphs: [
      "Para la operación del negocio, algunos datos pueden tratarse a través de proveedores tecnológicos necesarios para mensajería, pagos, hospedaje, analítica, agenda u operación del sitio. También pueden intervenir servicios de mapas o redes sociales cuando los utilices de forma voluntaria.",
      "Luxe Brows & Spa no vende tus datos personales a terceros. Solo podrá compartirlos cuando exista una obligación legal, requerimiento de autoridad competente o cuando intervengan encargados tecnológicos que actúen bajo instrucciones compatibles con este aviso.",
    ],
  },
  {
    title: "Derechos ARCO y revocación",
    paragraphs: [
      "Puedes solicitar acceso, rectificación, cancelación u oposición respecto de tus datos personales, así como revocar tu consentimiento para tratamientos que así lo permitan.",
      `Para ejercer estos derechos, puedes comunicarte por WhatsApp al +${businessInfo.whatsapp} o presentar tu solicitud en ${businessInfo.address.fullAddress}. Tu solicitud deberá incluir tu nombre, medio de contacto para responderte y la descripción clara del derecho que deseas ejercer.`,
      "Las solicitudes se atenderán dentro de plazos razonables y conforme a la normativa aplicable en México.",
    ],
  },
  {
    title: "Uso de enlaces y herramientas externas",
    paragraphs: [
      "Este sitio puede enlazar a herramientas o plataformas de terceros, como WhatsApp, redes sociales, servicios de mapas o proveedores de pago. El uso de dichas plataformas también se rige por sus propios términos y avisos de privacidad.",
    ],
  },
  {
    title: "Seguridad y conservación",
    paragraphs: [
      "Adoptamos medidas administrativas, técnicas y organizativas razonables para procurar la protección de la información y evitar accesos no autorizados, pérdida o uso indebido.",
      "Los datos se conservarán únicamente durante el tiempo necesario para cumplir las finalidades aquí descritas, atender obligaciones legales o resolver aclaraciones relacionadas con la atención brindada.",
    ],
  },
  {
    title: "Cambios a este aviso",
    paragraphs: [
      "Luxe Brows & Spa podrá actualizar este aviso cuando cambien sus prácticas operativas, los medios de contacto, los servicios ofrecidos o las disposiciones legales aplicables. La versión vigente estará disponible en esta misma sección.",
    ],
  },
];

export default function AvisoDePrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Aviso de Privacidad"
      intro="En esta sección te compartimos, de forma clara, cómo tratamos la información que recibimos cuando solicitas informes, agendas una cita o interactúas con Luxe Brows & Spa."
      updatedAt={updatedAt}
      sections={sections}
    />
  );
}
