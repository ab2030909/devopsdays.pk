"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "../SectionHeader";

const faqs = [
  {
    q: "Who can attend?",
    a: "Engineers, students, AI builders, startups, community organisers, sponsors, and anyone passionate about DevOps, cloud-native systems and Agentic AI.",
  },
  {
    q: "Is the event technical?",
    a: "Yes. The conference is built around deep technical content across DevOps, SRE, cloud-native, DevSecOps, MLOps and Agentic AI tracks.",
  },
  {
    q: "Will there be workshops?",
    a: "We are planning hands-on workshops in addition to talks and panels. Final agenda and workshop list will be shared closer to the event.",
  },
  {
    q: "Are sponsorships open?",
    a: "Yes. Sponsorships are open across multiple tiers. Reach out via the Become a Sponsor button to receive the full sponsorship deck.",
  },
  {
    q: "Are students welcome?",
    a: "Absolutely. Student chapters and university communities can apply as community partners and we will run dedicated student initiatives.",
  },
  {
    q: "Will tickets be paid?",
    a: "Pricing details will be announced soon. Early-interest signups via the waitlist will receive priority access and updates first.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeader
          eyebrow="Frequently Asked"
          title={
            <>
              Questions <span className="gradient-text">answered.</span>
            </>
          }
          description="Everything you need to know about attending, sponsoring and partnering with DevOps Days Islamabad 2026."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`glass rounded-2xl overflow-hidden transition-shadow ${
                    isOpen ? "shadow-neon" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium">
                      {f.q}
                    </span>
                    <span
                      className={`h-8 w-8 rounded-full bg-neon/10 border border-neon/30 grid place-items-center text-neon-glow transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 text-sm text-ink/70 leading-relaxed">
                          <div className="h-px w-full bg-neon/15 mb-4" />
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
