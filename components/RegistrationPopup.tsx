"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { EVENT_CONFIG } from "@/config/event";

export default function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingTrigger, setShowFloatingTrigger] = useState(false);

  useEffect(() => {
    // Automatically open the popup on every page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setShowFloatingTrigger(true);
  };

  const handleOpenFromTrigger = () => {
    setIsOpen(true);
    setShowFloatingTrigger(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-[3px]"
            onClick={handleClose} // Close on clicking backdrop
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-[480px] bg-[#0A0A0C] border border-neon/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.25)]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full glass border border-neon/30 text-ink/75 hover:text-white hover:bg-neon/20 hover:shadow-neon transition-all duration-200"
                aria-label="Close registration popup"
              >
                <X size={18} />
              </button>

              {/* Poster content with clickable link */}
              {/* Set exact aspect ratio of the new poster (819x1024) to prevent any crop/misalignment */}
              <div className="relative aspect-[819/1024] w-full select-none">
                <a
                  href={EVENT_CONFIG.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-full group cursor-pointer"
                >
                  {/* Poster Image */}
                  <img
                    src="/registrations-open.jpg"
                    alt="DevOps Days Islamabad 2026 Registrations Open"
                    className="w-full h-full"
                  />

                  {/* Glowing & Shimmering Overlay specifically for the REGISTER NOW button area */}
                  {/* Repositioned with mathematically-precise pixel coordinates: bottom 10.45%, left 21.5%, right 20.1%, height 7.32% */}
                  <div
                    className="absolute bottom-[10.45%] left-[21.5%] right-[20.1%] h-[7.32%] rounded-full overflow-hidden border border-neon/35 bg-neon-violet/5 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-neon-glow group-hover:bg-neon-violet/15 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300"
                    aria-hidden="true"
                  >
                    {/* Breathing glow overlay */}
                    <span className="absolute inset-0 rounded-full bg-neon/5 animate-pulse opacity-85" />

                    {/* Sweeping lightning reflection sheen */}
                    <div
                      className="absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      style={{
                        animation: "shimmer-sweep 2.2s infinite ease-in-out",
                      }}
                    />

                    {/* CSS Keyframes injected locally */}
                    <style>{`
                      @keyframes shimmer-sweep {
                        0% { transform: translateX(-150%) skewX(-25deg); }
                        30% { transform: translateX(150%) skewX(-25deg); }
                        100% { transform: translateX(150%) skewX(-25deg); }
                      }
                    `}</style>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Pill Button (Visible when popup is closed) */}
      <AnimatePresence>
        {showFloatingTrigger && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={handleOpenFromTrigger}
              className="group relative flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Open registration form popup"
              title="Registrations Open"
            >
              {/* Pulsing background ripple ring */}
              <span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping opacity-75 group-hover:opacity-40" />

              <span className="relative z-10 font-display text-xs font-bold tracking-wider uppercase">
                Register Now
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
