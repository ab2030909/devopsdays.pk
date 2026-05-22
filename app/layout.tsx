import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://devopsdays.pk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevOps Days Pakistan 2026 | DevOps & Agentic AI Conference",
    template: "%s | DevOps Days Pakistan 2026",
  },
  description:
    "Pakistan's premier community-led DevOps, Cloud, Platform Engineering and Agentic AI conference. Islamabad, September 2026.",
  keywords: [
    "DevOps Days Pakistan",
    "DevOps Pakistan 2026",
    "Agentic AI Conference",
    "Cloud Native Pakistan",
    "Platform Engineering",
    "DevSecOps",
    "SRE",
    "MLOps",
    "Islamabad Tech Conference",
  ],
  authors: [{ name: "DevOps Days Pakistan" }],
  openGraph: {
    title: "DevOps Days Pakistan 2026",
    description:
      "Pakistan's premier community-led DevOps & Agentic AI conference. Islamabad, September 2026.",
    url: siteUrl,
    siteName: "DevOps Days Pakistan 2026",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Days Pakistan 2026",
    description:
      "Pakistan's premier community-led DevOps & Agentic AI conference. Islamabad, September 2026.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} bg-background text-ink antialiased noise`}
      >
        {children}
      </body>
    </html>
  );
}
