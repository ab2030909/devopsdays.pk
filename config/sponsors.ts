export interface Sponsor {
  name: string;
  tier: "Venue Partner" | "Sponsor" | "Snack Partner" | "Community Partner";
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
    href: "https://icci.com.pk/",
    tagline: "Official Venue Partner",
    featured: true,
  },
  {
    name: "Adal",
    tier: "Sponsor",
    logo: "/sponsors/adal.png",
    href: "https://adal.com",
    tagline: "Official Sponsor",
  },
  {
    name: "D Notifier",
    tier: "Sponsor",
    logo: "/sponsors/d-notifier.png",
    href: "https://dnotifier.com",
    tagline: "Official Sponsor",
  },
  {
    name: "Korneez",
    tier: "Snack Partner",
    logo: "/sponsors/korneez.png",
    href: "https://korneez.com",
    tagline: "Official Snack Partner",
  },
];

