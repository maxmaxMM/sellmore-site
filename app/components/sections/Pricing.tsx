import Link from "next/link";
import Container from "../Container";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

type MonthlyPlan = {
  name: string;
  price: number;
  summary: string;
  features: string[];
  highlight?: boolean;
  cta: string;
};

const setupFeatures = [
  "System setup",
  "Automation setup",
  "Templates",
  "Pipeline setup",
  "Testing",
];

const monthlyPlans: MonthlyPlan[] = [
  {
    name: "Follow-Up System",
    price: 299,
    summary: "Automated follow-up only — no short videos included.",
    features: [
      "Automated email & SMS follow-up",
      "Missed lead recovery",
      "Enquiry pipeline",
      "Basic reporting",
    ],
    cta: "Start with Follow-Up",
  },
  {
    name: "Growth System",
    price: 399,
    summary: "Short videos plus follow-up automation — our main growth plan.",
    features: [
      "5 short videos per week",
      "Social media scheduling",
      "Email & SMS follow-up",
      "Missed lead recovery",
      "Basic reporting",
    ],
    highlight: true,
    cta: "Choose Growth System",
  },
];

const addOnFeatures = [
  "AI voice call handling",
  "Missed call response",
  "Booking support under normal usage",
];

function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <span
      className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full ${
        highlight
          ? "bg-[#fbbf24] text-[#3f1d0a]"
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
  );
}

function FeatureList({
  features,
  highlight,
}: {
  features: string[];
  highlight?: boolean;
}) {
  return (
    <ul className="space-y-3 text-sm text-white/75">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <CheckIcon highlight={highlight} />
          {f}
        </li>
      ))}
    </ul>
  );
}

function PlanCard({
  plan,
  delay,
}: {
  plan: MonthlyPlan;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="relative flex flex-col">
      {plan.highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[24px] bg-[conic-gradient(from_140deg,rgba(251,191,36,0.5),rgba(96,165,250,0.35),rgba(251,191,36,0.5))] blur-[2px] opacity-90"
        />
      )}
      <div
        className={`card relative flex h-full flex-col p-6 sm:p-7 ${
          plan.highlight
            ? "ring-1 ring-[#fbbf24]/45 shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_30px_80px_-30px_rgba(251,191,36,0.35)]"
            : ""
        }`}
      >
        {plan.highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-[#fbbf24] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3f1d0a] shadow-[0_0_20px_-4px_rgba(251,191,36,0.8)]">
              Recommended
            </span>
          </div>
        )}

        <h3 className="text-lg font-semibold tracking-tight text-white">
          {plan.name}
        </h3>

        <div className="mt-5 flex items-end gap-1.5">
          <span className="text-[44px] font-semibold leading-none tracking-[-0.03em] text-white">
            ${plan.price}
          </span>
          <span className="pb-2 text-sm text-white/50">/ month</span>
        </div>

        <p className="mt-2 text-sm text-white/55">{plan.summary}</p>

        <div className="mt-6">
          <FeatureList features={plan.features} highlight={plan.highlight} />
        </div>

        <div className="mt-auto pt-6">
          <Link
            href="/get-image"
            className={
              plan.highlight ? "btn-primary w-full" : "btn-secondary w-full"
            }
          >
            {plan.cta}
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Short videos + follow-up ={" "}
              <span className="text-brand-gradient">more bookings.</span>
            </>
          }
          subtitle="Many local businesses are already losing customers because they reply too slowly, do not follow up, and are not visible enough online. SellMoreStudio helps you get seen, follow up automatically, and win back missed leads."
        />

        {/* One-time setup */}
        <Reveal delay={0.08} className="mt-14">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_0%_0%,rgba(59,130,246,0.12),transparent_55%)]"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-[#60a5fa]/30 bg-[#3b82f6]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">
                  One-time fee
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  One-Time Setup
                </h3>
                <div className="mt-3 flex items-end gap-1.5">
                  <span className="text-[40px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[44px]">
                    $499
                  </span>
                  <span className="pb-2 text-sm text-white/50">once</span>
                </div>
                <p className="mt-2 text-sm text-white/55">
                  Required to get your system live. Covers everything we need to
                  launch your follow-up and content workflow.
                </p>
              </div>

              <div className="lg:min-w-[280px] lg:max-w-sm lg:flex-1">
                <FeatureList features={setupFeatures} />
              </div>

              <div className="lg:shrink-0">
                <Link href="/get-image" className="btn-secondary w-full lg:w-auto lg:min-w-[180px]">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Monthly plans */}
        <Reveal delay={0.12} className="mt-10">
          <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-white/45">
            Then choose your monthly plan
          </p>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {monthlyPlans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} delay={0.14 + i * 0.08} />
          ))}
        </div>

        {/* Optional add-on */}
        <Reveal delay={0.3} className="mt-5">
          <div className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                Optional add-on
              </span>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
                AI Voice Assistant
              </h3>
              <div className="mt-2 flex items-end gap-1.5">
                <span className="text-2xl font-semibold tracking-[-0.02em] text-white">
                  +$99
                </span>
                <span className="pb-0.5 text-sm text-white/50">/ month</span>
              </div>
            </div>

            <div className="sm:max-w-md sm:flex-1">
              <FeatureList features={addOnFeatures} />
            </div>

            <Link
              href="/get-image"
              className="btn-secondary w-full shrink-0 sm:w-auto sm:min-w-[160px]"
            >
              Add voice assistant
            </Link>
          </div>
          <p className="mt-3 text-center text-xs text-white/40">
            High usage may require a custom plan.
          </p>
        </Reveal>

        <Reveal
          delay={0.35}
          className="mt-10 text-center text-sm text-white/45"
        >
          Need something custom? Email{" "}
          <a
            href="mailto:sellmorestudiosupport@gmail.com"
            className="text-white/70 underline underline-offset-4 hover:text-white"
          >
            sellmorestudiosupport@gmail.com
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/61421435858"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline underline-offset-4 hover:text-green-300"
          >
            WhatsApp us
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
