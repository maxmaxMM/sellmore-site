import Link from "next/link";
import Container from "../Container";
import Reveal from "../Reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.5),rgba(5,7,13,0.8))] px-6 py-16 text-center sm:px-10 sm:py-20">
          {/* glow backgrounds */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(40% 60% at 80% 100%, rgba(34,211,238,0.18), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg opacity-60"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_2px_rgba(96,165,250,0.8)]" />
              Built for local businesses
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl md:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.05]">
              <span className="text-gradient">Ready to get more reviews</span>
              <br />
              <span className="text-brand-gradient">and never miss a lead?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/60">
              Set up your follow-up system and start recovering missed calls,
              replying faster and collecting more Google reviews.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/get-started" className="btn-primary">
                Get started
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
              <Link href="/#pricing" className="btn-secondary">
                See pricing
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
