"use client";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const TOPICS = [
  { id: "economics", label: "AIS & Economics", desc: "Spiritual value systems and restoration economics" },
  { id: "governance", label: "AIS & Governance", desc: "Spiritual leadership and ethical governance structures" },
  { id: "philosophy", label: "AIS & Philosophy", desc: "Revelation-based ontology and epistemology" },
  { id: "knowledge", label: "AIS & Knowledge Systems", desc: "AIS as origin; IKS as derived structure" },
  { id: "social", label: "AIS & Social Systems", desc: "Community formation and cultural continuity" },
  { id: "science", label: "AIS Science Division", desc: "Cosmology, mathematics, archaeology, geology" },
  { id: "revelation", label: "Revelation & Spiritual Framework", desc: "Knowledge transmission through Spirit" },
  { id: "pscb", label: "The PSCB Framework", desc: "Physical Spiritual Central Beings and spiritual authority" },
  { id: "institutional", label: "Institutional News", desc: "AHV partnerships, events, and announcements" },
];

const CARD = { background: "#fff", border: "2px solid var(--ahv-border-strong)", borderRadius: 10 };
const INPUT = {
  width: "100%", fontFamily: "var(--font-hanken)", fontSize: 15,
  background: "var(--ahv-surface)", border: "2px solid var(--ahv-border)",
  borderRadius: 6, padding: "13px 16px", color: "var(--ahv-ink)", outline: "none",
  boxSizing: "border-box",
};
const LABEL = { display: "block", fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-ink-soft)", marginBottom: 8 };

export default function NewslettersPage() {
  const [form, setForm] = useState({ firstName: "", email: "", topics: [] });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  function toggleTopic(id) {
    setForm((f) => ({
      ...f,
      topics: f.topics.includes(id) ? f.topics.filter((t) => t !== id) : [...f.topics, id],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          firstName: form.firstName,
          topics: form.topics.map((id) => TOPICS.find((t) => t.id === id)?.label).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Something went wrong."); setStatus("error"); return; }
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <header style={{ background: "var(--ahv-red)", borderBottom: "4px solid var(--ahv-gold)", padding: "64px 40px 56px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 18 }}>Research Newsletters</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.08, margin: "0 0 18px", color: "#fff" }}>
              Stay current with AIS scholarship.
            </h1>
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)", margin: 0, maxWidth: 560 }}>
              Receive new research findings, database entries, field reports, and institutional news from African Hidden Voices — delivered directly to your inbox.
            </p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "64px 40px", background: "var(--ahv-page)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "start" }} className="r-two-col">

          {/* Form */}
          <Reveal>
            <div style={CARD}>
              {status === "success" ? (
                <div style={{ padding: "56px 48px", textAlign: "center" }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "var(--ahv-gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <Check size={28} color="var(--ahv-dark)" strokeWidth={2.5} />
                  </div>
                  <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 28, margin: "0 0 12px", color: "var(--ahv-ink)" }}>You're subscribed.</h2>
                  <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, lineHeight: 1.65, color: "var(--ahv-muted)", margin: 0 }}>
                    A welcome email is on its way to <strong style={{ color: "var(--ahv-ink)" }}>{form.email}</strong>. Check your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "40px 40px 44px" }}>
                  <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 26, margin: "0 0 32px", color: "var(--ahv-ink)" }}>Subscribe to research updates</h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                    <div>
                      <label style={LABEL}>First name</label>
                      <input value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} placeholder="Your first name" style={INPUT} />
                    </div>
                    <div>
                      <label style={LABEL}>Email address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="your@email.com" style={INPUT} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label style={{ ...LABEL, marginBottom: 14 }}>Topics of interest <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(select all that apply)</span></label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {TOPICS.map((t) => {
                        const checked = form.topics.includes(t.id);
                        return (
                          <button key={t.id} type="button" onClick={() => toggleTopic(t.id)} style={{
                            display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px",
                            background: checked ? "var(--ahv-gold-band)" : "var(--ahv-surface)",
                            border: checked ? "2px solid var(--ahv-gold)" : "2px solid var(--ahv-border)",
                            borderRadius: 6, cursor: "pointer", textAlign: "left",
                          }}>
                            <div style={{ width: 18, height: 18, borderRadius: 4, border: checked ? "none" : "2px solid var(--ahv-border-strong)", background: checked ? "var(--ahv-gold)" : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {checked && <Check size={11} strokeWidth={3} color="var(--ahv-dark)" />}
                            </div>
                            <div>
                              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 700, color: "var(--ahv-ink)", lineHeight: 1.3 }}>{t.label}</div>
                              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)", lineHeight: 1.4, marginTop: 2 }}>{t.desc}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {status === "error" && (
                    <div style={{ background: "#fff1f0", border: "1.5px solid #fca5a5", borderRadius: 6, padding: "12px 16px", marginBottom: 20, fontFamily: "var(--font-hanken)", fontSize: 14, color: "#dc2626" }}>{errorMsg}</div>
                  )}

                  <button type="submit" disabled={status === "loading"} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 6, padding: "15px 24px", cursor: status === "loading" ? "not-allowed" : "pointer" }}>
                    {status === "loading" ? "Subscribing…" : <><span>Subscribe</span> <ArrowRight size={16} strokeWidth={2.2} /></>}
                  </button>
                  <p style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)", textAlign: "center", marginTop: 12 }}>No spam. Unsubscribe at any time.</p>
                </form>
              )}
            </div>
          </Reveal>

          {/* What you get */}
          <Reveal delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Research Digest", freq: "Monthly", desc: "A curated summary of new AIS research, publications, and field reports — with excerpts and links to full papers." },
                { title: "IImboni Database Updates", freq: "As published", desc: "Notifications when new spiritual authority profiles are added to the database, with a brief research summary." },
                { title: "Institutional News", freq: "As needed", desc: "Announcements from AHV: partnerships, conferences, new publications, and media appearances." },
                { title: "AHV Dialogue Series", freq: "Per episode", desc: "New podcast episode alerts with a research brief, key questions discussed, and the full recording link." },
              ].map((item) => (
                <div key={item.title} style={{ ...CARD, padding: "22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, color: "var(--ahv-ink)" }}>{item.title}</div>
                    <span style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, color: "var(--ahv-gold-deep)", background: "var(--ahv-surface-2)", border: "1px solid var(--ahv-border)", borderRadius: 3, padding: "3px 8px", whiteSpace: "nowrap", marginLeft: 10 }}>{item.freq}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, lineHeight: 1.65, color: "var(--ahv-muted)", margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
