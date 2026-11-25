import Reveal from "@/components/ui/Reveal";
import { PlaceholderNote, Section, SectionIntro, TitleBar } from "@/components/ui/Section";
import Visual from "@/components/ui/Visual";
import { facilities } from "@/data/content";

export default function Facilities() {
  return (
    <>
      <TitleBar index="04" title="Facilities" />
      <Section>
        <SectionIntro heading="A space made for training" text="Equipment and zones designed for focused, comfortable sessions." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <li key={f.title}>
              <Reveal delay={i * 60}>
                <Visual variant={f.visual} label="Facility photo" tone={i % 2 ? "light" : "dark"} className="aspect-[16/10] rounded-[10px]" />
                <h4 className="font-display mt-4 text-2xl">{f.title}</h4>
                <p className="mt-1 text-sm text-mute">{f.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <PlaceholderNote>Facility list is illustrative — confirm what SciFit actually offers.</PlaceholderNote>
      </Section>
    </>
  );
}
