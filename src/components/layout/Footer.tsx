import Link from "next/link";
import { navItems, siteConfig } from "@/config/site";
import Icon from "@/components/ui/Icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Section";

export default function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="bg-olive text-ink">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-4xl text-ink">
            <span className="font-light lowercase">sci</span>Fit
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{siteConfig.tagline}</p>
          <ul className="mt-6 flex gap-3">
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.icon === "whatsapp" ? buildWhatsAppUrl() : s.href}
                  aria-label={`${s.label} (placeholder link)`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/40 transition-colors hover:bg-ink hover:text-bone"
                >
                  <Icon name={s.icon} width={18} height={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Visit</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            {contact.addressLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
            <p className="pt-2">{contact.hours}</p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-xl text-ink">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="phone" width={16} height={16} className="text-ink" /> {contact.phone}
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" width={16} height={16} className="text-ink" /> {contact.email}
            </li>
          </ul>
          <p className="mt-4 text-xs text-ink/70">Contact details above are placeholders.</p>
        </div>
      </Container>
      <div className="border-t border-ink/20">
        <Container className="flex flex-col justify-between gap-2 py-5 text-xs text-ink/70 sm:flex-row">
          <p>
            © {siteConfig.year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Terms &amp; Privacy — pages to be added</p>
        </Container>
      </div>
    </footer>
  );
}
