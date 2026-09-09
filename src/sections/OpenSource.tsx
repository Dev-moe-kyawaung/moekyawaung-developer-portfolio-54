import { CONTRIBUTIONS } from "../data/resume";
import { Reveal } from "../components/Reveal";
import { SectionLabel } from "./Intro";
import { IconGitHub, IconGlobe, IconSparkle, IconLayer } from "../components/icons";

const PILLS = ["Open to upstream contributions", "ADRs & retrospectives", "Mentorship-first reviews"];

export function OpenSource() {
  return (
    <section className="px-6 pb-6 pt-2">
      <SectionLabel n="04" title="Open Source" />
      <p className="mt-2 text-[12.5px] text-[var(--ink-2)]">
        Building in public, giving back to the Kotlin &amp; Firebase ecosystem.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {PILLS.map((p) => (
          <span key={p} className="rounded-full border border-gold/20 bg-gold/[0.05] px-3 py-1 text-[10.5px] text-gold">
            ✦ {p}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-3.5">
        {CONTRIBUTIONS.map((c) => {
          const external = c.url.startsWith("http");
          return (
            <Reveal key={c.name} as="li">
              <a
                href={c.url}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group block rounded-2xl card p-4 transition-all duration-300 hover:-translate-y-0.5"
                style={{ ["--c" as any]: c.accent }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-lg text-base" style={{ background: `${c.accent}1f` }}>
                      {c.kind === "Community · OSS" ? "🌏" : c.kind === "Knowledge share" ? "🧠" : "🧱"}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold leading-tight text-[var(--ink)]">{c.name}</div>
                      <div className="text-[10px] uppercase tracking-wider" style={{ color: c.accent }}>{c.kind}</div>
                    </div>
                  </div>
                  {external ? (
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[var(--ink-2)] opacity-70 transition group-hover:text-[var(--ink)] group-hover:opacity-100">
                      <IconGitHub className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-black">
                      <IconGlobe className="h-4 w-4" />
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-[var(--ink-2)]">{c.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <span key={s} className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[9.5px] text-[var(--ink-2)]">{s}</span>
                  ))}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      {/* impact footer */}
      <Reveal delay={80}>
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
          <IconSparkle className="h-5 w-5 shrink-0 text-gold" />
          <p className="text-[12px] leading-relaxed text-[var(--ink-2)]">
            My work powers real community outcomes — from helping migrant workers find
            resources to giving juniors a clean architecture to study.
          </p>
        </div>
      </Reveal>

      <div className="mt-6 flex items-center justify-center gap-1.5 text-[var(--ink-3)]">
        <IconLayer className="h-4 w-4" />
        <span className="font-mono text-[10.5px]">Open-source · ~90 public repos · always shipping</span>
      </div>
    </section>
  );
}
