export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
export type Day = (typeof days)[number];

export type ClassSlot = {
  id: string;
  day: Day;
  start: string; // 24h "HH:MM"
  end: string;
  title: string;
  program: string; // matches Program.title
  coach: string;
  spots: number | null; // null = not tracked yet
};

/** SAMPLE timetable — replace with real data or an API response (see lib/api.ts). */
export const sampleSchedule: ClassSlot[] = [
  { id: "m1", day: "Mon", start: "06:30", end: "07:30", title: "Strength Foundations", program: "Strength Training", coach: "TBA", spots: null },
  { id: "m2", day: "Mon", start: "18:30", end: "19:30", title: "Group Conditioning", program: "Group Training", coach: "TBA", spots: null },
  { id: "t1", day: "Tue", start: "07:00", end: "08:00", title: "Functional Flow", program: "Functional Fitness", coach: "TBA", spots: null },
  { id: "t2", day: "Tue", start: "19:00", end: "20:00", title: "Strength Foundations", program: "Strength Training", coach: "TBA", spots: null },
  { id: "w1", day: "Wed", start: "06:30", end: "07:30", title: "Group Conditioning", program: "Group Training", coach: "TBA", spots: null },
  { id: "w2", day: "Wed", start: "18:30", end: "19:30", title: "Weight Management Circuit", program: "Weight Management", coach: "TBA", spots: null },
  { id: "th1", day: "Thu", start: "07:00", end: "08:00", title: "Functional Flow", program: "Functional Fitness", coach: "TBA", spots: null },
  { id: "th2", day: "Thu", start: "19:00", end: "20:00", title: "Strength Foundations", program: "Strength Training", coach: "TBA", spots: null },
  { id: "f1", day: "Fri", start: "06:30", end: "07:30", title: "Group Conditioning", program: "Group Training", coach: "TBA", spots: null },
  { id: "f2", day: "Fri", start: "18:00", end: "19:00", title: "Weight Management Circuit", program: "Weight Management", coach: "TBA", spots: null },
  { id: "s1", day: "Sat", start: "08:00", end: "09:30", title: "Weekend Strength Lab", program: "Strength Training", coach: "TBA", spots: null },
  { id: "s2", day: "Sat", start: "10:00", end: "11:00", title: "Functional Flow", program: "Functional Fitness", coach: "TBA", spots: null },
  { id: "su1", day: "Sun", start: "09:00", end: "10:00", title: "Mobility & Recovery", program: "Functional Fitness", coach: "TBA", spots: null },
];
