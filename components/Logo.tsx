"use client";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10 w-10" }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="DevOps Days Pakistan 2026 Logo"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Infinity loop */}
        <g filter="url(#logoGlow)" stroke="url(#logoGrad)" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M16 32c0-6 5-11 10-11s8 4 10 8c2 4 5 8 10 8s10-5 10-11-5-11-10-11-8 4-10 8c-2 4-5 8-10 8s-10-5-10-11" />
        </g>

        {/* Crescent + star (subtle) */}
        <g opacity="0.85">
          <path
            d="M48 14a6 6 0 1 0 0 12 5 5 0 1 1 0-12z"
            fill="url(#logoGrad)"
            opacity="0.9"
          />
          <circle cx="55" cy="20" r="1.2" fill="#E9D5FF" />
        </g>
      </svg>
      <div className="absolute inset-0 -z-10 blur-xl opacity-60 bg-neon/20 rounded-full" />
    </div>
  );
}
