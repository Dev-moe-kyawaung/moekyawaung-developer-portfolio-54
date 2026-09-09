import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/** Typewriter effect for hero lines. Under reduced motion, reveals instantly. */
export function useTypewriter(
  finalText: string,
  { speedMs = 46, startDelay = 250 } = {}
) {
  const reduced = usePrefersReducedMotion();
  const [text, setText] = useState(() => (reduced ? finalText : ""));
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setText(finalText);
      setDone(true);
      return;
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const starter = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setText(finalText.slice(0, i));
        if (i >= finalText.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speedMs);
    }, startDelay);
    return () => {
      clearTimeout(starter);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalText, reduced]);

  return { text, done };
}
