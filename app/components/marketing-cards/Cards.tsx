/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] bg-[#10131e] ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      {children}
    </div>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      draggable={false}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function SampleChip() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fbbf24] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#3f1d0a]">
      Sample preview
    </span>
  );
}

export function MassageBookingCard() {
  return (
    <Frame className="aspect-[4/5]">
      <Photo
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80&auto=format&fit=crop"
        alt="Sample preview of a massage treatment room"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.72)_0%,rgba(5,7,13,0.15)_42%,rgba(5,7,13,0.88)_100%)]" />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <SampleChip />
          <div className="mt-3 text-[26px] font-black leading-none tracking-[-0.03em] text-white">
            MASSAGE
            <br />
            CLINIC
          </div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
            Booking
          </div>
        </div>
        <div>
          <div className="text-[12px] text-white/85">60 min remedial · relaxation</div>
          <span className="mt-3 inline-flex rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a0e07]">
            Book online
          </span>
        </div>
      </div>
    </Frame>
  );
}

export function NailSpecialCard() {
  return (
    <Frame className="aspect-[5/4]">
      <Photo
        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1100&q=80&auto=format&fit=crop"
        alt="Sample preview of a nail salon manicure"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.55),rgba(5,7,13,0.15)_40%,rgba(5,7,13,0.88))]" />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <SampleChip />
          <div className="mt-3 text-[24px] font-black leading-[1.02] tracking-[-0.03em] text-white">
            NAIL SALON
            <br />
            <span className="text-[#fbcfe8]">SPECIAL</span>
          </div>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="text-[12px] text-white/85">Gel manicure · book a set</div>
          <span className="rounded-md bg-[#ec4899] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            Book a set
          </span>
        </div>
      </div>
    </Frame>
  );
}

export function FacialBookingCard() {
  return (
    <Frame className="aspect-[5/4]">
      <Photo
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1100&q=80&auto=format&fit=crop"
        alt="Sample preview of a beauty facial"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(45,10,33,0.9)_0%,rgba(45,10,33,0.45)_55%,rgba(45,10,33,0.15)_100%)]" />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <SampleChip />
          <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/75">
            Beauty salon
          </div>
          <div className="text-[30px] font-black leading-none tracking-[-0.03em] text-white">
            FACIAL
            <br />
            BOOKING
          </div>
        </div>
        <span className="inline-flex w-fit rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#3f1d0a]">
          Book a facial
        </span>
      </div>
    </Frame>
  );
}

export function BarberBookingCard() {
  return (
    <Frame className="aspect-[4/5]">
      <Photo
        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80&auto=format&fit=crop"
        alt="Sample preview of a barbershop cut"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.55)_0%,rgba(5,7,13,0.12)_40%,rgba(5,7,13,0.92)_100%)]" />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <SampleChip />
          <div className="mt-3 text-[24px] font-black leading-none tracking-[-0.03em] text-white">
            BARBER
            <br />
            <span className="text-[#fde68a]">WALK-IN</span>
          </div>
        </div>
        <div>
          <div className="text-[12px] text-white/85">Cut · beard · book or walk in</div>
          <span className="mt-3 inline-flex rounded-md bg-[#fbbf24] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#3f1d0a]">
            Hold my spot
          </span>
        </div>
      </div>
    </Frame>
  );
}

export function ReviewGrowthCard() {
  return (
    <Frame className="aspect-[4/5]">
      <Photo
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop"
        alt="Sample preview of a reception desk"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.78)_0%,rgba(5,10,24,0.35)_35%,rgba(5,10,24,0.94)_100%)]" />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div>
          <SampleChip />
          <div className="mt-3 text-[22px] font-black leading-none tracking-[-0.03em] text-white">
            GOOGLE
            <br />
            5-STAR
          </div>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#93c5fd]">
            Review growth
          </div>
        </div>
        <div>
          <div className="flex gap-1 text-[#fbbf24]" aria-hidden>
            {Array.from({ length: 5 }).map((_, index) => (
              <svg key={index} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M10 1.6l2.1 6.2h6.5l-5.2 3.8 2 6.2L10 14.2 4.6 17.8l2-6.2L1.4 7.8h6.5L10 1.6z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 text-[11px] leading-snug text-white/75">
            Sample of a review invite. Not a real rating.
          </p>
        </div>
      </div>
    </Frame>
  );
}
