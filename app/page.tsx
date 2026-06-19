import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import CategoryBar from "./components/sections/CategoryBar";
import BeforeAfter from "./components/sections/BeforeAfter";
import Testimonials from "./components/sections/Testimonials";
import LogoWall from "./components/sections/LogoWall";
import Pricing from "./components/sections/Pricing";
import FinalCTA from "./components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <CategoryBar />
      <BeforeAfter />
      <Testimonials />
      <LogoWall />
      <Pricing />
      <FinalCTA />
    </>
  );
}
