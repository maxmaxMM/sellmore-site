/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Realistic commercial marketing cards — photo thumbnail + overlay layout   */
/* -------------------------------------------------------------------------- */

function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      {children}
    </div>
  );
}

function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      draggable={false}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${className}`}
    >
      {children}
    </span>
  );
}

/* ---------------------------- 1. Lunch Combo ------------------------------ */

export function LunchComboCard() {
  return (
    <Frame className="aspect-[4/5]">
      <Photo
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80&auto=format&fit=crop"
        alt="Burger combo"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.55)_0%,rgba(5,7,13,0.1)_35%,rgba(5,7,13,0.05)_50%,rgba(5,7,13,0.85)_100%)]" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <Chip className="bg-black/45 text-white ring-1 ring-inset ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] shadow-[0_0_8px_0_#fbbf24]" />
            Today&apos;s Special
          </Chip>
          <div className="mt-3 text-white">
            <div className="text-[28px] font-black leading-none tracking-[-0.03em]">
              LUNCH
              <br />
              COMBO
            </div>
            <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/85">
              Burger · Fries · Drink
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-end gap-1.5 rounded-xl bg-[#fbbf24] px-3 py-2 text-[#3f1d0a] shadow-[0_10px_24px_-6px_rgba(251,191,36,0.8)]">
            <span className="text-[15px] font-semibold">$</span>
            <span className="text-[28px] font-black leading-none tracking-[-0.03em]">
              9.90
            </span>
          </div>
          <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Weekdays · 11am–2pm
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------- 2. Open Home -------------------------------- */

export function OpenHomeCard() {
  return (
    <Frame className="aspect-[5/4]">
      <Photo
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1100&q=80&auto=format&fit=crop"
        alt="Modern family home"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.55),rgba(5,7,13,0.15)_40%,rgba(5,7,13,0.85))]" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="text-white">
          <Chip className="bg-white/10 text-white/90 ring-1 ring-inset ring-white/20 backdrop-blur">
            Modern Family Home
          </Chip>
          <div className="mt-2 text-[22px] font-black leading-[1.05] tracking-[-0.02em]">
            OPEN HOME
            <br />
            <span className="text-[#fb923c]">THIS SATURDAY</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {[
              ["4", "Beds"],
              ["2", "Baths"],
              ["2", "Cars"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-md bg-white/10 px-2 py-1.5 text-[10px] text-white/90 ring-1 ring-inset ring-white/15 backdrop-blur"
              >
                <span className="mr-1 font-bold text-white">{n}</span>
                {l}
              </div>
            ))}
          </div>
          <div className="text-right text-[10px] text-white/80">
            <div className="uppercase tracking-[0.16em] text-white/60">
              Contact
            </div>
            <div className="text-[13px] font-bold text-white tracking-tight">
              0400 123 456
            </div>
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-[calc(100%+8px)]" />
      </div>

      <div className="absolute bottom-3 right-3">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#fb923c] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#3f1d0a] shadow-[0_8px_20px_-4px_rgba(251,146,60,0.7)]">
          Book a Viewing
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 8h9M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </Frame>
  );
}

/* ---------------------------- 3. Winter Glow Facial ----------------------- */

export function FacialCard() {
  return (
    <Frame className="aspect-[5/4]">
      <Photo
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1100&q=80&auto=format&fit=crop"
        alt="Facial skincare model"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(45,10,33,0.88)_0%,rgba(45,10,33,0.5)_45%,rgba(45,10,33,0.1)_80%)]" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <Chip className="bg-white/10 text-white/85 ring-1 ring-inset ring-white/20 backdrop-blur">
            Winter
          </Chip>
          <div className="mt-2 text-white">
            <div className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/75">
              Glow
            </div>
            <div className="text-[30px] font-black leading-none tracking-[-0.03em]">
              FACIAL
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[44px] font-black leading-none tracking-[-0.04em] text-white">
              50
            </span>
            <span className="text-[20px] font-black leading-none tracking-[-0.03em] text-[#fbcfe8]">
              % OFF
            </span>
          </div>
          <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/80">
            First Treatment
          </div>

          <span className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#ec4899] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_20px_-4px_rgba(236,72,153,0.7)]">
            Book Now
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------- 4. Stronger You Gym ------------------------- */

export function GymCard() {
  return (
    <Frame className="aspect-[4/5]">
      <Photo
        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80&auto=format&fit=crop"
        alt="Woman training in gym"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.45)_0%,rgba(5,7,13,0.1)_40%,rgba(5,7,13,0.9)_100%)]" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="text-white">
          <Chip className="bg-black/45 text-[#bef264] ring-1 ring-inset ring-[#bef264]/40 backdrop-blur">
            New Year
          </Chip>
          <div className="mt-2 text-[26px] font-black leading-none tracking-[-0.03em]">
            STRONGER
            <br />
            <span className="text-[#bef264]">YOU</span>
          </div>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
            Join now
          </div>
          <div className="flex items-baseline gap-1 text-white">
            <span className="text-[12px] font-semibold">$</span>
            <span className="text-[36px] font-black leading-none tracking-[-0.04em]">
              29
            </span>
            <span className="pb-1 text-[12px] font-semibold text-white/80">
              /week
            </span>
          </div>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[#84cc16] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a2e05] shadow-[0_8px_20px_-4px_rgba(132,204,22,0.7)]">
            Start Today
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* ---------------------------- 5. Tax Return ------------------------------- */

export function TaxCard() {
  return (
    <Frame className="aspect-[4/5]">
      <Photo
        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80&auto=format&fit=crop"
        alt="Tax paperwork and calculator"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.7)_0%,rgba(5,10,24,0.3)_35%,rgba(5,10,24,0.95)_100%)]" />

      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="text-white">
          <Chip className="bg-[#3b82f6]/30 text-[#bfdbfe] ring-1 ring-inset ring-[#60a5fa]/50 backdrop-blur">
            Tax Return
          </Chip>
          <div className="mt-3 flex items-end gap-1">
            <span className="text-[16px] font-semibold">$</span>
            <span className="text-[44px] font-black leading-none tracking-[-0.04em]">
              120
            </span>
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#93c5fd]">
            Flat Fee
          </div>
        </div>

        <div>
          <ul className="space-y-1 text-[10.5px] text-white/85">
            {[
              "Individual Returns",
              "Fast & Easy",
              "Max Refund",
            ].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="grid h-3 w-3 place-items-center rounded-full bg-[#3b82f6] text-white">
                  <svg
                    viewBox="0 0 12 12"
                    className="h-2 w-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M2.5 6.5l2.5 2.5 5-5.5" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#3b82f6] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_20px_-4px_rgba(59,130,246,0.7)]">
            Book Appointment
          </span>
        </div>
      </div>
    </Frame>
  );
}
