"use client";

import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trail: Array<{ x: number; y: number; alpha: number; size: number }> = [];
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      trail.push({ x: e.clientX, y: e.clientY, alpha: 0.8, size: 4 });
      if (trail.length > 30) trail.shift();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < trail.length; i++) {
        const t = trail[i];
        t.alpha -= 0.025;
        t.size *= 0.94;
        if (t.alpha <= 0) continue;
        ctx.beginPath();
        ctx.arc(t.x, t.y, Math.max(t.size, 0.1), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${t.alpha * 0.5})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
