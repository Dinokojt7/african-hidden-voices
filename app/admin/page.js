"use client";
import { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, query, orderBy, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "@/lib/firebase";
import Link from "next/link";
import { LogOut, Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";

const TOPICS = [
  "AIS & Economics", "AIS & Governance", "AIS & Philosophy",
  "AIS & Knowledge Systems", "AIS & Social Systems", "AIS Science Division",
  "Revelation & Spiritual Framework", "The PSCB Framework", "Institutional News",
];

function LoginScreen({ onLogin, loading }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--ahv-surface)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#fff", border: "1px solid var(--ahv-border)", borderRadius: 10, padding: "56px 48px", maxWidth: 420, width: "100%", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ahv-gold-deep)", marginBottom: 14 }}>Admin Portal</div>
        <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 30, lineHeight: 1.18, margin: "0 0 8px", color: "var(--ahv-ink)" }}>African Hidden Voices</h1>
        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)", margin: "0 0 36px" }}>Sign in to manage blog posts and research updates.</p>
        <button onClick={onLogin} disabled={loading} style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          background: loading ? "#f0f0f0" : "var(--ahv-ink)", color: "#fff",
          fontFamily: "var(--font-hanken)", fontWeight: 600, fontSize: 14,
          border: "none", borderRadius: 6, padding: "15px 24px", cursor: loading ? "not-allowed" : "pointer",
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
          {loading ? "Signing in…" : "Continue with Google"}
        </button>
        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, color: "var(--ahv-muted)", marginTop: 20, lineHeight: 1.5 }}>
          Access is restricted to authorised admins only. Your Google account must be added to the admins list.
        </p>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setAuthChecked(true);
      if (u) checkAdmin(u.uid);
    });
    return unsub;
  }, []);

  async function checkAdmin(uid) {
    const { getDoc, doc } = await import("firebase/firestore");
    try {
      const snap = await getDoc(doc(db, "admins", uid));
      setIsAdmin(snap.exists());
      if (snap.exists()) loadPosts();
    } catch {
      setIsAdmin(false);
    }
  }

  async function loadPosts() {
    setPostsLoading(true);
    try {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data(), createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? null })));
    } catch (e) {
      console.error(e);
    } finally {
      setPostsLoading(false);
    }
  }

  async function handleLogin() {
    setLoading(true);
    try { await signInWithPopup(auth, googleProvider); } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function togglePublish(post) {
    await updateDoc(doc(db, "posts", post.id), { published: !post.published });
    loadPosts();
  }

  async function deletePost(post) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    await deleteDoc(doc(db, "posts", post.id));
    loadPosts();
  }

  if (!authChecked) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--ahv-surface)" }}>
      <div style={{ fontFamily: "var(--font-hanken)", color: "var(--ahv-muted)" }}>Loading…</div>
    </div>
  );

  if (!user) return <LoginScreen onLogin={handleLogin} loading={loading} />;

  if (!isAdmin) return (
    <div style={{ minHeight: "100vh", background: "var(--ahv-surface)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ background: "#fff", border: "1px solid var(--ahv-border)", borderRadius: 10, padding: "48px", maxWidth: 420, width: "100%", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-spectral)", fontSize: 22, color: "var(--ahv-ink)", marginBottom: 10 }}>Access denied</div>
        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)", margin: "0 0 24px" }}>
          {user.email} is not in the admins list. Contact your system administrator.
        </p>
        <button onClick={() => signOut(auth)} style={{ fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-gold-deep)", background: "none", border: "none", cursor: "pointer" }}>
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--ahv-surface)" }}>
      {/* Admin nav */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--ahv-border)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ fontFamily: "var(--font-spectral)", fontSize: 18, fontWeight: 600, color: "var(--ahv-ink)" }}>AHV Admin</div>
          <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)" }}>Signed in as {user.displayName}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Link href="/" target="_blank" style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, color: "var(--ahv-muted)" }}>View site ↗</Link>
          <button onClick={() => signOut(auth)} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 600, color: "var(--ahv-muted)", background: "none", border: "1px solid var(--ahv-border)", borderRadius: 4, padding: "6px 12px", cursor: "pointer" }}>
            <LogOut size={13} /> Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 40px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 32, margin: "0 0 4px", color: "var(--ahv-ink)" }}>Blog Posts</h1>
            <p style={{ fontFamily: "var(--font-hanken)", fontSize: 13.5, color: "var(--ahv-muted)", margin: 0 }}>{posts.length} post{posts.length !== 1 ? "s" : ""} total</p>
          </div>
          <Link href="/admin/new" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 13.5, padding: "12px 22px", borderRadius: 4 }}>
            <Plus size={16} strokeWidth={2.5} /> New Post
          </Link>
        </div>

        {/* Posts table */}
        <div style={{ background: "#fff", border: "1px solid var(--ahv-border)", borderRadius: 8, overflow: "hidden" }}>
          {postsLoading ? (
            <div style={{ padding: "48px", textAlign: "center", fontFamily: "var(--font-hanken)", color: "var(--ahv-muted)" }}>Loading posts…</div>
          ) : posts.length === 0 ? (
            <div style={{ padding: "64px 48px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-spectral)", fontSize: 20, color: "var(--ahv-muted)", marginBottom: 8 }}>No posts yet.</div>
              <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)" }}>Create your first post to get started.</p>
            </div>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--ahv-border)", background: "var(--ahv-surface)" }}>
                  {["Title", "Topic", "Status", "Date", "Actions"].map((h) => (
                    <th key={h} style={{ fontFamily: "var(--font-hanken)", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ahv-muted)", textAlign: "left", padding: "12px 20px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {posts.map((post, i) => (
                  <tr key={post.id} style={{ borderBottom: i < posts.length - 1 ? "1px solid var(--ahv-border)" : "none" }}>
                    <td style={{ padding: "16px 20px" }}>
                      <div style={{ fontFamily: "var(--font-spectral)", fontWeight: 600, fontSize: 16, color: "var(--ahv-ink)", marginBottom: 2 }}>{post.title}</div>
                      {post.excerpt && <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)", maxWidth: 340, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post.excerpt}</div>}
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      {post.topic && <span style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, color: "var(--ahv-muted)", background: "var(--ahv-surface)", border: "1px solid var(--ahv-border)", borderRadius: 3, padding: "3px 9px" }}>{post.topic}</span>}
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <span style={{ fontFamily: "var(--font-hanken)", fontSize: 11.5, fontWeight: 600, color: post.published ? "#16a34a" : "var(--ahv-muted)", background: post.published ? "#f0fdf4" : "var(--ahv-surface)", border: `1px solid ${post.published ? "#86efac" : "var(--ahv-border)"}`, borderRadius: 3, padding: "3px 9px" }}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td style={{ padding: "16px 20px", fontFamily: "var(--font-hanken)", fontSize: 13, color: "var(--ahv-muted)", whiteSpace: "nowrap" }}>
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Link href={`/admin/edit/${post.id}`} title="Edit" style={{ display: "inline-flex", padding: 7, border: "1px solid var(--ahv-border)", borderRadius: 4, color: "var(--ahv-muted)" }}>
                          <Edit2 size={14} />
                        </Link>
                        <button onClick={() => togglePublish(post)} title={post.published ? "Unpublish" : "Publish"} style={{ display: "inline-flex", padding: 7, border: "1px solid var(--ahv-border)", borderRadius: 4, background: "none", cursor: "pointer", color: post.published ? "#16a34a" : "var(--ahv-muted)" }}>
                          {post.published ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                        <button onClick={() => deletePost(post)} title="Delete" style={{ display: "inline-flex", padding: 7, border: "1px solid #fecaca", borderRadius: 4, background: "none", cursor: "pointer", color: "#dc2626" }}>
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
