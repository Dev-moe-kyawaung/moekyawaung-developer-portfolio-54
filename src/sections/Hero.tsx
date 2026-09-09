import { useEffect, useState } from "react";
import { PROFILE } from "../data/resume";
import { useTypewriter } from "../hooks/useTypewriter";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { IconMapsPin, IconGitHub, IconMail } from "../components/icons";

const ROLES = [
  "Senior Android Developer",
  "Kotlin · Jetpack Compose",
  "Clean Architecture · MVVM",
  "Firebase power user",
];

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const role = useTypewriter("Senior Android Developer @ Microsoft", {
    speedMs: 34,
    startDelay: 650,
  });
  const sub = useTypewriter("Kotlin · Jetpack Compose · Clean Architecture", {
    speedMs: 20,
    startDelay: role.done ? 400 : 2400,
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* focal avatar with golden reveal + pulse ring */}
      <div className="absolute inset-0 grid place-items-center" style={{ pointerEvents: "none" }}>
        <div
          className="floaty relative h-64 w-64 rounded-full"
          style={{ animation: reduced ? "none" : undefined }}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.5),transparent_70%)] blur-2xl" />
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-6 pt-16 pb-10">
        {/* status pill */}
        <div className="flex items-center justify-between text-[11px] text-[var(--ink-2)]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-white/5 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="pulse-ring-dot" style={{ display: reduced ? "none" : undefined }} />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to work
          </span>
          <span className="font-mono">{PROFILE.timezone}</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          {/* Avatar with orbiting gold ring */}
          <div className="hero-entrance relative mb-9 flex items-center justify-center" style={{ ["--d" as any]: "90ms" }}>
            {/* soft glow */}
            <div className="absolute inset-0 -z-10 grid place-items-center">
              <div className="h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.35),transparent_65%)] blur-xl" />
            </div>

            {/* rotation ring ticks */}
            <div
              className="orbit absolute h-40 w-40 rounded-full"
              style={{ border: "1px dashed rgba(201,168,76,0.35)" }}
            />
            <div className="relative h-32 w-32">
              {/* mirrored profile image inside clean circle */}
              <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-gold/35 shadow-2xl shadow-black/60">
                <img src="img/avatar.png" alt={PROFILE.name} className="h-full w-full object-cover" loading="eager" />
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* live pulse dot ~ available */}
              <span className="absolute right-0 top-1 flex h-4 w-4">
                <span className="pulse-ring-dot" style={{ display: reduced ? "none" : undefined }} />
                <span className="m-auto h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#0b0b10]" />
              </span>
              {/* country chip */}
              <span className="absolute -right-1 -bottom-1 grid h-9 w-9 place-items-center rounded-full bg-[#14141d] text-sm shadow-lg ring-1 ring-white/10">
                🇲🇲
              </span>
            </div>
          </div>

        <div className="hero-entrance mb-3 inline-flex items-center gap-1.5 font-mono text-xs text-gold/80" style={{ ["--d" as any]: "340ms" }}>
          <span className="opacity-50">//</span> {PROFILE.burmese}
        </div>

        <h1 className="hero-entrance font-grotesk text-[40px] font-bold leading-[1.05] tracking-tight" style={{ ["--d" as any]: "440ms" }}>
          {PROFILE.name.split(" ")[0]}
          <br />
          <span className="gold-grad">{PROFILE.name.split(" ").slice(1).join(" ")}</span>
        </h1>

        {/* Typewriter hero role */}
        <p className="hero-entrance typing-caret mt-4 min-h-[2rem] font-grotesk text-lg font-medium text-[var(--ink)]" style={{ ["--d" as any]: "540ms" }}>
          {role.text}
        </p>
        <p className="mt-1 min-h-[1.4rem] text-[13px] text-gold">
          {sub.done ? sub.text : ""}
        </p>

        {/* rotating flavor roles */}
        <div className="hero-entrance mt-3 flex h-6 items-center gap-2 text-xs text-[var(--ink-2)]" style={{ ["--d" as any]: "620ms" }}>
          <RolesCycler />
        </div>

        <div className="hero-entrance mt-6 inline-flex items-center gap-1.5 text-[13px] text-[var(--ink-2)]" style={{ ["--d" as any]: "700ms" }}>
          <IconMapsPin className="h-3.5 w-3.5 text-gold" />
          {PROFILE.location}
        </div>

        {/* blurb */}
        <p className="hero-entrance mt-5 max-w-[19rem] text-[13px] leading-relaxed text-[var(--ink-2)]" style={{ ["--d" as any]: "760ms" }}>
          {PROFILE.blob}
        </p>

        {/* CTAs */}
        <div className="hero-entrance mt-7 flex w-full max-w-[19rem] flex-col gap-3" style={{ ["--d" as any]: "820ms" }}>
            <a
              href="#hire"
              className="group relative overflow-hidden rounded-2xl gold-grad-solid px-6 py-3.5 text-center text-sm font-semibold text-black shadow-lg shadow-[rgba(201,168,76,0.25)] transition-transform active:scale-[0.98]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Let&apos;s build together
                <span className="transition-transform group-active:translate-y-px">↓</span>
              </span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:border-gold/40"
            >
              <IconGitHub className="h-4 w-4" /> View GitHub
            </a>
          </div>

          {/* mini stat strip */}
          <div className="hero-entrance mt-9 grid w-full max-w-[19rem] grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8" style={{ ["--d" as any]: "900ms" }}>
            {[
              { v: "10+", k: "Years" },
              { v: "90", k: "Repos" },
              { v: "1.4k+", k: "Stars" },
            ].map((s) => (
              <div key={s.k} className="bg-white/[0.03] px-2 py-3 text-center">
                <div className="text-lg font-semibold text-[var(--ink)]">{s.v}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--ink-3)]">{s.k}</div>
              </div>
            ))}
          </div>

          <a
              href={`mailto:${PROFILE.email}`}
              className="hero-entrance mt-6 inline-flex items-center gap-2 text-[12px] text-[var(--ink-2)] transition-colors hover:text-gold"
              style={{ ["--d" as any]: "940ms" }}
            >
              <IconMail className="h-3.5 w-3.5" /> {PROFILE.email}
            </a>
        </div>

        {/* scroll cue */}
        <div className="flex w-full flex-col items-center gap-2 pb-2 pt-6 text-[var(--ink-3)]">
          <div className="h-8 w-5 rounded-full border border-white/15 p-1">
            <div className="mx-auto h-1.5 w-1 rounded-full bg-gold motion-safe:animate-bounce" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- rotating roles ----------------------- */
function RolesCycler() {
  const reduced = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIdx((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <span className="inline-flex items-center gap-2">
      <span className="font-mono text-gold/70">&lt;/&gt;</span>
      {ROLES[idx]}
    </span>
  );
}
