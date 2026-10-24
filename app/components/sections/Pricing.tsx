import Container from "../Container";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import { bundles, services } from "../../lib/site";

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-32 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Setup once.{" "}
              <span className="text-brand-gradient">Monthly after that.</span>
            </>
          }
          subtitle="Approved public prices in Australian dollars. A setup fee is a one-off. A monthly fee is ongoing. If a service says custom quote, we have not published a fixed price — please do not expect one."
        />

        <Reveal delay={0.05} className="mt-8">
          <div className="flex flex-wrap gap-3 text-[12.5px] text-white/70">
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#93c5fd]/30 bg-[#3b82f6]/10 px-3">
              <span className="h-2 w-2 rounded-full bg-[#93c5fd]" />
              Blue label = setup, charged once
            </span>
            <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#fbbf24]/35 bg-[#fbbf24]/10 px-3 text-[#fde68a]">
              <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
              Gold label = monthly fee
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div className="card overflow-hidden">
            <div className="hidden grid-cols-[1.3fr_1fr_1.15fr] gap-4 border-b border-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 md:grid">
              <span>Service</span>
              <span>Setup · once</span>
              <span>Monthly</span>
            </div>
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className="border-b border-white/8 last:border-b-0"
                >
                  <a
                    href={`#price-${service.id}`}
                    className="grid gap-2 px-5 py-4 transition-colors hover:bg-white/[0.03] md:grid-cols-[1.3fr_1fr_1.15fr] md:items-center md:gap-4"
                  >
                    <span className="font-semibold text-white">
                      {service.name}
                    </span>
                    {service.scan.merge ? (
                      <span className="text-sm font-medium text-[#fde68a] md:col-span-2">
                        {service.scan.merge}
                      </span>
                    ) : (
                      <>
                        <span className="text-sm text-white/80">
                          <span className="mr-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93c5fd] md:hidden">
                            Setup
                          </span>
                          {service.scan.setup}
                        </span>
                        <span className="text-sm text-white/80">
                          <span className="mr-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fbbf24] md:hidden">
                            Monthly
                          </span>
                          {service.scan.monthly}
                        </span>
                      </>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-8 space-y-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              idPrefix="price-"
            />
          ))}
        </div>

        <div id="bundles" className="scroll-mt-32 mt-16">
          <SectionHeading
            eyebrow="Popular industry bundles"
            title="How the services sit together"
            subtitle="Each service keeps its own approved price. We do not publish a made-up package total. Tell us which pieces you want and we will quote that mix."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {bundles.map((bundle) => (
              <Reveal key={bundle.id}>
                <article id={bundle.id} className="card scroll-mt-32 h-full p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {bundle.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {bundle.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/75">
                    {bundle.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbbf24]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
