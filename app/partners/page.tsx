import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PartnersHero from "@/components/sections/PartnersHero";
import PartnersGrid from "@/components/sections/PartnersGrid";
import PartnersJoinCTA from "@/components/sections/PartnersJoinCTA";

export const metadata: Metadata = {
  title: "Community Partners",
  description:
    "Communities, student chapters, and developer groups powering DevOps Days Islamabad 2026.",
};

export default function PartnersPage() {
  return (
    <main className="relative">
      <Navbar />
      <PartnersHero />
      <PartnersGrid />
      <PartnersJoinCTA />
      <Footer />
    </main>
  );
}
