import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import Icon from "./Icon";

type Variant = "primary" | "secondary" | "outline" | "dark";

const styles: Record<Variant, string> = {
  primary: "bg-olive-dark text-white hover:bg-ink",
  secondary: "bg-bone text-ink hover:bg-white",
  outline: "border border-current hover:bg-black/10",
  dark: "bg-ink text-bone hover:bg-ink-3",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[6px] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

type Common = { variant?: Variant; className?: string; children: ReactNode; arrow?: boolean };

export default function Button(
  props: Common & ({ href: string } | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)),
) {
  const { variant = "primary", className = "", children, arrow } = props;
  const cls = `${base} ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <Icon name="arrow" width={18} height={18} className="transition-transform group-hover:translate-x-1" />}
    </>
  );
  if (typeof props.href === "string") {
    return (
      <Link href={props.href} className={cls}>
        {inner}
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, arrow: _a, href: _h, ...rest } = props;
  void _v; void _c; void _ch; void _a; void _h;
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
