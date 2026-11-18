"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, ArrowRight, X, Linkedin } from "lucide-react";
import SectionHeader from "../SectionHeader";

type Speaker = {
  name: string;
  photo: string;
  topic: string;
  bio: string[];
  linkedin?: string;
};

const speakers: Speaker[] = [
  {
    name: "Babar Zahoor",
    photo: "/speakers/babar-zahoor.png",
    topic:
      "DevOps as a Career Choice: Exploring Opportunities, Skills and Growth",
    bio: [
      "With extensive experience in the technology and open-source ecosystem, Babar Zahoor brings valuable industry insights and leadership perspectives to the DevOps community.",
      "In this session, discover how DevOps is shaping the future of technology careers, the skills needed to succeed, emerging opportunities, and how aspiring professionals can build a rewarding career in this rapidly evolving field.",
    ],
    linkedin: "https://www.linkedin.com/in/babarzahoordevops/",
  },
  {
    name: "Hamza Qureshi",
    photo: "/speakers/hamza-qureshi.png",
    topic: "Hands-on AI Development with Agentic Frameworks",
    bio: [
      "Get ready for an insightful and practical session exploring the power of Agentic AI and modern AI development.",
      "Discover how agentic frameworks are transforming AI development, enabling developers to build intelligent, autonomous systems and move beyond traditional AI applications. This session will offer practical insights into building with agentic technologies and exploring their real-world potential.",
    ],
    linkedin: "https://www.linkedin.com/in/hamza-qureshi-87a85955/",
  },
  {
    name: "Zunaira Shafaq",
    photo: "/speakers/zunaira-shafaq.png",
    topic:
      "Introducing AI-Powered Cloud Cost Management with FinOps Agent",
    bio: [
      "Bringing hands-on industry experience and expertise in DevOps and cloud technologies, Zunaira is a Senior DevOps Engineer at OpenSpace and an AWS Community Builder.",
      "Cloud costs are growing, and managing them intelligently is becoming more important than ever.",
      "In this session, explore how AI-powered FinOps agents can transform cloud cost management through intelligent insights, automation, and smarter resource optimization. Discover how AI can help teams make cost-efficient cloud decisions while maintaining performance and scalability.",
    ],
    linkedin: "https://www.linkedin.com/in/zunairashafaq/",
  },
  {
    name: "Dr. Ammara Aftab (Hon.)",
    photo: "/speakers/ammara-aftab.png",
    topic:
      "AIOps & AI Governance: Shaping the Next Generation of Intelligent IT",
    bio: [
      "Global AI Speaker, AI Governance Strategist, Consultant, and Founder & Chairperson of Pro AI Global. Recognized as Pakistan's first female AI professional with four international recognitions, Dr. Ammara is a leading voice in responsible AI, AI governance, digital transformation, and strategic AI leadership.",
      "With extensive experience working with senior government officials, corporate executives, and regulatory institutions, she brings valuable insights into AI governance frameworks, risk management, human oversight, and responsible AI adoption. She also serves as District Chair for Artificial Intelligence & Innovation at Rotary International District 3271, championing responsible and inclusive AI innovation.",
      "In this session, explore how intelligent automation, AI accountability, and responsible governance can transform the future of IT infrastructure and shape the next generation of intelligent technology.",
    ],
  },
];

// number of "coming soon" placeholder cards shown after confirmed speakers
const PLACEHOLDERS = 2;

export default function Speakers() {
  const [active, setActive] = useState<Speaker | null>(null);

  // close on Escape + lock body scroll while open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[60%] bg-neon/10 blur-[120px] rounded-full" />
      </div>
      <div className="container-px">
        <SectionHeader
          eyebrow="Speakers"
          title={
            <>
              Meet our <span className="gradient-text">speakers.</span>
            </>
          }
          description="A lineup of DevOps engineers, cloud architects, AI practitioners, founders, platform engineers and technology leaders from Pakistan and beyond. More speakers announced soon."
        />

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <motion.button
              key={s.name}
              type="button"
              onClick={() => setActive(s)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-5 overflow-hidden hover:shadow-neon transition-all text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="aspect-square w-full rounded-xl border border-neon/30 bg-neon/[0.04] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.photo}
                  alt={s.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow">
                  confirmed speaker
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-ink/55 line-clamp-2">{s.topic}</div>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-neon-glow">
                  View
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.button>
          ))}

          {Array.from({ length: PLACEHOLDERS }).map((_, i) => (
            <motion.div
              key={`ph-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (speakers.length + i) * 0.06 }}
              className="group relative glass rounded-2xl p-5 overflow-hidden transition-all"
            >
              <div className="aspect-square w-full rounded-xl border border-dashed border-neon/30 bg-neon/[0.04] grid place-items-center relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative h-16 w-16 rounded-full bg-neon/10 border border-neon/40 grid place-items-center text-neon-glow"
                >
                  <Mic className="h-6 w-6" />
                </motion.div>
                <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow/80">
                  status: pending_announcement
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Speaker {speakers.length + i + 1}</div>
                  <div className="text-xs text-ink/50">To be confirmed</div>
                </div>
                <span className="chip text-[10px]">2026</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ===== Speaker detail popup ===== */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${active.name} details`}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-neon/30 shadow-neon-lg"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 h-9 w-9 grid place-items-center rounded-full bg-black/40 border border-neon/30 text-ink/70 hover:text-ink hover:border-neon transition"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid sm:grid-cols-[220px_1fr]">
                <div className="relative sm:h-full">
                  <div className="aspect-square sm:aspect-auto sm:h-full overflow-hidden sm:rounded-l-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={active.photo}
                      alt={active.name}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent sm:bg-gradient-to-r" />
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neon-glow">
                    confirmed speaker
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold">
                    {active.name}
                  </h3>
                  <div className="mt-3 rounded-lg border border-neon/20 bg-neon/[0.06] px-3 py-2">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-ink/50">
                      Session Topic
                    </div>
                    <div className="mt-1 text-sm font-semibold text-neon-glow leading-snug">
                      {active.topic}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {active.bio.map((p, idx) => (
                      <p key={idx} className="text-sm text-ink/70 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {active.linkedin && (
                    <a
                      href={active.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-black/30 px-4 py-2 text-sm font-medium text-ink hover:border-neon hover:text-neon-glow transition"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
