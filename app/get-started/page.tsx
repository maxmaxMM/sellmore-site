"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useRef, useState, type FormEvent } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import {
  FORM_FIELDS,
  FORM_IFRAME_NAME,
  GOOGLE_FORM_ACTION,
  NO_IMAGE_LINK,
} from "../lib/google-form";
import { sendEnquiry } from "../lib/enquiry";
import { businessTypes, services } from "../lib/site";

export default function GetStartedPage() {
  const reduce = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [sentWithImage, setSentWithImage] = useState(false);

  const honeypot = useRef<HTMLInputElement>(null);

  const posted = useRef(false);

  // Native POST into the existing Google Form. Do not preventDefault.
  // A copy also goes to GHL (via n8n) with the visitor's first landing page and UTM.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "");
    sendEnquiry({
      business_name: value(FORM_FIELDS.businessName),
      business_type: value(FORM_FIELDS.businessType),
      offer: value(FORM_FIELDS.offer),
      image_link: imageLink.trim(),
      phone: value(FORM_FIELDS.phone),
      email: value(FORM_FIELDS.email),
      service:
        event.currentTarget.querySelector<HTMLSelectElement>("select[data-field=service]")
          ?.value ?? "",
      hp: honeypot.current?.value ?? "",
    });
    setSentWithImage(imageLink.trim().length > 0);
    posted.current = true;
    setSubmitting(true);
    window.setTimeout(() => {
      if (posted.current) setSubmitted(true);
    }, 1500);
  };

  const onIframeLoad = () => {
    if (posted.current) setSubmitted(true);
  };

  return (
    <section className="relative pt-10 pb-24 md:pt-16 md:pb-32">
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.22),transparent_70%)] blur-2xl" />

      <iframe
        name={FORM_IFRAME_NAME}
        title="Google Forms submission"
        onLoad={onIframeLoad}
        aria-hidden
        tabIndex={-1}
        className="hidden"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Reveal>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_12px_2px_rgba(96,165,250,0.8)]" />
                      Get started
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gradient">
                      Tell us about your business
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-white/60">
                      Massage clinics, nail salons, beauty salons, barbershops
                      and other local services — share a few details, and a
                      public photo link if you have one.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.1} className="mt-10">
                  <form
                    action={GOOGLE_FORM_ACTION}
                    method="POST"
                    target={FORM_IFRAME_NAME}
                    encType="application/x-www-form-urlencoded"
                    onSubmit={onSubmit}
                    className="card p-6 sm:p-8 space-y-5"
                  >
                    <Field
                      label="Business name"
                      name={FORM_FIELDS.businessName}
                      placeholder="e.g. a massage clinic in Brisbane"
                      required
                    />

                    <div>
                      <Label>Business type</Label>
                      <div className="relative">
                        <select
                          name={FORM_FIELDS.businessType}
                          required
                          defaultValue=""
                          className="peer w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white outline-none ring-0 transition-colors focus:border-[#60a5fa]/60 focus:bg-white/[0.05]"
                        >
                          <option value="" disabled>
                            Select a category
                          </option>
                          {businessTypes.map((t) => (
                            <option key={t} value={t} className="bg-[#0b0e17]">
                              {t}
                            </option>
                          ))}
                        </select>
                        <svg
                          viewBox="0 0 20 20"
                          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M5 8l5 5 5-5" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <Label>What would you like help with?</Label>
                      <Suspense fallback={<ServiceSelect />}>
                        <PresetServiceSelect />
                      </Suspense>
                    </div>

                    <input
                      ref={honeypot}
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden
                      className="hidden"
                    />

                    <Field
                      label="Promotion / offer"
                      name={FORM_FIELDS.offer}
                      placeholder="e.g. 60-minute remedial massage"
                      required
                    />

                    <div>
                      <Label>Image link</Label>
                      <input
                        type="url"
                        inputMode="url"
                        value={imageLink}
                        onChange={(event) => setImageLink(event.target.value)}
                        placeholder="Paste a public Google Drive, Dropbox, or image URL"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#60a5fa]/60 focus:bg-white/[0.05]"
                      />
                      <input
                        type="hidden"
                        name={FORM_FIELDS.imageLink}
                        value={imageLink.trim() || NO_IMAGE_LINK}
                      />
                      <p className="mt-2 text-xs text-white/50">
                        Optional. Leave this blank if you don&apos;t have a
                        public photo link yet — we can still take the enquiry.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Phone / WhatsApp"
                        name={FORM_FIELDS.phone}
                        type="tel"
                        placeholder="04xx xxx xxx"
                        required
                      />
                      <Field
                        label="Email"
                        name={FORM_FIELDS.email}
                        type="email"
                        placeholder="you@business.com"
                        required
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full disabled:opacity-70"
                      >
                        {submitting ? (
                          <>
                            <Spinner />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send my details
                            <svg
                              viewBox="0 0 20 20"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden
                            >
                              <path d="M4 10h12" />
                              <path d="M12 5l5 5-5 5" />
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="mt-3 text-center text-xs text-white/45">
                        By submitting you agree to receive updates about your
                        preview. No credit card required.
                      </p>
                    </div>
                  </form>
                </Reveal>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="card relative overflow-hidden p-10 sm:p-14 text-center"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 50% 0%, rgba(59,130,246,0.3), transparent 60%)",
                  }}
                />
                <div className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#3b82f6]/15 ring-1 ring-[#60a5fa]/40 shadow-[0_0_40px_-4px_rgba(96,165,250,0.7)]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </div>
                <h2 className="relative text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-gradient">
                  Thanks — your details have been received.
                </h2>
                <p className="relative mx-auto mt-4 max-w-md text-white/65">
                  {sentWithImage
                    ? "We'll send your preview within 24 hours to the email you provided. Keep an eye on your inbox."
                    : "We'll reply to the email you provided. You can send a photo link whenever it's ready."}
                </p>
                <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                  <Link href="/" className="btn-secondary">
                    Back to home
                  </Link>
                  <Link href="/#pricing" className="btn-primary">
                    See pricing
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

// Service pages link here with ?service=<id> so the enquiry arrives pre-labelled.
function PresetServiceSelect() {
  const id = useSearchParams().get("service");
  const preset = services.find((s) => s.id === id)?.name ?? "";
  return <ServiceSelect defaultValue={preset} />;
}

// No name attribute: the choice is sent to GHL only, not to the Google Form.
function ServiceSelect({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <div className="relative">
      <select
        data-field="service"
        defaultValue={defaultValue}
        className="peer w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white outline-none ring-0 transition-colors focus:border-[#60a5fa]/60 focus:bg-white/[0.05]"
      >
        <option value="" className="bg-[#0b0e17]">
          Not sure yet
        </option>
        {services.map((s) => (
          <option key={s.id} value={s.name} className="bg-[#0b0e17]">
            {s.name}
          </option>
        ))}
      </select>
      <svg
        viewBox="0 0 20 20"
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 8l5 5 5-5" />
      </svg>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-[13px] font-medium text-white/80">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#60a5fa]/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin text-white"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
      />
    </svg>
  );
}
