"use client";

import { useEffect, useState } from "react";

const LINES = [
  "> Initialising Essential Eight scan...",
  "> Enumerating attack surface...",
  "> Running AI correlation engine...",
  "> Mapping lateral movement paths...",
  "> Generating risk-prioritised report...",
  "> Scan complete. 7 critical findings.",
];

export default function TerminalAnimation() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) {
      // Restart after a pause
      const timer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setIsComplete(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (currentLine >= LINES.length) {
      setIsComplete(true);
      return;
    }

    const line = LINES[currentLine];

    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 28);
      return () => clearTimeout(timer);
    } else {
      // Line complete — pause then move to next
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, isComplete]);

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        backgroundColor: "#0a0f1a",
        border: "1px solid rgba(6, 182, 212, 0.35)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          backgroundColor: "#0e1421",
          borderColor: "rgba(6, 182, 212, 0.2)",
        }}
      >
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
        <span
          className="ml-3 text-xs font-mono"
          style={{ color: "rgba(6, 182, 212, 0.6)" }}
        >
          auresta-scan v2.4.1
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 min-h-[200px]">
        {displayedLines.map((line, i) => (
          <div
            key={i}
            className="text-sm font-mono mb-1 leading-relaxed"
            style={{
              color:
                i === LINES.length - 1 && isComplete
                  ? "#06b6d4"
                  : i < displayedLines.length - 1
                  ? "rgba(6, 182, 212, 0.55)"
                  : "#06b6d4",
            }}
          >
            {line}
            {i === currentLine && !isComplete && (
              <span
                className="inline-block ml-0.5 animate-blink"
                style={{ color: "#06b6d4" }}
              >
                █
              </span>
            )}
          </div>
        ))}
        {isComplete && (
          <div
            className="text-sm font-mono mt-2"
            style={{ color: "rgba(6,182,212,0.4)" }}
          >
            <span className="animate-blink">█</span>
          </div>
        )}
      </div>
    </div>
  );
}
