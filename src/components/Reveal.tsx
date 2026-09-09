import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "blur";
  className?: string;
  as?: "div" | "section" | "article" | "li";
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const base = variant === "blur" ? "reveal-blur" : "reveal";
  return (
    <Tag
      ref={ref as any}
      className={`${base} ${inView ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
