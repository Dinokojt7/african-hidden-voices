import Link from "next/link";
import { Play } from "lucide-react";
import Reveal from "@/components/Reveal";

const episodes = [
  { n: "06", title: "The Prophetic Tradition of Lesotho", duration: "48 min", guest: "Dr. Maphula Thoka" },
  { n: "05", title: "Simon Kimbangu and the Congo Spirit", duration: "61 min", guest: "Prof. Eric Wamba" },
  { n: "04", title: "Recovering Isaiah Shembe", duration: "53 min", guest: "Dr. Nozipho Dlamini" },
  { n: "03", title: "The Role of IImboni in Governance", duration: "44 min", guest: "Imboni Dr. uZwi-Lezwe Radebe" },
  { n: "02", title: "Alice Lenshina and the Lumpa Church", duration: "57 min", guest: "Dr. Chisomo Phiri" },
  { n: "01", title: "Why Africa's Voices Were Hidden", duration: "39 min", guest: "Imboni Dr. uZwi-Lezwe Radebe" },
];

const platforms = ["YouTube", "Spotify", "Apple Podcasts"];

export const metadata = { title: "Podcast — African Hidden Voices" };

export default function PodcastPage() {
  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>AHV Dialogue Series</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 800 }}>#UnmaskingAfricanTruths — AIS in conversation.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 640, margin: "0 0 32px" }}>Long-form research dialogues with AIS scholars, practitioners, and institutional voices — exploring African Indigenous Spirituality as a living academic field.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {platforms.map((p) => (
                <div key={p} style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 600, color: "var(--ahv-ink)", padding: "12px 20px", border: "1.5px solid rgba(110,19,22,.25)", borderRadius: 999 }}>
                  {p}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 32 }}>Latest Episode</div>
          </Reveal>
          <Reveal>
            <div style={{ background: "var(--ahv-oxblood-deep)", borderRadius: 16, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "stretch" }}>
              <div style={{ padding: "54px 48px" }}>
                <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 13, letterSpacing: ".14em", color: "var(--ahv-gold-soft)", marginBottom: 18 }}>EPISODE 06</div>
                <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(24px,3.5vw,38px)", lineHeight: 1.12, margin: "0 0 14px", color: "var(--ahv-cream)" }}>The Prophetic Tradition of Lesotho</h2>
                <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "rgba(245,231,192,.7)", margin: "0 0 8px" }}>with Dr. Maphula Thoka · 48 min</p>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "rgba(245,231,192,.8)", margin: "0 0 34px", maxWidth: 540 }}>A deep dive into the prophetic lineage of Mantsopa Anna Makhetha and how her legacy lives in Lesotho to this day — and what it means for a post-colonial Africa seeking its spiritual compass.</p>
                <button style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 15, padding: "17px 30px", borderRadius: 999, border: "none", cursor: "pointer" }}>
                  <Play size={18} fill="var(--ahv-oxblood-deep)" />Play Episode
                </button>
              </div>
              <div style={{ width: 280, flexShrink: 0, overflow: "hidden" }}>
                <img src="/7.jpg" alt="Podcast episode" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", minHeight: 280 }} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "90px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 40 }}>All Episodes</div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {episodes.map((ep) => (
              <Reveal key={ep.n}>
                <div style={{ display: "grid", gridTemplateColumns: "52px 1fr auto", gap: 22, padding: "22px 0", borderTop: "1px solid rgba(110,19,22,.14)", alignItems: "center" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, fontSize: 18, letterSpacing: ".04em", color: "var(--ahv-gold)" }}>{ep.n}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 20, margin: "0 0 4px", color: "var(--ahv-ink)" }}>{ep.title}</h3>
                    <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "#7a635e" }}>{ep.guest} · {ep.duration}</div>
                  </div>
                  <button style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: "50%", border: "1.5px solid var(--ahv-crimson)", background: "transparent", cursor: "pointer", flexShrink: 0 }}>
                    <Play size={15} fill="var(--ahv-crimson)" color="var(--ahv-crimson)" />
                  </button>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(110,19,22,.14)" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 20px", color: "var(--ahv-ink)" }}>Read the books behind the voices.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 34px" }}>The AHV publication series extends the podcast into rigorous academic form.</p>
            <Link href="/publications" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", borderRadius: 999 }}>Explore Publications</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
