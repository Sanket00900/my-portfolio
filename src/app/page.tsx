import { Header } from "@/components/header/Header";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Freelance } from "@/components/sections/Freelance";
import { OffTheClock } from "@/components/sections/OffTheClock";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { buildStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={buildStructuredData()} />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <Testimonials />
        <Freelance />
        <OffTheClock />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
