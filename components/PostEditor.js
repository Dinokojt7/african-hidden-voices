"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const TOPICS = [
  "", "AIS & Economics", "AIS & Governance", "AIS & Philosophy",
  "AIS & Knowledge Systems", "AIS & Social Systems", "AIS Science Division",
  "Revelation & Spiritual Framework", "The PSCB Framework", "Institutional News",
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const INPUT = {
  width: "100%", fontFamily: "var(--font-hanken)", fontSize: 14,
  background: "var(--ahv-surface)", border: "1px solid var(--ahv-border)",
  borderRadius: 6, padding: "11px 14px", color: "var(--ahv-ink)", outline: "none",
};

export default function PostEditor({ existingPost }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: existingPost?.title ?? "",
    slug: existingPost?.slug ?? "",
    excerpt: existingPost?.excerpt ?? "",
    content: existingPost?.content ?? "",
    topic: existingPost?.topic ?? "",
    author: existingPost?.author ?? "",
    coverImage: existingPost?.coverImage ?? "",
    published: existingPost?.published ?? false,
  });

  function set(field, value) {
    setForm((f) => {
      const next = { ...f, [field]: value };
      if (field === "title" && !existingPost) next.slug = slugify(value);
      return next;
    });
  }

  async function handleSave(publish) {
    if (!form.title.trim() || !form.slug.trim()) return alert("Title and slug are required.");
    setSaving(true);
    try {
      const data = { ...form, published: publish ?? form.published };
      if (existingPost) {
        await updateDoc(doc(db, "posts", existingPost.id), { ...data, updatedAt: serverTimestamp() });
      } else {
        await addDoc(collection(db, "posts"), { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      }
      router.push("/admin");
    } catch (e) {
      console.error(e);
      alert("Save failed: " + e.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--ahv-surface)" }}>
      {/* Top bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--ahv-border)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/admin" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-muted)" }}>
          <ArrowLeft size={15} /> Back to posts
        </Link>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => handleSave(false)} disabled={saving} style={{ fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 13, color: "var(--ahv-muted)", background: "none", border: "1px solid var(--ahv-border)", borderRadius: 4, padding: "8px 18px", cursor: "pointer" }}>
            Save draft
          </button>
          <button onClick={() => handleSave(true)} disabled={saving} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 13, background: "var(--ahv-gold)", color: "var(--ahv-dark)", border: "none", borderRadius: 4, padding: "8px 20px", cursor: saving ? "not-allowed" : "pointer" }}>
            <Save size={14} /> {saving ? "Saving…" : "Publish"}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 40px" }}>
        <h2 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 28, margin: "0 0 32px", color: "var(--ahv-ink)" }}>
          {existingPost ? "Edit post" : "New post"}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {/* Title */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Title *</label>
            <input value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="Post title" style={{ ...INPUT, fontSize: 18, fontFamily: "var(--font-spectral)" }} />
          </div>

          {/* Slug */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Slug * <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(URL path — auto-generated from title)</span></label>
            <input value={form.slug} onChange={(e) => set("slug", slugify(e.target.value))} placeholder="post-url-slug" style={{ ...INPUT, fontFamily: "monospace", fontSize: 13 }} />
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, color: "var(--ahv-muted)", marginTop: 5 }}>
              Will be live at: /blog/{form.slug || "your-slug"}
            </div>
          </div>

          {/* 2-col: author + topic */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Author</label>
              <input value={form.author} onChange={(e) => set("author", e.target.value)} placeholder="e.g. AHV Research Team" style={INPUT} />
            </div>
            <div>
              <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Topic</label>
              <select value={form.topic} onChange={(e) => set("topic", e.target.value)} style={{ ...INPUT, appearance: "none" }}>
                {TOPICS.map((t) => <option key={t} value={t}>{t || "— Select topic —"}</option>)}
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Excerpt <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(shown in blog listing and as pull quote)</span></label>
            <textarea value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} placeholder="A short summary or compelling opening sentence…" rows={3} style={{ ...INPUT, resize: "vertical" }} />
          </div>

          {/* Cover image */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Cover image URL <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
            <input value={form.coverImage} onChange={(e) => set("coverImage", e.target.value)} placeholder="https://…" style={INPUT} />
          </div>

          {/* Content */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 8 }}>Content *</label>
            <textarea value={form.content} onChange={(e) => set("content", e.target.value)} placeholder="Write your post here…" rows={24} style={{ ...INPUT, resize: "vertical", fontFamily: "var(--font-spectral)", fontSize: 16, lineHeight: 1.8 }} />
            <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, color: "var(--ahv-muted)", marginTop: 5 }}>Plain text — line breaks are preserved on the public page.</div>
          </div>

          {/* Bottom actions */}
          <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
            <button onClick={() => handleSave(false)} disabled={saving} style={{ fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14, color: "var(--ahv-muted)", background: "#fff", border: "1px solid var(--ahv-border)", borderRadius: 4, padding: "12px 24px", cursor: "pointer" }}>
              Save as draft
            </button>
            <button onClick={() => handleSave(true)} disabled={saving} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, background: "var(--ahv-gold)", color: "var(--ahv-dark)", border: "none", borderRadius: 4, padding: "12px 28px", cursor: saving ? "not-allowed" : "pointer" }}>
              <Save size={15} /> {saving ? "Saving…" : "Publish post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
