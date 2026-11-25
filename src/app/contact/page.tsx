import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { PageHero } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SciFit to ask questions or book a trial.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" title="Contact Us" text="Questions, memberships or a trial session — we'd love to hear from you." />
      <ContactSection withTitleBar={false} />
    </>
  );
}
