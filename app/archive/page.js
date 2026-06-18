"use client";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import Reveal from "@/components/Reveal";

const people = [
  { name: "Prophet Elliot Kamwana", categories: ["Prophets"], desc: "Born c.1882 near Nkhata Bay, Lake Malawi. Tonga prophet and founder of the Watchtower movement in Central Africa.", img: "/Elliot.jpg" },
  { name: "Prophet Vusamazulu Credo Mutwa", categories: ["Southern Africa", "Prophets"], desc: "Born 1921 in KwaZulu-Natal. Renowned Zulu sangoma, author and keeper of African spiritual wisdom.", img: "/credo.jpg" },
  { name: "Prophetess Alice Lenshina Mulenga", categories: ["Central Africa", "Prophets"], desc: "Born 1920 in Chinsali, Northern Rhodesia. Founder of the Lumpa Church — one of Africa's most powerful female prophets.", img: "/c4copy.jpg" },
  { name: "Johanne Masowe", categories: ["Southern Africa"], desc: "Born Shoniwa Masedza Tandi Moyo, 1914, Gandanzara village, Makoni district, Zimbabwe. Founded the Apostolic Church in Zion.", img: "/johanne.jpg" },
  { name: "Isaiah Shembe", categories: ["Southern Africa"], desc: "Born 1870, KwaZulu-Natal. Founder of the Nazareth Baptist Church, one of Africa's largest indigenous churches.", img: "/1.jpg" },
  { name: "Simon Kimbangu", categories: ["Central Africa"], desc: "Born 1887, Congo. Founder of the great Kimbanguist spiritual movement, imprisoned by colonial powers for his faith.", img: "/Untitled-22.jpg" },
  { name: "Mantsopa Anna Makhetha", categories: ["Southern Africa", "Prophets"], desc: "1793–1908, Lesotho. The most renowned prophetic voice of Southern Africa, whose predictions span generations.", img: "/2.jpg" },
  { name: "Nehemiah Tile", categories: ["East Africa"], desc: "1850–1891, Eastern Cape. Founder of the Tembu National Church — the first independent African church in South Africa.", img: "/sli3.jpg" },
  { name: "Nontetha Nkwenkwe", categories: ["Kings"], desc: "1875–1935, Eastern Cape. Xhosa prophetess imprisoned by colonial authorities for preaching African spiritual renewal.", img: "/Untitled-25.jpg" },
];

const filters = ["All", "Southern Africa", "East Africa", "Central Africa", "Prophets", "Kings"];

const steps = [
  { n: "I", title: "Locate", body: "Our researchers travel across the continent to find IImboni whose stories were deliberately erased." },
  { n: "II", title: "Document", body: "Oral testimonies, archival records, and field interviews are gathered and preserved." },
  { n: "III", title: "Honour", body: "Each voice is returned to the record — published, celebrated, and taught in full context." },
];

export default function Archive() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const visible = people.filter((p) => {
    const matchFilter = activeFilter === "All" || p.categories.includes(activeFilter);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <header style={{ padding: "84px 40px 70px", borderBottom: "1px solid rgba(110,19,22,.1)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 20 }}>The Archive</div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(36px,5vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em", margin: "0 0 24px", color: "var(--ahv-ink)", maxWidth: 800 }}>The recovered voices of Africa.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#5e4742", maxWidth: 640, margin: "0 0 36px" }}>A living archive of IImboni, prophets, kings, and spiritual leaders whose stories were buried. Each entry is the result of field research, oral testimony, and academic collaboration.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--ahv-parchment-2)", border: "1.5px solid rgba(110,19,22,.2)", borderRadius: 10, padding: "0 18px", maxWidth: 500 }}>
              <Search size={18} color="var(--ahv-muted,#7a635e)" />
              <input
                type="text"
                placeholder="Search the archive…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontFamily: "var(--font-hanken)", fontSize: 15, color: "var(--ahv-ink)", padding: "16px 0" }}
              />
            </div>
          </Reveal>
        </div>
      </header>

      <section style={{ padding: "60px 40px 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                fontFamily: "var(--font-hanken)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".06em",
                padding: "10px 20px",
                borderRadius: 999,
                border: activeFilter === f ? "1.5px solid var(--ahv-crimson)" : "1.5px solid rgba(110,19,22,.25)",
                background: activeFilter === f ? "var(--ahv-crimson)" : "transparent",
                color: activeFilter === f ? "var(--ahv-cream)" : "var(--ahv-ink)",
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 40px 110px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {visible.length === 0 ? (
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 16, color: "#7a635e" }}>No voices found matching your search.</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 22 }}>
              {visible.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <Link href="#" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                    <div style={{ background: "var(--ahv-parchment-2)", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(110,19,22,.12)", transition: "transform .2s" }}>
                      <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                        <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      </div>
                      <div style={{ padding: "20px 22px" }}>
                        <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 20, lineHeight: 1.2, margin: "0 0 5px", color: "var(--ahv-ink)" }}>{p.name}</h3>
                        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "#7a635e", margin: 0 }}>{p.desc}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "var(--ahv-parchment-2)", padding: "110px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: 50, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ahv-crimson)", marginBottom: 18 }}>Methodology</div>
              <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.12, margin: 0, color: "var(--ahv-ink)" }}>How we restore each voice.</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 28 }}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-cinzel)", fontSize: 32, letterSpacing: ".06em", color: "var(--ahv-gold)", marginBottom: 14 }}>{s.n}</div>
                  <h3 style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 22, margin: "0 0 10px", color: "var(--ahv-ink)" }}>{s.title}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "#5e4742", margin: 0 }}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 40px" }}>
        <Reveal>
          <div style={{ maxWidth: 900, margin: "0 auto", background: "var(--ahv-oxblood-deep)", borderRadius: 16, padding: "64px 48px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(26px,4vw,36px)", lineHeight: 1.15, margin: "0 0 16px", color: "var(--ahv-gold-soft)" }}>Do you know a hidden voice?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(245,231,192,.8)", margin: "0 0 32px" }}>If you carry knowledge of an IMboni, prophet, or spiritual leader whose work has been overlooked — we want to hear from you.</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ahv-gold)", color: "var(--ahv-oxblood-deep)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, letterSpacing: ".04em", padding: "17px 32px", borderRadius: 999 }}>Submit a Voice</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
