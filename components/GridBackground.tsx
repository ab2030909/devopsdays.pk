"use client";

export default function GridBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 grid-bg animate-grid-move opacity-60 mask-fade-y ${className}`}
    />
  );
}
