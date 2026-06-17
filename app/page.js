import Link from "next/link";
import { ArrowRight, Play, Search, MessageCircle, BookOpen, GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";

const archive = [
  { name: "Mantsopa Anna Makhetha", dates: "1793–1908", region: "Lesotho", role: "Prophetess & Rainmaker" },
  { name: "Mohlomi", dates: "c.1720–1815", region: "Lesotho", role: "Sage-King & Healer" },
  { name: "Makhanda (Nxele)", dates: "c.1780–1820", region: "Eastern Cape", role: "Prophet-Warrior" },
];

const episodes = [
  { num: "07", title: "Reclaiming the Masculine Spiritual Energy", length: "58 min" },
  { num: "06", title: "The IImboni Lineage Explained", length: "1h 04m" },
  { num: "05", title: "What Colonialism Tried to Erase", length: "52 min" },
];

const books = [
  { title: "Restoring Africa's Spiritual Identity", author: "African Hidden Voices", year: "2024" },
  { title: "The Revelation Spiritual Home", author: "Cambridge University Press", year: "2025" },
  { title: "Voices of the Ancestors", author: "AHV Press · Research Compendium", year: "2025" },
];

const events = [
  { date: "DEC 2025", title: "Indigenous Knowledge Systems Conference", place: "University of Fort Hare · Eastern Cape", status: "Past" },
  { date: "MAR 2026", title: "AHV Annual Dialogue of the IImboni", place: "Johannesburg, South Africa", status: "Upcoming" },
  { date: "JUL 2026", title: "Restoring Africa's Spiritual Identity — Book Tour", place: "Pan-African · Multiple cities", status: "Upcoming" },
];

const partners = ["University of Fort Hare", "The Revelation Spiritual Home", "HJ International Graduate School", "Isambulo Communications", "AHV Research Team"];

const pillars = [
  { icon: Search, title: "Research & Documentation", body: "A team of young researchers searching every nook and cranny of Southern Africa for the forgotten IImboni." },
  { icon: MessageCircle, title: "The Dialogue Platform", body: "Assuring the voices of our IImboni are no longer suppressed — reviving their interaction and advisory role." },
  { icon: GraduationCap, title: "Conferences & IKS", body: "Advancing Indigenous Knowledge Systems through scholarship, in partnership with leading universities." },
  { icon: BookOpen, title: "Publishing & Media", body: "Books, podcasts and broadcasts that return African spiritual wisdom to the public record." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header style={{ position: "relative", background: "radial-gradient(120% 120% at 75% 0%, #5c1013 0%, var(--ahv-oxblood) 38%, var(--ahv-oxblood-deep) 100%)", color: "var(--ahv-cream)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .09, backgroundImage: "repeating-linear-gradient(135deg, rgba(245,231,192,.5) 0 1px, transparent 1px 26px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -120, right: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,75,.18), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "96px 40px 110px", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 56, alignItems: "center" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 30 }}>
              <span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />Unmasking African Truths
            </div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(38px,5vw,64px)", lineHeight: 1.04, letterSpacing: "-.01em", margin: "0 0 26px" }}>
              The voices Africa was told<br />to forget are <em style={{ fontStyle: "italic", color: "var(--ahv-gold-soft)" }}>speaking again.</em>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.65, maxWidth: 540, color: "rgba(245,231,192,.82)", fontWeight: 300, margin: "0 0 38px" }}>
              African Hidden Voices is a pan-African research institution retracing the IImboni, Kings and spiritual leaders whose wisdom colonialism tried to erase — and restoring their rightful place in the future of the Continent.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "16px 28px", borderRadius: 999 }}>
                Explore the Archive <ArrowRight size={17} strokeWidth={2.2} />
              </Link>
              <Link href="/podcast" style={{ display: "inline-flex", alignItems: "center", gap: 11, color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "16px 22px", border: "1px solid rgba(245,231,192,.3)", borderRadius: 999 }}>
                <Play size={15} fill="currentColor" stroke="none" /> Watch the Podcast
              </Link>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(201,162,75,.4)", boxShadow: "0 40px 80px -30px rgba(0,0,0,.6)", background: "repeating-linear-gradient(45deg, rgba(245,231,192,.06) 0 12px, rgba(245,231,192,.11) 12px 24px), rgba(0,0,0,.18)", display: "flex", alignItems: "flex-end" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, letterSpacing: ".18em", color: "rgba(245,231,192,.45)", textTransform: "uppercase" }}>Imboni · ceremonial portrait</div>
              <div style={{ position: "relative", width: "100%", padding: 22, background: "linear-gradient(transparent, rgba(66,12,15,.85))" }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ahv-gold)", marginBottom: 6 }}>The Founder</div>
                <div style={{ fontFamily: "var(--font-spectral)", fontSize: 21, lineHeight: 1.2 }}>iNkosi yamaKhosi oMoya<br />Imboni Dr. uZwi-Lezwe Radebe</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div style={{ height: 6, background: "linear-gradient(90deg, var(--ahv-gold-soft), var(--ahv-gold), var(--ahv-crimson))" }} />
      </header>

      {/* VISION */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 30 }}>
              <span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />Our Vision<span style={{ width: 30, height: 1, background: "var(--ahv-gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(29px,4vw,42px)", lineHeight: 1.28, letterSpacing: "-.01em", margin: "0 0 36px", color: "var(--ahv-ink)" }}>
              To retrace the steps and works of our gallant IImboni — and to{" "}
              <span style={{ color: "var(--ahv-crimson)", fontStyle: "italic" }}>resuscitate the authenticity</span>{" "}
              of their gifts, past and present, across the Continent.
            </h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "#5e4742", maxWidth: 760, margin: "0 auto 30px" }}>
              The origins of African Hidden Voices emanate from the divine and visionary inspiration of Imboni Dr. uZwi-Lezwe Radebe. Foreign influences and the passage of time drew a cloud of doubt over our African trailblazers. We exist to lift that cloud — so the voices of these gallant IImboni are no longer suppressed, and their counsel to our nations is revived.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginTop: 14, fontFamily: "var(--font-hanken)" }}>
              <span style={{ width: 44, height: 1, background: "var(--ahv-gold)" }} />
              <span style={{ fontSize: 13, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ahv-ink)" }}>Imboni Dr. uZwi-Lezwe Radebe · Founder</span>
              <span style={{ width: 44, height: 1, background: "var(--ahv-gold)" }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR WORK */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 620, marginBottom: 58 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>What We Do</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>Four ways we return African wisdom to the record.</h2>
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
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 64, alignItems: "center" }}>
          <Reveal>
            <Placeholder label={"portrait of\nthe Imboni"} style={{ aspectRatio: "3/4", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(110,19,22,.18)" }} />
          </Reveal>
          <Reveal delay={120}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 22 }}>The Founder</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: 40, lineHeight: 1.12, margin: "0 0 10px", color: "var(--ahv-ink)" }}>iNkosi yamaKhosi oMoya</h2>
            <p style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 24, color: "var(--ahv-crimson)", margin: "0 0 28px" }}>Imboni Dr. uZwi-Lezwe Radebe</p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 22px" }}>A prophet is an inspired preacher who speaks for God; an IMboni is more. The IMboni is a spiritual guide of immaculate foresight and indigenous wisdom — designated by the Creator, UMfihlakalo, to guide a whole nation, from a lineage of IImboni stretching back through Africa's deepest memory.</p>
            <blockquote style={{ margin: 0, padding: "22px 0 22px 28px", borderLeft: "3px solid var(--ahv-gold)", fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 26, lineHeight: 1.4, color: "var(--ahv-crimson)" }}>
              "Spirituality must lead."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ARCHIVE PREVIEW */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>The Hidden Voices</div>
                <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,42px)", lineHeight: 1.1, margin: "0 0 16px", color: "var(--ahv-ink)" }}>Restoring the names history buried.</h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "#5e4742", margin: 0 }}>Our researchers assemble the IImboni, Kings and spiritual leaders of Southern Africa under one roof — to give them the honour and study they were long denied.</p>
              </div>
              <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".04em", color: "var(--ahv-crimson)", borderBottom: "1px solid var(--ahv-gold)", paddingBottom: 5 }}>
                View the full archive <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {archive.map((person) => (
              <Reveal key={person.name}>
                <div style={{ background: "#fff", border: "1px solid rgba(110,19,22,.1)", borderRadius: 10, overflow: "hidden", boxShadow: "0 18px 36px -28px rgba(66,12,15,.4)" }}>
                  <div style={{ aspectRatio: "4/3", background: "repeating-linear-gradient(45deg, rgba(110,19,22,.05) 0 11px, rgba(110,19,22,.09) 11px 22px), var(--ahv-parchment-2)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "3px solid var(--ahv-gold)" }}>
                    <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: ".14em", color: "rgba(42,22,20,.4)", textTransform: "uppercase" }}>{person.name}</span>
                  </div>
                  <div style={{ padding: "24px 24px 26px" }}>
                    <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 9 }}>{person.role}</div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 23, margin: "0 0 6px", color: "var(--ahv-ink)" }}>{person.name}</h3>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "#7a635e", margin: "0 0 18px" }}>{person.dates} &nbsp;·&nbsp; {person.region}</p>
                    <Link href="/archive" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13, color: "var(--ahv-crimson)" }}>
                      Read the research <ArrowRight size={14} strokeWidth={2} />
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
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#6b4a2f", marginTop: 12 }}>University &amp; community conferences</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: "clamp(44px,6vw,60px)", lineHeight: 1, color: "var(--ahv-crimson)" }}>50<span style={{ fontSize: "55%" }}>+</span></div>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "#6b4a2f", marginTop: 12 }}>Podcast episodes published</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PODCAST */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 54 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>AHV Podcast</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>#UnmaskingAfricanTruths, in conversation.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 30, alignItems: "stretch" }}>
            <Reveal>
              <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "repeating-linear-gradient(45deg, rgba(245,231,192,.05) 0 12px, rgba(245,231,192,.1) 12px 24px), var(--ahv-oxblood-deep)", color: "var(--ahv-cream)", minHeight: 380, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 40, border: "1px solid rgba(201,162,75,.25)" }}>
                <span style={{ position: "absolute", top: 34, left: 40, fontFamily: "ui-monospace,monospace", fontSize: 11, letterSpacing: ".16em", color: "rgba(245,231,192,.4)", textTransform: "uppercase" }}>episode still</span>
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
                  <Link key={ep.num} href="/podcast" style={{ display: "flex", alignItems: "center", gap: 18, background: "var(--ahv-parchment)", border: "1px solid rgba(110,19,22,.12)", borderRadius: 10, padding: "20px 22px" }}>
                    <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 24, color: "var(--ahv-gold)", minWidth: 42 }}>{ep.num}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 18, margin: "0 0 4px", color: "var(--ahv-ink)" }}>{ep.title}</h4>
                      <p style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, color: "#7a635e", margin: 0 }}>{ep.length}</p>
                    </div>
                    <ArrowRight size={18} color="var(--ahv-crimson)" strokeWidth={2} />
                  </Link>
                ))}
                <Link href="/podcast" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 6, fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13.5, color: "var(--ahv-crimson)", paddingLeft: 4 }}>
                  Subscribe on YouTube <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section style={{ background: "var(--ahv-parchment)", padding: "120px 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 640, marginBottom: 54 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Publications</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>The research, bound and shared.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 34 }}>
            {books.map((book) => (
              <Reveal key={book.title}>
                <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                  <div style={{ aspectRatio: "3/4", borderRadius: 6, overflow: "hidden", background: "repeating-linear-gradient(45deg, rgba(110,19,22,.06) 0 11px, rgba(110,19,22,.1) 11px 22px), var(--ahv-oxblood)", display: "flex", alignItems: "flex-end", padding: 26, boxShadow: "0 26px 50px -28px rgba(66,12,15,.6)", border: "1px solid rgba(201,162,75,.25)" }}>
                    <span style={{ fontFamily: "var(--font-spectral)", fontStyle: "italic", fontSize: 20, lineHeight: 1.25, color: "var(--ahv-cream)" }}>{book.title}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 20, margin: "0 0 6px", color: "var(--ahv-ink)" }}>{book.title}</h3>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "#7a635e", margin: 0 }}>{book.author} · {book.year}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 48 }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Gatherings</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(29px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>Where the dialogue happens.</h2>
            </div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {events.map((ev) => (
              <Reveal key={ev.title}>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 28, alignItems: "center", padding: "26px 8px", borderTop: "1px solid rgba(110,19,22,.16)" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 17, letterSpacing: ".04em", color: "var(--ahv-crimson)" }}>{ev.date}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 5px", color: "var(--ahv-ink)" }}>{ev.title}</h3>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "#7a635e", margin: 0 }}>{ev.place}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ahv-oxblood-deep)", background: "var(--ahv-gold-soft)", padding: "7px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>{ev.status}</span>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(110,19,22,.16)" }} />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ background: "var(--ahv-parchment)", padding: "80px 40px" }}>
        <Reveal>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#a08a84", marginBottom: 38 }}>In partnership with</div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 24 }}>
              {partners.map((p) => (
                <div key={p} style={{ height: 58, minWidth: 170, flex: 1, maxWidth: 210, border: "1px solid rgba(110,19,22,.14)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, letterSpacing: ".04em", color: "#8a726c", padding: "0 18px", textAlign: "center" }}>{p}</div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* JOIN CTA */}
      <section style={{ background: "var(--ahv-parchment-2)", color: "var(--ahv-ink)", padding: "120px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 24 }}>Join the Dialogue</div>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(33px,4vw,48px)", lineHeight: 1.1, margin: "0 0 22px", color: "var(--ahv-ink)" }}>Help us bring the Hidden Voices home.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#5e4742", margin: "0 0 40px" }}>Partner with our research, attend our gatherings, or support the work of returning African spiritual wisdom to its rightful place.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Become a member</Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", padding: "17px 30px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999 }}>Support the research</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
