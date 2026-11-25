import type { Metadata } from "next";
import { MembershipFaq, MembershipPlans } from "@/components/sections/Membership";
import { PageHero } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Membership",
  description: "Choose a 3-month or 6-month SciFit membership.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHero crumb="Membership" title="Membership" text="Pick the plan that fits your commitment. Pricing is coming soon." />
      <MembershipPlans />
      <MembershipFaq />
    </>
  );
}
