/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Container from "../Container";
import Reveal from "../Reveal";
import TestimonialModal, {
  type TestimonialData,
} from "../TestimonialModal";

const testimonials: TestimonialData[] = [
  {
    name: "Tony",
    title: "Cafe Owner",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
    quote: "This brought us",
    highlight: "more bookings.",
  },
  {
    name: "Sarah",
    title: "Beauty Studio",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
    quote: "My clients love",
    highlight: "how we look now.",
  },
  {
    name: "Liam",
    title: "Real Estate Agent",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
    quote: "My listings finally",
    highlight: "look professional.",
  },
  {
    name: "Mina",
    title: "Gym Owner",
    photo:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&auto=format&fit=crop",
    quote: "We started getting",
    highlight: "more messages.",
  },
  {
    name: "James",
    title: "Accountant",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop",
    quote: "Super fast and",
    highlight: "easy to work with.",
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<TestimonialData | null>(null);

  return (
    <section id="testimonials" className="relative py-12 md:py-16">
      <Container>
        <Reveal className="flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-2 rounded-md bg-[#3b82f6]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bfdbfe] ring-1 ring-inset ring-[#60a5fa]/35">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_0_#60a5fa]" />
            Real Businesses. Real Results.
          </span>
          <p className="text-[13px] text-white/55">
            UGC from business owners who get more customers
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="list"
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
          >
            {testimonials.map((t) => (
              <motion.button
                key={t.name}
                role="listitem"
                type="button"
                onClick={() => setActive(t)}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                aria-label={`Play ${t.name}'s video`}
                className="group relative block overflow-hidden rounded-[18px] text-left ring-1 ring-white/10 transition-shadow duration-300 hover:ring-[#60a5fa]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa]"
              >
                <div className="relative aspect-[9/14]">
                  <img
                    src={t.photo}
                    alt={`${t.name}, ${t.title}`}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.1)_40%,rgba(5,7,13,0.95))]" />

                  <div className="absolute left-2.5 right-2.5 top-2.5 flex items-center justify-between text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    <span className="rounded-full bg-black/40 px-2 py-0.5 backdrop-blur">
                      UGC
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
                      Live
                    </span>
                  </div>

                  <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative grid h-12 w-12 place-items-center rounded-full bg-white/95 text-[#05070d] shadow-[0_10px_30px_-6px_rgba(0,0,0,0.7)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_0_6px_rgba(96,165,250,0.25),0_14px_40px_-6px_rgba(96,165,250,0.9)]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 translate-x-[1px]"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M7 5v14l12-7L7 5z" />
                      </svg>
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-[#60a5fa]/0 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#60a5fa]/35 group-hover:opacity-100 group-hover:blur-md"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-x-3 bottom-[72px] text-white">
                    <p className="text-[13px] font-semibold leading-snug tracking-tight">
                      &ldquo;{t.quote}{" "}
                      <span className="text-[#93c5fd]">{t.highlight}</span>
                      &rdquo;
                    </p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-[#05070d]/80 px-3 py-2.5 backdrop-blur">
                  <div className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/15">
                    <img
                      src={t.photo}
                      alt=""
                      draggable={false}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[12px] font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-[10px] text-white/55">{t.title}</div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-px rounded-[18px] opacity-0 shadow-[0_0_0_1px_rgba(96,165,250,0.4),0_20px_60px_-10px_rgba(59,130,246,0.55)] transition-opacity duration-300 group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </Reveal>
      </Container>

      <TestimonialModal
        testimonial={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
