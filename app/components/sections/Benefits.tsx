import Container from "../Container";
import Reveal from "../Reveal";

const benefits = [
  {
    title: "Get More Reviews",
    description:
      "Automatically ask happy customers for Google reviews after their visit.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
  },
  {
    title: "Reply Instantly",
    description:
      "Send an immediate SMS or email reply when a new enquiry comes in.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
      </svg>
    ),
  },
  {
    title: "Recover Missed Leads",
    description:
      "Follow up with missed calls and unanswered enquiries before they choose a competitor.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="card h-full p-6 sm:p-7">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#3b82f6]/15 text-[#93c5fd] ring-1 ring-inset ring-[#60a5fa]/25">
                  <span className="h-5 w-5">{b.icon}</span>
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
