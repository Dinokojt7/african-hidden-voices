import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const revalidate = 60;

async function getPosts() {
  try {
    const q = query(
      collection(db, "posts"),
      where("published", "==", true),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? null }));
  } catch {
    return [];
  }
}

export const metadata = { title: "News & Research Blog — African Hidden Voices" };

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <header style={{ background: "#fff", borderBottom: "1px solid var(--ahv-border)", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 14 }}>News & Research Blog</div>
          <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.1, margin: "0 0 14px", color: "var(--ahv-ink)" }}>
            AIS research, commentary, and institutional updates.
          </h1>
          <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, lineHeight: 1.65, color: "var(--ahv-muted)", margin: 0, maxWidth: 580 }}>
            Long-form research notes, field reports, and institutional news from the African Hidden Voices research team.
          </p>
        </div>
      </header>

      <section style={{ background: "var(--ahv-surface)", padding: "64px 40px", minHeight: 400 }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontFamily: "var(--font-spectral)", fontSize: 22, color: "var(--ahv-muted)", marginBottom: 10 }}>No posts published yet.</div>
              <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)" }}>Check back soon — research notes are being prepared.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px,1fr))", gap: 2, border: "1px solid var(--ahv-border)", borderRadius: 8, overflow: "hidden", background: "var(--ahv-border)" }}>
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} style={{ display: "block", background: "#fff", padding: "32px 32px 28px" }}>
                  {post.topic && (
                    <div style={{ display: "inline-block", fontFamily: "var(--font-hanken)", fontSize: 11, color: "var(--ahv-muted)", background: "var(--ahv-surface)", border: "1px solid var(--ahv-border)", borderRadius: 3, padding: "3px 9px", marginBottom: 14 }}>
                      {post.topic}
                    </div>
                  )}
                  <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 500, fontSize: "clamp(18px,2vw,22px)", lineHeight: 1.22, margin: "0 0 12px", color: "var(--ahv-ink)" }}>{post.title}</h2>
                  {post.excerpt && <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, lineHeight: 1.65, color: "var(--ahv-muted)", margin: "0 0 18px" }}>{post.excerpt}</p>}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)" }}>
                      {post.author && `${post.author} · `}
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : ""}
                    </span>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-hanken)", fontSize: 12.5, fontWeight: 600, color: "var(--ahv-gold-deep)" }}>
                      Read <ArrowRight size={12} strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
