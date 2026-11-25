import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import ContactSection from "@/components/sections/ContactSection";
import CtaBand from "@/components/sections/CtaBand";
import Facilities from "@/components/sections/Facilities";
import Hero from "@/components/sections/Hero";
import { MembershipPlans } from "@/components/sections/Membership";
import { ProgramsPreview } from "@/components/sections/Programs";
import Testimonials from "@/components/sections/Testimonials";
import Trainers from "@/components/sections/Trainers";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProgramsPreview />
      <Benefits />
      <Facilities />
      <Trainers />
      <MembershipPlans withTitleBar />
      <Testimonials />
      <CtaBand />
      <ContactSection />
    </>
  );
}
