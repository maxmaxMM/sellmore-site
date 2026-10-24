import Container from "../Container";
import Reveal from "../Reveal";

const pillars = [
  {
    title: "More Bookings",
    description:
      "A booking page clients can use from Google, your website or a social profile — including after you have locked the door.",
  },
  {
    title: "Fewer Missed Calls",
    description:
      "When you are with a client, the call or the text still gets an answer and a way to book.",
  },
  {
    title: "Smarter Customer Follow-Ups",
    description:
      "Reminders, a thank-you after the visit, and a note to clients who have gone quiet.",
  },
  {
    title: "Better Google Reviews",
    description:
      "A polite ask at the right time, plus a QR code on the desk, so happy clients can actually leave a review.",
  },
  {
    title: "AI-Powered Business Reception",
    description:
      "A receptionist that picks up 24/7, and a chat on your website for the questions you answer every day.",
  },
  {
    title: "Social Media Content & Management",
    description:
      "Short videos and posts, written and scheduled, so the shop looks open even on a fully booked Tuesday.",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-12 md:py-16" aria-labelledby="pillars-heading">
      <Container>
        <h2 id="pillars-heading" className="sr-only">
          What Sell More Studio helps local businesses with
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.05}>
              <div className="card h-full p-5 sm:p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fbbf24]">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
