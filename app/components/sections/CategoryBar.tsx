import Container from "../Container";
import Reveal from "../Reveal";

const categories = [
  {
    label: "Food & Drink",
    icon: (
      <>
        <path d="M7 3v7a3 3 0 0 0 6 0V3" />
        <path d="M10 13v8" />
        <path d="M17 3c1.7 0 3 1.2 3 3v4a3 3 0 0 1-3 3" />
        <path d="M17 6v15" />
      </>
    ),
  },
  {
    label: "Beauty & Wellness",
    icon: (
      <>
        <path d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9z" />
        <path d="M6 9c3 0 5 2 5 5-3 0-5-2-5-5z" />
        <path d="M18 9c-3 0-5 2-5 5 3 0 5-2 5-5z" />
        <path d="M6 18h12" />
      </>
    ),
  },
  {
    label: "Real Estate",
    icon: (
      <>
        <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9z" />
      </>
    ),
  },
  {
    label: "Fitness & Health",
    icon: (
      <>
        <path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12" />
      </>
    ),
  },
  {
    label: "Services",
    icon: (
      <>
        <path d="M4 7h16l-1 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 7z" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      </>
    ),
  },
  {
    label: "Retail & Shops",
    icon: (
      <>
        <path d="M3 8h18l-1.5 11a2 2 0 0 1-2 1.7H6.5a2 2 0 0 1-2-1.7L3 8z" />
        <path d="M7 8a5 5 0 0 1 10 0" />
      </>
    ),
  },
  {
    label: "Professional",
    icon: (
      <>
        <circle cx="12" cy="9" r="4" />
        <path d="M5 20c1.4-3.5 4-5 7-5s5.6 1.5 7 5" />
      </>
    ),
  },
];

export default function CategoryBar() {
  return (
    <section id="industries" className="relative py-8 md:py-10">
      <Container>
        <Reveal className="relative rounded-2xl border border-white/10 bg-[#0a0d16]/80 px-2 py-1.5 backdrop-blur">
          <div className="flex items-center gap-1 overflow-x-auto px-1 py-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => (
              <div
                key={c.label}
                className="group flex shrink-0 flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white/80 transition-colors group-hover:text-[#93c5fd]"
                  aria-hidden
                >
                  {c.icon}
                </svg>
                <span className="text-[12px] font-medium whitespace-nowrap">
                  {c.label}
                </span>
              </div>
            ))}

            <div className="mx-1 h-8 w-px shrink-0 bg-white/10" />

            <div className="flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[12.5px] font-medium text-white/55">
              … and more
              <svg
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 5l5 5-5 5" />
              </svg>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
