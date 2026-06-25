"use client";
import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";

const AMOUNTS = [100, 250, 500, 1000, 2500, 5000];
const CARD = { background: "#fff", border: "2px solid var(--ahv-border-strong)", borderRadius: 10 };
const INPUT = { width: "100%", fontFamily: "var(--font-hanken)", fontSize: 15, background: "var(--ahv-surface)", border: "2px solid var(--ahv-border)", borderRadius: 6, padding: "13px 16px", color: "var(--ahv-ink)", outline: "none", boxSizing: "border-box" };
const LABEL = { display: "block", fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-ink-soft)", marginBottom: 8 };

export default function DonatePage() {
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  async function handleDonate(e) {
    e.preventDefault();
    if (!finalAmount || finalAmount < 10) { setError("Minimum donation is R10."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, frequency, donorName, donorEmail, message }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong."); return; }
      window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header style={{ background: "var(--ahv-red)", borderBottom: "4px solid var(--ahv-gold)", padding: "64px 40px 56px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 18 }}>
              <Heart size={13} fill="var(--ahv-gold)" stroke="none" /> Support AHV Research
            </div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(32px,5vw,54px)", lineHeight: 1.08, margin: "0 0 18px", color: "#fff" }}>
              Invest in the future of African Indigenous Spirituality.
            </h1>
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,.7)", margin: 0, maxWidth: 600 }}>
              Your contribution funds field research, database expansion, scholarly publications, and the advancement of AIS as a globally recognised academic discipline.
            </p>
          </Reveal>
        </div>
      </header>

      <section style={{ background: "var(--ahv-page)", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "start" }} className="r-two-col">

          {/* Donation form */}
          <Reveal>
            <div style={CARD}>
              <form onSubmit={handleDonate} style={{ padding: "40px 40px 44px" }}>
                <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 26, margin: "0 0 32px", color: "var(--ahv-ink)" }}>Make a donation</h2>

                {/* Frequency toggle */}
                <div style={{ marginBottom: 28 }}>
                  <label style={LABEL}>Frequency</label>
                  <div style={{ display: "flex", border: "2px solid var(--ahv-border-strong)", borderRadius: 6, overflow: "hidden" }}>
                    {[["once", "One-time"], ["monthly", "Monthly"]].map(([val, lbl]) => (
                      <button key={val} type="button" onClick={() => setFrequency(val)} style={{ flex: 1, padding: "11px", fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", background: frequency === val ? "var(--ahv-gold)" : "var(--ahv-surface)", color: frequency === val ? "var(--ahv-dark)" : "var(--ahv-ink-soft)", transition: "background .15s, color .15s" }}>
                        {lbl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount grid */}
                <div style={{ marginBottom: 20 }}>
                  <label style={LABEL}>Amount (ZAR)</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 12 }}>
                    {AMOUNTS.map((a) => (
                      <button key={a} type="button" onClick={() => { setAmount(a); setCustomAmount(""); }} style={{ padding: "13px 8px", fontFamily: "var(--font-cinzel)", fontSize: 18, fontWeight: 600, border: amount === a && !customAmount ? "2px solid var(--ahv-gold)" : "2px solid var(--ahv-border)", borderRadius: 6, background: amount === a && !customAmount ? "var(--ahv-gold-band)" : "var(--ahv-surface)", color: amount === a && !customAmount ? "var(--ahv-ink)" : "var(--ahv-ink-soft)", cursor: "pointer" }}>
                        R{a.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 700, color: "var(--ahv-muted)" }}>R</span>
                    <input type="number" min="10" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }} placeholder="Custom amount" style={{ ...INPUT, paddingLeft: 28 }} />
                  </div>
                </div>

                {/* Donor info */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
                  <div>
                    <label style={LABEL}>Your name</label>
                    <input value={donorName} onChange={(e) => setDonorName(e.target.value)} placeholder="Optional" style={INPUT} />
                  </div>
                  <div>
                    <label style={LABEL}>Email</label>
                    <input type="email" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} placeholder="For receipt" style={INPUT} />
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={LABEL}>Message <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="A note about your donation…" rows={3} style={{ ...INPUT, resize: "vertical" }} />
                </div>

                {error && <div style={{ background: "#fff1f0", border: "1.5px solid #fca5a5", borderRadius: 6, padding: "12px 16px", marginBottom: 20, fontFamily: "var(--font-hanken)", fontSize: 14, color: "#dc2626" }}>{error}</div>}

                <button type="submit" disabled={loading} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: loading ? "var(--ahv-surface)" : "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 16, border: "none", borderRadius: 6, padding: "17px 24px", cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? "Redirecting to payment…" : <><Heart size={16} fill="var(--ahv-dark)" stroke="none" /> Donate {finalAmount >= 10 ? `R${finalAmount.toLocaleString()}` : ""} {frequency === "monthly" ? "/ month" : ""} <ArrowRight size={16} strokeWidth={2.2} /></>}
                </button>
                <p style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)", textAlign: "center", marginTop: 12 }}>
                  Payments processed securely via Stripe. You will be redirected to complete payment.
                </p>
              </form>
            </div>
          </Reveal>

          {/* Impact sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Reveal delay={80}>
              <div style={{ ...CARD, borderTop: "4px solid var(--ahv-gold)", padding: "28px 28px 32px" }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 18 }}>Your donation funds</div>
                {[
                  ["R100", "One new IImboni Database research entry"],
                  ["R250", "Field documentation session with a spiritual elder"],
                  ["R500", "Transcription and translation of one oral testimony"],
                  ["R1,000", "One month of database hosting and maintenance"],
                  ["R2,500", "Co-production of one AHV Dialogue Series episode"],
                  ["R5,000", "Contribution toward an international joint publication"],
                ].map(([amt, desc]) => (
                  <div key={amt} style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: "1px solid var(--ahv-border)" }}>
                    <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 15, fontWeight: 600, color: "var(--ahv-gold)", minWidth: 58 }}>{amt}</div>
                    <div style={{ fontFamily: "var(--font-hanken)", fontSize: 14, lineHeight: 1.55, color: "var(--ahv-muted)" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ ...CARD, background: "var(--ahv-red)", padding: "28px 28px 32px" }}>
                <div style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, color: "rgba(255,255,255,.9)", marginBottom: 16 }}>
                  "AIS research is not about preserving the past — it is about restoring the present."
                </div>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-gold)" }}>HSRM Imboni Dr. Uzwi Lezwe Radebe</div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ ...CARD, padding: "22px 24px" }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "var(--ahv-muted)", lineHeight: 1.65 }}>
                  For large institutional donations, legacy gifts, or grant partnerships, contact us directly at <a href="mailto:development@african-hidden-voices.org" style={{ color: "var(--ahv-gold-deep)", fontWeight: 600 }}>development@african-hidden-voices.org</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
