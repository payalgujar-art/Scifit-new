import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { Section, SectionIntro, TitleBar } from "@/components/ui/Section";
import Visual from "@/components/ui/Visual";
import { programs } from "@/data/programs";

/** Home-page program cards: photo-style tiles with hover reveal (reference-inspired). */
export function ProgramsPreview() {
  return (
    <>
      <TitleBar index="02" title="Programs" />
      <Section>
        <SectionIntro heading="Training for every goal" text="Choose the format that fits your goals, schedule and experience." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {programs.map((p, i) => (
            <li key={p.slug} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
              <Reveal delay={i * 70} className="h-full">
                <Link
                  href={`/programs#${p.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[10px] bg-ink"
                >
                  <Visual
                    variant={p.visual}
                    label="Program image"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 p-6 text-center text-bone transition-colors group-hover:bg-black/70">
                    <h4 className="font-display text-3xl">{p.title}</h4>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm text-stone opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
                      {p.short}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stone">
                      Learn more <Icon name="arrow" width={16} height={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

/** Full detail blocks for the /programs page. */
export function ProgramsDetail() {
  return (
    <div>
      {programs.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className={`py-16 sm:py-24 ${i % 2 === 0 ? "bg-bone" : "bg-stone/60"}`}
        >
          <div className="mx-auto grid max-w-site items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <Visual variant={p.visual} tone={i % 2 ? "light" : "dark"} label="Program image placeholder" className="aspect-[4/3] rounded-[10px]" />
            </Reveal>
            <Reveal delay={100}>
              <p className="font-display text-sm text-mute">0{i + 1}</p>
              <h2 className="font-display text-4xl sm:text-6xl">{p.title}</h2>
              <p className="mt-4 text-lg text-mute">{p.description}</p>
              <p className="mt-4 text-sm">
                <span className="font-semibold uppercase tracking-wider">Best for: </span>
                {p.forWho}
              </p>
              <ul className="mt-6 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-olive text-ink">
                      <Icon name="check" width={14} height={14} strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?interest=trial#contact-form"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider underline-offset-4 hover:underline"
              >
                Enquire about this program <Icon name="arrow" width={18} height={18} />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}
