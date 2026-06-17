"use client";
import { useState } from "react";
import { Mail, MapPin, ArrowRight, BookOpen, Mic, Users, Landmark } from "lucide-react";
import Reveal from "@/components/Reveal";

const cards = [
  { icon: BookOpen, title: "Research & Publications", desc: "Partner with our team on academic research or publication projects." },
  { icon: Mic, title: "Speaking & Podcast", desc: "Invite Imboni Dr. uZwi-Lezwe Radebe to speak or appear on your platform." },
  { icon: Users, title: "Submit a Voice", desc: "Share knowledge of a hidden IMboni, prophet, or African spiritual leader." },
  { icon: Landmark, title: "Institutional Partnership", desc: "Universities, governments, and cultural bodies — collaborate on IKS work." },
];

const intents = [
  "Research collaboration",
  "Speaking invitation",
  "Submit a hidden voice",
  "Institutional partnership",
  "General inquiry",
];

const socials = ["Facebook", "YouTube", "Twitter", "Instagram"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>Contact</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 22px", color: "var(--ahv-ink)", maxWidth: 760 }}>Open the dialogue.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 600, margin: 0 }}>Whether you are a researcher, institution, or someone carrying knowledge of a hidden voice — we want to hear from you.</p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "70px 40px 90px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: 20, marginBottom: 72 }}>
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <div style={{ background: "var(--ahv-parchment-2)", borderRadius: 12, padding: "30px 26px", borderTop: "3px solid var(--ahv-gold)" }}>
                  <c.icon size={24} color="var(--ahv-crimson)" style={{ marginBottom: 14 }} />
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 19, margin: "0 0 8px", color: "var(--ahv-ink)" }}>{c.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5e4742", margin: 0 }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 64, alignItems: "start" }}>
            <Reveal>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 30, margin: "0 0 30px", color: "var(--ahv-ink)" }}>Send a message</h2>
              {submitted ? (
                <div style={{ background: "var(--ahv-gold-band)", borderRadius: 12, padding: "40px 32px", textAlign: "center" }}>
                  <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 22, color: "var(--ahv-crimson)", margin: "0 0 8px" }}>Message received.</p>
                  <p style={{ fontSize: 15, color: "#5e4742", margin: 0 }}>We will be in touch within 2–3 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-ink)", marginBottom: 8 }}>Name</label>
                      <input required type="text" placeholder="Your full name" style={{ width: "100%", boxSizing: "border-box", background: "var(--ahv-parchment-2)", border: "1.5px solid rgba(110,19,22,.2)", borderRadius: 8, padding: "14px 16px", fontFamily: "var(--font-spectral)", fontSize: 16, color: "var(--ahv-ink)", outline: "none" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-ink)", marginBottom: 8 }}>Email</label>
                      <input required type="email" placeholder="your@email.com" style={{ width: "100%", boxSizing: "border-box", background: "var(--ahv-parchment-2)", border: "1.5px solid rgba(110,19,22,.2)", borderRadius: 8, padding: "14px 16px", fontFamily: "var(--font-spectral)", fontSize: 16, color: "var(--ahv-ink)", outline: "none" }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-ink)", marginBottom: 8 }}>I'd like to…</label>
                    <select style={{ width: "100%", background: "var(--ahv-parchment-2)", border: "1.5px solid rgba(110,19,22,.2)", borderRadius: 8, padding: "14px 16px", fontFamily: "var(--font-spectral)", fontSize: 16, color: "var(--ahv-ink)", outline: "none", appearance: "none" }}>
                      {intents.map((opt) => <option key={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-ink)", marginBottom: 8 }}>Message</label>
                    <textarea required rows={6} placeholder="Share what's on your mind…" style={{ width: "100%", boxSizing: "border-box", background: "var(--ahv-parchment-2)", border: "1.5px solid rgba(110,19,22,.2)", borderRadius: 8, padding: "14px 16px", fontFamily: "var(--font-spectral)", fontSize: 16, color: "var(--ahv-ink)", outline: "none", resize: "vertical" }} />
                  </div>
                  <div>
                    <button type="submit" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "18px 32px", borderRadius: 999, border: "none", cursor: "pointer" }}>Send Message <ArrowRight size={16} /></button>
                  </div>
                </form>
              )}
            </Reveal>

            <Reveal delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 12 }}>Email</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 16.5, color: "var(--ahv-ink)" }}>
                    <Mail size={17} color="var(--ahv-gold)" />
                    <a href="mailto:info@africanhiddenvoices.co.za" style={{ color: "inherit", textDecoration: "none" }}>info@africanhiddenvoices.co.za</a>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 12 }}>Location</div>
                  <div style={{ display: "flex", alignItems: "start", gap: 10, fontSize: 16, color: "#5e4742" }}>
                    <MapPin size={17} color="var(--ahv-gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span>South Africa · operating across Sub-Saharan Africa</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 14 }}>Follow Us</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {socials.map((s) => (
                      <a key={s} href="#" style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-ink)", padding: "9px 18px", border: "1.5px solid rgba(110,19,22,.22)", borderRadius: 999, textDecoration: "none" }}>{s}</a>
                    ))}
                  </div>
                </div>
                <div style={{ background: "var(--ahv-oxblood-deep)", borderRadius: 12, padding: "32px 28px" }}>
                  <blockquote style={{ margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, color: "rgba(245,231,192,.9)" }}>"A voice not heard is a voice that cannot lead."</blockquote>
                  <div style={{ marginTop: 16, fontFamily: "var(--font-hanken)", fontSize: 12.5, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(201,162,75,.8)" }}>Imboni Dr. uZwi-Lezwe Radebe</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
