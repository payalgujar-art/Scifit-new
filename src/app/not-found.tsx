import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <section className="bg-ink py-40 text-bone">
      <Container>
        <p className="font-display text-8xl text-olive">404</p>
        <h1 className="font-display mt-2 text-4xl">Page not found</h1>
        <p className="mt-3 text-stone">That page doesn&apos;t exist or has moved.</p>
        <div className="mt-8"><Button href="/" arrow>Back home</Button></div>
      </Container>
    </section>
  );
}
