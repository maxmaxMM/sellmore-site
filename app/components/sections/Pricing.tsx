import Link from "next/link";
import Container from "../Container";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const setupFeatures = [
  "System setup",
  "Automation setup",
  "Google review request workflow",
  "SMS & email templates",
  "Enquiry pipeline",
  "Testing",
];

const followUpFeatures = [
  "Automated Google review requests",
  "Instant SMS & email replies",
  "Missed-call text back",
  "Lead follow-up sequences",
  "Missed lead recovery",
  "Enquiry pipeline",
  "Basic reporting",
];

const addOnFeatures = [
  "Missed-call response",
  "AI voice call handling",
  "Lead detail collection",
  "Basic booking support",
  "SMS follow-up after calls",
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

function PlanLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
      {children}
    </span>
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
              More reviews. Faster replies.{" "}
              <span className="text-brand-gradient">Fewer missed leads.</span>
            </>
          }
          subtitle="Simple setup and one monthly plan built for massage shops, salons, restaurants, tradies, clinics and local service businesses."
        />

        {/* One-time setup */}
        <Reveal delay={0.08} className="mt-14">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_0%_0%,rgba(59,130,246,0.12),transparent_55%)]"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl lg:flex-1">
                <PlanLabel>One-time setup</PlanLabel>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  System Setup
                </h3>
                <div className="mt-3 flex items-end gap-1.5">
                  <span className="text-[40px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[44px]">
                    $499
                  </span>
                  <span className="pb-2 text-sm text-white/50">once</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  We build, connect and test your system so it is ready to
                  respond, follow up and recover missed opportunities.
                </p>
              </div>

              <div className="lg:min-w-[280px] lg:max-w-sm lg:flex-1">
                <FeatureList features={setupFeatures} />
              </div>

              <div className="lg:shrink-0 lg:pt-8">
                <Link
                  href="/get-started"
                  className="btn-secondary w-full lg:w-auto lg:min-w-[180px]"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Follow-up plan */}
        <Reveal delay={0.14} className="relative mt-5 flex flex-col">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[1px] -z-10 rounded-[24px] bg-[conic-gradient(from_140deg,rgba(251,191,36,0.45),rgba(96,165,250,0.3),rgba(251,191,36,0.45))] blur-[2px] opacity-80"
          />
          <div className="card relative flex flex-col p-6 sm:p-8 ring-1 ring-[#fbbf24]/35 shadow-[0_0_0_1px_rgba(251,191,36,0.2),0_30px_80px_-30px_rgba(59,130,246,0.45)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl lg:flex-1">
                <PlanLabel>Monthly plan</PlanLabel>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Follow-Up System
                </h3>
                <div className="mt-3 flex items-end gap-1.5">
                  <span className="text-[40px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[44px]">
                    $299
                  </span>
                  <span className="pb-2 text-sm text-white/50">/ month</span>
                </div>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#93c5fd]">
                  Less than $10 a day to follow up faster, recover missed leads
                  and collect more reviews.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  A simple system that helps local businesses reply quickly,
                  follow up automatically and stay connected with customers.
                </p>
              </div>

              <div className="lg:min-w-[300px] lg:max-w-md lg:flex-1">
                <FeatureList features={followUpFeatures} highlight />
              </div>

              <div className="lg:shrink-0 lg:pt-8">
                <Link href="/get-started" className="btn-primary w-full lg:w-auto lg:min-w-[200px]">
                  Start with Follow-Up
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Optional add-on */}
        <Reveal delay={0.22} className="mt-5">
          <div className="card flex flex-col gap-5 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-sm lg:flex-1">
                <PlanLabel>Optional add-on</PlanLabel>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  AI Voice Assistant
                </h3>
                <div className="mt-3 flex items-end gap-1.5">
                  <span className="text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                    +$99
                  </span>
                  <span className="pb-0.5 text-sm text-white/50">/ month</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Answer missed calls, collect enquiry details and support basic
                  booking requests.
                </p>
              </div>

              <div className="lg:max-w-md lg:flex-1">
                <FeatureList features={addOnFeatures} />
                <p className="mt-4 text-xs leading-relaxed text-white/40">
                  Reasonable usage included. Higher call volume may require a
                  custom plan.
                </p>
              </div>

              <div className="lg:shrink-0 lg:pt-6">
                <Link
                  href="/get-started"
                  className="btn-secondary w-full lg:w-auto lg:min-w-[160px]"
                >
                  Add AI Voice
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.3}
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
