import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

const values = [
  { title: "Authenticity", body: "Restoring the genuine gifts of our IImboni, free of foreign distortion." },
  { title: "Sovereignty", body: "Reclaiming Africa's spiritual authority and right to its own wisdom." },
  { title: "Dialogue", body: "A living platform where the voices of IImboni speak and are heard." },
  { title: "Scholarship", body: "Rigorous research that earns its place in universities and the record." },
];

const team = [
  { name: "Research Lead", role: "Field documentation" },
  { name: "Oral Historian", role: "Testimony & archives" },
  { name: "Field Researcher", role: "Southern Africa" },
  { name: "Editorial Lead", role: "Publishing & media" },
];

export const metadata = { title: "About — African Hidden Voices" };

export default function About() {
  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>About African Hidden Voices</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 900 }}>Retracing the voices that shaped a continent.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 680, margin: 0 }}>A pan-African research institution born of divine and visionary inspiration — assembling the IImboni, Kings and spiritual leaders of Africa under one roof, to give their wisdom the honour, study and voice it was long denied.</p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 60, alignItems: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Our Origin</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, margin: "0 0 22px", color: "var(--ahv-ink)" }}>A vision to lift the cloud of doubt.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 18px" }}>The origins of African Hidden Voices emanate from the divine and visionary inspiration of Imboni Dr. uZwi-Lezwe Radebe. Its objective is to retrace the steps and works of our gallant IImboni, Kings and spiritual leaders — and to resuscitate the authenticity of their gifts, past and present, across the Continent.</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: 0 }}>Foreign influences and the passage of time drew a cloud of doubt and uncertainty over our African trailblazers. AHV exists as a dialogue platform to assure that the voices of these gallant IImboni are no longer suppressed — and that their advisory role to our governments is revived.</p>
          </Reveal>
          <Reveal delay={120}>
            <Placeholder label={"archival photograph\nor gathering"} style={{ aspectRatio: "4/5", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)" }} />
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 24 }}>
            {[{ num: "I", title: "Our Mission", body: "To search every nook and cranny of Southern Africa for the forgotten IImboni, and document their gifts with rigour and reverence." }, { num: "II", title: "Our Vision", body: "An Africa reconnected to its highest spiritual authority — where indigenous wisdom leads in every sphere of national life." }, { num: "III", title: "Our Mandate", body: "To revive the dialogue between IImboni and restore their advisory role to government in South Africa and, by extension, the continent." }].map((item, i) => (
              <Reveal key={item.num} delay={i * 100}>
                <div style={{ background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 12, padding: "38px 30px", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 15, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 18 }}>{item.num}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 24, margin: "0 0 14px", color: "var(--ahv-ink)" }}>{item.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 600, marginBottom: 52 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>What guides us</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>Four principles hold the work.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 22 }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div style={{ borderTop: "3px solid var(--ahv-gold)", paddingTop: 22 }}>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 21, margin: "0 0 10px", color: "var(--ahv-ink)" }}>{v.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 48 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>The Research Team</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>A team of young warriors.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>Imboni Dr. uZwi-Lezwe Radebe tasked a zealous team of young researchers to find the forgotten IImboni and assemble them under one roof — ready to give them honour and praise.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 22 }}>
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div>
                  <Placeholder label="photo" style={{ aspectRatio: "1/1", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.12)", marginBottom: 16 }} />
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, margin: "0 0 3px", color: "var(--ahv-ink)" }}>{m.name}</h3>
                  <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "#7a635e", margin: 0 }}>{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-gold-band)", padding: "96px 40px", textAlign: "center", borderTop: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <Reveal>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(22px,3vw,34px)", lineHeight: 1.35, color: "var(--ahv-crimson)" }}>"It is these IImboni who were, and still are, given visions by The Creator to charter the future of our motherland."</blockquote>
            <div style={{ marginTop: 28, fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#6b4a2f" }}>Imboni Dr. uZwi-Lezwe Radebe</div>
          </div>
        </Reveal>
      </section>

      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 20px", color: "var(--ahv-ink)" }}>Be part of the work.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 34px" }}>Explore the archive of recovered voices, or join the dialogue restoring African spiritual wisdom.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", borderRadius: 999 }}>Explore the Archive</Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 28px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Get Involved</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
