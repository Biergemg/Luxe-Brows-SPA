import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { businessInfo } from "@/data/businessInfo";

export const metadata: Metadata = {
  title: "Políticas de Citas | Luxe Brows & Spa",
  description:
    "Consulta las políticas de agenda, anticipos, cancelaciones, reprogramaciones y condiciones generales de servicio de Luxe Brows & Spa.",
  alternates: {
    canonical: "/politicas-de-citas",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const updatedAt = "29 de marzo de 2026";

const sections = [
  {
    title: "Agenda y confirmación",
    paragraphs: [
      "Las citas se organizan conforme a la disponibilidad de agenda y a la operación interna de Luxe Brows & Spa. Escribir por WhatsApp, redes sociales u otro medio de contacto no confirma por sí solo una reserva.",
      "La cita queda confirmada cuando se asigna fecha y hora y, cuando aplique, se valida el anticipo correspondiente. En algunos servicios o apartados también podremos solicitar información adicional antes de confirmar.",
    ],
  },
  {
    title: "Anticipo para reservar",
    paragraphs: [
      "Para confirmar apartados en agenda, Luxe Brows & Spa podrá solicitar un anticipo de $100 MXN. Este anticipo forma parte del costo total del servicio y se registra como confirmación de la reserva cuando así se indique al momento de agendar.",
      "El anticipo puede enviarse por transferencia o por Stripe mediante link de pago. El pago en efectivo puede utilizarse para liquidación o pago presencial, pero la reserva requiere anticipo cuando así lo establezca la agenda del negocio.",
    ],
  },
  {
    title: "Cancelaciones y reprogramaciones",
    items: [
      "Puedes cancelar o reagendar conservando tu anticipo si avisas con al menos 12 horas de anticipación.",
      "El anticipo permite una sola reagenda y toda reprogramación queda sujeta a disponibilidad vigente.",
      "Si cancelas fuera del tiempo indicado, el anticipo se pierde.",
      "Si no te presentas a tu cita (no-show), el anticipo se pierde.",
    ],
  },
  {
    title: "Puntualidad",
    paragraphs: [
      "Te recomendamos llegar puntualmente. Si existe retraso, el servicio podrá ajustarse al tiempo disponible, reprogramarse o no completarse el mismo día, según el tipo de servicio y la agenda activa en ese momento.",
    ],
  },
  {
    title: "Recordatorios de cita",
    paragraphs: [
      "Para dar seguimiento y mantener la agenda ordenada, el sistema puede enviar recordatorios automáticos de cita. De forma habitual, estos recordatorios pueden enviarse 24 horas antes y 2 horas antes del horario reservado.",
    ],
  },
  {
    title: "Especialista y atención del equipo",
    paragraphs: [
      "La atención puede asignarse a la especialista disponible según agenda. Algunas citas podrán ser atendidas por integrantes del equipo autorizadas por Luxe Brows & Spa.",
      "Si en algún caso se permite elegir especialista, ello dependerá de disponibilidad real y de las condiciones internas de la agenda.",
    ],
  },
  {
    title: "Precios, promociones y disponibilidad",
    paragraphs: [
      "Los precios, promociones, combos, paquetes, tiempos de servicio y disponibilidad pueden actualizarse. Sin embargo, las citas ya confirmadas respetan las condiciones informadas al momento de reservar.",
      "Cada promoción o paquete puede tener reglas específicas de vigencia, disponibilidad, combinación o aplicación, las cuales se comunicarán cuando corresponda.",
    ],
  },
  {
    title: "Condiciones para prestar el servicio",
    paragraphs: [
      "Cada servicio está sujeto a revisión al momento de la atención. Si existe alguna condición que pudiera afectar la seguridad, la higiene, la calidad del resultado o la adecuada prestación del servicio, Luxe Brows & Spa podrá sugerir ajustes, diferir la cita o no realizar el servicio solicitado.",
      "Los resultados pueden variar de una persona a otra según características individuales, cuidados posteriores, frecuencia de mantenimiento y otros factores propios de cada caso.",
    ],
  },
  {
    title: "Acompañantes, menores y conducta en cabina",
    paragraphs: [
      "Para mantener una atención ordenada y cómoda, se pueden limitar acompañantes según el espacio, el tipo de servicio y la operación del momento.",
      "No se recomienda asistir con niños cuando ello pueda afectar el tiempo, la concentración o el desarrollo adecuado de la atención.",
      "Luxe Brows & Spa podrá negar o suspender el servicio ante conductas agresivas, incumplimientos reiterados, riesgos sanitarios o cualquier situación que afecte la operación, la seguridad o la experiencia dentro del espacio.",
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
