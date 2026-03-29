import { businessInfo } from "../data/businessInfo";
import { faqs } from "../data/faqs";
import { env } from "./env";
import { siteConfig } from "./site";

const dayMap: Record<string, string> = {
  Domingo: 'Sunday',
  Lunes: 'Monday',
  Martes: 'Tuesday',
  Miércoles: 'Wednesday',
  Jueves: 'Thursday',
  Viernes: 'Friday',
  Sábado: 'Saturday',
};

function toOpeningHoursSpecification() {
  return businessInfo.hours.map((entry) => {
    if (entry.time.toLowerCase() === 'cerrado') {
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[entry.days],
        opens: '00:00',
        closes: '00:00',
      };
    }

    const [opens, closes] = entry.time.split(' - ');
    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap[entry.days],
      opens: opens.padStart(5, '0'),
      closes: closes.padStart(5, '0'),
    };
  });
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    name: businessInfo.name,
    image: `${env.siteUrl}${siteConfig.ogImage.path}`,
    "@id": `${env.siteUrl}/#business`,
    url: env.siteUrl,
    telephone: `+${businessInfo.whatsapp}`,
    sameAs: [businessInfo.social.instagram, businessInfo.social.facebook].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.street}, ${businessInfo.address.location}${businessInfo.address.unit ? `, ${businessInfo.address.unit}` : ""}`,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.postalCode,
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.lat,
      longitude: businessInfo.coordinates.lng,
    },
    openingHoursSpecification: toOpeningHoursSpecification(),
    areaServed: ["Tampico", "Ciudad Madero", "Altamira"],
    hasMap: businessInfo.mapsUrl,
    description: siteConfig.description,
    priceRange: "$$",
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
