import Container from "../Container";
import Reveal from "../Reveal";
import {
  DEMO_DISPLAY,
  DEMO_TEL,
  FREE_SAMPLE_URL,
} from "../../lib/site";

export default function LogoWall() {
  return (
    <section id="about" className="relative scroll-mt-32 py-14 md:py-20">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="card h-full p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a5f3fc]">
                Live proof
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white">
                Try our live AI receptionist right now
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-[15px]">
                Sophie answers this line. It is our own demo, so you can hear
                how a call is handled before you ask about your clinic or
                salon. This is not a client testimonial.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a href={DEMO_TEL} className="btn-primary">
                  Call Sophie on {DEMO_DISPLAY}
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
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="card h-full p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                Real setup · name withheld
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A Brisbane massage clinic booking page
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-[15px]">
                We have set up an online booking page for a Brisbane massage
                clinic, with services, duration, opening hours and booking
                confirmations. We are not publishing the clinic&apos;s name, a
                quote from them, or any performance numbers.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                If you want to see how a page like that is put together, ask
                on a free sample call and we will walk you through it.
              </p>
              <a
                href={FREE_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6"
              >
                Ask for the walkthrough
              </a>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
