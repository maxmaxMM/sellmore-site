import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { DEMO_DISPLAY, DEMO_TEL } from "../lib/site";

const PAGE_URL = "https://www.sellmorestudio.com/ai-receptionist-brisbane";
const QUOTE_HREF = "/get-started?service=receptionist";

const title = "AI Receptionist Brisbane | Answer Every Call, 24/7";
const description =
  "An AI receptionist for Brisbane salons and clinics. Answers calls 24/7, takes the caller's details and sends a booking link. Call Sophie for a live demo.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ai-receptionist-brisbane" },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
    siteName: "Sell More Studio",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/sellmore-logo.png", alt: "Sell More Studio" }],
  },
};

const handles = [
  {
    title: "The usual questions",
    body: "Opening hours, where you are, parking, which service to book, and the prices you've approved.",
  },
  {
    title: "New enquiries",
    body: "It takes the caller's name and mobile number, so nobody is lost to voicemail.",
  },
  {
    title: "Bookings",
    body: "It books the time straight into your calendar, or texts the caller your booking link while they're still on the phone.",
  },
  {
    title: "Callback requests",
    body: "When a caller asks for a person, your team gets an alert with their details so you can ring back.",
  },
];

const steps = [
  {
    title: "Your details",
    body: "Services, prices, hours, address, parking, and anything it should never say.",
  },
  {
    title: "Call flow",
    body: "Which calls it books, which get a booking link, and which go to a person.",
  },
  {
    title: "Test calls",
    body: "We ring it ourselves, then you ring it, until the answers sound like your shop.",
  },
  {
    title: "Your approval",
    body: "Nothing goes live until you've heard it and said yes.",
  },
  {
    title: "Go live and check",
    body: "We go through the first real calls with you and fix anything that sounds wrong.",
  },
];

const faqs = [
  {
    q: "Can it book into my calendar?",
    a: "Yes, if your bookings run on GoHighLevel calendars or services. It checks who is rostered and free before it offers a time. With other booking systems, it texts the caller your booking link instead.",
  },
  {
    q: "What happens when it doesn't know the answer?",
    a: "It tells the caller it will pass the question on, takes their details, and your team gets a callback alert. It doesn't make up prices or policies.",
  },
  {
    q: "Can a caller ask for a real person?",
    a: "Yes. It takes their name and number and alerts your team to call them back.",
  },
  {
    q: "What does it cost?",
    a: `It's a custom quote based on how many calls you get and how the booking side is set up. Call Sophie on ${DEMO_DISPLAY} to try it first, then ask us for a quote.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI Receptionist (24/7 Phone Answering)",
      serviceType: "AI phone receptionist",
      description:
        "An AI receptionist that answers calls 24/7, answers common questions, takes the caller's name and number, and sends a booking link or books the appointment.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Brisbane" },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Massage clinics, nail salons, beauty salons, barbershops and other local service businesses",
      },
      provider: {
        "@type": "ProfessionalService",
        name: "Sell More Studio",
        url: "https://www.sellmorestudio.com",
        telephone: "+61421435858",
        email: "sellmorestudiosupport@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brisbane",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sellmorestudio.com/" },
        { "@type": "ListItem", position: 2, name: "AI Receptionist Brisbane", item: PAGE_URL },
      ],
    },
  ],
};

export default function AiReceptionistBrisbane() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pt-10 pb-12 md:pt-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.3),transparent_70%)] blur-2xl" />
        <Container className="relative">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] shadow-[0_0_10px_2px_rgba(251,191,36,0.7)]" />
              AI Receptionist · Brisbane
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              <span className="text-gradient">AI receptionist for Brisbane salons and clinics</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              You&apos;re with a client and the phone rings. Most callers won&apos;t
              leave a voicemail. They ring the next shop on Google.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Sell More Studio sets up an AI receptionist that answers those calls,
              day or night. It answers the usual questions, takes the caller&apos;s
              name and number, and sends them your booking link or books the
              appointment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={DEMO_TEL} className="btn-primary">
                Call Sophie now: {DEMO_DISPLAY}
              </a>
              <Link href={QUOTE_HREF} className="btn-secondary">
                Talk to us about your call flow
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Sophie is our live demo receptionist. Ring her and try to catch her out.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="On every call"
            title="What it handles"
            subtitle="It only answers from the information you approve. If a caller asks something outside that, it says so and passes the request to your team instead of guessing."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {handles.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="card p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="card p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                When a person takes over
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Some calls need you: a complaint, a health question, a special
                request, a regular who wants their usual therapist. For those, the
                receptionist takes the details and sends your team a callback
                alert. It doesn&apos;t promise anything it can&apos;t check.
              </p>
            </Reveal>
            <Reveal delay={0.05} className="card p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Already taking real bookings
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                A Brisbane massage clinic now takes real phone bookings through its
                AI receptionist. Before it offers a time, it checks which
                therapists are rostered and free, so it doesn&apos;t double-book
                anyone.
              </p>
              <p className="mt-3 text-sm text-white/45">
                We keep our clients&apos; names private. Ring Sophie to hear the
                same setup.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Booking connections"
            title="Works with how you already book"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal className="card p-6">
              <h3 className="text-lg font-semibold text-white">
                GoHighLevel calendars and services
              </h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                The receptionist checks real staff rosters and existing bookings
                before it offers a time, then creates the booking.
              </p>
            </Reveal>
            <Reveal delay={0.05} className="card p-6">
              <h3 className="text-lg font-semibold text-white">Booking link by SMS</h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                Works with any booking page. The caller gets the link in a text
                while they&apos;re still on the phone.
              </p>
            </Reveal>
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            Using another booking system? We&apos;ll check it before we quote. We
            don&apos;t list systems we haven&apos;t tested.
          </p>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="Setup" title="How setup works" />
          <ol className="mx-auto mt-10 max-w-3xl space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.04}>
                <li className="card flex gap-4 p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#3b82f6]/15 text-sm font-semibold text-[#93c5fd] ring-1 ring-[#60a5fa]/40">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-white/65">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <Reveal className="card mx-auto max-w-3xl p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Pricing</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              The AI receptionist is quoted per business. There&apos;s no fixed
              public price. The quote depends on:
            </p>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>· how many calls you get</li>
              <li>· whether it books into your calendar or sends a link</li>
              <li>· how many services, staff and rules the call flow needs</li>
            </ul>
            <p className="mt-4 text-white/70 leading-relaxed">
              Ring Sophie first, then ask us for a quote. If you mostly lose
              enquiries through texts and missed calls rather than live calls,
              our{" "}
              <Link href="/#price-text-reply" className="text-[#93c5fd] underline-offset-4 hover:underline">
                AI Text Reply
              </Link>{" "}
              starts at A$99 setup + A$49/month.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Questions owners ask" />
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <Reveal key={f.q} className="card p-6">
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-white/65 leading-relaxed">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pt-8 pb-20 md:pb-28">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.5),rgba(5,7,13,0.8))] px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              <span className="text-gradient">Ring Sophie: {DEMO_DISPLAY}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              She answers the way your receptionist would. If she&apos;d help your
              shop, tell us about your call flow and we&apos;ll quote it.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={DEMO_TEL} className="btn-primary">
                Call Sophie
              </a>
              <Link href={QUOTE_HREF} className="btn-secondary">
                Get a quote
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/45">
              Sell More Studio is based in Brisbane and works with massage
              clinics, nail salons, beauty salons, barbershops and other local
              services.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
