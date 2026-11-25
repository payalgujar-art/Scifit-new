import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import Visual from "@/components/ui/Visual";

/** Light stone hero with a large dark brand-shape watermark (echoes the reference's droplet backdrop). */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone py-14 sm:py-20 lg:py-24">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 260"
        className="pointer-events-none absolute -right-24 top-1/2 h-[120%] -translate-y-1/2 text-ink opacity-90 max-lg:opacity-[0.08]"
      >
        <path fill="currentColor" d="M100 4C100 4 14 108 14 168a86 86 0 0 0 172 0C186 108 100 4 100 4Z" />
      </svg>
      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-olive-dark">
            Strength · Conditioning · Community
          </p>
          <h1 className="font-display text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
            Explore your potential. <span className="text-olive-dark">Train smart.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mute sm:text-lg">
            SciFit is a modern fitness studio where professional coaching, progressive programming and a welcoming
            community help you build strength that lasts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/membership" arrow>
              Join Now
            </Button>
            <Button href="/programs" variant="outline">
              Explore Programs
            </Button>
          </div>
        </div>
        <div className="relative">
          <Visual
            variant="barbell"
            label="Hero image placeholder"
            className="aspect-[4/3] rounded-[10px] shadow-2xl shadow-black/30"
          />
        </div>
      </Container>
    </section>
  );
}
