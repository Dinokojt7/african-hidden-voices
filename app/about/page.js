import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  { title: "Authenticity", body: "Every research record is grounded in primary sources, oral testimony, and verified historical evidence — free of colonial distortion." },
  { title: "Sovereignty", body: "AIS is studied on its own terms. We do not subordinate African epistemology to Western academic frameworks." },
  { title: "Rigour", body: "The work meets the standards of international scholarship — peer-reviewed, institutionally engaged, and academically credible." },
  { title: "Dialogue", body: "Knowledge must circulate. We publish, broadcast, and convene to ensure AIS research reaches the communities it describes." },
];

export const metadata = { title: "About — African Hidden Voices" };

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>About African Hidden Voices</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 900 }}>Understanding African Indigenous Spirituality.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 680, margin: 0 }}>AHV is a global academic research institution dedicated to the study, documentation, and advancement of African Indigenous Spirituality — establishing it as a legitimate and rigorous field of inquiry on the world stage.</p>
          </Reveal>
        </div>
      </header>

      {/* WHAT IS AIS — FULL DEFINITION */}
      <section style={{ padding: "110px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 60, alignItems: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>African Indigenous Spirituality</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, margin: "0 0 22px", color: "var(--ahv-ink)" }}>A complete system of thought — not a belief, a science.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 18px" }}>African Indigenous Spirituality (AIS) is not a religion, not a cultural curiosity, and not a relic of the past. It is a total cosmological system — encoding how communities organise politically, how knowledge is created and transmitted, how justice is understood, and how human beings relate to the cosmos, the land, and the divine.</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: 0 }}>AHV's founding premise is that AIS constitutes a body of knowledge equal in depth and rigour to any other tradition of human inquiry — and that the world has been impoverished by its systematic erasure. Our work is to reverse that erasure through research, documentation, and institutional engagement.</p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ aspectRatio: "4/5", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)" }}>
              <img src="/Untitled-25.jpg" alt="AHV gathering" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EMIC-ETIC RESEARCH MODEL */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 620, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Our Research Model</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>The Emic-Etic Framework.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>AHV applies a rigorous dual-lens methodology to the study of African Indigenous Spirituality — drawing on both the insider's experience and the outside observer's analytical framework.</p>
            </div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
            <Reveal delay={80}>
              <div style={{ background: "var(--ahv-oxblood)", color: "var(--ahv-cream)", borderRadius: 12, padding: "44px 38px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,75,.18), transparent 70%)", pointerEvents: "none" }} />
                <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 13, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 22 }}>EMIC</div>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 28, lineHeight: 1.2, margin: "0 0 18px" }}>The Insider Perspective</h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "rgba(245,231,192,.82)", margin: 0 }}>We privilege the testimony of practitioners — IImboni, sangomas, traditional leaders, and community custodians who embody AIS knowledge. Their voice is the primary source. Our research begins here, with the lived cosmology of those inside the tradition.</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div style={{ background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.14)", borderRadius: 12, padding: "44px 38px" }}>
                <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 13, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 22 }}>ETIC</div>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 28, lineHeight: 1.2, margin: "0 0 18px", color: "var(--ahv-ink)" }}>The Analytical Lens</h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>We apply the analytical tools of the academy — comparative religion, political philosophy, sociology, history, and epistemology — to frame AIS for global scholarly discourse. This is how insider knowledge becomes internationally legible without losing its integrity.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PSCB FRAMEWORK */}
      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>The PSCB Framework</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>How AIS operates across society.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>AHV's research is structured around four domains through which African Indigenous Spirituality expresses itself as a governing intelligence — the Political, Social, Cultural, and Biological pillars of African life.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 24 }}>
            {[
              { letter: "P", title: "Political", body: "AIS encodes systems of governance, authority, and legitimacy — from kingship and chieftaincy to advisory councils of IImboni who guide national leadership." },
              { letter: "S", title: "Social", body: "Community formation, kinship structures, conflict resolution, and ethics are all governed by AIS principles that predate and outlast colonial administrative systems." },
              { letter: "C", title: "Cultural", body: "Language, ritual, ceremony, art, music, and oral tradition are not decoration — they are the carrier medium for AIS knowledge, transmitting cosmological understanding across generations." },
              { letter: "B", title: "Biological", body: "AIS addresses the body, health, and ecology through indigenous medicine, environmental stewardship, and a cosmology that positions the natural world as spiritually intelligible." },
            ].map((item, i) => (
              <Reveal key={item.letter} delay={i * 90}>
                <div style={{ background: "var(--ahv-parchment-2)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 12, padding: "34px 28px", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 38, color: "var(--ahv-gold)", marginBottom: 16, lineHeight: 1 }}>{item.letter}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 12px", color: "var(--ahv-ink)" }}>{item.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.68, color: "#5e4742", margin: 0 }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL EVOLUTION */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 60, alignItems: "center" }}>
          <Reveal delay={120}>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.14)", aspectRatio: "4/3" }}>
              <img src="/7.jpg" alt="AHV institutional engagement" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </Reveal>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Our Evolution</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, margin: "0 0 22px", color: "var(--ahv-ink)" }}>From archival recovery to global research institution.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 18px" }}>AHV began as a mission of recovery — locating the forgotten IImboni and prophets of Southern Africa whose records colonialism had suppressed or destroyed. That mission remains central to our work.</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 18px" }}>But the scope has grown. Today, AHV operates as a full research institution — producing academic scholarship, hosting international conferences, partnering with universities on four continents, and building the infrastructure for AIS to take its place in the global academy.</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: 0 }}>The goal is not preservation alone. It is legitimacy, recognition, and the permanent establishment of African Indigenous Spirituality as a field of intellectual inquiry.</p>
          </Reveal>
        </div>
      </section>

      {/* GLOBAL POSITIONING */}
      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 600, marginBottom: 52 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Our Principles</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>What guides the work.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 22 }}>
            {principles.map((v, i) => (
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

      {/* QUOTE BAND */}
      <section style={{ background: "var(--ahv-gold-band)", padding: "96px 40px", textAlign: "center", borderTop: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <Reveal>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(22px,3vw,34px)", lineHeight: 1.35, color: "var(--ahv-crimson)" }}>"It is these IImboni who were, and still are, given visions by The Creator to charter the future of our motherland."</blockquote>
            <div style={{ marginTop: 28, fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#6b4a2f" }}>Imboni Dr. uZwi-Lezwe Radebe</div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 20px", color: "var(--ahv-ink)" }}>Engage with the research.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 34px" }}>Explore the IImboni Database, browse our Areas of Study, or reach out to discuss academic collaboration.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/areas-of-study" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", borderRadius: 999 }}>Areas of Study</Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 28px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Collaborate with AHV</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
