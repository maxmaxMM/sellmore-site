import Container from "../Container";
import Reveal from "../Reveal";

const samples = [
  {
    label: "Sample preview",
    title: "Massage clinic booking",
    detail: "60 min remedial · choose a time on your phone",
  },
  {
    label: "Sample preview",
    title: "Nail salon special",
    detail: "Gel set · booked from the Instagram profile",
  },
  {
    label: "Sample preview",
    title: "Beauty facial booking",
    detail: "Signature facial · questions answered on the site",
  },
  {
    label: "Sample preview",
    title: "Barber walk-in / booking",
    detail: "Cut and beard · a text if the call is missed",
  },
  {
    label: "Sample preview",
    title: "Google 5-star review growth",
    detail: "A timed invite and a QR code on the desk",
  },
];

export default function BeforeAfter() {
  return (
    <section id="work" className="relative scroll-mt-32 py-12 md:py-16">
      <Container>
        <Reveal className="card relative overflow-hidden p-4 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="px-1 py-2 md:px-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-[#fbbf24]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fde68a] ring-1 ring-inset ring-[#fbbf24]/35">
                Sample preview
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-4xl">
                <span className="text-white">While you are with a client,</span>
                <br />
                <span className="text-brand-gradient">the booking still happens.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
                Most local businesses lose the next appointment because nobody
                could pick up, and they lose the review because nobody asked.
                The panels here are sample previews for massage, nails, beauty
                and barbers. They are not a client campaign, and they are not a
                results claim.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                  Before
                </div>
                <ul className="mt-3 space-y-3 text-sm text-white/70">
                  <li>6:12pm · missed call, no message left</li>
                  <li>Website has the phone number and nothing else</li>
                  <li>Happy client leaves. Nobody asks for a review</li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#60a5fa]/30 bg-[linear-gradient(180deg,rgba(37,99,235,0.2),rgba(5,7,13,0.4))] p-4">
                <div className="sweep pointer-events-none absolute inset-0" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bfdbfe]">
                      After · Sell More Studio
                    </span>
                    <span className="rounded-full bg-[#fbbf24] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#3f1d0a]">
                      Sample preview
                    </span>
                  </div>
                  <ul className="mt-3 space-y-3 text-sm text-white/85">
                    <li>Booking page answers with services, time and duration</li>
                    <li>Caller gets a booking link if nobody can pick up</li>
                    <li>Review invite goes out after they have left</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {samples.map((sample) => (
              <div
                key={sample.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fbbf24]">
                  {sample.label}
                </div>
                <div className="mt-2 text-sm font-semibold leading-snug text-white">
                  {sample.title}
                </div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-white/55">
                  {sample.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
