export const PROFILE = {
  name: "Moe Kyaw Aung",
  burmese: "မိုးကျော်အောင်",
  role: "Senior Android Developer",
  org: "@ Microsoft Mobile",
  location: "Myanmar 🇲🇲 ↔ Bangkok 🇹🇭",
  timezone: "UTC +6:30",
  blob: "Frontend-focused senior Android engineer building production-grade apps with Kotlin, Jetpack Compose & Clean Architecture.",
  email: "moekyawaung.dev@gmail.com",
  phone: "+95 9 889 000 889",
  github: "https://github.com/Dev-moe-kyawaung",
  linkedin: "https://www.linkedin.com/in/moe-kyaw-aung-2653093a1",
  reddit: "https://www.reddit.com/user/moekyawaung",
  dribbble: "https://moekyawaung.dribbble.com",
  tiktok: "https://www.tiktok.com/@moekyawaung",
  youtube: "https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG",
  tumblr: "https://www.tumblr.com/moekyawaung",
  flag: "Code with culture. Build with purpose.",
  gradYears: 10,
  certs: "40+",
};

export type CaseStudy = {
  id: string;
  title: string;
  tagline: string;
  appName: string;
  image: string;
  accent: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  tradeoffs: { trade: string; choice: string; why: string }[];
  metrics: { k: string; v: string }[];
  live: string;
  github: string;
  verdict: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "moekyawtranslator",
    appName: "MoekyawTranslator",
    title: "AI Translation, natively on device, Myanmar-first",
    tagline: "Transformer-grade real-time translation for 8 languages — Burmese first.",
    image: "img/translator.png",
    accent: "#c9a84c",
    year: "2025",
    role: "Solo · Product & Engineering",
    stack: ["Kotlin", "Jetpack Compose", "Claude API", "Firebase", "TFLite", "WorkManager"],
    summary:
      "A real-time AI translator that translates Burmese ↔ English, Thai, Japanese, Korean, Chinese, French & German. Built with a Compose-first UI, an on-device TFLite fast-path for glance translations, and a Claude-powered LLM fast-path for human-grade nuance.",
    tradeoffs: [
      {
        trade: "Latency vs. fidelity for AI translation",
        choice: "Two-tier inference: TFLite quantized model for instant glance chips, streaming Claude request when the user confirms.",
        why: "Users read 90% of translations as confirmations, not drafts. A fast on-device guess makes the app feel instant, while LLM accuracy is reserved for deliberate actions — best average UX per joule of latency.",
      },
      {
        trade: "Scoping the architecture for growth",
        choice: "Stayed on a pragmatic single-activity + layered MVVM rather than a premature multi-module split.",
        why: "Solo velocity matters. I split modules the moment dependency boundaries started blurring, keeping the build graph flat so Compose recomposition and iteration stay fast on low-end hardware.",
      },
      {
        trade: "Offline resilience of online-dependent features",
        choice: "WorkManager-backed sync queue + Room cache with a status ledger per phrase.",
        why: "Network in Myanmar and border corridors is flaky. Users must never watch a spinner die. Leading indicators: cache-hit rate rose to 94% on weak connections.",
      },
    ],
    metrics: [
      { k: "8", v: "Languages" },
      { k: "94%", v: "Cache-hit on 3G" },
      { k: "-38%", v: "Cold start (bytecode)" },
    ],
    live: "#hire",
    github: "https://github.com/Moekyawaung2026/MoekyawTranslator",
    verdict:
      "What travel and immigrant communities are always forced to accept is slow, clumsy dictionaries — I wanted a first-class translation experience that treats Myanmar and its diaspora as core users, not an afterthought.",
  },
  {
    id: "pulsesync",
    appName: "PulseSync",
    title: "Offline-first real-time sync platform",
    tagline: "A senior-grade multi-module Android client over a live-sync backbone.",
    image: "img/pulsesync.png",
    accent: "#6ea8fe",
    year: "2024",
    role: "Lead Android Engineer",
    stack: ["Multi-module", "Compose", "Firestore", "Room", "Paging", "GitHub Actions", "Ktor"],
    summary:
      "An advanced platform demonstrating senior architecture: real-time presence + message sync, offline caching, push via FCM, crash reporting via Crashlytics, and a full CI/CD pipeline that cuts release to a one-command step.",
    tradeoffs: [
      {
        trade: "Real-time accuracy vs. mobile battery",
        choice: "Adaptive polling/streaming: Firestore listeners only live in foreground; a coalescing sync worker + exponential backoff takes over in background.",
        why: "A constantly-open socket is the fastest path to silent battery drain and a one-star review. Maintaining eventual consistency through sync + status reconciliation keeps data fresh where it matters (visible screen) and cheap where it doesn't.",
      },
      {
        trade: "Monolithic speed vs. modular clarity",
        choice: "Separated 4 Gradle modules with explicit public APIs and an enforced acyclic dependency rule.",
        why: "Fast to compile per-module, test in isolation, and on-board juniors. The cost (interface indirection) is worth it only once the team and domain stabilize — so I modularized feature modules at the fold lines, not everywhere.",
      },
      {
        trade: "Delivery speed vs. release confidence",
        choice: "GitHub Actions + Azure DevOps env-gated pipeline with unit, Compose UI, and instrumentation layers.",
        why: "Senior engineers ship reliably, not recklessly. Automation turned a 2-hour manual release into ~6 minutes while crash-free rate held above 99%, shifting human effort to the genuinely hard decisions.",
      },
    ],
    metrics: [
      { k: "6", v: "min release time" },
      { k: "99.2%", v: "Crash-free sessions" },
      { k: "4", v: "Gradle modules" },
    ],
    live: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
    github: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
    verdict:
      "A proving ground for the exact decisions that separate a mid-level 'it renders' from a senior 'it survives real users, on real phones, in real networks.'",
  },
];

export const GitHubHighlights = {
  repos: 90,
  commitsEstimated: "2,800+",
  stars: "1.4k+",
  ecosystem: "Kotlin · Compose · Firebase",
  contrib: "Microsoft-style open features & docs",
};

export type Contribution = {
  name: string;
  kind: string;
  desc: string;
  stack: string[];
  url: string;
  accent: string;
};

export const CONTRIBUTIONS: Contribution[] = [
  {
    name: "Thailand ⇄ Myanmar Workers Hub",
    kind: "Community · OSS",
    desc: "Public resource directory + tooling helping migrant workers navigate legal, work & visa information in Burmese and Thai using offline-first PWA + Firebase Auth.",
    stack: ["Kotlin", "Compose", "Firebase", "PWA"],
    url: "https://github.com/Moekyawaung2026/thailand-resources-myanmar-workers",
    accent: "#68d391",
  },
  {
    name: "PulseSync Android",
    kind: "Foundation · Multi-module",
    desc: "Reference Clean Architecture client with instrumentation coverage — open-sourced as a learning template for mentees and the Compose community.",
    stack: ["Multi-module", "MVVM", "Room", "CI/CD"],
    url: "https://github.com/Dev-moe-kyawaung/pulsesync-android",
    accent: "#6ea8fe",
  },
  {
    name: "Community mentoring & reviews",
    kind: "Knowledge share",
    desc: "Actively review PRs, write architecture decision records, and mentor junior developers moving toward Microsoft-scale engineering standards.",
    stack: ["Code review", "ADRs", "Docs"],
    url: "#hire",
    accent: "#f6ad55",
  },
];

export const STAT_BARS = [
  { label: "Kotlin", pct: 46, pctLabel: "46%" },
  { label: "Java", pct: 18, pctLabel: "18%" },
  { label: "Kotlin Script / Gradle", pct: 14, pctLabel: "14%" },
  { label: "Dart / JS", pct: 12, pctLabel: "12%" },
  { label: "Python (tooling)", pct: 10, pctLabel: "10%" },
];

export const STAT_BENCH = [
  { label: "Kotlin", val: 46 },
  { label: "Java", val: 18 },
  { label: "Gradle", val: 14 },
  { label: "Dart / JS", val: 12 },
  { label: "Python", val: 10 },
];
