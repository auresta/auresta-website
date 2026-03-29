"use client";

import { useState } from "react";

const stats = [
  { value: "USD 10B+", label: "AU Cybersecurity Market" },
  { value: "Every 6 Min", label: "Cybercrime Reported in AU" },
  { value: "30,000", label: "Security Professional Shortage" },
  { value: "~$46K", label: "Average SME Incident Cost" },
];

function StatItem({ value, label }: { value: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="text-center"
      style={{
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="text-2xl sm:text-3xl font-black mb-1"
        style={{
          color: "#06b6d4",
          transition: "filter 0.2s ease",
          filter: hovered
            ? "brightness(1.3) drop-shadow(0 0 8px rgba(6,182,212,0.5))"
            : "brightness(1)",
        }}
      >
        {value}
      </div>
      <div className="text-xs sm:text-sm text-text-muted">{label}</div>
    </div>
  );
}

export default function StatBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <StatItem key={s.value} value={s.value} label={s.label} />
      ))}
    </div>
  );
}
