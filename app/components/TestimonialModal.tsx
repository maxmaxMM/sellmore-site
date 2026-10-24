"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import {
  DEMO_DISPLAY,
  DEMO_TEL,
  FREE_SAMPLE_URL,
  type Scenario,
} from "../lib/site";

type Props = {
  scenario: Scenario | null;
  onClose: () => void;
};

export default function ScenarioModal({ scenario, onClose }: Props) {
  useEffect(() => {
    if (!scenario) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [scenario, onClose]);

  return (
    <AnimatePresence>
      {scenario ? (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="scenario-title"
          className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
        >
          <div className="absolute inset-0 bg-[#05070d]/80 backdrop-blur-xl" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[22px] border border-white/10 bg-[#0a0d16] p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close scenario"
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/80 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <span className="inline-flex max-w-[85%] rounded-full border border-[#fbbf24]/40 bg-[#fbbf24]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#fde68a]">
              {scenario.badge}
            </span>
            <h3 id="scenario-title" className="mt-4 text-2xl font-semibold tracking-tight text-white">
              {scenario.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {scenario.summary}
            </p>
            <ol className="mt-5 space-y-3">
              {scenario.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-white/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#3b82f6]/20 text-[12px] font-semibold text-[#bfdbfe]">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs leading-relaxed text-white/45">
              {scenario.footnote}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <a href={DEMO_TEL} className="btn-primary">
                Call Sophie {DEMO_DISPLAY}
              </a>
              <a
                href={FREE_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Request a custom sample
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
