import Reveal from "@/components/ui/Reveal";
import { PlaceholderNote, Section, SectionIntro, TitleBar } from "@/components/ui/Section";
import Visual from "@/components/ui/Visual";
import { trainers } from "@/data/content";

export default function Trainers() {
  return (
    <>
      <TitleBar index="05" title="Our Coaches" />
      <Section tone="stone">
        <SectionIntro heading="Meet the team" text="Professional coaches who guide every rep." />
        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={i * 80}>
                <div className="group overflow-hidden rounded-[10px] bg-white shadow-sm transition-shadow hover:shadow-xl">
                  <Visual variant="figure" label="Trainer photo" className="aspect-[3/4] transition-transform duration-500 group-hover:scale-105" />
                  <div className="relative bg-white p-4">
                    <h4 className="font-display text-xl">{t.name}</h4>
                    <p className="text-sm font-medium text-mute">{t.role}</p>
                    <p className="mt-1 text-xs text-mute/80">{t.note}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <PlaceholderNote>Names, photos, bios and certifications to be supplied by SciFit.</PlaceholderNote>
      </Section>
    </>
  );
}
