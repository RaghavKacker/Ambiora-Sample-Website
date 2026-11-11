export type EventCategoryFilter =
  | "All"
  | "Technology"
  | "Business"
  | "Robotics"
  | "Artificial Intelligence"
  | "Mystery & Logic";

export interface CaseSuspect {
  id: string;
  name: string;
  alias: string;
  role: string;
  threatLevel: "Elevated" | "High" | "Critical";
  alibi: string;
  motive: string;
  status: "Under Surveillance" | "Interrogated" | "Flagged";
}

export interface CaseTimelineEntry {
  time: string;
  phase: string;
  description: string;
  anomalyLevel: "Low" | "Medium" | "High" | "Critical";
  systemTarget: string;
}

export interface CaseEvidenceItem {
  id: string;
  title: string;
  category: "Memory Dump" | "Network PCAP" | "Binary Hex" | "Access Audit";
  hash: string;
  fileSize: string;
  status: "Decrypted" | "Redacted" | "Verified";
  previewSnippet: string;
}

export interface CaseRound {
  roundNumber: string;
  title: string;
  duration: string;
  focus: string;
  deliverable: string;
}

export interface CaseSpecialData {
  incidentBriefing: string;
  suspects: CaseSuspect[];
  timeline: CaseTimelineEntry[];
  evidence: CaseEvidenceItem[];
  rounds: CaseRound[];
}

export interface AmbioraEvent {
  id: string;
  name: string;
  slug: string;
  category: string;
  filterCategory: "Technology" | "Business" | "Robotics" | "Artificial Intelligence" | "Mystery & Logic";
  index: string;
  tagline: string;
  description: string;
  route: string;
  image: string;
  imageAlt: string;
  imageSource: string;
  datePlaceholder: string;
  teamSizePlaceholder: string;
  accentSnippet: string;
  duration: string;
  eligibility: string;
  requirements: string[];
  aboutParagraphs: string[];
  howItWorks: { stage: string; title: string; description: string }[];
  rules: string[];
  prizePlaceholder: string;
  isTeamEvent: boolean;
  minTeamMembers: number;
  maxTeamMembers: number;
  metrics: { label: string; value: string }[];
  caseSpecialData?: CaseSpecialData;
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
    filterCategory: "Technology",
    index: "01",
    tagline: "Synchronised architectural transition & code continuity",
    description:
      "A high-stakes multi-stage software engineering relay. Teams exchange modular codebases under strict constraints, testing design continuity and agile execution.",
    route: "/events/handoff",
    image: "/events/handoff.jpg",
    imageAlt: "Software engineers collaborating across multiple display screens in an engineering marathon",
    imageSource: "Unsplash - Annie Spratt (Collaborative coding environment)",
    datePlaceholder: "Day 1 · 10:00 AM",
    teamSizePlaceholder: "Team of 3-4",
    accentSnippet: "relay://init --verify-architecture",
    duration: "4 Hours Continuous",
    eligibility:
      "Open to all enrolled undergraduate and postgraduate students. Basic proficiency with Git and at least one mainstream programming stack (TypeScript, Python, Go, Rust, or C++) recommended.",
    requirements: [
      "Personal development laptop with Git, Node.js / Python / Go pre-installed",
      "Active GitHub or GitLab account with SSH authentication configured",
      "Command-line literacy and modular architecture awareness",
    ],
    aboutParagraphs: [
      "In modern software engineering, writing clean code from scratch is only half the battle. The true measure of elite engineering teams lies in deciphering, taking ownership of, and seamlessly extending complex, unfamiliar architectures under relentless production deadlines.",
      "HANDOFF simulates the reality of production system evolution. At scheduled milestones, teammates are rotated out or codebases are handed over to peer developers under strict operational constraints. You must maintain architectural coherence, pass rigorous automated test suites, and deliver production-ready features.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Architecture Scaffolding",
        description:
          "The initial team architect designs the modular domain boundaries, defines contract schemas, and commits the initial repository foundation within the first 60 minutes.",
      },
      {
        stage: "Stage 02",
        title: "The Handoff Rotation",
        description:
          "All workstations lock. The repository is pushed, and teammates rotate workstations. New developers have exactly 10 minutes of silent code inspection before writing their first commit.",
      },
      {
        stage: "Stage 03",
        title: "Feature Injection & Refactor",
        description:
          "Organizers inject sudden unexpected feature specifications and edge cases. Developers must extend the codebase without breaking inherited unit contracts.",
      },
      {
        stage: "Stage 04",
        title: "Automated Integration & Benchmark",
        description:
          "Final repositories are subjected to an automated test-runner analyzing code coverage, latency benchmarks, cyclomatic complexity, and documentation clarity.",
      },
    ],
    rules: [
      "All code must be authored inside the official version control repository provided at start.",
      "Direct verbal communication is strictly prohibited during the 10-minute transition phase.",
      "Every pull request must maintain clean git history and pass the pre-configured CI pipeline.",
      "Third-party libraries must be documented in package manifests; no proprietary closed-source code.",
      "Judges' decision on architecture maintainability and clean abstractions is final.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 3,
    maxTeamMembers: 4,
    metrics: [
      { label: "Continuity", value: "4 Stages" },
      { label: "Architecture", value: "Modular" },
      { label: "Constraints", value: "Strict Sandboxing" },
    ],
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
    filterCategory: "Business",
    index: "02",
    tagline: "High-frequency algorithmic trading under volatile dynamics",
    description:
      "Navigate simulated global financial markets using algorithmic strategies, quantitative analysis, and real-time risk management against extreme market volatility.",
    route: "/events/trade-rush",
    image: "/events/trade-rush.jpg",
    imageAlt: "Live financial market trading charts and candlestick quantitative technical indicators",
    imageSource: "Unsplash - Maxim Hopman (Financial markets & algorithmic trading)",
    datePlaceholder: "Day 1 · 02:00 PM",
    teamSizePlaceholder: "Individual / Duo",
    accentSnippet: "quant://orderbook --depth-level 2",
    duration: "3 Hours (3 Market Sessions)",
    eligibility:
      "Open to all registered university students interested in finance, quantitative economics, data science, and high-stakes algorithmic decision making.",
    requirements: [
      "Laptop with stable browser connectivity",
      "Fundamental understanding of order books, bid-ask spreads, and candlestick patterns",
      "100% simulated sandbox liquidity provided — no real capital required",
    ],
    aboutParagraphs: [
      "Financial markets are living, breathing ecosystems where microsecond decisions separate triumph from catastrophic drawdown. TRADE RUSH immerses participants into a high-fidelity synthetic exchange matching engine reflecting true orderbook dynamics.",
      "Traders will confront sudden liquidity freezes, interest rate shocks, news flash anomalies, and flash crashes. Whether you trade through mathematical algorithms or intuitive price-action discipline, surviving the volatility requires ironclad risk management.",
    ],
    howItWorks: [
      {
        stage: "Session 01",
        title: "Market Discovery & Price Formation",
        description:
          "Traders receive initial simulated balance of $1,000,000 and trade baseline asset pairs to gauge orderbook depth, slippage parameters, and liquidity providers.",
      },
      {
        stage: "Session 02",
        title: "Macroeconomic Shock Injections",
        description:
          "The central exchange engine triggers simulated rate hikes, earnings surprises, and synthetic commodity supply disruptions testing hedging capabilities.",
      },
      {
        stage: "Session 03",
        title: "Final High-Volatility Blitz",
        description:
          "Spreads widen and volatility multiplies 5x. Participants execute algorithmic or discretionary trades to optimize their final Sharpe ratio and portfolio equity.",
      },
    ],
    rules: [
      "Trading accounts are initialized with equal simulated balance; deposit tampering leads to immediate disqualification.",
      "Maximum allowable leverage is capped at 10x; margin liquidation is automatically enforced.",
      "Participants are ranked primarily by risk-adjusted return (Sharpe Ratio) and secondarily by net portfolio value.",
      "Automated scripts must connect solely via the designated WebSocket API sandbox.",
      "Collusion between independent trading accounts to artificially pump prices is strictly banned.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: false,
    minTeamMembers: 1,
    maxTeamMembers: 2,
    metrics: [
      { label: "Tick Resolution", value: "Microsecond" },
      { label: "Execution Model", value: "Simulated Exchange" },
      { label: "Dynamics", value: "Extreme Volatility" },
    ],
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
    filterCategory: "Robotics",
    index: "03",
    tagline: "Precision flight, obstacle vectoring and autonomous navigation",
    description:
      "An intense obstacle navigation and autonomous flight arena. Pilot custom-engineered UAVs through complex geometric courses engineered to test precision aerodynamics.",
    route: "/events/drone-o-mania",
    image: "/events/drone-o-mania.jpg",
    imageAlt: "FPV racing drone hovering in high-precision aerobatic flight arena",
    imageSource: "Unsplash - Diana Măceşanu (Aerobatic racing quadcopter)",
    datePlaceholder: "Day 2 · 11:00 AM",
    teamSizePlaceholder: "Team of 2-3",
    accentSnippet: "aero://vectoring --gyro-calibrated",
    duration: "Full Day (Qualifiers + Finals)",
    eligibility:
      "Open to university student aeromodelling clubs, robotics teams, and individual FPV enthusiasts.",
    requirements: [
      "Custom or pre-built quadcopter conforming to safety weight brackets (sub-500g)",
      "2.4GHz remote controller & 5.8GHz video transmitter compliant with competition frequency slots",
      "Spare LiPo battery packs and dedicated fire-safe charging container",
    ],
    aboutParagraphs: [
      "A celebration of mechanical engineering, electronic speed control, and razor-sharp pilot reflexes. DRONE-O-MANIA turns the open festival arena into an aerodynamic proving ground featuring illuminated geometric airgates, vertical dive towers, and slalom tunnels.",
      "Competitors must balance extreme throttle thrust against gyro-stabilized vector precision. A single millimeter deviation at 80 km/h can mean the difference between a podium lap and carbon fiber wreckage.",
    ],
    howItWorks: [
      {
        stage: "Phase 01",
        title: "Technical Scrutineering & Failsafe Audit",
        description:
          "Every drone undergoes weight calibration, frame integrity inspection, prop-guard checks, and RF frequency fail-safe verification before clearing for takeoff.",
      },
      {
        stage: "Phase 02",
        title: "Time-Attack Qualifying Heats",
        description:
          "Pilots run individual solo timed laps through the lighted 3D gate course. The fastest clean 3-lap average establishes the championship bracket seeding.",
      },
      {
        stage: "Phase 03",
        title: "Championship Head-to-Head Finals",
        description:
          "Top-seeded pilots race simultaneously in double-elimination heats featuring sudden obstacle variations and tight hairpin maneuvers.",
      },
    ],
    rules: [
      "Pilots must operate strictly from the designated flight safety mesh enclosure.",
      "Emergency disarm kill-switch must be demonstrated and functional prior to every flight heat.",
      "Skipping an illuminated course gate incurs an immediate 5-second penalty unless re-looped cleanly.",
      "LiPo battery charging is strictly confined to the official fireproof charging paddock.",
      "Unsportsmanlike frequency jamming or video band hopping leads to immediate forfeiture.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
    metrics: [
      { label: "Telemetry", value: "3-Axis Vector" },
      { label: "Course Arena", value: "Geometric Obstacles" },
      { label: "Control Mode", value: "Manual & Auto" },
    ],
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
    filterCategory: "Artificial Intelligence",
    index: "04",
    tagline: "Cognitive boundary probing & generative synthesis",
    description:
      "A strategic generative AI showdown. Competitors formulate hyper-calibrated system prompts to synthesize complex outputs, bypass adversarial heuristics, and solve arcane challenges.",
    route: "/events/prompt-wars",
    image: "/events/prompt-wars.jpg",
    imageAlt: "Abstract generative 3D visualization representing deep neural network latent space",
    imageSource: "Unsplash - Milad Fakurian (Generative AI 3D abstraction)",
    datePlaceholder: "Day 2 · 03:00 PM",
    teamSizePlaceholder: "Individual",
    accentSnippet: "neural://synthesize --bypass-filter",
    duration: "2.5 Hours (3 Thematic Rounds)",
    eligibility:
      "Open to all individual programmers, designers, AI practitioners, and cognitive boundary explorers.",
    requirements: [
      "Laptop with contemporary web browser",
      "Familiarity with foundation model architectures, system instructions, and token semantics",
      "All necessary inference sandbox API keys are provided on-site by festival organizers",
    ],
    aboutParagraphs: [
      "As artificial intelligence evolves from novelty to core infrastructure, prompt formulation has emerged as a distinct cognitive discipline. PROMPT WARS tests participants' conceptual precision, linguistic engineering, and understanding of transformer attention dynamics.",
      "Rather than simple text completion, competitors navigate adversarial prompt injection defenses, multi-modal semantic reverse engineering, and structured output formatting challenges where every single token counts.",
    ],
    howItWorks: [
      {
        stage: "Round 01",
        title: "Latent Space Reverse Engineering",
        description:
          "Participants are presented with complex synthetic multi-modal artifacts and must deduce the minimal prompt vector capable of generating matching semantic representations.",
      },
      {
        stage: "Round 02",
        title: "Adversarial Guardrail Probing",
        description:
          "A locked AI system defends secret tokens behind layered guardrails. Competitors formulate indirect contextual prompts to elicit confidential flags without triggering safety filters.",
      },
      {
        stage: "Round 03",
        title: "Generative Algorithmic Synthesis",
        description:
          "Solve complex algorithmic logic, code synthesis, and mathematical proofs strictly through one-shot prompt architecture evaluated by an automated deterministic grader.",
      },
    ],
    rules: [
      "All prompts must be submitted directly through the festival's verified tournament dashboard.",
      "Direct copy-pasting of pre-computed external jailbreak repositories is strictly forbidden.",
      "Evaluations are performed by automated token-distance metrics and blind expert evaluation.",
      "Submissions exceeding token budget limits will suffer programmatic penalty scaling.",
      "Judges reserve the right to inspect prompt iteration history to verify human authorship.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: false,
    minTeamMembers: 1,
    maxTeamMembers: 1,
    metrics: [
      { label: "Evaluation", value: "Adversarial Heuristic" },
      { label: "Synthesis", value: "Multi-Modal" },
      { label: "Latent Depth", value: "Unrestricted" },
    ],
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
    filterCategory: "Mystery & Logic",
    index: "05",
    tagline: "Digital crime investigation & cryptographic reconstruction",
    description:
      "A dark investigative forensic gauntlet. Reconstruct redacted memory dumps, dissect malicious binaries, and decode encrypted transmission logs to resolve a multi-layered cyber incident.",
    route: "/events/case-exe",
    image: "/events/case-exe.jpg",
    imageAlt: "Digital forensics evidence terminal displaying cryptographic code stream and dark investigation environment",
    imageSource: "Unsplash - Clint Patterson (Cyber forensics & threat investigation)",
    datePlaceholder: "Day 3 · 01:00 PM",
    teamSizePlaceholder: "Team of 2-4",
    accentSnippet: "forensic://docket --decrypt-payload",
    duration: "4 Hours Intensive Gauntlet",
    eligibility:
      "Open to student teams passionate about digital forensics, cybersecurity, reverse engineering, and investigative deduction.",
    requirements: [
      "Laptop with Linux (native/WSL/VM) or macOS terminal environment",
      "Analysis utilities installed: Wireshark, Volatility, Ghidra or Radare2, Hex Editor",
      "Cryptographic decoding tools (CyberChef, OpenSSL, Python cryptanalysis libraries)",
    ],
    aboutParagraphs: [
      "At 02:14 UTC, telemetry from the primary campus server farm went silent. Critical industrial control firmware was modified, encrypted payloads were staged in swap partitions, and unauthorized exfiltration tunnels were detected.",
      "In CASE.exe, your team steps into the shoes of elite digital forensic investigators. Sift through realistic memory captures, analyze corrupt packet dumps, untangle web server access audits, and interrogate suspect alibis to reconstruct the complete attack chain and identify the culprit.",
    ],
    howItWorks: [
      {
        stage: "Round 01",
        title: "Incident Triage & Memory Dump Analysis",
        description:
          "Extract volatile RAM snapshots, identify injected process handles, reconstruct bash history, and recover corrupted master file table (MFT) records.",
      },
      {
        stage: "Round 02",
        title: "Network Stream & Packet Reconstruction",
        description:
          "Parse encrypted PCAP captures, identify DNS tunneling exfiltration vectors, and reconstruct compromised TLS session keys to reveal exfiltrated blueprints.",
      },
      {
        stage: "Round 03",
        title: "Binary Dissection & Payload Reversing",
        description:
          "Decompile obfuscated executable artifacts, discover hardcoded command-and-control IP endpoints, and defeat custom XOR encryption routines.",
      },
      {
        stage: "Round 04",
        title: "Suspect Cross-Examination & Grand Verdict",
        description:
          "Synthesize timeline telemetry with employee access logs to cross-examine suspect alibis, eliminate decoys, and present formal attribution to the jury.",
      },
    ],
    rules: [
      "All forensic artifacts must maintain strict cryptographic hash verification (SHA-256).",
      "Attacking competition scoring infrastructure or other teams' networks results in immediate disqualification.",
      "Evidence points are awarded based on reproducible methodological rigor, not guesswork.",
      "Final attribution requires verifiable proof connecting suspect access credentials to the physical payload deployment.",
      "The lead investigator must submit an official incident report before the final bell.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 4,
    metrics: [
      { label: "Evidence Type", value: "Memory Dumps" },
      { label: "Cryptanalysis", value: "Multi-Layered" },
      { label: "Audit Protocol", value: "Forensic Chain" },
    ],
    caseSpecialData: {
      incidentBriefing:
        "CASE FILE #2026-NX-709: Unauthorized persistence module identified on Campus Primary Substation SCADA controller. Firmware hash altered at 02:47 UTC. Classified experimental drone telemetry extracted via covert DNS tunneling.",
      suspects: [
        {
          id: "suspect-1",
          name: "Dr. Julian Vance",
          alias: "SPECTER-01",
          role: "Lead Firmware Architect, Robotics Lab",
          threatLevel: "High",
          alibi: "Claims to have been off-site calibrating sensor telemetry in the outdoor drone cage during the entire blackout window.",
          motive: "Disputed patent ownership over high-efficiency drone propulsion vector algorithms.",
          status: "Under Surveillance",
        },
        {
          id: "suspect-2",
          name: "Elena Rostova",
          alias: "CIPHER-FOX",
          role: "Contract Security Auditor, External Triage",
          threatLevel: "Critical",
          alibi: "Logged in via corporate VPN conducting scheduled routine vulnerability scanning on peripheral subnets.",
          motive: "Recent access logs show unauthorized downloads of encrypted cryptographic key rings.",
          status: "Flagged",
        },
        {
          id: "suspect-3",
          name: "Marcus Chen",
          alias: "VOID_RUNNER",
          role: "Systems Administrator, Server Cluster",
          threatLevel: "Elevated",
          alibi: "Reported an unscheduled power breaker trip on server rack 4B and filed an emergency ticket at 02:50 UTC.",
          motive: "Repeated disciplinary reprimands regarding unauthorized staging scripts on production nodes.",
          status: "Interrogated",
        },
      ],
      timeline: [
        {
          time: "02:14 UTC",
          phase: "Initial Perimeter Probe",
          description: "Anomalous SYN flood detected targeting SCADA port 502; firewall failsafe entered bypass state.",
          anomalyLevel: "Low",
          systemTarget: "Edge Firewall [fw-ext-01]",
        },
        {
          time: "02:47 UTC",
          phase: "Firmware Flash Injection",
          description: "Internal cryptographic signature verified by invalid root certificate. Custom payload injected into memory.",
          anomalyLevel: "Critical",
          systemTarget: "Substation Controller [plc-core-09]",
        },
        {
          time: "03:12 UTC",
          phase: "Covert Exfiltration Tunnel",
          description: "High-volume TXT record queries resolved against rogue dynamic nameserver; 180MB exfiltrated.",
          anomalyLevel: "High",
          systemTarget: "Internal DNS Resolver [dns-int-02]",
        },
        {
          time: "03:55 UTC",
          phase: "Emergency System Quarantine",
          description: "Automated network segmentation triggered; memory snapshot captured before hard power severance.",
          anomalyLevel: "Medium",
          systemTarget: "Primary Subnet [10.14.0.0/16]",
        },
      ],
      evidence: [
        {
          id: "EVID-01",
          title: "Memory Core Dump [core_dump_0247.raw]",
          category: "Memory Dump",
          hash: "SHA-256: 4f88b901a8ef34c99b82e4e1",
          fileSize: "512.4 MB",
          status: "Verified",
          previewSnippet: "0x00007FFF: 4D 5A 90 00 03 00 00 00 ... [INJECTED DLL HANDLE]",
        },
        {
          id: "EVID-02",
          title: "Promiscuous PCAP Stream [capture_dns_tunnel.pcap]",
          category: "Network PCAP",
          hash: "SHA-256: 9e32a67bc012df541aa89012",
          fileSize: "84.2 MB",
          status: "Decrypted",
          previewSnippet: "QUERY: 6137663265...exfil.darktelemetry.net IN TXT -> BASE64 PAYLOAD",
        },
        {
          id: "EVID-03",
          title: "Decompiled Binary Stub [scada_guard.bin]",
          category: "Binary Hex",
          hash: "SHA-256: 12abcf8904712ee4999881fa",
          fileSize: "1.8 MB",
          status: "Decrypted",
          previewSnippet: "void trigger_payload() { xor_decrypt(0xDEADBEEF, 0x42); connect_c2(); }",
        },
        {
          id: "EVID-04",
          title: "Physical Badge Access Log [rfid_door_log.csv]",
          category: "Access Audit",
          hash: "SHA-256: dd891a27e00941ab21199a00",
          fileSize: "420 KB",
          status: "Redacted",
          previewSnippet: "02:41:19 UTC | DOOR: SERVER_ROOM_B | BADGE_ID: [REDACTED_VANCE] | SUCCESS",
        },
      ],
      rounds: [
        {
          roundNumber: "01",
          title: "Volatile Memory Triage",
          duration: "60 Mins",
          focus: "RAM dump reconstruction, process injection discovery, MFT recovery",
          deliverable: "Identified malicious PID and recovered in-memory config payload",
        },
        {
          roundNumber: "02",
          title: "Network & Protocol Dissection",
          duration: "60 Mins",
          focus: "DNS tunneling reconstruction, TLS session key decryption",
          deliverable: "Reconstructed exfiltrated archive files and decoded payload hashes",
        },
        {
          roundNumber: "03",
          title: "Reverse Engineering & Cryptanalysis",
          duration: "60 Mins",
          focus: "Static & dynamic binary analysis, custom XOR cipher defeat",
          deliverable: "Extracted C2 server IP address and decrypted backdoor kill-switch",
        },
        {
          roundNumber: "04",
          title: "Grand Jury Attribution Verdict",
          duration: "60 Mins",
          focus: "Correlating technical forensic artifacts with suspect access logs",
          deliverable: "Formal indictment brief presenting undeniable culprit attribution",
        },
      ],
    },
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
