import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0A0A",
        ink: "#F5F5F5",
        neon: {
          DEFAULT: "#A855F7",
          violet: "#9333EA",
          deep: "#7E22CE",
          glow: "#C084FC",
          ice: "#E9D5FF",
        },
        cyber: {
          blue: "#3B82F6",
          cyan: "#22D3EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "neon-grid":
          "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(168,85,247,0.25) 0%, rgba(5,5,5,0) 60%)",
        "conic-glow":
          "conic-gradient(from 180deg at 50% 50%, #9333EA, #A855F7, #C084FC, #9333EA)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(168,85,247,0.45), 0 0 40px rgba(147,51,234,0.25)",
        "neon-lg":
          "0 0 30px rgba(168,85,247,0.55), 0 0 80px rgba(147,51,234,0.35)",
        "inner-neon": "inset 0 0 20px rgba(168,85,247,0.25)",
      },
      keyframes: {
        "pulse-glow": {
          "0%,100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "grid-move": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "dash": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "scan-line": "scan-line 6s linear infinite",
        "grid-move": "grid-move 20s linear infinite",
        "shimmer": "shimmer 6s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "dash": "dash 4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
