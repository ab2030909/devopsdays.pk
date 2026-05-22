import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/sections/Footer";
import SponsorsHero from "@/components/sections/SponsorsHero";

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Sponsor DevOps Days Pakistan 2026 — Pakistan's premier community-led DevOps & Agentic AI conference. Reach engineers, AI builders, cloud architects and startups.",
};

export default function SponsorsPage() {
  return (
    <main className="relative">
      <Navbar />
      <SponsorsHero />
      <Sponsors />
      <Footer />
    </main>
  );
}
