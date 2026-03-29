import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { businessInfo } from "@/data/businessInfo";

export const metadata: Metadata = {
  title: "Políticas de Citas | Luxe Brows & Spa",
  description:
    "Consulta las políticas de agenda, puntualidad, cancelaciones, reprogramaciones y condiciones generales de servicio de Luxe Brows & Spa.",
  alternates: {
    canonical: "/politicas-de-citas",
  },
};

const updatedAt = "29 de marzo de 2026";

const sections = [
  {
    title: "Agenda y confirmación",
    paragraphs: [
      "Las citas se atienden con base en disponibilidad y organización interna del negocio. La solicitud de cita por WhatsApp, redes sociales o cualquier otro medio no se considera confirmada hasta que Luxe Brows & Spa comunique expresamente la fecha y hora asignadas.",
      "Algunos servicios pueden requerir mayor tiempo, preparación o información previa; en esos casos se informará antes de confirmar la cita.",
    ],
  },
  {
    title: "Puntualidad",
    paragraphs: [
      "Para procurar una atención ordenada, se recomienda llegar puntualmente. Si hay retraso, el servicio podrá ajustarse al tiempo disponible, reprogramarse o no ser posible atenderse completo el mismo día, según la naturaleza del servicio y la agenda activa.",
    ],
  },
  {
    title: "Cancelaciones y reprogramaciones",
    items: [
      "Si necesitas cambiar tu cita, lo ideal es avisar con la mayor anticipación posible por el mismo medio en que la agendaste.",
      "Las reprogramaciones están sujetas a disponibilidad vigente al momento del cambio.",
      "Cuando existan ausencias reiteradas, cancelaciones de último momento o apartados no respetados, Luxe Brows & Spa podrá solicitar confirmación adicional o limitar futuras reservas.",
    ],
  },
  {
    title: "Anticipos y pagos",
    paragraphs: [
      "Salvo que se indique expresamente al momento de agendar, la publicación de servicios en este sitio no implica por sí misma cobro anticipado ni pago en línea.",
      "Si para algún servicio, paquete, fecha especial o apartado se solicita anticipo, monto, condiciones, aplicación, no reembolso o reprogramación, ello se informará de manera clara antes de confirmar la reserva.",
    ],
  },
  {
    title: "Precios, promociones y disponibilidad",
    paragraphs: [
      "Los precios, tiempos, promociones, paquetes y condiciones de servicio pueden actualizarse sin previo aviso, salvo en citas ya confirmadas bajo condiciones previamente informadas.",
      "Toda promoción, combo o beneficio especial estará sujeto a vigencia, disponibilidad y condiciones específicas comunicadas al momento de ofrecerse.",
    ],
  },
  {
    title: "Valoración profesional y límites del servicio",
    paragraphs: [
      "Cada servicio está sujeto a revisión al momento de la atención. Luxe Brows & Spa podrá sugerir ajustes, diferir o no realizar un servicio cuando existan condiciones que pudieran comprometer la seguridad, la higiene, el resultado esperado o la adecuada prestación.",
      "Los resultados pueden variar de una persona a otra según características individuales, cuidados posteriores, frecuencia de mantenimiento y otros factores ajenos al control del negocio.",
    ],
  },
  {
    title: "Acompañantes, menores y conducta en cabina",
    paragraphs: [
      "Para mantener orden y comodidad en cabina, el acceso de acompañantes podrá limitarse según el espacio, el tipo de servicio y la operación del momento.",
      "Cuando el servicio involucre a personas menores de edad o situaciones que requieran autorización adicional, el negocio podrá solicitar presencia o confirmación de madre, padre o tutor.",
      "Luxe Brows & Spa podrá negar o suspender la atención cuando existan conductas agresivas, irrespetuosas, riesgos sanitarios, incumplimientos reiterados o situaciones que afecten la operación y seguridad del espacio.",
    ],
  },
  {
    title: "Contacto",
    paragraphs: [
      `Para dudas sobre tu cita, cambios, disponibilidad o aclaraciones, puedes escribir por WhatsApp al +${businessInfo.whatsapp} o acudir a ${businessInfo.address.fullAddress}.`,
    ],
  },
];

export default function PoliticasDeCitasPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Políticas de Citas"
      intro="Estas políticas ayudan a mantener una agenda clara, una atención ordenada y una experiencia cuidada para cada persona que agenda con Luxe Brows & Spa."
      updatedAt={updatedAt}
      sections={sections}
    />
  );
}
