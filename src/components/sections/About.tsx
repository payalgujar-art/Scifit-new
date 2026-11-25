import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { Section, TitleBar } from "@/components/ui/Section";
import Visual from "@/components/ui/Visual";
import { aboutPoints } from "@/data/content";

export default function About() {
  return (
    <>
      <TitleBar id="about" index="01" title="About SciFit" />
      <Section tone="stone">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-4xl leading-[1.05] sm:text-6xl">
              Explore your potential. Build a stronger you.
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              At SciFit we combine proven training principles with professional coaching. Our approach is simple:
              learn to move well, train progressively and stay consistent.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {aboutPoints.map((p) => (
                <li key={p.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-olive">
                    <Icon name={p.icon} />
                  </span>
                  <h4 className="mt-4 text-sm font-semibold uppercase tracking-wider">{p.title}</h4>
                  <p className="mt-1 text-sm text-mute">{p.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Visual variant="figure" tone="light" label="About image placeholder" className="aspect-[5/4] rounded-[10px]" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
