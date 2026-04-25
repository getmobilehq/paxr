"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/brands", label: "For brands" },
];

const SOLID_NAV_ROUTES = new Set<string>(["/privacy", "/terms"]);

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || SOLID_NAV_ROUTES.has(pathname ?? "");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200 ease-paxr",
        solid
          ? "border-b border-white/10 bg-paxr-deep/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-6 px-6 py-3.5 sm:px-10">
        <Link href="/" aria-label="Paxr home">
          <span
            className={cn(
              "font-display text-[22px] font-black tracking-[0.04em]",
              scrolled ? "text-paxr-stone" : "text-paxr-stone",
            )}
          >
            pax<span className="text-paxr-jade">r</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-paxr-stone/80 transition-opacity duration-150 hover:text-paxr-stone"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href="/signin"
            className="text-[13px] text-paxr-stone/75 hover:text-paxr-stone"
          >
            Sign in
          </Link>
          <ButtonLink href="/signup" variant="primary" size="sm">
            Get started
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-paxr-stone md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-4 w-5 flex-col justify-between">
            <span
              className={cn(
                "block h-0.5 w-full bg-current transition-transform duration-200",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-full bg-current transition-transform duration-200",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[64px] z-40 flex flex-col bg-paxr-deep px-6 pb-10 pt-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[28px] font-semibold text-paxr-stone -tracking-[0.01em]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="font-display text-[28px] font-semibold text-paxr-stone -tracking-[0.01em]"
            >
              Sign in
            </Link>
          </nav>
          <div className="mt-auto pt-10">
            <ButtonLink
              href="/signup"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Start for free
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
