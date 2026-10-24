import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import {
  DEMO_DISPLAY,
  DEMO_TEL,
  EMAIL,
  FREE_SAMPLE_URL,
  GOOGLE_CHECK_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16 scroll-mt-32 border-t border-white/5">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Sell More Studio helps Brisbane and Australian local businesses get
            more bookings and miss fewer calls.
          </p>
          <p className="mt-4 text-sm text-white/75">
            Brisbane, QLD, Australia
          </p>
          <p className="mt-1 text-xs text-white/45">Service Area Business</p>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Explore
          </h2>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link href="/#services" className="inline-flex min-h-11 items-center text-white/70 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="inline-flex min-h-11 items-center text-white/70 hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/get-started" className="inline-flex min-h-11 items-center text-white/70 hover:text-white">
                Get started
              </Link>
            </li>
            <li>
              <a href={GOOGLE_CHECK_HREF} className="inline-flex min-h-11 items-center text-white/70 hover:text-white">
                Free Google profile check
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            Contact
          </h2>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center text-white/80 hover:text-white"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-[#86efac] hover:text-white"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={DEMO_TEL} className="inline-flex min-h-11 items-center text-[#fde68a] hover:text-white">
                Live AI receptionist {DEMO_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={FREE_SAMPLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-[#93c5fd] hover:text-white"
              >
                Free sample / demo
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-white/5 py-5 text-xs text-white/40">
        © {new Date().getFullYear()} Sell More Studio. All rights reserved.
      </Container>
    </footer>
  );
}
