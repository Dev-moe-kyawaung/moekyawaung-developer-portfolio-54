import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/**
 * Lightweight, fixed-size starfield rendered on a single <canvas>.
 * Pure rAF draw with capped particle count that scales down on weak devices
 * (low deviceMemory / small viewport) and disables entirely under
 * prefers-reduced-motion — mirroring Compose animation degradation targets.
 */
export default function ParticleField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ~free-tier detection for graceful degradation on low-end hardware
    const weak =
      (navigator as any).deviceMemory != null &&
      (navigator as any).deviceMemory <= 4;

    const countCap = weak ? 34 : 64;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = !reduced;

    const stars = Array.from({ length: countCap }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.9 + 0.1, // depth 0.1..1
      tw: Math.random() * Math.PI * 2,
      tws: 0.5 + Math.random() * 1.6,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * DPR));
      canvas.height = Math.max(1, Math.round(height * DPR));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const draw = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height * 0.32;
      for (const s of stars) {
        const p = s.z;
        const dist = Math.hypot((s.x * width) - cx, (s.y * height) - cy) / Math.max(width, height);
        // funnel stars toward a soft golden "galaxy" around the focal point
        const aa = Math.min(1.4, (1 - dist) * 2.2);
        const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.001 * s.tws + s.tw));
        const alpha = 0.05 + 0.45 * tw * Math.max(0.12, aa);
        const R = 148 + p * 70;
        const G = 118 + p * 40;
        const B = 50 + p * 20;
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, p * 1.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(() => { resize(); });
    resize();
    observer.observe(canvas);
    if (running) raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [reduced]);

  if (reduced) return null; // graceful: no motion at all

  return (
    <canvas
      ref={ref}
      className={"pointer-events-none absolute inset-0 h-full w-full " + className}
      aria-hidden="true"
    />
  );
}
