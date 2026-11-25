export type VisualVariant = "barbell" | "kettlebell" | "plate" | "pulse" | "figure" | "rope";

/**
 * Original line-art stand-in for photography. Every slot is marked so real
 * SciFit photos can replace it (swap <Visual /> for <Image /> from /public/images).
 */
function Art({ variant }: { variant: VisualVariant }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (variant) {
    case "barbell":
      return (
        <g {...common}>
          <path d="M20 100h160" />
          <rect x="36" y="64" width="12" height="72" rx="3" />
          <rect x="52" y="76" width="9" height="48" rx="3" />
          <rect x="152" y="64" width="12" height="72" rx="3" />
          <rect x="139" y="76" width="9" height="48" rx="3" />
        </g>
      );
    case "kettlebell":
      return (
        <g {...common}>
          <circle cx="100" cy="116" r="40" />
          <path d="M72 84c0-30 56-30 56 0" />
          <path d="M84 116h32" />
        </g>
      );
    case "plate":
      return (
        <g {...common}>
          <circle cx="100" cy="100" r="62" />
          <circle cx="100" cy="100" r="40" />
          <circle cx="100" cy="100" r="9" />
        </g>
      );
    case "pulse":
      return (
        <g {...common}>
          <path d="M16 104h42l14-40 26 80 20-60 12 20h54" />
        </g>
      );
    case "figure":
      return (
        <g {...common}>
          <circle cx="100" cy="56" r="16" />
          <path d="M100 74v50M100 88 68 108M100 88l32 20M100 124l-24 44M100 124l24 44" />
        </g>
      );
    case "rope":
      return (
        <g {...common}>
          <path d="M40 40c-20 50 0 110 60 110s80-60 60-110" />
          <rect x="30" y="28" width="14" height="26" rx="5" />
          <rect x="156" y="28" width="14" height="26" rx="5" />
        </g>
      );
  }
}

export default function Visual({
  variant,
  label = "Image placeholder",
  className = "",
  tone = "dark",
}: {
  variant: VisualVariant;
  label?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${dark ? "bg-ink-2 text-stone/30" : "bg-stone text-ink/20"} ${className}`}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <Art variant={variant} />
      </svg>
      <span
        className={`absolute left-3 top-3 text-[10px] font-medium uppercase tracking-widest ${dark ? "text-stone/60" : "text-ink/50"}`}
      >
        {label}
      </span>
    </div>
  );
}
