import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/sections/Footer";
import SponsorsHero from "@/components/sections/SponsorsHero";
import SponsorStrip from "@/components/sections/SponsorStrip";

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Sponsor DevOps Days Islamabad 2026 — Pakistan's premier community-led DevOps & Agentic AI conference. Reach engineers, AI builders, cloud architects and startups.",
};

export default function SponsorsPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-[72px] sm:pt-[80px] border-b border-neon/10 bg-black/40 backdrop-blur-md relative z-20">
        <SponsorStrip className="py-1 sm:py-1.5" />
      </div>
      <SponsorsHero />
      <Sponsors />
      <Footer />
    </main>
  );
}
