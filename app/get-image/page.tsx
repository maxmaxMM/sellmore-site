"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import Container from "../components/Container";
import Reveal from "../components/Reveal";

const businessTypes = [
  "Food & Drink",
  "Beauty",
  "Real Estate",
  "Services",
  "Fitness",
  "Retail",
  "Other",
];

const WHATSAPP_URL =
  "https://wa.me/61421435858?text=Hi%20SellMore%20Studio%20%E2%80%94%20I%27d%20like%20my%20first%20marketing%20image.";

// Google Forms integration — uses the edit-form document id (/d/<FORM_ID>/formResponse).
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/1FB8Q_qomwPU0fwnvh7bGB5Td9OMTOvDhqLRgCAFj9Tc/formResponse";

const FORM_FIELDS = {
  businessName: "entry.1266170559",
  businessType: "entry.1577590194",
  offer: "entry.53801449",
  // TODO: replace with the real entry id for the "Image link" question on the Google Form.
  imageLink: "entry.1100204033",
  phone: "entry.1187638745",
  email: "entry.40614474",
} as const;

const FORM_IFRAME_NAME = "sellmore-form-sink";

export default function GetImagePage() {
  const reduce = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const posted = useRef(false);

  // Native form submit to Google Forms — no preventDefault, no fetch.
  // The form targets a hidden iframe so the user stays on this page.
  const onSubmit = (_e: FormEvent<HTMLFormElement>) => {
    posted.current = true;
    setSubmitting(true);
    // Safety net in case the iframe load event is blocked by cross-origin headers.
    window.setTimeout(() => {
      if (posted.current) {
        setSubmitted(true);
      }
    }, 1500);
  };

  const onIframeLoad = () => {
    if (posted.current) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative pt-10 pb-24 md:pt-16 md:pb-32">
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.22),transparent_70%)] blur-2xl" />

      {/* Hidden iframe receives the Google Forms response so the user stays here. */}
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
                      24-hour turnaround
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gradient">
                      Get your first sales image
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-[15px] text-white/60">
                      Upload your photo. We&apos;ll turn it into a
                      high-converting marketing image.
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
                      placeholder="e.g. Nonna's Kitchen"
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

                    <Field
                      label="Promotion / offer"
                      name={FORM_FIELDS.offer}
                      placeholder="e.g. $9.90 lunch combo — this week only"
                      required
                    />

                    <Field
                      label={
                        <>
                          Image link{" "}
                          <span aria-hidden className="text-[#f87171]">
                            *
                          </span>
                          <span className="sr-only">(required)</span>
                        </>
                      }
                      name={FORM_FIELDS.imageLink}
                      type="url"
                      placeholder="Paste a Google Drive, Dropbox, or image URL"
                      helper="Please make sure the link is public and can be opened."
                      required
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Phone / WhatsApp"
                        name={FORM_FIELDS.phone}
                        type="tel"
                        placeholder="+61 400 000 000"
                      />
                      <Field
                        label={
                          <>
                            Email{" "}
                            <span
                              aria-hidden
                              className="text-[#f87171]"
                            >
                              *
                            </span>
                            <span className="sr-only">(required)</span>
                          </>
                        }
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
                            Submit my photo
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
                        By submitting you agree to receive your preview by
                        email. No credit card required.
                      </p>
                    </div>

                    <div className="relative pt-3">
                      <div className="flex items-center gap-3">
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                          Or
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                      </div>
                      <WhatsAppCta className="mt-4 w-full" />
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

                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#3b82f6]/15 ring-1 ring-[#60a5fa]/40 shadow-[0_0_40px_-4px_rgba(96,165,250,0.7)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </motion.div>

                <h2 className="relative text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-gradient">
                  Thanks! Your photo has been received.
                </h2>
                <p className="relative mx-auto mt-4 max-w-md text-[15px] text-white/65">
                  We&apos;ll send your preview within 24 hours.
                </p>

                <div className="relative mx-auto mt-8 max-w-sm">
                  <WhatsAppCta className="w-full" />
                </div>

                <div className="relative mt-5 flex flex-wrap justify-center gap-3">
                  <Link href="/" className="btn-secondary">
                    Back to home
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

function WhatsAppCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[#25D36633] bg-[linear-gradient(180deg,rgba(37,211,102,0.14),rgba(37,211,102,0.04))] px-4 py-3 text-[14px] font-semibold text-white transition-all hover:border-[#25D36666] hover:bg-[linear-gradient(180deg,rgba(37,211,102,0.22),rgba(37,211,102,0.08))] hover:shadow-[0_0_0_1px_rgba(37,211,102,0.35),0_14px_40px_-10px_rgba(37,211,102,0.55)] ${className}`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-[#05070d] shadow-[0_0_18px_-4px_rgba(37,211,102,0.9)] transition-transform group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          aria-hidden
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.94L0 24l6.35-1.67a11.82 11.82 0 0 0 5.7 1.46h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.14-3.39-8.46ZM12.06 21.8h-.01a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.9 9.9 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.94-9.92 2.65 0 5.15 1.04 7.03 2.92a9.89 9.89 0 0 1 2.91 7.02c0 5.47-4.45 9.93-9.94 9.93Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span>Want it faster? Message us</span>
        <span className="text-[11px] font-medium text-[#25D366]/90">
          WhatsApp · usually replies in minutes
        </span>
      </span>
    </a>
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
  helper,
}: {
  label: React.ReactNode;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helper?: React.ReactNode;
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
      {helper ? (
        <p className="mt-2 text-xs text-white/50">{helper}</p>
      ) : null}
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
