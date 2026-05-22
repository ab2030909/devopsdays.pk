import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import OrganizedBy from "@/components/sections/OrganizedBy";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import WhyAttend from "@/components/sections/WhyAttend";
import Speakers from "@/components/sections/Speakers";
import Venue from "@/components/sections/Venue";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <OrganizedBy />
      <Stats />
      <About />
      <Tracks />
      <Venue />
      <WhyAttend />
      <Speakers />
      <FAQ />
      <Footer />
    </main>
  );
}
