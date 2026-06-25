import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export const metadata = { title: "Thank you — African Hidden Voices" };

export default function DonateSuccess() {
  return (
    <section style={{ background: "var(--ahv-page)", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "64px 40px" }}>
      <div style={{ background: "#fff", border: "2px solid var(--ahv-border-strong)", borderRadius: 10, maxWidth: 560, width: "100%", padding: "56px 52px", textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--ahv-gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
          <Heart size={28} fill="var(--ahv-dark)" stroke="none" />
        </div>
        <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 14 }}>Donation received</div>
        <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 36, lineHeight: 1.15, margin: "0 0 16px", color: "var(--ahv-ink)" }}>Thank you for your support.</h1>
        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 16, lineHeight: 1.7, color: "var(--ahv-muted)", margin: "0 0 32px" }}>
          Your contribution directly advances AIS research, the IImboni Database, and African Hidden Voices' academic mission. A receipt has been sent to your email.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, padding: "13px 24px", borderRadius: 4 }}>
            Explore our research <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ahv-ink)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, padding: "13px 20px", border: "2px solid var(--ahv-border-strong)", borderRadius: 4 }}>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
