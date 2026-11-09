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
      <div className="pt-20 sm:pt-24 border-b border-neon/10 bg-black/30 backdrop-blur-sm relative z-20">
        <SponsorStrip className="py-2.5 sm:py-3" />
      </div>
      <SponsorsHero />
      <Sponsors />
      <Footer />
    </main>
  );
}
