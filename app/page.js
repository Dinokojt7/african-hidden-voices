"use client";
"use client";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useState } from "react";

function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  return (
    <section style={{ background: "var(--ahv-red)", borderBottom: "4px solid var(--ahv-gold)", padding: "28px 24px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        {/* Icon + copy */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, flex: "1 1 240px", minWidth: 0 }}>
          <div style={{ width: 42, height: 42, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/weekly.svg" alt="" width={42} height={42} style={{ width: 42, height: 42, objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: "clamp(14px,3.5vw,17px)", fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>Sign up for our weekly newsletter</div>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: "clamp(12px,3vw,14px)", color: "rgba(255,255,255,.6)", marginTop: 4 }}>Fresh research delivered Saturday mornings</div>
          </div>
        </div>

        {/* Divider — desktop only */}
        <div style={{ width: 1, height: 36, background: "rgba(255,255,255,.15)", flexShrink: 0 }} className="hidden lg:block" />

        {/* Form */}
        {status === "success" ? (
          <div style={{ fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 600, color: "var(--ahv-gold)" }}>You're subscribed. Thank you.</div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flex: "1 1 260px", maxWidth: 400 }}>
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={{ flex: 1, fontFamily: "var(--font-hanken)", fontSize: 14, background: "rgba(255,255,255,.1)", border: "1.5px solid rgba(255,255,255,.25)", borderRadius: 4, padding: "9px 14px", color: "#fff", outline: "none", minWidth: 0 }}
            />
            <button type="submit" disabled={status === "loading"} style={{ flexShrink: 0, background: "var(--ahv-gold)", color: "var(--ahv-red)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 13.5, border: "none", borderRadius: 4, padding: "9px 20px", cursor: "pointer", whiteSpace: "nowrap" }}>
              {status === "loading" ? "…" : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ── shared style helpers ── */
const EYEBROW = { fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 14 };
const SECTION_H2 = { fontFamily: "var(--font-spectral)", fontWeight: 400, lineHeight: 1.12, color: "var(--ahv-ink)", margin: "0 0 16px" };
const BODY = { fontFamily: "var(--font-hanken)", fontSize: 16, lineHeight: 1.75, color: "var(--ahv-ink-soft)" };
const TAG = { display: "inline-block", fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, color: "var(--ahv-ink-soft)", background: "var(--ahv-surface-2)", border: "1px solid var(--ahv-border-strong)", borderRadius: 3, padding: "4px 10px" };
const TYPE_LABEL = { fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 6 };
const READ_MORE = { display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", borderBottom: "2px solid var(--ahv-gold)", paddingBottom: 2 };

/* ── data ── */
const featured = [
  {
    type: "Research Focus",
    title: "African Indigenous Spirituality as the Foundation of Universal Spiritual Practice",
    abstract: "AIS is not a constructed system — it is Spirit revealed through experience, activated through practice, and sustained through spiritual hierarchy. As Africa is recognised as the origin of humanity, AIS represents the earliest expression of Spirit within human existence.",
    topic: "AIS & Philosophy",
    href: "/about",
    img: "/6.jpg",
  },
  {
    type: "Institutional Report",
    title: "The PSCB Framework: Spiritual Authority as Knowledge Transmission",
    abstract: "How Physical Spiritual Central Beings mediate between Spirit and humanity — and why AIS cannot be fully studied outside their guidance.",
    topic: "Revelation & Spiritual Framework",
    href: "/about",
  },
  {
    type: "Database Entry",
    title: "The IImboni: Documenting Africa's Prophetic Tradition",
    abstract: "A growing academic record of over 140 spiritual authorities across sub-Saharan Africa, each entry grounded in field documentation and archival evidence.",
    topic: "AIS & Knowledge Systems",
    href: "/archive",
  },
];

const topics = [
  { label: "AIS & Economics", desc: "Scarcity, abundance, and Spirit-led value systems", href: "/areas-of-study" },
  { label: "AIS & Governance", desc: "Spiritual leadership, Imboni, and ethical governance", href: "/areas-of-study" },
  { label: "AIS & Philosophy", desc: "Revelation-based ontology and the limits of Western epistemology", href: "/areas-of-study" },
  { label: "AIS & Knowledge Systems", desc: "AIS as origin; IKS as derived structure", href: "/areas-of-study" },
  { label: "AIS & Social Systems", desc: "Community formation, ubuntu, and cultural continuity", href: "/areas-of-study" },
  { label: "AIS Science Division", desc: "Mathematics, cosmology, archaeology, geology", href: "/areas-of-study" },
  { label: "Revelation & Spiritual Framework", desc: "Active transmission of knowledge from Spirit through PSCB", href: "/about" },
  { label: "The PSCB Framework", desc: "Physical Spiritual Central Beings as bridge between Spirit and humanity", href: "/about" },
];

const stats = [
  { num: "140+", label: "IImboni documented" },
  { num: "9", label: "Academic conferences hosted" },
  { num: "50+", label: "Research dialogues published" },
  { num: "1", label: "International academic partnership" },
];

const imboniPreview = [
  { name: "Prophet Elliot Kamwana", dates: "c.1882–1956", region: "Malawi", role: "Prophet & Church Founder", img: "/Elliot.jpg" },
  { name: "Johanne Masowe", dates: "1914–1973", region: "Zimbabwe", role: "Prophet & Spiritual Leader", img: "/johanne.jpg" },
  { name: "Vusamazulu Credo Mutwa", dates: "1921–2020", region: "KwaZulu-Natal", role: "Sangoma, Author & Elder", img: "/credo.jpg" },
];

const episodes = [
  { num: "07", title: "Reclaiming the Masculine Spiritual Energy", length: "58 min" },
  { num: "06", title: "The IImboni Lineage Explained", length: "1h 04m" },
  { num: "05", title: "What Colonialism Tried to Erase", length: "52 min" },
];

export default function Home() {
  return (
    <>
      {/* ══ MASTHEAD ══════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "56px 40px 48px", borderBottom: "4px solid var(--ahv-gold)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.38, zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 36 }}>
              <div style={{ ...EYEBROW, fontSize: 13, marginBottom: 18 }}>African Hidden Voices — Global Research Institution</div>
              <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(34px,5vw,60px)", lineHeight: 1.06, margin: "0 0 22px", color: "var(--ahv-ink)" }}>
                Advancing African Indigenous Spirituality as a Global Academic Discipline.
              </h1>
              <p style={{ ...BODY, fontSize: 16, display: "inline-block", maxWidth: 320, background: "rgba(240,237,230,0.72)", border: "1.5px solid var(--ahv-border-strong)", borderRadius: 8, padding: "14px 18px", margin: 0, lineHeight: 1.85 }}>
                A research and institutional platform guiding spiritual understanding, academic engagement, and institutional transformation across Africa and the world.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {topics.slice(0, 6).map((t) => (
                <Link key={t.label} href={t.href} style={{ ...TAG, fontSize: 13 }}>{t.label}</Link>
              ))}
              <Link href="/areas-of-study" style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 700, color: "var(--ahv-ink)", background: "rgba(240,237,230,0.72)", border: "1.5px solid var(--ahv-border-strong)", borderRadius: 6, padding: "4px 12px" }}>All topics →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FEATURED RESEARCH ═════════════════════════════════ */}
      <section style={{ background: "var(--ahv-surface)", padding: "72px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ ...EYEBROW, fontSize: 13, marginBottom: 32 }}>Latest Research</div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 3, border: "2px solid var(--ahv-border-strong)", borderRadius: 10, overflow: "hidden", background: "var(--ahv-border-strong)" }}>
            {/* Large card */}
            <Reveal>
              <Link href={featured[0].href} style={{ display: "block", padding: "40px 40px 36px", background: "#fff", height: "100%" }}>
                <div style={TYPE_LABEL}>● {featured[0].type}</div>
                <span style={{ ...TAG, marginBottom: 20 }}>{featured[0].topic}</span>
                <div style={{ aspectRatio: "16/9", borderRadius: 6, overflow: "hidden", marginBottom: 28, border: "1.5px solid var(--ahv-border)" }}>
                  <img src={featured[0].img} alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <h2 style={{ ...SECTION_H2, fontSize: "clamp(20px,2.4vw,28px)", marginBottom: 16 }}>{featured[0].title}</h2>
                <p style={{ ...BODY, marginBottom: 24 }}>{featured[0].abstract}</p>
                <div style={READ_MORE}>Read more <ArrowRight size={14} strokeWidth={2.2} /></div>
              </Link>
            </Reveal>
            {/* Two stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {featured.slice(1).map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <Link href={item.href} style={{ display: "flex", flexDirection: "column", padding: "32px 32px 28px", background: "#fff", flex: 1 }}>
                    <div style={TYPE_LABEL}>● {item.type}</div>
                    <span style={{ ...TAG, marginBottom: 16 }}>{item.topic}</span>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(18px,2vw,23px)", lineHeight: 1.22, margin: "0 0 14px", color: "var(--ahv-ink)", flex: 1 }}>{item.title}</h3>
                    <p style={{ ...BODY, fontSize: 15, marginBottom: 18 }}>{item.abstract}</p>
                    <div style={{ ...READ_MORE, fontSize: 13 }}>Read more <ArrowRight size={13} strokeWidth={2} /></div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ NEWSLETTER STRIP ══════════════════════════════════ */}
      <NewsletterStrip />

      {/* ══ TOPICS BROWSER ════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <div>
                <div style={EYEBROW}>Research Topics</div>
                <h2 style={{ ...SECTION_H2, fontSize: "clamp(28px,3.5vw,44px)" }}>AIS across disciplines.</h2>
              </div>
              <Link href="/areas-of-study" style={{ fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                All areas of study <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, border: "2px solid var(--ahv-border-strong)", borderRadius: 10, overflow: "hidden", background: "var(--ahv-border-strong)" }} className="r-four-col">
            {topics.map((t, i) => (
              <Reveal key={t.label} delay={i * 50}>
                <Link href={t.href} style={{ display: "block", background: "#fff", padding: "28px 24px" }}>
                  <div style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, lineHeight: 1.25, margin: "0 0 10px", color: "var(--ahv-ink)" }}>{t.label}</div>
                  <div style={{ ...BODY, fontSize: 14, marginBottom: 16 }}>{t.desc}</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 700, color: "var(--ahv-gold-deep)" }}>
                    Explore <ArrowRight size={12} strokeWidth={2.2} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ IIMBONI DATABASE ══════════════════════════════════ */}
      <section style={{ background: "var(--ahv-surface)", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <div>
                <div style={EYEBROW}>The IImboni Database</div>
                <h2 style={{ ...SECTION_H2, fontSize: "clamp(28px,3.5vw,44px)" }}>Documenting Africa's prophetic tradition.</h2>
              </div>
              <Link href="/archive" style={{ fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Enter the database <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
          <div className="r-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, border: "2px solid var(--ahv-border-strong)", borderRadius: 10, overflow: "hidden", background: "var(--ahv-border-strong)" }}>
            {imboniPreview.map((person, i) => (
              <Reveal key={person.name} delay={i * 70}>
                <Link href="/archive" style={{ display: "block", background: "#fff" }}>
                  <div style={{ aspectRatio: "3/2", overflow: "hidden", borderBottom: "2px solid var(--ahv-border-strong)" }}>
                    <img src={person.img} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "24px 26px 28px" }}>
                    <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 10 }}>{person.role}</div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 6px", color: "var(--ahv-ink)" }}>{person.name}</h3>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 600, color: "var(--ahv-ink-soft)", margin: "0 0 18px" }}>{person.dates} · {person.region}</p>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)" }}>
                      View research record <ArrowRight size={13} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE RESEARCH POSITION ════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Reveal>
            <div style={EYEBROW}>Core Research Position</div>
            <h2 style={{ ...SECTION_H2, fontSize: "clamp(26px,3.5vw,40px)", marginBottom: 24 }}>
              African Indigenous Spirituality is not a constructed system.
            </h2>
            <p style={{ ...BODY, fontSize: 17, marginBottom: 18 }}>
              It is the Spirit <strong style={{ color: "var(--ahv-ink)", fontWeight: 700 }}>revealed through experience</strong>, activated through practice, and sustained through spiritual hierarchy.
            </p>
            <p style={{ ...BODY, fontSize: 17, marginBottom: 18 }}>
              As Africa is recognised as the origin of humanity, AIS represents the <strong style={{ color: "var(--ahv-ink)", fontWeight: 700 }}>earliest expression of Spirit within human existence</strong>. Global spiritual practices emerge as expressions developed over time — diversity reflects variation from an original source, not fragmentation.
            </p>
            <blockquote style={{
              margin: "28px 0 0", padding: "22px 28px",
              background: "var(--ahv-surface)", borderLeft: "4px solid var(--ahv-gold)",
              fontFamily: "var(--font-spectral)", fontStyle: "italic",
              fontSize: 20, lineHeight: 1.55, color: "var(--ahv-ink)", fontWeight: 400,
            }}>
              The restoration of African Indigenous Spirituality contributes to the restoration of the universal concept of spirituality.
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ borderRadius: 8, overflow: "hidden", border: "2px solid var(--ahv-border-strong)", aspectRatio: "4/3" }}>
              <img src="/6.jpg" alt="African spiritual tradition" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FOUNDING SCHOLAR ══════════════════════════════════ */}
      <section style={{ background: "var(--ahv-surface)", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: ".65fr 1.35fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <div style={{ aspectRatio: "3/4", borderRadius: 8, overflow: "hidden", border: "2px solid var(--ahv-border-strong)" }}>
              <img src="/founder.jpg" alt="HSRM Imboni Dr. Uzwi Lezwe Radebe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={EYEBROW}>Founding Scholar & PSCB</div>
            <h2 style={{ ...SECTION_H2, fontSize: "clamp(26px,3.5vw,42px)", marginBottom: 10 }}>iNkosi yamaKhosi oMoya</h2>
            <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 22, color: "var(--ahv-gold-deep)", margin: "0 0 28px" }}>HSRM Imboni Dr. Uzwi Lezwe Radebe</p>
            <p style={{ ...BODY, fontSize: 17, marginBottom: 20 }}>
              African Hidden Voices was established through the revelation of HSRM Imboni Dr. Uzwi Lezwe Radebe as part of a broader restoration mandate — repositioning African Indigenous Spirituality as a living, revealed, and foundational expression of Spirit within human existence.
            </p>
            <p style={{ ...BODY, fontSize: 17, marginBottom: 32 }}>
              As a Physical Spiritual Central Being (PSCB), Dr. Radebe occupies the role of primary mediator between Spirit and the institutional work of AHV — the epistemological foundation upon which all AHV research is grounded.
            </p>
            <Link href="/imboni" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 700, color: "var(--ahv-gold-deep)", borderBottom: "2px solid var(--ahv-gold)", paddingBottom: 4 }}>
              About the Imboni <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ FEATURED PUBLICATION ══════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ ...EYEBROW, marginBottom: 32 }}>Featured Publication</div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: ".3fr 1fr", gap: 60, alignItems: "center", border: "2px solid var(--ahv-border-strong)", borderRadius: 10, padding: "52px 56px", background: "var(--ahv-surface)" }}>
            <Reveal>
              <div style={{ aspectRatio: "2/3", borderRadius: 6, overflow: "hidden", border: "1.5px solid var(--ahv-border-strong)", boxShadow: "0 28px 56px -20px rgba(0,0,0,.22)" }}>
                <img src="/cambridge.jpg" alt="The Revelation Spiritual Home" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div style={TYPE_LABEL}>● Monograph</div>
              <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.18, margin: "0 0 14px", color: "var(--ahv-ink)" }}>The Revelation Spiritual Home</h3>
              <p style={{ fontFamily: "var(--font-hanken)", fontSize: 16, fontWeight: 600, color: "var(--ahv-ink-soft)", margin: "0 0 22px" }}>AHV Press · 2025</p>
              <p style={{ ...BODY, fontSize: 17, marginBottom: 32 }}>
                A foundational text establishing the institutional and spiritual basis of African Hidden Voices — exploring AIS as a living, revealed reality and positioning it within the global academic discourse on Indigenous Knowledge Systems.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".03em", padding: "14px 26px", borderRadius: 4 }}>
                  Request a Copy <ArrowRight size={15} strokeWidth={2.2} />
                </Link>
                <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ahv-ink)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, padding: "14px 22px", border: "2px solid var(--ahv-border-strong)", borderRadius: 4 }}>
                  View all publications
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ PODCAST ═══════════════════════════════════════════ */}
      <section style={{ background: "var(--ahv-surface)", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <div>
                <div style={EYEBROW}>AHV Dialogue Series</div>
                <h2 style={{ ...SECTION_H2, fontSize: "clamp(26px,3.5vw,42px)" }}>#UnmaskingAfricanTruths</h2>
              </div>
              <a href="https://www.youtube.com/@africanhiddenvoicesunmaski830" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                All episodes on YouTube <ArrowRight size={15} strokeWidth={2} />
              </a>
            </div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 3, border: "2px solid var(--ahv-border-strong)", borderRadius: 10, overflow: "hidden", background: "var(--ahv-border-strong)" }}>
            <Reveal>
              <div style={{ position: "relative", background: "var(--ahv-red)", color: "#fff", padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: 300 }}>
                <img src="/mbanner.jpg" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .2, display: "block" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "50%", background: "var(--ahv-gold)", marginBottom: 22 }}>
                    <Play size={20} fill="var(--ahv-dark)" stroke="none" />
                  </div>
                  <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 10 }}>Episode 08 · Featured</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 26, lineHeight: 1.2, margin: "0 0 8px" }}>Who Wrote the Bible?</h3>
                  <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,.7)", margin: 0 }}>With Imboni Dr. uZwi-Lezwe Radebe · 1h 12m</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ background: "#fff", display: "flex", flexDirection: "column" }}>
                {episodes.map((ep, i) => (
                  <a key={ep.num} href="https://www.youtube.com/@africanhiddenvoicesunmaski830" target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 20,
                    padding: "24px 28px",
                    borderBottom: i < episodes.length - 1 ? "2px solid var(--ahv-border)" : "none",
                  }}>
                    <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 24, color: "var(--ahv-gold)", minWidth: 38 }}>{ep.num}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, margin: "0 0 4px", color: "var(--ahv-ink)" }}>{ep.title}</h4>
                      <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 600, color: "var(--ahv-ink-soft)", margin: 0 }}>{ep.length}</p>
                    </div>
                    <ArrowRight size={18} color="var(--ahv-gold-deep)" strokeWidth={2.2} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ BLOG / NEWS ═══════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "80px 40px", borderBottom: "4px solid var(--ahv-border-strong)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
              <div>
                <div style={EYEBROW}>News & Research Blog</div>
                <h2 style={{ ...SECTION_H2, fontSize: "clamp(26px,3.5vw,42px)" }}>Latest from AHV.</h2>
              </div>
              <Link href="/blog" style={{ fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 700, color: "var(--ahv-gold-deep)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                All posts <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ border: "2px solid var(--ahv-border-strong)", borderRadius: 10, padding: "56px 48px", background: "var(--ahv-surface)", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 22, color: "var(--ahv-ink-soft)", marginBottom: 18 }}>Research notes and institutional updates coming soon.</div>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontSize: 15, fontWeight: 700, color: "var(--ahv-gold-deep)", borderBottom: "2px solid var(--ahv-gold)", paddingBottom: 4 }}>
                Visit the blog <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ COLLABORATE CTA ═══════════════════════════════════ */}
      <section style={{ background: "var(--ahv-red)", padding: "88px 40px", borderTop: "4px solid var(--ahv-gold)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#fff", marginBottom: 22 }}>Partner With AHV</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(30px,4.5vw,52px)", lineHeight: 1.1, margin: "0 0 22px", color: "#fff" }}>
              Advance AIS on the world stage.
            </h2>
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,.75)", margin: "0 auto 40px", maxWidth: 640 }}>
              AHV works with spiritual institutions, academic institutions, financial institutions, government bodies, and interdisciplinary research sectors — to inform, educate, guide, clarify, conscientise, and restore spiritual understanding.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 15, letterSpacing: ".03em", padding: "16px 32px", borderRadius: 4 }}>
                Collaborate with AHV <ArrowRight size={16} strokeWidth={2.2} />
              </Link>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 15, padding: "16px 28px", border: "2px solid rgba(255,255,255,.35)", borderRadius: 4 }}>
                About AHV
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
