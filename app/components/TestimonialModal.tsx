/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export type TestimonialData = {
  name: string;
  title: string;
  photo: string;
  quote: string;
  highlight: string;
};

type Props = {
  testimonial: TestimonialData | null;
  onClose: () => void;
};

export default function TestimonialModal({ testimonial, onClose }: Props) {
  useEffect(() => {
    if (!testimonial) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [testimonial, onClose]);

  return (
    <AnimatePresence>
      {testimonial ? (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          aria-modal
          role="dialog"
          aria-label={`${testimonial.name} testimonial preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#05070d]/80 backdrop-blur-xl" />

          {/* Dialog */}
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[780px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0a0d16]/95 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)]"
          >
            {/* ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 0%, rgba(59,130,246,0.28), transparent 60%), radial-gradient(50% 80% at 0% 100%, rgba(34,211,238,0.16), transparent 65%)",
              }}
            />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur transition-all hover:border-white/25 hover:bg-black/60 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>

            <div className="relative grid gap-0 md:grid-cols-[280px_1fr]">
              {/* --- Fake video thumbnail --- */}
              <div className="relative aspect-[9/14] md:aspect-auto md:h-[440px]">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.15)_30%,rgba(5,7,13,0.95))]" />

                {/* top meta */}
                <div className="absolute inset-x-3 top-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85">
                  <span className="rounded-full bg-black/45 px-2 py-0.5 backdrop-blur">
                    UGC
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
                    Preview
                  </span>
                </div>

                {/* play ghost */}
                <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full bg-white/95 text-[#05070d] shadow-[0_10px_40px_-8px_rgba(96,165,250,0.7)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 translate-x-[1px]"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M7 5v14l12-7L7 5z" />
                    </svg>
                    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#60a5fa]/40 [animation-duration:2.6s]" />
                  </div>
                </div>

                {/* fake progress bar */}
                <div className="absolute inset-x-4 bottom-16">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-white/75">
                    <span>0:00</span>
                    <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
                      <div className="absolute inset-y-0 left-0 w-[0%] rounded-full bg-white" />
                    </div>
                    <span>0:18</span>
                  </div>
                </div>

                {/* quote */}
                <div className="absolute inset-x-4 bottom-3 text-white">
                  <p className="text-[13px] font-semibold leading-snug tracking-tight">
                    &ldquo;{testimonial.quote}{" "}
                    <span className="text-[#93c5fd]">
                      {testimonial.highlight}
                    </span>
                    &rdquo;
                  </p>
                </div>
              </div>

              {/* --- Info panel --- */}
              <div className="relative flex flex-col justify-between gap-8 p-6 sm:p-8">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/15">
                      <img
                        src={testimonial.photo}
                        alt=""
                        draggable={false}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[15px] font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-[12px] text-white/55">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>

                  <blockquote className="mt-6 border-l-2 border-[#3b82f6] pl-4 text-[18px] font-semibold leading-[1.35] tracking-tight text-white/90">
                    &ldquo;{testimonial.quote}{" "}
                    <span className="text-brand-gradient">
                      {testimonial.highlight}
                    </span>
                    &rdquo;
                  </blockquote>

                  <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[12px] text-white/70">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#3b82f6]/15 text-[#93c5fd] ring-1 ring-inset ring-[#60a5fa]/30">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M4 6h16" />
                        <path d="M4 12h16" />
                        <path d="M4 18h10" />
                      </svg>
                    </span>
                    Video preview coming soon. We&apos;re adding full clips to
                    this page shortly.
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-primary !py-2.5 !px-4 text-[13px]"
                  >
                    Start my preview
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
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-secondary !py-2.5 !px-4 text-[13px]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
