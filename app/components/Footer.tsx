import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-white/60">
          <Logo />
        </div>

        <div className="flex items-center gap-6 text-sm text-white/50">
          <Link href="/#pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/#work" className="hover:text-white">
            Work
          </Link>
          <Link href="/get-image" className="hover:text-white">
            Get started
          </Link>
        </div>

        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} SellMore Studio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
