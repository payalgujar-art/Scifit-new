import { siteConfig } from "@/config/site";

/**
 * Builds a click-to-chat link. Number must be digits only, with country code (e.g. 919876543210).
 * If no number is configured yet, WhatsApp opens its contact picker with the message pre-filled.
 */
export function buildWhatsAppUrl(message: string = siteConfig.whatsapp.message): string {
  const digits = siteConfig.whatsapp.number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}
