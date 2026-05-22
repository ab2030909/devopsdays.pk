"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavLink {
  /** when on home page, scroll-to-anchor; otherwise link to home + hash */
  hash?: string;
  /** when set, takes the user to a real route */
  route?: string;
  label: string;
}

const links: NavLink[] = [
  { hash: "#about", label: "About" },
  { hash: "#tracks", label: "Tracks" },
  { route: "/sponsors", label: "Sponsors" },
  { route: "/partners", label: "Partners" },
  { route: "/deck", label: "Deck" },
  { hash: "#venue", label: "Venue" },
  { hash: "#faq", label: "FAQ" },
];

function hrefFor(link: NavLink, onHome: boolean): string {
  if (link.route) return link.route;
  if (!link.hash) return "/";
  return onHome ? link.hash : `/${link.hash}`;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (link: NavLink) =>
    !!link.route && (pathname === link.route || pathname.startsWith(link.route + "/"));

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-px">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-neon"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold tracking-wide">
                DevOps Days
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neon-glow/80">
                Pakistan · 2026
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const href = hrefFor(l, onHome);
              const active = isActive(l);
              const Tag: typeof Link | "a" = l.route ? Link : "a";
              return (
                <Tag
                  key={l.label}
                  href={href}
                  className={`relative px-4 py-2 text-sm transition-colors group ${
                    active ? "text-neon-glow" : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3 bottom-1 h-px transition-all ${
                      active ? "bg-neon" : "bg-neon/0 group-hover:bg-neon"
                    }`}
                  />
                </Tag>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/deck" className="btn-secondary text-xs">
              Sponsorship Deck
            </Link>
            <Link href="/sponsors" className="btn-primary text-xs">
              Become a Sponsor
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-full glass"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 mx-auto max-w-7xl glass-strong rounded-2xl p-4"
            >
              <div className="flex flex-col gap-1">
                {links.map((l) => {
                  const href = hrefFor(l, onHome);
                  const active = isActive(l);
                  const Tag: typeof Link | "a" = l.route ? Link : "a";
                  return (
                    <Tag
                      key={l.label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-sm hover:bg-neon/10 ${
                        active ? "bg-neon/15 text-neon-glow" : "text-ink/80 hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </Tag>
                  );
                })}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Link href="/deck" className="btn-secondary text-xs">
                    Deck
                  </Link>
                  <Link href="/sponsors" className="btn-primary text-xs">
                    Sponsor
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
