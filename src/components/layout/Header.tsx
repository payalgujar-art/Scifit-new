"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/config/site";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <>
    <header
      className="sticky top-0 z-50 bg-ink py-4 shadow-md shadow-black/20"
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-baseline text-3xl uppercase leading-none text-bone" aria-label={`${siteConfig.name} home`}>
          <span className="font-light lowercase">sci</span>
          <span className="font-display">Fit</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium uppercase tracking-wider transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-olive after:transition-all hover:text-stone ${
                isActive(item.href) ? "text-olive after:w-full" : "text-bone after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/membership" className="!px-5 !py-2.5">
            Join Now
          </Button>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-bone lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} width={28} height={28} />
        </button>
      </div>
    </header>

    {/* Sibling of <header>: backdrop-blur on the header would otherwise trap this fixed panel */}
    <div
      id="mobile-menu"
      hidden={!open}
      className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-ink px-5 pb-10 pt-8 lg:hidden"
    >
      <nav aria-label="Mobile" className="flex flex-col">
        {navItems.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display flex items-baseline gap-4 border-b border-white/10 py-5 text-4xl text-bone hover:text-olive"
          >
            <span className="text-sm text-olive">0{i + 1}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <Button href="/membership" className="mt-8 w-full" arrow>
        Join Now
      </Button>
    </div>
    </>
  );
}
