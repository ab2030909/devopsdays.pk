"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, MessageCircle, Mail } from "lucide-react";
import Logo from "../Logo";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X / Twitter" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "mailto:hello@devopsdays.pk", label: "Email" },
];

const navGroups = [
  {
    title: "Conference",
    links: [
      { label: "About", href: "#about" },
      { label: "Tracks", href: "#tracks" },
      { label: "Speakers", href: "#speakers" },
      { label: "Venue", href: "#venue" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become a Sponsor", href: "/sponsors" },
      { label: "Community Partner", href: "/partners" },
      { label: "Apply as Speaker", href: "#speakers" },
      { label: "Join Waitlist", href: "#waitlist" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sponsorship Deck", href: "/deck" },
      { label: "Code of Conduct", href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "mailto:hello@devopsdays.pk" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      {/* background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-y opacity-30" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[80%] bg-neon/15 blur-[160px] rounded-full" />
        <div className="absolute inset-x-0 top-0 divider-glow" />
      </div>

      <div className="container-px">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Building <span className="text-neon-glow">·</span> Automating{" "}
              <span className="text-neon-glow">·</span>{" "}
              <span className="gradient-text">Scaling Pakistan&apos;s Future</span>
            </h2>
            <p className="mt-5 text-ink/70">
              Join Pakistan&apos;s national DevOps and Agentic AI movement.
              Engineers, communities, sponsors and AI builders — let&apos;s
              shape the next decade of infrastructure together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#waitlist" className="btn-primary">
                Join the Waitlist
              </a>
              <a href="/sponsors" className="btn-secondary">
                Become a Sponsor
              </a>
            </div>
          </motion.div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <Logo className="h-9 w-9" />
                <div className="leading-tight">
                  <div className="font-display font-semibold">DevOps Days</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-neon-glow/80">
                    Pakistan · 2026
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-ink/60 max-w-sm">
                Pakistan&apos;s premier community-led DevOps & Agentic AI
                conference. Islamabad · September 2026.
              </p>
              <div className="mt-5 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="h-9 w-9 rounded-full glass grid place-items-center text-neon-glow hover:shadow-neon hover:bg-neon/15 transition-all"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {navGroups.map((g) => (
              <div key={g.title} className="lg:col-span-2">
                <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-4">
                  {g.title}
                </div>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ink/70 hover:text-ink transition"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:col-span-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-ink/50 mb-4">
                Contact
              </div>
              <a
                href="mailto:hello@devopsdays.pk"
                className="text-sm text-ink/70 hover:text-ink transition block"
              >
                hello@devopsdays.pk
              </a>
              <div className="text-sm text-ink/60 mt-2">Islamabad, Pakistan</div>
              <div className="text-sm text-ink/60">September 2026</div>
            </div>
          </div>

          <div className="mt-14 divider-glow" />
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/50">
            <div className="font-mono">
              © 2026 DevOps Days Pakistan. All systems nominal.
            </div>
            <div className="font-mono uppercase tracking-[0.2em]">
              v.2026 · build.000 · region.isb
            </div>
          </div>
          <div className="mt-3 text-[10px] text-ink/35 font-mono text-center sm:text-right">
            Map data:{" "}
            <a
              href="https://github.com/hqakhtar/PakistanMap"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink/60 underline decoration-dotted"
            >
              hqakhtar/PakistanMap
            </a>{" "}
            · MIT
          </div>
        </div>
      </div>
    </footer>
  );
}
