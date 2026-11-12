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
  isFlagship?: boolean;
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
    isFlagship: true,
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
    isFlagship: true,
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
    isFlagship: true,
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
    isFlagship: true,
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
    isFlagship: true,
    orbit: {
      radius: 4.55,
      speed: 0.1,
      initialAngle: 1.2,
      tilt: [0.35, 0.12, 0.16],
      size: 0.26,
    },
    visualTheme: "case-exe",
  },

  {
    id: "cyberstrike",
    slug: "cyberstrike",
    name: "CYBERSTRIKE",
    category: "CYBERSECURITY & CTF",
    filterCategory: "Technology",
    index: "06",
    tagline: "Adversarial network intrusion, defensive hardening & binary exploit triage",
    description:
      "An elite capture-the-flag cyber combat arena. Security analysts penetrate hardened sandboxes, reverse-engineer zero-day binaries, and defend critical virtualized infrastructure under active attack vectors.",
    route: "/events/cyberstrike",
    image: "/events/cyberstrike.jpg",
    imageAlt: "Server rack illuminated in cybernetic blue and green telemetry lights inside a secure datacenter",
    imageSource: "Unsplash - Markus Spiske (Datacenter telemetry & security)",
    datePlaceholder: "Day 2 · 09:30 AM",
    teamSizePlaceholder: "Team of 2-4",
    accentSnippet: "exploit://pwn --sandbox=isolated --target=target.sec",
    duration: "6 Hours Non-Stop",
    eligibility:
      "Open to enrolled undergraduate and graduate students with demonstrated interest in network security, binary exploitation, and reverse engineering.",
    requirements: [
      "Personal development laptop running Kali Linux, Parrot OS, or Linux VM",
      "Network analysis toolset: Wireshark, Nmap, Burp Suite / OWASP ZAP",
      "Reverse engineering toolset: Ghidra, radare2, or IDA Free",
      "Ethernet adapter capable of 1 Gbps wired LAN connectivity",
    ],
    aboutParagraphs: [
      "In modern digital defense, passive firewalls are insufficient against state-grade persistent threats. True cyber resilience requires offensive instincts: understanding how exploits weaponize memory corruption, bypass kernel mitigations, and pivot through segmented subnets.",
      "CYBERSTRIKE drops teams into an isolated hybrid enterprise infrastructure. Contestants balance offensive exploitation to capture opposing flags while patching their own vulnerable services against relentless adversarial probes.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Perimeter Reconnaissance",
        description:
          "Teams perform non-intrusive port sweeps, fingerprint custom service daemons, and map the subnet topology under strict detection limits.",
      },
      {
        stage: "Stage 02",
        title: "Web & Memory Exploitation",
        description:
          "Analyze custom vulnerable binaries, craft format-string and buffer overflow payloads, and bypass ASLR / DEP mitigations in designated sandboxes.",
      },
      {
        stage: "Stage 03",
        title: "Privilege Escalation & Defense",
        description:
          "Elevate to root privileges, audit kernel permissions, harden defensive service scripts, and submit cryptographic flag hashes via secure socket.",
      },
      {
        stage: "Stage 04",
        title: "Post-Mortem Incident Briefing",
        description:
          "Top teams submit brief vulnerability disclosure reports outlining root causes, remediation diffs, and attack path diagrams.",
      },
    ],
    rules: [
      "All exploitation attempts must target designated competition subnets only.",
      "Denial of service (DoS/DDoS) attacks against scoring servers will incur instant disqualification.",
      "Sharing flags or exploit scripts between competing teams is strictly prohibited.",
      "Scoring operates on dynamic flag decay: faster solvers receive maximum point yields.",
      "Hardware tampering or sniffing physical infrastructure cables is forbidden.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 4,
    metrics: [
      { label: "Challenge Nodes", value: "24 Targets" },
      { label: "Network Architecture", value: "Air-Gapped VLAN" },
      { label: "Scoring Model", value: "Dynamic Flag Decay" },
    ],
    isFlagship: false,
    orbit: {
      radius: 2.5,
      speed: 0.22,
      initialAngle: 1.8,
      tilt: [-0.15, 0.2, 0.1],
      size: 0.22,
    },
    visualTheme: "case-exe",
  },
  {
    id: "algo-hack",
    slug: "algo-hack",
    name: "ALGO-HACK",
    category: "COMPETITIVE ALGORITHMS",
    filterCategory: "Technology",
    index: "07",
    tagline: "High-performance data structures, latency optimization & combinatorial complexity",
    description:
      "An asymptotic programming crucible. Contestants develop sub-millisecond solutions for NP-hard graphs, multi-dimensional dynamic programming, and streaming geometric queries under strict memory limits.",
    route: "/events/algo-hack",
    image: "/events/algo-hack.jpg",
    imageAlt: "Computer monitor displaying optimized algorithmic source code in high-contrast syntax highlighting",
    imageSource: "Unsplash - Fatos Bytyqi (Source code syntax on monitor)",
    datePlaceholder: "Day 1 · 02:30 PM",
    teamSizePlaceholder: "Individual or Duo",
    accentSnippet: "opt://compile --O3 -std=c++20 --bench-latency",
    duration: "3.5 Hours Sprint",
    eligibility:
      "Open to all university students with algorithmic problem-solving experience. Individual participation or two-person teams allowed.",
    requirements: [
      "Personal development machine with pre-installed compilers (GCC/Clang, JDK 21, Rust, or Python 3.12)",
      "Offline standard library documentation",
      "Pre-configured IDE or terminal text editor of choice (Vim, Neovim, VS Code)",
    ],
    aboutParagraphs: [
      "Beyond standard software engineering lies the domain of pure algorithmic mastery: where standard quadratic solutions choke on million-node graphs and only O(N log N) or amortized constant-time structures survive.",
      "ALGO-HACK challenges contestants with real-world asymptotic puzzles inspired by routing fabrics, compiler optimizers, and computational geometry. Each problem is evaluated against concealed test suites with rigorous CPU wall-clock and memory headroom limits.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Combinatorial Warmup",
        description:
          "Rapid-fire algorithmic sprint covering number theory, bit manipulation, and greedy scheduling to seed live leaderboard rankings.",
      },
      {
        stage: "Stage 02",
        title: "Complex Graphs & Trees",
        description:
          "Solve hard graph problems involving heavy-light decomposition, maximum network flow, and centroid trees within 90 minutes.",
      },
      {
        stage: "Stage 03",
        title: "Real-Time Stress Judge",
        description:
          "Hidden worst-case pathological test suites stress memory boundaries and trigger timeouts for inefficient asymptotic implementations.",
      },
    ],
    rules: [
      "Access to external internet, AI assistants, and copied online templates is strictly blocked.",
      "Solutions must compile without warnings under strict standard flags.",
      "Memory limit per execution: 256 MB; CPU wall-clock limit: 1.0 second per test case.",
      "Tie-breakers determined by earliest submission timestamp and cumulative penalty points.",
      "Judges' automated test runner results are authoritative and final.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: false,
    minTeamMembers: 1,
    maxTeamMembers: 2,
    metrics: [
      { label: "Problem Headroom", value: "8 Rigorous Sets" },
      { label: "Memory Limit", value: "256 MB Max" },
      { label: "Execution Time", value: "1.0s / Case" },
    ],
    isFlagship: false,
    orbit: {
      radius: 3.1,
      speed: -0.18,
      initialAngle: 3.2,
      tilt: [0.25, -0.1, 0.18],
      size: 0.23,
    },
    visualTheme: "handoff",
  },
  {
    id: "venture-matrix",
    slug: "venture-matrix",
    name: "VENTURE MATRIX",
    category: "VENTURE ARCHITECTURE",
    filterCategory: "Business",
    index: "08",
    tagline: "Venture capital simulations, cap-table dynamics & deeptech commercialization",
    description:
      "Founders and product strategists pitch disruptive technology architectures to simulated venture boards. Teams navigate seed-round dilution, market-clearing unit economics, and hostile boardroom scenarios.",
    route: "/events/venture-matrix",
    image: "/events/venture-matrix.jpg",
    imageAlt: "Modern financial corporate skyscraper reaching into atmospheric clouds",
    imageSource: "Unsplash - Sean Pollock (Architectural high-finance facade)",
    datePlaceholder: "Day 2 · 02:00 PM",
    teamSizePlaceholder: "Team of 2-3",
    accentSnippet: "vc://evaluate --term-sheet --pre-money=8.5M",
    duration: "4 Hours (Pitch & Deliberation)",
    eligibility:
      "Open to interdisciplinary student teams combining technical engineers and business/management strategists.",
    requirements: [
      "Investor Pitch Deck (PDF format, maximum 10 slides)",
      "Financial model spreadsheet outlining 3-year burn rate, CAC, and LTV",
      "Functional hardware prototype, interactive wireframe, or live software demo",
    ],
    aboutParagraphs: [
      "Transforming breakthrough engineering into sustainable enterprise demands more than technical elegance. It requires sharp capital efficiency, defensible economic moats, and the conviction to navigate hostile investor due diligence.",
      "VENTURE MATRIX places teams in front of seasoned venture capitalists and industry operators. Teams pitch original technology concepts, defend operational unit economics, and negotiate real-time term sheets while adapting to sudden simulated macroeconomic downturns.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Technical Deck Screening",
        description:
          "Venture evaluators review submitted slide decks and financial spreadsheets in a blind screening round.",
      },
      {
        stage: "Stage 02",
        title: "The 7-Minute Pitch",
        description:
          "Teams deliver an uninterrupted 7-minute executive pitch covering problem architecture, product demo, and commercial runway.",
      },
      {
        stage: "Stage 03",
        title: "Boardroom Cross-Examination",
        description:
          "Intensive 10-minute partner Q&A testing customer acquisition economics, IP defensibility, and team cap-table retention.",
      },
      {
        stage: "Stage 04",
        title: "Term Sheet Negotiation",
        description:
          "Finalist teams receive competitive simulated term sheets and must negotiate protective provisions and valuation multiples live.",
      },
    ],
    rules: [
      "All pitched ventures must be original student-conceived concepts or research spin-outs.",
      "Financial figures must be defensible; unsubstantiated market assertions will be penalized.",
      "Strict 7-minute presentation cap enforced by automated countdown clock.",
      "Every team member must participate verbally during either the pitch or due-diligence Q&A.",
      "Judges evaluate teams across Product Innovation, Unit Economics, and Negotiation Agility.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
    metrics: [
      { label: "Pitch Format", value: "7 Min + 10 Min Q&A" },
      { label: "Cap Structure", value: "Simulated $10M" },
      { label: "Slide Cap", value: "10 Slides Max" },
    ],
    isFlagship: false,
    orbit: {
      radius: 3.65,
      speed: 0.15,
      initialAngle: 4.4,
      tilt: [-0.28, 0.15, -0.2],
      size: 0.24,
    },
    visualTheme: "trade-rush",
  },
  {
    id: "robo-soccer",
    slug: "robo-soccer",
    name: "ROBO-SOCCER",
    category: "MECHATRONIC COMBAT",
    filterCategory: "Robotics",
    index: "09",
    tagline: "Kinematic micro-chassis engineering, high-torque propulsion & real-time telemetry",
    description:
      "High-speed collegiate robotic soccer arena. Custom-fabricated tele-operated and semi-autonomous rovers battle in an enclosed arena, executing drift maneuvers, defensive steals, and ball strikes.",
    route: "/events/robo-soccer",
    image: "/events/robo-soccer.jpg",
    imageAlt: "Advanced mechanical robotics chassis with precision components and sensors",
    imageSource: "Unsplash - Possessed Photography (High-precision robotics)",
    datePlaceholder: "Day 2 · 11:00 AM",
    teamSizePlaceholder: "Team of 3-5",
    accentSnippet: "telemetry://dual-drive --rpm=12000 --pwm=98%",
    duration: "Bracket Tournament (2 Days)",
    eligibility:
      "Open to collegiate robotics and mechanical engineering clubs with validated chassis designs.",
    requirements: [
      "Custom fabricated robotic chassis meeting dimensional limits (300 x 300 x 300 mm)",
      "Chassis mass not exceeding 5.0 kg inclusive of batteries and drive motors",
      "Radio communication operating on 2.4 GHz dual-frequency or Bluetooth low-energy protocol",
      "LiPo safety charging bags and pit-stop servicing toolkit",
    ],
    aboutParagraphs: [
      "Collegiate robotics reaches peak adrenaline in high-torque combat sport. In ROBO-SOCCER, agile dual-drive micro-rovers collide, sprint, and strike inside an enclosed high-traction arena designed to test structural durability and low-latency motor control.",
      "Teams design custom power transmission systems, high-discharge battery circuitry, and omnidirectional steering geometries. Victory demands lightning operator reflexes, robust telemetry links, and rapid pit-lane repairs between high-intensity halves.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Technical Scrutineering",
        description:
          "Official dimension verification, weigh-in check, and battery voltage inspection in the inspection pit.",
      },
      {
        stage: "Stage 02",
        title: "Group Stage Round-Robin",
        description:
          "Teams compete in seeded group stages consisting of two 5-minute halves with a 2-minute tactical pit interval.",
      },
      {
        stage: "Stage 03",
        title: "Elimination Bracket Gauntlet",
        description:
          "Single-elimination playoff brackets leading to the Grand Championship match under elevated arena lighting.",
      },
    ],
    rules: [
      "Robots must remain within 300 x 300 x 300 mm dimensions and 5.0 kg max weight at all times.",
      "Intentional damaging attachments (spikes, high-voltage tasers, flames) are strictly banned.",
      "Radio frequency jamming or unauthorized spectrum interference causes immediate disqualification.",
      "A robot disabled on field has 60 seconds of pit-lane recovery time before penalty forfeiture.",
      "Referees uphold fair-play rules regarding out-of-bounds balls and goal creases.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 3,
    maxTeamMembers: 5,
    metrics: [
      { label: "Chassis Limit", value: "5.0 kg Max" },
      { label: "Match Structure", value: "Two 5-Min Halves" },
      { label: "Transmission", value: "2.4 GHz Low-Latency" },
    ],
    isFlagship: false,
    orbit: {
      radius: 4.2,
      speed: -0.12,
      initialAngle: 0.9,
      tilt: [0.18, 0.22, -0.15],
      size: 0.25,
    },
    visualTheme: "drone-o-mania",
  },
  {
    id: "aerodrift",
    slug: "aerodrift",
    name: "AERODRIFT",
    category: "AUTONOMOUS VEHICLES",
    filterCategory: "Robotics",
    index: "10",
    tagline: "LiDAR path-planning, PID speed control & autonomous obstacle traversal",
    description:
      "Autonomous terrestrial ground rovers tackle a variable-friction circuit. Systems must navigate chicanes, blind intersections, and dynamic obstacles using embedded sensor fusion without human intervention.",
    route: "/events/aerodrift",
    image: "/events/aerodrift.jpg",
    imageAlt: "High-speed optical light trails and motion blur across a futuristic race surface",
    imageSource: "Unsplash - Motion Blur (High-speed trajectory telemetry)",
    datePlaceholder: "Day 3 · 10:00 AM",
    teamSizePlaceholder: "Team of 2-4",
    accentSnippet: "lidar://scan --fuse-imu --path-planning=hybrid-a*",
    duration: "3 Rounds (Time-Trial & Obstacle)",
    eligibility:
      "Open to undergraduate and postgraduate teams specializing in autonomous systems, embedded electronics, and sensor fusion.",
    requirements: [
      "Autonomous rover with embedded computing board (Raspberry Pi, ESP32, Teensy, or NVIDIA Jetson)",
      "Sensor payload: Optical camera, Time-of-Flight (ToF), ultrasonic, or 2D LiDAR",
      "Self-contained battery power system with emergency hardware kill switch",
    ],
    aboutParagraphs: [
      "Autonomous ground vehicles operate on the bleeding edge of real-time control theory. When a rover enters an unmapped chicane at high speed, there is no human operator in the loop: microcontrollers must compute motor PWM values in milliseconds based on noisy sensor feeds.",
      "AERODRIFT evaluates autonomous rovers across clean trajectory optimization and unpredictable dynamic hazard evasion. Teams must tune robust PID control loops, implement Kalman filtering across inertial measurement sensors, and execute real-time path planning.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Solo Time Trial Sprint",
        description:
          "Autonomous lap around a known geometric track measuring pure trajectory planning and cornering velocity.",
      },
      {
        stage: "Stage 02",
        title: "Dynamic Hazard Injection",
        description:
          "Pop-up track barriers and simulated pedestrians test emergency braking and real-time path re-planning.",
      },
      {
        stage: "Stage 03",
        title: "Variable Friction Grand Prix",
        description:
          "Sudden transitions between acrylic, rubberized track, and low-friction slick surfaces test traction control algorithms.",
      },
    ],
    rules: [
      "Vehicles must be 100% autonomous; zero wireless control or teleoperation is permitted on track.",
      "Rovers must possess an accessible physical mechanical emergency stop button on the chassis.",
      "Track boundary transgressions incur a 5-second penalty added to the final lap clock.",
      "Maximum vehicle width: 250 mm; maximum length: 350 mm.",
      "Fastest aggregate clean lap time wins the championship trophy.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 4,
    metrics: [
      { label: "Autonomy Level", value: "100% On-Board" },
      { label: "Control Loop", value: "Sub-5ms PID" },
      { label: "Circuit Distance", value: "45m Track" },
    ],
    isFlagship: false,
    orbit: {
      radius: 4.8,
      speed: 0.11,
      initialAngle: 2.7,
      tilt: [-0.2, -0.18, 0.25],
      size: 0.23,
    },
    visualTheme: "drone-o-mania",
  },
  {
    id: "neural-forge",
    slug: "neural-forge",
    name: "NEURAL FORGE",
    category: "AGENTIC ARCHITECTURES",
    filterCategory: "Artificial Intelligence",
    index: "11",
    tagline: "Autonomous multi-agent swarms, RAG pipelines & fine-tuning benchmarks",
    description:
      "Build production-grade AI agent systems and autonomous reasoning loops. Teams architect multi-step autonomous toolchains, vector knowledge graphs, and evaluate models against ambiguous benchmark environments.",
    route: "/events/neural-forge",
    image: "/events/neural-forge.jpg",
    imageAlt: "Abstract rendering of artificial neural networks and interconnected cognitive synaptic nodes",
    imageSource: "Unsplash - DeepMind (Abstract neural network architecture)",
    datePlaceholder: "Day 1 · 11:30 AM",
    teamSizePlaceholder: "Team of 2-4",
    accentSnippet: "agent://spawn --tools=vector,compiler --eval=bench-v2",
    duration: "5 Hours Build & Benchmark",
    eligibility:
      "Open to university students with experience in Python, Large Language Models, agentic frameworks, and vector retrieval.",
    requirements: [
      "Laptop with Python 3.10+ development environment",
      "Familiarity with agentic toolchains (LangGraph, CrewAI, AutoGen, or custom agent loops)",
      "Git client and containerization environment (Docker / Podman recommended)",
    ],
    aboutParagraphs: [
      "The paradigm of artificial intelligence has shifted from static prompt engineering to multi-agent autonomous reasoning. High-leverage systems now deploy swarms of specialized agents that collaborate, write and execute code, and self-correct across complex workflows.",
      "NEURAL FORGE is a rigorous hackathon for agentic intelligence. Teams are tasked with building autonomous agent pipelines that resolve ambiguous, multi-step enterprise problems under strict token efficiency and ground-truth verification standards.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Benchmark Specification Release",
        description:
          "Organizers reveal the target problem domains, API endpoints, and evaluation metrics at the start line.",
      },
      {
        stage: "Stage 02",
        title: "Agent Architecture & Tool Binding",
        description:
          "Teams author reasoning loops, configure vector retrieval indices, and bind custom executable tools.",
      },
      {
        stage: "Stage 03",
        title: "Automated Benchmark Gauntlet",
        description:
          "Submissions are evaluated against hidden test suites testing zero-shot generalization, cost-efficiency, and accuracy.",
      },
    ],
    rules: [
      "Agent execution must be fully automated without human intervention during benchmark evaluation.",
      "Total API inference expenditure is capped per team to ensure architectural efficiency.",
      "Hallucinated outputs and unhandled execution crashes result in severe scoring deductions.",
      "All code and agent schemas must be committed to the official evaluation repository.",
      "Top solutions are judged on task success rate, execution latency, and token parsimony.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 4,
    metrics: [
      { label: "Agent Coordination", value: "Multi-Agent Swarm" },
      { label: "Inference Latency", value: "<400ms Step" },
      { label: "Benchmark Suite", value: "Hidden Real-World" },
    ],
    isFlagship: false,
    orbit: {
      radius: 2.6,
      speed: -0.21,
      initialAngle: 5.1,
      tilt: [0.3, 0.1, -0.1],
      size: 0.24,
    },
    visualTheme: "prompt-wars",
  },
  {
    id: "vision-x",
    slug: "vision-x",
    name: "VISION-X",
    category: "SPATIAL COMPUTING",
    filterCategory: "Artificial Intelligence",
    index: "12",
    tagline: "Edge computer vision, spatial geometry & object tracking neural networks",
    description:
      "Deploy high-speed computer vision pipelines on edge silicon. Teams engineer models capable of multi-stream object classification, 3D point-cloud reconstruction, and spatial gesture tracking in real time.",
    route: "/events/vision-x",
    image: "/events/vision-x.jpg",
    imageAlt: "Precision optical laboratory lens tracking laser grid patterns across spatial coordinate planes",
    imageSource: "Unsplash - Optical Labs (High-precision spatial imaging)",
    datePlaceholder: "Day 2 · 03:30 PM",
    teamSizePlaceholder: "Team of 2-3",
    accentSnippet: "cv://infer --fps=60 --tensorrt --quantize=int8",
    duration: "4 Hours Real-Time Inference",
    eligibility:
      "Open to university students with experience in computer vision, deep learning frameworks, and edge acceleration.",
    requirements: [
      "Laptop or edge accelerator board (NVIDIA Jetson, Raspberry Pi with Coral TPU, or GPU laptop)",
      "OpenCV, PyTorch / TensorRT / OpenVINO / ONNX Runtime runtime stack",
      "Standard USB 1080p webcam or depth camera module",
    ],
    aboutParagraphs: [
      "Computer vision is transforming robotics, autonomous transport, and mixed reality. However, running multi-gigabyte models in high-power datacenters is simple; the true engineering frontier is executing high-accuracy inference at 60 FPS on power-constrained edge silicon.",
      "VISION-X challenges developers to squeeze maximum throughput and spatial precision from embedded neural vision pipelines. Teams optimize weight quantization, prune redundant convolutional channels, and deploy live tracking under adversarial lighting.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Model Quantization & Pruning",
        description:
          "Convert baseline vision models to INT8 / FP16 representations and tune hardware inference engines.",
      },
      {
        stage: "Stage 02",
        title: "Multi-Stream Spatial Tracking",
        description:
          "Deploy real-time pipelines to track multiple dynamic objects and reconstruct 3D coordinate trajectories.",
      },
      {
        stage: "Stage 03",
        title: "Adversarial Occlusion Arena",
        description:
          "Models are tested against flickering lighting, motion blur, and severe camera occlusions in live testing.",
      },
    ],
    rules: [
      "Models must execute on designated hardware platforms within a 15-Watt thermal envelope.",
      "Minimum required output throughput: 30 FPS at 720p resolution.",
      "Evaluation criteria: mean Average Precision (mAP) divided by normalized milliwatt-hour consumption.",
      "Pre-trained weights may be used but must be pruned or fine-tuned during the competition window.",
      "Judges' automated metric harness determines final ranking.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
    metrics: [
      { label: "Target Frame Rate", value: "60 FPS Edge" },
      { label: "Power Ceiling", value: "15W Thermal Envelope" },
      { label: "Precision Metric", value: "mAP @ IoU 0.5:0.95" },
    ],
    isFlagship: false,
    orbit: {
      radius: 3.3,
      speed: 0.17,
      initialAngle: 1.5,
      tilt: [-0.18, -0.22, 0.12],
      size: 0.23,
    },
    visualTheme: "prompt-wars",
  },
  {
    id: "cipher-protocol",
    slug: "cipher-protocol",
    name: "CIPHER PROTOCOL",
    category: "CRYPTANALYSIS & CIPHERS",
    filterCategory: "Mystery & Logic",
    index: "13",
    tagline: "Cryptanalytic frequency analysis, lattice cryptography & steganographic recovery",
    description:
      "An esoteric mathematical decryption labyrinth. Teams unravel multi-layered ciphertext, reconstruct broken rotor machine ciphers, and decode hidden steganographic payloads across historic and post-quantum keys.",
    route: "/events/cipher-protocol",
    image: "/events/cipher-protocol.jpg",
    imageAlt: "Complex mathematical encryption formula patterns and cryptographic matrix grids",
    imageSource: "Unsplash - Roman Mager (Mathematical cryptographic matrix)",
    datePlaceholder: "Day 3 · 02:00 PM",
    teamSizePlaceholder: "Team of 2-3",
    accentSnippet: "decrypt://lattice --modulus=q --recover-private-key",
    duration: "4 Hours Enigma Sprint",
    eligibility:
      "Open to all university students with passion for discrete mathematics, number theory, and logical puzzle solving.",
    requirements: [
      "Laptops equipped with Python 3, SageMath, or chosen mathematical script environments",
      "Offline reference materials (cryptography handbooks, character encoding tables)",
      "Scratch pads and pencils for manual algorithmic derivation",
    ],
    aboutParagraphs: [
      "Cryptography is the ultimate battleground of pure logic and mathematical symmetry. From the mechanical rotor wheels of the early twentieth century to post-quantum lattice constructions, secrets are guarded by the computational hardness of mathematical problems.",
      "CIPHER PROTOCOL is an elite mind sport for cryptanalysts. Teams face progressive tiers of encrypted challenges: statistical frequency anomalies, broken pseudo-random generators, hidden steganographic image bytes, and zero-knowledge proofs.",
    ],
    howItWorks: [
      {
        stage: "Stage 01",
        title: "Classical & Polyalphabetic Triage",
        description:
          "Break complex substitution ciphers, mechanical rotor scrambles, and statistical frequency puzzles.",
      },
      {
        stage: "Stage 02",
        title: "Steganography & Deep Carving",
        description:
          "Extract payload archives embedded inside audio frequency spectrograms and uncompressed raw bitplanes.",
      },
      {
        stage: "Stage 03",
        title: "Post-Quantum & Lattice Gauntlet",
        description:
          "Exploit misconfigured modular lattices and weak cryptographic curves to recover private decryption keys.",
      },
    ],
    rules: [
      "Automated denial-of-service brute-force scripts against the answer portal are strictly prohibited.",
      "Submissions require both the decrypted cleartext message and the mathematical derivation steps.",
      "Communication or hint sharing between distinct teams will result in immediate disqualification.",
      "Leaderboard updates are live until the final 30-minute blackout period.",
      "Decisions of the Chief Cryptographer judge panel are indisputable.",
    ],
    prizePlaceholder: "To be announced · Phase 6 Disclosure",
    isTeamEvent: true,
    minTeamMembers: 2,
    maxTeamMembers: 3,
    metrics: [
      { label: "Challenge Tiers", value: "7 Cryptographic Levels" },
      { label: "Cipher Domains", value: "Classical to Post-Quantum" },
      { label: "Verification", value: "Mathematical Proof" },
    ],
    isFlagship: false,
    orbit: {
      radius: 4.4,
      speed: -0.14,
      initialAngle: 3.8,
      tilt: [0.22, -0.15, -0.22],
      size: 0.25,
    },
    visualTheme: "case-exe",
  },
];
