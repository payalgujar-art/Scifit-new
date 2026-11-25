import type { IconName } from "@/components/ui/Icon";
import type { VisualVariant } from "@/components/ui/Visual";

export const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "bolt", title: "Real strength", text: "Progressive programming that builds strength you can feel and measure." },
  { icon: "user", title: "Coach-led", text: "Professional guidance on technique, load and progression every session." },
  { icon: "heart", title: "Better health", text: "Improve energy, mobility and long-term wellbeing through consistent training." },
  { icon: "scale", title: "Body composition", text: "Sustainable approaches to fat loss and muscle gain without crash plans." },
  { icon: "shield", title: "Injury resilience", text: "Movement quality and mobility work that keep you training for years." },
  { icon: "users", title: "Community", text: "A welcoming space where members motivate each other." },
];

/** PLACEHOLDER list — confirm which facilities SciFit actually offers. */
export const facilities: { title: string; text: string; visual: VisualVariant }[] = [
  { title: "Strength Floor", text: "Racks, platforms, barbells and plates.", visual: "barbell" },
  { title: "Functional Zone", text: "Open space for conditioning and movement work.", visual: "kettlebell" },
  { title: "Group Studio", text: "Dedicated area for coached class sessions.", visual: "plate" },
  { title: "Cardio Area", text: "Machines for warm-ups and endurance work.", visual: "pulse" },
  { title: "Changing Rooms", text: "Clean, comfortable changing and locker space.", visual: "figure" },
  { title: "Recovery Corner", text: "Space for stretching, mobility and cool-down.", visual: "rope" },
];

/** PLACEHOLDER trainers — no real names/certifications have been provided. */
export const trainers = [
  { id: 1, name: "Trainer Name", role: "Head Coach", note: "Bio and certifications to be added" },
  { id: 2, name: "Trainer Name", role: "Strength Coach", note: "Bio and certifications to be added" },
  { id: 3, name: "Trainer Name", role: "Functional Coach", note: "Bio and certifications to be added" },
  { id: 4, name: "Trainer Name", role: "Personal Trainer", note: "Bio and certifications to be added" },
];

/** PLACEHOLDER testimonials — not real customer feedback. */
export const testimonials = [
  { id: 1, quote: "Member testimonial will appear here once real feedback is collected.", name: "Member Name", detail: "Membership type" },
  { id: 2, quote: "Member testimonial will appear here once real feedback is collected.", name: "Member Name", detail: "Membership type" },
  { id: 3, quote: "Member testimonial will appear here once real feedback is collected.", name: "Member Name", detail: "Membership type" },
];

export const aboutPoints = [
  { icon: "dumbbell" as IconName, title: "Strength & conditioning", text: "Training built on proven principles." },
  { icon: "users" as IconName, title: "All levels welcome", text: "Programs that scale from first-timers to seasoned lifters." },
  { icon: "user" as IconName, title: "Professional coaching", text: "Guidance you can trust at every step." },
];
