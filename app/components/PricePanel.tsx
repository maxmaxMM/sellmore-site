import type { PublicPrice } from "../lib/site";

function Amount({
  label,
  amount,
  cadence,
  tone = "setup",
}: {
  label: string;
  amount: string;
  cadence: "once" | "month";
  tone?: "setup" | "monthly";
}) {
  return (
    <div className="min-w-[9.5rem] flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <div
        className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
          tone === "monthly" ? "text-[#fbbf24]" : "text-[#93c5fd]"
        }`}
      >
        {label}
      </div>
      <div className="mt-1 text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[2rem]">
        {amount}
        <span className="ml-1 text-sm font-medium tracking-normal text-white/55">
          {cadence === "once" ? "once" : "/month"}
        </span>
      </div>
    </div>
  );
}

export default function PricePanel({ price }: { price: PublicPrice }) {
  if (price.type === "setup-monthly") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        <Amount label="Setup · once" amount={price.setup} cadence="once" />
        <Amount
          label="Monthly"
          amount={price.monthly}
          cadence="month"
          tone="monthly"
        />
      </div>
    );
  }

  if (price.type === "chat-or-bundle") {
    return (
      <div className="space-y-3">
        <p className="text-sm font-medium text-[#fde68a]">
          Covered by the Basic AI Chat Widget, or a Custom Bundle Quote. This
          is not a separate third price.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Amount
            label="Chat widget setup · once"
            amount={price.setup}
            cadence="once"
          />
          <Amount
            label="Chat widget monthly"
            amount={price.monthly}
            cadence="month"
            tone="monthly"
          />
        </div>
        <p className="text-sm text-white/60">or Custom Bundle Quote</p>
      </div>
    );
  }

  if (price.type === "named-fees") {
    return (
      <div className="flex flex-col gap-3 sm:flex-row">
        {price.fees.map((fee) => (
          <Amount
            key={fee.name}
            label={
              fee.cadence === "once" ? `${fee.name} · once` : `${fee.name} · monthly`
            }
            amount={fee.amount}
            cadence={fee.cadence}
            tone={fee.cadence === "month" ? "monthly" : "setup"}
          />
        ))}
      </div>
    );
  }

  if (price.type === "monthly-tiers") {
    return (
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fbbf24]">
          Monthly tiers · no separate setup fee
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {price.tiers.map((tier) => (
            <div
              key={tier.label}
              className="rounded-2xl border border-[#fbbf24]/25 bg-[#fbbf24]/[0.06] px-4 py-3"
            >
              <div className="text-[13px] leading-snug text-white/70">
                {tier.label}
              </div>
              <div className="mt-2 text-[1.65rem] font-semibold leading-none tracking-[-0.03em] text-white">
                {tier.amount}
                <span className="ml-1 text-sm font-medium text-white/55">
                  /month
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#fbbf24]/30 bg-[#fbbf24]/[0.07] px-4 py-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fbbf24]">
        Public price
      </div>
      <p className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {price.label}
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
        {price.detail}
      </p>
    </div>
  );
}
