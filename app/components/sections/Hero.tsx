"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType } from "react";
import Container from "../Container";
import {
  BarberBookingCard,
  FacialBookingCard,
  MassageBookingCard,
  NailSpecialCard,
  ReviewGrowthCard,
} from "../marketing-cards/Cards";
import { DEMO_DISPLAY, DEMO_TEL, FREE_SAMPLE_URL, GOOGLE_CHECK_HREF } from "../../lib/site";

type CardSlot = {
  style: string;
  rotate: number;
  dy: number;
  dur: number;
  delay: number;
  zIndex: number;
  Card: ComponentType;
};

const slots: CardSlot[] = [
  {
    style: "top-[0%] left-[0%] w-[42%]",
    rotate: -4,
    dy: 10,
    dur: 7,
    delay: 0,
    zIndex: 4,
    Card: MassageBookingCard,
  },
  {
    style: "top-[3%] right-[-2%] w-[54%]",
    rotate: 4,
    dy: 14,
    dur: 8.5,
    delay: 0.2,
    zIndex: 3,
    Card: NailSpecialCard,
  },
  {
    style: "top-[46%] left-[-2%] w-[52%]",
    rotate: -3,
    dy: 12,
    dur: 9,
    delay: 0.4,
    zIndex: 5,
    Card: FacialBookingCard,
  },
  {
    style: "top-[52%] left-[40%] w-[30%]",
    rotate: 3,
    dy: 9,
    dur: 7.5,
    delay: 0.6,
    zIndex: 7,
    Card: BarberBookingCard,
  },
  {
    style: "top-[44%] right-[-3%] w-[34%]",
    rotate: -3,
    dy: 11,
    dur: 8,
    delay: 0.8,
    zIndex: 6,
    Card: ReviewGrowthCard,
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
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <section className="relative overflow-hidden pt-6 pb-8 md:pt-10 md:pb-14">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute right-[-10%] top-[-5%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.35),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[0%] top-[15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(251,191,36,0.12),transparent_70%)] blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] shadow-[0_0_10px_2px_rgba(251,191,36,0.7)]" />
              Brisbane &amp; Australian local businesses
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-[2.45rem] leading-[1.02] font-bold tracking-[-0.03em] sm:text-[3.35rem] lg:text-[3.7rem]"
            >
              <span className="text-white">More bookings.</span>
              <br />
              <span className="text-brand-gradient">Fewer missed calls.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/70 sm:text-base"
            >
              Sell More Studio helps massage clinics, nail salons, beauty
              salons, barbershops and other local services get more bookings,
              answer the phone, follow up with customers, collect Google
              reviews, and stay visible on social media.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={FREE_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get free sample / demo
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
              </a>
              <Link href="/get-started" className="btn-secondary">
                Get started
              </Link>
              <a href={GOOGLE_CHECK_HREF} className="btn-secondary">
                Free Google profile check
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-3"
            >
              <a
                href={DEMO_TEL}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[14px] border border-[#fbbf24]/45 bg-[#fbbf24]/10 px-4 py-3 text-left text-[14px] font-semibold text-[#fde68a] transition-colors hover:bg-[#fbbf24]/16 sm:w-auto sm:justify-start"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#fbbf24] shadow-[0_0_10px_2px_rgba(251,191,36,0.7)]" />
                Test Live AI Receptionist: {DEMO_DISPLAY}
              </a>
              <Link
                href="#how-it-works"
                className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-white/60 underline-offset-4 hover:text-white hover:underline"
              >
                See how the services fit together
              </Link>
            </motion.div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Sample previews — not client campaigns
            </p>
            <div className="relative h-[460px] sm:h-[540px] md:h-[600px] lg:h-[620px]">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.55),transparent_70%)] blur-2xl" />
                <div className="absolute left-[20%] top-[10%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(251,191,36,0.28),transparent_70%)] blur-2xl" />
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
        </div>
      </Container>
    </section>
  );
}
