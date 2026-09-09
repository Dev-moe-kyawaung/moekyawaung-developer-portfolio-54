import { CASE_STUDIES, type CaseStudy } from "../data/resume";
import { useInView } from "../hooks/useInView";
import { useLongPress } from "../hooks/useLongPress";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTilt } from "../hooks/useTilt";
import { Reveal } from "../components/Reveal";
import { SectionLabel } from "./Intro";
import { IconGitHub, IconGlobe, IconBolt } from "../components/icons";

export function CaseStudies() {
  return (
    <section className="px-6 pb-4 pt-8">
      <SectionLabel n="02" title="Case Studies" />
      <p className="mt-2 text-[12.5px] text-[var(--ink-2)]">
        Hold any link to peek before you leap 👆
      </p>

      <div className="mt-6 space-y-10">
        {CASE_STUDIES.map((cs) => (
          <StudyCard key={cs.id} cs={cs} />
        ))}
      </div>
    </section>
  );
}

function StudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <article>
      {/* Top summary + showcase with long-press preview */}
      <Showcase cs={cs} />

      {/* trade-off "decision" ledger */}
      <div className="mt-5">
        <div className="mb-2.5 flex items-center gap-2">
          <IconBolt className="h-4 w-4 text-gold" />
          <span className="text-[12px] font-semibold uppercase tracking-widest text-gold">
            Technical trade-offs
          </span>
        </div>
        <div className="space-y-3">
          {cs.tradeoffs.map((t, i) => (
            <TradeCard key={i} trade={t.trade} choice={t.choice} why={t.why} />
          ))}
        </div>
      </div>

      {/* verdict quote */}
      <Reveal delay={60}>
        <blockquote className="relative mt-5 rounded-2xl border border-gold/15 bg-gold/[0.04] p-4 pl-5">
          <span className="absolute left-0 top-0 h-full w-1 rounded-full bg-gold/70" />
          <p className="text-[12.5px] italic leading-relaxed text-[var(--ink-2)]">
            {cs.verdict}
          </p>
        </blockquote>
      </Reveal>
    </article>
  );
}

/* ---------------- Showcase area (image + long-press links) ---------------- */
function Showcase({ cs }: { cs: CaseStudy }) {
  const reduced = usePrefersReducedMotion();
  const tilt = useTilt<HTMLDivElement>({ max: 6 });

  return (
    <Reveal>
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerEnter={tilt.onPointerEnter}
        onPointerLeave={tilt.onPointerLeave}
        className="group overflow-hidden rounded-[26px] border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* image with parallax tilt */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] text-gold backdrop-blur">
            {cs.year}
          </div>
          <img
            src={cs.image}
            alt={cs.appName}
            loading="lazy"
            className="h-full w-full object-cover shimmer"
            draggable={false}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: `radial-gradient(600px at 50% 0%, ${cs.accent}22, transparent 70%)` }}
            aria-hidden="true"
          />
        </div>

        <div className="p-4">
          <div className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: cs.accent }}>
            {cs.appName}
          </div>
          <h3 className="mt-1.5 font-grotesk text-lg font-bold leading-snug text-[var(--ink)]">
            {cs.title}
          </h3>
          <p className="mt-1 text-[9px] text-[var(--ink-3)]">{cs.role}</p>
          <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--ink-2)]">{cs.summary}</p>

          {/* stack chips */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {cs.stack.map((s) => (
              <span key={s} className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-[var(--ink-2)]">
                {s}
              </span>
            ))}
          </div>

          {/* long-press action row */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <LongPressLink
              href={cs.github}
              kind="github"
              color={cs.accent}
              vibrate
              reduced={reduced}
              label="GitHub repo"
            />
            <LongPressLink
              href={cs.live}
              kind="live"
              color={cs.accent}
              reduced={reduced}
              label={cs.live === "#hire" ? "In hiring CTA ↓" : "Live preview"}
            />
          </div>
          <p className="mt-2 text-center text-[9.5px] text-[var(--ink-3)]">
            Press &amp; hold to preview · long-press fires without opening
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------- individual trade-off row ---------------- */
function TradeCard({ trade, choice, why }: { trade: string; choice: string; why: string }) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.4 });
  return (
    <li
      ref={ref}
      className="card overflow-hidden border-l-0 p-4"
      style={{
        borderLeft: `2px solid rgba(201,168,76,${inView ? 0.7 : 0.15})`,
        transition: "border-color .5s ease",
      }}
    >
      <div className="text-[12px] font-medium text-[var(--ink)]">{trade}</div>
      <div className="mt-2 flex gap-2 text-[12px]">
        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
        <div className="leading-relaxed text-[var(--ink)]">{choice}</div>
      </div>
      <div className="mt-2 flex gap-2 text-[11.5px] leading-relaxed text-[var(--ink-2)]">
        <span className="mt-0.5 shrink-0 font-mono text-gold/60 text-[10px]">▸why</span>
        <span>{why}</span>
      </div>
    </li>
  );
}

/* ---------------- long-press reveal link button ---------------- */
function LongPressLink({
  href,
  kind,
  color,
  reduced,
  label,
  vibrate,
}: {
  href: string;
  kind: "github" | "live";
  color: string;
  reduced: boolean;
  label: string;
  vibrate?: boolean;
}) {
  const { handlers, progress, longPressed } = useLongPress({
    onRelease: () => {
      if (navigator.vibrate) navigator.vibrate(20);
    },
  });
  void vibrate; // haptics cue used inline elsewhere

  // Short "dest goes to" readout for the peek preview.
  let dest = label;
  if (href.startsWith("http")) {
    try {
      dest = new URL(href).host.replace("www.", "");
    } catch {
      /* keep label */
    }
  }
  const isInternal = href.startsWith("#");

  return (
    <a
      href={href}
      target={isInternal ? undefined : "_blank"}
      rel="noreferrer"
      {...handlers}
      onClick={(e) => {
        if (longPressed) e.preventDefault(); // held-to-peek, tape again to actually go
      }}
      // Keep rounded bg; overflow hidden is avoided so the peek chip can rise above.
      className="pressable group relative flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-[12.5px] font-medium text-[var(--ink)]"
      style={{
        boxShadow: longPressed ? `0 0 0 1px ${color}, 0 0 24px ${color}55` : undefined,
        transform: longPressed ? "translateY(-1px)" : undefined,
        transition: "transform .15s ease, box-shadow .2s ease",
      }}
      aria-label={`Open ${label}${isInternal ? "" : " for " + label}`}
    >
      {/* hold progress bar */}
      {!reduced && (
        <span
          className="press-progress overflow-hidden rounded-xl absolute inset-y-0 left-0"
          style={{
            width: `${Math.round(progress * 100)}%`,
            background: `linear-gradient(90deg, ${color}22, ${color}55)`,
          }}
        />
      )}
      <span className="pointer-events-none absolute left-2 top-1.5 text-[8px] uppercase tracking-[0.12em] text-[var(--ink-3)]">
        {kind === "github" ? "hold · repo" : "hold · link"}
      </span>

      {/* default state */}
      {!longPressed && (
        <>
          {kind === "github" ? (
            <IconGitHub className="h-4 w-4" />
          ) : (
            <IconGlobe className="h-4 w-4" />
          )}
          <span className="relative z-10">{label}</span>
        </>
      )}

      {/* peek state while holding */}
      <span
        className="pointer-events-none relative z-10 flex items-center gap-2 transition-all duration-150"
        style={{ opacity: longPressed ? 1 : 0, height: longPressed ? "auto" : 0, width: longPressed ? "auto" : 0 }}
      >
        <span className="grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold" style={{ background: color }}>
          {kind === "github" ? "GH" : isInternal ? "→" : "↗"}
        </span>
        <span className="font-mono text-[10.5px] text-[var(--ink)]">
          {isInternal ? "scrolls to Hire ↔" : dest}
          {!isInternal && <span className="ml-1.5 text-[9px] text-[var(--ink-3)]">opens new tab</span>}
        </span>
      </span>
    </a>
  );
}


