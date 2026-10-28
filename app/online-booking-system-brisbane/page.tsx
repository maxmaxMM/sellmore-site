import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { BOOK_CALL_URL, FREE_SAMPLE_URL } from "../lib/site";

const PAGE_URL = "https://www.sellmorestudio.com/online-booking-system-brisbane";
const QUOTE_HREF = "/get-started?service=booking";

const title = "Online Booking System Brisbane | Salons & Clinics";
const description =
  "A done-for-you online booking page for Brisbane salons, clinics and barbershops. A$499 setup + A$99/month, set up and maintained for you.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/online-booking-system-brisbane" },
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

const included = [
  {
    title: "A booking page clients can use on their phone",
    body: "Clean and mobile-friendly, with your services, prices, durations and opening hours.",
  },
  {
    title: "Linked where people find you",
    body: "From your website, your Google Business Profile and your social profiles.",
  },
  {
    title: "Rules that match how you work",
    body: "Booking rules set up around your shop, not a generic template.",
  },
  {
    title: "Emails that go out on their own",
    body: "Confirmation emails for clients, new-booking notifications for you, and basic follow-up emails.",
  },
  {
    title: "Looked after every month",
    body: "Ongoing maintenance is part of the monthly fee, so changes don't fall on you.",
  },
];

const steps = [
  { title: "Your services", body: "We collect your services, prices, durations and hours." },
  { title: "Your rules", body: "We agree how bookings should work for your shop." },
  { title: "Build and test", body: "We build the booking page and test it with you." },
  { title: "Link it everywhere", body: "We link it from your website, Google profile and socials." },
  { title: "Keep it current", body: "We maintain it every month as your services change." },
];

const faqs = [
  {
    q: "How much does the online booking system cost?",
    a: "A$499 setup, then A$99 a month. Setup is charged once; the monthly fee covers ongoing maintenance.",
  },
  {
    q: "Can clients book from their phone?",
    a: "Yes. The booking page is mobile-friendly and shows your services, prices, durations and opening hours.",
  },
  {
    q: "Will I know when someone books?",
    a: "Yes. You get a new-booking notification, and the client gets a confirmation email.",
  },
  {
    q: "What about people who call instead of booking online?",
    a: "Our AI receptionist can answer those calls and text the caller your booking link while they're still on the phone. It's quoted separately.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Booking System",
      serviceType: "Online booking system setup and maintenance",
      description,
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
      offers: [
        { "@type": "Offer", name: "Setup", price: "499", priceCurrency: "AUD" },
        {
          "@type": "Offer",
          name: "Monthly",
          price: "99",
          priceCurrency: "AUD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "99",
            priceCurrency: "AUD",
            unitText: "MONTH",
          },
        },
      ],
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
        { "@type": "ListItem", position: 2, name: "Online Booking System Brisbane", item: PAGE_URL },
      ],
    },
  ],
};

export default function OnlineBookingSystemBrisbane() {
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
              Online Booking · Brisbane
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              <span className="text-gradient">Online booking system for Brisbane salons and clinics</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              When you&apos;re with a client, new bookings wait. After hours,
              people give up and book the shop that lets them pick a time on
              their phone.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Sell More Studio sets up an online booking page for your shop,
              links it from your Google profile, website and socials, and looks
              after it every month. You don&apos;t have to work out booking
              software yourself.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
              <span className="text-2xl font-semibold text-white">A$499</span>
              <span className="text-sm text-[#93c5fd]">setup, once</span>
              <span className="text-white/30">+</span>
              <span className="text-2xl font-semibold text-white">A$99</span>
              <span className="text-sm text-[#fde68a]">a month</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={QUOTE_HREF} className="btn-primary">
                Get started
              </Link>
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Book a 15-minute call
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="What you get" title="Included in the setup" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {included.map((item, i) => (
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
          <Reveal className="card mx-auto max-w-3xl p-7 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              A real result
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              We recently helped a local massage shop receive 22 online bookings
              in two weeks.
            </p>
            <p className="mt-3 text-sm text-white/45">
              We keep our clients&apos; names private.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative py-14 md:py-20">
        <Container>
          <SectionHeading eyebrow="Setup" title="How it works" />
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
          <SectionHeading eyebrow="Works well with" title="Catch the bookings that start somewhere else" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal className="card p-6">
              <h3 className="text-lg font-semibold text-white">Callers</h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                The{" "}
                <Link href="/ai-receptionist-brisbane" className="text-[#93c5fd] underline-offset-4 hover:underline">
                  AI receptionist
                </Link>{" "}
                answers when you can&apos;t and texts callers your booking link.
                Custom quote.
              </p>
            </Reveal>
            <Reveal delay={0.05} className="card p-6">
              <h3 className="text-lg font-semibold text-white">After the visit</h3>
              <p className="mt-2 text-white/65 leading-relaxed">
                <Link href="/#price-reviews" className="text-[#93c5fd] underline-offset-4 hover:underline">
                  Google Review Automation
                </Link>{" "}
                asks happy clients for a review at a sensible time. A$119 setup
                + A$69/month.
              </p>
            </Reveal>
          </div>
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
              <span className="text-gradient">Let clients book while you work</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Tell us about your services and we&apos;ll set up the booking page
              for you. Want to see the direction first? Ask for a free sample.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={QUOTE_HREF} className="btn-primary">
                Get started
              </Link>
              <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Book a 15-minute call
              </a>
              <a href={FREE_SAMPLE_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Free sample
              </a>
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
