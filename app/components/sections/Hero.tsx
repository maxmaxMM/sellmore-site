"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../Container";
import {
  LunchComboCard,
  OpenHomeCard,
  FacialCard,
  GymCard,
  TaxCard,
} from "../marketing-cards/Cards";

type CardSlot = {
  style: string;
  rotate: number;
  dy: number;
  dur: number;
  delay: number;
  zIndex: number;
  Card: React.ComponentType;
};

const slots: CardSlot[] = [
  {
    // Lunch combo — top-left portrait
    style: "top-[0%] left-[0%] w-[42%]",
    rotate: -4,
    dy: 10,
    dur: 7,
    delay: 0,
    zIndex: 4,
    Card: LunchComboCard,
  },
  {
    // Open home — top-right landscape
    style: "top-[3%] right-[-2%] w-[54%]",
    rotate: 4,
    dy: 14,
    dur: 8.5,
    delay: 0.2,
    zIndex: 3,
    Card: OpenHomeCard,
  },
  {
    // Facial — mid-left landscape (wider), overlaps Lunch
    style: "top-[46%] left-[-2%] w-[52%]",
    rotate: -3,
    dy: 12,
    dur: 9,
    delay: 0.4,
    zIndex: 5,
    Card: FacialCard,
  },
  {
    // Gym — mid-center portrait
    style: "top-[52%] left-[40%] w-[30%]",
    rotate: 3,
    dy: 9,
    dur: 7.5,
    delay: 0.6,
    zIndex: 7,
    Card: GymCard,
  },
  {
    // Tax — mid-right portrait
    style: "top-[44%] right-[-3%] w-[34%]",
    rotate: -3,
    dy: 11,
    dur: 8,
    delay: 0.8,
    zIndex: 6,
    Card: TaxCard,
  },
];

const featureIcons = [
  {
    title: "Fast turnaround",
    meta: "Ready in 24h",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    title: "Built to sell",
    meta: "Designed for results",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "All industries",
    meta: "We've got you covered",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const float = (dy: number, dur: number, delay = 0) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -dy, 0] },
          transition: {
            repeat: Infinity,
            duration: dur,
            ease: "easeInOut",
            delay,
          } as const,
        };

  return (
    <section className="relative overflow-hidden pt-8 pb-10 md:pt-10 md:pb-14">
      {/* grid + blue glow backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute right-[-10%] top-[-5%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[0%] top-[15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),transparent_70%)] blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* -------------------------- LEFT -------------------------- */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_2px_rgba(96,165,250,0.8)]" />
              Marketing Images That Sell
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-[2.75rem] leading-[1.02] sm:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.03em]"
            >
              <span className="text-white">We turn your</span>
              <br />
              <span className="text-white">photos into</span>
              <br />
              <span className="text-brand-gradient">customers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65"
            >
              Simple marketing images for local businesses. Done for you.
              <br className="hidden sm:block" /> Ready in{" "}
              <span className="font-semibold text-[#93c5fd] underline decoration-[#60a5fa]/60 underline-offset-[5px] decoration-2">
                24 hours
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Link href="/get-image" className="btn-primary">
                Get your first image
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
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
              <Link href="#work" className="btn-secondary">
                See examples
              </Link>
            </motion.div>

            {/* Feature icon row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-6 max-w-lg"
            >
              {featureIcons.map((f) => (
                <div key={f.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#3b82f6]/15 text-[#93c5fd] ring-1 ring-inset ring-[#60a5fa]/25">
                    <span className="h-4 w-4">{f.icon}</span>
                  </span>
                  <div className="leading-tight">
                    <div className="text-[12.5px] font-semibold text-white">
                      {f.title}
                    </div>
                    <div className="text-[11px] text-white/55">{f.meta}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* -------------------------- RIGHT — cards -------------------------- */}
          <div className="relative h-[520px] sm:h-[560px] md:h-[600px] lg:h-[620px]">
            {/* Strong blue glow behind cards */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.55),transparent_70%)] blur-2xl" />
              <div className="absolute left-[20%] top-[10%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(96,165,250,0.45),transparent_70%)] blur-2xl" />
              <div className="absolute right-[10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.35),transparent_70%)] blur-2xl" />
            </div>

            {slots.map((s, i) => (
              <motion.div
                key={i}
                style={{ zIndex: s.zIndex, rotate: `${s.rotate}deg` }}
                className={`absolute ${s.style}`}
                {...float(s.dy, s.dur, s.delay)}
              >
                <s.Card />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
