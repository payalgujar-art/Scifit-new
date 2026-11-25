/**
 * Single source of truth for brand + business details.
 * Every value marked PLACEHOLDER must be replaced with real SciFit information.
 */
export const siteConfig = {
  name: "SciFit",
  tagline: "Train with science. Build real strength.",
  description:
    "SciFit is a modern fitness studio for strength and conditioning, personal training, functional fitness and group training.",
  // PLACEHOLDER: set NEXT_PUBLIC_SITE_URL in production
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  year: 2026,
  contact: {
    // PLACEHOLDER values — shown on the site with a "placeholder" marker
    phone: "+00 00000 00000",
    email: "hello@your-domain.example",
    addressLines: ["[Street address]", "[City, State, PIN]"],
    hours: "[Opening hours]",
    // Paste a Google Maps "Embed a map" URL (https://www.google.com/maps/embed?...) to enable the map
    mapEmbedUrl: "",
    isPlaceholder: true,
  },
  social: [
    // PLACEHOLDER: replace "#" with real profile URLs
    { label: "Instagram", href: "#", icon: "instagram" as const },
    { label: "Facebook", href: "#", icon: "facebook" as const },
    { label: "WhatsApp", href: "#", icon: "whatsapp" as const },
  ],
  // Optional: POST endpoint for the contact form (e.g. Formspree, your own API route)
  // WhatsApp click-to-chat. PLACEHOLDER: set NEXT_PUBLIC_WHATSAPP_NUMBER (digits with country code, no +)
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
    message: "Hi SciFit, I would like to book a trial session.",
  },
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
} as const;

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/programs" },
  { label: "Membership", href: "/membership" },
  { label: "Schedule", href: "/schedule" },
  { label: "Contact", href: "/contact" },
] as const;
