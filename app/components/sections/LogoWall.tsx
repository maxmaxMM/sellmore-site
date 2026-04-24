import type { ReactNode } from "react";
import Container from "../Container";
import Reveal from "../Reveal";

type Brand = {
  label: ReactNode;
  icon?: ReactNode;
};

function Serif({ children }: { children: ReactNode }) {
  return (
    <span className="font-serif italic tracking-[-0.02em]">{children}</span>
  );
}

const brands: Brand[] = [
  {
    label: (
      <span className="text-[18px] tracking-[0.34em]">
        <span className="font-light">CAFE </span>
        <Serif>SIENA</Serif>
      </span>
    ),
  },
  {
    label: (
      <span className="text-[16px] font-medium tracking-[0.28em]">
        LUXE BEAUTY
      </span>
    ),
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12" />
      </svg>
    ),
    label: (
      <span className="text-[15px] font-bold tracking-[0.14em]">
        URBAN <span className="text-[#93c5fd]">FITNESS</span>
      </span>
    ),
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9z" />
      </svg>
    ),
    label: (
      <span className="leading-tight text-left">
        <span className="block text-[14px] font-semibold tracking-tight">
          First Choice
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
          Real Estate
        </span>
      </span>
    ),
  },
  {
    label: (
      <span className="leading-tight">
        <span className="text-[17px] font-bold tracking-tight">
          Tax<span className="text-[#60a5fa]">Pro</span>
        </span>
        <span className="ml-2 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/55">
          Accounting
        </span>
      </span>
    ),
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M7 9c0-3 2-5 5-5s5 2 5 5c0 4-2 6-5 6s-5-2-5-6z" />
        <path d="M7 15c0 2 2 5 5 5s5-3 5-5" />
      </svg>
    ),
    label: (
      <span className="text-[15px] font-bold tracking-[0.18em]">
        SMILE DENTAL
      </span>
    ),
  },
];

export default function LogoWall() {
  return (
    <section id="about" className="relative py-14 md:py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <p className="text-[13px] text-white/55">
            Trusted by local businesses across{" "}
            <span className="font-semibold text-[#93c5fd]">Australia</span>
          </p>

          <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-6 text-white/75 sm:gap-x-14">
            {brands.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 opacity-85 transition-opacity duration-200 hover:opacity-100"
              >
                {b.icon ? <span className="text-white/80">{b.icon}</span> : null}
                {b.label}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
