import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const hierarchy = [
  { step: "Spirit", body: "Spirit is the origin of all knowing." },
  { step: "Revelation", body: "Revelation is the language through which Spirit expresses itself." },
  { step: "Practice", body: "Practice is the activation of revelation in lived experience." },
  { step: "Knowledge Systems", body: "Knowledge systems emerge as structured interpretations of spiritual reality." },
];

export const metadata = { title: "About & Framework — African Hidden Voices" };

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>About & Framework</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 900 }}>About African Hidden Voices (AHV)</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 720, margin: 0 }}>
              The African Hidden Voices (AHV) is a research and institutional platform established through the revelation of <strong>HSRM</strong> Imboni Dr. Uzwi Lezwe Radebe. It exists as part of a broader restoration mandate aimed at repositioning African Indigenous Spirituality (AIS) as a living, revealed, and foundational expression of Spirit within human existence.
            </p>
          </Reveal>
        </div>
      </header>

      {/* INSTITUTIONAL IDENTITY */}
      <section style={{ padding: "110px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 60, alignItems: "center" }}>
          <Reveal>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              AHV is not a movement, belief system, or cultural organisation. It is an institutional framework designed to engage Spirit, revelation, and knowledge systems in a structured dialogue with academic, spiritual, governmental, and global institutions.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              At its core, AHV operates from the understanding that African Indigenous Spirituality is not constructed by human reasoning but is <strong style={{ color: "var(--ahv-ink)" }}>revealed through Spirit and experienced through revelation</strong>.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5e4742", margin: 0 }}>
              Within this understanding, African Indigenous Spirituality is not a system but <strong style={{ color: "var(--ahv-ink)" }}>Spirit in expression</strong>. It is known through revelation, activated through practice, and sustained through spiritual hierarchy. What is often referred to as Indigenous Knowledge Systems (IKS) is understood within AHV as a secondary expression, emerging from Spirit, rather than constituting its origin.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ aspectRatio: "4/5", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)" }}>
              <img src="/Untitled-25.jpg" alt="AHV gathering" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIERARCHY: Spirit → Revelation → Practice → Systems */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 620, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Order of Existence</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>A clear and non-reversible order.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>
                African Indigenous Spirituality follows a clear and non-reversible order of existence. This framework ensures that Spirit remains primary, while all systems remain derivative and subordinate to revelation.
              </p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 0, borderTop: "1px solid rgba(110,19,22,.1)" }}>
            {hierarchy.map(({ step, body }, i) => (
              <Reveal key={step} delay={i * 80}>
                <div style={{ padding: "36px 28px", borderRight: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 13, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 14 }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 12px", color: "var(--ahv-ink)" }}>{step}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.68, color: "#5e4742", margin: 0 }}>{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVELATION */}
      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>Revelation</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 28px", color: "var(--ahv-ink)" }}>The method through which Spirit is accessed and understood.</h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              Revelation within AHV is not treated as symbolic or interpretive, but as an active mode of knowledge transmission. It is through revelation that advanced spiritual understanding, frameworks for life, and principles of existence are made known. In this sense, revelation is not a subject of study alone, but the <strong style={{ color: "var(--ahv-ink)" }}>method through which Spirit is accessed and understood</strong>.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: 0 }}>
              This introduces a critical epistemological structure within AHV research, which balances internal spiritual knowing with external academic articulation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EMIC-ETIC RESEARCH FRAMEWORK */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 620, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Research Framework</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>Emic–Etic Structure.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>AHV operates through a dual-layered approach. While academic frameworks are essential for communication and institutional engagement, they remain secondary to revelation, which is the primary source of knowledge within African Indigenous Spirituality.</p>
            </div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "stretch" }}>
            <Reveal delay={80}>
              <div style={{ background: "var(--ahv-oxblood)", color: "var(--ahv-cream)", borderRadius: 12, padding: "44px 38px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,75,.18), transparent 70%)", pointerEvents: "none" }} />
                <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 13, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 22 }}>EMIC</div>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 28, lineHeight: 1.2, margin: "0 0 18px" }}>Internal Dimension</h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "rgba(245,231,192,.85)", margin: 0 }}>Internal, revelatory, and spiritually experienced — forming the origin of knowledge and meaning. This is the primary source within AHV's research structure.</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div style={{ background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.14)", borderRadius: 12, padding: "44px 38px" }}>
                <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 13, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 22 }}>ETIC</div>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 28, lineHeight: 1.2, margin: "0 0 18px", color: "var(--ahv-ink)" }}>External Dimension</h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>External, analytical, and academic — providing structure for documentation and interdisciplinary engagement. Essential for institutional communication, but secondary to revelation.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PSCB FRAMEWORK */}
      <section style={{ padding: "110px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>PSCB Framework</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,38px)", lineHeight: 1.15, margin: "0 0 22px", color: "var(--ahv-ink)" }}>Physical Spiritual Central Being.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5e4742", margin: "0 0 20px" }}>
              A central principle within AHV is the recognition of the <strong style={{ color: "var(--ahv-ink)" }}>Physical Spiritual Central Being (PSCB)</strong>. The PSCB is understood as a bridge between Spirit and humanity, serving as a central point through which revelation is accessed, interpreted, and transmitted into practice.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#5e4742", margin: 0 }}>
              Within this framework, it is understood that African Indigenous Spirituality cannot be fully studied, interpreted, or practiced outside the guidance of a PSCB, as revelation is not universally self-generated but is spiritually mediated through this structure. Without this mediation, practice becomes disconnected from its source, and knowledge becomes externalised and incomplete.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.14)", aspectRatio: "4/3" }}>
              <img src="/7.jpg" alt="AHV institutional engagement" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSTITUTIONAL EVOLUTION */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>Institutional Evolution</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 28px", color: "var(--ahv-ink)" }}>From dialogue platform to structured research institution.</h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              AHV was originally established as a dialogue platform to restore engagement among Imboni, Spirit Kings, and spiritual leaders across Africa. This initial phase focused on reviving recognition, restoring voice, and re-establishing spiritual interaction within African Indigenous Spirituality.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              However, AHV has since evolved beyond restoration into a structured research and institutional body. It now operates across academic, spiritual, governmental, and interdisciplinary spaces, ensuring that African Indigenous Spirituality is not only preserved, but properly represented, documented, and engaged at institutional level.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: 0 }}>
              AHV also recognises Africa as the origin of humanity, and within this context, African Indigenous Spirituality is understood as the earliest expression of Spirit within human existence. From this position, global spiritual systems are not separate or isolated constructs, but rather expressions that developed over time from an original spiritual source.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MANDATE QUOTE */}
      <section style={{ background: "var(--ahv-gold-band)", padding: "96px 40px", textAlign: "center", borderTop: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <Reveal>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <blockquote style={{ margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(20px,3vw,30px)", lineHeight: 1.45, color: "var(--ahv-crimson)" }}>
              "The restoration of African Indigenous Spirituality is inseparable from the restoration of the universal concept of spirituality."
            </blockquote>
            <div style={{ marginTop: 28, fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "#6b4a2f" }}>African Hidden Voices — Institutional Position</div>
          </div>
        </Reveal>
      </section>

      {/* GLOBAL MANDATE */}
      <section style={{ padding: "110px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>Mandate & Global Positioning</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 28px", color: "var(--ahv-ink)" }}>A clear institutional mandate.</h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              AHV therefore operates with a clear institutional mandate. It works closely with spiritual institutions, academic institutions, financial institutions, government bodies, and interdisciplinary research sectors. Its role is to inform, educate, guide, clarify, conscientise, and restore spiritual understanding within both African and global institutional contexts.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: "0 0 22px" }}>
              In doing so, AHV ensures that African Indigenous Spirituality is not reduced to theory, culture, or abstract classification, but is engaged as a <strong style={{ color: "var(--ahv-ink)" }}>living spiritual reality</strong> that informs knowledge, governance, society, and global systems.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.8, color: "#5e4742", margin: 0 }}>
              Ultimately, AHV maintains a foundational position: African Indigenous Spirituality is not a system to be constructed, but a Spirit to be revealed, experienced, and lived. All frameworks, disciplines, and institutional expressions must remain subordinate to Spirit, guided by revelation, and aligned with spiritual hierarchy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 20px", color: "var(--ahv-ink)" }}>Engage with the research.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 34px" }}>Explore the IImboni Database, browse our Areas of Study, or reach out to discuss academic and institutional collaboration.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/areas-of-study" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", borderRadius: 999 }}>Areas of Study</Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 28px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Partner With AHV</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
