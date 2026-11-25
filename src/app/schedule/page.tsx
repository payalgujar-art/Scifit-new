import type { Metadata } from "next";
import ScheduleBoard from "@/components/schedule/ScheduleBoard";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Class Schedule",
  description: "Weekly class timetable at SciFit.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero crumb="Schedule" title="Class Schedule" text="Find a session that fits your week." />
      <Section tone="stone">
        <ScheduleBoard />
      </Section>
    </>
  );
}
