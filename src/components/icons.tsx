type P = { className?: string };
const base = "fill-none stroke-current";

export const IconGitHub = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.46-.28-5.05-1.23-5.05-5.5 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.22 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.22-5.08 5.49.4.35.76 1.03.76 2.07v3.08c0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const IconGlobe = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.5 3.9 5.6 4 9-.1 3.4-1.4 6.5-4 9-2.6-2.5-3.9-5.6-4-9 .1-3.4 1.4-6.5 4-9Z" />
  </svg>
);

export const IconArrow = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMail = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconPhone = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconMapsPin = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconBolt = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
);

export const IconStar = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2.5 15 8l6 .9-4.4 4.3 1 6.1-5.6-3-5.6 3 1-6.1L3 8.9 9 8l3-5.5Z" />
  </svg>
);

export const IconLayer = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
  </svg>
);

export const IconFlame = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2c.5 3-1 4.5-2.4 6A7 7 0 0 0 5 13.5 7 7 0 0 0 12 21a7 7 0 0 0 7-7.5c0-1.5-.6-3-1.6-4.5-.5 1.3-1.6 2.2-2.9 2.6C15.6 6 14 3.5 12 2Z" />
  </svg>
);

export const IconHandshakeClose = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9h2l2 3h3l1-1M3 9 5 5h3l1 2m0 0L8 9m0 2h8m-3-4 2-2h1l2 2v4l-2 2m-4-4 2 2M4 14v2h16v-2" />
  </svg>
);

export const IconX = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={2} strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconSparkle = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2c.6 3.6 2.4 6.6 5 8.4C14.4 12.2 12.6 15 12 18c-.6-3-2.4-5.8-5-7.6C9.6 8.6 11.4 5.6 12 2Z" />
    <path d="M19 13c.3 1.8 1.2 3.3 2.5 4.2-1.3.9-2.2 2.4-2.5 4.2-.3-1.8-1.2-3.3-2.5-4.2 1.3-.9 2.2-2.4 2.5-4.2Z" />
  </svg>
);

export function IconCommit({ className = "h-4 w-4" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className + " " + base} strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" />
      <path d="M4 12h4.6M15.4 12H20" />
    </svg>
  );
}
export { IconCommit as default };
