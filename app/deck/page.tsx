import type { Metadata } from "next";
import DeckView from "@/components/sections/DeckView";

export const metadata: Metadata = {
  title: "Sponsorship Deck",
  description:
    "DevOps Days Pakistan 2026 — sponsorship deck. Browse, print, or save as PDF.",
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return <DeckView />;
}
