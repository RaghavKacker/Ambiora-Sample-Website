import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Organizing Committee — AMBIORA 2026 | NMIMS Shirpur",
  description:
    "Get in touch with the AMBIORA 2026 organizing team at NMIMS MPSTME Shirpur Campus. General inquiries, campus logistics, and corporate partnerships.",
};

const committeeTeams = [
  {
    role: "Faculty Advisory Board",
    designation: "Campus Leadership & Oversight",
    members: "Faculty Convenors & Departmental Chairs",
    contactPlaceholder: "advisory@ambiora.org",
  },
  {
    role: "Core Technical Directorate",
    designation: "Flagship Challenges & Sandboxes",
    members: "Student Technical Leads & Arena Engineers",
    contactPlaceholder: "tech@ambiora.org",
  },
  {
    role: "Corporate Alliances & Outreach",
    designation: "Sponsorship & Industry Network",
    members: "Outreach Leads & Relations Cell",
    contactPlaceholder: "partnerships@ambiora.org",
  },
  {
    role: "Delegate Logistics & Hospitality",
    designation: "Accreditation & Travel Desk",
    members: "Hospitality Team & Campus Coordinators",
    contactPlaceholder: "logistics@ambiora.org",
  },
];

const socialChannels = [
  { name: "Instagram", handle: "@ambiora.nmims", href: "#", desc: "Live festival updates, BTS & announcements" },
  { name: "X (Twitter)", handle: "@AmbioraFest", href: "#", desc: "Real-time arena scores and engineering highlights" },
  { name: "LinkedIn", handle: "AMBIORA Techfest", href: "#", desc: "Corporate alliances, speaker series & network" },
  { name: "GitHub", handle: "github.com/ambiora", href: "#", desc: "Competition starter repositories and sandboxes" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
        {/* Editorial Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-text-muted uppercase font-medium">
              Festival Secretariat
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-text-primary leading-tight mb-4 uppercase">
            Connect With AMBIORA
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Reach out to the student organizing committee and faculty convenors at NMIMS MPSTME Shirpur Campus.
          </p>
        </div>

        {/* ─── 1. CONTACT CHANNELS & INTERACTIVE FORM ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* General Enquiries Card */}
            <div className="p-7 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
                Direct Communication
              </span>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                General Inquiries
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                For overall festival guidance, student accreditations, and event registrations:
              </p>
              <a
                href="mailto:contact@ambiora.org"
                className="inline-block font-mono text-sm font-semibold text-white hover:underline"
              >
                contact@ambiora.org
              </a>
            </div>

            {/* Campus Location Card */}
            <div className="p-7 rounded-3xl border border-white/[0.08] bg-[#111111]/80 backdrop-blur-xl">
              <span className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase mb-3 block">
                Physical Campus
              </span>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                NMIMS Shirpur Campus
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                Mukesh Patel Technology Park, Babulde, Shirpur, Dhule District, Maharashtra 425405.
              </p>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-text-muted">
                GEO COORDINATES: 21.3563° N, 74.8814° E
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-xs text-text-secondary">
                <span className="text-white font-medium">Inquiry Desk Active:</span> Student secretariats typically acknowledge delegate correspondence within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* ─── 2. ORGANIZING COMMITTEE STRUCTURE ─────────────────────────── */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Festival Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mt-1">
              Organizing Committee Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {committeeTeams.map((team) => (
              <div
                key={team.role}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-2">
                    {team.designation}
                  </span>
                  <h4 className="text-base font-semibold text-text-primary mb-2">{team.role}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">{team.members}</p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-text-muted">
                  Desk: {team.contactPlaceholder}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. SOCIAL MEDIA ECOSYSTEM ─────────────────────────────────── */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
              Broadcasts & Streams
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mt-1">
              Social Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {socialChannels.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                className="group p-6 rounded-2xl border border-white/[0.08] bg-[#111111]/80 hover:border-white/25 hover:bg-[#151515] transition-all duration-300 block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-text-primary group-hover:text-white transition-colors">
                    {soc.name}
                  </span>
                  <span className="text-xs text-text-muted group-hover:text-white transition-colors font-mono">
                    ↗
                  </span>
                </div>
                <span className="block font-mono text-xs text-white/80 mb-2">{soc.handle}</span>
                <p className="text-[11px] text-text-muted leading-relaxed">{soc.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
