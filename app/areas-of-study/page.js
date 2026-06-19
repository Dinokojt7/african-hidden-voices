import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const disciplines = [
  {
    title: "AIS & Economics",
    img: "/g6.jpg",
    focus: ["Scarcity vs abundance frameworks", "Spiritual value systems", "Restoration economics"],
    desc: "Examining African Indigenous Spirituality in relation to economic thought — exploring how Spirit-led frameworks reframe questions of scarcity, value, and resource distribution within a restoration-driven model.",
  },
  {
    title: "AIS & Governance",
    img: "/Untitled-22.jpg",
    focus: ["Spiritual leadership structures", "Role of Imboni and PSCBs", "Ethical governance systems"],
    desc: "Studying the role of spiritual authority in governance — including the function of Imboni and PSCBs as guides for national leadership, and the ethical structures that emerge from a Spirit-led understanding of power.",
  },
  {
    title: "AIS & Philosophy",
    img: "/l5.jpg",
    focus: ["Purpose of human existence", "Limits of Western epistemology", "Revelation-based ontology"],
    desc: "Engaging African Indigenous Spirituality as a complete philosophical system — exploring purpose, existence, and knowing through a revelation-based ontology that challenges and extends the limits of Western epistemological frameworks.",
  },
  {
    title: "AIS & Social Systems",
    img: "/2.jpg",
    focus: ["Community structure", "African social organisation", "Cultural continuity"],
    desc: "Analysing how AIS shapes community formation, social organisation, and cultural continuity — showing how Spirit-led principles underpin African social life across generations and geographies.",
  },
  {
    title: "AIS & Knowledge Systems",
    img: "/sli3.jpg",
    focus: ["AIS as origin (Spirit)", "IKS as derived structure", "Knowledge hierarchy"],
    desc: "Examining the relationship between AIS and Indigenous Knowledge Systems (IKS) — positioning AIS as the spiritual origin from which IKS emerges as a derived structure, and establishing the proper knowledge hierarchy within AHV's research framework.",
  },
];

const scienceDivision = [
  { title: "AIS Mathematics", desc: "Number, order, hierarchy, and spiritual structure — exploring the mathematical dimensions of AIS cosmological understanding." },
  { title: "AIS Science", desc: "Revelation-informed natural understanding — engaging the natural world through the epistemological lens of AIS." },
  { title: "AIS Cosmology", desc: "Universal order and spiritual structure of existence — studying the cosmos as understood through African Indigenous Spirituality." },
  { title: "AIS Archaeology", desc: "Revelation-informed interpretation of ancient civilisations — reading archaeological evidence through an AIS framework." },
  { title: "AIS Geology", desc: "Earth as spiritual structure and living order — engaging geological knowledge within a Spirit-led understanding of the natural world." },
];

export const metadata = { title: "Areas of Study — African Hidden Voices" };

export default function AreasOfStudy() {
  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>Areas of Study — Core Academic Hub</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 900 }}>AIS across disciplines.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 680, margin: 0 }}>AHV engages multiple fields of study, including African Indigenous Spirituality in relation to economics, governance, philosophy, social systems, and knowledge systems — all understood as expressions within a Spirit-led epistemological framework.</p>
          </Reveal>
        </div>
      </header>

      {/* CORE DISCIPLINES */}
      <section style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
          {disciplines.map((d, i) => (
            <Reveal key={d.title}>
              <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? ".9fr 1.1fr" : "1.1fr .9fr", gap: 60, alignItems: "center", padding: "72px 0", borderTop: i === 0 ? "none" : "1px solid rgba(110,19,22,.1)" }}>
                {i % 2 !== 0 && (
                  <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.14)", aspectRatio: "4/3" }}>
                    <img src={d.img} alt={d.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 13, letterSpacing: ".18em", color: "var(--ahv-gold)", marginBottom: 20 }}>0{i + 1}</div>
                  <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(26px,3.5vw,36px)", lineHeight: 1.12, margin: "0 0 18px", color: "var(--ahv-ink)" }}>{d.title}</h2>
                  <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 28px" }}>{d.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {d.focus.map((tag) => (
                      <span key={tag} style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, letterSpacing: ".08em", color: "var(--ahv-oxblood)", background: "var(--ahv-gold-band)", borderRadius: 999, padding: "6px 14px", border: "1px solid rgba(201,162,75,.4)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                {i % 2 === 0 && (
                  <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.14)", aspectRatio: "4/3" }}>
                    <img src={d.img} alt={d.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AIS SCIENCE DIVISION */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 660, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>AIS Science Division</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>Scientific and cosmological inquiry.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>AHV extends into scientific and cosmological inquiry through structured disciplines — all understood as subfields within a Spirit-led epistemological framework. These are not separate from AIS; they are expressions of it.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 24 }}>
            {scienceDivision.map((sub, i) => (
              <Reveal key={sub.title} delay={i * 70}>
                <div style={{ background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 12, padding: "34px 28px", borderTop: "3px solid var(--ahv-gold)", height: "100%" }}>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 20, margin: "0 0 12px", color: "var(--ahv-ink)" }}>{sub.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.68, color: "#5e4742", margin: 0 }}>{sub.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ahv-oxblood)", color: "var(--ahv-cream)", padding: "110px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 24 }}>Collaborate</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,44px)", lineHeight: 1.12, margin: "0 0 22px" }}>Bring your institution into the study of AIS.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(245,231,192,.8)", margin: "0 0 40px" }}>We partner with universities, research councils, and cultural institutions to develop AIS curricula, joint research programmes, and cross-disciplinary scholarship.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Propose a Partnership <ArrowRight size={17} strokeWidth={2.2} /></Link>
              <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 28px", border: "1px solid rgba(245,231,192,.35)", borderRadius: 999 }}>Browse Research</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
