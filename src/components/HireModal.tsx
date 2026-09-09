import { useEffect, useState } from "react";
import { PROFILE } from "../data/resume";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { IconX, IconMail, IconBolt } from "./icons";

type Phase = "open" | "sending" | "sent";

export function HireModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [rendered, setRendered] = useState(false);
  const [phase, setPhase] = useState<Phase>("open");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (open) {
      setRendered(true);
      setPhase("open");
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => setRendered(false), 250);
      document.body.style.overflow = "";
      return () => clearTimeout(t);
    }
  }, [open]);

  const send = () => {
    if (!name.trim() || !email.trim() || !msg.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    setPhase("sending");
    // Simulated Firestore write with optimistic latency
    setTimeout(() => setPhase("sent"), 1500);
  };

  if (!rendered) return null;

  const visible = open;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label="Hire Moe Kyaw Aung"
    >
      {/* backdrop */}
      <div
        onClick={phase === "sent" ? undefined : onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ transition: "opacity .3s ease", opacity: visible ? 1 : 0 }}
      />

      {/* sheet */}
      <div
        className="relative z-10 max-h-[92svh] w-full overflow-y-auto rounded-t-[28px] border border-white/10 bg-[#14141d] p-6 shadow-2xl sm:max-w-md sm:rounded-[28px]"
        style={{
          transform: reduced ? "none" : `translateY(${visible ? "0" : "100%"})`,
          opacity: reduced ? (visible ? 1 : 0) : 1,
          transition: reduced ? "opacity .3s ease" : "transform .38s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div className="no-scrollbar">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gold">
                <IconMail className="h-3.5 w-3.5" /> Secure message
              </div>
              <h3 className="mt-1.5 font-grotesk text-2xl font-bold text-[var(--ink)]">
                {phase === "sent" ? "Message sent ✦" : "Hire Moe"}
              </h3>
              <p className="mt-0.5 text-[12px] text-[var(--ink-2)]">
                Replies to <span className="text-[var(--ink)]">{PROFILE.email}</span> — usually &lt; 24h
              </p>
            </div>
            {phase !== "sending" && (
              <button
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[var(--ink-2)] transition hover:text-[var(--ink)]"
                aria-label="Close"
              >
                <IconX className="h-4 w-4" />
              </button>
            )}
          </div>

          {phase === "sending" && (
            <SendLoader label="Writing to Firestore… publishing to Moe's inbox" />
          )}

          {phase === "sent" && (
            <SentBody onClose={onClose} />
          )}

          {phase === "open" && (
            <div className={`mt-5 space-y-3 ${shake ? "animate-shake" : ""}`}>
              <Field label="Your name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ada Lovelace" />
              <Field label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ada@team.dev" type="email" />
              <FieldArea label="Role & timeline" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Senior Android Eng · remote · can chat this week…" />
              <button
                onClick={send}
                className="pressable mt-1 flex w-full items-center justify-center gap-2 rounded-2xl gold-grad-solid px-6 py-4 text-sm font-bold text-black shadow-lg shadow-[rgba(201,168,76,0.3)] transition-transform active:scale-[0.98]"
              >
                <IconBolt className="h-4 w-4" /> Send message
              </button>
              <p className="text-center text-[10px] text-[var(--ink-3)]">
                Encrypted in transit · no spam, ever
              </p>
            </div>
          )}
        </div>
      </div>

      {shake && <style>{`@keyframes shake{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(3px)}30%,50%,70%{transform:translateX(-5px)}40%,60%{transform:translateX(5px)}}.animate-shake{animation:shake .4s}`}</style>}
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium text-[var(--ink-2)]">{label}</span>
      <input
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-[13.5px] text-[var(--ink)] outline-none transition focus:border-gold/50 focus:bg-white/[0.05]"
      />
    </label>
  );
}

function FieldArea({ label, ...rest }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium text-[var(--ink-2)]">{label}</span>
      <textarea
        rows={3}
        {...rest}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-[13.5px] text-[var(--ink)] outline-none transition focus:border-gold/50 focus:bg-white/[0.05]"
      />
    </label>
  );
}

function SendLoader({ label }: { label: string }) {
  return (
    <div className="mt-8 flex flex-col items-center py-6 text-center">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" style={{ animationDuration: "0.9s" }} />
        <div className="absolute inset-1.5 animate-spin rounded-full border-2 border-transparent border-b-gold/60" style={{ animationDuration: "0.7s", animationDirection: "reverse" }} />
        <IconMail className="h-6 w-6 text-gold" />
      </div>
      <p className="mt-5 text-[13px] text-[var(--ink-2)]">{label}</p>
      <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-[var(--ink-3)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
        stream: contacts.send(object=message)
      </div>
    </div>
  );
}

function SentBody({ onClose }: { onClose: () => void }) {
  return (
    <div className="mt-5 flex flex-col items-center py-6 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/30">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
      </div>
      <h4 className="mt-4 font-grotesk text-xl font-bold text-[var(--ink)]">Thank you!</h4>
      <p className="mt-2 max-w-[15rem] text-[13px] leading-relaxed text-[var(--ink-2)]">
        Your message is on its way. I&apos;ll personally review it and get back to you within a day.
      </p>
      <button
        onClick={onClose}
        className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:border-gold/40"
      >
        Done
      </button>
    </div>
  );
}
