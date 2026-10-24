import CtaRow from "./CtaRow";
import PricePanel from "./PricePanel";
import type { Service } from "../lib/site";

export default function ServiceCard({
  service,
  idPrefix,
}: {
  service: Service;
  idPrefix: string;
}) {
  return (
    <article
      id={`${idPrefix}${service.id}`}
      className="card scroll-mt-32 p-5 sm:p-7"
    >
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {service.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-[15px]">
            <span className="font-semibold text-white">Who it&apos;s for. </span>
            {service.who}
          </p>
        </div>

        <PricePanel price={service.price} />

        <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
          <span className="font-semibold text-white">The problem. </span>
          {service.problem}
        </p>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Included
            </h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-white/75">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#3b82f6]/20 text-[#93c5fd]">
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
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
              Suitable industries
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {service.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-white/75"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CtaRow emphasis={service.emphasis} />
      </div>
    </article>
  );
}
