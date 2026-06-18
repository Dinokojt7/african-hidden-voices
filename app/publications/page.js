import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const books = [
  { title: "Restoring Africa's Spiritual Identity", subtitle: "The IMboni Tradition in Southern Africa", year: "2025", publisher: "Cambridge University Press", featured: true, img: "/cambridge.jpg" },
  { title: "The Hidden Prophets of the Congo", subtitle: "From Kimbangu to the Present", year: "2024", publisher: "AHV Press", img: "/Untitled-22.jpg" },
  { title: "Mantsopa: A Life of Vision", subtitle: "Documenting Lesotho's Prophetic Heritage", year: "2024", publisher: "AHV Press", img: "/c4copy.jpg" },
  { title: "Spiritual Authority and African Governance", subtitle: "IImboni as National Advisors", year: "2023", publisher: "AHV Press", img: "/g6.jpg" },
  { title: "The Khotso Sethuntsa Archives", subtitle: "Collected Testimonies and Field Records", year: "2023", publisher: "AHV Press", img: "/sethuntsa.jpg" },
  { title: "Africa's Indigenous Cosmology", subtitle: "A Research Anthology", year: "2022", publisher: "AHV Press", img: "/9.jpg" },
];

export const metadata = { title: "Publications — African Hidden Voices" };

export default function Publications() {
  const featured = books[0];
  const catalogue = books.slice(1);

  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>Publications</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 22px", color: "var(--ahv-ink)", maxWidth: 800 }}>Scholarship that honours the voices.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 620, margin: 0 }}>The AHV publication series gives academic form to the work of recovery — placing Africa's hidden voices in universities, libraries, and the permanent record.</p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 36 }}>Featured</div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 60, alignItems: "center" }}>
            <Reveal>
              <div style={{ aspectRatio: "2/3", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)", boxShadow: "8px 12px 32px rgba(42,22,20,.15)", position: "relative", display: "flex", alignItems: "flex-end" }}>
                <img src={featured.img} alt={featured.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "relative", width: "100%", padding: 28, background: "linear-gradient(transparent, rgba(42,12,10,.88))" }}>
                  <span style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 22, lineHeight: 1.3, color: "var(--ahv-cream)" }}>{featured.title}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "inline-flex", background: "var(--ahv-gold-band)", borderRadius: 999, padding: "7px 16px", fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-oxblood-deep)", marginBottom: 22 }}>{featured.publisher}</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(24px,3.5vw,38px)", lineHeight: 1.1, margin: "0 0 10px", color: "var(--ahv-ink)" }}>{featured.title}</h2>
              <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 20, color: "var(--ahv-crimson)", margin: "0 0 24px" }}>{featured.subtitle}</p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 32px" }}>Published by Cambridge University Press in 2025 — the first major academic study to trace the lineage of the IMboni tradition from Mantsopa Makhetha through to Imboni Dr. uZwi-Lezwe Radebe. Endorsed by the University of Fort Hare and featured at the 2025 IKS Conference.</p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "16px 28px", borderRadius: 999 }}>Order Book <ArrowRight size={16} /></Link>
                <Link href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, padding: "16px 24px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Read excerpt</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "90px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 46 }}>The Catalogue</div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 28 }}>
            {catalogue.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <div>
                  <div style={{ aspectRatio: "2/3", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(110,19,22,.14)", marginBottom: 18, boxShadow: "4px 6px 20px rgba(42,22,20,.1)", position: "relative", display: "flex", alignItems: "flex-end" }}>
                    <img src={b.img} alt={b.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "relative", width: "100%", padding: "60px 18px 18px", background: "linear-gradient(transparent, rgba(42,12,10,.85))" }}>
                      <span style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 15, lineHeight: 1.3, color: "var(--ahv-cream)" }}>{b.title}</span>
                    </div>
                  </div>
                  <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 6 }}>{b.year} · {b.publisher}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, lineHeight: 1.25, margin: "0 0 4px", color: "var(--ahv-ink)" }}>{b.title}</h3>
                  <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 14.5, color: "#7a635e", margin: 0 }}>{b.subtitle}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-gold-band)", padding: "96px 40px", textAlign: "center", borderTop: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <Reveal>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(20px,3vw,30px)", lineHeight: 1.4, color: "var(--ahv-crimson)" }}>"The AHV publication series marks one of the most significant contributions to indigenous knowledge studies on the African continent."</blockquote>
            <div style={{ marginTop: 26, fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#6b4a2f" }}>University of Fort Hare, IKS Conference Review</div>
          </div>
        </Reveal>
      </section>

      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 20px", color: "var(--ahv-ink)" }}>Collaborate with AHV research.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 34px" }}>We welcome partnerships with universities, academic publishers, and independent researchers.</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", borderRadius: 999 }}>Start a Conversation <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
