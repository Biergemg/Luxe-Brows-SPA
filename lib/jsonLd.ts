import { businessInfo } from "../data/businessInfo";
import { faqs } from "../data/faqs";
import { env } from "./env";
import { siteConfig } from "./site";

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
      streetAddress: businessInfo.address.street,
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
    areaServed: ["Tampico", "Ciudad Madero", "Altamira"],
    hasMap: businessInfo.mapsUrl,
    description: siteConfig.description,
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
