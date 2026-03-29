import { clsx, type ClassValue } from "clsx";
import { whatsappMessages } from "./site";
import { businessInfo } from "../data/businessInfo";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function generateWhatsAppLink(message: string = whatsappMessages.general) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${businessInfo.whatsapp}?text=${text}`;
}
