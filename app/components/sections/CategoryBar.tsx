import Container from "../Container";
import Reveal from "../Reveal";

const categories = [
  { href: "#bundle-massage", label: "Massage Clinics" },
  { href: "#bundle-nails", label: "Nail Salons" },
  { href: "#bundle-beauty", label: "Beauty Salons" },
  { href: "#bundle-barber", label: "Hair & Barber" },
  { href: "#bundle-barber", label: "Allied Health" },
  { href: "#bundle-barber", label: "Local Services" },
];

export default function CategoryBar() {
  return (
    <section id="industries" className="relative scroll-mt-32 py-6 md:py-8">
      <Container>
        <Reveal>
          <p className="mb-3 text-center text-sm text-white/55">
            Made for appointment businesses in Brisbane and across Australia
          </p>
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0d16]/80 px-2 py-1.5 backdrop-blur">
            <div className="flex items-center gap-1 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((category) => (
                <a
                  key={category.label}
                  href={category.href}
                  className="inline-flex min-h-11 shrink-0 items-center rounded-xl px-4 text-[13px] font-medium whitespace-nowrap text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {category.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
