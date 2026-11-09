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
    href: "https://icci.com.pk/",
    tagline: "Official Venue Partner",
    featured: true,
  },
  {
    name: "Adal",
    tier: "Sponsor",
    logo: "/sponsors/adal.png",
    href: "https://adalagent.ai/",
    tagline: "Official Sponsor",
  },
  {
    name: "D Notifier",
    tier: "Sponsor",
    logo: "/sponsors/d-notifier.png",
    href: "https://www.dnotifier.com/",
    tagline: "Official Sponsor",
  },
  {
    name: "Korneez",
    tier: "Snack Partner",
    logo: "/sponsors/korneez.png",
    href: "https://korneez.com/",
    tagline: "Official Snack Partner",
  },
  {
    name: "The Computer Science Society",
    tier: "Supporting Partner",
    logo: "/sponsors/css.png",
    href: "https://css-iiu.vercel.app/",
    tagline: "Official Supporting Partner",
  },
  {
    name: "Computer Hardware Association of Pakistan",
    tier: "Ecosystem Partner",
    logo: "/sponsors/chap.png",
    href: "https://www.linkedin.com/company/computer-hardware-association-of-pakistan/",
    tagline: "Official Ecosystem Partner",
  },
];
