"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../components/Container";

export default function ThankYouPage() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.25),transparent_70%)] blur-2xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="card relative mx-auto max-w-2xl overflow-hidden p-10 sm:p-14 text-center"
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
            transition={{
              delay: 0.15,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-[#3b82f6]/15 ring-1 ring-[#60a5fa]/40 shadow-[0_0_40px_-4px_rgba(96,165,250,0.7)]"
          >
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
          </motion.div>

          <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-gradient">
            Thanks — your photo has been received.
          </h1>
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
      </Container>
    </section>
  );
}
