"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
} from "react";
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

export default function GetStartedPage() {
  const reduce = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInput = useRef<HTMLInputElement | null>(null);

  const handleFile = useCallback((f: File | null) => {
    if (!f) {
      setFile(null);
      setPreview(null);
      return;
    }
    if (!f.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    if (f.size > 15 * 1024 * 1024) {
      setError("Image must be under 15 MB.");
      return;
    }
    setError(null);
    setFile(f);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(f);
  }, []);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    handleFile(f);
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0] ?? null;
    handleFile(f);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="relative pt-10 pb-24 md:pt-16 md:pb-32">
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.22),transparent_70%)] blur-2xl" />

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
                      We&apos;ll help you set up review requests, instant replies
                      and follow-up automation for your business.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.1} className="mt-10">
                  <form
                    onSubmit={onSubmit}
                    className="card p-6 sm:p-8 space-y-5"
                    noValidate
                  >
                    <Field
                      label="Business name"
                      name="business_name"
                      placeholder="e.g. Nonna's Kitchen"
                      required
                    />

                    <div>
                      <Label>Business type</Label>
                      <div className="relative">
                        <select
                          name="business_type"
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
                      name="offer"
                      placeholder="e.g. $18 truffle pasta — today only"
                      required
                    />

                    <div>
                      <Label>Upload photo</Label>
                      <label
                        htmlFor="photo"
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOver(true);
                        }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={onDrop}
                        className={`relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed px-6 py-8 text-center transition-colors ${
                          dragOver
                            ? "border-[#60a5fa]/70 bg-[#60a5fa]/5"
                            : "border-white/15 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]"
                        }`}
                      >
                        <input
                          ref={fileInput}
                          id="photo"
                          name="photo"
                          type="file"
                          accept="image/*"
                          onChange={onFileChange}
                          className="sr-only"
                          required
                        />
                        {preview ? (
                          <div className="flex items-center gap-4">
                            {/* preview thumbnail */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={preview}
                              alt="Uploaded preview"
                              className="h-20 w-20 rounded-lg object-cover ring-1 ring-white/10"
                            />
                            <div className="text-left">
                              <div className="text-sm font-medium text-white">
                                {file?.name}
                              </div>
                              <div className="text-xs text-white/50">
                                {(file && (file.size / 1024 / 1024).toFixed(2)) ||
                                  0}{" "}
                                MB · Click to replace
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-inset ring-white/10">
                              <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-white/70"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden
                              >
                                <path d="M12 16V4" />
                                <path d="M6 10l6-6 6 6" />
                                <path d="M4 20h16" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                Drop a photo here, or click to upload
                              </div>
                              <div className="text-xs text-white/50">
                                PNG, JPG or HEIC up to 15 MB
                              </div>
                            </div>
                          </>
                        )}
                      </label>
                      {error ? (
                        <p className="mt-2 text-xs text-[#fca5a5]">{error}</p>
                      ) : null}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Phone / WhatsApp"
                        name="phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        required
                      />
                      <Field
                        label="Email"
                        name="email"
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
                            Send my photo
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
                  Thanks — your photo has been received.
                </h2>
                <p className="relative mx-auto mt-4 max-w-md text-white/65">
                  We&apos;ll send your preview within 24 hours to the email you
                  provided. Keep an eye on your inbox.
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
