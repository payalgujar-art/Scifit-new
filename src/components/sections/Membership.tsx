import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { PlaceholderNote, Section, SectionIntro, TitleBar } from "@/components/ui/Section";
import { faqs, plans, type Plan } from "@/data/membership";

function PlanCard({ plan }: { plan: Plan }) {
  const perMonth = plan.price ? Math.round(plan.price / plan.months) : null;
  return (
    <div
      className={`relative flex h-full flex-col rounded-[10px] p-8 sm:p-10 ${
        plan.featured ? "bg-ink text-bone ring-2 ring-olive" : "bg-white text-ink shadow-sm"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-8 bg-olive px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
          {plan.badge}
        </span>
      )}
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-mute">{plan.months} months</p>
      <h3 className="font-display mt-2 text-3xl">{plan.name}</h3>
      <div className="mt-6">
        {plan.price ? (
          <>
            <p className="font-display text-6xl">
              {plan.currency}
              {plan.price.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-mute">≈ {plan.currency}{perMonth?.toLocaleString("en-IN")} / month</p>
          </>
        ) : (
          <>
            <p className="font-display text-6xl text-mute">{plan.currency} ——</p>
            <p className="text-sm text-mute">Price to be announced</p>
          </>
        )}
      </div>
      <ul className="my-8 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-olive-dark" strokeWidth={2.6} />
            {f}
          </li>
        ))}
      </ul>
      <Button href={`/contact?interest=${plan.id}#contact-form`} variant={plan.featured ? "primary" : "dark"} arrow>
        Choose plan
      </Button>
    </div>
  );
}

export function MembershipPlans({ withTitleBar = false }: { withTitleBar?: boolean }) {
  return (
    <>
      {withTitleBar && <TitleBar index="06" title="Membership" />}
      <Section>
        <SectionIntro heading="Simple membership plans" text="Commit to your goals with a plan that suits you." />
        <div className="grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
        <div className="lg:mx-auto lg:max-w-4xl">
          <PlaceholderNote>Pricing and plan inclusions are placeholders. Edit src/data/membership.ts.</PlaceholderNote>
        </div>
      </Section>
    </>
  );
}

export function MembershipFaq() {
  return (
    <Section tone="stone">
      <SectionIntro heading="Questions" />
      <div className="max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {f.q}
              <Icon name="arrow" width={18} height={18} className="shrink-0 rotate-90 transition-transform group-open:-rotate-90" />
            </summary>
            <p className="mt-3 text-sm text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
