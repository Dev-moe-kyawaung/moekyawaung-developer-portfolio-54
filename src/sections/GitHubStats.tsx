import { useEffect, useRef, useState } from "react";
import { GitHubHighlights, STAT_BENCH } from "../data/resume";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Reveal } from "../components/Reveal";
import { SectionLabel } from "./Intro";
import { IconGitHub, IconStar, IconFlame, IconCommit } from "../components/icons";

const PALETTE = ["#c9a84c", "#e2c56e", "#8f7a3c", "#6ea8fe", "#68d391"];

export function GitHubStats() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="px-6 pb-8 pt-4">
      <SectionLabel n="03" title="GitHub Pulse" />
      <p className="mt-2 text-[12.5px] text-[var(--ink-2)]">
        Transparent engineering, measured in throughput.
      </p>

      <div ref={ref} className="mt-6">
        <div className="grid grid-cols-3 gap-2.5">
          <CounterStat label="Repositories" target={GitHubHighlights.repos} start={inView && !reduced} />
          <CounterStat label="Repo stars" suffix="k+" decimals={1} target={1.4} start={inView && !reduced} />
          <CounterStat label="Commits" suffix="+" target={2800} start={inView && !reduced} />
        </div>

        {/* Language bench */}
        <div className="card mt-4 overflow-hidden p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gold/80">Language mix</span>
            <span className="font-mono text-[10px] text-[var(--ink-3)]">all-time</span>
          </div>
          <div className="mt-3 flex h-2.5 w-full gap-[3px] overflow-hidden rounded-full">
            {STAT_BENCH.map((s, i) => (
              <div key={s.label} title={s.label} className="h-full rounded-[2px]" style={{ width: `${s.val}%`, background: PALETTE[i % PALETTE.length] }} />
            ))}
          </div>
          <div className="mt-2.5 space-y-1.5">
            {STAT_BENCH.map((s, i) => (
              <BenchRow key={s.label} label={s.label} pct={s.val} color={PALETTE[i % PALETTE.length]} start={inView && !reduced} />
            ))}
          </div>
        </div>

        {/* streak */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-gold/15 bg-gradient-to-r from-gold/[0.06] to-transparent p-4">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15">
            <IconFlame className="h-6 w-6 text-gold" />
          </div>
          <div>
            <div className="font-grotesk text-[15px] font-bold text-[var(--ink)]">
              60-day <span className="text-gold">coding streak</span>
            </div>
            <div className="text-[11.5px] text-[var(--ink-2)]">Active every single day — a habit, not a goal.</div>
          </div>
        </div>

        {/* contribution wall */}
        <div className="card mt-4 p-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--ink-3)]">
              <IconCommit className="h-3.5 w-3.5 text-gold" /> Contribution activity
            </span>
            <span className="font-mono text-[10px] text-[var(--ink-3)]">~90 repos</span>
          </div>
          <ContributionWall start={inView && !reduced} />
        </div>

        <Reveal variant="blur">
          <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-white/[0.03] px-4 py-3">
            <span className="inline-flex items-center gap-2 text-[12.5px] text-[var(--ink-2)]">
              <IconGitHub className="h-4 w-4" /> Public @ <span className="text-[var(--ink)]">Dev-moe-kyawaung</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-gold"><IconStar className="h-3.5 w-3.5" />{GitHubHighlights.stars}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BenchRow({ label, pct, color, start }: { label: string; pct: number; color: string; start: boolean }) {
  const { ref } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const shown = start ? pct : 0;
  return (
    <div className="flex items-center gap-2">
      <span className="w-24 shrink-0 truncate text-[10.5px] text-[var(--ink-2)]">{label}</span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
        <div
          ref={ref}
          className="h-full rounded-full"
          style={{
            width: `${shown}%`,
            background: color,
            transition: "width 1.2s cubic-bezier(.22,.61,.36,1)",
          }}
        />
      </div>
      <span className="w-6 shrink-0 text-right font-mono text-[10px] text-[var(--ink-2)]">{shown}%</span>
    </div>
  );
}

function ContributionWall({ start }: { start: boolean }) {
  const cell = (v: number) => {
    const o = v <= 0 ? 0.03 : 0.1 + v * 0.85;
    return `rgba(201,168,76,${Math.min(0.98, o).toFixed(2)})`;
  };
  return (
    <div className="mt-3 flex gap-[3px]">
      {Array.from({ length: 12 }).map((_, c) => (
        <div key={c} className="flex flex-col gap-[3px]">
          {Array.from({ length: 7 }).map((_, r) => {
            const pseudoSeed = ((r + 1) * (c + 3)) % 11;
            const v = start ? (pseudoSeed > 7 ? 0.6 : pseudoSeed > 4 ? 0.35 : pseudoSeed > 2 ? 0.18 : 0) : 0;
            return (
              <div
                key={r}
                className="h-[9px] w-[9px] rounded-[2px] transition-all duration-500"
                style={{
                  background: cell(v),
                  transitionDelay: `${(c * 12 + r * 4) * 3}ms`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* ---------------- animated counter (rAF + easing) ---------------- */
function CounterStat({ label, target, suffix = "", decimals = 0, start }: {
  label: string; target: number; suffix?: string; decimals?: number; start: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) {
      setValue(target);
      return;
    }
    if (!start) return;
    const DURATION = 1300;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, reduced, target]);

  const display = decimals
    ? value.toFixed(decimals)
    : new Intl.NumberFormat("en-US").format(Math.round(value));

  return (
    <div className="card px-2.5 py-4 text-center">
      <div className="font-grotesk text-[26px] font-bold leading-none text-[var(--ink)]">
        {display}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1.5 text-[10px] uppercase tracking-wider text-[var(--ink-3)]">{label}</div>
    </div>
  );
}
