import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { PlaceholderNote, Section, SectionIntro, TitleBar } from "@/components/ui/Section";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <>
      <TitleBar index="07" title="Member Stories" />
      <Section tone="light">
        <SectionIntro heading="What members say" />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.id}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="flex h-full flex-col rounded-[10px] bg-stone p-8">
                  <div className="flex gap-1 text-olive" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Icon key={k} name="star" width={16} height={16} />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-ink">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-ink/15 pt-4">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-mute">{t.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <PlaceholderNote>Sample text only — not real customer testimonials.</PlaceholderNote>
      </Section>
    </>
  );
}
