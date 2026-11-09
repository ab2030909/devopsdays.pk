export interface Sponsor {
  name: string;
  tier: "Venue Partner" | "Sponsor" | "Snack Partner" | "Supporting Partner" | "Ecosystem Partner" | "Community Partner";
  logo: string;
  href?: string;
  tagline?: string;
  featured?: boolean;
}

export const SPONSORS: Sponsor[] = [
  {
    name: "Islamabad Chamber of Commerce & Industry",
    tier: "Venue Partner",
    logo: "/sponsors/icci.png",
    tagline: "Official Venue Partner",
    featured: true,
  },
  {
    name: "Adal",
    tier: "Sponsor",
    logo: "/sponsors/adal.png",
    tagline: "Official Sponsor",
  },
  {
    name: "D Notifier",
    tier: "Sponsor",
    logo: "/sponsors/d-notifier.png",
    tagline: "Official Sponsor",
  },
  {
    name: "Korneez",
    tier: "Snack Partner",
    logo: "/sponsors/korneez.png",
    tagline: "Official Snack Partner",
  },
  {
    name: "The Computer Science Society",
    tier: "Supporting Partner",
    logo: "/sponsors/css.png",
    tagline: "Official Supporting Partner",
  },
  {
    name: "Computer Hardware Association of Pakistan",
    tier: "Ecosystem Partner",
    logo: "/sponsors/chap.png",
    tagline: "Official Ecosystem Partner",
  },
];
