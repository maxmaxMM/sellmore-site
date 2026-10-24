import Container from "../Container";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import { services } from "../../lib/site";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-32 py-16 md:py-24">
      <div id="how-it-works" className="scroll-mt-32" />
      <Container>
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Nine ways to fill the diary{" "}
              <span className="text-brand-gradient">and keep clients.</span>
            </>
          }
          subtitle="Built for massage clinics, nail salons, beauty salons, barbershops, allied health and other local services across Brisbane and Australia. Every price below is in Australian dollars. Setup is charged once. Monthly is the ongoing fee."
        />

        <div className="mt-12 space-y-5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              idPrefix="service-"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
