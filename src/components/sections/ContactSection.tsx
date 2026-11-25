import ContactForm from "@/components/forms/ContactForm";
import Icon, { type IconName } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { PlaceholderNote, Section, TitleBar } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

function Row({ icon, label, children }: { icon: IconName; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-olive">
        <Icon name={icon} width={20} height={20} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-mute">{label}</p>
        <div className="text-sm">{children}</div>
      </div>
    </li>
  );
}

export default function ContactSection({ withTitleBar = true }: { withTitleBar?: boolean }) {
  const { contact } = siteConfig;
  return (
    <>
      {withTitleBar && <TitleBar index="08" title="Contact" />}
      <Section id="contact">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h3 className="font-display text-4xl leading-[1.05] sm:text-5xl">Let&apos;s talk training</h3>
            <p className="mt-4 text-mute">Ask about programs, memberships or book a trial session.</p>
            <ul className="mt-8 space-y-6">
              <Row icon="pin" label="Address">
                {contact.addressLines.map((l) => <p key={l}>{l}</p>)}
              </Row>
              <Row icon="phone" label="Phone"><p>{contact.phone}</p></Row>
              <Row icon="mail" label="Email"><p>{contact.email}</p></Row>
              <Row icon="clock" label="Hours"><p>{contact.hours}</p></Row>
            </ul>
            <PlaceholderNote>All contact details are placeholders — edit src/config/site.ts.</PlaceholderNote>
            <div className="mt-8 aspect-[16/10] overflow-hidden rounded-[10px] bg-stone">
              {contact.mapEmbedUrl ? (
                <iframe title="SciFit location map" src={contact.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" />
              ) : (
                <div className="grid h-full place-items-center p-6 text-center text-sm text-mute">
                  <div>
                    <Icon name="pin" width={32} height={32} className="mx-auto mb-2" />
                    Google Maps embed placeholder
                    <br />
                    <span className="text-xs">Set contact.mapEmbedUrl in src/config/site.ts</span>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[10px] bg-stone/60 p-6 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
