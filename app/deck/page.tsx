import type { Metadata } from "next";
import DeckView from "@/components/sections/DeckView";

export const metadata: Metadata = {
  title: "Sponsorship Deck",
  description:
    "DevOps Days Islamabad 2026 â€” sponsorship deck. Browse, print, or save as PDF.",
};

export default function DeckPage() {
  return <DeckView />;
}
