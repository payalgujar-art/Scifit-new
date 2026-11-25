import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionIntro, TitleBar } from "@/components/ui/Section";
import { benefits } from "@/data/content";

export default function Benefits() {
  return (
    <>
      <TitleBar index="03" title="Why Train Here" />
      <Section tone="stone">
        <SectionIntro heading="Built around results" text="What a structured, coached approach gives you." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <li key={b.title}>
              <Reveal delay={i * 60} className="h-full rounded-[10px] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
                <Icon name={b.icon} width={32} height={32} className="text-olive-dark" />
                <h4 className="font-display mt-5 text-2xl">{b.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-mute">{b.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
