import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import SponsorStrip from "@/components/sections/SponsorStrip";
import OrganizedBy from "@/components/sections/OrganizedBy";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import WhyAttend from "@/components/sections/WhyAttend";
import Speakers from "@/components/sections/Speakers";
import CommunityStrip from "@/components/sections/CommunityStrip";
import Venue from "@/components/sections/Venue";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      {/* Sleek, slim top logo strip directly under navbar */}
      <div className="pt-[72px] sm:pt-[80px] border-b border-neon/10 bg-black/40 backdrop-blur-md relative z-20">
        <SponsorStrip className="py-1 sm:py-1.5" />
      </div>
      <Hero />
      <OrganizedBy />
      <Stats />
      <About />
      <Tracks />
      <CommunityStrip />
      <Venue />
      <WhyAttend />
      <Speakers />
      <FAQ />
      <Footer />
    </main>
  );
}
