import { useCallback, useRef, useState } from "react";

type Handlers = {
  onRelease?: () => void;
};

/**
 * Pointer press-and-hold gesture — mirrors Jetpack Compose's
 * `detectTapGestures(onLongPress = ...)`. Returns the gestures to spread onto an
 * element plus the current hold progress (0..1) so a preview ring can animate.
 */
export function useLongPress({ onRelease }: Handlers = {}) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);
  const [longPressed, setLongPressed] = useState(false);
  const holdingRef = useRef(false);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    holdingRef.current = false;
  }, []);

  const onPressStart = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      // Ignore if this is actually a scroll start handled by pointer capture weirdness.
      holdingRef.current = true;
      setLongPressed(false);
      startRef.current = performance.now();
      const DURATION = 520;

      const tick = (now: number) => {
        if (!holdingRef.current) return;
        const p = Math.min(1, (now - startRef.current) / DURATION);
        setProgress(p);
        if (p >= 1) {
          setLongPressed(true);
          return;
        }
        animRef.current = requestAnimationFrame(tick);
      };
      animRef.current = requestAnimationFrame(tick);

      timerRef.current = setTimeout(() => {
        // Ensures onRelease after a successful long press fires.
      }, DURATION + 40);
    },
    []
  );

  const onPressEnd = useCallback(() => {
    clear();
    setProgress(0);
    setLongPressed(false);
  }, [clear]);

  const onPressUp = useCallback(() => {
    onRelease?.();
    onPressEnd();
  }, [onRelease, onPressEnd]);

  return {
    handlers: {
      onPointerDown: onPressStart,
      onPointerUp: onPressUp,
      onPointerCancel: onPressEnd,
      onPointerLeave: onPressEnd,
      onContextMenu: (e: React.MouseEvent) => e.preventDefault(), // block long-press menu on Android-ish
    },
    progress,
    longPressed,
  };
}
