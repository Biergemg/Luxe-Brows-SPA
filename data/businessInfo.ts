import { BusinessInfo } from "@/types";

export const businessInfo: BusinessInfo = {
  name: "Luxe Brows & Spa",
  address: {
    street: "Calle 16 de Septiembre",
    neighborhood: "Ampliación Unidad Nacional",
    city: "Ciudad Madero",
    state: "Tamaulipas",
    postalCode: "89510",
    location: "Plaza LA FÉ",
    unit: "Local 1",
    fullAddress:
      "Calle 16 de Septiembre, Ampliación Unidad Nacional, Ciudad Madero, Tamaulipas. Plaza LA FÉ, Local 1",
  },
  phone: "8334890188",
  whatsapp: "528334890188",
  mapsUrl: "https://maps.app.goo.gl/8b9WCU2HQ3HvudRq9",
  hours: [
    { days: "Domingo", time: "Cerrado" },
    { days: "Lunes", time: "9:00 - 18:00" },
    { days: "Martes", time: "9:00 - 18:00" },
    { days: "Miércoles", time: "9:00 - 18:00" },
    { days: "Jueves", time: "9:00 - 18:00" },
    { days: "Viernes", time: "9:00 - 18:00" },
    { days: "Sábado", time: "9:00 - 18:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/luxebrowsspa/",
    facebook: "https://www.facebook.com/people/Luxe-Brows-Spa/100093219125856/",
  },
  coordinates: {
    lat: 22.2801,
    lng: -97.8416,
  },
};
