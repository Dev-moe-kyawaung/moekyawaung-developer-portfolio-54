import { PROFILE } from "../data/resume";
import { Reveal } from "../components/Reveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SectionLabel } from "./Intro";
import { IconMail, IconPhone, IconGitHub, IconGlobe } from "../components/icons";

const CHANNELS = [
  { icon: IconMail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: IconPhone, label: "WhatsApp / Phone", value: PROFILE.phone, href: "tel:959889000889" },
  { icon: IconGitHub, label: "GitHub", value: "Dev-moe-kyawaung", href: PROFILE.github },
  { icon: IconGlobe, label: "LinkedIn", value: "Moe Kyaw Aung", href: PROFILE.linkedin },
];

export function Hire({ onOpenForm }: { onOpenForm: () => void }) {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="px-6 pb-24 pt-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[30px] border border-gold/20 bg-gradient-to-b from-white/[0.04] to-transparent p-5">
          <div
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.25), transparent 70%)" }}
          />
          <div className="animate-gradient relative">
            <SectionLabel n="05" title="Let's build together" center />
          </div>

          <p className="relative mt-4 text-center text-[13.5px] leading-relaxed text-[var(--ink-2)]">
            I&apos;m currently open to <span className="text-emerald-300">senior</span> and{" "}
            <span className="text-emerald-300">staff-level</span> Android opportunities — remote-first,
            or across Myanmar &amp; Thailand corridor. If you build mobile software users love, let&apos;s
            talk about what I can ship for your team within the first 30 days.
          </p>

          <div className="relative mx-auto mt-6 max-w-[16rem]">
            <button
              onClick={onOpenForm}
              className="pressable group relative w-full overflow-hidden rounded-2xl gold-grad-solid px-6 py-4 text-sm font-bold text-black shadow-lg shadow-[rgba(201,168,76,0.3)] transition-transform active:scale-[0.98]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                ✦ Start a conversation
              </span>
            </button>
            <p className="mt-2 text-center text-[10px] text-[var(--ink-3)]">
              Avg. reply &lt; 24h · usually 2h
            </p>
          </div>

          {/* quick channels */}
          <div className="relative mt-6 grid grid-cols-2 gap-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition-colors hover:border-gold/35"
              >
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-gold/10 text-gold transition group-hover:bg-gold/20">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="mt-2 text-[11.5px] font-semibold text-[var(--ink)]">{c.label}</div>
                <div className="truncate text-[10px] text-[var(--ink-2)]">{c.value}</div>
              </a>
            ))}
          </div>

          {!reduced && (
            <div className="relative mt-6 text-center">
              <div className="mx-auto flex max-w-[9rem] flex-col items-center">
                <div className="font-mono text-[9px] text-[var(--ink-3)]">availability</div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[78%] rounded-full gold-grad-solid" />
                </div>
                <div className="mt-1 text-[9px] text-gold">78% focus capacity</div>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
