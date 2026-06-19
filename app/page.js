import Link from "next/link";
import { ArrowRight, Play, Search, BookOpen, GraduationCap, Globe } from "lucide-react";
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

const pillars = [
  { icon: Search, title: "Documentation & Archival Recovery", body: "A dedicated team of researchers locating, verifying, and preserving the records of Africa's IImboni, prophets, and spiritual authorities." },
  { icon: BookOpen, title: "Academic Research & Publishing", body: "Producing peer-reviewed scholarship, monographs, and institutional papers that establish AIS as a rigorous field of study." },
  { icon: Globe, title: "Institutional Engagement", body: "Partnering with universities, governments, and global bodies to advance AIS within official academic and policy frameworks." },
  { icon: GraduationCap, title: "AIS Education & Dialogue", body: "Conferences, podcasts, and public programmes that bring AIS knowledge to communities, scholars, and practitioners worldwide." },
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
              <span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />African Hidden Voices — Global Research Institution
            </div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(38px,5.5vw,72px)", lineHeight: 1.03, letterSpacing: "-.015em", margin: "0 0 52px" }}>
              African Indigenous Spirituality is not a relic —{" "}
              <em style={{ fontStyle: "italic", color: "var(--ahv-gold-soft)" }}>it is a living, researchable science.</em>
            </h1>
          </Reveal>

          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: ".75fr 1.25fr", gap: 52, alignItems: "center", marginBottom: 40 }}>
            <Reveal delay={100}>
              <p style={{ fontFamily: "var(--font-spectral)", fontSize: 18.5, lineHeight: 1.66, color: "rgba(245,231,192,.85)", fontWeight: 300, margin: 0 }}>
                African Hidden Voices is a global research institution dedicated to the academic study, documentation, and advancement of African Indigenous Spirituality (AIS) — establishing it as a legitimate and rigorous field of intellectual inquiry on the world stage.
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
                Explore the Framework <ArrowRight size={17} strokeWidth={2.2} />
              </Link>
              <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "16px 22px", border: "1px solid rgba(245,231,192,.35)", borderRadius: 999, whiteSpace: "nowrap" }}>
                Enter the Archive <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>

        <div style={{ height: 6, background: "linear-gradient(90deg, var(--ahv-gold-soft), var(--ahv-gold), var(--ahv-crimson))" }} />
      </header>

      {/* WHAT IS AIS */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div className="r-two-col" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>What is AIS?</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(29px,4vw,42px)", lineHeight: 1.28, letterSpacing: "-.01em", margin: "0 0 28px", color: "var(--ahv-ink)" }}>
              A cosmological, philosophical, and{" "}
              <span style={{ color: "var(--ahv-crimson)", fontStyle: "italic" }}>governance system</span>{" "}
              encoded in Africa's spiritual traditions.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "#5e4742", margin: "0 0 20px" }}>
              African Indigenous Spirituality is not a religion, not a cultural curiosity, and not a relic of the past. It is a complete system of thought — governing how communities organise, how knowledge is transmitted, how justice is administered, and how human beings relate to the cosmos.
            </p>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "#5e4742", margin: 0 }}>
              AHV exists to study this system rigorously, document its practitioners, and position AIS within the global academy as a field of inquiry equal in standing to any other tradition of human knowledge.
            </p>
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
            <div style={{ maxWidth: 620, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>What We Do</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>Four pillars of AIS research and engagement.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 22 }}>
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div style={{ background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 10, padding: "34px 28px", display: "flex", flexDirection: "column", gap: 18, height: "100%" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--ahv-oxblood)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ahv-gold-soft)" }}>
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 21, margin: 0, color: "var(--ahv-ink)" }}>{title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{body}</p>
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
            <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 24, color: "var(--ahv-crimson)", margin: "0 0 28px" }}>Imboni Dr. uZwi-Lezwe Radebe</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 22px" }}>From divine inspiration emerged a global institution. Imboni Dr. Radebe recognised that African Indigenous Spirituality could not be preserved through memory alone — it required the full force of academic rigour, institutional legitimacy, and cross-disciplinary research to secure its place in the modern world.</p>
            <blockquote style={{ margin: 0, padding: "22px 0 22px 28px", borderLeft: "3px solid var(--ahv-gold)", fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 26, lineHeight: 1.4, color: "var(--ahv-crimson)" }}>
              "Spirituality must lead."
            </blockquote>
          </Reveal>
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
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>A growing academic archive of IImboni, Kings, and spiritual authorities — each entry a rigorous research record establishing their lives, teachings, and significance within the AIS canon.</p>
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

      {/* COLLABORATE CTA */}
      <section style={{ background: "var(--ahv-parchment-2)", color: "var(--ahv-ink)", padding: "120px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 24 }}>Institutional Collaboration</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(33px,4vw,48px)", lineHeight: 1.1, margin: "0 0 22px", color: "var(--ahv-ink)" }}>Advance AIS research with us.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 40px" }}>We partner with universities, research bodies, governments, and cultural institutions to establish African Indigenous Spirituality as a recognised academic discipline on the global stage.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Collaborate with AHV</Link>
              <Link href="/areas-of-study" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Explore Areas of Study</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
