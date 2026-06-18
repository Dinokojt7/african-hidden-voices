import Link from "next/link";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

const lineage = [
  { dates: "1793–1908", name: "Mantsopa Anna Makhetha", note: "The most renowned spiritual guide of present-day Lesotho, in whose words researchers find predictions applicable to the Imboni." },
  { dates: "1887–1951", name: "Simon Kimbangu", note: "Founder of the great Congo-based spiritual movement, part of the prophetic tradition foretelling the IImboni to come." },
  { dates: "1898–1972", name: "Khotso Sethuntsa", note: "Born in Lesotho, of international fame in the Eastern Cape — operating in the tradition of Mantsopa." },
];

const honours = [
  { year: "2025", title: "Honorary Doctorate, New York", note: "Conferred by the HJ International Graduate School for Peace and Public Leadership." },
  { year: "2025", title: "Cambridge University Press", note: "Subject of a scholarly book on the revival of African Indigenous Spirituality." },
  { year: "2025", title: "Fort Hare Keynote", note: "Delivered the closing keynote at the Indigenous Knowledge Systems Conference." },
];

export const metadata = { title: "The Imboni — African Hidden Voices" };

export default function Imboni() {
  return (
    <>
      <header style={{ padding: "70px 40px 84px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 58, alignItems: "center" }}>
          <Reveal>
            <div style={{ aspectRatio: "3/4", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)" }}>
              <img src="/founder.jpg" alt="Imboni Dr. uZwi-Lezwe Radebe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>The Founder</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(32px,4vw,48px)", lineHeight: 1.08, margin: "0 0 8px", color: "var(--ahv-ink)" }}>iNkosi yamaKhosi oMoya</h1>
            <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 26, color: "var(--ahv-crimson)", margin: "0 0 26px" }}>Imboni Dr. uZwi-Lezwe Radebe</p>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "#5e4742", margin: 0 }}>Spiritual guide of immaculate foresight and indigenous wisdom, founder of African Hidden Voices and The Revelation Spiritual Home — designated, his followers hold, by the Creator UMfihlakalo to guide a nation from a lineage of IImboni as old as Africa itself.</p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 46 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>A distinction</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, margin: 0, color: "var(--ahv-ink)" }}>Not a prophet. An IMboni.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            <Reveal>
              <div style={{ background: "var(--ahv-parchment-2)", borderRadius: 12, padding: "38px 32px", height: "100%" }}>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 12px", color: "var(--ahv-ink)" }}>A prophet</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>An inspired preacher who speaks for God — a messenger of the word.</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ background: "var(--ahv-oxblood-deep)", borderRadius: 12, padding: "38px 32px", color: "var(--ahv-cream)", height: "100%" }}>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 12px", color: "var(--ahv-gold-soft)" }}>An IMboni</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(245,231,192,.85)", margin: 0 }}>A spiritual guide of immaculate foresight whose revelations are of national importance, from a designated lineage — much more than a prophet.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>The Lineage</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, margin: "0 0 16px", color: "var(--ahv-ink)" }}>Foretold by those who came before.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>The coming of an IMboni is foreseen by earlier IImboni and spiritual masters. Researchers trace predictions applicable to Imboni Radebe through Africa's great spiritual guides.</p>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {lineage.map((l) => (
              <Reveal key={l.name}>
                <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 26, padding: "26px 0", borderTop: "1px solid rgba(110,19,22,.16)" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 15, letterSpacing: ".03em", color: "var(--ahv-crimson)" }}>{l.dates}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 6px", color: "var(--ahv-ink)" }}>{l.name}</h3>
                    <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{l.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(110,19,22,.16)" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 600, marginBottom: 50 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Recognition</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>Honoured across the world.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
            {honours.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div style={{ background: "var(--ahv-parchment-2)", borderRadius: 12, padding: "34px 30px", borderTop: "3px solid var(--ahv-gold)", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 12 }}>{h.year}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 21, lineHeight: 1.25, margin: "0 0 10px", color: "var(--ahv-ink)" }}>{h.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{h.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-gold-band)", padding: "96px 40px", textAlign: "center", borderTop: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <Reveal>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.32, color: "var(--ahv-crimson)" }}>"People respect what is revealed to them."</blockquote>
            <div style={{ marginTop: 26, fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#6b4a2f" }}>Imboni Dr. uZwi-Lezwe Radebe</div>
          </div>
        </Reveal>
      </section>

      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 20px", color: "var(--ahv-ink)" }}>Hear the teachings.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 34px" }}>Explore the AHV Podcast and the books carrying these revelations to the world.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <a href="https://www.youtube.com/@africanhiddenvoicesunmaski830" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", borderRadius: 999 }}>Watch on YouTube</a>
              <Link href="/publications" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 28px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Read the Books</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
