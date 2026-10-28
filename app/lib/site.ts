export const FREE_SAMPLE_URL = "https://go.sellmorestudio.com/free-sample";
export const WHATSAPP_URL = "https://wa.me/61421435858";
export const WHATSAPP_DISPLAY = "+61 421 435 858";
export const DEMO_TEL = "tel:+61485023626";
export const DEMO_DISPLAY = "0485 023 626";
export const EMAIL = "sellmorestudiosupport@gmail.com";
export const GOOGLE_CHECK_HREF = "/checkup.html?src=home";

export const INDUSTRIES = [
  "Massage Clinics",
  "Nail Salons",
  "Beauty Salons",
  "Barbershops",
  "Allied Health & Local Services",
] as const;

/** Dropdown values. Core verticals first; older categories kept so existing forms still submit. */
export const businessTypes = [
  "Massage Clinic",
  "Nail Salon",
  "Beauty Salon",
  "Hair & Barber Shop",
  "Allied Health",
  "Local Services",
  "Food & Drink",
  "Beauty",
  "Real Estate",
  "Services",
  "Fitness",
  "Retail",
  "Other",
] as const;

export type CtaEmphasis = "sample" | "demo" | "google" | "contact";

export type PublicPrice =
  | {
      type: "setup-monthly";
      setup: string;
      monthly: string;
    }
  | {
      type: "named-fees";
      fees: { name: string; amount: string; cadence: "once" | "month" }[];
    }
  | {
      type: "monthly-tiers";
      tiers: { label: string; amount: string }[];
    }
  | {
      type: "chat-or-bundle";
      setup: string;
      monthly: string;
    }
  | {
      type: "custom";
      label: string;
      detail: string;
    };

export type Service = {
  id: string;
  name: string;
  who: string;
  problem: string;
  features: string[];
  industries: readonly string[];
  price: PublicPrice;
  /** Shown in the pricing comparison. Setup and monthly stay in separate cells. */
  scan: { setup: string; monthly: string; merge?: string };
  emphasis: CtaEmphasis;
  /** Dedicated service page, linked from the card. */
  page?: { href: string; label: string };
};

export const services: Service[] = [
  {
    id: "booking",
    name: "Online Booking System",
    who: "Massage clinics, nail salons, beauty salons, barbershops and other local businesses that still take bookings by phone, text or a paper diary.",
    problem:
      "When you are with a client, new bookings wait. After hours, people give up and book the business that lets them choose a time on their phone.",
    features: [
      "Clean, mobile-friendly online booking page",
      "Linked from your website, Google Business Profile and social profiles",
      "Services, pricing, duration and opening hours",
      "Booking rules that match how you actually work",
      "Confirmation emails",
      "New-booking notifications",
      "Basic follow-up emails",
      "Ongoing maintenance",
    ],
    industries: INDUSTRIES,
    price: { type: "setup-monthly", setup: "A$499", monthly: "A$99" },
    scan: { setup: "A$499", monthly: "A$99/month" },
    emphasis: "sample",
  },
  {
    id: "receptionist",
    name: "AI Receptionist (24/7 Phone Answering)",
    who: "Owners, therapists and stylists who cannot pick up while they are with a client, and shops that miss calls after hours.",
    problem:
      "A missed call is often a missed booking. Most people do not leave a voicemail. They ring the next clinic.",
    features: [
      "Answers calls 24/7 when the team is with a client or the shop is closed",
      "Answers common questions",
      "Captures the caller's name and number",
      "Sends a booking link or books the appointment",
      "Live demo before you commit — call Sophie on 0485 023 626",
    ],
    industries: INDUSTRIES,
    price: {
      type: "custom",
      label: "Custom Quote · Live Demo Available",
      detail:
        "There is no fixed public price for the AI Receptionist. Call Sophie on 0485 023 626 or request a live demo and we will quote it for your call volume.",
    },
    scan: { setup: "", monthly: "", merge: "Custom Quote · Live Demo Available" },
    emphasis: "demo",
    page: { href: "/ai-receptionist-brisbane", label: "How the AI receptionist works" },
  },
  {
    id: "text-reply",
    name: "AI Text Reply (Missed-Call & SMS/Social Instant Reply)",
    who: "Businesses that receive missed calls, SMS, Facebook and Instagram messages and cannot reply in the moment.",
    problem:
      "If a message sits there while you finish a treatment, the client books the salon that answers first.",
    features: [
      "Replies straight away by text or chat",
      "Covers missed calls so the enquiry is not lost",
      "Sends your booking link in the reply",
      "Keeps the conversation going until you can take over",
    ],
    industries: INDUSTRIES,
    price: { type: "chat-or-bundle", setup: "A$99", monthly: "A$49" },
    scan: {
      setup: "A$99 with Basic AI Chat Widget, or Custom Bundle Quote",
      monthly: "A$49/month with Basic AI Chat Widget, or Custom Bundle Quote",
    },
    emphasis: "sample",
  },
  {
    id: "chat",
    name: "AI Chat Widget (Website & Online Chat)",
    who: "Clinics and salons whose websites get questions about price, parking, hours and which service to book.",
    problem:
      "Those questions arrive while everyone is with a client, so the website visitor leaves.",
    features: [
      "Answers common questions on your website 24/7 — pricing, parking, hours and services",
      "Captures the lead",
      "Shares your booking link",
      "Alerts you when a person needs to step in",
    ],
    industries: INDUSTRIES,
    price: { type: "setup-monthly", setup: "A$99", monthly: "A$49" },
    scan: { setup: "A$99", monthly: "A$49/month" },
    emphasis: "sample",
  },
  {
    id: "google",
    name: "Google Business Profile Optimisation",
    who: "Local businesses that depend on Google Maps and searches such as “massage near me” or “nails Brisbane”.",
    problem:
      "A messy profile — wrong hours, thin services, no photos, no booking link — sends ready-to-book people to someone else.",
    features: [
      "Setup: organise categories, description, services, hours and photos",
      "Setup: booking and review links, a QR code, and a Maps check",
      "Maintenance: 4 Google posts a month",
      "Maintenance: up to 5 photo updates",
      "Maintenance: profile and booking-link check",
      "Maintenance: up to 5 review replies",
      "Maintenance: a short monthly summary",
    ],
    industries: INDUSTRIES,
    price: {
      type: "named-fees",
      fees: [
        { name: "Google Profile Setup", amount: "A$299", cadence: "once" },
        { name: "Google Profile Maintenance", amount: "A$99", cadence: "month" },
      ],
    },
    scan: {
      setup: "Profile setup A$299",
      monthly: "Maintenance A$99/month",
    },
    emphasis: "google",
  },
  {
    id: "reviews",
    name: "Google Review Automation",
    who: "Businesses with happy regulars who would leave a Google review if someone asked at a sensible time.",
    problem:
      "Reviews do not grow because the team forgets to ask, or they ask in a rush at the desk.",
    features: [
      "Post-visit review invitations by email or SMS",
      "Branded review QR code for the reception desk",
      "Smart timing, so the ask does not land mid-appointment",
      "Duplicate safeguards, so the same client is not asked twice",
      "A steady way to collect genuine Google reviews",
    ],
    industries: INDUSTRIES,
    price: { type: "setup-monthly", setup: "A$119", monthly: "A$69" },
    scan: { setup: "A$119", monthly: "A$69/month" },
    emphasis: "sample",
  },
  {
    id: "follow-up",
    name: "Customer Follow-Up & Reactivation",
    who: "Clinics and salons that feel no-shows, and notice regulars quietly stop rebooking.",
    problem:
      "People forget appointments. Past clients drift off because nobody invited them back.",
    features: [
      "Appointment reminders to reduce no-shows",
      "A thank-you message after the visit",
      "Reactivation messages for clients who have gone quiet",
      "Tailored to your business, or paired with booking and review systems",
    ],
    industries: INDUSTRIES,
    price: {
      type: "custom",
      label: "Custom quote",
      detail:
        "Tailored automation, or paired with your booking and review systems. We quote this to fit the messages you actually want to send.",
    },
    scan: {
      setup: "",
      monthly: "",
      merge: "Custom quote · tailored automation",
    },
    emphasis: "contact",
  },
  {
    id: "social",
    name: "Social Media Content & Management",
    who: "Owners who know the business should show up on social media, and do not have time between clients to film, write and schedule.",
    problem:
      "Posting in bursts, then going quiet, makes a busy clinic look closed.",
    features: [
      "Done-for-you short-form videos and posts",
      "Captions written for local clients",
      "Branded templates",
      "Scheduled publishing on Facebook, Instagram, TikTok and the other profiles you actually use",
    ],
    industries: INDUSTRIES,
    price: {
      type: "monthly-tiers",
      tiers: [
        { label: "12 posts/videos per month", amount: "A$499" },
        { label: "20 posts/videos per month", amount: "A$699" },
        { label: "30 posts/videos per month", amount: "A$999" },
      ],
    },
    scan: {
      setup: "Not charged separately",
      monthly: "12 · A$499/month · 20 · A$699/month · 30 · A$999/month",
    },
    emphasis: "contact",
  },
  {
    id: "websites",
    name: "Business Websites / Landing Pages",
    who: "Local service businesses that need a fast page which turns a Google or social visit into a booking.",
    problem:
      "A slow or generic page makes people call, get no answer, and try the next result.",
    features: [
      "Fast, mobile-first websites and landing pages",
      "Written for local service businesses",
      "Online booking built in",
      "Chat built in",
      "A free sample preview so you can see the direction first",
    ],
    industries: INDUSTRIES,
    price: {
      type: "custom",
      label: "Custom quote",
      detail:
        "Free sample preview at go.sellmorestudio.com/free-sample, or tell us about the business on the get-started page.",
    },
    scan: {
      setup: "",
      monthly: "",
      merge: "Custom quote · free sample preview",
    },
    emphasis: "sample",
  },
];

export type Bundle = {
  id: string;
  name: string;
  summary: string;
  includes: string[];
};

export const bundles: Bundle[] = [
  {
    id: "bundle-massage",
    name: "Massage Clinics",
    summary:
      "A practical mix when the therapist is on the table and the phone is in the other room.",
    includes: [
      "Online Booking System — A$499 setup + A$99/month",
      "AI Receptionist — Custom Quote · Live Demo Available",
      "Google Review Automation — A$119 setup + A$69/month",
      "Customer Follow-Up & Reactivation — custom quote, often paired with booking and reviews",
    ],
  },
  {
    id: "bundle-nails",
    name: "Nail Salons",
    summary:
      "Booking, instant answers, a tidy Google profile, and a steady stream of nail photos.",
    includes: [
      "Online Booking System — A$499 setup + A$99/month",
      "AI Chat Widget — A$99 setup + A$49/month (this also covers AI Text Reply)",
      "Google Profile Setup — A$299 once, and Google Profile Maintenance — A$99/month",
      "Social Media — 12 posts A$499/month, 20 posts A$699/month, or 30 posts A$999/month",
    ],
  },
  {
    id: "bundle-beauty",
    name: "Beauty Salons",
    summary:
      "Facials and treatments booked online, questions answered on the site, and reviews asked after the visit.",
    includes: [
      "Online Booking System — A$499 setup + A$99/month",
      "AI Chat Widget — A$99 setup + A$49/month",
      "Google Review Automation — A$119 setup + A$69/month",
      "Social Media — choose 12, 20 or 30 posts/videos a month",
    ],
  },
  {
    id: "bundle-barber",
    name: "Barbers & Local Services",
    summary:
      "Walk-ins and appointments, a text when the call is missed, and a Google profile that stays current. Allied health clinics and local trades can use the same mix.",
    includes: [
      "Online Booking System — A$499 setup + A$99/month",
      "AI Text Reply — Basic AI Chat Widget at A$99 setup + A$49/month, or a Custom Bundle Quote",
      "Google Profile Maintenance — A$99/month",
      "Google Review Automation — A$119 setup + A$69/month",
    ],
  },
];

export type Scenario = {
  id: string;
  badge: string;
  title: string;
  summary: string;
  steps: string[];
  footnote: string;
};

export const scenarios: Scenario[] = [
  {
    id: "scenario-massage",
    badge: "Sample Scenario — Massage Clinic",
    title: "The phone rings during a treatment",
    summary:
      "A sample walkthrough of an after-hours call. This is not a client review and not a result we are claiming.",
    steps: [
      "A new client calls at 7:40pm asking about remedial massage and Saturday times.",
      "The AI receptionist answers, covers the usual questions, and takes their name and number.",
      "They get a booking link by text. The clinic sees the enquiry when the day starts.",
    ],
    footnote:
      "Sample scenario only. It shows the shape of the system. It is not a testimonial, and it is not a promise of bookings.",
  },
  {
    id: "scenario-nails",
    badge: "Sample Scenario — Nail & Beauty Salon",
    title: "A Saturday enquiry lands on the website",
    summary:
      "A sample of the chat widget while the tech is with a client. Not a real customer story.",
    steps: [
      "Someone on the website asks about gel nails, the price range, and where to park.",
      "The chat widget answers from the salon's own details and sends the booking link.",
      "If they ask something only the owner should handle, the owner gets an alert.",
    ],
    footnote:
      "Sample scenario only. The questions are examples, not a transcript from a client.",
  },
  {
    id: "scenario-barber",
    badge: "Sample Scenario — Barbershop",
    title: "A walk-in calls mid-cut",
    summary:
      "A sample of missed-call text reply. Not a review from a barber, and not a client logo.",
    steps: [
      "A caller rings while the barber is halfway through a cut. Nobody can pick up.",
      "A text goes out straight away with today's options and a booking link.",
      "The caller can hold a time instead of driving to the next shop.",
    ],
    footnote:
      "Sample scenario only. We are not showing a real shop's name or numbers.",
  },
  {
    id: "scenario-reviews",
    badge: "Sample Scenario — Google Reviews",
    title: "The review ask goes out after the visit",
    summary:
      "A sample of review automation timing. This is not a star rating, and not a quote from a client.",
    steps: [
      "The client finishes a facial. The invite waits until they have left, not while they are still in the chair.",
      "They get a short email or SMS, and the desk has a branded QR code for people who would rather do it on the spot.",
      "Safeguards stop the same person being asked again the following week.",
    ],
    footnote:
      "Sample scenario only. We do not publish invented review counts or star averages.",
  },
];
