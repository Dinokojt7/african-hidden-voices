import Link from "next/link";
import { Search } from "lucide-react";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

const people = [
  { name: "Mantsopa Anna Makhetha", desc: "Prophet of Lesotho, 1793–1908" },
  { name: "Simon Kimbangu", desc: "Congo spiritual leader, 1887–1951" },
  { name: "Khotso Sethuntsa", desc: "Lesotho / Eastern Cape, 1898–1972" },
  { name: "Isaiah Shembe", desc: "Founder of Nazareth Church, 1870–1935" },
  { name: "Alice Lenshina", desc: "Lumpa Church, Zambia, 1920–1978" },
  { name: "Nehemia Tile", desc: "Tembu National Church, 1850–1891" },
  { name: "Nontetha Nkwenkwe", desc: "Xhosa prophetess, 1875–1935" },
  { name: "Samuel Maharero", desc: "Herero spiritual leader, 1856–1923" },
  { name: "Nongqawuse", desc: "Xhosa visionary, 1840–1898" },
];

const filters = ["All", "Southern Africa", "East Africa", "Central Africa", "Prophets", "Kings"];

const steps = [
  { n: "I", title: "Locate", body: "Our researchers travel across the continent to find IImboni whose stories were deliberately erased." },
  { n: "II", title: "Document", body: "Oral testimonies, archival records, and field interviews are gathered and preserved." },
  { n: "III", title: "Honour", body: "Each voice is returned to the record — published, celebrated, and taught in full context." },
];

export const metadata = { title: "Archive — African Hidden Voices" };

export default function Archive() {
  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>The Archive</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 800 }}>The recovered voices of Africa.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 640, margin: "0 0 36px" }}>A living archive of IImboni, prophets, kings, and spiritual leaders whose stories were buried. Each entry is the result of field research, oral testimony, and academic collaboration.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--ahv-parchment-2)", border: "1.5px solid rgba(110,19,22,.2)", borderRadius: 10, padding: "0 18px", maxWidth: 500 }}>
              <Search size={18} color="var(--ahv-muted,#7a635e)" />
              <input type="text" placeholder="Search the archive…" style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-hanken)", fontSize: 15, color: "var(--ahv-ink)", padding: "16px 0" }} />
            </div>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "60px 40px 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {filters.map((f, i) => (
            <button key={f} style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, letterSpacing: ".06em", padding: "10px 20px", borderRadius: 999, border: i === 0 ? "1.5px solid var(--ahv-crimson)" : "1.5px solid rgba(110,19,22,.25)", background: i === 0 ? "var(--ahv-crimson)" : "transparent", color: i === 0 ? "var(--ahv-cream)" : "var(--ahv-ink)", cursor: "pointer" }}>{f}</button>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 40px 110px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 22 }}>
            {people.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <Link href="#" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                  <div style={{ background: "var(--ahv-parchment-2)", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(110,19,22,.12)", transition: "transform .2s" }}>
                    <Placeholder label="portrait" style={{ aspectRatio: "4/3", width: "100%" }} />
                    <div style={{ padding: "20px 22px" }}>
                      <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 20, lineHeight: 1.2, margin: "0 0 5px", color: "var(--ahv-ink)" }}>{p.name}</h3>
                      <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "#7a635e", margin: 0 }}>{p.desc}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 50, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Methodology</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>How we restore each voice.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 28 }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 32, letterSpacing: ".06em", color: "var(--ahv-gold)", marginBottom: 14 }}>{s.n}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 10px", color: "var(--ahv-ink)" }}>{s.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 40px" }}>
        <Reveal>
          <div style={{ maxWidth: 900, margin: "0 auto", background: "var(--ahv-oxblood-deep)", borderRadius: 16, padding: "64px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(26px,4vw,36px)", lineHeight: 1.15, margin: "0 0 16px", color: "var(--ahv-gold-soft)" }}>Do you know a hidden voice?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(245,231,192,.8)", margin: "0 0 32px" }}>If you carry knowledge of an IMboni, prophet, or spiritual leader whose work has been overlooked — we want to hear from you.</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Submit a Voice</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
