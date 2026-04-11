import { ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "cejas-pestanas",
    title: "Cejas | Pestañas",
    description: "Potencia tu mirada. Cejas y pestañas perfectas que facilitan tu rutina diaria.",
    iconName: "Eye",
    imagePath: "/images/mirada-luxe.webp",
    services: [
      { id: "ceja-cera", name: "Diseño de ceja", description: "Mapping personalizado con hilo y epilación con cera | Cambia a hilo +$70", price: "$150" },
      
      { id: "pigmentacion-cejas", name: "Pigmentación de Ceja", description: "Tono personalizado. Incluye mapping y epilación con cera | Cambia a hilo +$70", price: "$300" },
      { id: "laminacion-cejas", name: "Laminación de ceja", description: "Incluye mapping y epilación con cera | Cambia a hilo +$70", price: "$380" },
      { id: "lash-lift", name: "Lash Lift", description: "Técnica Coreana Fusión. Incluye tinturado negro intenso.", price: "$300" },
      { id: "combo-luxe", name: "Combo Luxe | Full Brows", description: "Laminación + Pigmento. Incluye mapping y epilación con cera | Cambia a hilo +$70", price: "$470", highlight: "Favorito" },
    ],
  },
  {
    id: "combos",
    title: "Combos | Simultáneos",
    description: "Optimiza tu tiempo eligiendo tratamientos simultáneos.",
    iconName: "Sparkles",
    imagePath: "/images/gallery-3.webp",
    services: [
      { id: "diseno-bozo", name: "Diseño de ceja + Epilación de Bozo", description: "", price: "$200" },
      { id: "diseno-lashlift", name: "Diseño de ceja + Lash Lift", description: "", price: "$400" },
      { id: "tinte-lashlift", name: "Tinte de ceja + Lash Lift", description: "", price: "$580" },
      { id: "laminado-lashlift", name: "Laminado de ceja + Lash Lift", description: "", price: "$650" },
      { id: "combo-luxe-lashlift", name: "Combo LUXE + Lash Lift", description: "", price: "$700" },
    ],
  },
  {
    id: "facial",
    title: "Facial",
    description: "Transforma tu piel con tratamientos personalizados.",
    iconName: "Activity",
    imagePath: "/images/skin-tech.webp",
    services: [
      { id: "dermaplaning", name: "Dermaplaning", description: "Higiene, desincrustante, dermaplaning, extracciones manuales, alta frecuencia, hidratación Caviar Q10, ultrasonido, masaje craneofacial, mascarilla hidratante, hidratación de labios y pantalla solar.", price: "$600" },
      { id: "hydrafacial", name: "Hydrafacial", description: "Higiene, desincrustante, peeling ultrasónico, hidrodermoabrasión, extracciones manuales, alta frecuencia, hidratación Caviar, masaje craneofacial, mascarilla hidratante, terapia LED, hidratación de labios y pantalla solar.", price: "$600" },
      { id: "microneedling", name: "Microneedling Regenerador", description: "Facial o capilar. Incluye higiene, microdermoabrasión, microneedling con ampolleta Caviar Q10/Peptiage+, masaje craneofacial, terapia LED e hidratación de labios.", price: "$700" },
      { id: "hifu", name: "HIFU", description: "Aparatología estética para tensar tejido, disminuir arrugas y líneas de expresión, reducir grasa localizada y mejorar la textura de la piel estimulando la producción de colágeno. Incluye limpieza de bienvenida y terapia de luz roja.", price: "$2300", note: "Áreas a tratar: cara completa, doble mentón y cuello." },
    ],
  },
  {
    id: "corporales",
    title: "Corporales",
    description: "Tratamientos enfocados en tus objetivos: reducción, limpieza o mantenimiento.",
    iconName: "Activity",
    imagePath: "/images/body-sculpt.webp",
    services: [
      { id: "body-sculpt", name: "Body Sculpt | Corporal Personalizado", description: "Sesión enfocada a reafirmar, reducir y moldear el área de tu elección.", price: "$450", note: "3 sesiones $1200 · 5 sesiones $1900 · 10 sesiones $3700" },
      { id: "gluteos-espalda", name: "Limpieza de glúteos / espalda", description: "Higiene, microdermoabrasión, extracciones manuales, alta frecuencia, mascarilla purificante, hidratación y pantalla solar.", price: "$480" },
    ],
  },
  {
    id: "epilaciones",
    title: "Epilaciones",
    description: "Piel suave al instante, elimina el vello desde raíz y olvídate del rastrillo por semanas.",
    iconName: "Sparkles",
    imagePath: "/images/spa-ambient.webp",
    services: [
      { id: "bozo", name: "Bozo", description: "Epilación facial con cera.", price: "$60" },
      { id: "frente", name: "Frente", description: "Epilación facial con cera.", price: "$90" },
      { id: "barbilla", name: "Barbilla", description: "Epilación facial con cera.", price: "$60" },
      { id: "patilla", name: "Patilla", description: "Epilación facial con cera.", price: "$90" },
      { id: "axilas", name: "Axilas", description: "Epilación corporal con cera.", price: "$150" },
      { id: "medias-piernas", name: "Medias piernas", description: "Epilación corporal con cera.", price: "$300" },
      { id: "piernas-completas", name: "Piernas completas", description: "Epilación corporal con cera.", price: "$480" },
      { id: "brazos-completos", name: "Brazos completos", description: "Epilación corporal con cera.", price: "$250" },
      { id: "medios-brazos", name: "Medios brazos", description: "Epilación corporal con cera.", price: "$170" },
    ],
  },
  {
    id: "capilar",
    title: "Capilar",
    description: "Protocolos capilares para hidratar, reestructurar y devolver brillo con diagnóstico profesional en cabina.",
    iconName: "Activity",
    imagePath: "/images/body-sculpt.webp",
    services: [
      {
        id: "hair-reset",
        name: "Hair Reset",
        description: "Tratamiento hidratante en cabina con corte bordado. Incluye diagnóstico con analizador digital, alta frecuencia, estilizado, corte bordado y crioterapia.",
        note: "Largo extra a cotizar a partir de media espalda.",
      },
      {
        id: "botox-capilar",
        name: "Botox Capilar",
        description: "Reestructura e hidrata la fibra capilar. Brillo y suavidad hasta por 4 meses. Incluye diagnóstico con analizador digital, alta frecuencia y crioterapia.",
        note: "Largo extra a cotizar a partir de media espalda.",
      },
      {
        id: "taninoplastia",
        name: "Taninoplastía",
        description: "Lacio y brillo sin igual hasta por 6 meses, apto en cabellos procesados, decolorados, niñas y embarazadas. Incluye diagnóstico con analizador digital, alta frecuencia y crioterapia.",
        note: "Largo extra a cotizar a partir de media espalda.",
      },
    ],
  },
];
