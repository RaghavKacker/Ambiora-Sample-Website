export interface AmbioraEvent {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  route: string;
  datePlaceholder: string;
  teamSizePlaceholder: string;
  orbit: {
    radius: number;
    speed: number;
    initialAngle: number;
    tilt: [number, number, number]; // [rotX, rotY, rotZ]
    size: number;
  };
  visualTheme: "handoff" | "trade-rush" | "drone-o-mania" | "prompt-wars" | "case-exe";
}

export const AMBIORA_EVENTS: AmbioraEvent[] = [
  {
    id: "handoff",
    slug: "handoff",
    name: "HANDOFF",
    category: "RELAY ENGINEERING",
    tagline: "Synchronised architectural transition & code continuity",
    description:
      "A high-stakes multi-stage software engineering relay. Teams exchange modular codebases under strict constraints, testing design continuity and agile execution.",
    route: "/events/handoff",
    datePlaceholder: "Day 1 · 10:00 AM",
    teamSizePlaceholder: "Team of 3-4",
    orbit: {
      radius: 2.25,
      speed: 0.24,
      initialAngle: 0.5,
      tilt: [0.22, 0.05, 0.12],
      size: 0.22,
    },
    visualTheme: "handoff",
  },
  {
    id: "trade-rush",
    slug: "trade-rush",
    name: "TRADE RUSH",
    category: "QUANT & SIMULATION",
    tagline: "High-frequency algorithmic trading under volatile dynamics",
    description:
      "Navigate simulated global financial markets using algorithmic strategies, quantitative analysis, and real-time risk management against extreme market volatility.",
    route: "/events/trade-rush",
    datePlaceholder: "Day 1 · 02:00 PM",
    teamSizePlaceholder: "Individual / Duo",
    orbit: {
      radius: 2.8,
      speed: -0.19,
      initialAngle: 2.1,
      tilt: [-0.32, 0.1, 0.22],
      size: 0.25,
    },
    visualTheme: "trade-rush",
  },
  {
    id: "drone-o-mania",
    slug: "drone-o-mania",
    name: "DRONE-O-MANIA",
    category: "AERIAL ROBOTICS",
    tagline: "Precision flight, obstacle vectoring and autonomous navigation",
    description:
      "An intense obstacle navigation and autonomous flight arena. Pilot custom-engineered UAVs through complex geometric courses engineered to test precision aerodynamics.",
    route: "/events/drone-o-mania",
    datePlaceholder: "Day 2 · 11:00 AM",
    teamSizePlaceholder: "Team of 2-3",
    orbit: {
      radius: 3.4,
      speed: 0.16,
      initialAngle: 3.6,
      tilt: [0.18, -0.15, -0.3],
      size: 0.27,
    },
    visualTheme: "drone-o-mania",
  },
  {
    id: "prompt-wars",
    slug: "prompt-wars",
    name: "PROMPT WARS",
    category: "GENERATIVE AI",
    tagline: "Cognitive boundary probing & generative synthesis",
    description:
      "A strategic generative AI showdown. Competitors formulate hyper-calibrated system prompts to synthesize complex outputs, bypass adversarial heuristics, and solve arcane challenges.",
    route: "/events/prompt-wars",
    datePlaceholder: "Day 2 · 03:00 PM",
    teamSizePlaceholder: "Individual",
    orbit: {
      radius: 3.95,
      speed: -0.13,
      initialAngle: 4.9,
      tilt: [-0.24, -0.08, -0.18],
      size: 0.23,
    },
    visualTheme: "prompt-wars",
  },
  {
    id: "case-exe",
    slug: "case-exe",
    name: "CASE.exe",
    category: "FORENSICS & REVERSING",
    tagline: "Digital crime investigation & cryptographic reconstruction",
    description:
      "A dark investigative forensic gauntlet. Reconstruct redacted memory dumps, dissect malicious binaries, and decode encrypted transmission logs to resolve a multi-layered cyber incident.",
    route: "/events/case-exe",
    datePlaceholder: "Day 3 · 01:00 PM",
    teamSizePlaceholder: "Team of 2-4",
    orbit: {
      radius: 4.55,
      speed: 0.1,
      initialAngle: 1.2,
      tilt: [0.35, 0.12, 0.16],
      size: 0.26,
    },
    visualTheme: "case-exe",
  },
];
