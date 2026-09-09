import { Reveal } from "../components/Reveal";

const FOCUS = [
  { emoji: "📱", title: "Mobile", body: "Kotlin · Jetpack Compose · MVVM · Clean Arch" },
  { emoji: "☁️", title: "Backend & Cloud", body: "Firebase suite · REST · Python" },
  { emoji: "🔐", title: "Security", body: "Ethical hacking · cybersecurity awareness" },
  { emoji: "🤖", title: "AI / ML", body: "Claude API · TFLite · on-device ML" },
];

const HARD_SKILLS = [
  "Kotlin", "Jetpack Compose", "Material 3", "MVVM ",
  "MVI", "Clean Architecture", "Multi-module", "Room",
  "DataStore", "Paging", "Coil", "Coroutines", "Flow",
  "Hilt", "Firestore", "FCM", "Crashlytics", "Retrofit",
  "TFLite", "GitHub Actions", "Azure DevOps", "Espresso",
];

const PRINCIPLES = [
  "60fps or explain why",
  "Reduced motion respected by default",
  "Offline is not optional",
  "Write tests humans trust",
  "Mentor, don't just review",
];

export function Intro() {
  return (
    <section className="px-6 py-14">
      <SectionLabel n="01" title="Introduction" />

      <Reveal variant="blur">
        <p className="mt-1 max-w-[19.5rem] text-[13.5px] leading-relaxed text-[var(--ink-2)]">
          I&apos;m a frontend-focused senior Android developer with{" "}
          <span className="text-[var(--ink)]">10+ years</span> shipping apps people rely on daily.
          I live at the intersection of{" "}
          <span className="text-gold">design polish</span> and{" "}
          <span className="text-gold">system design</span> — where smooth motion, honest
          architecture, and clean code meet real hardware.
        </p>
      </Reveal>

      {/* Principles strip */}
      <Reveal delay={80}>
        <div className="mt-6 rounded-2xl card p-4">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gold/80">
            Engineering principles
          </div>
          <ul className="space-y-2.5">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[13px] text-[var(--ink)]">
                <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Focus cards */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {FOCUS.map((f, i) => (
          <Reveal key={f.title} delay={i * 70} className="grid-cols-1">
            <div className="card h-full p-3.5 transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.99]">
              <div className="text-lg">{f.emoji}</div>
              <div className="mt-2 text-[12.5px] font-semibold text-[var(--ink)]">{f.title}</div>
              <div className="mt-1 text-[11.5px] leading-snug text-[var(--ink-2)]">{f.body}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Skill cloud */}
      <Reveal delay={60}>
        <div className="mt-7">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--ink-3)]">
            Core arsenal
          </div>
          <div className="flex flex-wrap gap-2">
            {HARD_SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-[var(--ink)] transition-colors duration-200 hover:border-gold/40 hover:bg-gold/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SectionLabel({ n, title, center }: { n: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "flex flex-col items-center text-center" : ""}>
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-gold/70">{n}</span>
        <span className="h-px w-6 bg-gold/40" />
      </div>
      <h2 className="mt-2 font-grotesk text-2xl font-bold tracking-tight text-[var(--ink)]">
        {title}
      </h2>
    </div>
  );
}
