import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#fff", color: "var(--ahv-ink)", borderTop: "4px solid var(--ahv-gold)" }}>
      <div style={{ padding: "64px 40px 48px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 1.3fr", gap: 48 }} className="footer-grid">

          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: 16 }}>
              <Image src="/logo.png" alt="African Hidden Voices" width={320} height={90}
                style={{ height: 72, width: "auto", display: "block", mixBlendMode: "multiply" }} />
            </Link>
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, lineHeight: 1.7, color: "var(--ahv-muted)", maxWidth: 300, margin: "0 0 20px" }}>
              A global academic research institution advancing African Indigenous Spirituality (AIS) as a living, revealed reality. An initiative of The Revelation Spiritual Home.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".1em", color: "var(--ahv-gold-deep)", textTransform: "uppercase" }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--ahv-gold)" }} />
              In partnership with Cambridge University
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-ink)", margin: "0 0 20px" }}>Research</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "var(--ahv-muted)" }}>
              <Link href="/research">Research Hub</Link>
              <Link href="/topics">Topics</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/archive">IImboni Database</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-ink)", margin: "0 0 20px" }}>Institution</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "var(--ahv-muted)" }}>
              <Link href="/about">About AHV</Link>
              <Link href="/imboni">The Imboni</Link>
              <Link href="/podcast">Media & Podcast</Link>
              <Link href="/contact">Collaborate</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-ink)", margin: "0 0 20px" }}>Research Updates</h4>
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "var(--ahv-muted)", margin: "0 0 14px", lineHeight: 1.6 }}>Receive new AIS research, database entries, and institutional news.</p>
            <div style={{ display: "flex", gap: 8 }}>
              <input type="email" placeholder="Your email address" style={{
                flex: 1, minWidth: 0, background: "var(--ahv-surface)",
                border: "1px solid var(--ahv-border)", borderRadius: 4,
                padding: "10px 14px", color: "var(--ahv-ink)", fontSize: 13, outline: "none",
              }} />
              <button style={{
                background: "var(--ahv-gold)", border: "none", borderRadius: 4,
                width: 42, display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "var(--ahv-dark)",
              }}>
                <ArrowRight size={17} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--ahv-border)", padding: "20px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)" }}>
          <span>© 2026 African Hidden Voices. All rights reserved.</span>
          <span style={{ letterSpacing: ".12em", color: "var(--ahv-gold)" }}>◆ UNMASKING AFRICAN TRUTHS</span>
        </div>
      </div>
    </footer>
  );
}
