import Hero from "./components/sections/Hero";
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
      <CategoryBar />
      <BeforeAfter />
      <Testimonials />
      <LogoWall />
      <Pricing />
      <FinalCTA />
    </>
  );
}
