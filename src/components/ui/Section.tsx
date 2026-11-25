import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Full-width dark title bar — the section signature (echoes the reference's banner-style headings). */
export function TitleBar({ title, id }: { index?: string; title: string; id?: string }) {
  return (
    <div id={id} className="bg-ink-3 text-stone">
      <Container className="py-3 sm:py-4">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
      </Container>
    </div>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "light" | "stone" | "dark";
  className?: string;
  id?: string;
}) {
  const tones = { light: "bg-bone text-ink", stone: "bg-stone text-ink", dark: "bg-ink-2 text-bone" };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionIntro({
  heading,
  text,
  tone = "light",
}: {
  heading: string;
  text?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className="mb-10 max-w-2xl sm:mb-14">
      <h3 className="font-display text-4xl leading-[1.05] sm:text-5xl">{heading}</h3>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${tone === "dark" ? "text-stone" : "text-mute"}`}>{text}</p>}
    </Reveal>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-8 inline-block rounded-[10px] border border-dashed border-mute/50 px-3 py-1.5 text-xs text-mute">
      <span className="font-semibold uppercase tracking-wider">Placeholder · </span>
      {children}
    </p>
  );
}

export function PageHero({ title, text, crumb }: { title: string; text: string; crumb: string }) {
  return (
    <header className="bg-stone pb-14 pt-14 text-ink sm:pb-20 sm:pt-20">
      <Container>
        <p className="text-xs uppercase tracking-[0.25em] text-olive-dark">SciFit / {crumb}</p>
        <h1 className="font-display mt-4 text-5xl leading-none sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-xl text-lg text-mute">{text}</p>
      </Container>
    </header>
  );
}
