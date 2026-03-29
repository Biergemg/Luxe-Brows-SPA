import { businessInfo } from "@/data/businessInfo";
import { env } from "@/lib/env";

export function getGoogleMapsUrl() {
  return env.googleMapsUrl || businessInfo.mapsUrl;
}

export function getGoogleMapsEmbedUrl() {
  if (env.googleMapsEmbedUrl) {
    return env.googleMapsEmbedUrl;
  }

  return `https://www.google.com/maps?q=${encodeURIComponent(
    businessInfo.address.fullAddress
  )}&z=17&output=embed`;
}
