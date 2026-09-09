import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { IconMail } from "./icons";

export function StatusBar() {
  const [time, setTime] = useState("9:41");
  useEffect(() => {
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes().toString().padStart(2, "0");
    const am = h >= 12;
    h = h % 12 || 12;
    setTime(`${h}:${m} ${am ? "PM" : "AM"}`);
  }, []);
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between px-7 pt-3.5 text-[11px] font-semibold text-[var(--ink)]">
      <span>{time}</span>
      <span className="flex items-center gap-1">
        {/* signal dots */}
        <span className="flex gap-[2px]">{Array.from({ length: 4 }).map((_, i) => <span key={i} className="h-1.5 w-[3px] rounded-sm bg-current" style={{ opacity: 0.35 + i * 0.2 }} />)}</span>
        <span className="relative ml-1 inline-block h-2 w-4 rounded-[2px] border-[1.5px] border-current"><span className="absolute inset-[1.5px] right-[3px] rounded-[1px] bg-current" /></span>
        <span className="ml-1 h-2.5 w-2.5 rounded-full border border-current" />
      </span>
    </div>
  );
}

/* ---------------- FAB (hiring) ---------------- */
export function Fab({ onClick }: { onClick: () => void }) {
  const reduced = usePrefersReducedMotion();
  return (
    <button
      onClick={onClick}
      aria-label="Hire Moe Kyaw Aung"
      className="group absolute right-4 bottom-24 z-40 grid h-16 w-16 place-items-center rounded-full gold-grad-solid text-black shadow-[0_10px_30px_rgba(201,168,76,0.45)] transition-transform active:scale-90"
      style={{ transformOrigin: "center" }}
    >
      {!reduced && (
        <>
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold/40" style={{ animationDuration: "2.4s" }} />
        </>
      )}
      <IconMail className="h-7 w-7" />
      {/* pulse dot */}
      <span className="absolute right-0.5 top-0.5 flex h-3 w-3">
        <span className="pulse-ring-dot" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </span>
    </button>
  );
}

/* ---------------- bottom dock / scroll indicator ---------------- */
const LINKS = [
  { id: "start", label: "Home", icon: "◉" },
  { id: "intro", label: "Intro", icon: "ℹ" },
  { id: "cases", label: "Work", icon: "◆" },
  { id: "github", label: "Code", icon: "</>" },
  { id: "oss", label: "OSS", icon: "✦" },
  { id: "hire", label: "Hire", icon: "✉" },
];

export function Dock({ active }: { active: string }) {
  const reduced = usePrefersReducedMotion();
  return (
    <nav className="absolute inset-x-0 bottom-3 z-40 mx-auto w-max max-w-[94%]">
      <div className="flex items-center gap-1 rounded-3xl glass px-2 py-2 shadow-2xl shadow-black/50 ring-1 ring-white/10">
        {LINKS.map((l) => {
          const on = active === l.id || (l.id === "start" && active === "");
          return (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative grid h-11 min-w-[46px] place-items-center rounded-2xl transition-colors ${
                on ? "bg-gold/15 text-gold" : "text-[var(--ink-2)] hover:text-[var(--ink)]"
              }`}
              aria-current={on ? "page" : undefined}
            >
              <span className="text-sm leading-none">{l.icon}</span>
              <span className="mt-0.5 text-[8px] font-medium">{l.label}</span>
              {on && !reduced && (
                <span className="absolute -top-0.5 h-0.5 w-5 rounded-full gold-grad-solid" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
