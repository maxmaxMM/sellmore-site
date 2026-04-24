"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#work", label: "Our Work" },
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
          ? "backdrop-blur-xl bg-[#05070d]/75 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="SellMore Studio home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13.5px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/get-image"
            className="btn-primary !py-2.5 !px-4 text-[13px]"
          >
            Get your first image
            <svg
              viewBox="0 0 20 20"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 10h12" />
              <path d="M12 5l5 5-5 5" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80"
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

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#05070d]/95 backdrop-blur-xl">
          <Container className="py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/get-image"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Get your first image
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
