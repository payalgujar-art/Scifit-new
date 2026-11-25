import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function CtaBand() {
  return (
    <section className="bg-olive text-ink">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <h2 className="font-display max-w-xl text-4xl leading-none sm:text-6xl">Ready to start your SciFit journey?</h2>
        <Button href="/contact?interest=trial#contact-form" variant="dark" arrow>
          Book a trial
        </Button>
      </Container>
    </section>
  );
}
