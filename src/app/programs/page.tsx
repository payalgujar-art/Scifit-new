import type { Metadata } from "next";
import CtaBand from "@/components/sections/CtaBand";
import { ProgramsDetail } from "@/components/sections/Programs";
import { PageHero } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Programs",
  description: "Strength training, personal training, functional fitness, group training and weight management at SciFit.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero crumb="Programs" title="Programs" text="Five ways to train, all coached, all built around progress." />
      <ProgramsDetail />
      <CtaBand />
    </>
  );
}
