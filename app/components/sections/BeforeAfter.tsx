/* eslint-disable @next/next/no-img-element */
import Container from "../Container";
import Reveal from "../Reveal";

export default function BeforeAfter() {
  return (
    <section id="work" className="relative py-12 md:py-16">
      <Container>
        <Reveal className="card relative overflow-hidden p-4 sm:p-5">
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.5fr] md:items-center">
            {/* LEFT — text */}
            <div className="px-2 py-2 md:py-6 md:px-4">
              <span className="inline-flex items-center gap-2 rounded-md bg-[#3b82f6]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#bfdbfe] ring-1 ring-inset ring-[#60a5fa]/35">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_10px_0_#60a5fa]" />
                Before &amp; After
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-[-0.02em] leading-[1.04]">
                <span className="text-white">Same photo.</span>
                <br />
                <span className="text-brand-gradient">Better results.</span>
              </h2>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/65">
                Turn plain phone photos into marketing images that get more{" "}
                <span className="font-semibold text-white">bookings</span>,{" "}
                <span className="font-semibold text-white">calls</span>, and{" "}
                <span className="font-semibold text-white">customers</span>.
              </p>

              <div className="mt-5 grid max-w-xs grid-cols-3 gap-2">
                <Stat value="2.8×" label="More clicks" />
                <Stat value="+37%" label="Bookings" />
                <Stat value="24h" label="Turnaround" />
              </div>
            </div>

            {/* RIGHT — comparison panel */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
              {/* --- BEFORE side ------------------------------------------- */}
              <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1100&q=80&auto=format&fit=crop"
                  alt="Plain coffee photo, no edit"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    filter:
                      "saturate(0.55) brightness(0.72) contrast(0.92) blur(0.2px)",
                  }}
                  draggable={false}
                />
                {/* warm-ish dull tint */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,22,18,0.35),rgba(18,16,12,0.65))]" />
                {/* greyish haze */}
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(90,90,90,0.18),rgba(40,40,40,0.08))] mix-blend-overlay" />
                {/* noise */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
                  }}
                />

                {/* BEFORE label */}
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-white/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 ring-1 ring-inset ring-white/20 backdrop-blur">
                    Before
                  </span>
                </div>

                {/* bottom-left "phone photo" cues */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 flex items-end justify-between text-[9.5px] font-medium uppercase tracking-[0.18em] text-white/55">
                  <span>iPhone · no edit</span>
                  <span className="flex items-center gap-1 text-white/45">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <rect x="3" y="6" width="18" height="13" rx="2" />
                      <circle cx="12" cy="12.5" r="3.5" />
                      <path d="M8 6l1.5-2h5L16 6" />
                    </svg>
                    1.2 MB · jpg
                  </span>
                </div>
              </div>

              {/* --- AFTER side -------------------------------------------- */}
              <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1300&q=80&auto=format&fit=crop"
                  alt="Coffee & Cake — polished marketing image by SellMore"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    filter: "saturate(1.2) contrast(1.07) brightness(1.04)",
                  }}
                  draggable={false}
                />
                {/* cinematic vignette */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,2,0.7)_0%,rgba(5,4,2,0.2)_35%,rgba(5,4,2,0.88)_100%)]" />
                {/* warm highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(130%_80%_at_70%_15%,rgba(251,191,36,0.25),transparent_55%)]" />
                {/* subtle blue rim from the brand side */}
                <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(ellipse_at_right,rgba(59,130,246,0.15),transparent_70%)]" />

                {/* AFTER · SELLMORE label */}
                <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#3b82f6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white ring-1 ring-inset ring-[#60a5fa]/60 shadow-[0_0_24px_-4px_rgba(96,165,250,0.8)]">
                    After · SellMore
                  </span>
                </div>

                {/* Styled ad composition */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
                  <div className="pt-8 sm:pt-10">
                    <div className="text-[9.5px] font-semibold uppercase tracking-[0.32em] text-white/70">
                      Café Siena
                    </div>
                    <div className="mt-2 inline-flex">
                      <span className="rounded-sm bg-[#fbbf24] px-2 py-0.5 text-[9.5px] font-black uppercase tracking-[0.22em] text-[#3f1d0a]">
                        Weekday Special
                      </span>
                    </div>
                    <div className="mt-3 text-white">
                      <div className="text-[26px] sm:text-[40px] md:text-[44px] font-black leading-[0.95] tracking-[-0.035em]">
                        COFFEE
                        <br />
                        &amp; CAKE
                      </div>
                      <div className="mt-1.5 text-[11px] sm:text-[12.5px] italic text-white/85">
                        Perfect start to your day · 7–11am
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-3">
                    <div className="flex items-end gap-1 text-[#fbbf24] drop-shadow-[0_6px_16px_rgba(251,191,36,0.35)]">
                      <span className="text-[16px] font-semibold">$</span>
                      <span className="text-[38px] sm:text-[52px] font-black leading-none tracking-[-0.04em]">
                        6.50
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#1a0e07] shadow-[0_12px_30px_-10px_rgba(255,255,255,0.6)]">
                      Order Now
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
                </div>

                {/* light sweep (existing keyframe) */}
                <div className="sweep pointer-events-none absolute inset-0" />
              </div>

              {/* --- Divider + handle -------------------------------------- */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[2px] -translate-x-1/2 bg-white/90 shadow-[0_0_28px_0_rgba(96,165,250,0.65)] transition-all duration-500 group-hover:shadow-[0_0_44px_2px_rgba(96,165,250,0.95)]" />
              <div
                className="absolute left-1/2 top-1/2 z-30 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#0b0e17] shadow-[0_0_0_5px_rgba(5,7,13,0.92),0_0_30px_-2px_rgba(96,165,250,0.9)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_5px_rgba(5,7,13,0.92),0_0_45px_4px_rgba(96,165,250,1)]"
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l-5 6 5 6" />
                  <path d="M15 6l5 6-5 6" />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2">
      <div className="text-[17px] font-bold tracking-tight text-white">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-[0.14em] text-white/50">
        {label}
      </div>
    </div>
  );
}
