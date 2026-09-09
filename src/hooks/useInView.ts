import { useEffect, useRef, useState } from "react";

export type RevealOptions = {
  /** Fraction of element visibility that triggers "in" state. */
  threshold?: number;
  /** Only fire once. */
  once?: boolean;
  /** Root element to observe inside (so the phone scroll container can be the root). */
  root?: Element | null;
  /** Directional offset in px added to root bounds shrink. */
  rootMargin?: string;
};

/**
 * Scroll-triggered appearance detection. Returns a ref to attach and a boolean
 * for whether the element has entered the viewport. Ships with an optional
 * stale-while-transitioning fallback so the first few items are pre-visible
 * on the smallest devices (graceful degradation).
 */
export function useInView<T extends Element = HTMLElement>(
  opts: RevealOptions = {}
) {
  const { threshold = 0.18, once = true, root = null, rootMargin = "0px 0px -8% 0px" } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Graceful degradation: no IO support -> show without scroll trigger.
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) fired.current = true;
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, once, root]);

  return { ref, inView };
}
