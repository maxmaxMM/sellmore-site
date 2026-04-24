import Link from "next/link";
import Container from "../Container";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

type Tier = {
  name: string;
  price: number;
  images: number;
  features: string[];
  tagline: string;
  highlight?: boolean;
  cta: string;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: 49,
    images: 4,
    features: [
      "72-hour turnaround",
      "1 revision round included",
      "Email support",
    ],
    tagline: "Designed for simple promotions",
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: 79,
    images: 8,
    features: [
      "48-hour turnaround",
      "2 revision rounds included",
      "Priority support",
    ],
    tagline: "Built for consistent posting",
    highlight: true,
    cta: "Choose Growth",
  },
  {
    name: "Pro",
    price: 109,
    images: 12,
    features: [
      "24-hour turnaround",
      "2 revision rounds included",
      "Priority support",
      "Fastest delivery",
    ],
    tagline: "Best for high-volume businesses",
    cta: "Go Pro",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple monthly plans.{" "}
              <span className="text-brand-gradient">Cancel anytime.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="relative flex flex-col"
            >
              {t.highlight && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[24px] bg-[conic-gradient(from_140deg,rgba(96,165,250,0.45),rgba(34,211,238,0.25),rgba(96,165,250,0.45))] blur-[2px] opacity-80"
                />
              )}
              <div
                className={`card relative flex h-full flex-col p-6 sm:p-7 ${
                  t.highlight
                    ? "ring-1 ring-[#60a5fa]/40 shadow-[0_0_0_1px_rgba(96,165,250,0.3),0_30px_80px_-30px_rgba(59,130,246,0.6)]"
                    : ""
                }`}
              >
                {t.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#3b82f6] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_20px_-4px_rgba(96,165,250,0.8)]">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {t.name}
                  </h3>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                    {t.images} images / mo
                  </span>
                </div>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="text-[44px] font-semibold leading-none tracking-[-0.03em] text-white">
                    ${t.price}
                  </span>
                  <span className="pb-2 text-sm text-white/50">/ month</span>
                </div>

                <p className="mt-2 text-sm text-white/55">
                  {t.images} marketing images every month
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/75">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                          t.highlight
                            ? "bg-[#3b82f6] text-white"
                            : "bg-white/10 text-[#93c5fd]"
                        }`}
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className="h-2.5 w-2.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M2.5 6.5l2.5 2.5 5-5.5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-[13px] italic text-white/55">
                    {t.tagline}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/get-image"
                    className={
                      t.highlight
                        ? "btn-primary w-full"
                        : "btn-secondary w-full"
                    }
                  >
                    {t.cta}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.25}
          className="mt-10 text-center text-sm text-white/45"
        >
          Need something custom? Email{" "}
          <a
            href="mailto:hello@sellmore.studio"
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            hello@sellmore.studio
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
