import { useEffect, useState } from "react";
import { StatusBar, Fab, Dock } from "./components/Chrome";
import { HireModal } from "./components/HireModal";
import ParticleField from "./components/ParticleField";
import { Hero } from "./sections/Hero";
import { Intro } from "./sections/Intro";
import { CaseStudies } from "./sections/CaseStudies";
import { GitHubStats } from "./sections/GitHubStats";
import { OpenSource } from "./sections/OpenSource";
import { Hire } from "./sections/Hire";

const SECTION_IDS = ["start", "intro", "cases", "github", "oss", "hire", "top"];

export default function App() {
  const [active, setActive] = useState("start");
  const [hireOpen, setHireOpen] = useState(false);

  // Scroll spy within the document scroll container.
  useEffect(() => {
    const container = () => window;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const probes = SECTION_IDS.map((id) => {
          const el = document.getElementById(id);
          if (!el) return { id, top: -1, bottom: -1 };
          const r = el.getBoundingClientRect();
          return { id, top: r.top, bottom: r.bottom };
        });
        // active = the section whose top is above the read-hint line ~35% from bottom
        const line = window.innerHeight * 0.42;
        let cur = "start";
        for (const p of probes) {
          if (p.top <= line && p.bottom > 0) cur = p.id;
        }
        setActive(cur === "top" ? "start" : cur);
        ticking = false;
      });
    };
    container().addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => container().removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative" id="top">
      {/* floating scene backdrop (behind panel) */}
      <div className="pointer-events-none fixed inset-0 -z-10 scene-bg" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-lines" aria-hidden="true" />
      <ParticleField />

      {/* Safe inner container */}
      <main className="relative mx-auto w-full max-w-[440px]">
        <StatusBar />

        <div id="start" className="relative" style={{ scrollMarginTop: 0 }}>
          <Hero />
        </div>

        <div id="intro" className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", scrollMarginTop: 40 }}>
          <Intro />
        </div>

        <div id="cases" className="relative" style={{ scrollMarginTop: 40 }}>
          <CaseStudies />
        </div>

        <div id="github" className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", scrollMarginTop: 40 }}>
          <GitHubStats />
        </div>

        <div id="oss" className="relative" style={{ scrollMarginTop: 40 }}>
          <OpenSource />
        </div>

        <div id="hire" className="relative" style={{ scrollMarginTop: 40 }}>
          <Hire onOpenForm={() => setHireOpen(true)} />
        </div>

        {/* footer */}
        <footer className="relative px-6 pb-28 pt-2 text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-gold/30" />
          <p className="font-mono text-[11px] text-[var(--ink-2)]">
            Crafted with Kotlin, midnight coffee &amp; 🇲🇲 pride
          </p>
          <p className="mt-1.5 text-[10px] text-[var(--ink-3)]">
            Moe Kyaw Aung · © {new Date().getFullYear()} · Compose • Firebase • Clean Arch
          </p>
        </footer>
      </main>

      {/* floating bars anchored to the centered app column */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="relative mx-auto h-full w-full max-w-[440px] sm:border-x sm:border-white/[0.04]">
          <div className="pointer-events-auto">
            <Dock active={active} />
          </div>
          <div className="pointer-events-auto">
            <Fab onClick={() => setHireOpen(true)} />
          </div>
        </div>
      </div>

      {/* hiring modal */}
      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
    </div>
  );
}
