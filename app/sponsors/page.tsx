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
      <SponsorsHero />
      <SponsorStrip
        eyebrow="Confirmed Sponsors"
        title="Backed By Leading Tech Organizations"
        className="border-y border-neon/15 bg-black/20"
      />
      <Sponsors />
      <Footer />
    </main>
  );
}
