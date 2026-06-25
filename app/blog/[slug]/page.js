import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const revalidate = 60;

async function getPost(slug) {
  try {
    const q = query(collection(db, "posts"), where("slug", "==", slug), where("published", "==", true), limit(1));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? null };
  } catch {
    return null;
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <>
      <header style={{ background: "#fff", borderBottom: "1px solid var(--ahv-border)", padding: "56px 40px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, color: "var(--ahv-muted)", marginBottom: 24 }}>
            ← Back to blog
          </Link>
          {post.topic && (
            <div style={{ display: "inline-flex", fontFamily: "var(--font-hanken)", fontSize: 11, color: "var(--ahv-muted)", background: "var(--ahv-surface)", border: "1px solid var(--ahv-border)", borderRadius: 3, padding: "3px 9px", marginBottom: 18 }}>
              {post.topic}
            </div>
          )}
          <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: "clamp(26px,4vw,44px)", lineHeight: 1.12, margin: "0 0 16px", color: "var(--ahv-ink)" }}>{post.title}</h1>
          <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "var(--ahv-muted)" }}>
            {post.author && <span>{post.author}</span>}
            {post.author && date && <span style={{ margin: "0 8px" }}>·</span>}
            {date && <span>{date}</span>}
          </div>
        </div>
      </header>

      {post.coverImage && (
        <div style={{ background: "var(--ahv-surface)", borderBottom: "1px solid var(--ahv-border)", padding: "0 40px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ aspectRatio: "16/7", overflow: "hidden", borderRadius: "0 0 8px 8px", border: "1px solid var(--ahv-border)", borderTop: "none" }}>
              <img src={post.coverImage} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      )}

      <section style={{ background: "var(--ahv-surface)", padding: "64px 40px 96px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {post.excerpt && (
            <p style={{ fontSize: 20, lineHeight: 1.65, color: "var(--ahv-ink)", fontFamily: "var(--font-spectral)", fontStyle: "italic", borderLeft: "3px solid var(--ahv-gold)", paddingLeft: 24, marginBottom: 40 }}>{post.excerpt}</p>
          )}
          <div style={{ fontSize: 17.5, lineHeight: 1.85, color: "var(--ahv-ink-soft)", fontFamily: "var(--font-spectral)", whiteSpace: "pre-wrap" }}>
            {post.content}
          </div>
        </div>
      </section>

      <div style={{ background: "#fff", borderTop: "1px solid var(--ahv-border)", padding: "48px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-muted)" }}>
            ← All posts
          </Link>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 13, padding: "11px 22px", borderRadius: 4 }}>
            Collaborate with AHV <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </>
  );
}
