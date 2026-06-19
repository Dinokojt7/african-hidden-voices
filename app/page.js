import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";

const archive = [
  { name: "Prophet Elliot Kamwana", dates: "c.1882–1956", region: "Malawi", role: "Prophet & Church Founder", img: "/Elliot.jpg", desc: "Elliot Kamwana was a Tonga born near Nkhata Bay on Lake Malawi in about 1882." },
  { name: "Johanne Masowe", dates: "1914–1973", region: "Zimbabwe", role: "Prophet & Spiritual Leader", img: "/johanne.jpg", desc: "Real name Shoniwa Masedza Tandi Moyo, born 1914 in Gandanzara village, Makoni district, Eastern Zimbabwe." },
  { name: "Prophet Vusamazulu Credo Mutwa", dates: "1921–2020", region: "KwaZulu-Natal", role: "Sangoma, Author & Elder", img: "/credo.jpg", desc: "Vusamazulu Credo Mutwa was born in 1921 in what is now known as KwaZulu-Natal." },
];

const episodes = [
  { num: "07", title: "Reclaiming the Masculine Spiritual Energy", length: "58 min" },
  { num: "06", title: "The IImboni Lineage Explained", length: "1h 04m" },
  { num: "05", title: "What Colonialism Tried to Erase", length: "52 min" },
];

const books = [
  { title: "Restoring Africa's Spiritual Identity", author: "African Hidden Voices", year: "2024", img: "/l5.jpg" },
  { title: "The Revelation Spiritual Home", author: "Cambridge University Press", year: "2025", img: "/2.jpg" },
  { title: "Voices of the Ancestors", author: "AHV Press · Research Compendium", year: "2025", img: "/g14.jpg" },
];

const mandate = [
  { label: "Revealed", suffix: ", not assumed" },
  { label: "Practiced", suffix: ", not abstracted" },
  { label: "Documented", suffix: ", without being reduced" },
  { label: "Positioned globally", suffix: ", without losing its origin" },
];

const globalPosition = [
  "Advances AIS as the foundation of spiritual understanding",
  "Engages global institutions with a Spirit-led framework",
  "Contributes to the realignment of spiritual consciousness across disciplines and societies",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header style={{ position: "relative", color: "var(--ahv-cream)", overflow: "hidden", background: "radial-gradient(120% 120% at 78% 8%, #5c1013 0%, var(--ahv-oxblood) 42%, var(--ahv-oxblood-deep) 100%)" }}>
        <img src="/6.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 0.10, display: "block", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.09, backgroundImage: "repeating-linear-gradient(135deg, rgba(245,231,192,.5) 0 1px, transparent 1px 26px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -140, right: -120, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,75,.20), transparent 66%)", pointerEvents: "none" }} />

        <div className="r-pad" style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "60px 40px 64px" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 28 }}>
              <span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />African Hidden Voices — Research Institution
            </div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(34px,5vw,66px)", lineHeight: 1.06, letterSpacing: "-.015em", margin: "0 0 52px" }}>
              African Indigenous Spirituality as Spirit:{" "}
              <em style={{ fontStyle: "italic", color: "var(--ahv-gold-soft)" }}>The Foundation of Universal Spiritual Practice.</em>
            </h1>
          </Reveal>

          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: ".75fr 1.25fr", gap: 52, alignItems: "center", marginBottom: 40 }}>
            <Reveal delay={100}>
              <p style={{ fontFamily: "var(--font-spectral)", fontSize: 18.5, lineHeight: 1.66, color: "rgba(245,231,192,.85)", fontWeight: 300, margin: 0 }}>
                The African Hidden Voices (AHV) is a research and institutional platform advancing African Indigenous Spirituality (AIS) as a living, revealed reality, guiding spiritual understanding, academic engagement, and institutional transformation across Africa and the world.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: -14, borderRadius: 18, background: "radial-gradient(circle at 70% 30%, rgba(201,162,75,.22), transparent 70%)", pointerEvents: "none" }} />
                <figure style={{ position: "relative", margin: 0, border: "3px solid var(--ahv-gold)", borderRadius: 12, padding: 7, background: "rgba(66,12,15,.45)", boxShadow: "0 40px 80px -34px rgba(0,0,0,.7)" }}>
                  <div style={{ position: "relative", overflow: "hidden", borderRadius: 7 }}>
                    <img src="/hero-bg.jpg" alt="The African Hidden Voices research team" style={{ display: "block", width: "100%", height: "auto" }} />
                    <div style={{ position: "absolute", inset: 0, mixBlendMode: "multiply", background: "linear-gradient(180deg, rgba(66,12,15,.14) 0%, rgba(66,12,15,0) 26%, rgba(66,12,15,0) 64%, rgba(110,19,22,.30) 100%)", pointerEvents: "none" }} />
                    <figcaption style={{ position: "absolute", bottom: 16, left: 16, display: "inline-flex", alignItems: "center", gap: 10, borderRadius: 999, padding: "8px 16px", fontSize: 11.5, fontFamily: "var(--font-hanken)", textTransform: "uppercase", letterSpacing: ".14em", backdropFilter: "blur(4px)", background: "rgba(66,12,15,.78)", border: "1px solid rgba(201,162,75,.4)", color: "var(--ahv-cream)" }}>
                      <span style={{ display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "var(--ahv-gold)" }} />
                      The AHV Research Team
                    </figcaption>
                  </div>
                </figure>
              </div>
            </Reveal>
          </div>

          <Reveal delay={280}>
            <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "16px 28px", borderRadius: 999, whiteSpace: "nowrap" }}>
                Explore Our Framework <ArrowRight size={17} strokeWidth={2.2} />
              </Link>
              <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "16px 22px", border: "1px solid rgba(245,231,192,.35)", borderRadius: 999, whiteSpace: "nowrap" }}>
                Engage With Our Research <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 6, background: "linear-gradient(90deg, var(--ahv-gold-soft), var(--ahv-gold), var(--ahv-crimson))" }} />
      </header>

      {/* CORE MESSAGE */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>Core Message</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(26px,3.5vw,38px)", lineHeight: 1.25, margin: "0 0 28px", color: "var(--ahv-ink)" }}>
              African Indigenous Spirituality is not a constructed system.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "#5e4742", margin: "0 0 20px" }}>
              It is the Spirit <strong style={{ color: "var(--ahv-ink)" }}>revealed through experience</strong>, activated through practice, and sustained through spiritual hierarchy.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "#5e4742", margin: "0 0 24px" }}>
              As Africa is recognised as the origin of humanity, it follows that African Indigenous Spirituality represents the <strong style={{ color: "var(--ahv-ink)" }}>earliest expression of Spirit within human existence</strong>.
            </p>
            <div style={{ margin: "0 0 24px", paddingLeft: 20 }}>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5e4742", margin: "0 0 10px" }}>From this foundation:</p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 16, lineHeight: 1.65, color: "#5e4742" }}>Global spiritual practices emerge as <strong style={{ color: "var(--ahv-ink)" }}>expressions developed over time</strong></li>
                <li style={{ fontSize: 16, lineHeight: 1.65, color: "#5e4742" }}>Spiritual diversity reflects <strong style={{ color: "var(--ahv-ink)" }}>variation from an original source</strong>, not fragmentation</li>
              </ul>
            </div>
            <blockquote style={{ margin: 0, padding: "20px 24px", background: "var(--ahv-gold-band)", borderLeft: "3px solid var(--ahv-gold)", borderRadius: "0 6px 6px 0", fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "var(--ahv-oxblood-deep)", fontWeight: 500 }}>
              The restoration of African Indigenous Spirituality contributes to the restoration of the universal concept of spirituality.
            </blockquote>
          </Reveal>
          <Reveal delay={140}>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(110,19,22,.14)", aspectRatio: "4/3" }}>
              <img src="/6.jpg" alt="African spiritual tradition" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT AHV DOES */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 700, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>What AHV Does</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(26px,3.5vw,38px)", lineHeight: 1.2, margin: "0 0 18px", color: "var(--ahv-ink)" }}>
                Operating at the intersection of Spirit, revelation, and institutional engagement.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>
                The African Hidden Voices (AHV) ensures that African Indigenous Spirituality is:
              </p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 22 }}>
            {mandate.map(({ label, suffix }, i) => (
              <Reveal key={label} delay={i * 80}>
                <div style={{ background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 10, padding: "34px 28px", borderTop: "3px solid var(--ahv-gold)", height: "100%" }}>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 24, margin: "0 0 10px", color: "var(--ahv-crimson)" }}>{label}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "#5e4742", margin: 0, fontFamily: "var(--font-spectral)", fontStyle: "italic" }}>{label}{suffix}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ background: "var(--ahv-parchment-2)", color: "var(--ahv-ink)", padding: "120px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 64, alignItems: "center" }}>
          <Reveal>
            <div style={{ aspectRatio: "3/4", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)" }}>
              <img src="/founder.jpg" alt="Imboni Dr. uZwi-Lezwe Radebe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>The Founder</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 40, lineHeight: 1.12, margin: "0 0 10px", color: "var(--ahv-ink)" }}>iNkosi yamaKhosi oMoya</h2>
            <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 24, color: "var(--ahv-crimson)", margin: "0 0 28px" }}>HSRM Imboni Dr. Uzwi Lezwe Radebe</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 22px" }}>
              The African Hidden Voices was established through the revelation of HSRM Imboni Dr. Uzwi Lezwe Radebe as part of a broader restoration mandate — repositioning African Indigenous Spirituality as a living, revealed, and foundational expression of Spirit within human existence.
            </p>
            <blockquote style={{ margin: 0, padding: "22px 0 22px 28px", borderLeft: "3px solid var(--ahv-gold)", fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 26, lineHeight: 1.4, color: "var(--ahv-crimson)" }}>
              "Spirituality must lead."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* OUR GLOBAL POSITION */}
      <section style={{ background: "var(--ahv-oxblood)", color: "var(--ahv-cream)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 22 }}>Our Global Position</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.2, margin: "0 0 24px" }}>
              AHV does not engage spirituality as a regional or cultural construct, but as a{" "}
              <em style={{ color: "var(--ahv-gold-soft)" }}>universal human reality with a definable origin.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(245,231,192,.8)", margin: "0 0 40px" }}>Through this position, AHV:</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 24 }}>
            {globalPosition.map((item, i) => (
              <Reveal key={i} delay={i * 90}>
                <div style={{ borderTop: "2px solid rgba(201,162,75,.5)", paddingTop: 22 }}>
                  <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,231,192,.85)", margin: 0 }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IIMBONI DATABASE PREVIEW */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>The IImboni Database</div>
                <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,42px)", lineHeight: 1.1, margin: "0 0 16px", color: "var(--ahv-ink)" }}>Documenting Africa's prophetic tradition.</h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>A growing research archive of IImboni, Spirit Kings, and spiritual leaders — each entry grounded in field documentation, oral testimony, and archival evidence.</p>
              </div>
              <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".04em", color: "var(--ahv-crimson)", borderBottom: "1px solid var(--ahv-gold)", paddingBottom: 5 }}>
                Enter the database <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
          <div className="r-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {archive.map((person) => (
              <Reveal key={person.name}>
                <div style={{ background: "#fff", border: "1px solid rgba(110,19,22,.1)", borderRadius: 10, overflow: "hidden", boxShadow: "0 18px 36px -28px rgba(66,12,15,.4)" }}>
                  <div style={{ aspectRatio: "4/3", overflow: "hidden", borderBottom: "3px solid var(--ahv-gold)" }}>
                    <img src={person.img} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "24px 24px 26px" }}>
                    <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 9 }}>{person.role}</div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 23, margin: "0 0 6px", color: "var(--ahv-ink)" }}>{person.name}</h3>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "#7a635e", margin: "0 0 10px" }}>{person.dates} &nbsp;·&nbsp; {person.region}</p>
                    <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5e4742", margin: "0 0 18px" }}>{person.desc}</p>
                    <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13, color: "var(--ahv-crimson)" }}>
                      View research record <ArrowRight size={14} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT BAND */}
      <section style={{ background: "var(--ahv-gold-band)", color: "var(--ahv-ink)", padding: "84px 40px", borderTop: "1px solid rgba(110,19,22,.1)", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <Reveal>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30, textAlign: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "clamp(44px,6vw,60px)", lineHeight: 1, color: "var(--ahv-crimson)" }}>140<span style={{ fontSize: "55%" }}>+</span></div>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#6b4a2f", marginTop: 12 }}>IImboni documented</div>
            </div>
            <div style={{ borderLeft: "1px solid rgba(110,19,22,.2)", borderRight: "1px solid rgba(110,19,22,.2)" }}>
              <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "clamp(44px,6vw,60px)", lineHeight: 1, color: "var(--ahv-crimson)" }}>9</div>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#6b4a2f", marginTop: 12 }}>Academic conferences hosted</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "clamp(44px,6vw,60px)", lineHeight: 1, color: "var(--ahv-crimson)" }}>50<span style={{ fontSize: "55%" }}>+</span></div>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#6b4a2f", marginTop: 12 }}>Research dialogues published</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PODCAST */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 54 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>AHV Dialogue Series</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>#UnmaskingAfricanTruths — AIS in conversation.</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>Long-form research dialogues with practitioners, scholars, and institutional voices exploring the full depth of African Indigenous Spirituality.</p>
            </div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 30, alignItems: "stretch" }}>
            <Reveal>
              <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "var(--ahv-oxblood-deep)", color: "var(--ahv-cream)", minHeight: 380, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 40, border: "1px solid rgba(201,162,75,.25)" }}>
                <img src="/mbanner.jpg" alt="AHV event" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .35, display: "block" }} />
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--ahv-gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "0 12px 30px -8px rgba(0,0,0,.5)" }}>
                  <Play size={24} fill="var(--ahv-oxblood-deep)" stroke="none" />
                </div>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 10 }}>Episode 08 · Featured</div>
                <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 30, lineHeight: 1.18, margin: "0 0 8px" }}>Who Wrote the Bible?</h3>
                <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "rgba(245,231,192,.72)", margin: 0 }}>With Imboni Dr. uZwi-Lezwe Radebe · 1h 12m</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {episodes.map((ep) => (
                  <a key={ep.num} href="https://www.youtube.com/@africanhiddenvoicesunmaski830" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 18, background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 10, padding: "20px 22px" }}>
                    <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 24, color: "var(--ahv-gold)", minWidth: 42 }}>{ep.num}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, margin: "0 0 4px", color: "var(--ahv-ink)" }}>{ep.title}</h4>
                      <p style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, color: "#7a635e", margin: 0 }}>{ep.length}</p>
                    </div>
                    <ArrowRight size={18} color="var(--ahv-crimson)" strokeWidth={2} />
                  </a>
                ))}
                <a href="https://www.youtube.com/@africanhiddenvoicesunmaski830" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 6, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13.5, color: "var(--ahv-crimson)", paddingLeft: 4 }}>
                  Subscribe on YouTube <ArrowRight size={15} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 54 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Research & Publications</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>AIS scholarship, bound and shared.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 34 }}>
            {books.map((book) => (
              <Reveal key={book.title}>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ aspectRatio: "3/4", borderRadius: 6, overflow: "hidden", position: "relative", display: "flex", alignItems: "flex-end", boxShadow: "0 26px 50px -28px rgba(66,12,15,.6)", border: "1px solid rgba(201,162,75,.25)" }}>
                    <img src={book.img} alt={book.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "relative", width: "100%", padding: 26, background: "linear-gradient(transparent, rgba(42,12,10,.88))" }}>
                      <span style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 20, lineHeight: 1.25, color: "var(--ahv-cream)" }}>{book.title}</span>
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 20, margin: "0 0 6px", color: "var(--ahv-ink)" }}>{book.title}</h3>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "#7a635e", margin: 0 }}>{book.author} · {book.year}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13.5, color: "var(--ahv-crimson)", borderBottom: "1px solid var(--ahv-gold)", paddingBottom: 5 }}>
                View all research & publications <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section style={{ background: "var(--ahv-parchment-2)", color: "var(--ahv-ink)", padding: "120px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 24 }}>Partner With AHV</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(33px,4vw,48px)", lineHeight: 1.1, margin: "0 0 22px", color: "var(--ahv-ink)" }}>Advance AIS on the world stage.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 40px" }}>AHV works closely with spiritual institutions, academic institutions, financial institutions, government bodies, and interdisciplinary research sectors. Its role is to inform, educate, guide, clarify, conscientise, and restore spiritual understanding within both African and global institutional contexts.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Partner With AHV</Link>
              <Link href="/areas-of-study" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Explore Areas of Study</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
