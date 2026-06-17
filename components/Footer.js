import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ahv-parchment-2)", color: "var(--ahv-ink)", padding: "72px 40px 40px", borderTop: "4px solid var(--ahv-gold)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr", gap: 48 }} className="footer-grid">
        <div>
          <Link href="/"><Image src="/logo.png" alt="African Hidden Voices" width={180} height={54} style={{ height: 54, width: "auto", marginBottom: 20, display: "block", mixBlendMode: "multiply" }} /></Link>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#5e4742", maxWidth: 300, margin: 0 }}>A pan-African research institution reviving the voices of our IImboni, Kings and spiritual leaders. An initiative of The Revelation Spiritual Home.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-crimson)", margin: "0 0 18px" }}>Explore</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontFamily: "var(--font-hanken)", fontSize: 14, color: "#5e4742" }}>
            <Link href="/about">About</Link>
            <Link href="/imboni">The Imboni</Link>
            <Link href="/archive">The Archive</Link>
            <Link href="/events">Events</Link>
          </div>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-crimson)", margin: "0 0 18px" }}>Media</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontFamily: "var(--font-hanken)", fontSize: 14, color: "#5e4742" }}>
            <Link href="/podcast">Podcast</Link>
            <Link href="/publications">Publications</Link>
            <a href="#">YouTube</a>
            <a href="#">Facebook</a>
          </div>
        </div>
        <div>
          <h4 style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-crimson)", margin: "0 0 18px" }}>Newsletter</h4>
          <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "#5e4742", margin: "0 0 14px" }}>Receive new research and episodes.</p>
          <div style={{ display: "flex", gap: 8 }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, minWidth: 0, background: "#fff", border: "1px solid rgba(110,19,22,.22)", borderRadius: 8, padding: "11px 14px", color: "var(--ahv-ink)", fontSize: 13, outline: "none" }} />
            <button style={{ background: "var(--ahv-crimson)", border: "none", borderRadius: 8, width: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--ahv-cream)" }}>
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1240, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(110,19,22,.18)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--font-hanken)", fontSize: 12.5, color: "#8a726c" }}>
        <span>© 2026 African Hidden Voices. All rights reserved.</span>
        <span style={{ letterSpacing: ".1em", color: "var(--ahv-crimson)" }}>◆ UNMASKING AFRICAN TRUTHS</span>
      </div>
    </footer>
  );
}
