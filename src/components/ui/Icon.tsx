import type { SVGProps } from "react";

const paths = {
  dumbbell: "M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 20c0-3.5 3.6-6 8-6s8 2.5 8 6",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2.5 20c0-3 2.9-5 6.5-5s6.5 2 6.5 5M16 4.5a3.5 3.5 0 0 1 0 6.5M18 15c2.2.5 3.5 2.2 3.5 5",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  heart: "M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7.2 4.5 4.5 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z",
  scale: "M12 4v16M5 7h14M5 7l-3 7a3 3 0 0 0 6 0L5 7ZM19 7l-3 7a3 3 0 0 0 6 0l-3-7ZM8 20h8",
  shield: "M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  check: "m5 12.5 4.5 4.5L19 7.5",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.800 12 21 12 21Zm0-8.5a2.500 2.500 0 1 0 0-5 2.500 2.500 0 0 0 0 5Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  star: "m12 3 2.700 5.600 6.100.9-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.9L12 3Z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.500a3.500 3.500 0 1 0 0 7 3.500 3.500 0 0 0 0-7ZM17.500 6.500h.01",
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.500c0-.3.200-.5.500-.5Z",
  whatsapp: "M3 21l1.6-4.8A9 9 0 1 1 8 19.4L3 21Zm6.2-12.4c-.3 3.600 2.800 6.600 6.300 6.300l1.500-1.500-2-1.200-1 .9a5 5 0 0 1-2.200-2.200l.9-1L11.500 8l-2.300.6Z",
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      width={24}
      height={24}
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
