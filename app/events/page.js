import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const upcoming = [
  { date: "Dec 2025", title: "Fort Hare IKS Conference", location: "Alice, Eastern Cape", desc: "The annual Indigenous Knowledge Systems conference hosted at the University of Fort Hare — AHV returns as keynote partner." },
  { date: "Feb 2026", title: "Cape Town Dialogue Forum", location: "Cape Town, South Africa", desc: "An open dialogue on the role of African spiritual authority in contemporary governance." },
  { date: "Apr 2026", title: "Johannesburg Heritage Series", location: "Johannesburg, South Africa", desc: "A series of public lectures presenting newly recovered voices from the AHV archive." },
];

const past = [
  { date: "Jun 2024", title: "IKS Symposium", location: "Fort Hare" },
  { date: "Mar 2024", title: "Spiritual Leaders Summit", location: "Durban" },
  { date: "Oct 2023", title: "Pan-African Voices Forum", location: "Lagos" },
];

export const metadata = { title: "Events — African Hidden Voices" };

export default function Events() {
  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>Events</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 22px", color: "var(--ahv-ink)", maxWidth: 760 }}>Where the dialogue happens.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 640, margin: 0 }}>AHV hosts and partners on conferences, lectures, and public forums to bring African indigenous wisdom into dialogue with institutions, scholars, and communities.</p>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 36 }}>Featured Event</div>
          </Reveal>
          <div className="r-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 54, alignItems: "center" }}>
            <Reveal>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(110,19,22,.15)" }}>
                <img src="/mbanner.jpg" alt="AHV Fort Hare Conference" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ display: "inline-flex", background: "var(--ahv-gold-band)", borderRadius: 999, padding: "7px 16px", fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-oxblood-deep)", marginBottom: 22 }}>Dec 2025</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.12, margin: "0 0 10px", color: "var(--ahv-ink)" }}>Fort Hare IKS Conference</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontSize: 14, color: "#7a635e", marginBottom: 20 }}>
                <MapPin size={15} />
                <span>Alice, Eastern Cape, South Africa</span>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "#5e4742", margin: "0 0 28px" }}>The annual Indigenous Knowledge Systems Conference hosted at the University of Fort Hare. Imboni Dr. uZwi-Lezwe Radebe returns as keynote speaker, continuing AHV's partnership with South Africa's most historic institution.</p>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-crimson)", color: "var(--ahv-cream)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "16px 28px", borderRadius: 999 }}>Register Interest <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "90px 40px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 40 }}>Upcoming</div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {upcoming.map((e, i) => (
              <Reveal key={e.title}>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: 28, padding: "26px 0", borderTop: "1px solid rgba(110,19,22,.14)", alignItems: "start" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em", color: "var(--ahv-crimson)" }}>{e.date}</div>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 21, margin: "0 0 5px", color: "var(--ahv-ink)" }}>{e.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-hanken)", fontSize: 13, color: "#7a635e", marginBottom: 10 }}>
                      <MapPin size={13} /><span>{e.location}</span>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{e.desc}</p>
                  </div>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ahv-crimson)", fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13, letterSpacing: ".04em", padding: "11px 20px", border: "1.5px solid var(--ahv-crimson)", borderRadius: 999, whiteSpace: "nowrap", textDecoration: "none" }}>Register <ArrowRight size={14} /></Link>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(110,19,22,.14)" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 40px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 40 }}>Past Events</div>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {past.map((e) => (
              <Reveal key={e.title}>
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr auto", gap: 28, padding: "20px 0", borderTop: "1px solid rgba(110,19,22,.1)", alignItems: "center" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontWeight: 600, fontSize: 14, color: "#a08070" }}>{e.date}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 19, margin: "0 0 3px", color: "#5e4742" }}>{e.title}</h3>
                    <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "#a08070" }}>{e.location}</div>
                  </div>
                  <span style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 999, background: "rgba(110,19,22,.08)", color: "#7a635e" }}>Archived</span>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(110,19,22,.1)" }} />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--ahv-oxblood-deep)", padding: "100px 40px", textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.1, margin: "0 0 18px", color: "var(--ahv-gold-soft)" }}>Host or partner with us.</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(245,231,192,.8)", margin: "0 0 34px" }}>Universities, governments, and cultural institutions are welcome to collaborate on events that elevate African indigenous knowledge.</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Get in Touch <ArrowRight size={16} /></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
