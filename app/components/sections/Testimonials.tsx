"use client";

import { useState } from "react";
import Container from "../Container";
import Reveal from "../Reveal";
import ScenarioModal from "../TestimonialModal";
import { scenarios, type Scenario } from "../../lib/site";

export default function Testimonials() {
  const [active, setActive] = useState<Scenario | null>(null);

  return (
    <section id="scenarios" className="relative scroll-mt-32 py-12 md:py-16">
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-md bg-[#fbbf24]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fde68a] ring-1 ring-inset ring-[#fbbf24]/35">
            Sample scenarios
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            See how it works for a clinic, salon or barbershop
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            These are interactive sample previews, clearly marked. They are not
            customer reviews, and the people in them are not clients.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {scenarios.map((scenario) => (
            <Reveal key={scenario.id} className="h-full">
              <button
                type="button"
                onClick={() => setActive(scenario)}
                className="card flex h-full w-full flex-col p-5 text-left transition-colors hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#93c5fd] sm:p-6"
              >
                <span className="inline-flex w-fit rounded-full border border-[#fbbf24]/35 bg-[#fbbf24]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#fde68a]">
                  {scenario.badge}
                </span>
                <span className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {scenario.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-white/60">
                  {scenario.summary}
                </span>
                <span className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#93c5fd]">
                  Open this sample scenario
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <ScenarioModal scenario={active} onClose={() => setActive(null)} />
    </section>
  );
}
