"use client";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { auth, googleProvider, db } from "@/lib/firebase";
import Link from "next/link";
import { LogOut, User, BookOpen, Bell, ArrowRight } from "lucide-react";

const CARD = { background: "#fff", border: "2px solid var(--ahv-border-strong)", borderRadius: 10, padding: "28px 32px" };
const TOPICS = [
  "AIS & Economics", "AIS & Governance", "AIS & Philosophy",
  "AIS & Knowledge Systems", "AIS & Social Systems", "AIS Science Division",
  "Revelation & Spiritual Framework", "The PSCB Framework", "Institutional News",
];

function LoginPrompt({ onLogin, loading }) {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ ...CARD, maxWidth: 420, width: "100%", textAlign: "center", padding: "52px 44px" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--ahv-surface-2)", border: "2px solid var(--ahv-border-strong)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <User size={24} color="var(--ahv-muted)" />
        </div>
        <h1 style={{ fontFamily: "var(--font-spectral)", fontWeight: 400, fontSize: 28, margin: "0 0 10px", color: "var(--ahv-ink)" }}>My Account</h1>
        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, lineHeight: 1.65, color: "var(--ahv-muted)", margin: "0 0 32px" }}>
          Sign in to manage your newsletter preferences, save research, and access your AHV profile.
        </p>
        <button onClick={onLogin} disabled={loading} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: loading ? "var(--ahv-surface)" : "var(--ahv-red)", color: "#fff", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, border: "none", borderRadius: 6, padding: "15px 24px", cursor: loading ? "not-allowed" : "pointer" }}>
          <svg width="18" height="18" viewBox="0 0 18 18"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
          {loading ? "Signing in…" : "Continue with Google"}
        </button>
        <p style={{ fontFamily: "var(--font-hanken)", fontSize: 12, color: "var(--ahv-muted)", marginTop: 16 }}>
          Don't have an account? Signing in creates one automatically.
        </p>
      </div>
    </div>
  );
}

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [subData, setSubData] = useState(null);
  const [savedTopics, setSavedTopics] = useState([]);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthChecked(true);
      if (u) loadSubscriberData(u.email);
    });
    return unsub;
  }, []);

  async function loadSubscriberData(email) {
    try {
      const q = query(collection(db, "subscribers"), where("email", "==", email.toLowerCase()));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const data = snap.docs[0].data();
        setSubData({ id: snap.docs[0].id, ...data });
        setSavedTopics(data.topics || []);
      }
    } catch (e) { console.error(e); }
  }

  async function saveTopics() {
    if (!subData) return;
    setSaving(true);
    try {
      await updateDoc(doc(db, "subscribers", subData.id), { topics: savedTopics });
      setSavedMsg("Preferences saved.");
      setTimeout(() => setSavedMsg(""), 3000);
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  }

  async function handleLogin() {
    setLoading(true);
    try { await signInWithPopup(auth, googleProvider); } catch { }
    finally { setLoading(false); }
  }

  if (!authChecked) return <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-hanken)", color: "var(--ahv-muted)" }}>Loading…</div>;
  if (!user) return <LoginPrompt onLogin={handleLogin} loading={loading} />;

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "newsletters", label: "Newsletters", icon: Bell },
    { id: "saved", label: "Saved Research", icon: BookOpen },
  ];

  return (
    <>
      {/* Account header */}
      <header style={{ background: "var(--ahv-red)", borderBottom: "4px solid var(--ahv-gold)", padding: "40px 40px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {user.photoURL && <img src={user.photoURL} alt="" style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid var(--ahv-gold)" }} />}
              <div>
                <div style={{ fontFamily: "var(--font-spectral)", fontSize: 22, color: "#fff", marginBottom: 2 }}>{user.displayName}</div>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 13, color: "rgba(255,255,255,.55)" }}>{user.email}</div>
              </div>
            </div>
            <button onClick={() => signOut(auth)} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.6)", background: "none", border: "1px solid rgba(255,255,255,.18)", borderRadius: 4, padding: "9px 16px", cursor: "pointer" }}>
              <LogOut size={13} /> Sign out
            </button>
          </div>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 0 }}>
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setActiveTab(id)} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 600, color: activeTab === id ? "#fff" : "rgba(255,255,255,.5)", background: "none", border: "none", borderBottom: activeTab === id ? "3px solid var(--ahv-gold)" : "3px solid transparent", padding: "0 20px 14px", cursor: "pointer" }}>
                <Icon size={15} /> {label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section style={{ background: "var(--ahv-page)", padding: "48px 40px", minHeight: "50vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {activeTab === "profile" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="r-two-col">
              <div style={CARD}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 20 }}>Account Details</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[["Full name", user.displayName || "—"], ["Email", user.email], ["Joined via", "Google"], ["Newsletter", subData ? "Subscribed" : "Not subscribed"]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "11px 0", borderBottom: "1px solid var(--ahv-border)" }}>
                      <span style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)" }}>{k}</span>
                      <span style={{ fontFamily: "var(--font-hanken)", fontSize: 14, fontWeight: 600, color: "var(--ahv-ink)" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {!subData && (
                  <div style={{ ...CARD, borderTop: "4px solid var(--ahv-gold)" }}>
                    <div style={{ fontFamily: "var(--font-spectral)", fontSize: 18, color: "var(--ahv-ink)", marginBottom: 10 }}>Subscribe to research updates</div>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, lineHeight: 1.65, color: "var(--ahv-muted)", margin: "0 0 18px" }}>You're not yet subscribed to AHV newsletters.</p>
                    <Link href="/newsletters" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 4 }}>
                      Subscribe <ArrowRight size={14} strokeWidth={2.2} />
                    </Link>
                  </div>
                )}
                <div style={CARD}>
                  <div style={{ fontFamily: "var(--font-spectral)", fontSize: 18, color: "var(--ahv-ink)", marginBottom: 10 }}>Support AHV Research</div>
                  <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, lineHeight: 1.65, color: "var(--ahv-muted)", margin: "0 0 18px" }}>Help advance African Indigenous Spirituality as a global academic discipline.</p>
                  <Link href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-red)", color: "#fff", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 4 }}>
                    Donate <ArrowRight size={14} strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "newsletters" && (
            <div style={{ maxWidth: 680 }}>
              <div style={CARD}>
                <div style={{ fontFamily: "var(--font-hanken)", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ahv-muted)", marginBottom: 20 }}>Newsletter Preferences</div>
                {!subData ? (
                  <div style={{ textAlign: "center", padding: "24px 0" }}>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 15, color: "var(--ahv-muted)", marginBottom: 20 }}>You're not subscribed yet.</p>
                    <Link href="/newsletters" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 4 }}>
                      Subscribe now <ArrowRight size={14} strokeWidth={2.2} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)", marginBottom: 20 }}>Select the topics you'd like to receive updates on.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24 }}>
                      {TOPICS.map((t) => {
                        const on = savedTopics.includes(t);
                        return (
                          <button key={t} type="button" onClick={() => setSavedTopics((prev) => on ? prev.filter((x) => x !== t) : [...prev, t])} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: on ? "var(--ahv-gold-band)" : "var(--ahv-surface)", border: on ? "2px solid var(--ahv-gold)" : "2px solid var(--ahv-border)", borderRadius: 6, cursor: "pointer", textAlign: "left", fontFamily: "var(--font-hanken)", fontSize: 13, fontWeight: 600, color: "var(--ahv-ink)" }}>
                            <div style={{ width: 16, height: 16, borderRadius: 3, border: on ? "none" : "2px solid var(--ahv-border-strong)", background: on ? "var(--ahv-gold)" : "transparent", flexShrink: 0 }} />
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    {savedMsg && <div style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "#16a34a", marginBottom: 12 }}>{savedMsg}</div>}
                    <button onClick={saveTopics} disabled={saving} style={{ background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, border: "none", borderRadius: 4, padding: "12px 24px", cursor: saving ? "not-allowed" : "pointer" }}>
                      {saving ? "Saving…" : "Save preferences"}
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === "saved" && (
            <div style={{ ...CARD, textAlign: "center", padding: "56px 48px" }}>
              <BookOpen size={36} color="var(--ahv-border-strong)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
              <div style={{ fontFamily: "var(--font-spectral)", fontSize: 20, color: "var(--ahv-muted)", marginBottom: 10 }}>No saved research yet.</div>
              <p style={{ fontFamily: "var(--font-hanken)", fontSize: 14, color: "var(--ahv-muted)", maxWidth: 360, margin: "0 auto 24px" }}>Browse the research hub or IImboni Database and save items to find them here.</p>
              <Link href="/research" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ahv-gold)", color: "var(--ahv-dark)", fontFamily: "var(--font-hanken)", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 4 }}>
                Browse research <ArrowRight size={14} strokeWidth={2.2} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
