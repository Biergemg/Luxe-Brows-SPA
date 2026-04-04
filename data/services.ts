import { ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cejas",
    title: "Cejas",
    description: "Cejas definidas, naturales o llenas — según tu estilo y la forma de tu rostro.",
    iconName: "Eye",
    imagePath: "/images/mirada-luxe.webp",
    services: [
      { id: "ceja-cera", name: "Diseño de ceja (cera)", description: "Diseño con hilo y epilación con cera.", price: "$150" },
      { id: "ceja-hilo", name: "Diseño de ceja (hilo)", description: "Definición precisa para perfilar tu ceja.", price: "$220" },
      { id: "pigmentacion-cejas", name: "Pigmentación de cejas (cera)", description: "Incluye diseño con hilo y epilación con cera.", price: "$300" },
      { id: "laminacion-cejas", name: "Laminación de cejas (cera)", description: "Incluye diseño con hilo y epilación con cera.", price: "$380" },
      { id: "lash-lift", name: "Lash Lift", description: "Realce para abrir la mirada con acabado limpio.", price: "$300" },
      { id: "combo-luxe", name: "Combo LUXE (Laminado + Tinte / Henna)", description: "Incluye laminado, color (henna o tinte), diseño con hilo y epilación con cera.", price: "$470", highlight: "Favorito" }
    ]
  },
  {
    id: "combos",
    title: "Combos y simultáneos",
    description: "Más resultados en una sola cita. Elige tu combinación y sal con la mirada completa.",
    iconName: "Sparkles",
    imagePath: "/images/gallery-3.webp",
    services: [
      { id: "diseno-bozo", name: "Diseño de ceja + Bozo", description: "Servicio combinado para perfilar y limpiar la zona superior del labio.", price: "$200" },
      { id: "diseno-lashlift", name: "Diseño de ceja + Lash Lift", description: "Diseño de ceja con cera o hilo + lash lift.", price: "$400" },
      { id: "tinte-lashlift", name: "Tinte de ceja + Lash Lift", description: "Mirada más definida con color y levantamiento de pestaña.", price: "$580" },
      { id: "laminado-lashlift", name: "Laminado de ceja + Lash Lift", description: "Combo para ceja y pestaña en una sola cita.", price: "$650" },
      { id: "combo-luxe-lashlift", name: "Combo LUXE + Lash Lift", description: "Laminado, color, diseño y lash lift en el mismo servicio.", price: "$700" }
    ]
  },
  {
    id: "cara",
    title: "Cara",
    description: "Limpieza profunda, hidratación y tecnología estética para una piel que luce diferente desde la primera sesión.",
    iconName: "Activity",
    imagePath: "/images/skin-tech.webp",
    services: [
      { id: "dermaplaning", name: "Dermaplaning", description: "Higiene, desincrustante, dermaplaning, extracciones manuales, alta frecuencia, hidratación Caviar Q10, ultrasonido, masaje craneofacial, mascarilla hidratante, hidratación de labios y pantalla solar.", price: "$600" },
      { id: "hydrafacial", name: "Hydrafacial", description: "Higiene, desincrustante, peeling ultrasónico, hidrodermoabrasión, extracciones manuales, alta frecuencia, hidratación Caviar, masaje craneofacial, mascarilla hidratante, terapia LED, hidratación de labios y pantalla solar.", price: "$600" },
      { id: "microneedling", name: "Microneedling Regenerador", description: "Facial o capilar. Incluye higiene, microdermoabrasión, microneedling con ampolleta Caviar Q10/Peptiage+, masaje craneofacial, terapia LED e hidratación de labios.", price: "$700" },
      { id: "hifu", name: "HIFU", description: "Aparatología estética para tensar tejido, disminuir arrugas y líneas de expresión, reducir grasa localizada y mejorar la textura de la piel estimulando la producción de colágeno. Incluye limpieza de bienvenida y terapia de luz roja.", price: "$2300", note: "Áreas a tratar: cara completa, doble mentón y cuello." }
    ]
  },
  {
    id: "cuerpo",
    title: "Cuerpo",
    description: "Tratamientos pensados para tu objetivo — reducción, limpieza o mantenimiento — sesión a sesión.",
    iconName: "Activity",
    imagePath: "/images/body-sculpt.webp",
    services: [
      { id: "reductivo", name: "Reductivo personalizado", description: "Técnicas combinadas personalizadas a tus necesidades en cada sesión.", price: "$450", note: "3 sesiones $1200 · 5 sesiones $1900 · 10 sesiones $3700" },
      { id: "gluteos-espalda", name: "Limpieza de glúteos / espalda", description: "Higiene, microdermoabrasión, extracciones manuales, alta frecuencia, mascarilla purificante, hidratación y pantalla solar.", price: "$480" }
    ]
  },
  {
    id: "epilacion-facial",
    title: "Epilaciones faciales",
    description: "Acabado limpio y preciso en cada zona del rostro.",
    iconName: "Sparkles",
    imagePath: "/images/gallery-1.webp",
    services: [
      { id: "bozo", name: "Bozo", description: "Epilación facial con cera.", price: "$60" },
      { id: "frente", name: "Frente", description: "Epilación facial con cera.", price: "$90" },
      { id: "barbilla", name: "Barbilla", description: "Epilación facial con cera.", price: "$60" },
      { id: "patilla", name: "Patilla", description: "Epilación facial con cera.", price: "$90" }
    ]
  },
  {
    id: "epilacion-corporal",
    title: "Epilaciones corporales",
    description: "Piel suave sin el esfuerzo. Distintas zonas, cera profesional, resultado limpio.",
    iconName: "Sparkles",
    imagePath: "/images/spa-ambient.webp",
    services: [
      { id: "axilas", name: "Axilas", description: "Epilación corporal con cera.", price: "$150" },
      { id: "medias-piernas", name: "Medias piernas", description: "Epilación corporal con cera.", price: "$300" },
      { id: "piernas-completas", name: "Piernas completas", description: "Epilación corporal con cera.", price: "$480" },
      { id: "brazos-completos", name: "Brazos completos", description: "Epilación corporal con cera.", price: "$250" },
      { id: "medios-brazos", name: "Medios brazos", description: "Epilación corporal con cera.", price: "$170" }
    ]
  }
];
