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
      "Este aviso se emite en atención a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás disposiciones aplicables en México.",
    ],
  },
  {
    title: "Datos que podemos recabar",
    items: [
      "Nombre y datos de contacto, incluyendo número de teléfono, WhatsApp o perfiles desde los cuales se solicita información o cita.",
      "Información necesaria para atender tu solicitud, identificar el servicio de interés, organizar tu cita y dar seguimiento posterior.",
      "Datos que compartas voluntariamente sobre preferencias, disponibilidad, antecedentes relevantes para el servicio o comentarios relacionados con tu atención.",
      "Datos de navegación básicos del sitio, como información técnica y estadística de uso, cuando correspondan herramientas de analítica o seguridad.",
    ],
  },
  {
    title: "Finalidades primarias",
    items: [
      "Atender solicitudes de información, contacto, ubicación y agenda.",
      "Confirmar, reprogramar o dar seguimiento a citas.",
      "Brindar orientación previa y posterior a los servicios solicitados.",
      "Mantener control interno, seguridad, calidad en la atención y registro administrativo básico de clientas y prospectos.",
    ],
  },
  {
    title: "Finalidades secundarias",
    paragraphs: [
      "De manera adicional, y solo cuando resulte razonable conforme al medio de contacto utilizado, la información podrá usarse para compartir actualizaciones del negocio, disponibilidad, novedades o promociones. Si no deseas este tratamiento secundario, puedes solicitarlo por los medios indicados más adelante.",
    ],
  },
  {
    title: "Transferencias",
    paragraphs: [
      "No compartimos tus datos personales con terceros ajenos al funcionamiento ordinario del negocio, salvo cuando sea necesario para cumplir obligaciones legales, atender requerimientos de autoridad competente o utilizar proveedores tecnológicos indispensables para comunicación, hospedaje, analítica, mapas o gestión operativa del sitio y la agenda.",
      "Cuando intervengan terceros encargados, el tratamiento se limitará a las instrucciones y finalidades compatibles con este aviso.",
    ],
  },
  {
    title: "Medios para ejercer derechos ARCO y revocar consentimiento",
    paragraphs: [
      "Puedes solicitar acceso, rectificación, cancelación u oposición respecto de tus datos personales, así como revocar tu consentimiento para tratamientos que así lo permitan.",
      `Para ello, puedes comunicarte por WhatsApp al +${businessInfo.whatsapp} o presentar tu solicitud en el domicilio del negocio. La solicitud deberá indicar tu nombre, un medio para responderte, la descripción clara de los datos o derechos que deseas ejercer y, en su caso, documentos que permitan identificarte o acreditar representación.`,
      "Las solicitudes serán atendidas dentro de plazos razonables y conforme a la normativa aplicable.",
    ],
  },
  {
    title: "Uso de tecnologías y enlaces externos",
    paragraphs: [
      "Este sitio puede utilizar herramientas técnicas para funcionamiento, medición de tráfico, seguridad o mejora de experiencia. Asimismo, puede enlazar a servicios de terceros como WhatsApp, Instagram, Facebook, Google Maps o plataformas de hospedaje. El uso de dichos servicios se rige también por sus propios términos y avisos de privacidad.",
    ],
  },
  {
    title: "Seguridad y conservación",
    paragraphs: [
      "Adoptamos medidas administrativas, técnicas y organizativas razonables para procurar la protección de la información y evitar accesos no autorizados, pérdida o uso indebido.",
      "Los datos se conservarán únicamente por el tiempo necesario para cumplir las finalidades descritas, atender obligaciones legales o resolver aclaraciones relacionadas con la atención brindada.",
    ],
  },
  {
    title: "Cambios a este aviso",
    paragraphs: [
      "Luxe Brows & Spa podrá actualizar este aviso cuando cambien las prácticas operativas, los medios de contacto, los servicios del sitio o las obligaciones legales aplicables. Cualquier versión vigente estará disponible en esta misma sección.",
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
