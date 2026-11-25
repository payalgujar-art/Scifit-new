import type { VisualVariant } from "@/components/ui/Visual";

export type Program = {
  slug: string;
  title: string;
  short: string;
  description: string;
  forWho: string;
  highlights: string[];
  visual: VisualVariant;
};

export const programs: Program[] = [
  {
    slug: "strength-training",
    title: "Strength Training",
    short: "Progressive barbell and resistance work built around solid technique.",
    description:
      "Structured, progressive strength blocks that teach the main lifts and build a base you can keep adding to.",
    forWho: "Beginners to experienced lifters who want measurable progress.",
    highlights: ["Technique-first coaching", "Progressive overload plans", "Compound lift focus"],
    visual: "barbell",
  },
  {
    slug: "personal-training",
    title: "Personal Training",
    short: "One-to-one coaching shaped around your goals, schedule and body.",
    description:
      "Individual sessions with a coach who designs and adjusts your plan as you progress.",
    forWho: "Anyone who wants focused attention, accountability or has specific goals.",
    highlights: ["Fully personalised plan", "Regular progress check-ins", "Flexible session timing"],
    visual: "figure",
  },
  {
    slug: "functional-fitness",
    title: "Functional Fitness",
    short: "Movement quality, mobility and conditioning for everyday strength.",
    description:
      "Multi-joint training that improves how you move, lift and recover in daily life and sport.",
    forWho: "Adults who want to move better, feel fitter and stay injury-resilient.",
    highlights: ["Mobility and stability work", "Full-body conditioning", "Scalable to any level"],
    visual: "kettlebell",
  },
  {
    slug: "group-training",
    title: "Group Training",
    short: "High-energy coached classes with a supportive community.",
    description:
      "Small-group sessions led by a coach, combining strength and conditioning in a motivating environment.",
    forWho: "People who train best with energy, structure and company.",
    highlights: ["Coach-led every session", "Scaled for all levels", "Community accountability"],
    visual: "plate",
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    short: "Sustainable training and habit coaching, not crash plans.",
    description:
      "A structured training approach paired with habit-building guidance for long-term body composition change.",
    forWho: "Those looking for steady, sustainable change.",
    highlights: ["Training + habit coaching", "Realistic, trackable targets", "Supportive accountability"],
    visual: "pulse",
  },
];
