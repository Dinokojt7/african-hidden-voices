import { ArrowRight, Download, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = { title: "Press & Media — African Hidden Voices" };

const RELEASES = [
  { date: "12 June 2026", title: "AHV Formalises International Academic Research Partnership", type: "Partnership Announcement", summary: "African Hidden Voices has signed a formal Memorandum of Understanding with a leading international university, establishing a framework for joint research, publications, and academic exchange in African Indigenous Spirituality." },
  { date: "3 May 2026", title: "AHV IImboni Database Surpasses 140 Documented Spiritual Authorities", type: "Research Milestone", summary: "The AHV IImboni Database — a rigorous academic record of African prophetic and spiritual authority — has reached 140 documented entries across sub-Saharan Africa, making it the most comprehensive of its kind." },
  { date: "18 March 2026", title: "HSRM Imboni Dr. Uzwi Lezwe Radebe Delivers Keynote at African Studies Symposium", type: "Event", summary: "AHV Founding Scholar and Physical Spiritual Central Being HSRM Imboni Dr. Uzwi Lezwe Radebe delivered the keynote address at the African Studies Symposium, presenting AIS as a globally relevant epistemological framework." },
];

const CARD = { background: "#fff", border: "2px solid var(--ahv-border-strong)", borderRadius: 10 };

export default function PressPage() {
  return (
    <>
      <header style={{ background: "var(--ahv-red)", borderBottom: "4px solid var(--ahv-gold)", padding: "64px 40px 56px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 18 }}>Press & Media</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "end" }} className="r-two-col">
              <div>
                <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.1, margin: "0 0 16px", color: "#fff" }}>
                  AHV in the press.
                </h1>
                <p style={{ fontFamily: "var(--font-hanken)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)", margin: 0, maxWidth: 580 }}>
                  Press releases, media resources, and contact information for journalists, broadcasters, and academic publishers.
                </p>
              </div>
              <a href="mailto:press@african-hidden-voices.org" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, padding: "14px 24px", borderRadius: 4, whiteSpace: "nowrap" }}>
                <Mail size={15} /> Press enquiries
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      <section style={{ background: "var(--ahv-page)", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr .38fr", gap: 32, alignItems: "start" }} className="r-two-col">

          {/* Press releases */}
          <div>
            <Reveal>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 24 }}>Press Releases</div>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {RELEASES.map((r, i) => (
                <Reveal key={r.title} delay={i * 60}>
                  <div style={{ ...CARD, padding: "32px 36px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      <span style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-muted)" }}>{r.date}</span>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--ahv-border-strong)", display: "inline-block" }} />
                      <span style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, color: "var(--ahv-gold-deep)", background: "var(--ahv-surface-2)", border: "1px solid var(--ahv-border)", borderRadius: 3, padding: "3px 9px" }}>{r.type}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(18px,2vw,22px)", lineHeight: 1.22, margin: "0 0 12px", color: "var(--ahv-ink)" }}>{r.title}</h2>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, lineHeight: 1.7, color: "var(--ahv-muted)", margin: "0 0 18px" }}>{r.summary}</p>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", borderBottom: "2px solid var(--ahv-gold)", paddingBottom: 2 }}>
                      Read full release <ArrowRight size={13} strokeWidth={2} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Media kit */}
            <Reveal delay={80}>
              <div style={{ ...CARD, padding: "28px 28px 32px", borderTop: "4px solid var(--ahv-gold)" }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 14 }}>Media Kit</div>
                <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, lineHeight: 1.65, color: "var(--ahv-muted)", margin: "0 0 20px" }}>Logos, press photography, institutional biography, and brand guidelines for media use.</p>
                <a href="/media-kit.zip" download style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 13.5, padding: "12px 20px", borderRadius: 4 }}>
                  <Download size={14} /> Download media kit
                </a>
              </div>
            </Reveal>

            {/* Press contact */}
            <Reveal delay={120}>
              <div style={{ ...CARD, padding: "28px 28px 32px" }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-ink-soft)", marginBottom: 14 }}>Press Contact</div>
                <div style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 17, color: "var(--ahv-ink)", marginBottom: 4 }}>Communications Office</div>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)", marginBottom: 14 }}>African Hidden Voices</div>
                <a href="mailto:press@african-hidden-voices.org" style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", marginBottom: 6 }}>press@african-hidden-voices.org</a>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "var(--ahv-muted)" }}>Response within 24 hours on business days.</div>
              </div>
            </Reveal>

            {/* Fact sheet */}
            <Reveal delay={140}>
              <div style={{ ...CARD, padding: "28px 28px 32px", background: "var(--ahv-red)" }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 18 }}>AHV at a glance</div>
                {[
                  ["Founded", "2018"],
                  ["Headquarters", "South Africa"],
                  ["Focus", "African Indigenous Spirituality"],
                  ["Academic standing", "International partnership"],
                  ["IImboni documented", "140+"],
                  ["Research dialogues", "50+"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                    <span style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "rgba(255,255,255,.55)" }}>{k}</span>
                    <span style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "#fff" }}>{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
