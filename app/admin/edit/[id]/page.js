"use client";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import PostEditor from "@/components/PostEditor";
import { useParams } from "next/navigation";

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoc(doc(db, "posts", id)).then((snap) => {
      if (snap.exists()) setPost({ id: snap.id, ...snap.data(), createdAt: snap.data().createdAt?.toDate?.()?.toISOString() ?? null });
      setLoading(false);
    });
  }, [id]);

  if (loading) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--ahv-surface)", fontFamily: "var(--font-hanken)", color: "var(--ahv-muted)" }}>
      Loading post…
    </div>
  );

  if (!post) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--ahv-surface)", fontFamily: "var(--font-hanken)", color: "var(--ahv-muted)" }}>
      Post not found.
    </div>
  );

  return <PostEditor existingPost={post} />;
}
