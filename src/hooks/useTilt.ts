import { useCallback, useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Lightweight pointer-tracking 3D tilt. Runs transforms on rAF, disables under
 * reduced motion, and skips when the primary pointer is coarse (touch) to avoid
 * fighting native scroll. Mirrors the optional parallax/3D layer of the Compose
 * original while degrading gracefully.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({
  max = 8,
  scale = 1.015,
}: { max?: number; scale?: number } = {}) {
  void scale;
  const ref = useRef<T | null>(null);
  const reduced = usePrefersReducedMotion();
  const frame = useRef<number | null>(null);
  const target = useRef({ rx: 0, ry: 0 });
  const current = useRef({ rx: 0, ry: 0 });
  const enabled = useRef(false);

  const raf = useCallback(() => {
    const { rx, ry } = current.current;
    const t = target.current;
    const nx = rx + (t.rx - rx) * 0.14;
    const ny = ry + (t.ry - ry) * 0.14;
    current.current = { rx: nx, ry: ny };
    const el = ref.current;
    if (el) el.style.transform = `perspective(900px) rotateX(${nx}deg) rotateY(${ny}deg)`;
    if (Math.abs(t.rx - nx) > 0.01 || Math.abs(t.ry - ny) > 0.01) {
      frame.current = requestAnimationFrame(raf);
    } else {
      frame.current = null;
    }
  }, []);

  // enable/disable gating
  useEffect(() => {
    enabled.current = !reduced;
    const mq = window.matchMedia("(pointer: coarse)");
    if (mq.matches) enabled.current = false;
    if (!enabled.current && ref.current) {
      ref.current.style.transform = "";
    }
  }, [reduced]);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (!enabled.current) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.current = { rx: -py * max, ry: px * max };
      if (!frame.current) frame.current = requestAnimationFrame(raf);
    },
    [raf, max]
  );

  const onEnter = useCallback((e: React.PointerEvent) => {
    if (!enabled.current) return;
    const el = ref.current;
    if (el) el.style.transition = `transform .25s ease, box-shadow .25s ease, scale .25s ease`;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    target.current = { rx: -py * max, ry: px * max };
  }, [max]);

  const onLeave = useCallback(() => {
    if (!enabled.current) return;
    target.current = { rx: 0, ry: 0 };
    const el = ref.current;
    if (el) el.style.transition = `transform .5s cubic-bezier(.22,.61,.36,1)`;
    if (!frame.current) frame.current = requestAnimationFrame(raf);
  }, []);

  return { ref, onPointerMove: onMove, onPointerEnter: onEnter, onPointerLeave: onLeave };
}
