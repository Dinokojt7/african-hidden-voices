import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const disciplines = [
  {
    title: "Economics & Resource Systems",
    desc: "How AIS governs land tenure, resource allocation, wealth distribution, and trade — revealing a pre-colonial economic philosophy with direct relevance to contemporary development debates.",
    img: "/g6.jpg",
    focus: ["Land sovereignty", "Indigenous trade systems", "Communal resource ethics", "Spiritual economics"],
  },
  {
    title: "Governance & Political Philosophy",
    desc: "Kingship, chieftaincy, and the advisory role of IImboni in governance — examining how African Indigenous Spirituality underpins legitimate political authority and national decision-making.",
    img: "/Untitled-22.jpg",
    focus: ["Customary law", "IImboni as national advisors", "Chieftaincy systems", "Spiritual legitimacy"],
  },
  {
    title: "Philosophy & Epistemology",
    desc: "African logic, metaphysics, and theories of knowledge — studying how AIS constructs reality, frames ethical reasoning, and establishes what counts as knowledge and who is qualified to hold it.",
    img: "/l5.jpg",
    focus: ["Ubuntu epistemology", "African metaphysics", "Cosmological logic", "Oral knowledge systems"],
  },
  {
    title: "Social Systems & Ethics",
    desc: "Kinship structures, ubuntu philosophy, conflict resolution, and community ethics as expressed through AIS — showing how spirituality functions as the binding architecture of African social life.",
    img: "/2.jpg",
    focus: ["Ubuntu ethics", "Kinship & lineage", "Restorative justice", "Community formation"],
  },
  {
    title: "Indigenous Knowledge Systems (IKS)",
    desc: "The systematic study of traditional herbalism, ecology, astronomy, calendrical knowledge, and healing — positioning IKS within the broader AIS cosmology from which it draws its authority.",
    img: "/sli3.jpg",
    focus: ["Traditional medicine", "Ecological stewardship", "Astronomical knowledge", "Healing cosmology"],
  },
  {
    title: "Science Division",
    desc: "Bridging AIS with contemporary scientific frameworks — exploring areas of convergence between indigenous cosmological understanding and modern physics, biology, neuroscience, and systems theory.",
    img: "/l1.jpg",
    focus: ["Consciousness studies", "Quantum cosmology", "Indigenous ecology", "Integrative science"],
  },
];

export const metadata = { title: "Areas of Study — African Hidden Voices" };

export default function AreasOfStudy() {
  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>Areas of Study</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 900 }}>Six disciplines of African Indigenous Spirituality.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 680, margin: 0 }}>AIS is not a single subject — it is a total system of knowledge expressed across every dimension of human life. AHV's research is structured around six core disciplines, each forming a distinct but interconnected area of academic inquiry.</p>
          </Reveal>
        </div>
      </header>

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
