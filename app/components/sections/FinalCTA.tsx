import Link from "next/link";
import Container from "../Container";
import Reveal from "../Reveal";
import {
  DEMO_DISPLAY,
  DEMO_TEL,
  FREE_SAMPLE_URL,
  GOOGLE_CHECK_HREF,
} from "../../lib/site";

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.5),rgba(5,7,13,0.8))] px-6 py-14 text-center sm:px-10 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(40% 60% at 80% 100%, rgba(251,191,36,0.12), transparent 70%)",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] shadow-[0_0_12px_2px_rgba(251,191,36,0.75)]" />
              Brisbane &amp; Australia
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              <span className="text-gradient">Ready for a fuller diary</span>
              <br />
              <span className="text-brand-gradient">and fewer missed calls?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/65">
              Tell us about your clinic, salon or shop. We will show you a
              sample, or you can call Sophie and hear the receptionist now.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={FREE_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get free sample / demo
              </a>
              <Link href="/get-started" className="btn-secondary">
                Get started
              </Link>
              <a href={GOOGLE_CHECK_HREF} className="btn-secondary">
                Free Google profile check
              </a>
              <a href={DEMO_TEL} className="btn-secondary">
                Call {DEMO_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
