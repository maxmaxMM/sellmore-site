"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#scenarios", label: "Scenarios" },
  { href: "/#industries", label: "Industries" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#05070d]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-24 items-center justify-between gap-4 pt-1 md:h-30 md:gap-6 md:pt-2">
        <Link href="/" aria-label="Sell More Studio home" className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-[13.5px] xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/get-started" className="btn-primary !px-4 !py-2.5 text-[13px]">
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white/80 xl:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/5 bg-[#05070d]/95 backdrop-blur-xl xl:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center rounded-lg px-3 text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Get started
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
